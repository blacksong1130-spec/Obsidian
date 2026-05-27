---
tags: [IRP, research, NotebookLM, improvements]
date: 2026-05-01
---

# NotebookLM Deep Research — IRP Improvement Analysis

**Notebook ID:** `a7d27d42-99d9-4d0e-8cbd-3c144da367e0`
**Research Task ID:** `7e614cd9-04be-4d18-aa00-dcf326c82e0e`
**Generated:** 2026-05-01

---

## Summary

Deep research completed successfully with **69 web sources found** on the topic:
> *"speculative design dietary feedback technology intuitive eating behavior change food tracking food freedom CGM wearables 2024 2025"*

After import processing, **180 total sources** are now present in the notebook (including the original IRP markdown sources and the newly imported web/PDF research sources). The import RPC timed out on the first attempt but sources were confirmed ready via `source list`.

Notable imported sources include:
- *#Instafood: a speculative design exploration of the eating experience* (Plymouth, PDF)
- *Wearable Health Technologies: New Frontiers in Eating Behavior* (Frontiers)
- *A biomechatronic system for real-time monitoring and modulation of eating behavior* (Frontiers)
- *Digital Tools and Chrononutrition: The Role of Wearables* (PMC/NIH)
- *Presentations at CHI'25 — Exertion Games Lab*
- *"Now I can see it works!" — CGM perspectives* (JMIR Diabetes)
- *6 Best Continuous Glucose Monitors for 2026*
- *9 Best Noninvasive Glucose Monitor Startups to Watch in 2026 — Seedtable*
- Plus 59 additional web sources

---

## Q1 — The 5 Most Significant Gaps in the IRP Research

**Question asked:** *"Based on all sources in this notebook, identify the 5 most significant gaps in the IRP research. For each gap: (1) what is missing, (2) which specific section of the proposal it affects, (3) what additional literature or evidence would strengthen it."*

---

**1. Methodological Homogeneity and "WEIRD" Sample Bias**

- **(1) What is missing:** The proposed participant sample of 6–8 Royal College of Art (RCA) design students is extremely homogeneous, creating a severe selection bias. It completely excludes the voices of non-app users, older adults, culturally diverse populations, and individuals recovering from eating disorders.
- **(2) Affected section:** Section 5a / 9a (Methodology: Data Types, Sources, and Participants).
- **(3) Additional literature/evidence:** Agapie's meta-analysis on behavior change technologies highlights the prevalent "WEIRD" (Western, Educated, Industrialized, Rich, Democratic) and binary gender biases in current HCI research, urging for more inclusive clinical and diverse population samples. Furthermore, real-world CGM studies (such as the NYU Langone cohort of Chinese Americans) demonstrate that culturally diverse populations experience unique privacy, stigma, and psychosocial barriers when adopting wearable dietary tech.

---

**2. Conflation of Two Distinct Problem Spaces**

- **(1) What is missing:** The proposal lumps two fundamentally different user needs into one "non-punitive feedback" solution. Problem A targets the general population who want to improve their diet but fail due to weak feedback. Problem B targets people with data anxiety or eating disorder (ED) risks who need protection from punitive tracking.
- **(2) Affected section:** Section 3 / 5 (Problem Framing: The Challenge and The Intention-Action Gap).
- **(3) Additional literature/evidence:** The expert evaluation explicitly calls out this conflation as a primary intellectual weakness. To strengthen this, you should create distinct "Future Personas" for these two cohorts. You can clearly delineate the behavioral logic by using Fogg's (2009) B=MAP model to address the motivation/prompt gap for the general population, while specifically utilizing Linardon's (2020) evidence on Acceptance, Mindfulness, and Compassion (AMC) interventions to address the ED-risk cohort.

---

**3. Over-Individualization and Absence of Socio-Cultural Methods**

- **(1) What is missing:** The current research toolkit (interviews, autoethnographic diary, app audits) is highly conservative and focuses almost exclusively on individual, private dietary experiences. It lacks the mechanisms to capture the social and communal dimensions of eating.
- **(2) Affected section:** Section 5b / 9b (Methodology: Data Collection Methods).
- **(3) Additional literature/evidence:** Tutor feedback strongly recommends introducing "Cultural Probes" (giving participants toolkits like cameras and diary cards) and "Commensal Ethnographic Observation" (observing real shared dining scenarios) to break out of the individualistic focus. This shift is theoretically backed by Lupton (1996), who establishes that eating is a site of social performance, power, and identity, and Rozin et al. (1999), who contrast the anxiety-driven medicalized food culture of Americans with the pleasure-driven social food culture of the French.

---

**4. Practical and Technological Constraints of "Post-Meal" Measurement**

- **(1) What is missing:** The proposal advocates heavily for *post-ingestion* feedback to solve the "phenomenological silence" of eating. However, it glosses over the severe physical, technological, and privacy hurdles of capturing real-time dietary data without being highly intrusive.
- **(2) Affected section:** Section 4 (Scientific Grounding) and Section 5d / 9d (Design and Futures Methods: Speculative Prototyping).
- **(3) Additional literature/evidence:** Incorporating literature on the limitations of biomechatronic systems would ground the speculative design in reality. Research shows these systems struggle with sensor accuracy (distinguishing chewing from talking), user comfort, and data privacy. Additionally, qualitative data from users of wearable dietary cameras (like the eButton) and CGMs report significant burdens, including the devices being socially awkward, visually obtrusive, fragile (falling off during activity), and inducing anxiety about constant surveillance.

---

**5. Unrealistic Project Timeline and Visual/Structural Deficiencies**

- **(1) What is missing:** The project schedule is detached from academic reality, extending into October despite final submissions being due around July/August. Furthermore, for a Design Futures project, the document critically lacks visual evidence, speculative artifact sketches, a functional table of contents, and properly formatted references (Harvard style).
- **(2) Affected section:** Section 14 / 9 (Project Plan to End of Programme), and the overall formatting and Appendices.
- **(3) Additional literature/evidence:** The author's own debugging notes demand an immediate restructuring of the timeline to fit the July/August deadline. To fix the visual gaps, you should utilize tools from the Design Futures Toolkit — such as mapping the project with a *Futures Wheel* or *Context Map*. Most urgently, as advised in the expert critique, you need to produce the first rough, physical sketch of "The After Glow" artifact to transform the project from a purely theoretical paper into active design research.

---

## Q2 — Recent Developments (2024-2026) Not Yet Covered in the IRP

**Question asked:** *"What are the most promising recent developments (2024-2026) in non-invasive dietary sensing, ambient food feedback, and compassion-based health design that are NOT yet covered in this IRP? List specific technologies, papers, or projects that should be added."*

---

### 1. Non-Invasive Dietary Sensing & Biofeedback

Your current IRP relies heavily on Continuous Glucose Monitors (CGMs) like Abbott Lingo, which are invasive (subcutaneous) and can trigger data-induced anxiety. You can strengthen the "High-Tech Biometric" and "Intuitive Technology" scenarios by integrating these emerging needle-free and frictionless sensors:

- **Optomyography (OMG) via Smart Glasses (e.g., OCOsense "Sense"):** Slated for consumer release, these smart glasses use facial OMG sensors at the temple to track chewing frequency, bite count, and meal pace with over 90% accuracy. Crucially, they process images locally without storing raw photos, preserving privacy while delivering real-time haptic feedback to slow down eating pace.
- **Next-Generation Non-Invasive Glucose Monitors (2025–2026 Startups):** Companies are actively developing truly non-invasive CGMs that eliminate the need for skin-piercing patches. Notable projects to reference include **Rockley Photonics** (using silicon photonics), **GraphWear Technologies** (graphene-based sweat/surface sensing), and **DiaMonTech** (mid-infrared spectroscopy).
- **Biomechatronic Smart Utensils:** Projects like the **"Swan" companion spoon** (Khot et al., 2020) and in-ear acoustic monitors tracking laryngeal vibrations provide unobtrusive alternatives to manual calorie logging.

### 2. Ambient Food Feedback & Multisensory Interventions

Your IRP highlights the need for low-friction "Choice Architecture." Integrating Extended Reality (XR) and multisensory sound design can provide real-time, perceptual feedback that alters the eating experience itself without relying on numerical dashboards.

- **AR/VR Portion Perception Modulators:** Recent studies demonstrate that XR can directly alter food perception. **Sharma et al. (2024)** proved that Augmented Reality (AR) menus successfully mitigate over-ordering by changing portion size perceptions and highlighting food waste. Similarly, **Braga et al. (2025)** developed an immersive Virtual Reality (VR) Dietitian that actively improves portion-size estimation accuracy and self-efficacy.
- **Auditory-Gustatory Interfaces (Sonic Gastronomy):** CHI 2025 features cutting-edge research on using sound as a dietary interface. **"Sonic Delights"** (Deng et al., 2025) and **"GastroConcerto"** (Wang et al., 2025) explore how acoustic feedback can enhance the hedonic value of food. Additionally, **"Auditory Seasoning Filters"** (Kleinberger et al., 2023) use augmented sonic feedback of chewing sounds to alter flavor perception.
- **Shape-Changing Tableware:** The **"Cymatics cup"** (Chen et al., CHI 2024) leverages acoustic vibrations to dynamically alter the shape of drinks, offering a playful, ambient way to interact with food.

### 3. Compassion-Based & Mindful Health Design

To bolster your "Ethical Balance" constraints and Food Freedom arguments, you should incorporate recent frameworks and systems that operationalize non-punitive, mindful eating.

- **The *MindEat!* Framework (DIS 2025):** Developed by Khot & Yi, this is a brand-new design framework specifically tailored for navigating "screen-centric dining." It acts as a guide for creating technologies that support mindful eating experiences without judgment, directly addressing the retention crisis and ethical risks you noted in current tracking apps.
- **Digital Nudging via Affective Avatars:** Research by **Hao et al. (2024)** and **Aman et al. (2025)** demonstrates how attractive, emotionally intelligent digital avatars can be used as persuasive "nudges" in restaurants, promoting healthier choices and diner satisfaction without inducing guilt.
- **Chew-Draw Interactive Systems:** **"Eat2pic-mobile"** (Nakamura et al., 2025) is a novel system that uses smartphones and earables to translate chewing into digital drawing, gamifying and encouraging mindful chewing without focusing on caloric intake.
- **LLM Role Customization for Empathy:** A DIS 2025 paper on the **CloudEcho system** (Li et al.) highlights how customizing the roles of LLM-driven chatbots significantly improves user trust and emotional support for users with depression. This perfectly supports your proposal for a non-punitive, conversational AI that acts as a "steward" rather than an "optimizer."

---

## Q3 — Evaluation of the IRP Methodology Section

**Question asked:** *"Evaluate the IRP methodology section. What are the weaknesses in the interview protocol design, the autoethnographic diary study approach, and the speculative prototyping framework? Suggest specific improvements with justification."*

---

### 1. The Interview Protocol Design

**Weaknesses:**
The proposed participant sample of 6–8 Royal College of Art (RCA) design students is extremely homogeneous, creating a severe "WEIRD" (Western, Educated, Industrialized, Rich, Democratic) selection bias. It critically excludes culturally diverse populations, older adults, non-app users, and individuals recovering from eating disorders. Additionally, semi-structured interviews rely heavily on post-hoc self-reporting, which is highly vulnerable to memory bias, recall limitations, and the social desirability effect.

**Improvements:**
- **Diversify the Sample and Include Experts:** Actively recruit beyond the student bubble and introduce expert interviews involving eating disorder clinicians, food anthropologists, and behavioral scientists to elevate the ethical credibility and non-user perspective.
- **Integrate Experience Sampling Method (ESM):** To bypass memory flaws, introduce ESM or Ecological Momentary Assessment (EMA) to prompt participants with brief questions in real-time immediately after eating. This provides high ecological validity and directly captures the "post-meal" phenomenological silence you are investigating.

---

### 2. The Autoethnographic Diary Study

**Weaknesses:**
The 4-week diary approach suffers from an over-individualization of the eating experience. It is highly conservative and isolates the user, entirely missing the social, communal, and cultural dimensions of dining. Furthermore, by relying on manual journaling, the methodology paradoxically relies on the same high-friction, manual logging paradigm that the IRP fundamentally criticizes as a driver of user drop-off.

**Improvements:**
- **Deploy Cultural Probes and Commensal Ethnography:** Shift away from isolated journaling by giving participants "Cultural Probes" (toolkits with cameras, prompts, and diary cards) to autonomously record their environments. Additionally, conduct "Commensal Ethnographic Observations" to study real shared dining scenarios, as eating is largely a social performance (Lupton, 1996).
- **Pair with Passive Data Collection:** To reduce logging friction, complement the qualitative diaries with a passive tracking device like the eButton (a wearable chest camera that automatically records meals) or a CGM. This combination objectively captures dietary intake without manual effort, allowing the diary to focus strictly on the user's emotional and sensory reflections.

---

### 3. The Speculative Prototyping Framework

**Weaknesses:**
The current speculative framework is purely theoretical. In a Design Futures context, describing 3–5 artifacts without providing any rough, physical sketches or visual evidence is a major intellectual gap. Furthermore, speculative design risks becoming an authoritarian "Showroom approach" detached from real-world constraints. Given the acute risk of eating disorders, irresponsibly provocative speculative artifacts could also cause genuine psychological harm during user testing.

**Improvements:**
- **Build Immediate Physical Mock-ups:** You must move out of the purely conceptual phase by building the first low-fidelity physical prototype (e.g., a cardboard mock-up of "The After Glow" with an LED light). The physical object changes the dynamic of user testing from abstract imagination to concrete interaction.
- **Utilize Participatory Co-Design:** Instead of designing the future *for* the participants, turn them into co-investigators through participatory design workshops. Inviting users to play with clay or sketch their own tools democratizes the process and ensures the prototypes are grounded in actual user needs rather than top-down assumptions.
- **Apply "Mundane" TBD Catalog Framing:** To make the speculative artifacts highly relatable and testable, present them using the "Near Future Laboratory TBD Catalog" approach. Frame the future dietary feedback tools as ordinary, mundane consumer products (like an Amazon listing in 2035) to ground the futuristic critique in everyday plausibility.

---

## 续接点（Resumption Checkpoint）

- **已完成：**
  - [x] Deep research wait + source import (180 sources in notebook, 69 from web research)
  - [x] Q1: 5 most significant IRP research gaps identified
  - [x] Q2: Recent 2024–2026 developments not covered in IRP listed
  - [x] Q3: Methodology weaknesses + improvements evaluated
  - [x] Results saved to this file

- **下一步（suggested）：**
  - 根据 Q1 的 5 个 gap，逐一修订 IRP 各对应章节
  - 根据 Q2 的新文献清单，补充 Section 4（Scientific Grounding）和 Section 5d（Speculative Prototyping）的参考文献
  - 根据 Q3 的建议，在方法论部分新增 ESM / Cultural Probes / Participatory Co-Design 的具体设计

- **续接指令：** 读取本文件，从"下一步"任务继续执行，或开启新会话针对特定修订章节深入展开
