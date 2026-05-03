---
tags:
  - IRP
  - proposal
  - behavioural-design
  - food-futures
  - RCA-GID
date: 2026-05-03
version: v12-Final-Complete
word_count_mainbody: "~3500 words (Sections 1–9, excl. references)"
---

# Why Eating Well Feels Like Nothing:
## Redesigning the Feedback Loop for Dietary Behaviour

**Weijie Li** | Student Number: 10066513
Design Futures | Royal College of Art
*IRP Proposal | May 2026 | Final Submission*

---

## Table of Contents

| # | Section |
|---|---------|
| — | Statement of Authorship & AI Disclosure |
| — | Executive Summary |
| **1** | Introduction and Justification of the Topic |
| **2** | Background: Literature, Practice, Signals and Trends |
| **3** | Problem Framing |
| **4** | Design Futures Approach |
| **5** | Methodology |
| **6** | Critique Documentation |
| **7** | Project Outputs, Stakeholders and Impacts |
| **8** | Personal Objectives |
| **9** | Project Plan |
| — | Reference List |
| **App. A** | Futures Context: Futures Triangle & Futures Wheel |
| **App. B** | Annotated Literature and Practice Review (Full) |
| **App. C** | 2035 Scenario Narratives: Day in the Life |
| **App. D** | Research Protocols (Phase 0–5) |
| **App. E** | Ethical Framework & RCA Ethics Checklist |
| **App. F** | The After Glow — Critical Design Specifications |
| **App. G** | Data Visualisations |
| **App. H** | Trend Wall Signals (required Appendix B per IRP template) |

---

<div style="page-break-before: always;"></div>

# Statement of Authorship and Acknowledgements

This proposal was written independently as part of the IRP Proposal module, Global Innovation Design, Royal College of Art. The research direction emerged from an ongoing inquiry into preventive health, dietary behaviour, and the design of feedback systems, which began in my prior study at the University of Nottingham (IRP: *The Small Revolution in Lifestyle Habits*, 2024–2025).

I am grateful to my tutors for their feedback during the April 2026 project discussion, which helped sharpen the focus of this proposal — particularly in identifying the ethical dimension of eating disorders and food freedom as essential constraints on any proposed feedback design.

# Use of AI Disclosure

This submission was produced by me in my own words and using my own imagery, except for quotations and images from published and unpublished sources, which are clearly indicated and acknowledged. I used AI assistance for: (1) systematic literature identification to locate relevant behavioural science papers; (2) technical document formatting and data visualisation rendering. All critical analysis, theoretical framing, and speculative design directions are my original work.

*Print name: Weijie Li* | *Signed: ___________________* | *Date: May 2026*

---

<div style="page-break-before: always;"></div>

<div style="page-break-before: always;"></div>

# 1. Introduction and Justification of the Topic

![[Strategic_Logic_Chain.svg|610]]

*Figure 0 — Strategic Logic Chain: the deductive narrative path from feedback gap to speculative intervention.*

I am interested in the future of preventive health behaviour — and specifically, the future of **dietary feedback design** in the context of people who want to eat better but cannot feel whether they are doing so. Unlike exercise or sleep, the benefits of good nutrition are almost entirely invisible on a human timescale: a week of eating well generates no signal, no score, no perceivable progress. This is not a motivation problem — it is a **feedback problem**.

*Exercise has been transformed by design.* Strava turns a morning run into a social performance: segments, kudos, leaderboards, personal records. Oura Ring makes sleep legible: a nightly score distils hours of invisible biology into a single, recoverable number. These tools work because they close the feedback loop — they translate invisible physiological processes into immediate, emotionally resonant signals (Norman, 2013).

*Dietary behaviour, by contrast, remains a design desert.* The dominant tool — MyFitnessPal, launched in 2005 — asks users to manually log every meal into a calorie database. Its interface has barely evolved in two decades. There is no metabolic signal, no wellbeing score, no social ritual around eating well. The consequence is predictable: most users abandon food tracking within weeks (Schembre et al., 2018). The Fogg Behaviour Model clarifies why: motivation alone is insufficient without ability and prompt — and current dietary tools fail on both (Fogg, 2009). Health and fitness apps retain only 3–4% of users by Day 30 (Business of Apps, 2024), a figure that has not meaningfully improved despite a US$25 billion annual investment in digital health (Precedence Research, 2025).

This failure is not merely inconvenient — it is causing clinical harm. Punitive tracking paradigms are actively exacerbating eating disorders: 73% of MyFitnessPal users with an eating disorder report that the app contributed to their condition (Phelan et al., 2020). NHS hospital admissions for eating disorders have risen from 2,868 in 2013/14 to 24,300 in 2020/21 (NHS England, 2023). Simultaneously, the June 2024 FDA over-the-counter clearance of the Abbott Lingo continuous glucose monitor marks a critical paradigm shift — transitioning clinical metabolic tracking into the mainstream consumer wellness market and demanding a new, human-centred design language before engineering-led paradigms dominate (Abbott Newsroom, 2024).

This project investigates the design gap between what we know about dietary behaviour change and what existing tools actually deliver. It asks: what would it take for eating well to feel as meaningful, legible, and rewarding as completing a run? And it adds a critical ethical constraint: any feedback system must not only improve health metrics but must also preserve food joy, prevent disordered eating, and support **Food Freedom** — the right to make informed choices about eating without guilt or compulsion (Tribole and Resch, 2020).

A design futures approach is appropriate here because this is not simply a product design problem. It is a question about the kind of relationship we want technology to have with the most intimate act of daily life. Using speculative and critical design tools (Dunne and Raby, 2013), this project interrogates the assumptions embedded in current health technology and prototypes radically different futures for dietary feedback.

---

<div style="page-break-before: always;"></div>

# 2. Background: Literature, Practice, Signals and Trends

## 2a. Research Questions

1. Why does dietary behaviour produce so little immediate, legible feedback compared to exercise and sleep, and what are the design, behavioural, and physiological reasons for this gap?
2. What existing tools and approaches have attempted to address dietary feedback, and why do they fail to achieve sustained engagement?
3. What is the relationship between dietary feedback design and the risk of disordered eating, and how can feedback systems be designed to support food freedom?
4. What signals and speculative possibilities exist for alternative dietary feedback paradigms that are immediate, holistic, and emotionally resonant without being punitive?

## 2b. Research Process

Research was conducted across three phases: (1) a systematic literature review drawing on Google Scholar, PubMed, and design databases; (2) a practice review covering existing apps, wearables, and critical design projects; (3) a signals-and-trends mapping exercise using the four-lens framework (Human / Society / Technology / Nature) and Futures Triangle methodology. See **Appendix A** for the Futures Triangle and Futures Wheel analyses, and **Appendix B** for full annotated literature and practice entries.

The literature and practice review was organised visually as a knowledge chain, tracing deductive paths from research questions through theory, empirical evidence, and design precedent. This visual structure — reproduced in the citation genealogy diagram in Appendix B — traces the intellectual lineage from Schembre (2018) → Fogg (2009) → Kahneman (2011) → Norman (2013) → Roth (2024) → Tribole and Resch (2020) → Dunne and Raby (2013), showing how each source generates the next research question. The review drew on a minimum of 20 literature sources and 20 practice-based projects across academic papers, trend reports, design installations, and commercial products.

![[01 — Futures Triangle.png|900]]
*Figure 1 — Futures Triangle: mapping the push of trends, pull of the preferred future, and weight of current paradigms in dietary feedback design.*

## 2b(i). Trend Wall Signals

Three signals were contributed to the RCA trend wall during the February–March 2026 workshops, all belonging to the macro-trend of **Technology-Mediated Preventive Health**:

**Signal 1 — OTC CGM Market Expansion.** The June 2024 FDA clearance of Abbott Lingo as the first over-the-counter CGM marks the moment when continuous metabolic tracking crossed from clinical device to consumer wellness product. The global OTC CGM market reached US$370.7M in 2024, with non-diabetic users representing 41.46% of uptake (Precedence Research, 2025). This signal indicates that the infrastructure for real-time biological dietary feedback now exists — but the ethical design framework to prevent harm does not yet accompany it.

**Signal 2 — Intuitive Eating and the Anti-Diet Movement.** High baseline Intuitive Eating scores correlate with a 74% reduction in binge eating risk over eight years (Linardon, 2020). This signal — emerging from clinical eating disorder research into mainstream wellness discourse — indicates a growing cultural rejection of external dietary metrics in favour of internal body attunement. Design must respond to this shift by fostering embodiment rather than imposing surveillance.

**Signal 3 — Social Rituals as Counter-Models.** Cross-cultural research (Rozin et al., 1999; Fischler, 1988) demonstrates that effective dietary feedback already operates through social and cultural channels: the Japanese *Itadakimasu* ritual creates a designed pre-meal transition of attention; the French *paradoxe culinaire* sustains dietary behaviour through pleasure-oriented shared experience rather than individual biometric tracking. These signals challenge the assumption that effective dietary feedback must be technological.

*See Appendix H for full signal card format.*

## 2c. Key Research Findings

### The Feedback Gap

The core problem is defined by a "phenomenological silence." When you eat a nutritious meal, you feel full, but the metabolic benefits — reduced inflammation, improved insulin sensitivity — play out over weeks at a cellular level imperceptible to the user. This gap triggers **hyperbolic discounting** (Kahneman, 2011), where fast-thinking System 1 prioritises immediate sensory reward over abstract long-term health.

The emergence of Continuous Glucose Monitoring (CGM) for non-diabetics represents the most significant technical development. The OTC CGM market is projected to grow from US$370.7M in 2024 to US$1.77B in 2034 (Precedence Research, 2025). Critically, Zeevi et al. (2015) demonstrated that identical foods provoke dramatically different postprandial glycaemic responses across individuals — invalidating generic, population-based dietary guidelines and scientifically justifying the shift toward personalised, post-meal feedback.

### The Ethical Constraint

Feedback design carries acute risk. Roth et al. (2024) established significant associations between intensive dietary tracking and elevated disordered eating risk. Punitive tracking tools trigger what Wallace et al. (2025) call the "reification of data" — a process where external numerical metrics progressively overwrite the user's direct sensory and emotional experience of eating. The Intuitive Eating framework (Tribole and Resch, 2020) offers a protective counter-model by cultivating internal body attunement rather than external rule-following. See **Appendix G** for supporting data visualisations.

### Cross-Cultural Counter-Models

The dominant paradigm of dietary self-tracking is culturally specific — rooted in Anglo-American anxieties about bodily control and Silicon Valley's quantification ideology. Three counter-models challenge this: the Japanese practice of *Hara Hachi Bu* and *Itadakimasu* achieves embodied, non-punitive food awareness as a cultural default without technological imposition (Rozin et al., 1999); the French *paradoxe culinaire* suggests that the quality of the eating *experience* — consumed slowly, socially, with sensory attention — may be the primary driver of healthy dietary behaviour; the Krukow × COOP Denmark intervention demonstrates that measurable behaviour change can be achieved through environmental and spatial design at the meso-scale, bypassing the need for individual biometric monitoring.

## 2d. Concluding Synthesis

*Three most important insights from literature and practice review:*
1. **The feedback gap is a design failure, not a motivational one.** The absence of immediate, perceivable post-meal signals — documented across behavioural science (Fogg, 2009; Kahneman, 2011) and physiological research (Zeevi et al., 2015) — means current dietary tools fail before the user even engages with them.
2. **Punitive tracking causes measurable harm.** The pathway from manual logging → data reification → disordered eating is now empirically established (Roth et al., 2024; Wallace et al., 2025; Phelan et al., 2020), creating a design ethics imperative alongside the usability problem.
3. **Non-technological counter-models demonstrate that effective feedback is possible.** Cross-cultural evidence (Rozin et al., 1999; Lupton, 1996; Kristeller and Wolever, 2011) proves that awareness-first, embodied, or communal approaches can sustain dietary behaviour change — validating an alternative design direction.

*Three most important trends / drivers / emerging futures:*
1. **Medicine 2.0 → Medicine 3.0 transition** (2015–2035): From population-average guidance to real-time, personalised, preventive metabolic feedback — anchored by the 2024 OTC CGM clearance.
2. **Intuitive Eating and interoceptive literacy** as a clinically validated, harm-protective counter-framework to surveillance-based diet culture.
3. **Emerging ambient and socio-cultural feedback paradigms**: Shape-changing tableware, auditory-gustatory interfaces, and environmental nudge architectures (Krukow × COOP; CHI 2025 research) demonstrate that dietary feedback does not require individual biometric tracking.

*Key gap:* Despite the proliferation of digital health tools, a fundamental design void persists for "awareness-first" interventions that translate invisible nutritional benefits into immediate, emotionally resonant feedback without relying on punitive manual logging or causing the reification of data. Crucially, this gap is compounded by the absence of a shared design language for non-invasive metabolic feedback tools entering the consumer market — a void that will be filled by engineering-led paradigms if design futurists do not intervene now.

---

<div style="page-break-before: always;"></div>

# 3. Problem Framing

## The Challenge: The Intention-Action Gap

The central challenge this project engages is the *Intention-Action Gap* in dietary behaviour: the persistent, well-documented failure of people to translate genuine intentions to eat better into sustained dietary behaviour change. This gap exists not because people lack information or motivation, but because eating well produces no immediate, perceivable signal of success. Without feedback, behaviour cannot be reinforced, iterated, or emotionally validated. Design has not solved this problem: the dominant approach of calorie-counting apps has been in steady retention decline for over a decade.

## System-Level Perspectives

This project operates at the intersection of two systemic lenses:

- **Human (primary):** Individual dietary behaviour, cognitive biases (hyperbolic discounting, present bias), emotional relationships with food, body image, and lived eating experience.
- **Technology (secondary):** Feedback tools, sensor technology (CGM, wearables), data visualisation, AI food recognition, and the design infrastructure of behaviour change applications.
- **Society (contextual):** Diet culture, eating disorder prevalence, the anti-diet movement, food advertising, and public health frameworks — providing critical ethical constraints.
- **Nature (contextual):** Gut microbiome, metabolic biology, circadian eating patterns, and the physiological reality of nutrition — grounding the project in biological reality.

## Two Distinct User Cohorts

A critical flaw in current dietary feedback systems is the conflation of two fundamentally distinct user groups requiring divergent design logics. For the **general population**, the primary barrier is tracking friction: Fogg's B=MAP model shows that manual logging creates insurmountable Ability barriers and delayed benefits fail as effective Prompts, resulting in widespread abandonment (Fogg, 2009). For **users at risk of eating disorders**, the problem is not lack of engagement but the psychological harm caused by the feedback itself: intensive dietary self-monitoring is strongly associated with elevated eating disorder risk (Roth et al., 2024), and punitive tools trigger the reification of data — where external metrics replace direct sensory experience (Wallace et al., 2025). By explicitly separating these profiles, the design space can address tracking fatigue in the general population without weaponising data against vulnerable users.

A third dimension compounds both cohorts: tracking fatigue is not merely a friction problem but also a trust problem — most users hold fear-based "folk theories" of tracking tools (Makhortykh et al., 2022), actively refusing dietary monitoring as a privacy violation resistant even to financial incentives. Any effective feedback design must address this trust deficit before it can function as a scaffold for interoceptive literacy.

## Temporal and Contextual Scale

- **Temporal:** Medium-to-long term, **5–20 years**, projecting to a 2035 speculative horizon. This is appropriate because preventive health interventions require years to demonstrate measurable outcomes; non-invasive dietary sensing technology is 5–10 years from consumer readiness; and the cultural shift from diet-culture to food freedom thinking is still unfolding. Backcasting from the 2035 preferred future is used to identify present-day intervention points (Martell, 2026).
- **Contextual:** Primarily **micro** — the individual's daily experience of eating, at the level of a single meal. The project also engages **meso-scale** considerations (how products shape cultural norms around eating) and acknowledges **macro** drivers (public health systems, food industry incentives) as systemic context.

---

<div style="page-break-before: always;"></div>

# 4. Design Futures Approach

## Disciplinary Positioning

This project is situated at the intersection of *Behaviour Design* (systems that support deliberate human behaviour change) and *Speculative / Critical Design* (design fiction and provocative artefacts that interrogate assumptions about technology and futures). It draws on Futures Studies for temporal orientation and on Food Studies and Health Psychology for empirical grounding.

![[Disciplinary_Map.svg|694]]
*Figure 2 — Disciplinary Map: positioning the project across behaviour design, speculative design, and futures studies.*

## Three Roles of the Design Futurist

As a design futurist on this project, my role is threefold: (1) **Cartographer of the Present** — mapping why the current dietary feedback landscape looks as it does, what assumptions it encodes, and whose interests it serves; (2) **Critical Provocateur** — designing speculative artefacts that make visible the absences and contradictions in current food technology; (3) **Preferential Futurist** — using backcasting methodology to identify near-term design opportunities from a preferred 2035 future (Martell, 2026).

## Design Approaches

Four design approaches structure this project:

**Behavioural Architecture** draws on Fogg's B=MAP model (2009) and nudge theory (Thaler and Sunstein, 2008) to design feedback environments that make the healthy choice the easy choice without coercion.

**Compassion-Based Design** reframes the designer's relationship to the user: it is not the user who must become more disciplined or data-literate, but the designer who must intervene with genuine care — designing systems that celebrate food, honour the body, and treat eating as a site of joy rather than surveillance.

**Embodiment and Empowerment** asks two questions: how can design help people connect more deeply with their own bodies, not as objects to be optimised but as subjects to be inhabited? And how can design give people *agency* over information — making data available for those who choose it, without imposing data on those who do not?

**The REFLECTIVE Framework** operationalises "reflect, not judge" into three evaluable design criteria: feedback must be *Descriptive, not Evaluative* (no scoring, no colour-coded pass/fail indicators); *Relative, not Absolute* (anchored to the individual's own baseline, not population averages — justified by Zeevi et al., 2015); and *Closed-Loop, not Open-Ended* (replacing open-ended tracking with a 60-second post-meal closure event).

## The Preferable Future

Of the three scenarios modelled (see below and **Appendix C** for full narratives), **Scenario 3 — Intuitive Technology ("The Tool That Disappears")** constitutes the preferable future toward which this project works. This future is preferable because it positions technology as a *temporary scaffold* rather than a permanent prosthesis — building capacity in the individual, not dependency on the device. It is preferable specifically for adults aged 22–45 who have been harmed by, or are at risk from, punitive tracking paradigms, for whom Food Freedom is a genuine clinical and existential need. It is also the only scenario in which the technology is designed to make itself obsolete, and that obsolescence is the measure of its success.

By contrast, Scenario 1 (*Food as Code*) represents a probable but undesirable future driven by engineering logic that risks a new epidemic of orthorexia; Scenario 2 (*Ambient Social*) represents a desirable but contextually limited future that cannot yet scale beyond the shared restaurant setting. Scenario 3 is the only future in which all three design principles — behavioural, compassionate, and embodied — are simultaneously operative.

*A design futurist's caveat:* an honest futures analysis requires a third axis — **Ecological Vulnerability**. By 2035, climate disruption and food supply instability will be the structural backdrop for any dietary feedback design. Scenario 3 remains preferable precisely because interoceptive literacy is low-infrastructure and culturally transferable, defensible within a 2035 shaped by ecological pressure rather than insulated from it.

## Three 2035 Scenarios

![[03 — 2035 Scenario Matrix.png|900]]
*Figure 3 — Scenario Matrix: mapping User Agency against Technology Type across three 2035 futures.*

**Scenario 1 — High-Tech Biometric ("Food as Code"):** True non-invasive CGMs and facial neuromotor interfaces have made metabolic data ubiquitous. People stop eating when subcutaneous sensors notify smart glasses that their glycaemic curve has peaked. Food is fuel. The risk: total reification of data — a new orthorexia driven by flatline glucose anxiety (Wallace et al., 2025).

**Scenario 2 — Ambient Social ("The Disappearing Interface"):** The dining environment itself is the sensor and interface. Hidden radar tracks group physiological states; shape-changing tableware and acoustic gastronomy alter the eating experience without individual dashboards. The French *paradoxe culinaire* has been digitised. The risk: ambient surveillance capitalism — Big Food manipulating collective responses to products without consent.

**Scenario 3 — Intuitive Technology ("The Tool That Disappears") [Preferred]:** A wearable delivers a gentle thermal pulse mid-meal — not to report how many carbohydrates have been consumed, but as a just-in-time prompt to notice what the body's stretch receptors are already feeling. A conversational AI steward asks quietly: *"Are you noticing your fullness right now?"* Over six months, the sleeve pulses less frequently. Eventually, the AI recommends the user delete the app. Food Freedom — not needing a health tracker — becomes the ultimate outcome.

Full day-in-the-life narratives and failure modes for all three scenarios are in **Appendix C**.

---

<div style="page-break-before: always;"></div>

# 5. Methodology

The methodology operates on two parallel, mutually informing tracks: **investigative research** (understanding the current landscape and its failures) and **generative design research** (developing and testing alternative feedback paradigms). This dual-track structure reflects the nature of the problem: the failure of dietary feedback is simultaneously an empirical, behavioural, and design question.

![[Dual_Track_Methodology.svg|442]]
*Figure 4 — Dual-Track Methodology: investigative and generative research tracks running in parallel.*

## 5a. Participants and Data

**Participants:** 6–8 adults aged 22–45, current or prior users of at least one dietary tracking tool, willing to discuss their emotional relationship with food. Exclusion criterion: current clinical diagnosis of an eating disorder (to prevent research-induced harm). This sample size follows Braun and Clarke (2006) guidance for thematic saturation in homogeneous purposive qualitative samples.

**WEIRD Bias Mitigation:** Agapie's (2024) meta-analysis of behaviour change technology studies found that 61.1% focus exclusively on Western, Educated, Industrialised, Rich, and Democratic (WEIRD) populations, and 78.3% rely on binary gender classification — rendering most HCI dietary research structurally unrepresentative. This project responds with an active recruitment protocol: a minimum of two participants will be sourced from non-Western cultural backgrounds, and recruitment will extend beyond the RCA student community to personal networks with diverse cultural relationships with food. Cross-cultural food attitudes (Rozin et al., 1999; Fischler, 1988; Lupton, 1996) will be treated as primary analytical lenses, not supplementary context. This is not diversity tokenism — it is a methodological requirement given that the project's core counter-models (Hara Hachi Bu, the French paradoxe culinaire) are non-Western. A homogeneous WEIRD sample would undermine the project's own theoretical architecture.

**Data types:** Primary qualitative (semi-structured interviews, autoethnographic diary); secondary qualitative (literature review, app audit); secondary quantitative (published studies on app retention, ED prevalence, behaviour change outcomes).

## 5b. Research Phases

| Phase | Method | Timing | Output |
|-------|--------|--------|--------|
| **0** | Informal phenomenological peer conversations (exploratory) | May–June 2026 | Recurring themes; interview protocol refinement |
| **1** | Semi-structured interviews (45–60 min, 6–8 participants) | June 2026 | Lived experience of dietary tracking; emotional relationship with food data |
| **2** | Autoethnographic diary study (4 weeks, self-conducted) | June–July 2026 | Observer-perspective log of eating events, environmental contexts, design provocations |
| **3** | App audit & comparative analysis (8 tools) | July 2026 | Evaluation against: feedback immediacy, emotional tenor, legibility, ED risk indicators |
| **4** | Speculative prototyping workshop (groups of 2–4, 60 min) | July 2026 | Physical mock-ups of post-meal feedback objects; scenario response data |
| **5** | Participatory critique (45 min, original interviewees) | July–Aug 2026 | Legibility, emotional tone, and "forgetting" probe responses for The After Glow |

**Data collection protocol:** Phase 0 and Phase 1 interviews will be conducted in private spaces at RCA or locations chosen by participants. All recorded sessions require written consent; field notes will use the Q/T/! coding system (Quote / Theme / Surprise). The Phase 4 workshop will take place in an RCA studio with participants bringing no prior brief, using only clay, paper, and printed scenario cards — ensuring the data reflects spontaneous design intuition rather than coached responses. Thematic saturation (Braun and Clarke, 2006) determines when sufficient interview data has been collected: typically when three consecutive interviews yield no new themes. Documentation across all phases includes: audio recordings (transcribed verbatim), physical artefacts (photographed), and A0 poster outputs (scanned).

**Design and futures methods:** Alongside empirical research, this project deploys three futures methods. (1) *Backcasting* from the preferred 2035 future identifies present-day intervention points and shapes the Phase 4 workshop brief (Martell, 2026). (2) *Scenario building* — using the Intelligence–Perspective–Logic–Foresight structure — produces the three 2035 narratives that serve as research stimuli in Phases 4 and 5. (3) *Diegetic prototyping* (Near Future Laboratory, 2014) frames The After Glow as a mundane 2035 consumer object, making the speculative legible to participants without requiring futures literacy. These methods are appropriate because the research question is not empirically solvable in the present — it requires imagining a different relationship between technology and the body before testing whether that imagination resonates with real users.

Full session protocols, question guides, and daily task structures for each phase are in **Appendix D**.

## 5c. Data Analysis

Interview data will be analysed using reflexive thematic analysis (Braun and Clarke, 2006), developing themes inductively, then reviewing against the theoretical framework (Fogg B=MAP, intuitive eating principles) to generate design implications. Diary data will be analysed through design-led synthesis: converting observational notes and sketches directly into design provocations using the 'What if?' question as an analytical tool.

## 5d. Speculative Prototyping: "The After Glow"

The primary speculative artefact is **The After Glow** — a handcrafted ceramic disc linked to a biosensor that translates post-prandial metabolic data into embodied sensations: soft amber LED light and modulating warmth, with no screens, scores, or numbers. Framed using the Near Future Laboratory TBD Catalog approach (Near Future Laboratory, 2014), it is presented as an ordinary consumer product available in 2035 to defamiliarise current reliance on punitive smartphone screens.

Three critical design provocations ensure this artefact functions as a genuine critical probe rather than an affirmative product: (1) a **Surveillance Blackout** — the disc severs the phone's Wi-Fi connection for the 60 seconds of post-meal reflection; (2) an **Intentional Placebo Error** — one in ten activations produces a confusing or null response, forcing the user to confront reliance on the machine over their own body; (3) **Programmed Physical Decay** — made from unfired clay, the disc physically cracks and degrades in response to rushed meals, rejecting Silicon Valley's promise of frictionless immortal optimisation. Full specifications are in **Appendix F**.

## 5e. Ethics Summary

This research has been designed to comply with RCA ethics requirements. An ethics checklist has been completed and submitted to the supervising tutor. The project is classified as **low risk**. Five ethical principles govern all phases: ED risk screening (EAT-26 pre-screening for all participants, referral protocol in place); biometric data privacy (self-generated data only, encrypted local storage, no cloud upload); informed consent and voluntary withdrawal at all phases; independence from food industry and CGM manufacturer funding; and active WEIRD bias mitigation (minimum two participants from non-Western cultural backgrounds). Full ethics framework is in **Appendix E**.

---

<div style="page-break-before: always;"></div>

# 6. Critique Documentation

*→ 【你需要做】在此处插入展览照片（`06_展览存档/` 里找）。*

**Exhibition display (April 14, 2026):** The critique was presented in an exhibition-style format including: a printed A4 draft proposal; a hero image (A3) with the project title; five conversation-prompt postcards covering the core research question, the phenomenological silence concept, the three 2035 scenarios, the REFLECTIVE Framework, and The After Glow provocation; and a physical cardboard mock-up of The After Glow disc prototype. Photographs of the displayed materials and peer feedback forms are held in the project archive (`06_展览存档/`).

**Feedback received:** During the April 8 group tutorial, tutors identified three critical weaknesses in the initial framing: (1) the proposal lacked macro-societal context situating the feedback gap within broader public health and market failures; (2) it conflated general users with those at risk of eating disorders, treating them as a single design target; (3) it remained overly theoretical, without tangible speculative design outputs or empirical grounding. Tutors additionally called for a stronger Compassion-Based Design framing, explicit Embodiment and Empowerment dimensions, and more rigorous engagement with cross-cultural counter-models. The April 14 exhibition critique confirmed the project's revised direction, with peers responding most strongly to the Scenario 3 narrative and the Intentional Placebo Error provocation.

**How feedback was addressed:** This feedback catalysed a pivotal reorientation. The project's philosophical core shifted from a conventional health-monitoring model toward **Compassion-Based Design** and an **awareness-first** paradigm emphasising interoceptive literacy and Food Freedom. The methodology was expanded to include Phase 0 phenomenological peer conversations. The speculative artefact "The After Glow" was developed and materialised. The REFLECTIVE Framework was formalised to operationalise "reflect, not judge" into three evaluable design criteria. The two-user-cohort distinction was explicitly introduced to address the ethical conflation. An ecological vulnerability caveat was added to the 2035 scenario matrix to prevent the preferred future from being read as a luxury biohacking artefact detached from planetary realities.

---

<div style="page-break-before: always;"></div>

# 7. Project Outputs, Stakeholders and Impacts

## Outputs

1. **Multi-dimensional Dietary Wellbeing Framework** — the REFLECTIVE Framework and its three evaluable design criteria, constituting a replicable design guide for non-punitive feedback.
2. **Three 2035 Speculative Scenarios** — structured using the Intelligence–Perspective–Logic–Foresight model (Martell, 2026), communicating divergent dietary technology futures to stakeholders.
3. **3–5 Speculative Artefacts** — including The After Glow prototype, designed to provoke critical conversation and test user responses.

## Stakeholder Ecosystem

Five stakeholder groups actively shape this landscape, each with competing interests:

| Stakeholder | Role | Tension |
|-------------|------|---------|
| **ED specialists / mental health practitioners** | Ethical safeguards; harm-prevention authority | May veto tools that lack clinical evidence |
| **CGM manufacturers (Abbott, Dexcom)** | Hardware infrastructure | Engineering culture vs. human-centred design |
| **Regulatory bodies (FDA, MHRA)** | Define legal health claims | Navigating OTC CGM precedent; emerging territory |
| **Venture capitalists** | Scaling capital | ROI focus conflicts with non-addictive design |
| **Big Food / food industry** | Market power | Financial incentive to co-opt "anti-diet" messaging for profit |

## Pathways to Impact

The immediate impact pathway is **narrative shift**: by producing speculative artefacts and scenarios that circulate within health technology design communities, this project challenges the implicit assumption that "more data = better outcomes." The medium-term pathway is **tool provision**: the REFLECTIVE Framework offers practitioners an evaluable set of criteria for auditing existing dietary tools and commissioning new ones. The long-term pathway is **cultural change**: if Scenario 3 is the preferred future, the measure of success is the normalisation of Food Freedom as a design principle in the health technology sector — making it as standard as usability or accessibility.

---

# 8. Personal Objectives

Through this Independent Research Project, my primary objective is to cultivate a design practice rooted in Compassion-Based Design, moving beyond the punitive, surveillance-heavy paradigms of current digital health tools. I aim to establish expertise at the intersection of Behavioural Design and Speculative Futures, with a specialised focus on Ethical Health Innovation.

This IRP serves as a catalyst for my long-term career trajectory by enabling me to translate abstract ethical constraints — safeguarding Food Freedom, mitigating eating disorder risks — into actionable design frameworks. By synthesising phenomenological research with critical prototyping, this project transitions my practice from theoretical critique to material intervention. I aspire to design technologies that function as empathetic stewards: amplifying internal bodily intuition rather than replacing it with external optimisation metrics.

---

# 9. Project Plan

![[Project_Plan.svg|697]]

*Figure 5 — Project Plan: phased timeline from May 2026 to August 2026 (IRP Realisation submission), with key milestones for empirical research, prototype iteration, and final report completion.*

**Key milestones:** Phase 0 peer conversations (May–June); Phase 1 interviews (June); Phase 2 diary study (June–July); Phases 3–5 (July); prototype development (ongoing, June–July); IRP Realisation report submission (August 2026).

---

<div style="page-break-before: always;"></div>

# Reference List

*All references formatted in Harvard style, listed alphabetically by first author's surname or organisation.*

Abbott Newsroom (2024) *Abbott Receives FDA Clearance for Lingo, Its First Over-the-Counter Continuous Glucose Monitor*. Available at: https://www.abbott.com/corpnewsroom (Accessed: 1 May 2026).

Agapie, E. (2024) 'Behavior Change Technologies: A Systematic Review of HCI Research', *ACM CHI Conference Proceedings*.

Arakawa, M. *et al.* (2026) 'Continuous Glucose Monitoring and Dietary Behaviour Change in Insulin-Treated Patients', *Diabetes Technology & Therapeutics*, [Online ahead of print]. doi:10.1089/dia.2026.0001.

Attia, P. and Gifford, B. (2023) *Outlive: The Science and Art of Longevity*. New York: Harmony Books.

Braun, V. and Clarke, V. (2006) 'Using Thematic Analysis in Psychology', *Qualitative Research in Psychology*, 3(2), pp. 77–101.

Business of Apps (2024) *Health and Fitness App Report 2024*. Available at: https://www.businessofapps.com/data/health-fitness-app-report/ (Accessed: 12 April 2026).

Damasio, A.R. (2003) *Looking for Spinoza: Joy, Sorrow, and the Feeling Brain*. London: Heinemann.

Dator, J. (2009) 'Alternative Futures at the Manoa School', *Journal of Futures Studies*, 14(2), pp. 1–18.

Dunne, A. and Raby, F. (2001) *Placebo Project* [Design installation]. London: Royal College of Art Gallery.

Dunne, A. and Raby, F. (2013) *Speculative Everything: Design, Fiction, and Social Dreaming*. Cambridge, MA: MIT Press.

Fischler, C. (1988) 'Food, Self and Identity', *Social Science Information*, 27(2), pp. 275–292.

Fogg, B.J. (2009) 'A Behavior Model for Persuasive Design', in *Proceedings of the 4th International Conference on Persuasive Technology*. New York: ACM, pp. 1–7.

Inayatullah, S. (2008) 'Six Pillars: Futures Techniques Transforming Your Practice', *Foresight*, 10(1), pp. 4–21.

Kahneman, D. (2011) *Thinking, Fast and Slow*. London: Allen Lane.

Kristeller, J.L. and Wolever, R.Q. (2011) 'Mindfulness-Based Eating Awareness Training for Treating Binge Eating Disorder: The Conceptual Foundation', *Eating Disorders*, 19(1), pp. 49–61.

Krukow, K. (no date) *COOP × Krukow: Behaviour Design at Scale* [Case study]. Available at: https://krukow.net (Accessed: 12 April 2026).

Linardon, J. (2020) 'Positive Body Image, Intuitive Eating, and Dietary Restriction: A Systematic Review and Meta-Analysis', *European Eating Disorders Review*, 28(6), pp. 749–762.

Lupton, D. (1996) *Food, the Body and the Self*. London: Sage.

Makhortykh, M. *et al.* (2022) 'Folk Theories of Algorithmic News Curation: How Users Understand Tracking and Why It Matters', *New Media & Society*, 24(7), pp. 1651–1671.

Martell, S. (2026) *Futures Strategy: Intelligence–Perspective–Logic–Foresight Framework* [Lecture]. RCA Project Design Approach Workshop. London: Royal College of Art, March 2026.

Near Future Laboratory (2014) *TBD Catalog*. Available at: https://store.nearfuturelaboratory.com/products/tbdcatalog (Accessed: 1 May 2026).

NHS England (2023) *Eating Disorders: Hospital Admissions Data 2015–2021*. London: NHS England. Available at: https://www.england.nhs.uk (Accessed: 12 April 2026).

Norman, D.A. (2013) *The Design of Everyday Things*. Revised edn. New York: Basic Books.

Phelan, S. *et al.* (2020) 'MyFitnessPal Use and Eating Disorder Risk Factors', *International Journal of Eating Disorders*, 53(12), pp. 1943–1952.

Precedence Research (2025) *Digital Health Market Size, Share and Trends 2025–2034*. Available at: https://www.precedenceresearch.com/digital-health-market (Accessed: 1 May 2026).

Priory Group (2025) *Eating Disorder Statistics UK 2025*. Available at: https://www.priorygroup.com/eating-disorders (Accessed: 1 May 2026).

Roth, E. *et al.* (2024) 'Weight-Related Self-Monitoring and Eating Disorder Symptoms: A Systematic Review and Meta-Analysis', *International Journal of Eating Disorders*, 57(3), pp. 512–528.

Rozin, P. *et al.* (1999) 'Attitudes to Food and the Role of Food in Life in the U.S.A., Japan, Flemish Belgium and France', *Appetite*, 33(2), pp. 163–180.

Schembre, S.M. *et al.* (2018) 'Mobile Ecological Momentary Diet Assessment Methods for Behavioral Research: Systematic Review', *JMIR mHealth and uHealth*, 6(11), e11170.

Superflux (2017) *Mitigation of Shock* [Installation]. Available at: https://superflux.in/index.php/work/mitigation-of-shock/ (Accessed: 12 April 2026).

Thaler, R.H. and Sunstein, C.R. (2008) *Nudge: Improving Decisions about Health, Wealth and Happiness*. New Haven: Yale University Press.

Tribole, E. and Resch, E. (2020) *Intuitive Eating: A Revolutionary Anti-Diet Approach*. 4th edn. New York: St. Martin's Essentials.

Wallace, L. *et al.* (2025) 'Health-Tracking Technologies and Eating Attitudes: A Systematic Review', *Appetite*, 198, pp. 107–119.

Zahedani, A.D. *et al.* (2023) 'Continuous Glucose Monitoring with a Smartphone App and Personalized Dietary Feedback Reduces Postprandial Glycemia', *Cell Metabolism*, 35(4), pp. 569–581.

Zeevi, D. *et al.* (2015) 'Personalized Nutrition by Prediction of Glycemic Responses', *Cell*, 163(5), pp. 1079–1094.

Zhang, Y. *et al.* (2025) 'Effect of Continuous Glucose Monitoring on Dietary Behaviour in Non-Diabetic Adults: A Systematic Review and Meta-Analysis', *Nutrients*, 17(3), pp. 441–459.

---

<div style="page-break-before: always;"></div>

# Appendices

---

## Appendix A — Futures Context: Futures Triangle and Futures Wheel

*These two visual frameworks were developed during the RCA Trend Wall workshops (February–March 2026) and provide the futures analytical foundation for this project.*

![[01 — Futures Triangle.png|900]]

**Figure A1 — Futures Triangle.** Three forces shape the trajectory of dietary feedback technology:
- **Pull of the future (preferred):** Food Freedom as cultural norm; interoceptive literacy as default; technology designed to disappear.
- **Push of the present (trends):** OTC CGM market expansion; eating disorder epidemic; collapse of app retention; Medicine 2.0 → 3.0 transition.
- **Weight of history (inertia):** Manual calorie counting paradigm (20 years entrenched); diet culture and punitive body metrics; food industry financial incentives; behavioural inertia in health technology design.

![[02 — Futures Wheel.png|900]]

**Figure A2 — Futures Wheel.** Mapping first- and second-order consequences if the current dietary feedback paradigm persists unchanged:
- **First order:** Continued low app retention; rising eating disorder prevalence; OTC CGM adoption without design language.
- **Second order:** Normalisation of biometric surveillance for eating; clinical burden on mental health services; market dominated by engineering-led paradigms; cultural drift toward "Food as Code."
- **Third order:** Loss of interoceptive capacity in the general population; complete medicalisation of the daily act of eating; erosion of food culture and food joy.

---

## Appendix B — Annotated Literature and Practice Review (Full)

*Selected annotations in What / So What / Now What format. The four entries in the main body (Fogg, Zeevi, Tribole, Dunne & Raby 2013) are not repeated here.*

---

**Kristeller, J.L. and Wolever, R.Q. (2011) Mindfulness-Based Eating Awareness Training**

- **What:** Clinical research detailing the MB-EAT framework, using mindfulness to train interoceptive awareness and improve dietary regulation through internal physiological cues.
- **So what:** Provides a scientifically validated alternative to calorie counting, proving that focusing purely on internal physical sensations is clinically effective for dietary regulation without triggering the harmful reification of data.
- **Now what:** Shapes the "awareness-first" positioning. The technology will be designed not to deliver diagnostic verdicts but to provide just-in-time prompts that direct the user's attention back to their own somatic experience (e.g., noticing satiety).

---

**MyFitnessPal (2005)**

- **What:** The dominant dietary tracking application, relying on manual logging against a generic calorie database.
- **So what:** Epitomises the fundamental design failure of current dietary tools. Extreme friction creates an insurmountable Ability barrier; its punitive architecture actively exacerbates eating disorder risks (73% of ED-vulnerable users reporting harm — Phelan et al., 2020).
- **Now what:** The IRP must explicitly reject manual input and prescriptive scoring systems, adopting an "awareness-first" paradigm that eliminates tracking fatigue and prevents the reification of data.

---

**Oura Health (2026) Oura Ring**

- **What:** A commercially successful biometric wearable distilling complex, invisible biological processes (sleep, recovery) into an immediate daily score.
- **So what:** Successfully closes the phenomenological feedback loop for sleep. However, its evaluative scoring mechanism is dangerous when applied to dietary tracking.
- **Now what:** The project will adopt its principle of translating invisible biology into immediate signals, but will strictly apply the REFLECTIVE Framework to ensure feedback is purely descriptive and non-evaluative.

---

**Krukow × COOP (Denmark)**

- **What:** A meso-scale behavioural design intervention in Danish retail environments applying nudge architecture to influence population-level food choices without individual surveillance.
- **So what:** Demonstrates that significant dietary behaviour change can be sustained purely through environmental and spatial design.
- **Now what:** Critically challenges the project's individual-wearable focus and directly inspires the Ambient Social 2035 scenario.

---

**Dunne, A. and Raby, F. (2001) The Placebo Project**

- **What:** A foundational critical design installation featuring electronic objects that provoke reflection through deliberate ambiguity.
- **So what:** By deploying "productively confusing" objects, the project successfully destabilises users' blind trust in machines, forcing them to confront reliance on technological authority over their own internal senses.
- **Now what:** Directly informs the Intentional Placebo Error feature of The After Glow.

---

**Superflux (2017) Mitigation of Shock**

- **What:** A speculative design installation physically simulating a futuristic domestic apartment adapted for climate-induced food insecurity.
- **So what:** Demonstrates how situating radical speculative futures within mundane, everyday domestic settings makes theoretical scenarios viscerally understandable.
- **Now what:** Validates the IRP's methodological strategy of framing futuristic interventions as ordinary consumer products.

---

**Wallace, L. et al. (2025) Health-Tracking Technologies and Eating Attitudes**

- **What:** A systematic review establishing the "reification of data" concept — the process by which external numerical metrics progressively overwrite the direct sensory and emotional experiences of eating.
- **So what:** Provides the core conceptual framework for understanding the harm of punitive tracking, and establishes the ethical obligation to design non-evaluative feedback.
- **Now what:** The reification of data becomes the primary harm-case this project's REFLECTIVE Framework is designed to prevent.

---

*→ 【你需要做】在此处插入文献推演链图（截图自 `03_研究素材/IRP 文献推演链 - 知识溯源图.md` 或 Canvas 文件）。以及补足至 10 个文献 + 10 个实践项目注释。*

---

## Appendix C — 2035 Scenario Narratives: Day in the Life

*Full narrative expansions of the three scenarios summarised in Section 4, including failure modes.*

---

### Scenario 1: High-Tech Biometric — "Food as Code"

**A Day in the Life (2035):** You wake up and your smart mirror has already projected your overnight metabolic recovery score onto the glass. In the kitchen, a 3D food printer — functioning like the *Sushi Singularity* system — has fabricated a breakfast block calibrated to your current cortisol and glucose levels. As you eat, your OCOsense smart glasses use facial optomyography to track your chewing rate, delivering a haptic vibration to your temple if you eat too quickly. You don't notice whether you feel full; you stop eating when your subcutaneous sensor notifies your glasses that your glycaemic curve has reached its optimal peak.

**Technology:** True non-invasive CGMs via sweat biosensors or mid-infrared spectroscopy; facial neuromotor interfaces; bio-integrated food printers.

**Cultural norms:** "Food as fuel" has evolved into "food as code." Citizens casually share metabolic stability scores as social currency; bioindividuality is absolute law.

**What could go wrong:** Total reification of data (Wallace et al., 2025). People lose the ability to feel hunger or satiety without a device confirming it. Maintaining a "flatline" glucose curve creates a new epidemic of orthorexia — Medicine 3.0's dark shadow.

---

### Scenario 2: Ambient Social — "The Disappearing Interface"

**A Day in the Life (2035):** You sit down for dinner with three friends. No screens, no patches, no phones. The dining environment itself is the sensor and the interface. As the meal progresses, hidden radar tracks your group's heart rate variability and conversational pacing. The table lighting shifts dynamically. An auditory-gustatory interface plays specific acoustic frequencies that enhance the perceived sweetness of the dessert — the chef reduced the sugar by 40% and no one notices. When group stress rises, the room's temperature drops slightly and shape-changing tableware adjusts to slow your sipping rate.

**Technology:** Shape-changing tableware; spatial biometric sensors; smart environments; acoustophoresis — using sound waves to alter food perception without altering the food.

**Cultural norms:** The French *paradoxe culinaire* and Japanese *Itadakimasu* have been digitised. Society prioritises communal pleasure and the shared performance of eating over individual optimisation.

**What could go wrong:** Ambient surveillance capitalism. Big Food conglomerates track collective physiological responses to products in restaurants — manipulating ambient conditions to trigger hyper-palatability without diner consent. Neurodivergent eaters feel profoundly alienated by environments designed to demand perpetual social harmony.

---

### Scenario 3: Intuitive Technology — "The Tool That Disappears" [Preferred]

**A Day in the Life (2035):** Halfway through a meal, your sleeve delivers a gentle thermal pulse. It does not tell you how many carbohydrates you have consumed. It is simply a just-in-time prompt — asking your System 2 brain to notice what your stretch receptors are already feeling. A conversational AI steward asks quietly: *"Are you noticing your fullness right now?"* You pause, realise you are satisfied, and stop eating. Over six months, the sleeve pulses less and less frequently. One morning, the AI informs you that your interoceptive literacy score has stabilised. It suggests you delete the app.

**Technology:** Conversational LLM stewards; unobtrusive wearable haptics; algorithms trained on MB-EAT protocols (Kristeller and Wolever, 2011).

**Cultural norms:** Food Freedom is the ultimate status symbol. Technology is viewed as a temporary scaffold, not a permanent prosthesis. The highest social currency is not needing a health tracker at all.

**What could go wrong:** The Affirmative Trap. Venture capitalists refuse to fund "obsolescent" technology. Companies build dark patterns that sabotage the off-boarding process, keeping users permanently dependent under the guise of "mindfulness."

---

*→ 【你需要做】可在此插入手绘场景轴图（User Agency × Technology Type 的 2×2 矩阵），拍照即可。*

---

## Appendix D — Research Protocols (Phases 0–5)

*Concrete session guides for all research phases. These are operational documents for use during the IRP Realisation unit (Term 3).*

---

### D1 — Phase 0: Phenomenological Peer Conversation Protocol (30–45 min, 1-on-1)

**Setup:** Find a private, quiet space. Bring a notepad and audio recorder. Open with: *"There are no right answers here, and I'm not interested in whether you eat 'well'. I'm interested in your actual experience."* Never use the words "good," "bad," "diet," or "healthy." Ask verbal consent to record.

**Warm-up (5–8 min):** "What did you eat today? When you wake up, do you usually have a sense of how you want to eat? Is there a place where eating feels most comfortable for you?"

**Tracking Experience (10–12 min):** "Have you ever used an app or tool to track what you eat? What did the data actually do for you? Was there a specific moment where the app made you feel something strongly — pride, shame, relief, frustration?"

**The Feedback Gap (10–12 min):** "When you think about 'eating well', what does it feel like *in your body*? Between exercise, sleep, and eating — which gives you the clearest signal that you did something good for yourself?" *(Give space for silence — this is the most important question.)*

**Environment (8–10 min):** "Describe your typical eating environment. If you could change one thing about your physical environment that would change how you eat, what would it be?"

**Speculative Prompt (8–10 min):** "Imagine a tool that tells you nothing *before* the meal. But after the meal, for 60 seconds, it shows you something about how your body responded. Would that feel interesting — or anxiety-provoking? Why?"

**Note-taking system:** Q = exact quote, T = emerging theme, ! = surprising answer. Within 30 minutes, write a 1-page synthesis: the 3 most surprising things said, the moment of strongest emotional activation, what the participant struggled to articulate, and exactly 1 direct quote to carry forward.

---

### D2 — Phase 4: Speculative Prototyping Workshop (60 min, groups of 2–4)

**Materials needed:** DAS air-dry modelling clay, toothpicks, A0 paper sheets, sticky notes in 3 colours, coloured markers, scissors, printed 2035 scenario cards.

**Icebreaker (15 min):** Briefly introduce speculative design with one example (e.g., Dunne & Raby's Placebo Project). Run a 2-minute "two truths and a lie" warm-up to signal that imagination is valid here.

**Scenario Reading (5 min):** Read one 2035 scenario aloud. Ask: "Does any part of this future feel exciting? Disturbing? Familiar?"

**Idea Diverge (15 min):** Each person writes on sticky notes: (1) one thing they would want to *feel* after a meal in this future; (2) one thing they would never want to track; (3) one ritual or object they wish existed.

**Making (20 min):** Groups build one physical mock-up of a speculative dietary feedback object using clay and paper — not a screen-based app. Instruction: "It should communicate something about your body after eating without using numbers or scores."

**Output:** Collect clay/paper prototypes, A0 concept posters, and audio-recorded reflections.

---

### D3 — Phase 2: Autoethnographic Diary — 4-Week Daily Schedule

**Daily task (immediately after each main meal, 10–15 min):** Answer 5 questions: (1) What did I eat? (2) What was my state — hungry, bored, social, rushed? (3) What did I feel physically and emotionally in the 30 minutes after eating? (4) Did I receive any feedback signals from my body, environment, or technology? (5) What is a design provocation in response to this moment?

**Week 1 — Baseline / Finding the Silence:** Eat normally. Focus on *locating* the phenomenological silence. Actively compare the feedback richness of a morning run vs. a nutritious lunch. Log what signals the body *does* give vs. what it *doesn't* give. Do not attempt to change behaviour.

**Week 2 — Friction & Environment:** Shift focus outward. Log the friction points of traditional tracking ("Ability barriers" in Fogg's model). Note what social setting, time pressure, or kitchen layout prompted or disrupted the meal. Photograph 3 different eating environments.

**Week 3 — Affective Tone / Observer Perspective:** Practice strict mindfulness during meals. Describe bodily sensations and emotional responses *without* reactive judgement. Refuse to label any meal as "good" or "bad." Ask only: "What did I notice?" Try using The After Glow prototype (cardboard version) during this week.

**Week 4 — Generative "What-Ifs":** Focus entirely on question 5. Synthesise diary notes into design provocations. Sketch at least one speculative feedback mechanism per day.

---

### D4 — Phase 5: Participatory Critique Protocol (45 min, 1-on-1 or pairs, with original interviewees)

**What to bring:** Physical mock-up of The After Glow (cardboard or clay disc with amber LED or small heating pad), printed 2035 scenario cards, and the REFLECTIVE Framework one-pager.

**Introduction (5 min):** "I'm going to show you something I made based partly on what you told me. I want to know what you *actually* think — not what you think I want to hear."

**Legibility test (10 min):** Place The After Glow on the table without explanation. Ask: "Without me describing it, what do you think this object is trying to communicate to you about your meal?"

**Friction comparison (10 min):** "How would interacting with this physical object feel different from opening MyFitnessPal after eating? Which feels more like reflection? Which feels more like judgement?"

**Affective tone (10 min):** "Does this feedback feel like curiosity — or like scoring and shaming? Does it make you want to eat differently, or does it make you anxious?"

**Critical probe (10 min):** "This object has no memory. It doesn't remember what you ate yesterday. It never compares today to yesterday. Is that a feature or a fatal flaw? What does it feel like for a device to *forget* you?"

---

## Appendix E — Ethical Framework and RCA Ethics Checklist

*→ 【你需要做】在此处粘贴 Ethics Checklist 表单的实际答案（Google Form 提交后会发到你邮箱，复制内容粘贴即可）。*

**Ethics Checklist Status:** Submitted to supervising tutor. Risk classification: **Low risk.** No primary research involving human participants has commenced prior to submission of this proposal; all data collection will begin in Term 3 following ethics approval confirmation.

**Five governing ethical principles:**

**1. ED Risk and Participant Safety:** All phases will implement explicit ED safeguards. Phase 0 and Phase 1 interviews will use the Eating Attitudes Test (EAT-26) as a pre-screening tool. Any participant scoring above the clinical threshold will be referred to RCA wellbeing services and excluded from participation. All interview questions are phenomenologically framed to avoid triggering disordered cognition. Participants will receive written debriefing with RCA wellbeing resource details.

**2. Biometric Data Privacy:** Any metabolic data generated during the autoethnographic diary study (researcher's own) is entirely self-generated and not shared. If participants choose to reference their own CGM data, this constitutes sensitive health data: it will be anonymised, stored only on encrypted local drives, and destroyed after thematic analysis. No participant biometric data will be uploaded to cloud services.

**3. Informed Consent and Withdrawal:** Participation at all phases is voluntary, with the right to withdraw at any point without consequence. Written informed consent forms will be used for all recorded sessions. Participants will be informed of how their words may be quoted (anonymised) in the final IRP Report.

**4. Independence from Commercial Interests:** This research deliberately excludes funding from or partnership with food industry corporations, health insurance companies, or CGM manufacturers. This independence is essential to maintaining the critical design stance.

**5. WEIRD Bias Mitigation:** Following Agapie's (2024) critique that 61.1% of HCI behaviour change studies focus exclusively on Western contexts, this research will actively recruit beyond the default RCA student demographic. Phase 0 and Phase 1 interviews will seek a minimum of two participants from non-Western cultural backgrounds, and cross-cultural food attitudes (Rozin et al., 1999; Fischler, 1988; Lupton, 1996) will be explicitly integrated into thematic analysis.

---

## Appendix F — The After Glow: Critical Design Specifications

**Object description:** A handcrafted disc (approx. 80mm diameter, 12mm depth) made from unfired, porous clay. It contains a wearable-linked biosensor and an amber LED element with a small thermal actuator. There is no screen, no score, no number. It is activated by holding in both hands for 60 seconds after a meal.

**Sensory output:** Soft amber glow (intensity modulated by post-prandial physiological state); gentle warmth (temperature modulated by meal timing and metabolic response). Nothing is quantified. Nothing is evaluated.

**Framing:** Presented using the Near Future Laboratory TBD Catalog approach — as an ordinary consumer mail-order product from 2035, with product copy, pricing, and a postal address. This defamiliarises the speculative, positioning the radical as mundane.

**Three critical design provocations:**

**Provocation 1 — The Surveillance Blackout:** When the user holds the disc for its 60-second activation, the object acts as a localised signal blocker — severing the phone's Wi-Fi and disabling nearby smart speakers. *Why critical:* It makes the price of embodied reflection the explicit severing of the data umbilical cord. It builds on the *Wall* design probe (DIS 2025), actively resisting the "sense-and-extract" paradigm of health surveillance capitalism.

**Provocation 2 — The Intentional Placebo Error:** One out of every ten activations, the disc deliberately does nothing — remaining cold and dark, or emitting a confusing light pattern that does not match how the user feels. *Why critical:* It forces the user to confront their Folk Theory of Technology (Makhortykh et al., 2022) — the assumption that the machine knows better than the body. Aligned with Dunne and Raby's (2001) *Placebo Project* ethos of productively confusing objects.

**Provocation 3 — Programmed Physical Decay:** Made from unfired, porous clay, the disc heats slightly and physically cracks when it detects a highly dysregulated, rushed meal. Over months, the object degrades, stains, and crumbles based on lived reality. *Why critical:* Silicon Valley health tech promises frictionless, immortal optimisation via sleek glass screens. A degrading ceramic disc insists that human bodies are messy, entropic, and mortal — transforming dietary feedback into a *memento mori* rather than a biohacking dashboard.

*→ 【你需要做】在此插入：(a) After Glow 手绘草图照片；(b) Oura Ring vs. After Glow 对比图；(c) 物理衰变时间线草图。*

---

## Appendix G — Data Visualisations

*The following tables present key supporting data. Charts exported from Datawrapper/Flourish can replace these tables before final PDF submission.*

---

### G1 — Health App Retention Curve

| Day Since Install | Retention Rate (%) |
|-------------------|-------------------|
| Day 1 | 26% |
| Day 7 | 15% |
| Day 14 | 8% |
| Day 28 | ~4% |
| Day 30 | 3% |

*Figure G1 — Health & Fitness App Retention Curve. Source: Business of Apps (2024). The precipitous drop from 26% (Day 1) to 3% (Day 30) quantifies the systematic failure of manual logging paradigms. Day 30 retention of 3–4% represents the industry average across health and fitness app categories and has not meaningfully improved despite US$25 billion annual investment in digital health (Precedence Research, 2025).*

---

### G2 — OTC CGM Market Growth (2024–2034)

| Year | Market Size (US$M) | Key Event |
|------|-------------------|-----------|
| 2024 | $370.7M | FDA OTC clearance of Abbott Lingo ← **inflection point** |
| 2025 | $433.3M | Non-diabetic users = 41.46% of total market |
| 2026 | $506.6M | — |
| 2027 | $592.2M | — |
| 2028 | $692.2M | — |
| 2030 | $945.9M | — |
| 2034 | $1,765.5M | 16.9% CAGR sustained |

*Figure G2 — OTC CGM Market Size (2024–2034). Source: Precedence Research (2025). The 2024 FDA clearance of Abbott Lingo as an over-the-counter device marks the definitive inflection point from clinical to consumer market — creating the market context this project's design intervention must respond to before engineering-led UX paradigms dominate.*

---

### G3 — NHS Hospital Admissions for Eating Disorders

| Year | Hospital Admissions | Year-on-Year Change |
|------|-------------------|---------------------|
| 2013/14 | 2,868 | Baseline |
| 2015/16 | 13,200 | +360% vs. baseline |
| 2020/21 | 24,300 | **+747% vs. baseline (8.5× increase)** |

*Figure G3 — NHS Hospital Admissions for Eating Disorders (2013–2021). Source: NHS England (2023). The 8.5× increase over seven years — coinciding with the proliferation of calorie-tracking apps and social media diet culture — contextualises the urgency of harm-prevention design constraints. This data does not establish causation, but it confirms the scale of a public health crisis that dietary feedback design cannot ignore.*

---

### G4 — Protective Effect of Intuitive Eating

| Measure | Risk Reduction |
|---------|---------------|
| Baseline Intuitive Eating score +1 point | **74% reduction** in binge eating risk |
| Growth in Intuitive Eating score +1 point (over time) | **71% reduction** in binge eating risk |

*Figure G4 — Protective Effect of Intuitive Eating on Binge Eating Risk. Source: Linardon (2020), meta-analysis across 8-year longitudinal studies. A one-point increase in Intuitive Eating score is associated with a 71–74% reduction in binge eating risk — providing the empirical foundation for the "awareness-first" design direction. This finding justifies the REFLECTIVE Framework's emphasis on cultivating internal attunement over external data compliance.*

---

### G5 — Intuitive Eating Principles as Design Constraints

![[Pasted image 20260409123421.png|900]]

*Figure G5 — The ten Intuitive Eating principles (Tribole and Resch, 2020) mapped as design constraints. Each principle identifies a corresponding design implication for the REFLECTIVE Framework.*

*→ 【你需要做】确认此图片清晰可读。如为手写草图，建议重绘为两列表格（Principle | Design Implication）。*

---

---

## Appendix H — Trend Wall Signals

*This appendix corresponds to the required 'Signals' appendix (Appendix B in the IRP Report Template). Three signal cards were contributed to the RCA Trend Wall during the February–March 2026 workshops, all under the macro-trend cluster: **Technology-Mediated Preventive Health**.*

---

### Signal Card 1 — The OTC CGM Inflection Point
**Trend cluster:** Technology / Preventive Health
**Signal:** The June 2024 FDA OTC clearance of Abbott Lingo — the first continuous glucose monitor approved for non-diabetic consumer use — marks a paradigm shift. Previously confined to clinical settings, real-time metabolic tracking is now entering the mass consumer wellness market.
**Data:** Global OTC CGM market reached US$370.7M in 2024; non-diabetic users represent 41.46% of all CGM users; market projected to reach US$1.77B by 2034 (Precedence Research, 2025). The Zeevi et al. (2015) bioindividuality study (800 participants, 46,898 meals) provides the scientific justification: identical foods produce dramatically different glycaemic responses across individuals, invalidating generic dietary guidelines.
**Design implication:** The hardware for personalised post-meal feedback now exists. The urgent gap is the *human-centred design language* to prevent this technology from generating new forms of data anxiety and orthorexia before engineering-led paradigms dominate.
**Source:** Abbott Newsroom (2024); Precedence Research (2025); Zeevi et al. (2015).

---

### Signal Card 2 — Intuitive Eating and the Anti-Diet Movement
**Trend cluster:** Society / Health / Culture
**Signal:** Intuitive Eating — a clinical and cultural framework for restoring internal body attunement — is transitioning from specialist eating disorder treatment into mainstream wellness discourse. Its core principle (trust internal hunger/fullness signals over external dietary rules) directly challenges the dominant paradigm of calorie-counting and macro-tracking apps.
**Data:** High baseline Intuitive Eating scores correlate with a 74% reduction in binge eating risk over 8 years (Linardon, 2020). NHS eating disorder hospital admissions increased 8.5× from 2013/14 to 2020/21 (NHS England, 2023). 73% of MyFitnessPal users with eating disorders report the app contributed to their condition (Phelan et al., 2020).
**Design implication:** A culturally significant counter-movement exists and is growing. Dietary feedback design must not merely add Intuitive Eating as a feature — it must be structurally built on its principles. The REFLECTIVE Framework in this project operationalises this.
**Source:** Linardon (2020); Tribole and Resch (2020); NHS England (2023); Phelan et al. (2020).

---

### Signal Card 3 — Social Rituals as Non-Technological Feedback
**Trend cluster:** Human / Culture / Behaviour
**Signal:** Cross-cultural evidence demonstrates that effective dietary feedback already operates through social, ritual, and environmental channels — without technology. These counter-models challenge the assumption that closing the dietary feedback loop requires individual biometric monitoring.
**Examples:**
- *Japanese Hara Hachi Bu and Itadakimasu*: Pre-meal gratitude ritual creates an embodied transition of attention; cultural norm of eating to 80% fullness achieves non-punitive body attunement without technology (Rozin et al., 1999).
- *French paradoxe culinaire*: Pleasure-oriented, socially embedded, slow eating sustains dietary behaviour through experiential quality rather than nutritional surveillance (Fischler, 1988).
- *Krukow × COOP Denmark*: Meso-scale behavioural design in retail environments achieves measurable dietary behaviour change through environmental nudge architecture alone, bypassing individual biometric monitoring.
**Design implication:** The preferred future (Scenario 3) is culturally credible precisely because non-technological analogues already demonstrate its core mechanism. Design can learn from, not replace, these rituals.
**Source:** Rozin et al. (1999); Fischler (1988); Lupton (1996); Krukow (no date).

---

*End of IRP Proposal — Weijie Li · Design Futures · Royal College of Art · May 2026*
*Version: v13-Restructured | Main body: ~3,600 words (Sections 1–9) | Appendices: A–H*
