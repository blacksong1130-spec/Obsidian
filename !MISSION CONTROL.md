---
type: portal
tags: [tasks, calendar, gantt, mission, projects]
updated: 2026-04-19
---

# 📋 Mission Control · 任务指挥台

> 任务 · 日历 · 甘特图 — 今天做什么，本周做什么，一眼看清。

---

## 🗓️ Gantt Calendar 视图

> **操作入口：** 侧边栏点击 Gantt Calendar 图标
> 或：`Ctrl+P` → 搜索 "Gantt Calendar"
>
> 支持六大视图：日 / 周 / 月 / 年 / 任务列表 / 甘特图
> 自动扫描全库所有 Tasks 格式任务，无需单独建文件。

---

## 📅 今日日记

> [[10.Daily/2026/04/2026-04-19|📖 打开今日日记]]

---

## ⏳ 全库待完成任务

```dataview
task
from "10.Daily/2026" or "00.Inbox" or "20.Projects"
where !completed
sort file.day desc
limit 20
```

---

## ✅ 今日已完成

```dataview
task
from "10.Daily/2026"
where completed and file.day = date(today)
```

---

## 🚀 活跃项目

```dataview
table file.mtime as "最后更新"
from "20.Projects"
where type = "project" or file.name != "CLAUDE"
sort file.mtime desc
limit 8
```

---

## 📆 日记系统导航

| 层级 | 入口 |
|------|------|
| 今日 | [[10.Daily/2026/04/2026-04-19]] |
| 本周 | [[10.Daily/Weekly/]] |
| 本月 | [[10.Daily/Monthly/]] |
| 旧记 | [[Daily Notes/]] |

> ⚠️ 注意：当前存在三个日记文件夹（`10.Daily/`、`Daily Notes/`、`DailyNotes/`），
> 建议统一到 `10.Daily/`，见 [[_INDEX/Vault Diagnostic|诊断报告]]。

---

## 🧠 思维工具

- [[Tasks_Eisenhower_Matrix_20260417|四象限任务矩阵（上次）]]
- [[00.Inbox/任务|当前任务池]]

---

*Gantt Calendar 插件驱动 · Claudian 维护 · 2026-04-19*
