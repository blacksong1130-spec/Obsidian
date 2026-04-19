---
type: portal
tags: [inbox, clippings, XHS, bilibili, process]
updated: 2026-04-19
---

# 📥 Capture Zone · 剪藏处理台

> XHS · Bilibili · 随手捕获 → 加工 → 归档
> **原则：** 进来容易，出去清晰。每条内容都要有个归宿。

---

## 🔴 待处理 Bilibili 剪藏

```dataview
table title as "标题", author as "作者", created as "采集日期"
from "00.Inbox/Clippings"
sort created desc
```

---

## 🌸 待处理小红书笔记

```dataview
table file.name as "笔记标题", file.mtime as "时间"
from "XHS Notes/Obsidian"
sort file.mtime desc
```

---

## 📌 处理流程 · Triage Workflow

```
新剪藏进入 00.Inbox/Clippings/
       ↓
  读完 + 加批注
       ↓
  ┌─────────────────────────────────┐
  │ 有洞见/想法 → 50.Knowledge/     │
  │ 是参考资料 → 30.Resources/      │
  │ 是影视书游 → 30.Areas/Media/    │
  │ 存档即可   → 60.Archives/2026/  │
  │ 放弃       → 直接删除           │
  └─────────────────────────────────┘
```

---

## 📊 待处理数量

```dataview
table length(rows) as "待处理数"
from "00.Inbox/Clippings" or "XHS Notes/Obsidian"
group by file.folder
```

---

## ✅ 已归档的剪藏

- **Bilibili 已处理：** [[Clippings/Bilibili/]] — 已清洗归档
- **快速捕获：** [[00.Inbox/Quick Capture]]

---

## ⚙️ 插件配置建议

> **Bilibili Clipper** 当前保存路径：Vault 根目录（导致根目录混乱）
>
> 建议修改为：`00.Inbox/Clippings`
> 路径：Obsidian 设置 → Bilibili Clipper → Default Save Location

---

## 📂 全部 Inbox 子区域

| 区域 | 内容 |
|------|------|
| `00.Inbox/Clippings/` | Bili + XHS 未处理剪藏 |
| `00.Inbox/Conversations/` | 对话记录 |
| `00.Inbox/Emails/` | 邮件 |
| `00.Inbox/Flomo/` | Flomo 同步 |
| `00.Inbox/Transcript/` | 会议/音频文字稿 |
| [[00.Inbox/Quick Capture]] | 随手捕获 |

---

*Claudian 维护 · 2026-04-19*
