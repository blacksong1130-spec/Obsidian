---
type: exam-prep
created: 2026-04-07
tags:
  - IRP
  - Shannon
  - 急救计划
  - 可视化
  - Mermaid
  - futures-cone
  - backcasting
related:
  - "[[【01】IRP Proposal （Draft）]]"
  - "[[IRP Shannon 会面备考 - Claudian 讲解笔记]]"
---

# IRP 急救计划 — Shannon 会面前夜

> **使用说明：** 这是为 2026-04-08 与 Shannon 的 20 分钟 tutorial 设计的"作战地图"。四个部分可以独立使用：Step 1 说话用，Step 2-3 打印/展示用，Step 4 会后行动用。

---

# ✅ 文献库更新记录（2026-04-07 新增）

今日新增 6 篇文献笔记至 `Literature Notes/`：

| 代码 | 文献 | 核心贡献 |
|------|------|---------|
| [[L11 - Kross and Ayduk (2017)]] | Self-distancing 自我疏离 | 反馈**语言**设计的理论基础：观察者视角 vs 沉浸式评判 |
| [[L12 - Kristeller and Wolever (2011)]] | MB-EAT 正念饮食训练 | 内感知训练的临床证据；设计机会：缺少数字反馈层 |
| [[L13 - Rozin et al (1999)]] | 跨文化食物态度研究 | 医学化食物观 → 焦虑↑；快乐文化 → 焦虑↓ |
| [[L14 - Linardon (2020)]] | AMC 干预与饮食失调 | 接受/正念/慈悲框架对 ED 的保护性证据 |
| [[L15 - Wallace et al (2025)]] | 健康追踪技术与饮食 | 5 个机制：数据具象化→感觉被数字替代 |
| [[L16 - Lupton (1996)]] | 食物、身体与自我 | 饮食是权力/身份/情感表演，不只是营养 |

---

---

# 第一步：核心矛盾 — The "Why"（直接、不客套）

## 🎯 一针见血：这篇提案的核心矛盾

> **用一句话说：** 你试图同时做两件相互拉扯的事——*让饮食反馈更有效*（关闭反馈缺口），但*又不能让追踪变得更密集*（密集追踪→饮食失调风险）。

这不是小问题。这是整个提案最难的地方：

```
❌ 简单路径（行不通）：
"现有反馈太差 → 给更好的反馈 → 行为改变"
（问题：更好的反馈 = 更多数据凝视 = 更高 ED 风险）

✅ 你的实际主张（更难，但正确）：
"设计一种质上不同的反馈——放大内部感知，而非用外部数字替代它"
```

你的解法（"Amplify, don't replace"）在提案中有**原则**，但还没有**机制**。Shannon 明天大概率会在这里追问。

---

## 🔑 向 Shannon 索取的 3 个关键反馈

### 反馈 ①：原创性定位（最重要）

**你的问题（直接问）：**
> *"My central design argument is 'amplify vs. replace' — using feedback to build interoceptive literacy rather than substitute for it. Is this distinction sufficiently theorised as an original contribution, or does it already exist under another name in the clinical or design literature? How do I defend the originality of this framing?"*

**为什么这个问题最重要：**
"放大而非替代"是一个有直觉吸引力的原则，但你需要知道它是否已经存在于：临床心理学（Supported Self-Management）、健康设计（Patient-Centred Design）或内感知研究（Interoceptive Training）的既有框架中。Shannon 的答案决定你的 Section 4 是否需要重写。

---

### 反馈 ②：投机设计的边界（伦理定位）

**你的问题（直接问）：**
> *"Given that my topic involves acute eating disorder risk, how provocative should my speculative prototypes be? Should I imagine potentially harmful design futures and critique them — or should I focus only on 'preferred future' scenarios? Where does critical design end and irresponsible speculation begin in a topic with clinical stakes?"*

**为什么要问这个：**
Dunne & Raby 的方法论允许你"设计坏的未来"以引发反思。但在 ED 领域，一个设计不佳的原型可以造成真实伤害（如果有脆弱用户接触它）。你需要 Shannon 帮你定边界。

---

### 反馈 ③：时间线可行性（方法论现实核查）

**你的问题（直接问）：**
> *"My methodology combines a 4-week autoethnographic diary, ethics approval (2–3 weeks), 6–8 semi-structured interviews, speculative prototyping, and participatory critique — all before September. Is this sequencing realistic? What should I ruthlessly cut if I'm short on time?"*

**为什么要问这个：**
你不需要在 20 分钟里证明你很厉害。你需要在 9 月前交出真实的东西。Shannon 的优先级排序建议是实际可执行的金矿。她会告诉你哪个环节可以"快速完成"，哪个是真正的核心。

---

---

# 第二步：文献关系全景图（Mermaid 知识图谱）

> 在 Obsidian 中渲染后，你可以一眼看清：谁在诊断问题，谁在提供理论，谁在设定约束，谁在提供出路。

```mermaid
graph TD
    %% ===== 核心研究问题 =====
    CORE["🎯 核心问题<br>为什么好好吃饭<br>感觉毫无反馈？<br>The Feedback Gap"]

    %% ===== 第一层：诊断问题 =====
    SCH["📊 L4 · Schembre et al. (2018)<br>系统综述：饮食 App 普遍<br>数周内大量用户流失<br>→ 诊断：反馈失效"]
    WALL["📱 L15 · Wallace et al. (2025)<br>健康追踪技术与饮食态度<br>5个机制：数据具象化<br>→ 数字替代感觉"]

    %% ===== 第二层：解释机制 =====
    FOGG["⚙️ L1 · Fogg (2009)<br>B=MAP 行为模型<br>动机×能力×提示<br>三者同时失效<br>→ 行为不发生"]
    KAH["🧠 L7 · Kahneman (2011)<br>系统一/二<br>饮食在系统一决策<br>工具只触达系统二<br>→ 意图-行动缺口"]
    NORM["🔍 L5 · Norman (2013)<br>评估鸿沟<br>用户无法判断行为是否有效<br>→ 设计失败不是动力失败"]

    %% ===== 第三层：伦理约束 =====
    ROTH["⚠️ L6 · Roth et al. (2024)<br>密集追踪与饮食失调<br>系统综述&元分析<br>→ 追踪 = ED 风险因子"]
    WALL2["⚠️ L15 · Wallace et al. (2025)<br>强迫性追踪子群<br>→ 工具变成伤害"]
    FISC["🌍 L8 · Fischler (1988)<br>食物是身份·文化·情感<br>不只是燃料<br>→ 数字化框架有其局限"]
    LUPT["🎭 L16 · Lupton (1996)<br>饮食是权力·性别·身份表演<br>→ 医学化框架主动殖民饮食"]
    ROZIN["🇫🇷 L13 · Rozin et al. (1999)<br>法国悖论：食物=快乐→焦虑最低<br>美国：食物=健康→焦虑最高<br>→ 医学化反而有害"]

    %% ===== 第四层：设计出路 =====
    TRIB["🌿 L3 · Tribole & Resch (2020)<br>直觉饮食框架<br>放大内部感知<br>反馈→食物自由"]
    MBEAT["🧘 L12 · Kristeller (2011)<br>MB-EAT 正念饮食训练<br>内感知可以被训练<br>→ 但缺少数字反馈层"]
    LINAR["✅ L14 · Linardon (2020)<br>接受/正念/慈悲干预<br>对 ED 有保护作用<br>→ 设计价值与临床证据一致"]
    KROSS["💬 L11 · Kross & Ayduk (2017)<br>自我疏离：观察者语言<br>降低情绪激活<br>→ 反馈语言设计原则"]

    %% ===== 第五层：方法论 =====
    DR["🔭 L2 · Dunne & Raby (2013)<br>投机设计方法论<br>设计质疑范式<br>→ 提案核心方法"]
    THALER["🏗️ L9 · Thaler & Sunstein (2008)<br>助推理论<br>行为架构<br>→ 设计环境使健康选择更容易"]

    %% ===== 关系连线 =====
    SCH -->|"证明了反馈失效"| CORE
    WALL -->|"揭示了5个失败机制"| CORE

    CORE --> FOGG
    CORE --> KAH
    CORE --> NORM

    FOGG -->|"三要素诊断"| ROTH
    KAH -->|"认知层级错位"| ROTH
    NORM -->|"评估鸿沟"| ROTH

    ROTH -->|"设定伦理边界"| TRIB
    WALL2 -->|"设定伦理边界"| TRIB
    FISC -->|"文化框架约束"| TRIB
    LUPT -->|"社会权力约束"| TRIB
    ROZIN -->|"医学化有害证据"| TRIB

    TRIB -->|"提供设计原则"| MBEAT
    TRIB -->|"提供设计原则"| KROSS
    MBEAT -->|"内感知训练内容"| LINAR
    LINAR -->|"接受框架临床证据"| KROSS

    KROSS -->|"反馈语言设计"| DR
    THALER -->|"行为架构"| DR

    DR -.->|"质疑：为什么<br>现在的工具是这样？"| CORE

    %% ===== 样式 =====
    style CORE fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px
    style SCH fill:#ffebee
    style WALL fill:#ffebee
    style FOGG fill:#e3f2fd
    style KAH fill:#e3f2fd
    style NORM fill:#e3f2fd
    style ROTH fill:#fff3e0
    style WALL2 fill:#fff3e0
    style FISC fill:#fff3e0
    style LUPT fill:#fff3e0
    style ROZIN fill:#fff3e0
    style TRIB fill:#e8f5e9
    style MBEAT fill:#e8f5e9
    style LINAR fill:#e8f5e9
    style KROSS fill:#e8f5e9
    style DR fill:#fce4ec
    style THALER fill:#e3f2fd
```

---

---

# 第三步：Design Futures 高级可视化蓝图

## 3A — 未来视锥（The Futures Cone）

> Dator (2009) / Stuart Candy 经典框架，应用到饮食反馈课题。

```mermaid
graph LR
    NOW["📍 2026 现在<br>饮食反馈缺口<br>MyFitnessPal 式<br>卡路里追踪主导"]

    subgraph POSSIBLE ["🌐 可能未来 Possible Futures<br>技术上可行的所有方向"]
        P1["🔬 非侵入式<br>持续代谢监测普及<br>（类CGM但无需穿刺）"]
        P2["🤖 AI 完全替代<br>食物决策外包给算法"]
        P3["🌿 全社会<br>反饮食追踪运动"]
        P4["🧬 基因饮食定制化<br>个性化精准营养"]
    end

    subgraph PLAUSIBLE ["📈 可信未来 Plausible Futures<br>与当前趋势一致"]
        PL1["📡 CGM 消费者化<br>代谢追踪成日常品"]
        PL2["🤝 社交饮食科技<br>共餐仪式 + 数字化"]
        PL3["💊 GLP-1 药物主导<br>科技辅助药物效果"]
    end

    subgraph PROBABLE ["🎯 可能发生 Probable Futures<br>按当前轨迹最可能"]
        PR1["📱 超级 App 整合<br>Apple Health + 医疗数据<br>= 全面量化自我 2.0"]
        PR2["❌ 更多用户流失<br>追踪复杂度↑<br>持续率↓"]
    end

    subgraph PREFERABLE ["⭐ 首选未来 Preferable Future<br>我们想要设计的方向"]
        PF["✨ 2035 首选<br>吃得好和完成晨跑<br>一样有意义、可感知、<br>有情感共鸣——<br>无焦虑、无强迫<br>工具让自己变得不再必要"]
    end

    NOW --> POSSIBLE
    NOW --> PLAUSIBLE
    NOW --> PROBABLE
    NOW --> PREFERABLE

    style NOW fill:#e3f2fd,stroke:#1565c0
    style PF fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style PR2 fill:#ffebee
    style POSSIBLE fill:#f9f9f9
    style PREFERABLE fill:#f1f8e9
```

---

## 3B — 回溯法时间轴（Backcasting Timeline）

> 从 2035 首选未来**倒推**至今天的关键设计决策节点。

```mermaid
timeline
    title 饮食反馈设计：从首选未来倒推路线图
    section 2035 首选未来
        2035 : ✨ 吃得好 = 完成晨跑一样感觉
             : 有意义·可感知·有情感共鸣
             : 无焦虑·无强迫·无病耻感
             : 工具自我消解（不再必要）

    section 关键里程碑
        2032 : 🧪 非侵入式代谢传感器
             : 消费者级别可及
             : （无需穿刺的皮下传感器）
        2030 : 🌿 直觉饮食设计标准
             : 行业通行设计伦理框架
             : 类似今日的无障碍设计准则
        2028 : 🤝 社交饮食科技成熟
             : 反馈嵌入共餐仪式
             : 而非个人设备

    section 近期设计行动（2026-2027）
        2027 : 📐 设计伦理排除清单
             : 哪些反馈模式绝对禁止
             : （奖惩机制·食物评分·卡路里焦虑）
        2026 秋 : 🎭 投机设计原型展览
                : 让公众想象更好的饮食科技
                : 推动文化对话
        2026 夏 : 🗣️ 用户访谈完成
                : 6-8人：饮食反馈的现象学体验
        2026 春 : ✍️ 自我民族志日记开始
                : 研究者作为用户
                : 4周持续记录
```

---

---

# 第四步：顶级图表"按图索骥"指南

> 不用我发图给你——告诉你去哪里找、找什么关键词。这三张图直接截图，放 PPT 完全够用。

---

## 🖼️ 图表 ① — Fogg 行为模型曲线图

**必须找的理由：** 这是 B=MAP 的视觉核心——一条"行动线"（Action Line）将行为发生区和行为失败区分开，直观显示为什么三要素缺一不可。

**怎么找：**
1. 去 **[behaviormodel.org](https://behaviormodel.org)** — BJ Fogg 的官方网站，首页就有
2. 关键词：`"Fogg Behavior Model" graph "action line"` （找那条分割"行为发生区"和"失败区"的绿色曲线）
3. 找那张有三个轴（横轴 Ability·纵轴 Motivation·斜曲线 Prompt）的经典坐标系图

**怎么用在 PPT：**
> 截图 + 标注三个红色叉：左上角（高动机但能力差）= MyFitnessPal 用户入门；中间偏左（动机下降）= 两周后流失；右下角（低动机低能力）= 大多数真实用户状态

---

## 🖼️ 图表 ② — 未来视锥（The Futures Cone）

**必须找的理由：** 这是你整个 Design Futures 方法论的视觉锚。没有这张图，你的"投机设计"和"回溯法"说起来总是虚的。

**怎么找：**
1. Google 搜索：`"futures cone" Stuart Candy possible probable preferable`
2. 找 **Stuart Candy** 版本（比 Dator 原版更好看），通常是一张从左到右扩展的彩色漏斗图
3. 或去 **[thinkingfutures.net](https://thinkingfutures.net)** 直接找 Candy 的原图

**怎么用在 PPT：**
> 在图上标注你的三个 2035 场景（High-Tech Biometric·Ambient Social·Intuitive Technology），说明它们分布在 Possible 到 Preferable 的哪个区域

---

## 🖼️ 图表 ③ — Dunne & Raby 投机设计"A/B"示意图

**必须找的理由：** Dunne & Raby 在《Speculative Everything》里有一张非常清晰的图，把"Affirmative Design"（解决现有问题）和"Critical Design"（质疑问题本身）区分为 A/B 两路，这是你选择投机设计方法论的直接视觉依据。

**怎么找：**
1. 直接搜索：`Dunne Raby "Speculative Everything" "affirmative design" "critical design" diagram`
2. 或者去 **[dunneandraby.co.uk](https://www.dunneandraby.co.uk/content/bydandr/13/0)** 找"Beyond Radical Design?" 这篇文章里的图
3. 关键词：`Dunne Raby "A" "B" design categories` — 找那张两列比较表或二维坐标图

**怎么用在 PPT：**
> 标注：你的项目**从 A（Affirmative）出发理解现状**（Section 2 应用审计），然后**用 B（Critical）质疑现状**（投机原型），以**引导公众想象 C（Preferred Future）**

---

---

# 附：20分钟 Tutorial 节奏建议

| 时间 | 内容 | 目标 |
|------|------|------|
| 0–2 min | 一句话总结项目 + 你的三条设计原则 | 让 Shannon 快速进入语境 |
| 2–5 min | 展示文献关系图（Step 2 的 Mermaid） | 证明你的理论基础扎实 |
| 5–10 min | 提出 3 个关键问题（Step 1） | 这才是 tutorial 的核心目的 |
| 10–15 min | 展示三个 2035 场景 + 未来视锥 | 显示你有 Futures thinking |
| 15–18 min | 请 Shannon 指出最弱的环节 | 开放性问题获取最大价值 |
| 18–20 min | 确认下一步行动（伦理审查/自我民族志） | 把对话变成可执行计划 |

> **最重要的一句话，Tutorial 前默念三遍：**
> ==*"我不是来汇报进度的，我是来获取 Shannon 的判断力的。"*==

---

*文件生成：Claudian，2026-04-07*
*关联文献库：L1–L16（今日新增 L11-L16）*
