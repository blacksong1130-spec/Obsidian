---
tags:
  - data-support
  - app-retention
  - food-tracking
created: 2026-04-08
supports-claim: "most users abandon food tracking within weeks"
source-paragraph: "Section 1, Section 3 — IRP Proposal"
---

# 📱 01 — 食物追踪 App 留存率与放弃率

> [!quote] 支撑的原文论断
> *"most users abandon food tracking within weeks"* — IRP Proposal, Section 1
> *"calorie counting apps has been in steady decline in user retention for over a decade"* — Section 3

---

## 🔢 核心数据

| 指标 | 数值 | 来源 |
|------|------|------|
| 健康/健身App **第1天**留存率 | **26%** | Business of Apps, 2024 |
| 健康/健身App **第28天**留存率 | **10%** | Business of Apps, 2024 |
| 健康/健身App **第30天**留存率 | **3%** | Business of Apps, 2023–24 |
| 70% 用户在 **2周内放弃** | 原因：太耗时间 | IFIC 2023 Survey |
| 放弃追踪首要原因（73%） | **"太耗时间"** | IFIC 2023 |
| MyFitnessPal 注册用户总数 | **2.2亿** | Business of Apps, 2026 |
| MyFitnessPal 月活用户 | **3000万** | Business of Apps, 2026 |

> [!important] 关键洞见：**每100个1月份新用户，到2月份只剩不到10人仍在活跃。**

---

## 📊 图表一：健康/健身 App 留存率衰减曲线

```chartsview
#-section-
type: Line
data:
  - day: "Day 1"
    retention: 26
  - day: "Day 7"
    retention: 15
  - day: "Day 14"
    retention: 8
  - day: "Day 28"
    retention: 10
  - day: "Day 30"
    retention: 3
options:
  xField: 'day'
  yField: 'retention'
  point:
    size: 5
    shape: 'diamond'
  color: '#F4664A'
  label:
    style:
      fill: '#aaa'
```

> 📌 来源：[Business of Apps — Health & Fitness App Benchmarks 2026](https://www.businessofapps.com/data/health-fitness-app-benchmarks/)

---

## 📊 图表二：放弃食物追踪的主要原因

```chartsview
#-section-
type: Pie
data:
  - type: '太耗时间 (73%)'
    value: 73
  - type: '成本问题 (12%)'
    value: 12
  - type: '失去兴趣 (10%)'
    value: 10
  - type: '焦虑/压力 (5%)'
    value: 5
options:
  angleField: 'value'
  colorField: 'type'
  radius: 0.8
  innerRadius: 0.4
  label:
    type: 'outer'
    content: '{name}'
```

> 📌 来源：International Food Information Council (IFIC) 2023 Survey
> [Diet and Nutrition Apps Statistics 2026 — Market.us](https://media.market.us/diet-and-nutrition-apps-statistics/)

---

## 📊 图表三：MyFitnessPal 注册用户 vs 月活用户

```chartsview
#-section-
type: Column
data:
  - category: '注册用户总数 (百万)'
    value: 220
  - category: '月活跃用户 (百万)'
    value: 30
options:
  xField: 'category'
  yField: 'value'
  color: '#5B8FF9'
  label:
    position: 'top'
  meta:
    value:
      alias: '用户数（百万）'
```

> 📌 注册2.2亿 vs 月活3000万 → **86.4%的注册用户已流失**
> 来源：[MyFitnessPal Statistics 2026 — Business of Apps](https://www.businessofapps.com/data/myfitnesspal-statistics/)

---

## 🔗 与IRP论断的关联

- ✅ **"most users abandon food tracking within weeks"** — 验证：70%在2周内放弃；第30天留存率仅3%
- ✅ **"demand effortful manual logging (low ability)"** — 验证：73%放弃原因是"太耗时间"
- ✅ **Fogg B=MAP 失败分析** — 数据证明：高effort(低ability) + 无情感共鸣(弱prompt)

---

## 📚 数据来源

- [Business of Apps — Health & Fitness App Benchmarks 2026](https://www.businessofapps.com/data/health-fitness-app-benchmarks/)
- [Business of Apps — MyFitnessPal Statistics 2026](https://www.businessofapps.com/data/myfitnesspal-statistics/)
- [Diet and Nutrition Apps Statistics 2026 — Market.us](https://media.market.us/diet-and-nutrition-apps-statistics/)
- [Retention Metrics for Fitness Apps — Lucid](https://www.lucid.now/blog/retention-metrics-for-fitness-apps-industry-insights/)
