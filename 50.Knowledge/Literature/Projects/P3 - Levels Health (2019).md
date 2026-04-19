---
type: literature-note
code: P3
author: Levels Health Inc.
year: 2019
tags:
  - practice
  - CGM
  - continuous-glucose-monitoring
  - metabolic-feedback
  - wearable
  - IRP
related: "[[【01】IRP Proposal （Draft）]]"
---

# P3 — Levels Health (2019): Continuous Glucose Monitoring for Metabolic Health

## 📖 Citation (Harvard)
Levels Health Inc. (2019) *Levels: Continuous Glucose Monitoring for Metabolic Health* [Mobile application and service]. Available at: https://www.levels.com (Accessed: 6 April 2026).

---

## What / So What / Now What

**What:** Levels is a direct-to-consumer CGM service for non-diabetics. Users wear a small subcutaneous sensor (Dexcom or Abbott Libre) providing real-time blood glucose data every few minutes, showing how specific foods, movement, and stress affect metabolism. The app provides glucose trend lines, meal responses, and personalised recommendations.

**So What:** Levels is the most advanced existing attempt to close the dietary feedback loop through real-time biological signal. Its **strength** is immediacy: users see within 30 minutes how a meal affects their metabolism. Its **weaknesses** are cost, invasiveness, and the acute risk of producing anxiety around glucose spikes that can mirror disordered eating patterns.

**Now What:** Use Levels as the most advanced current-state reference for dietary feedback technology — and as the primary source of design failure modes to avoid. The speculative work asks: what comes *after* CGM? What dietary feedback is possible when sensors are non-invasive?

---

## 🔑 Strengths, Limitations & Design Lessons

| Dimension | Levels Health | Design Implication for Project |
|-----------|--------------|-------------------------------|
| **Feedback immediacy** | ✅ Real-time, 30-minute meal response | Gold standard for timeliness |
| **Signal richness** | ⚠️ Single metabolic marker (glucose only) | Nutrition is multi-dimensional; one signal is insufficient |
| **Invasiveness** | ❌ Subcutaneous sensor required | Barrier to mainstream adoption; speculative designs should explore non-invasive alternatives |
| **Cost** | ❌ ~$200+/month | Not accessible; limits design potential to affluent users |
| **Eating disorder risk** | ❌ Glucose anxiety documented in users | Must include safeguards; connects to [[L6 - Roth et al (2024)]] |
| **Emotional design** | ⚠️ Clinical data presentation | Missing the emotional resonance of Strava/Oura |

| Overall Assessment | Detail |
|---|---|
| **Key Strength** | Proves real-time dietary feedback changes behaviour; technology concept is valid |
| **Key Limitation** | Current form is invasive, expensive, anxiety-inducing, and single-signal |
| **Design Position** | This project is asking: what is the design-mature, emotionally intelligent successor to Levels? |
