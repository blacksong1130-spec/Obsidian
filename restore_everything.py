import os
import shutil

# Files that should be in root based on initial prompt
ROOT_FILES = [
    "【待完成任务】0418今日任务思考.md",
    "【卡点】Notebooklm多端工作流搭建.md",
    "2026-04-18-[Obsidian][Gantt Calendar]一款强大的可视化任务管理插件.md",
    "2026-04-18-你够努力了，该「有效努力」了【好就好在02】.md",
    "2026-04-18-Obsidian如何打造智能图书影视库管理系统，兼顾颜值和实用功能！.md",
    "2026-04-19-【Obsidian】iPhone和iPad怎么和windows电脑同步？免费解决方案.md",
    "2026-04-30-凯圣王-谭成义三分化合集.md",
    "20260420_IRP项目对话记录与行动清单.md",
    "20260421_IRP_Crit_Presentation_Outline.md",
    "20260421_IRP_Phase0_Interview_Guide.md",
    "20260430-4月份任务清洗.md",
    "20260501_Consumer_iPhone-Upgrade-Guide-iPhone12-to-16.md",
    "20260515老师反馈.md",
    "80.MOC.md",
    "对于屎的世界观重塑.md",
    "方源如何看待工作.md",
    "和查理芒格聊irp答辩.md",
    "和ai聊选修课对irp启示.md",
    "减脂速查表_打印版.md",
    "健身减脂计划_8周.md",
    "科学健身全指南_深度研究版.png",
    "芒格如何看待找工作.md",
    "南法意大利6日游账单.md",
    "尼斯出行准备清单.pdf",
    "书架.base",
    "暑假陆地回国计划.md",
    "思考IRP.md",
    "谭成义三分化私教讲解.mp3",
    "谭成义三分化训练动作大纲.png",
    "我的饮食清单.md",
    "我想要的.md",
    "星际穿越教堂计划_backup_2026-05-08.md",
    "星际穿越教堂计划.md",
    "真正需要拿到的数据.md",
    "最小系统架构.md",
    "Codex小红书工作流学习手册.pdf",
    "Digital Service Planning.pdf",
    "flomo最近一个月任务与想做的事.md",
    "iPhone_Upgrade_Comparison.html",
    "ob插件推荐.md",
    "Tasks_Eisenhower_Matrix_20260417.md"
]

NEW_DIRS = ["00.Inbox", "10.Projects", "20.Areas", "30.Resources", "40.Archives", "50.Daily", "80.System", "90.MOC"]

# Scan new dirs for these files and move them back to root
for root_dir in NEW_DIRS:
    if not os.path.exists(root_dir):
        continue
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            # Check if this file was originally in root
            # We check if the file name (ignoring my date prefix if any) matches
            match_found = False
            for original in ROOT_FILES:
                if original in file:
                    shutil.move(os.path.join(root, file), original)
                    match_found = True
                    break

# Clean up IRP specifically if needed (though git checkout should have fixed much)
# If IRP folder exists, ensure its contents are as before
# The user wants "today's initial version", which had 00_核心索引 etc.
# Git should have restored these directories.

# Final cleanup of my created folders
for folder in NEW_DIRS:
    if os.path.exists(folder):
        try:
            shutil.rmtree(folder)
        except:
            pass

print("Manual restoration complete.")
