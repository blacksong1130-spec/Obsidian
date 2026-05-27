---
type: moc
tags: [home, dashboard, MOC]
---

# 🏠 Home · IRP Management Vault

> *"The mind is for having ideas, not holding them."* — David Allen

> [!tip] 📌 Standing Order
> 每次分享文章给 Claudian → 自动转化为伦敦在地 MVP → [[! MVP（置顶）|查看完整指令]]

---

## 📅 今日 · Today

```dataview
list
from "10.Daily/2026"
where date = date(today)
limit 1
```

**→ 直接跳转：** [[10.Daily/2026/04/{{date:YYYY-MM-DD}}|今日日记]]

---

## 🔥 当前聚焦 · Active Focus

> **项目：** [[20.Projects/IRP/IRP Overview]]
> **阶段：** IRP Exhibition Preparation
> **截止：** 2026-04-14

### 📋 未完成任务（来自 Inbox）
```dataview
task
from "00.Inbox"
where !completed
limit 10
```

---

## 🗺️ 知识地图 · Maps of Content

| 地图 | 说明 |
|------|------|
| [[80.MOC/IRP MOC]] | IRP 研究全景 |
| [[80.MOC/Literature MOC]] | 所有文献导航 |
| [[80.MOC/Design Methods MOC]] | 设计方法集 |

---

## 📂 快速导航 · Quick Nav

### 📥 Inbox & Capture
- [[00.Inbox/Quick Capture]] — 快速记录想法

### 📅 日志系统
- [[10.Daily/]] — 所有日记
- [[10.Daily/Weekly/]] — 周回顾
- [[10.Daily/Monthly/]] — 月回顾

### 🚀 项目
- [[20.Projects/IRP/IRP Overview]] — IRP 研究项目

### 🌿 持续领域
- [[30.Areas/Academic/]] — 学术发展
- [[30.Areas/Life/]] — 生活管理

### 📚 知识库
- [[50.Knowledge/Literature/Academic/]] — 学术文献 (L1–L16)
- [[50.Knowledge/Literature/Projects/]] — 设计项目案例 (P1–P10)
- [[50.Knowledge/Permanent/]] — 永久笔记
- **flomo/** — Raw 原始捕获库（待整理）

### 🗄️ 资源
- [[40.Resources/Design/]] — 设计参考资料

---

## 📊 知识库状态 · Knowledge Stats

```dataview
table length(rows) as "笔记数"
from "50.Knowledge"
group by type
```

### 最近修改
```dataview
table file.mtime as "修改时间", type
from "50.Knowledge" or "20.Projects"
sort file.mtime desc
limit 8
```

---

## 🔄 每周必做 · Weekly Ritual
- [ ] 打开 [[10.Daily/Weekly/]] 做周回顾
- [ ] 清空 [[00.Inbox/Quick Capture]]
- [ ] flomo → [[50.Knowledge/Fleeting/]] 处理
- [ ] Fleeting → Permanent 提炼至少 1 条

