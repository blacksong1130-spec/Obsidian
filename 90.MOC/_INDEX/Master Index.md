---
type: index
pinned: true
updated: 2026-04-19
tags: [index, MOC, master, navigation]
---

# 📌 Master Index · 总目录

> 所有入口的入口。找任何东西，先来这里。

---

## 🚀 四大入口（置顶 · 每日必用）

| 入口 | 用途 |
|------|------|
| [[!HOME\|🏠 Control Tower]] | 总览 · 今日任务 · 活跃项目 |
| [[!INBOX\|📥 Capture Zone]] | **今日新入 · 根目录散落 · 待处理剪藏** |
| [[!MISSION CONTROL\|📋 Mission Control]] | 任务 · 甘特日历 · 全库待办 |
| [[!MEDIA LIBRARY\|🎬 Media Library]] | 影音库画廊 · 50 条记录 |

---

## 📂 文件夹导航

### 00 · 收件箱
| 路径 | 内容 |
|------|------|
| [[00.Inbox/\|00.Inbox/]] | 主收件箱 |
| [[00.Inbox/Clippings/\|↳ Clippings/]] | B站视频剪藏（插件自动保存）|
| [[00.Inbox/Quick Capture\|↳ Quick Capture.md]] | 快速记录想法 |
| [[XHS Notes/\|XHS Notes/]] | 小红书笔记（独立插件路径）|
| [[flomo/\|flomo/]] | Flomo 原始导出 |

### 10 · 日记
| 路径 | 内容 |
|------|------|
| [[10.Daily/\|10.Daily/]] | 所有日记 |
| [[10.Daily/2026/\|↳ 2026/]] | 2026 年日记 |
| [[10.Daily/Weekly/\|↳ Weekly/]] | 周回顾 |
| [[10.Daily/Monthly/\|↳ Monthly/]] | 月回顾 |

### 20 · 项目
| 路径 | 内容 |
|------|------|
| [[20.Projects/IRP/IRP Overview\|IRP Overview]] | IRP 研究项目总览 |
| [[20.Projects/Content/\|Content/]] | 内容创作项目 |
| [[20.Projects/Side-Hustle/\|Side-Hustle/]] | 副业项目 |

### 30 · 领域
| 路径 | 内容 |
|------|------|
| [[30.Areas/Academic/\|Academic/]] | 学术发展 |
| [[30.Areas/Life/\|Life/]] | 生活管理 |
| [[30.Areas/Health/\|Health/]] | 健康 |
| [[30.Areas/English/\|English/]] | 英语学习 |

### 🎬 媒体库（影音书游）
| 路径 | 内容 |
|------|------|
| [[02-电影阅读/movie/\|🎬 电影 (25)]] | 电影笔记 |
| [[02-电影阅读/teleplay/\|📺 剧集 (15)]] | 剧集笔记 |
| [[02-电影阅读/book/\|📚 书籍 (10)]] | 书籍笔记 |
| [[!MEDIA LIBRARY\|🖼️ 画廊视图]] | 海报筛选画廊 |

### 40-50 · 知识库
| 路径 | 内容 |
|------|------|
| [[40.Resources/\|40.Resources/]] | 参考资料 · 设计 · AI · 书目 |
| [[50.Knowledge/Fleeting/\|Fleeting/]] | 飞逝笔记（待加工）|
| [[50.Knowledge/Literature/\|Literature/]] | 文献笔记 |
| [[50.Knowledge/Permanent/\|Permanent/]] | 永久笔记 |

### 60-80 · 支撑系统
| 路径 | 内容 |
|------|------|
| [[60.Archives/\|60.Archives/]] | 归档库 |
| [[70.Templates/\|70.Templates/]] | 所有模板 |
| [[80.MOC/Home\|Home Dashboard]] | IRP 主仪表盘 |

---

## 🔧 系统工具

| 入口 | 内容 |
|------|------|
| [[_INDEX/Skills Index\|⚡ Skills Index]] | Claudian 技能清单 |
| [[_INDEX/文件夹地图\|🗺️ 文件夹地图]] | **当前完整结构 · 冗余分析 · 迁移计划** |

---

## ⚠️ 今日根目录待处理

```dataview
table file.ctime as "落地时间"
where file.folder = "" and file.extension = "md"
and !contains(file.name, "!")
and !contains(file.name, "MVP")
sort file.ctime desc
limit 10
```

> 更多：[[!INBOX|→ 打开收件处理台]]

---

*Claudian 维护 · 2026-04-19*
