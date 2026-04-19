---
type: portal
tags: [inbox, clippings, XHS, bilibili, process]
updated: 2026-04-19
---

# 📥 Capture Zone · 剪藏处理台

> **原则：** 进来容易，出去清晰。你不动手，它不会消失。
> *只有你明确说"整理"，内容才会归类。否则永远停在这里等你。*

---

## 🔴 根目录散落文件（需处理）

> 这些文件落在了 Vault 根目录，最容易被遗忘。每次打开此页即可发现。

```dataview
table file.ctime as "收录时间", file.size as "体积(B)"
where file.folder = ""
and file.name != "! MVP（置顶）"
sort file.ctime desc
```

---

## 🟠 今日新入 · Today's Captures

> 所有来源中，**今天**新增的文件。

```dataview
table file.folder as "来源", file.ctime as "收录时间"
where (contains(file.folder, "00.Inbox") or contains(file.folder, "Clippings") or contains(file.folder, "XHS Notes") or contains(file.folder, "flomo") or file.folder = "")
and file.ctime >= date(today)
sort file.ctime desc
```

---

## 📹 Bilibili 待处理

```dataview
table file.name as "标题", file.ctime as "收录日期"
from "00.Inbox/Clippings"
sort file.ctime desc
```

> 已处理归档区：[[Clippings/Bilibili/]]

---

## 🌸 小红书待处理

```dataview
table file.name as "笔记标题", file.mtime as "时间"
from "XHS Notes/Obsidian"
sort file.mtime desc
```

---

## 💭 Flomo 待整理

```dataview
table file.name as "内容", file.ctime as "同步时间"
from "flomo"
where file.extension = "md"
sort file.ctime desc
limit 10
```

---

## 📊 待处理数量汇总

```dataview
table length(rows) as "待处理数"
from "00.Inbox/Clippings" or "XHS Notes/Obsidian" or "flomo"
group by file.folder
```

---

## 📌 处理流程 · Triage Workflow

```
新剪藏进入 00.Inbox/Clippings/ 或根目录
           ↓
      读完 + 加批注
           ↓
  ┌─────────────────────────────────────┐
  │ 有洞见/想法   → 50.Knowledge/        │
  │ 是参考资料   → 40.Resources/         │
  │ 是影视书游   → 02-电影阅读/           │
  │ 存档即可     → 60.Archives/2026/     │
  │ 放弃         → 直接删除              │
  └─────────────────────────────────────┘
```

> **告诉 Claudian "整理 XHS 笔记" / "归档 B 站剪藏"** → 自动执行归类

---

## 📂 全部 Inbox 区域

| 区域 | 内容 | 入口 |
|------|------|------|
| `00.Inbox/Clippings/` | B站视频笔记（主要来源） | [[00.Inbox/Clippings/\|浏览]] |
| `XHS Notes/Obsidian/` | 小红书笔记 | [[XHS Notes/Obsidian/\|浏览]] |
| `flomo/` | Flomo 原始数据 | [[flomo/\|浏览]] |
| `00.Inbox/Conversations/` | 对话记录 | [[00.Inbox/Conversations/\|浏览]] |
| `00.Inbox/Emails/` | 邮件 | [[00.Inbox/Emails/\|浏览]] |
| `00.Inbox/Transcript/` | 文字稿 | [[00.Inbox/Transcript/\|浏览]] |
| [[00.Inbox/Quick Capture\|Quick Capture]] | 随手捕获口 | 直接写 |

---

## ⚙️ Bilibili 插件路径设置

> **当前问题：** B站剪藏插件保存路径指向了 `00.Inbox/Clippings/`，但根目录仍有散落文件。
> **修改方式：** Obsidian 设置 → 对应插件 → Default Save Location → `00.Inbox/Clippings`

---

*Claudian 维护 · 2026-04-19 · 根目录视图已开启*
