---
type: literature-note
code: P8
author: MyFitnessPal Inc.
year: 2005
tags:
  - practice
  - dietary-app
  - calorie-counting
  - food-logging
  - IRP
related: "[[【01】IRP Proposal （Draft）]]"
---

# P8 — MyFitnessPal (2005): Calorie Counter App

## 📖 Citation (Harvard)
MyFitnessPal Inc. (2005) *MyFitnessPal: Calorie Counter* [Mobile application]. Available at: https://www.myfitnesspal.com (Accessed: 6 April 2026).

---

## What / So What / Now What

**What:** MyFitnessPal is the dominant food tracking app globally (200M+ registered users). It provides a calorie and macronutrient database, barcode scanning, exercise logging, and social features. It represents the **current state-of-the-art** for dietary self-tracking and has been **minimally redesigned since 2005** — nearly two decades without fundamental evolution.

**So What:** MyFitnessPal's persistence without meaningful design evolution is evidence that the field has reached a **local maximum**: incremental improvements to calorie counting do not address the fundamental feedback gap. High acquisition + high churn illustrates the intention-action gap in microcosm: people want to track but cannot sustain the effort.

**Now What:** Use as the primary reference for what this project is reacting against — a design paradigm so entrenched it cannot see its own limitations. The app audit in Section 5b will use MyFitnessPal as the benchmark to measure all other tools against.

---

## 🔑 Design Audit: Strengths, Limitations & Failure Modes

| Evaluation Dimension | MyFitnessPal | Assessment |
|---------------------|-------------|------------|
| **Feedback immediacy** | Delayed (end-of-day calorie total) | ❌ Fails Norman's feedback principle |
| **Ability (B=MAP)** | Manual logging of every item = high friction | ❌ Fails Fogg's Ability dimension |
| **Prompt quality** | Numerical reminder notifications | ❌ Weak emotional resonance |
| **Emotional tenor** | Clinical, transactional | ❌ No joy, no identity, no meaning |
| **Social layer** | Minimal; friends can see food logs | ⚠️ Surveillance, not celebration |
| **Eating disorder risk** | Calorie counting is risk factor #1 | ❌ Direct conflict with [[L6 - Roth et al (2024)]] |
| **Design evolution** | Essentially unchanged 2005–2026 | ❌ 20-year local maximum |
| **User retention** | High acquisition, very high churn | ❌ Intention-action gap in product form |

| Overall Assessment | Detail |
|---|---|
| **Key Strength** | Largest food database; barcode scanning reduces one friction point |
| **Key Failure** | Embodies every failure mode this project aims to overcome |
| **Design Lesson** | MyFitnessPal = the "before" state. This project designs the "after" |
