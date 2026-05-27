"""
RCA Mail → Gmail 自动转发脚本
由 GitHub Actions 每15分钟调用一次
环境变量：CLIENT_ID, TENANT_ID, CLIENT_SECRET, MSAL_TOKEN_CACHE, GMAIL_APP_PASSWORD
"""
import os, json, smtplib, msal, requests
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import base64

# ── 配置 ──────────────────────────────────────────────
CLIENT_ID     = os.environ["CLIENT_ID"]
TENANT_ID     = os.environ["TENANT_ID"]
CLIENT_SECRET = os.environ["CLIENT_SECRET"]
TOKEN_CACHE   = os.environ["MSAL_TOKEN_CACHE"]   # JSON string
GMAIL_PASS    = os.environ["GMAIL_APP_PASSWORD"]
GMAIL_TO      = "blacksong1130@gmail.com"
GMAIL_FROM    = "blacksong1130@gmail.com"
SCOPES        = ["https://graph.microsoft.com/Mail.Read",
                 "https://graph.microsoft.com/Mail.ReadWrite"]

# ── Token 刷新 ────────────────────────────────────────
cache = msal.SerializableTokenCache()
cache.deserialize(TOKEN_CACHE)

app = msal.ConfidentialClientApplication(
    CLIENT_ID,
    authority=f"https://login.microsoftonline.com/{TENANT_ID}",
    client_credential=CLIENT_SECRET,
    token_cache=cache,
)

accounts = app.get_accounts()
if not accounts:
    raise RuntimeError("No cached account. Re-run rca_mail_auth.py locally.")

result = app.acquire_token_silent(SCOPES, account=accounts[0])
if not result or "access_token" not in result:
    raise RuntimeError("Token refresh failed: " + str(result))

# 如果 cache 更新了，输出新的 cache（GitHub Actions 会更新 Secret）
if cache.has_state_changed:
    print("::set-output name=new_token_cache::" + cache.serialize())

token = result["access_token"]
headers = {"Authorization": f"Bearer {token}"}

# ── 拉取未读邮件 ──────────────────────────────────────
resp = requests.get(
    "https://graph.microsoft.com/v1.0/me/messages"
    "?$filter=isRead eq false"
    "&$orderby=receivedDateTime desc"
    "&$top=20"
    "&$select=id,subject,from,receivedDateTime,body,hasAttachments",
    headers=headers
)
resp.raise_for_status()
messages = resp.json().get("value", [])

if not messages:
    print("✅ No unread emails.")
    exit(0)

print(f"📬 Found {len(messages)} unread email(s). Forwarding...")

# ── Gmail SMTP 转发 ───────────────────────────────────
with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    smtp.login(GMAIL_FROM, GMAIL_PASS)

    for msg_data in messages:
        msg_id      = msg_data["id"]
        subject     = msg_data.get("subject", "(no subject)")
        sender      = msg_data["from"]["emailAddress"]
        sender_str  = f"{sender.get('name','')} <{sender['address']}>"
        received    = msg_data["receivedDateTime"]
        body_html   = msg_data["body"]["content"]
        has_attach  = msg_data.get("hasAttachments", False)

        mime = MIMEMultipart("alternative")
        mime["Subject"] = f"[RCA] {subject}"
        mime["From"]    = GMAIL_FROM
        mime["To"]      = GMAIL_TO

        html_body = f"""
        <div style="background:#f5f5f5;padding:12px;border-radius:6px;margin-bottom:16px;font-family:monospace;font-size:13px">
          <b>From:</b> {sender_str}<br>
          <b>Date:</b> {received}<br>
          <b>Subject:</b> {subject}
        </div>
        {body_html}
        """
        mime.attach(MIMEText(html_body, "html"))

        # 附件处理
        if has_attach:
            attach_resp = requests.get(
                f"https://graph.microsoft.com/v1.0/me/messages/{msg_id}/attachments",
                headers=headers
            )
            for att in attach_resp.json().get("value", []):
                if att.get("@odata.type") == "#microsoft.graph.fileAttachment":
                    part = MIMEBase("application", "octet-stream")
                    part.set_payload(base64.b64decode(att["contentBytes"]))
                    encoders.encode_base64(part)
                    part.add_header("Content-Disposition",
                                    f'attachment; filename="{att["name"]}"')
                    mime.attach(part)

        smtp.send_message(mime)
        print(f"  ✉️  Forwarded: {subject[:60]}")

        # 标记为已读（避免重复转发）
        requests.patch(
            f"https://graph.microsoft.com/v1.0/me/messages/{msg_id}",
            headers={**headers, "Content-Type": "application/json"},
            json={"isRead": True}
        )

print(f"✅ Done. {len(messages)} email(s) forwarded to {GMAIL_TO}")
