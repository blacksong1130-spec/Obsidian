import os
import datetime
import imaplib
import email
from email.header import decode_header

# ==========================================
# Ultimate Automation MVP: Daily Briefing
# ==========================================
# 功能: 
# 1. 读取最新邮件 (需配置 IMAP)
# 2. 调用大模型提取任务并排序 (需配置 API Key)
# 3. 自动将任务写入今天的 Obsidian 日记中

# --- 配置区域 ---
EMAIL_ACCOUNT = os.getenv("EMAIL_ACCOUNT", "your_email@gmail.com")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "your_app_password")
IMAP_SERVER = "imap.gmail.com"

OBSIDIAN_DAILY_DIR = r"D:\iCloudDrive\.obsidian\IRP Management\10.Daily"
# ----------------

def get_unread_emails_mock():
    """Demo: 模拟获取未读邮件"""
    return [
        {"subject": "[Urgent] Please review the IRP Proposal draft by noon", "sender": "supervisor@rca.ac.uk"},
        {"subject": "Your Amazon order has been shipped", "sender": "amazon@amazon.co.uk"},
        {"subject": "Meeting reminder: Project Sync at 3 PM", "sender": "lily@rca.ac.uk"}
    ]

def analyze_and_prioritize_tasks(emails):
    """
    Demo: 模拟大模型 (LLM) 分析邮件并生成优先级任务。
    在实际生产环境中，这里会调用 Gemini/Claude API。
    Prompt 示例: "请阅读以下邮件，提取我今天必须完成的任务，并按照优先级(P0, P1, P2)排序。"
    """
    print("🤖 正在让 AI 分析邮件并排定优先级...")
    
    tasks = []
    for em in emails:
        if "Urgent" in em["subject"]:
            tasks.append("- [ ] 🔴 **[P0]** Review IRP Proposal draft (from Supervisor)")
        elif "Meeting" in em["subject"]:
            tasks.append("- [ ] 🟡 **[P1]** Attend Project Sync meeting with Lily at 3 PM")
        else:
            tasks.append(f"- [ ] 🟢 **[P2]** Process email: {em['subject']}")
            
    return tasks

def write_to_daily_note(tasks):
    """将生成的任务自动写入今天的 Obsidian 日记"""
    today_str = datetime.date.today().strftime("%Y-%m-%d")
    
    # 适配你的目录结构，通常可能有年份/月份文件夹，这里作为Demo直接写在根目录或对应路径
    # 假设你的日记路径是 10.Daily/2026/04/2026-04-10.md
    today_folder = os.path.join(OBSIDIAN_DAILY_DIR, str(datetime.date.today().year), f"{datetime.date.today().month:02d}")
    os.makedirs(today_folder, exist_ok=True)
    
    note_path = os.path.join(today_folder, f"{today_str}.md")
    
    briefing_content = "\n\n## 🤖 AI 每日自动化简报 (Daily Briefing)\n"
    briefing_content += f"> 生成时间: {datetime.datetime.now().strftime('%H:%M:%S')}\n\n"
    briefing_content += "### 📬 从邮件提取的核心任务\n"
    briefing_content += "\n".join(tasks) + "\n\n"
    
    # 如果文件存在就追加，不存在就创建
    mode = "a" if os.path.exists(note_path) else "w"
    with open(note_path, mode, encoding="utf-8") as f:
        f.write(briefing_content)
        
    print(f"✅ 成功将 {len(tasks)} 个任务写入今天的日记: {note_path}")

if __name__ == "__main__":
    print("🚀 启动 Ultimate Automation 流程...")
    
    # 1. 获取邮件
    emails = get_unread_emails_mock()
    
    # 2. AI 分析优先级
    tasks = analyze_and_prioritize_tasks(emails)
    
    # 3. 写入 Obsidian
    write_to_daily_note(tasks)
    
    print("🎉 自动化流程执行完毕！请打开 Obsidian 查看今天的日记。")
