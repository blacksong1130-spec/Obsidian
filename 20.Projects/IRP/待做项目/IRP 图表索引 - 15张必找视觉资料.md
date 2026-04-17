---
type: visual-guide
created: 2026-04-07
tags:
  - IRP
  - 图表
  - 视觉资料
  - Shannon
  - 截图指南
related:
  - "[[【01】IRP Proposal （Draft）]]"
  - "[[IRP Tutorial 架构图 2026-04-08]]"
---

# IRP 图表索引 — 15张必找视觉资料

> **使用方法：** 每张图的"搜索入口"和"关键词"是你要做的全部操作。找到图后截图，存在桌面，会面时可以直接展示。优先级 ⭐⭐⭐ = 明天必须有；⭐⭐ = 强烈建议；⭐ = 有更好。

---

## 第一组：核心理论图（与提案直接对应）

### 图 ① — Fogg B=MAP 行动曲线 ⭐⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | L1 · Fogg (2009) |
| **搜索入口** | [behaviormodel.org](https://behaviormodel.org) — 首页直接有 |
| **Google 关键词** | `Fogg Behavior Model "action line" graph` |
| **图的样貌** | 横轴 Ability，纵轴 Motivation，一条斜向绿色曲线是"行动线"，线上方=行为发生，线下方=行为失败 |
| **怎么用** | 在图上标注三个红叉：① 左上（高动机低能力）= 新用户入门；② 中间（动机衰减）= 两周后流失；③ 右下（低动机低能力）= 大多数真实用户 |
| **Shannon 说法** | "This is exactly why dietary apps fail across all three dimensions simultaneously." |

---

### 图 ② — 未来视锥 The Futures Cone ⭐⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | P10 · Martell (2026) / Dator (2009) / Stuart Candy |
| **搜索入口** | [thinkingfutures.net](https://thinkingfutures.net) — 找 Stuart Candy 版本 |
| **Google 关键词** | `"futures cone" Stuart Candy possible probable preferable` |
| **图的样貌** | 从左（现在）向右（未来）展开的漏斗形，从内到外分别是：Probable / Plausible / Possible / Preposterous，最里有一条 Preferable 线 |
| **怎么用** | 标注你的三个 2035 场景落在哪个区域：Biometric=Plausible，Social=Plausible-Possible，Intuitive=Preferable |
| **Shannon 说法** | "I'm using backcasting from the Preferable cone to derive present design decisions." |

---

### 图 ③ — Dunne & Raby A/B 设计空间 ⭐⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | L2 · Dunne & Raby (2013) |
| **搜索入口** | [dunneandraby.co.uk/content/bydandr/13/0](https://www.dunneandraby.co.uk/content/bydandr/13/0) |
| **Google 关键词** | `Dunne Raby "affirmative design" "critical design" "A" "B" diagram` |
| **图的样貌** | 两列对比表，左列 A = Affirmative（解决问题、商业化、正向）；右列 B = Critical（质疑前提、投机性、挑衅性）|
| **怎么用** | 标注：你从 A 出发理解现有工具，用 B 方法论设计投机原型，目标是引导人们想象一个更好的 C |
| **Shannon 说法** | "My speculative prototypes are B-type interventions — their job is to defamiliarise assumptions." |

---

### 图 ④ — Kahneman 系统一/二 双脑图 ⭐⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | L7 · Kahneman (2011) |
| **搜索入口** | Google 图片 |
| **Google 关键词** | `Kahneman "System 1 System 2" brain illustration "thinking fast slow"` |
| **备选关键词** | `dual process theory diagram fast slow brain` |
| **图的样貌** | 通常是两个大脑或两条路径的示意图：System 1（快、自动、情绪）vs System 2（慢、理性、刻意）。找那张有"自动驾驶"和"人工驾驶"对比的版本 |
| **怎么用** | 说明：饮食决策在 System 1 发生，但所有饮食 App 只能触达 System 2 → 认知层级错位是根本问题 |
| **注意** | Shannon 已知此框架 — 只用来做"桥梁"，不展开讲 |

---

### 图 ⑤ — Norman 评估鸿沟 Gulf of Evaluation ⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | L5 · Norman (2013) |
| **搜索入口** | Google 图片 / 学术图片 |
| **Google 关键词** | `Norman "gulf of evaluation" "gulf of execution" diagram "Design of Everyday Things"` |
| **备选关键词** | `Norman action cycle gulf evaluation execution HCI diagram` |
| **图的样貌** | 一个弧形循环图，显示用户在"执行鸿沟"（从意图到行动）和"评估鸿沟"（从行动到感知到效果）之间卡住。饮食问题在评估鸿沟这端 |
| **怎么用** | 指向评估鸿沟：饮食的代谢效果需数周才能显现 → 鸿沟永远无法跨越 → 这是设计失败不是动力失败 |

---

## 第二组：实践/产品图（有图更直观）

### 图 ⑥ — Levels Health CGM 血糖响应图 ⭐⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | P3 · Levels Health (2019) |
| **搜索入口** | [levels.com/blog](https://levels.com/blog) |
| **Google 关键词** | `Levels Health CGM glucose spike food response chart` |
| **备选关键词** | `continuous glucose monitoring food comparison chart spike blunted` |
| **图的样貌** | 一条时间轴上的血糖曲线，显示不同食物（白米饭 vs 燕麦 vs 蔬菜）引起的血糖波动差异。有的曲线陡峭（spike），有的平缓（blunted）|
| **怎么用** | 展示：CGM 是目前最接近"真实代谢反馈"的东西，但它只测一个维度、需穿刺 → 技术存在但设计问题尚未解决 |

---

### 图 ⑦ — Oura Ring 晨间 Readiness 仪表盘 ⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | P2 · Oura Ring (2013) |
| **搜索入口** | [ouraring.com/blog](https://ouraring.com/blog) |
| **Google 关键词** | `Oura Ring readiness score dashboard morning interface screenshot` |
| **图的样貌** | 一个圆形大数字（0-100）的 App 界面，通常是绿色，显示"Today's Readiness: 87"，下面有子指标 |
| **怎么用** | 对比：Oura 把睡眠的复杂生物数据转化成一个有情感共鸣的数字 → 这是饮食反馈需要学习的模式 |

---

### 图 ⑧ — Strava 段位排行榜 Segment Leaderboard ⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | P1 · Strava (2009) |
| **搜索入口** | strava.com 或 Google |
| **Google 关键词** | `Strava segment leaderboard Local Legend screenshot interface` |
| **图的样貌** | 一条路段上的排名列表，显示谁是"Local Legend"，有用户头像、时间、排名 |
| **怎么用** | 展示社交层如何让运动追踪具有情感共鸣 → 饮食追踪目前完全缺失这个维度 |

---

### 图 ⑨ — Superflux《缓解冲击》实物照片 ⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | P5 · Superflux Mitigation of Shock (2017) |
| **搜索入口** | [superflux.in/index.php/work/mitigation-of-shock](https://superflux.in/index.php/work/mitigation-of-shock/) |
| **Google 关键词** | `Superflux "Mitigation of Shock" apartment installation food future` |
| **图的样貌** | 一个 2050 年公寓的实物装置：台面上有昆虫蛋白食品、发酵罐、可食用植物。非常具体、感官性强 |
| **怎么用** | 展示投机设计的威力：不是 PowerPoint，而是让你真实感受到未来。这是你的方法论基础 |

---

## 第三组：干预/临床图（支持伦理约束论证）

### 图 ⑩ — 直觉饮食饥饿-饱腹刻度表 ⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | L3 · Tribole & Resch (2020) |
| **搜索入口** | Google 图片 |
| **Google 关键词** | `"intuitive eating" "hunger fullness scale" Tribole Resch 1-10 diagram` |
| **备选关键词** | `hunger satiety scale 1 to 10 intuitive eating chart` |
| **图的样貌** | 1 到 10 的刻度尺，1 = 极度饥饿，10 = 极度饱撑，5-6 = 适度舒适区。通常配有身体感受描述 |
| **怎么用** | 展示：内感知反馈是可以被具象化的 → 这是 Intuitive Technology 场景的设计原型基础 |

---

### 图 ⑪ — MB-EAT 训练结构图 ⭐⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | L12 · Kristeller & Wolever (2011) |
| **搜索入口** | [mb-eat.com](https://www.mb-eat.com) |
| **Google 关键词** | `MB-EAT mindfulness eating awareness training program structure` |
| **备选关键词** | `Kristeller MB-EAT binge eating mindfulness diagram` |
| **图的样貌** | MB-EAT 官网通常有 9 周课程结构图，或者显示饥饿感知/味觉感知/情绪感知三个训练维度的圆圈图 |
| **怎么用** | 展示：MB-EAT 证明了内感知可以被训练 → 设计机会：把 MB-EAT 的内容，加上数字反馈层 |

---

### 图 ⑫ — Thaler & Sunstein 选择架构 EAST 框架 ⭐

| 字段 | 内容 |
|------|------|
| **对应文献** | L9 · Thaler & Sunstein (2008) |
| **搜索入口** | [bi.team](https://www.bi.team) → 找 EAST framework |
| **Google 关键词** | `"EAST framework" nudge "Easy Attractive Social Timely" diagram BIT` |
| **图的样貌** | 四象限或四步骤图：E=Easy（降低摩擦），A=Attractive（吸引注意），S=Social（社交证明），T=Timely（时机）|
| **怎么用** | 把 Thaler 的 EAST 作为 Fogg B=MAP 的"工程手册"：你的设计如何在每个维度上操作化助推 |

---

## 第四组：跨学科图（来自「知行合一是伪概念」文章）

### 图 ⑬ — Libet 实验 Readiness Potential 图 ⭐⭐

| 字段 | 内容 |
|------|------|
| **来源** | 神经科学/「知行合一」文章条目 1 |
| **搜索入口** | Google 图片 / Wikipedia |
| **Google 关键词** | `Libet experiment "readiness potential" EEG graph "350 milliseconds"` |
| **备选关键词** | `Libet 1983 brain activity before conscious decision diagram` |
| **图的样貌** | 一张 EEG 波形图：大脑的"Readiness Potential"在意识到"决定"之前 350ms 就已经升起。证明行为先于意识 |
| **怎么用在 IRP** | System 1 primacy 的神经科学证据 → 饮食决策在意识介入前就已发生 → 反馈必须在 System 1 层面工作 |
| **口头表达** | "Even neuroscience tells us: by the time you consciously decide to eat something, your brain has already committed 350 milliseconds ago." |

---

### 图 ⑭ — 双曲贴现曲线 Hyperbolic Discounting ⭐⭐

| 字段 | 内容 |
|------|------|
| **来源** | 行为经济学 / Kahneman + Thaler / 「知行合一」条目 33 |
| **搜索入口** | Google 图片 |
| **Google 关键词** | `hyperbolic discounting graph curve present bias delay reward` |
| **备选关键词** | `temporal discounting hyperbolic vs exponential curve behavioral economics` |
| **图的样貌** | 两条曲线：指数贴现（理性人）= 平滑递减；双曲贴现（真实人类）= 在"现在"附近急剧下跌。两者在时间轴上的交叉点揭示为什么短期诱惑战胜长期目标 |
| **怎么用在 IRP** | 解释为什么"营养健康"（延迟奖励）永远竞争不过"披萨好香"（即时奖励）→ 设计必须缩短奖励时间窗 |

---

### 图 ⑮ — 贝叶斯循环 知→行→反馈→更新 ⭐

| 字段 | 内容 |
|------|------|
| **来源** | 认识论 / 「知行合一」条目 55-56 |
| **搜索入口** | 可以用 Mermaid 自己生成（见下）|
| **Google 关键词** | `Bayesian learning cycle prior posterior update diagram` |
| **备选关键词** | `feedback loop learning cycle belief update action diagram` |
| **图的样貌** | 一个循环箭头图：Prior（先验/知）→ Action（行）→ Evidence（反馈）→ Updated Prior（更新的知）→ 再循环 |
| **怎么用在 IRP** | 你要设计的那个反馈系统，本质上是在为用户创造一个 Bayesian 学习循环。"怕的不是知行不合一，怕的是反馈回路断了" |

> **自制备用图（打印/截图）：**

```mermaid
graph LR
    A["🧠 先验\n'我觉得吃这个\n对我好'"] -->|"行动"| B["🍽️ 饮食行为"]
    B -->|"反馈信号"| C["📊 身体数据\n情绪 · 能量 · 感受"]
    C -->|"更新认知"| D["🔄 后验\n'原来这顿饭\n让我更清醒'"]
    D -->|"下次先验"| A
    
    style A fill:#e3f2fd
    style B fill:#fff3e0
    style C fill:#e8f5e9
    style D fill:#f3e5f5
```

---

## 快速优先级总结

| 优先级 | 图表 | 最关键用途 |
|--------|------|-----------|
| ⭐⭐⭐ 明天必备 | ① Fogg B=MAP | 解释为什么现有 App 全失败 |
| ⭐⭐⭐ 明天必备 | ② Futures Cone | 方法论视觉锚 |
| ⭐⭐⭐ 明天必备 | ③ Dunne & Raby A/B | 投机设计方法论依据 |
| ⭐⭐⭐ 明天必备 | ④ Kahneman S1/S2 | Shannon 已知但作桥梁用 |
| ⭐⭐⭐ 强推 | ⑥ Levels CGM 曲线 | 技术现状的视觉证据 |
| ⭐⭐ 有更好 | ⑤ Norman 评估鸿沟 | 设计失败的命名 |
| ⭐⭐ 有更好 | ⑩ 直觉饮食刻度 | 内感知可具象化的证据 |
| ⭐⭐ 跨学科加分 | ⑬ Libet 实验 | 神经科学支撑 System 1 |
| ⭐⭐ 跨学科加分 | ⑭ 双曲贴现曲线 | 为什么营养健康竞争不过披萨 |

---

## 特别备注：来自「知行合一是伪概念」文章的IRP相关人物清单

这篇文章提到的以下人物/学说与你的 IRP 直接相关，遇到可以口头引用：

| 人物/概念 | 在「知行合一」文章中 | IRP 连接 |
|-----------|--------------------|---------| 
| **Aristotle Akrasia** | 明知善而行恶 | = Intention-Action Gap 的 2400 年前命名 |
| **Benjamin Libet** | 行为先于意识 350ms | = System 1 primacy 神经证据 |
| **David Hume** | 理性是激情的奴隶 | = 情感共鸣反馈设计的哲学必要性 |
| **Kahneman** | 系统一/二 | ✅ 你已有 L7 |
| **Thaler & Sunstein** | 助推/修剪路径 | ✅ 你已有 L9 |
| **Derek Parfit** | 未来的你与现在的你不是同一人 | = 双曲贴现的哲学基础 |
| **James Clear** | 身份驱动 vs 意志力驱动 | 支撑 Fischler 的 Food-as-Identity 论点 |
| **Bayes 循环** | 知→行→反馈→更新 | = 你要设计的那个可纠错反馈回路 |
| **Antonio Damasio** | 躯体标记假说（情绪先于推理） | = 内感知/interoception 的神经科学基础 |
| **Festinger 认知失调** | 大脑不修正行为，修改认知 | = 为什么说教式 App 无效 |

---

*生成：Claudian，2026-04-07*
*关联：[[IRP Tutorial 架构图 2026-04-08]] · [[IRP 文献推演链 - 知识溯源图]]*
