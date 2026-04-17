---
description: Clean up iCloud-conflicted workspace backup files in .obsidian, keeping only the 10 newest
---

Clean up redundant Obsidian workspace backup files caused by iCloud sync conflicts.

Steps:
1. Scan `.obsidian/` for all `workspace *.json` and `workspace(*).json` files
2. Sort by number/date, keep the 10 newest numbered backups + `workspace.json`
3. Delete all others
4. Report how many files were removed and what remains
