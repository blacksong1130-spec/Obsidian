---
week: "{{date:YYYY-[W]WW}}"
date_start: {{monday:YYYY-MM-DD}}
date_end: {{sunday:YYYY-MM-DD}}
type: weekly-review
tags: [weekly, review]
---

# Week {{date:WW}} · {{monday:YYYY-MM-DD}} → {{sunday:YYYY-MM-DD}}

## 📊 本周快照 · Week Snapshot

| 指标 | 状态 |
|------|------|
| IRP进展 | 🟡 |
| 知识消化 | 🟡 |
| 整体状态 | 🟡 |

---

## 🏆 本周成果 · Wins This Week
> 列出 3 件完成的事，不管大小

1. 
2. 
3. 

---

## 🚧 未完成 & 原因 · Incomplete & Why
> 诚实地分析，不要评判自己

- 

---

## 💡 本周最重要的洞见 · Key Insight
> 从工作/阅读/思考中获得的最有价值的一个认知

> 

**来源：** 

---

## 📚 知识处理 · Knowledge Processing
> 把本周 Fleeting Notes 和 Inbox 处理一遍

### Flomo → Fleeting 已处理
- [ ] 检查 flomo/ 新内容并移入 [[50.Knowledge/Fleeting/]]
- [ ] Fleeting → Permanent 提炼

### 文献处理状态
```dataview
table author, year, file.mtime as "最后修改"
from "50.Knowledge/Literature"
where file.mtime >= date(this.date_start)
sort file.mtime desc
```

---

## 🎯 下周计划 · Next Week Plan

### 首要任务（Max 3）
1. 
2. 
3. 

### IRP 里程碑对照
- [ ] 

---

## 🔗 本周 Daily Notes
> 

