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
- **Semi-structured interviews (6–8 participants, 45–60 minutes each):** Interviews will explore participants' lived experience of dietary tracking: what prompted them to use it, how it made them feel, what worked and what failed, and how it affected their relationship with food. The semi-structured format allows flexibility while ensuring consistency across participants.
- **Autoethnographic diary study (4 weeks, self-conducted):** A structured self-observation practice logging eating events, emotional states, design observations (what feedback did I receive, or not receive, from this eating experience?), and sketches of design responses. The diary will incorporate a specific phenomenological practice drawn from mindfulness traditions: when eating, adopting an *observer perspective* — noticing and recording bodily sensations, emotional responses, and social contexts without reactive judgement. Rather than evaluating meals as "good" or "bad", the diary will ask: *what did I notice?* This observer stance is itself a prototype of the kind of embodied, non-punitive feedback this project seeks to design.
- **App audit and comparative analysis:** A systematic evaluation of 8 dietary feedback tools (MyFitnessPal, Noom, Levels Health, Signos, Nutrisense, FoodVisor, NHS Weight Loss Plan) assessing immediacy of feedback, emotional tenor, legibility for non-specialists, social dimension, and eating disorder risk indicators.

### 5c. Data Analysis Methods
Interview data will be analysed using _reflexive thematic analysis_ (Braun and Clarke, 2006), a method appropriate for identifying patterns of meaning across qualitative data without imposing predetermined categories. Themes will be developed inductively from the data, then reviewed against the theoretical framework (Fogg's B=MAP, intuitive eating principles) to develop design implications. Diary data will be analysed through _design-led synthesis_: converting observational notes and sketches directly into design provocations, using the 'what if' question as an analytical tool.

### 5d. Design and Futures Methods
- **Speculative Prototyping (Dunne and Raby, 2013):** Drawing on critical design methodology, a series of three to five speculative artefacts will be developed that propose radically different dietary feedback mechanisms: for example, an ambient object that changes texture in response to nutritional balance; a social ritual tool that makes eating well a shared, celebratory experience; or a wearable that provides physiological biofeedback from the gut. These are provocations — design fictions that defamiliarise current assumptions and make alternative futures imaginable.
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

---

*End of IRP Proposal — Weijie Li · Design Future · Royal College of Art · April 2026*
