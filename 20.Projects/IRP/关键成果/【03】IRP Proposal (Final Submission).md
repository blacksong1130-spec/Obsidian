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
- **Semi-structured interviews (6–8 participants, 45–60 minutes each):** Interviews will explore participants' lived experience of dietary tracking: what prompted them to use it, how it made them feel, what worked and what failed, and how it affected their relationship with food. The semi-structured format allows flexibility while ensuring consistency across participants.
- **Autoethnographic diary study (4 weeks, self-conducted):** A structured self-observation practice logging eating events, emotional states, design observations (what feedback did I receive, or not receive, from this eating experience?), and sketches of design responses. The diary will incorporate a specific phenomenological practice drawn from mindfulness traditions: when eating, adopting an *observer perspective* — noticing and recording bodily sensations, emotional responses, and social contexts without reactive judgement. Rather than evaluating meals as "good" or "bad", the diary will ask: *what did I notice?* This observer stance is itself a prototype of the kind of embodied, non-punitive feedback this project seeks to design.
- **App audit and comparative analysis:** A systematic evaluation of 8 dietary feedback tools (MyFitnessPal, Noom, Levels Health, Signos, Nutrisense, FoodVisor, NHS Weight Loss Plan) assessing immediacy of feedback, emotional tenor, legibility for non-specialists, social dimension, and eating disorder risk indicators.

### 5c. Data Analysis Methods
Interview data will be analysed using _reflexive thematic analysis_ (Braun and Clarke, 2006), a method appropriate for identifying patterns of meaning across qualitative data without imposing predetermined categories. Themes will be developed inductively from the data, then reviewed against the theoretical framework (Fogg's B=MAP, intuitive eating principles) to develop design implications. Diary data will be analysed through _design-led synthesis_: converting observational notes and sketches directly into design provocations, using the 'what if' question as an analytical tool.

### 5d. Design and Futures Methods
- **Speculative Prototyping (Dunne and Raby, 2013):** Drawing on critical design methodology, a series of three to five speculative artefacts will be developed that propose radically different dietary feedback mechanisms: for example, an ambient object that changes texture in response to nutritional balance; a social ritual tool that makes eating well a shared, celebratory experience; or a wearable that provides physiological biofeedback from the gut. These are provocations — design fictions that defamiliarise current assumptions and make alternative futures imaginable.

> [!tip]+ ✦ **Round 1 · 2026-05-01** — Tutor Response #9: The After Glow — Physical Speculative Prototype
> *Responding to: "推测性工作完全缺席" / "描述了3-5个artefact但一个草图都没有。在RCA Design Futures项目中，这是重大弱点。" — Expert Assessment*

  ==To satisfy the rigorous demands of an RCA Design Futures project — which requires moving beyond theoretical discourse into tangible interaction — this research materialises its concepts through a speculative physical prototype named **"The After Glow."** Designed as a handcrafted ceramic or cardboard disc equipped with a wearable-linked biosensor, the artefact translates post-prandial metabolic data into embodied sensations: specifically, emitting a soft amber LED light and modulating physical warmth to indicate how the body is processing a meal, entirely devoid of screens, scores, or numbers. To ground this speculative artefact in everyday plausibility, it is framed using the Near Future Laboratory "TBD Catalog" approach (Near Future Laboratory, 2014): by presenting this futuristic, non-invasive biofeedback device as a mundane, ordinary consumer product available for mail-order purchase in 2035, the design normalises the speculative, defamiliarising our current reliance on punitive smartphone screens and provoking critical discussion on the future of intuitive dietary technology.==
- **Scenario Building:** Three scenarios for dietary feedback in 2035 will be developed: (1) the High-Tech Biometric scenario; (2) the Ambient Social scenario; and (3) the Intuitive Technology scenario, in which AI works to amplify internal body attunement rather than replace it. Scenarios will be built using the Intelligence–Perspective–Logic–Foresight framework (Martell, 2026).
- **Participatory critique:** Speculative artefacts and scenarios will be shared with interview participants for a second round of engagement, following participatory design principles. This closes the loop between investigation and generation, and ensures the speculative work remains grounded in real user experience.

### 5e. Methodological Justification
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
