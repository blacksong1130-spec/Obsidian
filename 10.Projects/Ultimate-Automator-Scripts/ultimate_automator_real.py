import os
import datetime
import imaplib
import email
from email.header import decode_header

# ==========================================
# Ultimate Automation V1.0: 真实邮件拉取
# ==========================================

# 配置个人的 Outlook 邮箱
EMAIL_ACCOUNT = "shywl4@outlook.com" 
# 配置刚才生成的应用密码
EMAIL_PASSWORD = "xkjpsaluzsazkgpr" 
IMAP_SERVER = "imap-mail.outlook.com"

OBSIDIAN_DAILY_DIR = r"D:\iCloudDrive\.obsidian\IRP Management\10.Daily"

def get_real_unread_emails():
    """连接到 Outlook 邮箱拉取最新未读邮件"""
    print(f"🔄 正在连接到邮箱: {EMAIL_ACCOUNT} ...")
    emails_data = []
    try:
        # 连接到 Outlook 的 IMAP 服务器
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, 993)
        mail.login(EMAIL_ACCOUNT, EMAIL_PASSWORD)
        mail.select("inbox")

        # 搜索所有未读邮件
        status, messages = mail.search(None, "UNSEEN")
        if status != "OK":
            print("❌ 没有找到邮件或搜索失败")
            return []

        email_ids = messages[0].split()
        
        if not email_ids:
            print("📭 您的邮箱里目前没有未读邮件。")
            return []
            
        print(f"📥 发现 {len(email_ids)} 封未读邮件，正在提取前 5 封...")

        # 为了避免提取过多，每次最多只处理最新的 5 封未读邮件
        for e_id in email_ids[-5:]:
            res, msg_data = mail.fetch(e_id, "(RFC822)")
            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    
                    # 解码邮件主题
                    subject_header = msg.get("Subject", "(No Subject)")
                    subject, encoding = decode_header(subject_header)[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8", errors='ignore')
                    
                    # 解码发件人
                    from_header = msg.get("From", "Unknown")
                    sender, encoding = decode_header(from_header)[0]
                    if isinstance(sender, bytes):
                        sender = sender.decode(encoding if encoding else "utf-8", errors='ignore')
                        
                    emails_data.append({"subject": subject, "sender": sender})
        
        mail.logout()
        return emails_data
        
    except Exception as e:
        print(f"❌ 邮箱连接失败，错误信息: {e}")
        return []

def analyze_and_prioritize_tasks(emails):
    """AI 分析与优先级排序"""
    print("🤖 AI 正在分析邮件意图并排定优先级...")
    if not emails:
        return ["- [ ] 🟢 **[Info]** 您今天目前没有新的未读邮件，太棒了！"]
        
    tasks = []
    for em in emails:
        subj = em["subject"].lower()
        if "urgent" in subj or "deadline" in subj or "due" in subj or "紧急" in subj:
            tasks.append(f"- [ ] 🔴 **[P0] 紧急任务** \n  > {em['subject']} \n  > *来自: {em['sender']}*")
        elif "meeting" in subj or "tutorial" in subj or "会议" in subj:
            tasks.append(f"- [ ] 🟡 **[P1] 议程准备** \n  > {em['subject']} \n  > *来自: {em['sender']}*")
        else:
            tasks.append(f"- [ ] 🟢 **[P2] 常规查阅** \n  > {em['subject']} \n  > *来自: {em['sender']}*")
            
    return tasks

def write_to_daily_note(tasks):
    """将提取的任务写入今天的日记"""
    today_str = datetime.date.today().strftime("%Y-%m-%d")
    today_folder = os.path.join(OBSIDIAN_DAILY_DIR, str(datetime.date.today().year), f"{datetime.date.today().month:02d}")
    os.makedirs(today_folder, exist_ok=True)
    note_path = os.path.join(today_folder, f"{today_str}.md")
    
    briefing_content = "\n\n## 🤖 AI 真实邮件简报 (Ultimate Automation V1.0)\n"
    briefing_content += f"> 🔄 同步时间: {datetime.datetime.now().strftime('%H:%M:%S')}\n"
    briefing_content += f"> 📧 来源邮箱: {EMAIL_ACCOUNT}\n\n"
    briefing_content += "### 📬 核心任务清单\n\n"
    briefing_content += "\n\n".join(tasks) + "\n\n"
    
    mode = "a" if os.path.exists(note_path) else "w"
    with open(note_path, mode, encoding="utf-8") as f:
        f.write(briefing_content)
        
    print(f"✅ 成功将 {len(tasks)} 个 AI 分析任务追加到今天的日记中: {note_path}")

if __name__ == "__main__":
    print("🚀 启动 Ultimate Automation (连接真实个人邮箱)...")
    emails = get_real_unread_emails()
    tasks = analyze_and_prioritize_tasks(emails)
    write_to_daily_note(tasks)
    print("🎉 自动化执行完毕，请打开 Obsidian 查阅！")
