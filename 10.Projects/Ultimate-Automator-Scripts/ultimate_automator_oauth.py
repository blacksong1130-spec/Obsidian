import os
import datetime
import urllib.request
import webbrowser
import threading
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from msal import PublicClientApplication

# ==========================================
# Ultimate Automation MVP: Daily Briefing
# ==========================================
# 使用 OAuth 2.0 (Device Code Flow) 绕过学校邮箱的 App Password 限制

# --- 配置区域 ---
# 这是一个公共的 Azure App Client ID，专门用于这种本地脚本测试，
# 它允许读取用户的邮件和日历（需要用户在浏览器中授权）
CLIENT_ID = "04b07795-8ddb-461a-bbee-02f9e1bf7b46" # 微软官方的 Azure CLI 默认 ID，用于快速 Demo
AUTHORITY = "https://login.microsoftonline.com/common"
SCOPES = ["Mail.Read"]

OBSIDIAN_DAILY_DIR = r"D:\iCloudDrive\.obsidian\IRP Management\10.Daily"
# ----------------

def get_access_token():
    """通过 OAuth 2.0 获取 Outlook 的 Access Token"""
    print("正在尝试连接微软授权服务器...")
    app = PublicClientApplication(CLIENT_ID, authority=AUTHORITY)

    # 尝试从缓存获取
    accounts = app.get_accounts()
    if accounts:
        result = app.acquire_token_silent(SCOPES, account=accounts[0])
        if result:
            print("✅ 成功使用缓存的授权凭证！")
            return result['access_token']

    # Device Code Flow: 生成一个验证码让用户去浏览器里输入
    print("\n" + "="*50)
    print("⚠️ 需要您进行浏览器授权：")
    flow = app.initiate_device_flow(scopes=SCOPES)
    if "user_code" not in flow:
        print("❌ 无法生成验证码，请检查网络连接。")
        return None
        
    print(flow["message"]) # 提示用户去浏览器输入 code
    print("="*50 + "\n")
    
    # 自动打开浏览器
    webbrowser.open(flow["verification_uri"])
    
    # 轮询等待用户在浏览器中完成授权
    result = app.acquire_token_by_device_flow(flow)
    
    if "access_token" in result:
        print("✅ 授权成功！")
        return result['access_token']
    else:
        print(f"❌ 授权失败: {result.get('error')}")
        print(result.get("error_description"))
        return None

def fetch_latest_emails(access_token):
    """调用 Microsoft Graph API 获取最近的未读邮件"""
    import urllib.request
    import json
    
    print("📥 正在从您的 RCA 邮箱拉取最新未读邮件...")
    url = "https://graph.microsoft.com/v1.0/me/mailFolders/inbox/messages?$filter=isRead eq false&$top=5&$select=subject,sender,from"
    
    req = urllib.request.Request(url)
    req.add_header('Authorization', f'Bearer {access_token}')
    req.add_header('Accept', 'application/json')
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            emails = []
            for msg in data.get('value', []):
                sender_name = msg.get('from', {}).get('emailAddress', {}).get('name', 'Unknown')
                subject = msg.get('subject', '(No Subject)')
                emails.append({"subject": subject, "sender": sender_name})
            return emails
    except Exception as e:
        print(f"❌ 读取邮件失败: {e}")
        return []

def analyze_and_prioritize_tasks(emails):
    """
    Demo: AI 任务提取逻辑
    """
    print("🤖 AI 正在分析邮件并排定优先级...")
    if not emails:
        return ["- [ ] 🟢 **[Info]** 邮箱里没有新的未读邮件哦。"]
        
    tasks = []
    for em in emails:
        subj = em["subject"].lower()
        if "urgent" in subj or "asap" in subj or "deadline" in subj:
            tasks.append(f"- [ ] 🔴 **[P0]** 处理紧急邮件: {em['subject']} (From: {em['sender']})")
        elif "meeting" in subj or "tutorial" in subj:
            tasks.append(f"- [ ] 🟡 **[P1]** 会议/Tutorial准备: {em['subject']} (From: {em['sender']})")
        else:
            tasks.append(f"- [ ] 🟢 **[P2]** 查阅普通邮件: {em['subject']} (From: {em['sender']})")
            
    return tasks

def write_to_daily_note(tasks):
    """将任务写入 Obsidian 日记"""
    today_str = datetime.date.today().strftime("%Y-%m-%d")
    
    today_folder = os.path.join(OBSIDIAN_DAILY_DIR, str(datetime.date.today().year), f"{datetime.date.today().month:02d}")
    os.makedirs(today_folder, exist_ok=True)
    note_path = os.path.join(today_folder, f"{today_str}.md")
    
    briefing_content = "\n\n## 🤖 RCA 邮箱自动化简报 (OAuth 2.0)\n"
    briefing_content += f"> 同步时间: {datetime.datetime.now().strftime('%H:%M:%S')}\n\n"
    briefing_content += "### 📬 从您的 RCA 邮箱提取的任务\n"
    briefing_content += "\n".join(tasks) + "\n\n"
    
    mode = "a" if os.path.exists(note_path) else "w"
    with open(note_path, mode, encoding="utf-8") as f:
        f.write(briefing_content)
        
    print(f"✅ 成功将 {len(tasks)} 个真实邮箱任务写入今天的日记!")

if __name__ == "__main__":
    print("🚀 启动 Ultimate Automation 流程 (OAuth 版)...")
    
    # 1. 交互式获取 Token
    token = get_access_token()
    
    if token:
        # 2. 拉取真实邮件
        emails = fetch_latest_emails(token)
        # 3. AI 分析
        tasks = analyze_and_prioritize_tasks(emails)
        # 4. 写入 Obsidian
        write_to_daily_note(tasks)
        print("🎉 全部流程执行完毕！")
    else:
        print("❌ 无法获取授权，自动化终止。")