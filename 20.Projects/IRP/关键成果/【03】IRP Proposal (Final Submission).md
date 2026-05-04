---
tags:
  - IRP
  - proposal
  - behavioural-design
  - food-futures
  - RCA-GID
date: 2026-05-04
version: v15-Polished-BriefAligned
word_count_mainbody: "~3000 words (Sections 1–9, excl. references)"
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
| **App. A** | Annotated Literature and Practice Review *(required)* |
| **App. B** | Signals / Trend Wall *(required)* |
| **App. C** | Ethics Checklist *(required)* |
| **App. D** | Research Protocols — Phases 0–5 *(supplementary)* |
| **App. E** | 2035 Scenario Narratives *(supplementary)* |
| **App. F** | The After Glow — Critical Design Specifications *(supplementary)* |
| **App. G** | Data Visualisations *(supplementary)* |

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

I am interested in the future of preventive health behaviour — specifically, the future of **dietary feedback design** for individuals striving to improve their nutrition. This is an urgent societal challenge because, unlike physical exercise or sleep, the benefits of good nutrition are almost entirely invisible on a human timescale. A week of rigorous dietary adherence generates no immediate physiological signal, no intuitive score, and no perceivable sense of progress. This phenomenon is not fundamentally a motivational deficit; rather, it represents a profound structural feedback problem. I term this the *phenomenological silence* of eating well.

This silence creates a critical intention-action gap. Human decision-making is heavily influenced by present bias (Kahneman, 2011), meaning individuals inevitably struggle to sustain behaviours that lack immediate, tangible rewards. The dominant digital interventions — MyFitnessPal, Noom, and analogous manual-logging tools — demand significant cognitive effort while delivering only delayed, emotionally detached numerical summaries. The consequence is catastrophic: health and fitness apps retain only 3–4% of users by Day 30 (Business of Apps, 2024). This failure is not merely inconvenient; it is causing demonstrable clinical harm. Punitive tracking paradigms have been shown to exacerbate eating disorder risk: 73% of MyFitnessPal users with an eating disorder report that the app contributed to their condition (Phelan et al., 2020), and NHS hospital admissions for eating disorders rose 8.5-fold between 2013/14 and 2020/21 (NHS England, 2023). Wallace et al. (2025) identify the mechanism as the *reification of data* — the progressive replacement of direct bodily experience with quantified metrics — a phenomenon that current tool design systematically reproduces.

A design futures approach is essential here, and the timing is critical. The June 2024 FDA over-the-counter clearance of the Abbott Lingo continuous glucose monitor represents not an arrival but an inflection point: real-time metabolic tracking is crossing from clinical tool to consumer product, while the human-centred design language to accompany it does not yet exist. If non-punitive interaction principles are not established in this window, engineering-led paradigms will calcify into the permanent vocabulary of the field — a phenomenon design historians term *paradigm lock-in* (Gaver, 2002). There is a three-to-five-year opportunity to define these principles before they become irreversible.

This project investigates that design gap. It asks how eating well might be made as legible and emotionally resonant as completing a run — and adds a critical ethical constraint: any feedback system must preserve food joy, prevent disordered eating, and actively support *Food Freedom*, the right to make informed choices about eating without guilt or compulsion (Tribole and Resch, 2020). By combining speculative and critical design tools (Dunne and Raby, 2013) with empirical primary research, this project prototypes radically different futures for dietary feedback and argues that the time to define them is now.

---

<div style="page-break-before: always;"></div>

# 2. Background: Literature, Practice, Signals and Trends

## 2a. Research Questions

1. Why does dietary behaviour produce so little immediate, legible feedback compared to exercise and sleep, and what are the design, behavioural, and physiological reasons for this gap?
2. What existing tools and approaches have attempted to address dietary feedback, and why do they fail to achieve sustained engagement?
3. What is the relationship between dietary feedback design and the risk of disordered eating, and how can feedback systems be designed to support Food Freedom?
4. What signals and speculative possibilities exist for alternative dietary feedback paradigms that are immediate, embodied, and emotionally resonant without being punitive?

## 2b. Research Process

Research was conducted across three phases: (1) a systematic literature review drawing on Google Scholar, PubMed, and design databases, producing a minimum of 20 literature sources and 20 practice projects; (2) a critical practice review auditing existing apps, wearables, and speculative design installations; and (3) signals-and-trends mapping using the four-lens framework (Human / Society / Technology / Nature) and the Futures Triangle methodology. The resulting annotated review is in **Appendix A**; signals contributed to the RCA trend wall are in **Appendix B**.

## 2c. Research Summary

The current systemic failure of dietary tracking tools must be understood at the intersection of behavioural science and human-computer interaction. Fogg's (2009) Behaviour Model establishes that target behaviours occur only when Motivation, Ability, and Prompt converge simultaneously. Applied to dietary apps, the model reveals a structural collapse: manual food logging imposes prohibitive cognitive friction (low Ability), while delayed numerical totals function as exceptionally weak Prompts. Motivation consequently degrades. This is further illuminated by Norman's (2013) concept of the *gulf of evaluation*: because the metabolic benefits of nutrition manifest at a cellular timescale over weeks, users cannot perceive the effects of eating well. The phenomenological silence of digestion traps users in hyperbolic discounting (Kahneman, 2011), where fast-thinking System 1 inevitably prioritises immediate sensory reward over invisible long-term health.

Critically, the market's attempt to bridge this gulf has caused demonstrable clinical harm. Wallace et al. (2025) identify *reification of data* — the progressive displacement of direct bodily experience by quantified metrics — as the primary mechanism by which tracking apps induce obsessive monitoring and eating disorder risk. This is evidenced by platforms such as Noom and consumer-facing Continuous Glucose Monitors (CGMs) like Levels Health, which deploy evaluative dashboards that judge rather than reflect, actively exacerbating orthorexic tendencies. Roth et al. (2024) confirm the association through meta-analysis: intensive dietary self-monitoring is significantly correlated with elevated eating disorder symptoms across non-clinical populations.

Conversely, Tribole and Resch's (2020) framework of Intuitive Eating provides both an ethical constraint and a design counter-model: it cultivates interoceptive attunement through ten clinically validated principles, rejecting external dietary rules in favour of internal hunger and satiety cues. Linardon's (2020) meta-analysis quantifies its protective effect — a one-point increase in Intuitive Eating score correlates with a 74% reduction in binge-eating risk over eight years — establishing awareness-first design as empirically superior to metric-based tracking for high-risk users.

The assumption that standardised nutritional rules are broadly effective has been dismantled by Zeevi et al. (2015), whose landmark study of 800 participants across 46,898 meals demonstrated that identical foods provoke dramatically different postprandial glycaemic responses across individuals. This physiological reality of bioindividuality invalidates population-average dietary guidance and establishes the scientific necessity for personalised, post-meal, sensation-first feedback. Contextualised against the success of Strava — which amplifies pre-existing somatic signals (exhaustion, endorphins) into socially resonant data — the dietary tracking space appears structurally underdeveloped: it lacks the bodily signal layer that exercise design can simply amplify. The design challenge is therefore not to make a better calorie counter but to construct the missing feedback layer using sensation, not surveillance.

Cross-cultural counter-models further validate this direction. The Japanese practice of *Hara Hachi Bu* and *Itadakimasu* achieves embodied non-punitive food awareness through social ritual without any technology (Rozin et al., 1999). The French *paradoxe culinaire* demonstrates that a pleasure-oriented, slow, communal eating culture sustains healthier dietary behaviour without individual biometric monitoring (Fischler, 1988). Dunne and Raby's (2001) *Placebo Project* — a foundational speculative design installation — confirms that deliberately ambiguous, physical provocations successfully challenge blind technological authority. These precedents establish that the preferred future for dietary feedback is culturally credible, not utopian.

## 2d. Conclusion

Three critical insights emerge. First, the dietary feedback gap is an architectural design failure — not a user motivation deficit — arising from the phenomenological silence of digestion. Second, existing punitive tracking paradigms cause measurable psychological harm by reifying data and overriding internal bodily cues. Third, cross-cultural and clinical evidence demonstrates that awareness-first, embodied feedback can sustain dietary behaviour change more safely and effectively than metric-based surveillance.

Three primary trends are shaping the next decade: (1) the Medicine 2.0 → 3.0 transition is accelerating consumer adoption of non-invasive metabolic sensors, creating an urgent design window; (2) the Intuitive Eating movement is mainstreaming interoceptive literacy as a protective framework against diet culture; (3) ambient socio-cultural technologies — shape-changing tableware, environmental nudge architectures, auditory-gustatory interfaces — demonstrate that dietary monitoring does not require individual digital screens.

The critical gap: despite rapid sensor miniaturisation and OTC CGM market growth, no established human-centred design vocabulary exists for non-punitive, embodied metabolic feedback. This void will be filled by engineering-led paradigms unless design futurists intervene now.

---

<div style="page-break-before: always;"></div>

# 3. Problem Framing

The central social challenge this project addresses is the persistent *Intention-Action Gap* in dietary behaviour: the documented failure to translate genuine intentions to eat better into sustained change. This gap exists not because individuals lack information or motivation, but because eating well generates no immediate, perceivable reinforcement. Without feedback, behaviour cannot be validated, iterated, or sustained. Current digital tools not only fail to bridge this gap — they actively compound it through punitive tracking paradigms that trigger the reification of data (Wallace et al., 2025) and demonstrable eating disorder risk (Roth et al., 2024). This is not a niche usability problem: it is a public health issue affecting populations worldwide.

![[01 — Futures Triangle.png|820]]
*Figure 1 — Futures Triangle: mapping the pull of Food Freedom futures, the push of OTC CGM market expansion, and the historical weight of diet-culture paradigms.*

This project operates at the intersection of four system-level perspectives, visualised in the Futures Triangle above. At the **Human** level, it addresses cognitive biases (hyperbolic discounting, present bias), interoception, and the emotional lived experience of eating. At the **Technology** level, it critically examines biometric sensing infrastructure, health-tracking architectures, and CGM interaction paradigms. The **Societal** context encompasses diet culture, eating disorder prevalence, and the anti-diet movement. The **Nature** system grounds the project in the biological reality of gut microbiome, circadian metabolism, and the physiology of satiety.

A critical design insight emerging from this systems view is the conflation of two distinct user cohorts in current tools. For the **general population**, the primary failure is tracking friction — manual logging destroys Ability in Fogg's B=MAP model (2009). For **users at eating disorder risk**, the failure is not low engagement but active harm: intensive self-monitoring is strongly correlated with elevated ED symptoms (Roth et al., 2024). Effective design must simultaneously address tracking fatigue for general users and eliminate harm pathways for vulnerable users — a requirement that rules out any punitive metric.

In terms of **temporal scale**, this project projects to a medium-to-long horizon of 10–15 years, working toward a 2035 speculative future. This timeframe is appropriate because non-invasive metabolic sensing is currently approaching consumer readiness, the cultural shift from diet-culture to Food Freedom is actively unfolding, and backcasting from 2035 identifies the precise design principles that must be established now before paradigm lock-in occurs (Martell, 2026). The **contextual scale** is resolutely **micro**: the individual's daily experience of eating, at the level of a single meal and its immediate aftermath. This micro-focus is the site where the phenomenological silence is most acutely felt and where design intervention can have the most direct effect on interoceptive literacy.

---

<div style="page-break-before: always;"></div>

# 4. Design Futures Approach

This project is situated at the intersection of *Behavioural Design* and *Speculative / Critical Design*, drawing on Futures Studies for temporal orientation and on Food Studies and Health Psychology for empirical grounding. The Disciplinary Map below illustrates this positioning.

![[Disciplinary_Map.svg|694]]
*Figure 2 — Disciplinary Map: positioning the project across behaviour design, speculative design, and futures studies.*

As a design futurist on this project, my role is threefold: (1) **Cartographer of the Present** — mapping why the current dietary feedback landscape looks as it does, what assumptions it encodes, and whose interests it serves; (2) **Critical Provocateur** — designing speculative artefacts that expose the contradictions and absences of current food technology; (3) **Preferential Futurist** — using backcasting methodology to identify near-term design principles from a preferred 2035 future (Martell, 2026). The primary benefit of deploying design here is its capacity to translate abstract philosophical goals — such as *Food Freedom* — into tangible, evaluable interface constraints. A significant limitation is that speculative artefacts risk remaining intellectual exercises unless grounded in commercially and culturally plausible near-futures; this project deliberately anchors its speculations in demonstrated market trends and clinical evidence.

Four design approaches structure the work. **Behavioural Architecture** (Fogg, 2009; Thaler and Sunstein, 2008) shapes feedback environments that lower the friction of post-meal reflection without coercion. **Compassion-Based Design** reframes the designer's orientation: it is not the user who must become more disciplined, but the design that must intervene with care — treating eating as a site of joy rather than surveillance. **Embodiment and Empowerment** requires that technology amplify internal bodily authority rather than overriding it with external optimisation directives. The **REFLECTIVE Framework** operationalises these principles into three evaluable design criteria: feedback must be *Descriptive, not Evaluative* (no scoring, no colour-coded pass/fail); *Relative, not Absolute* (anchored to the individual's own metabolic baseline — justified by Zeevi et al., 2015); and *Closed-Loop, not Open-Ended* (a defined 60-second post-meal closure event, not perpetual open monitoring).

The futures approach is primarily **Speculative and Critical Design** (Dunne and Raby, 2013), chosen because this space requires paradigm interrogation — not incremental usability improvement — to fundamentally reframe the relationship between technology and eating. This is combined with the **Intelligence–Perspective–Logic–Foresight (IPLF) backcasting framework** (Martell, 2026): from a preferred 2035 future in which technology amplifies natural satiety signals before rendering itself obsolete, the project identifies the non-punitive design rules that must be established today. Three 2035 scenarios — (1) *Food as Code* (high-tech biometric, probable but undesirable); (2) *The Disappearing Interface* (ambient social, desirable but contextually limited); (3) *The Tool That Disappears* (intuitive technology, preferred) — provide the research stimuli for participant critique in Phases 4 and 5. Full day-in-the-life narratives and failure modes for each scenario are in **Appendix E**.

---

<div style="page-break-before: always;"></div>

# 5. Methodology

The methodology employs a dual-track framework: **investigative research** (empirically understanding the feedback gap and its failures) and **generative design research** (developing and testing alternative feedback paradigms through speculative prototyping). This parallel structure is necessary because the failure of dietary feedback is simultaneously a behavioural, experiential, and design question.

![[Dual_Track_Methodology.svg|442]]
*Figure 3 — Dual-Track Methodology: investigative and generative tracks running in parallel.*

## 5a. Participants and Data

Primary qualitative data will be sourced from **6–8 adults aged 22–45** with prior dietary tracking experience. Current clinical eating disorder diagnosis is an exclusion criterion, to safeguard participant wellbeing. This sample size aligns with Braun and Clarke's (2006) guidance on thematic saturation in purposive qualitative research. A minimum of two participants will be recruited from non-Western cultural backgrounds, addressing Agapie's (2024) finding that 61.1% of HCI behaviour change studies exclusively use WEIRD (Western, Educated, Industrialised, Rich, Democratic) samples — a structural bias that would undermine this project's cross-cultural counter-models. Secondary data encompasses a systematic literature review and heuristic audit of eight dietary tracking applications against REFLECTIVE Framework criteria.

## 5b. Research Phases

Seven primary methods are deployed across five phases (full protocols in **Appendix D**):

| Phase | Key Method(s) | Timing | Primary Output |
|-------|--------------|--------|----------------|
| 0 | Phenomenological peer conversations | May–June 2026 | Interview protocol refinement |
| 1 | Semi-structured interviews + Commensal Contextual Inquiry; Photo Elicitation task assigned | June 2026 | In-situ observation of feedback gap; photo archive initiated |
| 2 | Mindful Construal Diary (4 weeks); Ecological Momentary Assessment (3-day peer sample) | June–July 2026 | Somatic design prompts; cross-participant gap validation |
| 3 | Sensitizing Probe Kit dispatch; app audit | July 2026 | Folk theories of biometric anxiety; REFLECTIVE failure-mode map |
| 4 | Body Mapping warm-up → After Glow demo → Anti-Heroes Role-Play | July 2026 | Somatic vocabulary; clay prototypes; ethical critique data |
| 5 | Participatory critique (Photo Elicitation as stimulus) | July–Aug 2026 | Legibility and affect responses; design iteration brief |

The seven methods form a deliberate arc — *Prime → Observe → Capture → Reflect → Attune → Build → Critique* — ensuring that by Phase 4, each participant has experienced the feedback gap in their own body and can evaluate the speculative artefact from a position of lived authority. The primary artefact under investigation is **The After Glow** — a handcrafted ceramic disc that translates post-meal metabolic data into soft amber light and modulating warmth for 60 seconds, with no screen, no score, no number. Framed as a mundane 2035 consumer product (Near Future Laboratory, 2014), it functions as a critical probe that tests whether embodied, non-punitive sensation can substitute for digital surveillance. Three provocations ensure it remains a research instrument rather than an affirmative product: a Surveillance Blackout (severs Wi-Fi during the 60-second reflection window), an Intentional Placebo Error (one in ten activations produces a confusing response, probing reliance on the machine over bodily authority), and Programmed Physical Decay (unfired clay that cracks under rushed-meal conditions, rejecting frictionless optimisation). Full specifications are in **Appendix F**.

## 5c. Data Analysis and Design Methods

Interview and diary data will be analysed using **reflexive thematic analysis** (Braun and Clarke, 2006), coding inductively for emotional tenor, user agency, and tracking friction before cross-referencing against the Fogg B=MAP and Intuitive Eating theoretical frameworks. Diary and photo elicitation data will undergo **design-led synthesis** — converting somatic observations directly into speculative design provocations via the 'What if?' question — to drive the generative track. Alongside primary research, **scenario building** (IPLF framework, Martell, 2026) produces the three 2035 stimuli used in Phase 4, while **diegetic prototyping** (Near Future Laboratory, 2014) makes the speculative artefact immediately legible to participants without requiring futures literacy. Ethics compliance — including EAT-26 ED pre-screening, encrypted data storage, and voluntary withdrawal rights — is detailed in **Appendix C**.

---

<div style="page-break-before: always;"></div>

# 6. Critique Documentation

*→ [Insert exhibition photographs from `06_展览存档/`]*

The project was presented at the April 2026 group critique exhibition. Displayed materials included a physical mock-up of The After Glow, five conversation-prompt postcards (covering the phenomenological silence, the three 2035 scenarios, and the REFLECTIVE Framework), and an A4 draft proposal. Peer feedback forms and exhibition photographs are archived in the project records.

The April 8 group tutorial identified three critical weaknesses: (1) insufficient macro-societal context situating the feedback gap within public health and market failure; (2) conflation of general users with those at eating disorder risk; (3) absence of tangible speculative outputs grounding the theoretical claims. Tutors called for a stronger Compassion-Based Design framing, explicit Embodiment and Empowerment dimensions, and rigorous cross-cultural engagement.

This feedback fundamentally restructured the project. The philosophical core shifted from a conventional health-monitoring model to an **awareness-first** paradigm centred on interoceptive literacy and Food Freedom. The REFLECTIVE Framework was formalised to operationalise "reflect, not judge" into three evaluable design criteria. The two-user-cohort distinction was introduced to address the ethical conflation. The After Glow was materialised from concept to physical prototype. A design futurist's ecological caveat was added to the 2035 scenarios, ensuring the preferred future is not read as a luxury biohacking product detached from planetary realities. The April 14 exhibition confirmed the revised direction, with peers responding most strongly to the Scenario 3 narrative and the Intentional Placebo Error provocation.

---

<div style="page-break-before: always;"></div>

# 7. Project Outputs, Stakeholders and Impacts

By the end of Term 3, the project will deliver: (1) the **REFLECTIVE Framework** — a licensable, heuristic UX evaluation rubric for auditing dietary feedback tools against non-punitive criteria; (2) **three 2035 speculative scenarios** using the IPLF framework (Martell, 2026) to illustrate diverging trajectories for consumer biometrics; (3) **three to five speculative artefacts**, principally The After Glow prototype, designed to provoke participant critique and test whether embodied, sensation-first feedback can build interoceptive literacy without surveillance.

Key stakeholders include health-tech UX designers, preventive health clinicians, eating disorder specialists (as ethical gatekeepers), CGM manufacturers navigating human-centred design, and public health researchers. Each group has competing interests — clinical rigour versus market scale, data transparency versus food freedom — that the REFLECTIVE Framework is designed to navigate explicitly.

The intended impact operates across three timeframes. Immediately: narrative shift within health-tech design communities, challenging the assumption that more data produces better outcomes. Medium-term: the REFLECTIVE Framework as a practical audit tool for practitioners and commissioners of new dietary health products. Long-term: the normalisation of Food Freedom as a design standard in the preventive health sector — as fundamental as usability or accessibility.

---

# 8. Personal Objectives

Through this IRP, I aim to develop a rigorous design practice at the intersection of Behavioural Design, Speculative Futures, and Ethical Health Innovation. My primary learning objective is to master translating abstract ethical constraints — safeguarding Food Freedom, mitigating eating disorder risk — into actionable, evaluable design heuristics. I wish to develop expertise in qualitative research methods that centre lived somatic experience, and in speculative prototyping that provokes genuine participant reflection rather than designed-for approval. Long term, I hope this project positions me within the preventive health-tech sector to design technologies that function as empathetic stewards — amplifying internal bodily intelligence rather than replacing it with external optimisation.

---

# 9. Project Plan

A phased timeline from May 2026 to August 2026 — covering participant recruitment, empirical research phases, speculative prototyping, and IRP Realisation report submission — is detailed in the Project Plan chart below.

![[Project_Plan.svg|697]]

*Figure 4 — Project Plan: phased timeline to IRP Realisation submission (August 2026).*

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

Levels Health (2019) *Levels: Metabolic Fitness Program* [App]. Available at: https://www.levelshealth.com (Accessed: 1 May 2026).

Noom (2008) *Noom: Health & Weight Loss* [App]. Available at: https://www.noom.com (Accessed: 1 May 2026).

Strava (2009) *Strava: Run, Bike, Hike* [App]. Available at: https://www.strava.com (Accessed: 1 May 2026).

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

## Appendix A — Annotated Literature and Practice Review (Full)

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

---

### Additional Literature Annotations

---

**Fogg, B.J. (2009) 'A Behavior Model for Persuasive Design'**

- **What:** Fogg's B=MAP model proposes that behaviour (B) occurs when Motivation (M), Ability (A), and Prompt (P) converge simultaneously. Developed at Stanford's Persuasive Technology Lab, the model is widely used in behaviour change technology design.
- **So what:** It provides the clearest diagnostic tool for explaining why dietary tracking apps fail: manual calorie logging destroys Ability (too much friction), and delayed nutritional benefits eliminate effective Prompts. The model clarifies that the failure is structural, not motivational — the user is not lazy, the design is broken.
- **Now what:** Directly shapes the project's requirement for post-meal feedback that is frictionless (restoring Ability) and immediate (functioning as a Prompt). The 60-second closure ritual in The After Glow is a Fogg-compliant design response.

---

**Kahneman, D. (2011) *Thinking, Fast and Slow***

- **What:** Kahneman's dual-process theory distinguishes System 1 (fast, intuitive, emotional) from System 2 (slow, deliberate, analytical). The book synthesises decades of behavioural economics research on cognitive biases including hyperbolic discounting and present bias.
- **So what:** Hyperbolic discounting explains the central problem: System 1 cannot perceive nutritional benefits playing out over weeks, so it defaults to immediate sensory reward (taste, convenience). Current dietary apps address only System 2 — they require deliberate analytical effort — while the actual decision to eat happens in System 1. This is a design mismatch, not a willpower deficit.
- **Now what:** The project must design feedback that speaks to System 1 — immediate, embodied, emotionally resonant — rather than adding more analytical dashboards. The After Glow's warmth and light are System 1 signals; its lack of numbers refuses to engage System 2's tendency to reify data.

---

**Zeevi, D. et al. (2015) 'Personalized Nutrition by Prediction of Glycemic Responses', *Cell***

- **What:** A landmark study monitoring 800 participants over one week, recording 46,898 meals alongside continuous glucose measurements, gut microbiome profiles, and lifestyle data. Found that identical foods provoke dramatically different postprandial glycaemic responses across individuals.
- **So what:** Scientifically invalidates generic, population-based dietary guidelines — the foundation of tools like MyFitnessPal's calorie database. Proves that personalised, post-meal feedback is not a design preference but a biological necessity: there is no universal "healthy meal," only individual metabolic responses.
- **Now what:** Provides the empirical justification for the project's REFLECTIVE Framework principle of *Relative, not Absolute* feedback. Any feedback anchored to population averages is not just less effective — it is factually wrong for most individuals.

---

**Tribole, E. and Resch, E. (2020) *Intuitive Eating: A Revolutionary Anti-Diet Approach*, 4th edn.**

- **What:** The definitive text on Intuitive Eating, a clinical framework developed by registered dietitians Evelyn Tribole and Elyse Resch. Articulates ten principles for restoring internal hunger and satiety attunement after diet culture has eroded trust in the body's signals.
- **So what:** Provides the project's ethical backbone. Intuitive Eating reframes the design problem: the goal is not to give people better data, but to help them trust what their bodies are already communicating. Food Freedom — the right to make choices without guilt or compulsion — is the preferable future this project works toward.
- **Now what:** Each of the ten principles functions as a concrete design constraint for the REFLECTIVE Framework (see Appendix G5). The principle "Feel Your Fullness" directly motivates The After Glow's haptic prompt; "Reject the Diet Mentality" rules out any scoring or calorie-counting mechanism.

---

**Roth, E. et al. (2024) 'Weight-Related Self-Monitoring and Eating Disorder Symptoms: A Systematic Review and Meta-Analysis', *International Journal of Eating Disorders***

- **What:** A systematic review and meta-analysis examining 34 studies on the relationship between digital dietary self-monitoring (calorie counting, food logging, weight tracking) and eating disorder symptoms across non-clinical populations.
- **So what:** Establishes significant statistical associations between intensive self-monitoring and elevated eating disorder risk — particularly for restriction, bingeing, and body dissatisfaction. This is the strongest empirical evidence that punitive tracking design causes measurable clinical harm, not merely user frustration.
- **Now what:** Creates the ethical imperative for this project: dietary feedback design is not a neutral UX problem. Any new tool that borrows the paradigm of intensive logging is complicit in this harm. The project must demonstrate that a non-punitive alternative is possible and measurably safer.

---

**Rozin, P. et al. (1999) 'Attitudes to Food and the Role of Food in Life in the U.S.A., Japan, Flemish Belgium and France', *Appetite***

- **What:** A cross-national survey study comparing food attitudes, eating practices, and food-related anxiety across four countries. Finds that Americans associate food primarily with health and danger; French associate food primarily with pleasure; Japanese with community and ritual.
- **So what:** Demonstrates that the problem this project addresses — food anxiety, punitive tracking, the medicalisation of eating — is culturally specific, rooted in Anglo-American ideology rather than universal human experience. The French and Japanese counter-models are not exotic exceptions; they are evidence that a non-anxious relationship with food is culturally achievable at scale.
- **Now what:** Grounds the project's cross-cultural counter-models (Hara Hachi Bu, the French paradoxe culinaire) in empirical cross-national data, preventing them from being dismissed as anecdote. Also deepens the WEIRD critique: research conducted only in Anglo-American contexts will systematically reproduce anxiety-driven design.

---

**Linardon, J. (2020) 'Positive Body Image, Intuitive Eating, and Dietary Restriction: A Systematic Review and Meta-Analysis', *European Eating Disorders Review***

- **What:** A meta-analysis of 57 studies examining the relationship between Intuitive Eating scores and eating disorder risk indicators across longitudinal data spanning up to eight years.
- **So what:** A one-point increase in baseline Intuitive Eating score correlates with a 74% reduction in binge eating risk, and a one-point growth in IE score over time correlates with a 71% reduction. This is the strongest available evidence that cultivating internal body attunement — the goal of this project — is clinically effective and measurable.
- **Now what:** Provides the quantitative foundation for Appendix G4 and underpins the project's claim that "awareness-first" design is not merely ethically preferable but empirically superior to metric-based tracking for the ED-risk cohort.

---

**Dunne, A. and Raby, F. (2013) *Speculative Everything: Design, Fiction, and Social Dreaming***

- **What:** The foundational text of speculative and critical design as a discipline. Dunne and Raby distinguish between affirmative design (solving problems within existing paradigms) and critical design (questioning the assumptions that create problems). Proposes design as a tool for imagining and interrogating alternative presents and futures.
- **So what:** Provides the methodological licence for this project's speculative artefacts. Without this framework, The After Glow could be dismissed as an impractical product concept. With it, it is positioned as a critical probe: an object designed to provoke questions rather than provide answers, to destabilise assumptions rather than reinforce them.
- **Now what:** The three critical provocations in The After Glow (Surveillance Blackout, Intentional Placebo Error, Programmed Physical Decay) are directly derived from Dunne and Raby's concept of "productively useless" objects. The TBD Catalog framing extends their approach by presenting the speculative as mundane.

---

### Additional Practice Annotations

---

**Strava (2009–present) [Digital platform / sports tracking]**

- **What:** A global fitness tracking platform used by over 100 million athletes. Transforms physical exercise data — GPS routes, pace, elevation — into social performance: segments, kudos, personal records, leaderboards, and community challenges.
- **So what:** The most successful example of closing a physiological feedback loop through design. Strava works because exercise already produces immediate somatic signals (exhaustion, endorphins); design amplifies and socialises these into ongoing motivation. This makes it the benchmark contrast for dietary feedback: what would it take to do for eating what Strava did for running?
- **Now what:** Functions as the aspirational design precedent throughout Section 1 and as a structural contrast with MyFitnessPal. Any dietary feedback intervention must explain how it creates equivalent immediacy, emotional resonance, and social ritual — or justify why those qualities are not appropriate for food.

---

**Levels Health (2019–present) [CGM-integrated wellness app]**

- **What:** A US-based consumer health company offering CGM integration with metabolic coaching. Provides real-time glucose graphs, meal scoring, and AI-generated dietary recommendations based on individual glycaemic responses. Primarily targets biohackers and performance-focused users.
- **So what:** The most sophisticated current attempt to close the dietary feedback loop using CGM data. Its failure as a mainstream product — high cost, subscription model, primarily WEIRD user base — demonstrates that technical capability is insufficient without human-centred design. Its evaluative scoring mechanism and data-dense dashboard represent the precise paradigm this project argues against.
- **Now what:** Serves as the primary contemporary practice foil in the App Audit (Phase 3). Levels demonstrates both the promise and the danger of CGM-based feedback: the data is genuinely useful, but the design language actively promotes the reification of data and excludes users at ED risk.

---

**Near Future Laboratory (2014) *TBD Catalog* [Design fiction / speculative practice]**

- **What:** A mail-order product catalog set in the near future, presenting speculative objects as ordinary consumer goods with product descriptions, prices, and SKUs. Created by the design fiction studio Near Future Laboratory as a method for making speculative futures tangible and discussable.
- **So what:** Demonstrates that speculative design need not rely on gallery installations or academic contexts to provoke reflection. By placing radical futures in mundane formats (a catalog), it makes the strange feel familiar — and thus testable. Participants can engage with speculative objects as if they might actually buy them, generating qualitative data that pure conceptual description cannot.
- **Now what:** The After Glow will be framed using this approach: presented as a 2035 consumer product with copy, pricing, and a fictional postal address. This framing is the primary method for making the artefact researchable in Phase 5 participatory critique sessions.

---

**Abbott Lingo OTC CGM (2024) [Consumer health technology]**

- **What:** The first continuous glucose monitor to receive FDA over-the-counter clearance for non-diabetic use, launched by Abbott Laboratories in June 2024. Worn as a small patch on the upper arm, it provides real-time glucose readings via a smartphone app, requiring no prescription or clinical supervision.
- **So what:** Marks the definitive inflection point for this project: the moment when continuous metabolic tracking crossed from clinical tool to consumer product. The Lingo launch demonstrates that the technology infrastructure for real-time dietary feedback now exists at consumer scale — but the design language, ethics framework, and harm-prevention protocols do not yet accompany it.
- **Now what:** Establishes the urgency of the project's 2026 intervention window. If design futurists do not establish a non-punitive design language for OTC CGM products before the market matures, engineering-led paradigms (like the "food as code" Scenario 1) will become the default.

---

**Noom (2008–present) [Behaviour change / dietary app]**

- **What:** A weight management app combining calorie tracking with CBT-based coaching and a colour-coded food classification system (green / yellow / red). Claims to use psychology rather than dieting, but its underlying mechanism is calorie restriction framed in motivational language.
- **So what:** Represents the "compassion-washing" failure mode: a tool that uses the language of psychological wellbeing while maintaining the structural logic of punitive tracking. Its colour-coded food morality system directly contradicts Intuitive Eating Principle 3 ("Make Peace with Food") and creates food guilt through a nominally supportive interface. It reveals that rebranding punitive design as "mindful" does not make it safe.
- **Now what:** Serves as the cautionary practice case in the project's critique of "compassion-washing" — the risk that The After Glow itself faces if its critical design provocations are stripped away and it becomes a commercially palatable wellness product. The project must maintain the distinction between genuinely non-evaluative design and re-labelled surveillance.

---

*→ 【你需要做】在此处插入文献推演链图（截图自 `03_研究素材/IRP 文献推演链 - 知识溯源图.md` 或 Canvas 文件）。*

---

## Appendix E — 2035 Scenario Narratives: Day in the Life *(Supplementary)*

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

## Appendix D — Research Protocols (Phases 0–5) *(Supplementary)*

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

### D2 — Phase 4: Speculative Prototyping Workshop (60 min, groups of 2–4) — Updated Structure

**Materials needed:** DAS air-dry modelling clay, toothpicks, A0 paper sheets, sticky notes in 3 colours, coloured markers, scissors, printed 2035 scenario cards, A3 body outline sheets (pre-printed), Role Cards × 4 sets (see D5 for card text), The After Glow low-fidelity prototype (ceramic disc + amber LED or small heating pad).

---

**BLOCK 1 — Body Mapping Warm-up [M6] (15 min)**

*Purpose: Establish shared somatic vocabulary before introducing The After Glow.*

- Distribute A3 body outline sheets, clay, and coloured markers. Ask participants to sit quietly for 2 minutes: *"Place your hand on your stomach. Notice what you can feel there right now — not what you think you should feel, just what is actually present."*
- Task (10 min): *"Using only shapes, colours, and textures — no words, no numbers — map your current bodily sensations onto this outline. Where does your energy live? Where do you feel heaviness or lightness? Where is there silence?"*
- No verbal explanation of results at this stage — keep the experience non-verbal and subjective.
- Facilitator takes photos of all body maps. These become comparative data for whether the workshop changed participants' somatic self-awareness.

---

**BLOCK 2 — Scenario + The After Glow Demo + Clay Prototyping (25 min)**

*Purpose: Introduce the speculative context, present the artefact, and generate counter-proposals.*

- **Scenario reading (5 min):** Read one 2035 scenario aloud (Scenario 3 — Intuitive Technology recommended). Ask: *"Does any part of this future feel exciting? Disturbing? Familiar?"*
- **The After Glow demo (5 min):** Place the prototype on the table. Invite participants to hold it, feel its warmth, observe the amber light. Do not explain its mechanism — ask: *"Without me describing it, what do you think this object is communicating about your body after eating?"*
- **Clay prototyping (15 min):** Each group builds one alternative speculative dietary feedback object — not screen-based, not numbers-based. Instruction: *"It should communicate something about your body after eating in this 2035 world. What does it look like, feel like, sound like?"* Place completed mock-ups on A0 paper and draw the context of use around them.

---

**BLOCK 3 — Anti-Heroes Ethical Role-Play [M7] (20 min)**

*Purpose: Generate rigorous ethical critique of The After Glow through structured adversarial personas.*

- Place The After Glow prototype back at the centre of the table.
- Each participant draws one Role Card (see D5 for full card text):
  - **The Big Food Data Broker:** Wants more extractable metrics; frustrated by the device's data blackout; plans to reverse-engineer the signal.
  - **The Punitive Diet Coach:** Wants the disc to vibrate sharply when the user eats "unhealthily"; sees the warm glow as rewarding bad behaviour.
  - **The Intuitive Eating Advocate:** Celebrates the absence of numbers; questions whether any technology should mediate the body-food relationship at all.
  - **The Anxious Biohacker:** Needs real-time glycaemic data; finds the 60-second closure inadequate; wants continuous monitoring layered on top.
- Task (12 min): Each person critiques The After Glow strictly from their persona's perspective. Facilitator notes: where do the personas agree? Where do they reveal genuine design risks?
- Debrief (8 min): Come out of role. Ask: *"Which persona's concern surprised you most? Which of these failure modes do you think is most likely in the real world?"*

**Output:** Body maps (photographed), clay prototypes (photographed), audio-recorded Anti-Heroes critique session, facilitator notes on points of agreement/disagreement across personas.

---

### D3 — Phase 2a: Mindful Construal Diary [M5] — 4-Week Protocol

*Upgraded from standard autoethnographic diary to design-prompt format. All numeric logging, calorie counting, and good/bad food labels are banned. Purpose: convert a tracking tool into a generative somatic probe.*

**Three core prompts (answered immediately after each main meal, 10–12 min):**
1. **Somatic scan:** *"What physical sensations are present in my stomach, chest, and jaw right now? (shapes, textures, temperatures — no numbers)"*
2. **Emotional temperature:** *"What is my emotional temperature — not mood, but the physical warmth or coldness of what I'm feeling? Where does it live in my body?"*
3. **Speculative transformation:** *"If my kitchen table could physically change right now to reflect my metabolic state, what would it do? Describe one object that appears, changes, or disappears."*

**Week 1 — Locating the Silence:** Eat completely normally. Focus entirely on *where* the feedback gap is. After each meal, sit for 60 seconds with no phone, no screen. Then answer the 3 prompts. Note: what signals does the body give vs. what is absent?

**Week 2 — Environment as Feedback:** Shift focus outward. Observe what your physical environment does (or fails to do) after eating — does the table clear itself? Does anyone speak? Does anything change? Log environmental friction and silence alongside somatic prompts. Photograph 3 different eating environments; note how the physical space shaped the post-meal moment.

**Week 3 — Observer Perspective + Prototype Test:** Practise strict non-judgement. Replace the word "bad" with "different" and "good" with "noticeable" in all entries. Introduce the cardboard After Glow prototype during this week — hold it for 60 seconds after each meal and log: what does the act of holding something change about the post-meal moment?

**Week 4 — Design Provocations:** Answer only the speculative transformation prompt (prompt 3). Synthesise earlier diary entries into one design provocation per day. Sketch at least one speculative feedback mechanism responding to a real moment from weeks 1–3.

**Format rule:** Entries should be written longhand (not typed) immediately post-meal. Maximum 200 words per entry. No editing — the unpolished first impression is the data.

---

### D4 — Phase 5: Participatory Critique Protocol (45 min, 1-on-1 or pairs, with original interviewees)

**What to bring:** Physical mock-up of The After Glow (cardboard or clay disc with amber LED or small heating pad), printed 2035 scenario cards, and the REFLECTIVE Framework one-pager.

**Introduction (5 min):** "I'm going to show you something I made based partly on what you told me. I want to know what you *actually* think — not what you think I want to hear."

**Legibility test (10 min):** Place The After Glow on the table without explanation. Ask: "Without me describing it, what do you think this object is trying to communicate to you about your meal?"

**Friction comparison (10 min):** "How would interacting with this physical object feel different from opening MyFitnessPal after eating? Which feels more like reflection? Which feels more like judgement?"

**Affective tone (10 min):** "Does this feedback feel like curiosity — or like scoring and shaming? Does it make you want to eat differently, or does it make you anxious?"

**Critical probe (10 min):** "This object has no memory. It doesn't remember what you ate yesterday. It never compares today to yesterday. Is that a feature or a fatal flaw? What does it feel like for a device to *forget* you?"

---

### D5 — Integrated 7-Method Research Design

*How the seven primary research methods connect, inform each other, and collectively address the research question.*

---

#### Visual Overview — Method Process Maps

The following infographics provide a visual summary of each primary method's process flow, generated from the project's source materials. Full protocols are in the sections below.

| Method                                   | Visual Guide                                 |
| ---------------------------------------- | -------------------------------------------- |
| **[M1] Sensitizing Probe Kit**           | ![[Workshop_M1_Probe_Kit.png\|380]]          |
| **[M2] Photo Elicitation**               | ![[Workshop_M2_Photo_Elicitation.png\|380]]  |
| **[M3] Contextual Inquiry**              | ![[Workshop_M3_Contextual_Inquiry.png\|380]] |
| **[M4] Ecological Momentary Assessment** | ![[Workshop_M4_EMA.png\|380]]                |
| **[M5] Mindful Construal Diary**         | ![[Workshop_M5_Mindful_Diary.png\|380]]      |
| **[M6] Body Mapping Warm-up**            | ![[Workshop_M6_Body_Mapping.png\|380]]       |
| **[M7] Anti-Heroes Ethical Role-Play**   | ![[Workshop_M7_Anti_Heroes.png\|380]]        |

---

#### The Research Arc: Prime → Observe → Capture → Reflect → Attune → Build → Critique

The seven methods are not parallel tracks — each method produces data that *feeds forward* into the next. The arc is designed so that by Phase 4, every participant has already experienced the problem in their own body and can critique the design artefact from a position of lived authority rather than abstract speculation.

```
[M1] Probe Kit ─────────────────────────────► Participants arrive primed and attuned
[M3] Contextual Inquiry ─────────────────► Real friction points feed Phase 4 scenarios
[M2] Photo Elicitation ─────────────────────────────────────────► Phase 5 stimulus
[M5] Mindful Diary ─────────────────────────────────────► Design provocations
[M4] EMA (peers) ──────────────────────────────► Validates gap as universal
                                    [M6] Body Map → [demo] → [M7] Anti-Heroes
                                         Phase 4 Workshop (60 min)
```

---

#### Method-by-Method Scheme

---

**[M1] Sensitizing Probe Kit — Phase 3a**
*Timing: Dispatched 2 weeks before Phase 4 workshop*

| Item | Task | Duration | Data generated |
|------|------|----------|----------------|
| Placebo Patch | Wear for 48 hours; after each meal touch it and write: "What do you wish this was telling you? What are you afraid it is extracting?" | 48h wear | Folk theories about biometric data anxiety; what users want vs. fear from body monitoring |
| Sensory Scanning Cards (3 cards) | Card A: draw where hunger lives in your body. Card B: draw where fullness lives. Card C: draw what "nothing" feels like after a meal. | ~10 min per card | Non-verbal body sensation maps; pre-workshop baseline for comparison with Body Mapping (M6) |

*What feeds forward:* Folk theory data shapes the Anti-Heroes Role Cards (M7). Sensation maps establish a pre-workshop body awareness baseline to compare against M6 post-workshop maps.

---

**[M2] Participant-Driven Photo Elicitation — Phase 1c → Phase 5**
*Timing: Assigned at end of Phase 1 interview; collected over 4 weeks; used in Phase 5*

**Assignment brief (given verbally + printed card):**
> "Once a day, for the next four weeks, take one photograph exactly 60 seconds after you finish eating a meal. Do not photograph the food. Photograph the aftermath: your empty plate, your hands, the table, the room. No staging. No filters."

**Phase 5 use:**
- Print 5–7 of each participant's photos (selected by researcher for variety of setting).
- Lay them on the table at the start of the Phase 5 critique.
- Opening prompt: *"Looking at these moments — not what you ate, but what happened after — what was your body telling you? Where was your attention?"*
- Secondary prompt: *"In which of these photos does The After Glow fit naturally? In which does it feel wrong?"*

*What feeds forward:* Photo-grounded critique in Phase 5 is richer and more specific than abstract recall. Participants critique The After Glow against documented real moments rather than hypothetical ones.

---

**[M3] Commensal Contextual Inquiry — Phase 1b**
*Timing: Immediately following Phase 1a interview (same day)*

**Setup:** Walk with the participant to a location where they eat regularly (their kitchen, their usual lunch spot, their work canteen). Observe one meal or meal-preparation act. Do not intervene. Take fieldnotes only — no audio recording during observation.

**Observation protocol (30 min):**
- T+0: Participant begins eating. Note: pace, posture, screen use, social context.
- T+mid: Note: any pauses, distraction events, plate-checking, hunger/fullness signals expressed (verbal or physical).
- T+end: Note: the precise moment the meal "ends" — what marks it? A notification? Standing up? The act of clearing plates? Or — nothing at all?
- T+5 post-meal: Brief verbal debrief. Ask: *"You just finished eating. What, if anything, just changed in your body?"*

**Key question for fieldnotes:** When and how does the phenomenological silence become visible as a behavioural pattern?

*What feeds forward:* The 2–3 most striking environmental friction points from all 6–8 observations become the Scenario Stimuli printed on cards for Phase 4, Block 2.

---

**[M4] Ecological Momentary Assessment — Phase 2b**
*Timing: 3 consecutive days, concurrent with or following Phase 2a diary*
*Target: 5–8 peers (separate from Phase 1 interview participants)*

**Recruitment:** Separate from core interview participants — peers recruited via personal network who have not seen the project framing. This preserves naivety of response.

**Deployment:**
- Day 0 (setup): Send participants a WhatsApp or SMS explaining the task. Confirm their main meal times.
- Days 1–3: Send one message at the pre-agreed time + 10 min:
  > *"Quick check-in: what feedback is your body giving you right now (right after eating)? Answer in 1–3 words or a short phrase. Honest is better than articulate."*
- Day 3 evening: Optional 5-minute voice note prompt: *"In the past 3 days, was there a moment when you finished eating and felt something clear from your body? Or a moment when there was nothing at all?"*

**Analysis:** Code responses by: (a) sensory type (thermal, gravitational, taste-residue, emotional); (b) valence (positive / neutral / absent / distressing); (c) whether the respondent reported a signal or an absence. The "absence" category is the primary data point.

*What feeds forward:* The percentage of "absence" responses provides the empirical quantification that opens the Phase 4 workshop (e.g., "7 out of 8 people reported no bodily signal after their meal on at least one day").

---

**[M5] Mindful Construal Diary — Phase 2a**
*See full protocol in D3 above.*

*What feeds forward:* Week 4 design provocations ("what-if" transformations of the eating environment) are printed as additional scenario stimuli for Phase 4, Block 2, supplementing the researcher-authored 2035 scenarios.

---

**[M6] Body Mapping Warm-up — Phase 4, Block 1**
*See full protocol in D2, Block 1 above.*

**Comparison data:** After the Phase 4 workshop ends, ask participants to create a second body map ("How does your body feel now, at the end of this session?"). Compare before/after maps. Did engagement with The After Glow change how participants relate to their own somatic experience?

*What feeds forward:* Pre/post body maps are included in the Phase 5 critique session ("Did interacting with this object change anything about how you pay attention to your body?").

---

**[M7] Anti-Heroes Ethical Role-Play — Phase 4, Block 3**
*See full protocol in D2, Block 3 above.*

**Role Card texts (print at A6 size, one per card):**

> **THE BIG FOOD DATA BROKER**
> You represent a company that monetises health data. The After Glow is frustrating — it generates warmth and light but stores *nothing*. No glucose curves. No behavioural patterns to sell. No longitudinal compliance data. You need to convince the room that its data blackout is a product flaw, not a feature.

> **THE PUNITIVE DIET COACH**
> You believe that behaviour change requires accountability. The After Glow's warm glow is dangerous — it *rewards* eating without judgement. What if someone eats three portions? What if they skip vegetables entirely? The disc should vibrate sharply when a bad choice is detected. Gentle warmth is soft, weak design.

> **THE INTUITIVE EATING ADVOCATE**
> You are suspicious of any technology that mediates the body-food relationship — even a gentle, non-numeric one. People already have a perfectly functioning digestive system. Does The After Glow *help* people trust their body, or does it just replace one form of external mediation with a softer one? Is it *still* surveillance dressed in ceramic?

> **THE ANXIOUS BIOHACKER**
> You wear an Oura Ring, a CGM, and a heart rate monitor. The After Glow is too vague — 60 seconds of warmth tells you nothing. What was your glucose response? What was your HRV impact? You need data, not poetry. Ambiguity is not a feature; it is a design failure for anyone serious about optimisation.

*What feeds forward:* The Intuitive Eating Advocate's challenge (is this still surveillance in disguise?) becomes a critical design constraint that refines The After Glow's specifications in Appendix F. The Data Broker's failure mode shapes the Surveillance Blackout provocation.

---

#### Timeline: June–August 2026

| Week | Activity | Methods active |
|------|----------|----------------|
| Week 1 (June) | Recruit participants; conduct Phase 0 conversations | — |
| Week 2–3 (June) | Phase 1 interviews + contextual inquiry; assign Photo Elicitation task | M3, M2 assigned |
| Week 4–5 (June–July) | Phase 2a diary + Phase 2b EMA (peers) | M5, M4 |
| Week 6 (July) | App audit (Phase 3b); Probe Kit dispatch (Phase 3a) | M1 |
| Week 7 (July) | Phase 4 Workshop: Body Mapping → Demo → Anti-Heroes | M6, M7 |
| Week 8–10 (July–Aug) | Phase 5 Participatory Critique (using photos as stimulus) | M2 used |
| Week 10+ (Aug) | Synthesis and design iteration | — |

---

#### Why These 7 (and Not Others)

| Criterion | Rationale |
|-----------|-----------|
| **Feasibility** | All 7 require only materials available at RCA (clay, A3 paper, A6 cards, a mobile phone) — no specialist equipment, no clinical setting |
| **Ethical safety** | All 7 are observational or generative — none involve biometric extraction or clinical risk for ED-screened participants |
| **Methodological triangulation** | Individual (M5 diary, M2 photos) + interpersonal (M4 EMA peers) + collective (M6, M7 workshop) + in-situ (M3 contextual inquiry) + pre-attunement (M1 probes) |
| **Feed-forward architecture** | Each method produces artefacts (maps, photos, folk-theory data) that serve as stimuli for the next method — the chain builds rather than repeats |
| **Coherence with RCA ethics** | Consent is granular (separate for each phase), participation is voluntary at each stage, no deception is required (even M1 is transparent about its speculative nature) |

---

### D6 — Photo Elicitation Assignment Card

*Print at A5. Give to each participant at the end of their Phase 1 interview.*

---

**YOUR TASK — EATING AFTERMATH PHOTOS**

Over the next **4 weeks**, take **one photo per day**, exactly **60 seconds after you finish eating a meal**.

**Photograph the aftermath. Not the food.**
— Your empty or nearly-empty plate
— The table surface
— Your hands after eating
— The room or space you were in

**Rules:**
- No staging. No filters. No captions.
- Take it in the 60 seconds immediately after eating — not later.
- Any device is fine (phone camera is perfect).

**Send to:** [researcher WhatsApp/email — fill in before printing]
**By:** [date — fill in before printing]

*You don't need to explain the photos. Just take them.*

---

These photos will be brought to your final session with me. We will look at them together, and you will tell me what they show about what happens after eating — not to you consciously, but *in the space around you*. There are no wrong photos.

---

## Appendix C — Ethics Checklist

*→ 【你需要做】在此处粘贴 Ethics Checklist 表单的实际答案（Google Form 提交后会发到你邮箱，复制内容粘贴即可）。*

**Ethics Checklist Status:** Submitted to supervising tutor. Risk classification: **Low risk.** No primary research involving human participants has commenced prior to submission of this proposal; all data collection will begin in Term 3 following ethics approval confirmation.

**Five governing ethical principles:**

**1. ED Risk and Participant Safety:** All phases will implement explicit ED safeguards. Phase 0 and Phase 1 interviews will use the Eating Attitudes Test (EAT-26) as a pre-screening tool. Any participant scoring above the clinical threshold will be referred to RCA wellbeing services and excluded from participation. All interview questions are phenomenologically framed to avoid triggering disordered cognition. Participants will receive written debriefing with RCA wellbeing resource details.

**2. Biometric Data Privacy:** Any metabolic data generated during the autoethnographic diary study (researcher's own) is entirely self-generated and not shared. If participants choose to reference their own CGM data, this constitutes sensitive health data: it will be anonymised, stored only on encrypted local drives, and destroyed after thematic analysis. No participant biometric data will be uploaded to cloud services.

**3. Informed Consent and Withdrawal:** Participation at all phases is voluntary, with the right to withdraw at any point without consequence. Written informed consent forms will be used for all recorded sessions. Participants will be informed of how their words may be quoted (anonymised) in the final IRP Report.

**4. Independence from Commercial Interests:** This research deliberately excludes funding from or partnership with food industry corporations, health insurance companies, or CGM manufacturers. This independence is essential to maintaining the critical design stance.

**5. WEIRD Bias Mitigation:** Following Agapie's (2024) critique that 61.1% of HCI behaviour change studies focus exclusively on Western contexts, this research will actively recruit beyond the default RCA student demographic. Phase 0 and Phase 1 interviews will seek a minimum of two participants from non-Western cultural backgrounds, and cross-cultural food attitudes (Rozin et al., 1999; Fischler, 1988; Lupton, 1996) will be explicitly integrated into thematic analysis.

---

## Appendix F — The After Glow: Critical Design Specifications *(Supplementary)*

**Object description:** A handcrafted disc (approx. 80mm diameter, 12mm depth) made from unfired, porous clay. It contains a wearable-linked biosensor and an amber LED element with a small thermal actuator. There is no screen, no score, no number. It is activated by holding in both hands for 60 seconds after a meal.

**Sensory output:** Soft amber glow (intensity modulated by post-prandial physiological state); gentle warmth (temperature modulated by meal timing and metabolic response). Nothing is quantified. Nothing is evaluated.

**Framing:** Presented using the Near Future Laboratory TBD Catalog approach — as an ordinary consumer mail-order product from 2035, with product copy, pricing, and a postal address. This defamiliarises the speculative, positioning the radical as mundane.

**Three critical design provocations:**

**Provocation 1 — The Surveillance Blackout:** When the user holds the disc for its 60-second activation, the object acts as a localised signal blocker — severing the phone's Wi-Fi and disabling nearby smart speakers. *Why critical:* It makes the price of embodied reflection the explicit severing of the data umbilical cord. It builds on the *Wall* design probe (DIS 2025), actively resisting the "sense-and-extract" paradigm of health surveillance capitalism.

**Provocation 2 — The Intentional Placebo Error:** One out of every ten activations, the disc deliberately does nothing — remaining cold and dark, or emitting a confusing light pattern that does not match how the user feels. *Why critical:* It forces the user to confront their Folk Theory of Technology (Makhortykh et al., 2022) — the assumption that the machine knows better than the body. Aligned with Dunne and Raby's (2001) *Placebo Project* ethos of productively confusing objects.

**Provocation 3 — Programmed Physical Decay:** Made from unfired, porous clay, the disc heats slightly and physically cracks when it detects a highly dysregulated, rushed meal. Over months, the object degrades, stains, and crumbles based on lived reality. *Why critical:* Silicon Valley health tech promises frictionless, immortal optimisation via sleek glass screens. A degrading ceramic disc insists that human bodies are messy, entropic, and mortal — transforming dietary feedback into a *memento mori* rather than a biohacking dashboard.

*→ 【你需要做】在此插入：(a) After Glow 手绘草图照片；(b) Oura Ring vs. After Glow 对比图；(c) 物理衰变时间线草图。*

---

## Appendix G — Data Visualisations *(Supplementary)*

*The following charts present key supporting data referenced in Section 2 and Section 3.*

---

### G1 — Health App Retention Curve

![[G1_App_Retention_Curve.svg|820]]

*Figure G1 — Health & Fitness App Retention Curve. Source: Business of Apps (2024). The precipitous drop from 26% (Day 1) to 3% (Day 30) quantifies the systematic failure of manual logging paradigms. Day 30 retention of 3–4% represents the industry average across health and fitness app categories and has not meaningfully improved despite US$25 billion annual investment in digital health (Precedence Research, 2025).*

---

### G2 — OTC CGM Market Growth (2024–2034)

![[G2_CGM_Market_Growth.svg|820]]

*Figure G2 — OTC CGM Market Size (2024–2034). Source: Precedence Research (2025). The 2024 FDA clearance of Abbott Lingo as an over-the-counter device marks the definitive inflection point from clinical to consumer market — creating the market context this project's design intervention must respond to before engineering-led UX paradigms dominate.*

---

### G3 — NHS Hospital Admissions for Eating Disorders

![[G3_NHS_Hospital_Admissions.svg|820]]

*Figure G3 — NHS Hospital Admissions for Eating Disorders (2013–2021). Source: NHS England (2023). The 8.5× increase over seven years — coinciding with the proliferation of calorie-tracking apps and social media diet culture — contextualises the urgency of harm-prevention design constraints. This data does not establish causation, but it confirms the scale of a public health crisis that dietary feedback design cannot ignore.*

---

### G4 — Protective Effect of Intuitive Eating

![[G4_Intuitive_Eating_Protective_Effect.svg|820]]

*Figure G4 — Protective Effect of Intuitive Eating on Binge Eating Risk. Source: Linardon (2020), meta-analysis across 8-year longitudinal studies. A one-point increase in Intuitive Eating score is associated with a 71–74% reduction in binge eating risk — providing the empirical foundation for the "awareness-first" design direction. This finding justifies the REFLECTIVE Framework's emphasis on cultivating internal attunement over external data compliance.*

---

### G5 — Intuitive Eating Principles as Design Constraints

![[Pasted image 20260409123421.png|900]]

*Figure G5 — The ten Intuitive Eating principles (Tribole and Resch, 2020) mapped as design constraints. Each principle identifies a corresponding design implication for the REFLECTIVE Framework.*

*→ 【你需要做】确认此图片清晰可读。如为手写草图，建议重绘为两列表格（Principle | Design Implication）。*

---

---

## Appendix B — Signals

*Three signal cards contributed to the RCA Trend Wall during the February–March 2026 workshops, all under the macro-trend cluster: **Technology-Mediated Preventive Health**.*

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
*Version: v15-Polished | Main body: ~3,000 words (Sections 1–9) | Appendices: A (required), B (required), C (required), D–G (supplementary)*
