---
month: "{{date:YYYY-MM}}"
type: monthly-review
tags: [monthly, review]
---

# {{date:YYYY年MM月}} · Monthly Review

---

## 🏆 本月三大成就 · Top 3 Achievements
1. 
2. 
3. 

---

## 📈 IRP进展回顾 · IRP Progress
> 对照里程碑，本月推进了什么？

- [ ] 里程碑1
- [ ] 里程碑2

---

## 📚 知识资产统计 · Knowledge Assets

```dataview
table length(rows) as "数量"
from "50.Knowledge/Literature"
group by type
```

### 本月新增永久笔记
```dataview
table file.ctime as "创建时间"
from "50.Knowledge/Permanent"
where file.ctime >= date("{{date:YYYY-MM}}-01")
sort file.ctime desc
```

---

## 🔄 系统回顾 · System Review
> Vault 结构是否还合理？有没有需要调整的？

- 

---

## 🎯 下月目标 · Next Month Goals
1. 
2. 
3. 

