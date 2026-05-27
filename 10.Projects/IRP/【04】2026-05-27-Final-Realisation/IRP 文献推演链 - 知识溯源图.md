---
type: reasoning-chain
created: 2026-04-07
tags:
  - IRP
  - 文献推演
  - 知识溯源
  - 跨学科
  - 知行合一
related:
  - "[[【01】IRP Proposal （Draft）]]"
  - "[[知行合一，大概率是个伪概念]]"
---
====
# IRP 文献推演链 — 知识溯源图

> **这张图回答的问题：** 不是"这些文献是什么"，而是"**是哪句话让你从这篇文献走到了那篇文献**"。这是你研究思维的一步步推演，是最难被别人抄走的东西，也是 Shannon 最想看到的智识诚实。

---

## 一、文献推演链：主干（从问题到方法论）

```mermaid
flowchart TD

    START(["🔍 起点问题<br>'为什么好好吃饭感觉毫无反馈？'<br>而运动、睡眠已经被设计解决了"])
    
    SCH["📊 L4 · Schembre et al. (2018)<br>──────────────────<br>关键句：'most users abandon<br>food tracking within weeks'<br>──────────────────<br>✅ 证实了现象：不是个例，是系统性失效"]
    
    FOGG["⚙️ L1 · Fogg (2009)<br>──────────────────<br>关键句：'behaviour = M × A × P,<br>all three must converge'<br>──────────────────<br>✅ 解释了机制：三要素同时失效<br>→ 行为不可能发生"]
    
    KAH["🧠 L7 · Kahneman (2011)<br>──────────────────<br>关键句：'dietary decisions are made<br>hundreds of times daily in System 1'<br>──────────────────<br>✅ 深化了问题：工具在 System 2 操作<br>但决策在 System 1 发生 → 根本错位"]
    
    NORM["🔍 L5 · Norman (2013)<br>──────────────────<br>关键句：'gulf of evaluation — the user<br>cannot determine whether their<br>actions are having any effect'<br>──────────────────<br>✅ 命名了设计失败：不是动力问题<br>是信息回路的断裂"]
    
    ROTH["⚠️ L6 · Roth et al. (2024)<br>──────────────────<br>关键句：'significant associations between<br>intensive dietary tracking and<br>elevated ED risk in adults'<br>──────────────────<br>✅ 发现伦理炸弹：解法不能是<br>更多/更密集的追踪"]
    
    TRIB["🌿 L3 · Tribole & Resch (2020)<br>──────────────────<br>关键句：'cultivating internal attunement<br>to hunger, fullness, and satisfaction<br>rather than imposing external rules'<br>──────────────────<br>✅ 提供了设计哲学：<br>放大内部感知，而非替代"]
    
    FISC["🌍 L8 · Fischler (1988)<br>──────────────────<br>关键句：'eating is never merely<br>nutritional: it is social, emotional,<br>cultural, and existential'<br>──────────────────<br>✅ 扩展了问题维度：<br>数字框架化约了整个饮食体验"]
    
    DR["🔭 L2 · Dunne & Raby (2013)<br>──────────────────<br>关键句：'objects not to solve problems<br>but to make problems visible,<br>to provoke debate'<br>──────────────────<br>✅ 找到了方法论：<br>投机设计作为批判性工具"]

    START -->|"Schembre 引用了 Fogg<br>行为设计文献作为解释框架"| SCH
    SCH -->|"为什么 App 失败？<br>需要行为学机制解释"| FOGG
    FOGG -->|"为什么能力/提示都低？<br>认知层级哪里出了问题？"| KAH
    KAH -->|"S1/S2 错位有设计词汇吗？<br>哪个框架命名了这个缺口？"| NORM
    NORM -->|"知道了设计失败的机制<br>但有没有更危险的副作用？"| ROTH
    ROTH -->|"如果不能追踪，那应该<br>是什么样的反馈哲学？"| TRIB
    TRIB -->|"食物不只是营养，<br>那它究竟是什么？"| FISC
    FISC -->|"既然范式本身有问题<br>用什么方法论来质疑范式？"| DR

    style START fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px
    style SCH fill:#ffebee
    style FOGG fill:#e3f2fd
    style KAH fill:#e3f2fd
    style NORM fill:#e3f2fd
    style ROTH fill:#fff3e0
    style TRIB fill:#e8f5e9
    style FISC fill:#fff3e0
    style DR fill:#fce4ec
```

---

## 二、文献推演链：新文献分支（今日新增 L11-L16）

```mermaid
flowchart TD

    ROTH_B["⚠️ L6 Roth (2024)<br>追踪 → ED风险"]
    WALL["📱 L15 · Wallace et al. (2025) ★NEW<br>──────────────────<br>关键句：'reification of data —<br>the process by which numerical<br>food tracking replaces the direct<br>sensory-emotional experience'<br>──────────────────<br>✅ 揭示了具体失败机制：<br>数字取代了感觉本身"]
    
    FISC_B["🌍 L8 Fischler (1988)<br>食物=文化身份"]
    LUPT["🎭 L16 · Lupton (1996) ★NEW<br>──────────────────<br>关键句：'eating is a site of power,<br>identity, memory, gender,<br>and social performance'<br>──────────────────<br>✅ 提供了社会学机制：<br>解释为什么医学化框架是暴力"]
    ROZIN["🇫🇷 L13 · Rozin et al. (1999) ★NEW<br>──────────────────<br>关键句：'Americans associate food<br>most with health and show the<br>highest food anxiety; French<br>associate food with pleasure and<br>show the lowest anxiety'<br>──────────────────<br>✅ 提供了跨文化量化证据：<br>医学化=高焦虑，快乐化=低焦虑"]
    
    TRIB_B["🌿 L3 Tribole (2020)<br>内部感知=设计目标"]
    MBEAT["🧘 L12 · Kristeller (2011) ★NEW<br>──────────────────<br>关键句：'interoceptive awareness —<br>the ability to read and trust<br>bodily signals — can be trained'<br>──────────────────<br>✅ 证明了内感知可以被训练<br>但缺少持续数字反馈层"]
    KROSS["💬 L11 · Kross & Ayduk (2017) ★NEW<br>──────────────────<br>关键句：'self-distanced perspective<br>reduces emotional reactivity and<br>facilitates adaptive reflection'<br>──────────────────<br>✅ 发现反馈语言本身是设计变量：<br>观察者视角 vs 沉浸式评判"]
    LINAR["✅ L14 · Linardon (2020) ★NEW<br>──────────────────<br>关键句：'acceptance-, mindfulness-,<br>and compassion-based interventions<br>benefit eating disorder psychopathology'<br>──────────────────<br>✅ 证明了：设计价值与临床证据一致<br>接受/好奇心框架既安全又有效"]

    ROTH_B -->|"追踪有哪些<br>具体失败机制？"| WALL
    FISC_B -->|"为什么数字框架<br>在社会学上是有害的？"| LUPT
    FISC_B -->|"有没有跨文化<br>量化数据支撑？"| ROZIN
    TRIB_B -->|"内部感知可以<br>被训练的临床证据？"| MBEAT
    TRIB_B -->|"反馈语言如何<br>操作化'好奇心不评判'？"| KROSS
    MBEAT -->|"接受/正念框架<br>的系统性临床证据？"| LINAR

    style ROTH_B fill:#fff3e0
    style FISC_B fill:#fff3e0
    style TRIB_B fill:#e8f5e9
    style WALL fill:#fce4ec
    style LUPT fill:#fce4ec
    style ROZIN fill:#fce4ec
    style MBEAT fill:#e8f5e9
    style KROSS fill:#e8f5e9
    style LINAR fill:#e8f5e9
```

---

## 三、「知行合一是伪概念」× IRP 跨学科连接图

> 这篇文章提供了哲学/神经科学/行为经济学的底层武器，可以在会面中作为"广度"证明随时引用。

```mermaid
flowchart LR

    subgraph 知行合一文章 ["📖 「知行合一，大概率是个伪概念」"]
        A1["Aristotle Akrasia<br>明知善而行恶<br>(公元前350年)"]
        A2["Libet 实验<br>行为先于意识 350ms"]
        A3["David Hume<br>理性是激情的奴隶"]
        A4["Bayes 循环<br>知→行→反馈→更新知"]
        A5["Thaler Nudge<br>修剪路径，构建系统"]
        A6["Derek Parfit<br>未来的你≠现在的你"]
        A7["Festinger 认知失调<br>大脑不修正行为，修改认知"]
        A8["James Clear<br>身份驱动 vs 意志力驱动"]
    end

    subgraph IRP文献 ["🔬 IRP 文献库（L1-L16）"]
        B1["Intention-Action Gap<br>意图-行动缺口"]
        B2["System 1 Primacy<br>决策在意识前发生"]
        B3["情感共鸣反馈<br>必须触达情感层"]
        B4["可纠错反馈回路<br>你要设计的东西"]
        B5["Fogg B=MAP<br>L1 行为设计"]
        B6["双曲贴现<br>L7 Kahneman"]
        B7["为什么说教无效<br>→ 设计环境不说教"]
        B8["食物身份<br>L8 Fischler"]
    end

    A1 -->|"= 同一概念<br>2400年更古老"| B1
    A2 -->|"神经科学证据"| B2
    A3 -->|"哲学必要性"| B3
    A4 -->|"正是你要<br>设计的回路"| B4
    A5 -->|"工程实现"| B5
    A6 -->|"哲学基础"| B6
    A7 -->|"解释机制"| B7
    A8 -->|"支撑论点"| B8

    style A1 fill:#fff9db
    style A2 fill:#fff9db
    style A3 fill:#fff9db
    style A4 fill:#fff9db
    style A5 fill:#fff9db
    style A6 fill:#fff9db
    style A7 fill:#fff9db
    style A8 fill:#fff9db
    style B1 fill:#e3f2fd
    style B2 fill:#e3f2fd
    style B3 fill:#e8f5e9
    style B4 fill:#e8f5e9
    style B5 fill:#e3f2fd
    style B6 fill:#e3f2fd
    style B7 fill:#fff3e0
    style B8 fill:#fff3e0
```

---

## 四、关键句索引表（16篇文献 × 一句定义）

> 每行包含：文献代码 · 作者年份 · **一句定位句**（你记住这一句就够） · 在提案中的角色

| 代码 | 文献 | 一句定位句（记住这一句） | 角色 |
|------|------|----------------------|------|
| **L1** | Fogg (2009) | *"B = M × A × P — all three must converge simultaneously."* | 诊断工具（为什么失败） |
| **L2** | Dunne & Raby (2013) | *"Design fiction: not to solve problems but to make problems visible."* | 方法论（怎么做） |
| **L3** | Tribole & Resch (2020) | *"Internal attunement, not external rules."* | 设计哲学（应该是什么） |
| **L4** | Schembre et al. (2018) | *"Most users abandon food tracking within weeks."* | 现象证据（问题存在） |
| **L5** | Norman (2013) | *"Gulf of evaluation: user cannot tell if actions have any effect."* | 命名设计失败 |
| **L6** | Roth et al. (2024) | *"Intensive tracking is associated with elevated disordered eating risk."* | 伦理炸弹 |
| **L7** | Kahneman (2011) | *"Dietary decisions happen in System 1; tools only reach System 2."* | 认知层级错位 |
| **L8** | Fischler (1988) | *"Eating is never merely nutritional — it is social, cultural, existential."* | 文化维度 |
| **L9** | Thaler & Sunstein (2008) | *"Choice architecture: make the healthy choice the easy choice."* | 助推工程 |
| **L10** | Attia (2023) | *"Nutrition is the primary lever for longevity — Medicine 3.0."* | 重要性框架 |
| **L11** ★ | Kross & Ayduk (2017) | *"Self-distanced framing reduces emotional reactivity."* | 反馈语言设计 |
| **L12** ★ | Kristeller (2011) | *"Interoceptive awareness can be trained through MB-EAT."* | 内感知可训练 |
| **L13** ★ | Rozin et al. (1999) | *"Americans: food=health, highest anxiety. French: food=pleasure, lowest anxiety."* | 医学化有害证据 |
| **L14** ★ | Linardon (2020) | *"Acceptance-based interventions benefit eating disorder psychopathology."* | 临床安全证据 |
| **L15** ★ | Wallace et al. (2025) | *"Reification of data: numbers replace sensory experience."* | 追踪失败机制 |
| **L16** ★ | Lupton (1996) | *"Eating is a site of power, identity, memory, and social performance."* | 社会学机制 |

> ★ = 2026-04-07 新增

---

## 五、研究逻辑的三段论（Shannon 视角）

> 如果你用三段论向 Shannon 总结，应该这样说：

```
大前提（文化哲学层）：
  饮食是文化、身份、情感的体验，不只是营养摄入。
  — Fischler (1988) + Lupton (1996) + Rozin (1999)

小前提（行为科学层）：
  当前工具用医学化数字框架处理这个多维体验，
  导致行为失效 + 认知错位 + 伦理风险。
  — Fogg (2009) + Kahneman (2011) + Roth (2024)

结论（设计层）：
  需要一种质上不同的反馈——
  不是更多数字，而是放大内部感知、
  使用观察者语言、脚手架走向自主。
  — Tribole (2020) + Kross (2017) + Kristeller (2011)
```

---

*生成：Claudian，2026-04-07*  
*关联：[[IRP Tutorial 架构图 2026-04-08]] · [[IRP 图表索引 - 15张必找视觉资料]]*  
*参考：[[知行合一，大概率是个伪概念]]*
