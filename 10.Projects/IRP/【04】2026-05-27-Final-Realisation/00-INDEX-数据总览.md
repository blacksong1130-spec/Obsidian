---
tags:
  - data-support
  - IRP
  - evidence
created: 2026-04-08
linked-to: "[[【02】IRP Proposal （Draft）]]"
---

# 📊 数据支撑总览 — IRP Proposal Data Evidence Hub

> [!info] 本文件夹说明
> 本文件夹收录了 [[【02】IRP Proposal （Draft）]] 中所有需要数据支撑的论断的**真实、可验证数据**。
> 所有数据来源均已标注原始网址，图表使用 **obsidian-chartsview-plugin**（ChartView v1.2.8）渲染。

---

## 🗂️ 数据文件索引

| 编号 | 文件 | 支撑的论断 | 状态 |
|------|------|-----------|------|
| 01 | [[01-App留存率与放弃率]] | "大多数用户在数周内放弃追踪" | ✅ 已验证 |
| 02 | [[02-进食障碍流行率]] | 饮食追踪与进食障碍风险的关联 | ✅ 已验证 |
| 03 | [[03-Krukow-COOP行为设计]] | 14% CO₂ / 25% 销售 / 60% 食物浪费 | ✅ 已验证 |
| 04 | [[04-CGM市场增长]] | CGM向非糖尿病消费者扩展的趋势 | ✅ 已验证 |
| 05 | [[05-运动健康追踪平台用户]] | Strava / Oura 的设计成功 | ✅ 已验证 |
| 06 | [[06-跨文化饮食态度Rozin]] | 法国 vs 美国饮食焦虑对比 | ✅ 已验证 |
| 07 | [[07-直觉饮食保护效应]] | 直觉饮食作为进食障碍保护因素 | ✅ 已验证 |

---

## 🔑 关键数字速览

```chartsview
#-section-
type: Bar
data:
  - metric: 'App 30天留存率 (%)'
    value: 3
  - metric: '进食障碍全球患病率 (%)'
    value: 1.04
  - metric: 'CGM非糖尿病用户份额 (%)'
    value: 41.46
  - metric: 'COOP CO₂减少 (%)'
    value: 14
  - metric: 'COOP食物浪费减少 (%)'
    value: 60
options:
  xField: 'value'
  yField: 'metric'
  color: '#5B8FF9'
  label:
    position: 'right'
  meta:
    value:
      alias: '数值（%）'
```

---

## 📌 数据来源汇总

| 数据点 | 来源 | URL |
|--------|------|-----|
| App 30天留存率 3% | Business of Apps, 2024 | https://www.businessofapps.com/data/health-fitness-app-benchmarks/ |
| 70%用户2周内放弃 | Nutrition App Research, 2023 | https://media.market.us/diet-and-nutrition-apps-statistics/ |
| 全球7000万进食障碍患者 | NEDA / Beat Eating Disorders | https://www.beateatingdisorders.org.uk/media-centre/eating-disorder-statistics/ |
| 英国住院增加84% (2015-2021) | NHS England | https://digital.nhs.uk/data-and-information/publications/statistical/adult-psychiatric-morbidity-survey/ |
| COOP: 14% CO₂减少 | krukow.net 官方案例 | https://www.krukow.net/case/designing-climate-friendly-consumer-choices-and-economic-growth-in-the-european-food-and-grocery-market/ |
| COOP: 25% 气候友好销售增长 | krukow.net 官方案例 | 同上 |
| COOP: 60% 食物浪费减少 | krukow.net 官方案例 | 同上 |
| CGM市场 $3.707亿 (2024) | GM Insights / Grand View Research | https://www.grandviewresearch.com/industry-analysis/continuous-glucose-monitoring-market |
| 非糖尿病CGM占41.46% | Grand View Research, 2024 | https://www.grandviewresearch.com/industry-analysis/us-otc-continuous-glucose-monitoring-devices-market-report |
| Strava 1.8亿用户 | Strava Press Release, Dec 2025 | https://press.strava.com/articles/strava-releases-12th-annual-year-in-sport-trend-report-2025 |
| Oura 550万+ 戒指销量 | Sacra/Oura Funding Announcement | https://sacra.com/c/oura/ |
| Rozin 1999 法美饮食态度差异 | PubMed / Appetite Journal | https://pubmed.ncbi.nlm.nih.gov/10502362/ |
| 直觉饮食:暴食风险降低74% | PMC / EAT 2010-2018研究 | https://pmc.ncbi.nlm.nih.gov/articles/PMC7392799/ |
