import os
import re
import shutil

DIR = "10.Projects/IRP"
TODAY = "2026-05-27"

def rename_logic(filename):
    lower = filename.lower()
    # Remove existing date if any to re-standardize
    clean_name = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', filename)
    clean_name = re.sub(r'^\d{8}[-_]', '', clean_name)
    
    if "overview" in lower or "moc" in lower:
        return f"2026-00-00-MOC-IRP项目地图.md"
    
    prefix = ""
    if "crit" in lower: prefix = "Crit-"
    elif "phase0" in lower: prefix = "Phase0-"
    elif "phase" in lower: prefix = "Phase-"
    elif "反馈" in lower or "feedback" in lower: prefix = "Feedback-"
    elif "答辩" in lower: prefix = "Review-"
    elif "启示" in lower or "思考" in lower: prefix = "Thought-"
    elif "清单" in lower or "行动" in lower: prefix = "Log-"
    
    # Extract date if present
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})|(\d{8})', filename)
    if date_match:
        d = date_match.group()
        if len(d) == 8: d = f"{d[:4]}-{d[4:6]}-{d[6:]}"
        return f"{d}-{prefix}{clean_name}"
    else:
        return f"{TODAY}-{prefix}{clean_name}"

# 1. Flatten specific folders to project root
target_folders = ["第三学期安排", "调研方法论", "关键成果", "五节方法课", "学校文件模板", "AI生成"]
for folder in target_folders:
    folder_path = os.path.join(DIR, folder)
    if os.path.exists(folder_path):
        for item in os.listdir(folder_path):
            s = os.path.join(folder_path, item)
            if os.path.isfile(s):
                new_name = rename_logic(item)
                d = os.path.join(DIR, new_name)
                shutil.move(s, d)
        # shutil.rmtree(folder_path) # Keep folder for now just in case

# 2. Rename existing files in root
for item in os.listdir(DIR):
    path = os.path.join(DIR, item)
    if os.path.isfile(path) and item.endswith('.md'):
        new_name = rename_logic(item)
        if new_name != item:
            dest = os.path.join(DIR, new_name)
            if not os.path.exists(dest):
                os.rename(path, dest)
            else:
                print(f"Collision: {new_name}")

print("IRP Timeline reorganization complete.")
