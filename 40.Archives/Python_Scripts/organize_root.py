import os
import shutil

root_dir = r"D:\iCloudDrive\.obsidian\IRP Management"
projects_irp_dir = os.path.join(root_dir, "20.Projects", "IRP")
projects_scripts_dir = os.path.join(root_dir, "20.Projects", "Ultimate-Automator-Scripts")
inbox_dir = os.path.join(root_dir, "00.Inbox")
resources_dir = os.path.join(root_dir, "40.Resources")
archives_dir = os.path.join(root_dir, "60.Archives")

os.makedirs(projects_irp_dir, exist_ok=True)
os.makedirs(projects_scripts_dir, exist_ok=True)
os.makedirs(inbox_dir, exist_ok=True)
os.makedirs(resources_dir, exist_ok=True)
os.makedirs(archives_dir, exist_ok=True)

files_to_move = {
    "【超级重要】核心概念与展览文案重构.md": projects_irp_dir,
    "【重要】核心文字思考.md": projects_irp_dir,
    "【重要】我的想法.md": projects_irp_dir,
    "【重要】Claude方案.md": projects_irp_dir,
    "【重要】IRP展览需求.md": projects_irp_dir,
    "【重要】Why Eating Well Feels Like Nothing.md": projects_irp_dir,
    "【最终】IRP.pdf": projects_irp_dir,
    "04-Tutor-Feedback-Frameworks.sketch.md": projects_irp_dir,
    "IRP存在的bug.md": projects_irp_dir,
    "Strategic Framework Report.md": projects_irp_dir,
    "White Paper 2035-Redesigning the Feedback Loop for Dietary Wellbeing.md": projects_irp_dir,
    "health-notify.ps1": projects_scripts_dir,
    "install-health-manager.ps1": projects_scripts_dir,
    "uninstall-health-manager.ps1": projects_scripts_dir,
    "DESIGN.md": projects_scripts_dir,
    "release_info.json": projects_scripts_dir,
    "画图skill.md": inbox_dir,
    "留学.md": inbox_dir,
    "任务.md": inbox_dir,
    "未命名 1.md": archives_dir,
    "未命名.md": archives_dir,
    "问题.md": inbox_dir,
    "Obsidian 终极玩法：打造你的 AI 指挥中心 (Smart Composer + MCP).md": resources_dir,
    "2026-04-12_Flomo-Note-Analysis.md": archives_dir,
    "process_flomo.py": projects_scripts_dir,
    "dedup_flomo.py": projects_scripts_dir
}

for filename, target_dir in files_to_move.items():
    source_path = os.path.join(root_dir, filename)
    target_path = os.path.join(target_dir, filename)
    if os.path.exists(source_path) and os.path.isfile(source_path):
        try:
            shutil.move(source_path, target_path)
            print(f"Moved {filename} to {os.path.basename(target_dir)}")
        except Exception as e:
            print(f"Error moving {filename}: {e}")
