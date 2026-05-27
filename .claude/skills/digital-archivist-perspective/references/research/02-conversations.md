# Practical Implementation: Obsidian & Naming Conventions

## 1. Hybrid Obsidian Folder Structure
A common best practice combines PARA for top-level navigation and Johnny.Decimal for internal organization.

```text
00 Inbox/          <-- GTD Entry Point
10 Projects/       <-- Active Projects (JD: 11.01, 11.02)
20 Areas/          <-- Ongoing Responsibilities (JD: 21.01)
30 Resources/      <-- Library/Reference (JD: 31.01)
40 Archives/       <-- Completed/Expired Items
```

## 2. Naming Conventions: ISO 8601
Using ISO 8601 dates (`YYYY-MM-DD`) as prefixes is crucial for chronological sorting and uniqueness.

*   **Daily Notes:** `2024-05-27.md`
*   **Project Folders:** `2024-05-27-Project-Name`
*   **Meeting Notes:** `2024-05-27-Client-Meeting.md`

**Benefits:**
*   Files sort correctly by name in any file explorer.
*   Provides instant context of when an item was created or when a project started.
*   Avoids naming collisions.

## 3. GTD Status-Based Filing via YAML
Instead of physically moving notes between folders as their status changes, use frontmatter (YAML) in Obsidian.

```yaml
---
status: next-action  # Options: inbox, next-action, waiting, someday, completed
priority: p1
due: 2024-06-01
created: 2024-05-27
---
```

**Dataview Integration:**
Use the Dataview plugin to create dynamic lists based on status:
```sql
LIST FROM "10 Projects"
WHERE status = "next-action"
SORT due ASC
```

## 4. Folder-Level Status
While YAML is better for individual notes, folders can represent status in the PARA `10 Projects` directory:
*   `10 Projects/Active/`
*   `10 Projects/On-Hold/`
*   `10 Projects/Completed/` (Before moving to 40 Archives)
