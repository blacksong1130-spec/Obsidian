---
type: dashboard
tags: [home, dashboard, portal]
updated: 2026-04-19
---

# 🏠 Control Tower · 控制中枢

> 一个主入口，看清全局。

---

## ⚡ 核心入口 · Portals

| 入口 | 用途 |
|------|------|
| [[!MEDIA LIBRARY\|🎬 媒体库]] | 影视书游画廊 · 54 条记录 · 豆瓣导入 |
| [[!MISSION CONTROL\|📋 任务指挥台]] | 任务 · 日历 · 甘特图 |
| [[!INBOX\|📥 剪藏处理台]] | Bili · XHS · 待处理内容 |

---

## 📅 今日 · Today

> **→** [[10.Daily/2026/04/2026-04-19|打开今日日记]]

```dataview
task
from "10.Daily/2026" or "00.Inbox"
where !completed and file.day = date(today)
limit 8
```

---

## 🔥 活跃项目

```dataview
table file.mtime as "更新"
from "20.Projects"
sort file.mtime desc
limit 5
```

---

## 🗺️ 系统地图 · Vault Map

| # | 文件夹 | 用途 |
|---|--------|------|
| 00 | `00.Inbox/` | 所有待处理内容 · Clippings · 快速捕获 |
| 02 | `02-电影阅读/` | **媒体库** — book / movie / teleplay / game |
| 10 | `10.Daily/` | 每日日记 |
| 20 | `20.Projects/` | 进行中项目（IRP · 内容 · 副业）|
| 30 | `30.Areas/` | 持续领域（Academic · Life · Health · Self）|
| 40 | `40.Resources/` | 参考资料 · 设计 · 书目 |
| 50 | `50.Knowledge/` | 知识库（Fleeting · Literature · Permanent）|
| 60 | `60.Archives/` | 完成归档 |
| 70 | `70.Templates/` | 所有模板 |
| 80 | `80.MOC/` | 知识地图 |

> **特殊区域：** `flomo/` — Flomo 原始导出（保留在根目录）· `XHS Notes/media/` — 图片素材

---

## 📊 媒体库快览

```dataview
table length(rows) as "数量"
from "02-电影阅读"
group by type
sort length(rows) desc
```

---

*Claudian 维护 · 2026-04-19 · 结构已全面梳理*
