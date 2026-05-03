---
tags:
  - data-support
  - CGM
  - market-data
created: 2026-04-08
supports-claim: "emergence of CGM for non-diabetics signals shift toward real-time biological feedback"
source-paragraph: "Section 2c / Section 2d Trends"
---

# 📈 04 — 连续血糖监测（CGM）市场增长数据

---

## 🔢 核心数据

| 指标 | 数值 | 来源 |
|------|------|------|
| 全球OTC CGM市场（2024） | **$3.707亿** | GM Insights |
| 全球OTC CGM CAGR（2025-2034） | **16.9%** | GM Insights |
| 美国OTC CGM（2024） | **$4861万** | Grand View Research |
| 非糖尿病用户市场份额 | **41.46%** | Grand View Research |
| Dexcom Stelo FDA批准 | **2024年3月** | FDA |
| Abbott Lingo FDA批准 | **2024年6月** | FDA |
| 美国成人采用可穿戴健康设备 | **>44%** | Grand View Research |

---

## 📊 Chart 1: Growth of Global OTC CGM Market Size (in millions of US dollars)
图表一：全球OTC CGM市场规模增长（百万美元）

```chartsview
#-section-
type: Line
data:
  - year: '2024'
    market: 370.7
  - year: '2025'
    market: 433.3
  - year: '2026'
    market: 506.6
  - year: '2027'
    market: 592.2
  - year: '2028'
    market: 692.2
  - year: '2030'
    market: 945.9
  - year: '2034'
    market: 1765.5
options:
  xField: 'year'
  yField: 'market'
  point:
    size: 4
  color: '#5B8FF9'
  meta:
    market:
      alias: '市场规模（百万美元）'
```

> 📌 基于16.9% CAGR复合计算 | [GM Insights](https://www.gminsights.com/industry-analysis/otc-continuous-glucose-monitoring-market)[[]]

---

## 📊 Chart 2: Composition of OTC CGM Users (2024)
图表二：OTC CGM用户构成（2024）

```chartsview
#-section-
type: Pie
data:
  - type: 'Non-diabetic users 非糖尿病用户 (41.46%)'
    value: 41.46
  - type: 'Prediabetes/High Risk 糖尿病前期/高风险 (37.5%)'
    value: 37.5
  - type: 'Diabetic patients 糖尿病患者 (21.04%)'
    value: 21.04
options:
  angleField: 'value'
  colorField: 'type'
  radius: 0.85
  innerRadius: 0.5
  label:
    type: 'outer'
    content: '{name}'
```

> 📌 Non-diabetic users have become the largest market segment (41.46%), proving that CGM has shifted from medical to consumer health products
> **非糖尿病用户已成最大细分市场（41.46%）**，证明CGM从医疗转向消费健康品
> [Grand View Research](https://www.grandviewresearch.com/industry-analysis/us-otc-continuous-glucose-monitoring-devices-market-report)

---

## 📚 数据来源

- [GM Insights — OTC CGM Market](https://www.gminsights.com/industry-analysis/otc-continuous-glucose-monitoring-market)
- [Grand View Research — U.S. OTC CGM Devices Market](https://www.grandviewresearch.com/industry-analysis/us-otc-continuous-glucose-monitoring-devices-market-report)
- [IndexBox — OTC Glucose Monitors Market 2035](https://www.indexbox.io/blog/otc-glucose-monitors-market-to-2035-driven-by-expansion-into-non-diagnosed-wellness-consumers/)
