"""
RCA Mail → Gmail 首次授权脚本
运行一次，获取 refresh_token，然后存入 GitHub Secrets
"""
import msal
import json

# ← 填入你在 Azure Portal 记下的三个值
CLIENT_ID = "YOUR_CLIENT_ID"
TENANT_ID = "YOUR_TENANT_ID"
CLIENT_SECRET = "YOUR_CLIENT_SECRET"

SCOPES = ["https://graph.microsoft.com/Mail.Read",
          "https://graph.microsoft.com/Mail.ReadWrite"]

app = msal.ConfidentialClientApplication(
    CLIENT_ID,
    authority=f"https://login.microsoftonline.com/{TENANT_ID}",
    client_credential=CLIENT_SECRET,
)

# 设备码流程 —— 会给你一个链接+验证码，在浏览器里登录你的 RCA 账号
flow = app.initiate_device_flow(scopes=SCOPES)
print("\n" + "="*60)
print(flow["message"])
print("="*60)
print("\n登录完成后按回车继续...")
input()

result = app.acquire_token_by_device_flow(flow)

if "access_token" in result:
    print("\n✅ 授权成功！")
    print("\n把以下内容存入 GitHub Secrets (名称: MSAL_TOKEN_CACHE):")
    print("\n" + "="*60)
    # 获取 token cache（包含 refresh_token）
    cache = app.token_cache.serialize()
    print(cache)
    print("="*60)
else:
    print("\n❌ 授权失败:", result.get("error_description"))
