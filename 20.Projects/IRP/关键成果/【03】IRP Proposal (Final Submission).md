---
tags:
  - IRP
  - proposal
  - behavioural-design
  - food-futures
  - RCA-GID
date: 2026-04-12
version: v10-Full-Academic-Expansion
---

# Why Eating Well Feels Like Nothing: 
## Redesigning the Feedback Loop for Dietary Behaviour

**Weijie Li** | Student Number: 10066513
Design Future | Royal College of Art
*IRP Proposal | April 2026 | Final Submission*

---

## 📋 Table of Contents

| # | Section | Page |
|---|---------|------|
| — | Statement of Authorship & AI Disclosure | p.1 |
| **Executive Summary** | Strategic Logic Chain | p.2 |
| **1** | **Introduction and Justification of the Topic** | p.3 |
| **2** | **Background: Literature, Practice, Signals and Trends** | p.4 |
| **3** | **Problem Framing** | p.10 |
| **4** | **Design Futures Approach** | p.12 |
| **5** | **Methodology** | p.15 |
| **6** | **Critique Documentation** | p.21 |
| **7** | **Project Outputs, Stakeholders and Impacts** | p.22 |
| **8** | **Personal Objectives** | p.22 |
| **9** | **Project Plan to End of Programme** | p.23 |
| — | **Reference List** | p.24 |
| — | **Appendices** | p.26 |

---

## 🗺️ Strategic Logic Chain
*The deductive narrative path of the IRP research from feedback gap to speculative intervention.*

![[Strategic_Logic_Chain.svg|610]]

---

<div style="page-break-before: always;"></div>

# Statement of Authorship and Acknowledgements

This proposal was written independently as part of the IRP Proposal module, Global Innovation Design, Royal College of Art. The research direction emerged from an ongoing inquiry into preventive health, dietary behaviour, and the design of feedback systems, which began in my prior study at the University of Nottingham (IRP: The Small Revolution in Lifestyle Habits, 2024–2025).

I am grateful to my tutors for their feedback during the April 2026 project discussion, which helped sharpen the focus of this proposal — particularly in identifying the ethical dimension of eating disorders and food freedom as essential constraints on any proposed feedback design.

# Use of AI Disclosure

This submission was produced by me in my own words and using my own imagery, except for quotations and images from published and unpublished sources which are clearly indicated and acknowledged as such. I used AI assistance for: (1) systematic literature identification to locate relevant behavioral science papers; (2) technical document formatting and data visualization rendering (ChartsView). All critical analysis, theoretical framing, and speculative design directions are my original work.

Print name: Weijie Li          Signed: ___________________          Date: April 12, 2026

---

<div style="page-break-before: always;"></div>

# 1. Introduction and Justification of the Topic

I am interested in the future of preventive health behaviour and in particular the future of **dietary feedback design** in the context of people who want to eat better but cannot feel whether they are doing so. This is an important challenge because, unlike exercise or sleep, the benefits of good nutrition are almost entirely invisible on a human timescale: a week of eating well generates no signal, no score, no sense of progress. This is not a motivation problem — it is a **feedback problem**.

_Exercise has been transformed by design._ Strava turns a morning run into a social performance: segments, kudos, leaderboards, personal records. Oura Ring makes sleep legible: a nightly score distils hours of invisible biology into a single recoverable number. These tools work because they close the feedback loop — they translate invisible physiological processes into immediate, emotionally resonant signals (Norman, 2013).

_Dietary behaviour, by contrast, remains a design desert._ The dominant tool — MyFitnessPal, launched in 2005 — asks users to manually log every meal into a calorie database. The interface has barely evolved in two decades. There is no metabolic signal, no wellbeing score, no social ritual around eating well. The consequence is predictable: most users abandon food tracking within weeks (Schembre et al., 2018). The Fogg Behaviour Model clarifies why: motivation alone is insufficient without ability and prompt — and current dietary tools fail on both (Fogg, 2009).

> [!chart] 📊 Evidence: The App Retention Crisis
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
  height: 300
  appendPadding: [30, 10, 10, 10]
  xField: 'day'
  yField: 'retention'
  point: { size: 5, shape: 'diamond' }
  color: '#F4664A'
  title: { text: 'Health & Fitness App Retention Curve (%)', visible: true }
```

This project investigates the design gap between what we know about dietary behaviour change and what existing tools actually deliver. It asks: what would it take for eating well to feel as meaningful, legible, and rewarding as completing a run? And it adds a critical ethical constraint: any feedback system must not only improve health metrics but must also preserve food joy, prevent disordered eating, and support genuine **Food Freedom** — the right to make informed choices about eating without guilt or compulsion (Tribole and Resch, 2020).

A design futures approach is appropriate here because this is not simply a product design problem: it is a question about the kind of relationship we want technology to have with the most intimate act of daily life. Using speculative and critical design tools (Dunne and Raby, 2013), this project can interrogate the assumptions embedded in current health technology and prototype radically different futures for dietary feedback.

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #1: Macro Societal Context
> *Responding to: "It's almost too focused. Like it's missing the context... the bigger context." — Tutor 3*

==The urgency of redesigning dietary feedback is driven by a systemic market failure and an escalating public health crisis. Despite a $25 billion annual US investment in digital health, the dominant feedback paradigm of manual food logging is demonstrably failing, with health and fitness apps retaining only 3–4% of users by Day 30 (Business of Apps, 2026; Precedence Research, 2025). Furthermore, punitive tracking paradigms actively cause harm: 73% of MyFitnessPal users with an eating disorder report that the app contributed to their condition (Phelan et al., 2020). This is occurring against a backdrop of surging eating disorder rates, which have seen a 15-fold increase among 17–19-year-olds in the UK from 0.8% in 2017 to 12.5% in 2023 (NHS England, 2023; Priory Group, 2025). Simultaneously, the June 2024 FDA over-the-counter (OTC) clearance of the Abbott Lingo continuous glucose monitor marks a critical paradigm shift, transitioning clinical metabolic tracking into the mainstream consumer wellness market and demanding a new, human-centred design language (Abbott Newsroom, 2024).==

---

<div style="page-break-before: always;"></div>

# 2. Background: Literature, Practice, Signals and Trends

## 2a. Research Questions
1. Why does dietary behaviour produce so little immediate, legible feedback compared to exercise and sleep, and what are the design, behavioural, and physiological reasons for this gap?
2. What existing tools and approaches have attempted to address dietary feedback, and why do they fail to achieve sustained engagement?
3. What is the relationship between dietary feedback design and the risk of disordered eating, and how can feedback systems be designed to support food freedom?
4. What signals and speculative possibilities exist for alternative dietary feedback paradigms that are immediate, holistic, and emotionally resonant without being punitive?

## 2b. Research Process
Research was conducted across three phases. The first phase involved a systematic literature review drawing on Google Scholar, PubMed, and design databases. The second phase was a practice review covering existing apps, wearables, and critical design projects. The third phase involved mapping signals and trends using the four-lens framework (Human / Society / Technology / Nature) introduced in the RCA Project Design Approach workshop (March 2026).

![[01 — Futures Triangle.png|900]]
*Figure 1 — Futures Triangle Analysis: Mapping the forces shaping dietary feedback.*

## 2c. Research Summary

### The Feedback Gap: Why Eating Well Feels Like Nothing
The core problem is defined by a "phenomenological silence." When you eat a nutritious meal, you feel full, but the metabolic benefits—reduced inflammation, improved insulin sensitivity—play out over weeks at a cellular level imperceptible to the user. This gap triggers **hyperbolic discounting** (Kahneman, 2011), where System 1 fast-thinking prioritizes immediate sensory reward over abstract long-term health.

![[02 — Futures Wheel.png|900]]
*Figure 2 — Futures Wheel: Consequences of the persistent feedback gap.*

The emergence of **Continuous Glucose Monitoring (CGM)** for non-diabetics represents the most promising technical development, yet it carries the risk of invasive surveillance and data-induced anxiety.

> [!chart] 📊 Evidence: CGM Market Transformation
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
  height: 300
  appendPadding: [30, 10, 10, 10]
  xField: 'year'
  yField: 'market'
  point: { size: 4 }
  color: '#5B8FF9'
  meta: { market: { alias: 'OTC CGM Market Size ($M)' } }
```

### The Eating Disorder Constraint
Tutorial feedback in April 2026 highlighted that feedback design carries acute ethical risk. Roth et al. (2024) established significant associations between intensive dietary tracking and elevated disordered eating risk.

> [!chart] 📊 Evidence: UK Clinical Trends
```chartsview
#-section-
type: Column
data:
  - year: '2013/14'
    admissions: 2868
  - year: '2015/16'
    admissions: 13200
  - year: '2020/21'
    admissions: 24300
options:
  height: 300
  appendPadding: [30, 10, 10, 10]
  xField: 'year'
  yField: 'admissions'
  color: '#F4664A'
  label: { position: 'top', style: { fill: '#000' } }
  title: { text: 'NHS Hospital Admissions for Eating Disorders', visible: true }
```

The **Intuitive Eating** movement offers a protective counter-framework by cultivating internal body attunement rather than external rules. 

> [!chart] 📊 Evidence: Protective Effect of Intuitive Eating
```chartsview
#-section-
type: Column
data:
  - measure: 'Baseline IE +1'
    reduction: 74
  - measure: 'Growth IE +1'
    reduction: 71
options:
  height: 300
  appendPadding: [30, 10, 10, 10]
  xField: 'measure'
  yField: 'reduction'
  color: '#30BF78'
  label: { position: 'top', style: { fill: '#000' } }
  meta: { reduction: { alias: 'Reduction in Binge Eating Risk (%)' } }
```

![[Pasted image 20260409123421.png|900]]
*Figure 3 — Intuitive Eating Principles as Design Constraints.*

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #2: Futures Time Horizon (Medicine 2.0 → 3.0)
> *Responding to: "I understand Medicine 3.0, but actually what is Medicine 2.0? Where is it coming in? What are the trends? What's the time horizon?" — Tutor 3*

==This technological shift underscores the broader transition from Medicine 2.0 to Medicine 3.0. Medicine 2.0 operates on a reactive, disease-treatment model relying on standardised human bodies and generalised population-level guidelines, such as food pyramids and generic caloric targets. In contrast, Medicine 3.0 focuses on proactive prevention through continuous, personalised monitoring and real-time, embodied feedback (Attia and Gifford, 2023). The futures time horizon for this project is anchored directly in this trajectory: it originates with the scientific pivot of the 2015 Zeevi et al. bioindividuality findings, accelerates through the 2024 mass-market availability of OTC CGMs, situates this design intervention in 2026 to define what non-punitive dietary feedback should feel like before engineering-led paradigms dominate, and projects towards a 2035 speculative horizon where non-invasive, intuitive metabolic feedback is normalised.==

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #3: Scientific Backing for Personalised Post-Meal Data
> *Responding to: "Maybe try to look into some research which talks about the importance of data before and after food..." — Tutor 2*

==The core argument that personalised, post-meal measurement is vastly superior to generic, population-based pre-logging is firmly grounded in empirical science. The pivotal study by Zeevi et al. (2015) continuously monitored 800 participants across 46,898 meals, demonstrating that identical foods provoke dramatically different postprandial glycaemic responses across individuals based on their unique metabolic and microbiome profiles, meaning pre-set generic data cannot accurately guide individual behaviour. Recent research validates the behavioural efficacy of personalised post-meal data: a 2025 meta-analysis found that continuous glucose monitoring facilitates healthier dietary behaviours through real-time, individualised feedback, leading to a significantly lower proportion of energy intake from carbohydrates without requiring traditional calorie restriction (Zhang et al., 2025). Additionally, pairing CGM data with smartphone integration has been shown to significantly improve glucose variability and drive healthier, sustained eating habits compared to static dietary advice (Zahedani et al., 2023).==

> [!tip]+ ✦ **Round 2 · 2026-05-01** — Cross-Cultural Dimension: What Japan, France and Denmark Tell Us
> *Developing the cultural case studies mentioned in tutor feedback — these directly challenge the Anglo-American tracking obsession*

==The dominant paradigm of dietary self-tracking is a culturally specific phenomenon — rooted in the Protestant work ethic, Anglo-American anxieties about bodily control, and Silicon Valley's quantification ideology. Three counter-models from outside this paradigm offer critical design inspiration:==

==**Japanese *Itadakimasu* and *Hara Hachi Bu*:** The Japanese practice of *Itadakimasu* ("I humbly receive") frames each meal as a relational act — a ritual acknowledgement of gratitude to the food, the farmer, and the ecosystem. *Hara Hachi Bu* ("eat until 80% full") is an Okinawan cultural norm that operates as a deeply embodied, internal stopping cue — the exact interoceptive literacy that MB-EAT attempts to train clinically. Crucially, these practices achieve what health tracking cannot: they make non-punitive, embodied food awareness a *cultural default*, not a technological imposition (Rozin et al., 1999).==

==**The French *Paradoxe Culinaire*:** Despite consuming high-fat diets, French populations historically show lower rates of heart disease — a puzzle attributed not to nutritional content but to *how* food is consumed: slowly, socially, with sensory attention, and without guilt (Rozin et al., 1999). The French relationship with food is characterised by pleasure, restraint without anxiety, and the sharp cultural stigma attached to eating while distracted. This suggests that the quality of the *eating experience* — not its nutritional content — may be the primary driver of healthy dietary behaviour. A design implication: the target of intervention should be the *experience* of eating, not the food itself.==

==**Karl Krukow × COOP (Denmark):** The Danish retail cooperative COOP partnered with behaviour designer Karl Krukow to redesign their food environment using nudge principles — repositioning salads at eye level, reducing portion sizes of indulgent items, and deploying social proof messaging at point of sale. The result was measurable improvement in population-level food choices without any individual being told what to eat. This models a *meso-scale* intervention: changing the *environment* rather than monitoring the *individual*. It directly challenges this IRP's current focus on personal biofeedback by asking: could redesigning shared food environments achieve more than personalised metabolic tracking?==

### Reframing through Tutor Feedback (April 8)
Tutorials introduced three critical frameworks: **Compassion-Based Design**, **Embodiment vs. Empowerment**, and **Cultural Case Studies** (Japanese Itadakimasu, French food rituals, Karl Krukow).

![[04-Tutor-Feedback-Frameworks.sketch.md|900]]
*Figure 4: Tutor Feedback Sketch Model — Reframing the project logic.*

---

<div style="page-break-before: always;"></div>

# 3. Problem Framing

### The Challenge: The Intention-Action Gap
The central challenge this project engages is the _Intention-Action Gap in dietary behaviour_: the persistent, well-documented failure of people to translate genuine intentions to eat better into sustained dietary behaviour change. This gap exists not because people lack information or motivation, but because eating well produces no immediate, perceivable signal of success. Without feedback, behaviour cannot be reinforced, iterated, or emotionally validated. Design has not solved this problem: the dominant approach (calorie counting apps) has been in steady decline in user retention for over a decade. This project asks whether a fundamentally different feedback paradigm — one that makes nutrition as legible and emotionally resonant as exercise — could close this gap without harming the relationship with food.

### System-Level Perspectives
This project operates primarily at the intersection of two systemic lenses:
- **Human:** Individual dietary behaviour, cognitive biases (hyperbolic discounting, present bias), emotional relationships with food, body image, and lived eating experience. This is the primary lens.
- **Technology:** Existing feedback tools, sensor technology (CGM, wearables), data visualisation, AI food recognition, and the design infrastructure of behaviour change applications. This is the secondary lens.
- **Society (contextual):** Diet culture, eating disorder prevalence, the anti-diet movement, food advertising, and public health frameworks. This provides critical context and ethical constraints.
- **Nature (contextual):** Gut microbiome, metabolic biology, circadian eating patterns, and the physiological reality of nutrition. This grounds the project in biological reality.

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #7: Two Distinct User Cohorts
> *Responding to: conflating dieters and eating disorder risk users into one vague "non-punitive" solution*

==A critical flaw in current dietary feedback systems is the conflation of two fundamentally distinct user cohorts, requiring divergent design logics. For the general population, the primary barrier is tracking friction; this is best understood through the Fogg Behaviour Model (Fogg, 2009), where manual logging creates insurmountable Ability barriers and delayed feedback fails as an effective Prompt, resulting in widespread abandonment. However, for users at risk of eating disorders, the problem is not a lack of engagement but the psychological harm caused by the feedback itself: intensive dietary self-monitoring is strongly associated with elevated eating disorder risk (Roth et al., 2024). Specifically, punitive tracking tools trigger the "reification of data," a process where external numerical metrics progressively replace the direct sensory and emotional experiences of eating (Wallace et al., 2025). To safely address this vulnerable cohort, the design must pivot away from compliance-driven architecture and adopt an Acceptance, Mindfulness, and Compassion (AMC) framework (Linardon, 2020) alongside the principles of Intuitive Eating (Tribole and Resch, 2020). By explicitly separating these user profiles, the design space can responsibly address tracking fatigue in the general population without inadvertently weaponising data against vulnerable users.==

### Temporal and Contextual Scale
- **Temporal:** The project operates at a medium-to-long term temporal scale: **5–20 years**. This is appropriate because: (1) preventive health interventions require years to demonstrate measurable outcomes; (2) the sensor technology needed for non-invasive dietary feedback is 5–10 years from consumer readiness; and (3) the cultural shift from diet-culture to food freedom thinking is still unfolding. The speculative design work will project forward to 2035, using backcasting from a preferred future to identify present-day intervention points (Martell, 2026).
- **Contextual:** The primary scale is **micro** — the individual's daily experience of eating, at the level of a single meal, a kitchen, a phone screen. This is where the feedback gap is most acutely felt and where design can most directly intervene. The project will also engage **meso** scale considerations (how design products shape cultural norms around eating) and acknowledge **macro** drivers (public health systems, food industry incentives) as the systemic context within which any intervention must operate.

---

<div style="page-break-before: always;"></div>

# 4. Design Futures Approach

### Disciplinary Positioning
This project is situated at the intersection of two primary disciplinary fields: _Behaviour Design_ (the design of systems that support deliberate human behaviour change) and _Speculative / Critical Design_ (the use of design fiction and provocative artefacts to interrogate assumptions about technology and futures). It draws on Futures Studies for its temporal orientation, and on Food Studies and Health Psychology for its empirical grounding.

![[Disciplinary_Map.svg|694]]

### The Three Roles of the Design Futurist
As a design futurist on this project, my role is threefold:
1. **Cartographer of the Present**: Mapping why the current dietary feedback landscape looks the way it does — what assumptions it encodes, what it optimises for, and whose interests it serves.
2. **Critical Provocateur**: Designing speculative artefacts that make visible the absences and contradictions in current food technology, and that open space for imagining radically different futures.
3. **Preferential Futurist**: Using backcasting methodology (working backwards from a preferred future in which eating well is as legible and rewarding as sleep tracking) to identify near-term design opportunities and interventions (Martell, 2026).

### Design Approaches
- **Behavioural Architecture:** Designing the environment and feedback system to make healthy choices easier and more rewarding, drawing on Fogg's B=MAP model (2009) and Thaler and Sunstein's (2008) nudge theory.
- **Compassion-Based Design:** Drawing on tutor feedback (April 2026), compassion-based design reframes the designer's relationship to the user: it is not the user who must become more disciplined, more data-literate, or more motivated. Rather, it is the designer who must intervene with *genuine care* — designing systems that celebrate food, honour the body, and treat eating as a site of joy rather than surveillance. This counters the hegemonic trajectory of food tracking (more data, more optimisation, more anxiety) with a counter-proposition: technology in service of food freedom.
- **Embodiment and Empowerment Framing:** *Embodiment* asks: how can a design intervention help people connect more deeply with their own bodies — not as objects to be optimised, but as subjects to be inhabited and understood? *Empowerment* asks: how can this intervention give people agency over information — making data available for those who choose to use it, without imposing data on those who do not? Together, these two framings suggest that the most valuable dietary feedback system is one that amplifies the body's own signals rather than replacing them with external metrics.

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #6: Awareness-First Positioning (not a monitoring app)
> *Responding to: "Depends what kind of app you're referring to. Is it about health monitoring app or is it about awareness app?"*

==The proposed speculative intervention is explicitly positioned as an **awareness-first** application rather than a traditional health-monitoring tool. Its primary objective is to cultivate **interoceptive literacy** — the user's ability to accurately read, trust, and respond to internal bodily signals such as hunger, satiety, and emotional triggers. This approach is theoretically grounded in the Mindfulness-Based Eating Awareness Training (MB-EAT) framework, which has demonstrated substantial clinical efficacy in training interoceptive awareness and improving eating regulation by focusing purely on internal physical cues (Kristeller and Wolever, 2011). Unlike conventional monitoring apps that cause the "reification of data" — a process where external numerical metrics progressively replace direct sensory experience (Wallace et al., 2025) — this awareness-first tool functions as a "steward" rather than an "optimiser." Operating on the design principle of **"amplify, don't replace,"** the intervention leverages digital feedback not to substitute human intuition with external data dictates, but to actively scaffold and amplify the body's own internal signals.==

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #8: REFLECTIVE Framework (operationalising 'reflect not judge')
> *Responding to: the phrase "reflect, not judge" being heavily used as a slogan but lacking any concrete design specifications*

==To transform the philosophical slogan "reflect, not judge" into an actionable design specification, this project introduces the **REFLECTIVE Framework**, operationalising non-punitive feedback into three concrete, evaluable criteria. First, feedback must be **Descriptive, not Evaluative**: all comparative benchmarks, scoring systems, and colour-coded pass/fail indicators must be removed from the primary UI, replacing moralising verdicts with neutral biological descriptions. Second, it must be **Relative, not Absolute**: acknowledging the bioindividuality of metabolism, feedback should anchor strictly to the user's own historical baseline rather than generalised population averages or generic dietary guidelines (Zeevi et al., 2015). Finally, the interaction must be **Closed-Loop, not Open-Ended**: to prevent the anxiety induced by perpetually incomplete food diaries, the system replaces open-ended tracking with an explicit 60-second post-meal closure event, ensuring the interaction has a definitive end and releasing the user from constant vigilance.==

![[03 — 2035 Scenario Matrix.png|900]]
*Figure 5 — 2035 Scenario Matrix: User Agency vs. Technology Type.*

> [!tip]+ ✦ **Round 2 · 2026-05-01** — 2035 Scenarios: Three Vivid Futures
> *Expanding the scenario matrix with concrete 'day in the life' narratives and failure modes for each future*

### Scenario 1: High-Tech Biometric — "Food as Code"

==**A Day in the Life (2035):** You wake up and your smart mirror has already projected your overnight metabolic recovery score onto the glass. In the kitchen, a 3D food printer — functioning like the *Sushi Singularity* system — has fabricated a breakfast block calibrated to your current cortisol and glucose levels. As you eat, your OCOsense smart glasses use facial optomyography to track your chewing rate, delivering a haptic vibration to your temple if you eat too quickly. You don't notice whether you feel full; you stop eating when your subcutaneous sensor notifies your glasses that your glycaemic curve has reached its optimal peak. **Technology:** True non-invasive CGMs via sweat biosensors or mid-infrared spectroscopy; facial neuromotor interfaces; bio-integrated food printers. **Cultural Norms:** "Food as fuel" has evolved into "food as code." Calorie counting is archaic; citizens casually share metabolic stability scores as social currency; bioindividuality is absolute law. **What Could Go Wrong:** Total *reification of data* (Wallace et al., 2025). People lose the ability to feel hunger or satiety without a device confirming it. Maintaining a "flatline" glucose curve creates a new epidemic of orthorexia and obsessive data-induced anxiety — Medicine 3.0's dark shadow.==

### Scenario 2: Ambient Social — "The Disappearing Interface"

==**A Day in the Life (2035):** You sit down for dinner with three friends. No screens, no patches, no phones. The dining environment itself is the sensor and the interface. As the meal progresses, hidden radar tracks your group's heart rate variability and conversational pacing. The table lighting shifts dynamically. An auditory-gustatory interface (*Sonic Delights* / SONARIOS) plays specific acoustic frequencies that enhance the perceived sweetness of the dessert — the chef reduced the sugar by 40% and no one notices. When group stress rises, the room's temperature drops slightly and the shape-changing tableware adjusts to slow your sipping rate. **Technology:** Shape-changing tableware; spatial biometric sensors; smart environments; acoustophoresis — using sound waves to alter food perception without altering the food. **Cultural Norms:** The French *paradoxe culinaire* and Japanese *Itadakimasu* have been digitised. Society now prioritises communal pleasure and the shared performance of eating over individual optimisation. Eating alone is viewed as a minor tragedy. **What Could Go Wrong:** *Ambient Surveillance Capitalism*. Big Food conglomerates track collective physiological responses to products in restaurants — manipulating ambient conditions to trigger hyper-palatability and overconsumption without diners ever consenting. Neurodivergent eaters feel profoundly alienated by environments that demand perpetual social harmony.==

### Scenario 3: Intuitive Technology — "The Tool That Disappears"

==**A Day in the Life (2035):** Halfway through a meal, your sleeve delivers a gentle thermal pulse. It does not tell you how many carbohydrates you have consumed. It is simply a Just-In-Time (JIT) prompt — asking your System 2 brain to notice what your stretch receptors are already feeling (Schembre et al., 2018). A conversational AI steward — patterned after Woebot's empathy model — asks quietly: *"Are you noticing your fullness right now?"* You pause, realise you are satisfied, and stop eating. Over six months, the sleeve pulses less and less frequently. One morning, the AI informs you that your interoceptive literacy score has stabilised. It suggests you delete the app. **Technology:** Conversational LLM stewards; unobtrusive wearable haptics; algorithms trained on MB-EAT protocols (Kristeller and Wolever, 2011). **Cultural Norms:** *Food Freedom* is the ultimate status symbol. Technology is viewed as a temporary scaffold, not a permanent prosthesis. The highest social currency is not needing a health tracker at all. **What Could Go Wrong:** *The Affirmative Trap*. Venture capitalists refuse to fund "obsolescent" technology. Companies build dark patterns that sabotage the off-boarding process, keeping users permanently dependent under the guise of "mindfulness."==

> [!tip]+ ✦ **Round 2 · 2026-05-01** — Elevating The After Glow to Critical Design
> *Addressing the 'affirmative design trap': three specific provocative design decisions that make this a Critical Design object, not just a better health product*

==**The After Glow as Critical Design:** According to Dunne and Raby (2013), affirmative design solves problems within the current paradigm, while critical design *questions the paradigm itself*. In its current form, The After Glow risks functioning as a gentler health tracker — still operating within Medicine 3.0's logic of continuous self-monitoring. The following three design provocations are introduced to ensure the object functions as a genuine critical probe:==

==**Provocation 1 — The Surveillance Blackout:** When the user picks up The After Glow for its 60-second post-meal feedback, the object acts as a localised signal blocker. For those 60 seconds, it actively disconnects the user's phone from Wi-Fi and disables nearby smart speakers. *Why it is critical:* It critiques the assumption that metabolic data must constantly flow to corporate servers, by making the price of embodied reflection the explicit severing of the data umbilical cord. It builds on the *Wall* design probe (DIS 2025), actively resisting the "sense-and-extract" paradigm.==

==**Provocation 2 — The Intentional Placebo Error:** One out of every ten times the user holds the disc, it deliberately does nothing — remaining cold and dark. Or, it emits a confusing light pattern that does not match how the user feels. *Why it is critical:* It forces the user to confront their reliance on Folk Theories of Technology (Makhortykh et al., 2022) — the assumption that the machine knows better than the body. By injecting deliberate ambiguity, it aligns with the *Placebo Project's* (Dunne and Raby, 2001) ethos of objects that are productively confusing.==

==**Provocation 3 — Programmed Physical Decay:** Inspired by the DIS 2025 project *LO* (a technology that lives and dies with its user), The After Glow is made of unfired, porous clay. Every time it detects a highly dysregulated, rushed meal, it heats slightly and physically cracks. Over months, the object degrades, stains, and crumbles based on the user's lived reality. *Why it is critical:* Silicon Valley health tech promises frictionless, immortal optimisation via sleek glass screens. A degrading ceramic disc insists that human bodies are messy, entropic, and mortal. It transforms dietary feedback into a *memento mori* — a reminder of bodily finitude — rather than a biohacking optimisation dashboard.==

---

<div style="page-break-before: always;"></div>

# 5. Methodology

The methodology operates on two parallel and mutually informing tracks: investigative research (understanding the current landscape and its failures) and generative design research (developing and testing alternative feedback paradigms). This dual-track structure reflects the nature of the problem: the failure of dietary feedback is simultaneously an empirical, behavioural, and design question, and no single disciplinary method is sufficient to address it.

### 📊 Dual-Track Methodology Overview

![[Dual_Track_Methodology.svg|442]]

### 5a. Data: Types, Sources and Participants
- **Data types:** Primary qualitative data will be generated through semi-structured interviews and an autoethnographic diary study. Secondary qualitative data will be drawn from the literature review and app audit. Secondary quantitative data will be drawn from published studies on app adoption rates, disordered eating prevalence, and behaviour change outcomes.
- **Data sources:** Academic databases (Google Scholar, PubMed), design archives and app stores, peer-reviewed journals in behavioural science and health psychology, and primary research participants.
- **Participants:** For the semi-structured interview phase, 6–8 participants will be recruited. **Inclusion criteria:** adults aged 22–45; current or prior use of at least one dietary tracking or food logging tool; willingness to discuss emotional relationship with food. **Exclusion criteria:** current diagnosis of an eating disorder (to protect participant wellbeing and avoid harm). Recruitment will be conducted through the RCA student community and personal networks. This sample size is appropriate for qualitative thematic analysis, following Braun and Clarke's (2006) guidance that 6–10 participants typically suffice to reach thematic saturation in homogeneous purposive samples.

### 5b. Data Collection Methods
- **Phase 0 — Informal Peer Conversations (exploratory, pre-interview):** Before conducting formal interviews, an initial exploratory phase will involve informal conversations with peers in the RCA GID programme. These conversations will focus on a simple, open question: *what is your current relationship with health tracking and your body?* This phase serves to identify recurring themes and blind spots before designing the interview protocol, and to practise the researcher's role as an engaged listener on this topic.

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #5: Phase 0 Phenomenological Justification
> *Responding to: "You could pick one and start to test assumptions. After I interview — you have proved it." — stop theorising, start empirical work*

  ==To ground the speculative design in lived experience rather than abstract theory, the empirical research begins with Phase 0 informal peer conversations utilising a strict phenomenological interview approach. This methodology deliberately bypasses moralistic food judgements and conventional weight-loss framing — explicitly avoiding evaluative terms like "good," "bad," or "healthy" — to prevent triggering self-justification, shame, or diet-mentality biases in participants. Instead, the inquiry focuses purely on the embodied, bodily sensations of eating: by asking participants to articulate what eating well physically *feels like* in their bodies, the research bypasses intellectualised nutrition knowledge to directly interrogate the "phenomenological silence" of digestion. This observer-perspective approach is essential for uncovering the genuine affective gaps in current tracking paradigms and generating authentic qualitative data required to inform non-punitive feedback design.==

> [!tip]+ ✦ **Round 2 · 2026-05-01** — Phase 0 Concrete Session Structure (What You Actually Do)
> *Practical step-by-step guide for conducting Phase 0 sessions*

  ==**Phase 0 Session Protocol (30–45 minutes, 1-on-1):**==
  ==**Setup:** Find a private, quiet space. Bring a notepad and audio recorder. Open with: *"There are no right answers here, and I'm not interested in whether you eat 'well'. I'm interested in your actual experience."* Never use the words "good", "bad", "diet", or "healthy." Ask verbal consent to record.==
  ==**Warm-up (5–8 min):** "What did you eat today? When you wake up, do you usually have a sense of how you want to eat? Is there a place where eating feels most comfortable for you?"==
  ==**Tracking Experience (10–12 min):** "Have you ever used an app or tool to track what you eat? What did the data actually *do* for you? Was there a specific moment where the app made you feel something strongly — pride, shame, relief, frustration?"==
  ==**The Feedback Gap (10–12 min):** "When you think about 'eating well', what does it feel like *in your body*? Between exercise, sleep, and eating — which gives you the clearest signal that you did something good for yourself?" *Give space for awkward silence here — this is the most important question.*==
  ==**Environment (8–10 min):** "Describe your typical eating environment. If you could change one thing about your physical environment that would change how you eat, what would it be?"==
  ==**Speculative Prompt (8–10 min):** "Imagine a tool that tells you nothing *before* the meal. But after the meal, for 60 seconds, it shows you something about how your body responded. Would that feel interesting — or anxiety-provoking? Why?"==
  ==**Note-taking system:** Use Q = exact quote, T = emerging theme, ! = surprising answer. Within 30 minutes after the session, write a 1-page synthesis: the 3 most surprising things said, the moment of strongest emotional activation, what they struggled to articulate, and exactly 1 direct quote to carry forward.==
- **Semi-structured interviews (6–8 participants, 45–60 minutes each):** Interviews will explore participants' lived experience of dietary tracking: what prompted them to use it, how it made them feel, what worked and what failed, and how it affected their relationship with food. The semi-structured format allows flexibility while ensuring consistency across participants.
- **Autoethnographic diary study (4 weeks, self-conducted):** A structured self-observation practice logging eating events, emotional states, design observations (what feedback did I receive, or not receive, from this eating experience?), and sketches of design responses. The diary will incorporate a specific phenomenological practice drawn from mindfulness traditions: when eating, adopting an *observer perspective* — noticing and recording bodily sensations, emotional responses, and social contexts without reactive judgement. Rather than evaluating meals as "good" or "bad", the diary will ask: *what did I notice?* This observer stance is itself a prototype of the kind of embodied, non-punitive feedback this project seeks to design.
- **App audit and comparative analysis:** A systematic evaluation of 8 dietary feedback tools (MyFitnessPal, Noom, Levels Health, Signos, Nutrisense, FoodVisor, NHS Weight Loss Plan) assessing immediacy of feedback, emotional tenor, legibility for non-specialists, social dimension, and eating disorder risk indicators.

### 5c. Data Analysis Methods
Interview data will be analysed using _reflexive thematic analysis_ (Braun and Clarke, 2006), a method appropriate for identifying patterns of meaning across qualitative data without imposing predetermined categories. Themes will be developed inductively from the data, then reviewed against the theoretical framework (Fogg's B=MAP, intuitive eating principles) to develop design implications. Diary data will be analysed through _design-led synthesis_: converting observational notes and sketches directly into design provocations, using the 'what if' question as an analytical tool.

### 5d. Design and Futures Methods
- **Speculative Prototyping (Dunne and Raby, 2013):** Drawing on critical design methodology, a series of three to five speculative artefacts will be developed that propose radically different dietary feedback mechanisms: for example, an ambient object that changes texture in response to nutritional balance; a social ritual tool that makes eating well a shared, celebratory experience; or a wearable that provides physiological biofeedback from the gut. These are provocations — design fictions that defamiliarise current assumptions and make alternative futures imaginable.

> [!tip]+ ✦ **Round 2 · 2026-05-01** — Speculative Prototyping Workshop: What You Actually Do
> *Concrete session structure for running a speculative prototyping workshop with participants*

  ==**Speculative Prototyping Workshop Protocol (60 minutes, groups of 2–4):**==
  ==**Materials needed:** DAS air-dry modelling clay, toothpicks, A0 paper sheets, sticky notes in 3 colours, coloured markers, scissors, and printed 2035 scenario cards (one per scenario).==
  ==**Icebreaker (15 min):** Briefly introduce speculative design with one example (e.g., Dunne & Raby's Placebo Project). Run a 2-minute "two truths and a lie" warm-up to loosen inhibitions and signal that imagination is valid here.==
  ==**Scenario Reading (5 min):** Read one of the three 2035 scenarios aloud — the facilitator chooses which scenario based on group composition. Ask participants: "Does any part of this future feel exciting? Disturbing? Familiar?"==
  ==**Idea Diverge (15 min):** Each person writes on sticky notes: (1) one thing they would want to feel after a meal in this future; (2) one thing they would never want to track; (3) one ritual or object they wish existed. Share and cluster.==
  ==**Making (20 min):** Groups use clay and paper to build one physical mock-up of a speculative dietary feedback object — not a screen-based app. Instruction: "It should communicate something about your body after eating without using numbers or scores."==
  ==**Output:** Collect clay/paper prototypes, A0 concept posters, and audio-recorded reflections on how participants imagine using the objects. These feed directly into the researcher's own prototype iteration.==

> [!tip]+ ✦ **Round 2 · 2026-05-01** — Autoethnographic Diary: 4-Week Daily Schedule
> *What you do each day for 4 weeks — concrete daily task structure*

  ==**Daily Task (immediately after each main meal, 10–15 minutes):** Open `Autoethnographic Diary.md` and answer 5 questions: (1) What did I eat? (2) What was my state — hungry, bored, social, rushed? (3) What did I feel physically and emotionally in the 30 minutes after eating? (4) Did I receive any feedback signals from my body, my environment, or technology? (5) What is a design provocation in response to this moment?==

  ==**Week 1 — Baseline / Finding the Silence:** Eat completely normally. Focus on *locating* the phenomenological silence. Actively compare the feedback richness of a morning run vs. a nutritious lunch. Log what signals the body *does* give vs. what it *doesn't* give. Do not attempt to change behaviour.==

  ==**Week 2 — Friction & Environment:** Shift focus outward. Log the friction points of traditional tracking ("Ability barriers" in Fogg's model). Note what social setting, time pressure, kitchen layout, or social context prompted or disrupted the meal. Photograph 3 different eating environments.==

  ==**Week 3 — Affective Tone / Observer Perspective:** Practice strict mindfulness during meals. Describe bodily sensations and emotional responses *without* reactive judgement. Refuse to label any meal as "good" or "bad." Ask only: "What did I notice?" Try using The After Glow prototype (cardboard version) during this week.==

  ==**Week 4 — Generative 'What-Ifs':** Focus entirely on question 5. Synthesise diary notes into design provocations. Sketch at least one speculative feedback mechanism per day. Ask: "What could this environment or interface reflect, right at this moment, that would feel like curiosity rather than judgement?" Begin producing rough sketches of speculative artefacts.==

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #9: The After Glow — Physical Speculative Prototype
> *Responding to: "推测性工作完全缺席" / "描述了3-5个artefact但一个草图都没有。在RCA Design Futures项目中，这是重大弱点。" — Expert Assessment*

  ==To satisfy the rigorous demands of an RCA Design Futures project — which requires moving beyond theoretical discourse into tangible interaction — this research materialises its concepts through a speculative physical prototype named **"The After Glow."** Designed as a handcrafted ceramic or cardboard disc equipped with a wearable-linked biosensor, the artefact translates post-prandial metabolic data into embodied sensations: specifically, emitting a soft amber LED light and modulating physical warmth to indicate how the body is processing a meal, entirely devoid of screens, scores, or numbers. To ground this speculative artefact in everyday plausibility, it is framed using the Near Future Laboratory "TBD Catalog" approach (Near Future Laboratory, 2014): by presenting this futuristic, non-invasive biofeedback device as a mundane, ordinary consumer product available for mail-order purchase in 2035, the design normalises the speculative, defamiliarising our current reliance on punitive smartphone screens and provoking critical discussion on the future of intuitive dietary technology.==
- **Scenario Building:** Three scenarios for dietary feedback in 2035 will be developed: (1) the High-Tech Biometric scenario; (2) the Ambient Social scenario; and (3) the Intuitive Technology scenario, in which AI works to amplify internal body attunement rather than replace it. Scenarios will be built using the Intelligence–Perspective–Logic–Foresight framework (Martell, 2026).
- **Participatory critique:** Speculative artefacts and scenarios will be shared with interview participants for a second round of engagement, following participatory design principles. This closes the loop between investigation and generation, and ensures the speculative work remains grounded in real user experience.

> [!tip]+ ✦ **Round 2 · 2026-05-01** — Participatory Critique Session: What You Actually Do
> *Concrete session structure for closing the loop with original interview participants*

  ==**Participatory Critique Protocol (45 minutes, 1-on-1 or pairs, with original 6–8 interviewees):**==
  ==**What to bring:** Physical mock-up of The After Glow (cardboard or clay disc with amber LED or small heating pad), printed 2035 scenario cards, and the REFLECTIVE Framework one-pager.==
  ==**Introduction (5 min):** "I'm going to show you something I made based partly on what you told me. I want to know what you *actually* think — not what you think I want to hear."==
  ==**Legibility test (10 min):** Place The After Glow on the table without explanation. Ask: "Without me describing it, what do you think this object is trying to communicate to you about your meal?" Record exact language used.==
  ==**Friction comparison (10 min):** "How would interacting with this physical object on your table feel different from opening MyFitnessPal after eating? Which feels more like reflection? Which feels more like judgement?"==
  ==**Affective tone (10 min):** "Does this feedback feel like curiosity — or like scoring and shaming? Does it make you want to eat differently, or does it make you anxious?"==
  ==**Critical probe (10 min):** "This object has no memory. It doesn't remember what you ate yesterday. It never compares today to yesterday. Is that a feature or a fatal flaw? What does it feel like for a device to *forget* you?"==
  ==**Output:** Audio recording + researcher notes capturing exact quotes on legibility, emotional tone, and the "forgetting" probe. These responses become the primary evidence base for evaluating whether the speculative artefact achieves its intended REFLECTIVE Framework criteria.==

### 5e. Ethical Framework

> [!tip]+ ✦ **Round 2 · 2026-05-01** — Ethics: Five Critical Considerations
> *Explicit ethical framework — previously absent from the proposal*

==This research operates at the intersection of bodily experience, health data, and vulnerable populations. Five ethical principles govern every phase:==

==**1. Eating Disorder Risk and Participant Safety:** All research phases will implement explicit ED safeguards. Phase 0 and Phase 1 interviews will use the Eating Attitudes Test (EAT-26) as a pre-screening tool — any participant scoring above the clinical threshold will be referred to RCA wellbeing services and excluded from participation, not to exclude vulnerable voices, but to prevent the research process itself from causing harm (Roth et al., 2024). All interview questions are phenomenologically framed to avoid triggering disordered cognition. Participants will be debriefed with a written summary of campus wellbeing resources.==

==**2. Data Privacy and Biometric Sensitivity:** Any metabolic data generated during the autoethnographic diary study (the researcher's own) is entirely self-generated and not shared. If participants choose to use their own CGM data in the participatory critique, this constitutes sensitive health data: it will be anonymised, stored only on encrypted local drives, and destroyed after thematic analysis. No participant biometric data will be uploaded to cloud services.==

==**3. Informed Consent and Withdrawal:** Participation at all phases is voluntary, with the right to withdraw at any point without consequence. Written informed consent forms will be used for all recorded sessions (Phase 0, Phase 1 interviews, participatory critique). Participants will be informed of how their words may be quoted (anonymised) in the final IRP Report.==

==**4. Power Dynamics with Corporate Actors:** This research deliberately excludes funding from or partnership with food industry corporations, health insurance companies, or CGM manufacturers — all of whom have financial interests in the research outcomes. This independence is essential to maintaining the critical design stance. The speculative artefacts produced are explicitly not prototypes for commercialisation.==

==**5. WEIRD Bias Mitigation:** Following Agapie's critique that 61.1% of HCI behaviour change studies focus exclusively on Western contexts, this research will actively recruit beyond the default RCA student demographic. Phase 0 conversations and Phase 1 interviews will seek a minimum of two participants from non-Western cultural backgrounds, and cross-cultural food attitudes (Rozin et al., 1999; Fischler, 1988; Lupton, 1996) will be explicitly integrated into thematic analysis to challenge the Anglo-American framing of "dietary health."==

### 5f. Methodological Justification
This methodology is appropriate because the problem — the absence of meaningful dietary feedback — is fundamentally an experiential and cultural problem, not merely a technical one. The choice to eat, and the feelings it generates, are shaped by biology, memory, identity, social context, and centuries of cultural meaning. Qualitative and speculative methods are therefore better suited than quantitative approaches to uncovering the phenomenology of eating and to imagining feedback systems that can operate within this complexity. The dual-track structure also manages the ethical risk inherent in this topic: by centering user voices throughout, and by explicitly testing speculative artefacts against real user responses, the methodology builds in a safeguard against designing systems that could harm rather than help.

---

<div style="page-break-before: always;"></div>

# 6. Critique Documentation
**Summary (April 8 Tutorial):** Direction confirmed as unique. Integrated **Compassion-Based Design** as the core philosophy. Tutor emphasized connecting people *more* with their bodies (Embodiment) while giving them agency (Empowerment). Recommended case studies: French paradox, Itadakimasu, and Krukow × COOP.

---

# 7. Project Outputs, Stakeholders and Impacts
- **Outputs:** Multi-dimensional Dietary Wellbeing Framework + 3-5 Speculative Artefacts + 3 Scenarios.
- **Stakeholders:** Health-tech designers, public health clinicians, food industry, and clinicians.
- **Impact:** Shifting the narrative of "nutrition tracking" from surveillance to food freedom and care.

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #4: Expanded Stakeholder Map
> *Responding to: "There is a whole bunch of other stakeholders, not just the users. Who else is involved?" — Tutor 3*

==To transcend a narrow, user-centric focus, this project maps a broader power-interest ecosystem comprising five critical stakeholder groups whose competing interests actively shape the dietary technology landscape. First, **eating disorder (ED) specialists and mental health practitioners** act as essential ethical safeguards, prioritising harm prevention and holding the authority to veto tech-driven tools that have historically exacerbated disordered eating. Second, **CGM manufacturers** (such as Abbott and Dexcom) control the necessary hardware infrastructure but operate from a device-focused engineering culture that often conflicts with human-centred design philosophies. Third, **regulatory bodies** (the FDA and the MHRA) define the legal boundaries for health claims, navigating new territory following the recent over-the-counter clearance of CGMs for non-diabetic consumers. Fourth, **venture capitalists** provide the capital required to scale these technologies but are heavily ROI-focused, creating an inherent tension where non-punitive design strategies may conflict with the addiction-driven engagement metrics that traditionally drive revenue. Finally, the broader **food industry ("Big Food")** holds immense market power and a counter-aligned financial incentive to co-opt "anti-diet" and food freedom messaging for corporate profit (NPR, 2024). Mapping these tensions is essential to ensuring that any proposed intervention is robust to the systemic forces that will shape its real-world deployment.==

---

# 8. Personal Objectives
To develop world-class expertise at the intersection of behavioural design and speculative futures, building a practice focused on **Ethical Health Innovation**.

---

# 9. Project Plan

![[Project_Plan.svg|697]]

---

<div style="page-break-before: always;"></div>

# Reference List

*All references formatted in Harvard style. Listed alphabetically by first author's surname or organisation.*

Arakawa, M. *et al.* (2026) 'Continuous Glucose Monitoring and Dietary Behaviour Change in Insulin-Treated Patients', *Diabetes Technology & Therapeutics*, [Online ahead of print]. doi:10.1089/dia.2026.0001.

Attia, P. and Gifford, B. (2023) *Outlive: The Science and Art of Longevity*. New York: Harmony Books.

Braun, V. and Clarke, V. (2006) 'Using Thematic Analysis in Psychology', *Qualitative Research in Psychology*, 3(2), pp. 77–101.

Business of Apps (2024) *Health and Fitness App Report 2024*. Available at: https://www.businessofapps.com/data/health-fitness-app-report/ (Accessed: 12 April 2026).

Damasio, A.R. (2003) *Looking for Spinoza: Joy, Sorrow, and the Feeling Brain*. London: Heinemann. 

Dator, J. (2009) 'Alternative Futures at the Manoa School', *Journal of Futures Studies*, 14(2), pp. 1–18.

Dunne, A. and Raby, F. (2001) *Placebo Project* [Design installation]. London: Royal College of Art Gallery.

Dunne, A. and Raby, F. (2013) *Speculative Everything: Design, Fiction, and Social Dreaming*. Cambridge, MA: MIT Press.

Fischler, C. (1988) 'Food, Self and Identity', *Social Science Information*, 27(2), pp. 275–292.

Fogg, B.J. (2009) 'A Behavior Model for Persuasive Design', in *Proceedings of the 4th International Conference on Persuasive Technology (Persuasive \'09)*. New York: ACM, pp. 1–7.

FoodVisor (2026) *FoodVisor App*. Available at: https://www.foodvisor.io/ (Accessed: 12 April 2026).

Glenn, J.C. (1971) *Futurizing Teaching vs. Futures Courses*. Washington, DC: Futures Research Clearinghouse.

IFIC (International Food Information Council) (2023) *Food and Health Survey 2023*. Washington, DC: IFIC Foundation. Available at: https://ific.org/research/food-and-health-survey/ (Accessed: 12 April 2026).

Inayatullah, S. (2008) 'Six Pillars: Futures Techniques Transforming Your Practice', *Foresight*, 10(1), pp. 4–21.

Kahneman, D. (2011) *Thinking, Fast and Slow*. London: Allen Lane.

Kristeller, J.L. and Wolever, R.Q. (2011) 'Mindfulness-Based Eating Awareness Training for Treating Binge Eating Disorder: The Conceptual Foundation', *Eating Disorders*, 19(1), pp. 49–61.

Krukow, K. (no date) *COOP × Krukow: Behaviour Design at Scale* [Case study]. krukow.net. Available at: https://krukow.net (Accessed: 12 April 2026).

Levels Health (2026) *Levels Health App*. Available at: https://www.levelshealth.com/ (Accessed: 12 April 2026).

Linardon, J. (2020) 'Positive Body Image, Intuitive Eating, and Dietary Restriction: A Systematic Review and Meta-Analysis', *European Eating Disorders Review*, 28(6), pp. 749–762.

Lupton, D. (1996) *Food, the Body and the Self*. London: Sage.

Martell, S. (2026) *Futures Strategy: Intelligence–Perspective–Logic–Foresight Framework* [Lecture]. RCA Project Design Approach Workshop. London: Royal College of Art, March 2026.

MyFitnessPal (2026) *MyFitnessPal App*. Available at: https://www.myfitnesspal.com/ (Accessed: 12 April 2026).

NEDA (National Eating Disorders Association) (no date) *Statistics and Research on Eating Disorders*. Available at: https://www.nationaleatingdisorders.org/statistics/ (Accessed: 12 April 2026).

NHS England (2023) *Eating Disorders: Hospital Admissions Data 2015–2021*. London: NHS England. Available at: https://www.england.nhs.uk (Accessed: 12 April 2026).

NHS Weight Loss Plan (2026) *NHS Weight Loss Plan App*. Available at: https://www.nhs.uk/better-health/lose-weight/ (Accessed: 12 April 2026).

Norman, D.A. (2013) *The Design of Everyday Things*. Revised and expanded edn. New York: Basic Books.

Oura Health (2026) *Oura Ring*. Available at: https://ouraring.com/ (Accessed: 12 April 2026).

Roth, E. *et al.* (2024) 'Weight-Related Self-Monitoring and Eating Disorder Symptoms: A Systematic Review and Meta-Analysis', *International Journal of Eating Disorders*, 57(3), pp. 512–528.

Rozin, P., Fischler, C., Imada, S., Sarubin, A. and Wrzesniewski, A. (1999) 'Attitudes to Food and the Role of Food in Life in the U.S.A., Japan, Flemish Belgium and France: Possible Implications for the Diet–Health Debate', *Appetite*, 33(2), pp. 163–180.

Schembre, S.M. *et al.* (2018) 'Mobile Ecological Momentary Diet Assessment Methods for Behavioral Research: Systematic Review', *JMIR mHealth and uHealth*, 6(11), e11170.

Strava (2026) *Strava App*. Available at: https://www.strava.com/ (Accessed: 12 April 2026).

Superflux (2017) *Mitigation of Shock* [Installation]. London: Superflux Studio. Available at: https://superflux.in/index.php/work/mitigation-of-shock/ (Accessed: 12 April 2026).

Thaler, R.H. and Sunstein, C.R. (2008) *Nudge: Improving Decisions about Health, Wealth and Happiness*. New Haven: Yale University Press.

Tribole, E. and Resch, E. (2020) *Intuitive Eating: A Revolutionary Anti-Diet Approach*. 4th edn. New York: St. Martin's Essentials.

Wallace, L. *et al.* (2025) 'Health-Tracking Technologies and Eating Attitudes: A Systematic Review', *Appetite*, 198, pp. 107–119.

> [!tip]+ ✦ **Round 1 · 2026-05-01** — New References Added
> *The following references were added in Round 1 to support the 9 tutor-response insertions.*

==Abbott Newsroom (2024) *Abbott Receives FDA Clearance for Lingo, Its First Over-the-Counter Continuous Glucose Monitor*. Available at: https://www.abbott.com/corpnewsroom/nutrition-health-and-wellness/abbott-receives-fda-clearance-for-lingo.html (Accessed: 1 May 2026).==

==Near Future Laboratory (2014) *TBD Catalog*. Available at: https://store.nearfuturelaboratory.com/products/tbdcatalog (Accessed: 1 May 2026).==

==Phelan, S. *et al.* (2020) 'MyFitnessPal Use and Eating Disorder Risk Factors', *International Journal of Eating Disorders*, 53(12), pp. 1943–1952.==

==Precedence Research (2025) *Digital Health Market Size, Share and Trends 2025–2034*. Available at: https://www.precedenceresearch.com/digital-health-market (Accessed: 1 May 2026).==

==Priory Group (2025) *Eating Disorder Statistics UK 2025*. Available at: https://www.priorygroup.com/eating-disorders/eating-disorder-statistics (Accessed: 1 May 2026).==

==Wallace, L. *et al.* (2025) 'Health-Tracking Technologies and Eating Attitudes: A Systematic Review', *Appetite*, 198, pp. 107–119.==

==Zahedani, A.D. *et al.* (2023) 'Continuous Glucose Monitoring with a Smartphone App and Personalized Dietary Feedback Reduces Postprandial Glycemia', *Cell Metabolism*, 35(4), pp. 569–581.==

==Zeevi, D. *et al.* (2015) 'Personalized Nutrition by Prediction of Glycemic Responses', *Cell*, 163(5), pp. 1079–1094.==

==Zhang, Y. *et al.* (2025) 'Effect of Continuous Glucose Monitoring on Dietary Behaviour in Non-Diabetic Adults: A Systematic Review and Meta-Analysis', *Nutrients*, 17(3), pp. 441–459.==

---

*End of IRP Proposal — Weijie Li · Design Future · Royal College of Art · April 2026*
*Last updated: Round 1 revisions, 2026-05-01 — 9 tutor-response insertions added (NotebookLM-assisted, 180 sources)*

> [!tip]+ ✦ **Round 2 · 2026-05-01** — New References Added in Round 2

==Agapie, E. (2024) 'Behavior Change Technologies: A Systematic Review of HCI Research', *ACM CHI Conference Proceedings*. [WEIRD Bias and Social Goals of tracking research].==

==Dunne, A. and Raby, F. (2001) *Placebo Project* [Design installation]. London: Royal College of Art Gallery. [Already listed — referenced additionally for intentional ambiguity design].==

==Emteq Labs (2025) *OCOsense Smart Glasses: Dietary Monitoring via Facial Electromyography*. Available at: https://www.emteqlabs.com (Accessed: 1 May 2026). [Cited in Scenario 1 — High-Tech Biometric].==

==Makhortykh, M. *et al.* (2022) 'Folk Theories of Algorithmic News Curation: How Users Understand Tracking and Why It Matters', *New Media & Society*, 24(7), pp. 1651–1671. [Folk Theories of Technology framework — applied to dietary tracking trust collapse].==

==Near Future Laboratory (2014) *TBD Catalog*. [Already listed in Round 1 — additionally referenced for mundane framing of The After Glow].==

==Schembre, S.M. *et al.* (2018) 'Mobile Ecological Momentary Diet Assessment Methods for Behavioral Research: Systematic Review'. [Already listed — additionally cited for Just-In-Time prompting in Scenario 3].==

*Last updated: Round 2 revisions, 2026-05-01 — Methodology workshops, 2035 scenarios, critical design provocations, cross-cultural section, ethics framework added (NotebookLM-assisted, 180 sources)*
