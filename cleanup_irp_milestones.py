import os
import shutil
import re

DIR = "10.Projects/IRP"

# Define the 4 Gold Milestones
MILESTONES = {
    "01": "【01】2026-04-21-Research-Kickoff",
    "02": "【02】2026-05-04-Proposal-Submission",
    "03": "【03】2026-05-15-Feedback-Iteration",
    "04": "【04】2026-05-27-Final-Realisation"
}

for folder in MILESTONES.values():
    os.makedirs(os.path.join(DIR, folder), exist_ok=True)

def get_milestone_folder(filename):
    # Determine which bucket based on date or content
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})', filename)
    if not date_match:
        if "【最终】" in filename or "v16" in filename: return MILESTONES["04"]
        return MILESTONES["04"] # Default to latest
    
    date_str = date_match.group(1)
    if date_str <= "2026-04-30": return MILESTONES["01"]
    if "2026-05-01" <= date_str <= "2026-05-05": return MILESTONES["02"]
    if "2026-05-06" <= date_str <= "2026-05-20": return MILESTONES["03"]
    return MILESTONES["04"]

# 1. Clear out ALL files in root into milestones
for item in os.listdir(DIR):
    path = os.path.join(DIR, item)
    if os.path.isfile(path):
        if item.endswith('.py') or item == "2026-00-00-MOC-IRP项目地图.md":
            continue
        dest_folder = get_milestone_folder(item)
        shutil.move(path, os.path.join(DIR, dest_folder, item))

# 2. Flatten and absorb ALL "strange folders"
for item in os.listdir(DIR):
    path = os.path.join(DIR, item)
    if os.path.isdir(path) and not item.startswith('【'):
        # This is a strange folder
        for root, dirs, files in os.walk(path):
            for file in files:
                file_path = os.path.join(root, file)
                dest_folder = get_milestone_folder(file)
                # Ensure no collision
                dest_path = os.path.join(DIR, dest_folder, file)
                if not os.path.exists(dest_path):
                    shutil.move(file_path, dest_path)
                else:
                    shutil.move(file_path, os.path.join(DIR, dest_folder, f"extra_{file}"))
        shutil.rmtree(path)

print("IRP Cleaned up to 4 Milestones.")
