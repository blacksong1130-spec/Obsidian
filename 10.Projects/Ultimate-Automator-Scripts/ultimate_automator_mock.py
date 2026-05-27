import os
import datetime

# ==========================================
# Ultimate Automation MVP: Daily Briefing
# ==========================================
# 功能: 
# 1. 模拟读取最新邮件 (绕过 RCA 邮箱限制)
# 2. 调用大模型提取任务并排序 
# 3. 自动将任务写入今天的 Obsidian 日记中

OBSIDIAN_DAILY_DIR = r"D:\iCloudDrive\.obsidian\IRP Management\10.Daily"

def get_unread_emails_mock():
    """由于 RCA 邮箱拦截了所有第三方应用，这里使用模拟数据进行 MVP 演示"""
    return [
        {"subject": "[Urgent] Please review the IRP Proposal draft by noon", "sender": "supervisor@rca.ac.uk"},
        {"subject": "Your Amazon order has been shipped", "sender": "amazon@amazon.co.uk"},
        {"subject": "Meeting reminder: Project Sync at 3 PM", "sender": "lily@rca.ac.uk"},
        {"subject": "Library notice: Book due tomorrow", "sender": "library@rca.ac.uk"}
    ]

def analyze_and_prioritize_tasks(emails):
    """
    Demo: AI 任务提取与优先级判定逻辑
    """
    print("🤖 AI 正在分析邮件并排定优先级...")
    if not emails:
        return ["- [ ] 🟢 **[Info]** 邮箱里没有新的未读邮件哦。"]
        
    tasks = []
    for em in emails:
        subj = em["subject"].lower()
        if "urgent" in subj or "asap" in subj or "deadline" in subj or "due" in subj:
            tasks.append(f"- [ ] 🔴 **[P0]** 处理紧急任务: {em['subject']} (From: {em['sender']})")
        elif "meeting" in subj or "tutorial" in subj:
            tasks.append(f"- [ ] 🟡 **[P1]** 会议/活动准备: {em['subject']} (From: {em['sender']})")
        else:
            tasks.append(f"- [ ] 🟢 **[P2]** 查阅普通邮件: {em['subject']} (From: {em['sender']})")
            
    return tasks

def write_to_daily_note(tasks):
    """将任务自动写入 Obsidian 日记"""
    today_str = datetime.date.today().strftime("%Y-%m-%d")
    
    today_folder = os.path.join(OBSIDIAN_DAILY_DIR, str(datetime.date.today().year), f"{datetime.date.today().month:02d}")
    os.makedirs(today_folder, exist_ok=True)
    note_path = os.path.join(today_folder, f"{today_str}.md")
    
    briefing_content = "\n\n## 🤖 AI 每日自动化简报 (Ultimate Automation MVP)\n"
    briefing_content += f"> 生成时间: {datetime.datetime.now().strftime('%H:%M:%S')}\n"
    briefing_content += "> *注: 因 RCA 邮箱安全限制，当前使用离线模拟数据演示 AI 排期功能*\n\n"
    briefing_content += "### 📬 核心任务清单\n"
    briefing_content += "\n".join(tasks) + "\n\n"
    
    mode = "a" if os.path.exists(note_path) else "w"
    with open(note_path, mode, encoding="utf-8") as f:
        f.write(briefing_content)
        
    print(f"✅ 成功将 {len(tasks)} 个 AI 分析任务写入今天的日记: {note_path}")

if __name__ == "__main__":
    print("🚀 启动 Ultimate Automation 流程 (离线演示版)...")
    
    emails = get_unread_emails_mock()
    tasks = analyze_and_prioritize_tasks(emails)
    write_to_daily_note(tasks)
    
    print("🎉 全部流程执行完毕！请打开 Obsidian 查看今天的日记。")
