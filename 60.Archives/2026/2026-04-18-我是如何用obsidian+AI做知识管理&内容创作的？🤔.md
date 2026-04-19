---
title: "我是如何用 Obsidian+AI 做知识管理&内容创作的？"
url: "https://www.bilibili.com/video/BV1NYD4BVEpC/?t=6&spm_id_from=333.1007.tianma.2-3-6.click&vd_source=24ecfd5262eaccc07745d73cb0f408f2"
bvid: "BV1NYD4BVEpC"
author: "ami-moment"
upload_date: "2026-04-10"
created: "2026-04-18"
processed: "2026-04-18"
tags: ["clippings", "bilibili", "PKM", "workflow"]
---

<iframe src="https://player.bilibili.com/player.html?aid=116374470990649&bvid=BV1NYD4BVEpC&cid=37365941722&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allow="fullscreen; picture-in-picture" allowfullscreen="true" style="height:100%;width:100%; aspect-ratio: 16 / 9;"> </iframe>

## 🎯 对我的实际价值 · Personal Relevance

| 维度 | 连接点 | 有效性 |
|------|--------|--------|
| **IRP 研究阅读** | Apple Books 划线 → Obsidian 插件自动导入 → AI 整理，可直接用于 IRP 文献笔记的自动化 | ⭐⭐⭐ 高，立即可用 |
| **内容创作输出** | 口述碎片想法 → 语音录入 Obsidian → AI 结构化成文章，解决"让 AI 从零写"的人机味问题 | ⭐⭐⭐ 高，直接适配 Side-Hustle |
| **PKM 基础设施** | 印证了"输入自动化 + Skill 驱动输出"的整体框架，与我正在建的系统高度对齐 | ⭐⭐ 方向验证 |
| **Skills 扩展** | 作者提到 skills marketplace 里有"降低 AI 人机味"的 skill，可直接去找 | ⭐⭐ 可探索 |

**最值得立即借鉴的一点**：她不是让 AI 从零代写，而是先用语音/碎片捕捉自己的观点，再让 AI 做结构化整理。这个"原料在我，加工靠 AI"的分工逻辑，是内容创作中保留真实声音的关键。

---

## 速览 · TL;DR

> 作者分享了两套 Obsidian + AI 工作流：① Apple Books 划线 → 自动导入 Obsidian → AI 生成读书笔记；② 语音碎片想法 → AI 整理成可发布文章。核心工具链：Obsidian + Codex（或 Claude Code）+ Skills + VS Code。

## 关键洞见 · Key Insights

- **知识囤积 ≠ 知识管理**：收藏、记录但没有二次利用，是大多数笔记软件用户的真实状态。Obsidian + AI 打通的是"输入→输出"这条链路，而不只是存储。
- **Skill 是工作流的核心**：所有自动化的背后都是一份 Skill 文档（相当于菜谱），用 VS Code + AI 协作迭代写成，规定输入、输出、workflow。
- **口述稿是内容创作的起点**：碎片化输出（语音/随手记）+ 集中化输入，再用 AI 结构化——比让 AI 从零写出来的内容真实度高出一个量级，可达 80% 期望水平。
- **JSON Canvas Skill**：Obsidian CEO 出品，可将脚本或文章梳理成思维导图框架，适合视觉化内容结构。
- **Obsidian CLI**：作者提到新出的 CLI 工具可大幅节省 token，是下一步可探索的方向。

## 立即行动 · Action Items

- [ ] 安装 **Apple Books Obsidian 插件**，配置划线导入模板（适用于 IRP 研究书目的自动化笔记）
- [ ] 在手机 Obsidian 主页设置 **Daily Notes shortcut**，用语音输入捕捉碎片想法
- [ ] 去 Skills Marketplace 找**降低 AI 人机味**的 skill 并安装
- [ ] 探索 **JSON Canvas skill**（Obsidian CEO 出品）

## 内容摘要 · Summary

### 问题定义：知识囤积 vs. 知识管理

大多数人用笔记软件做的是"知识囤积"——东西收藏了、记了，却很少有二次利用的机会。作者在用 Notion 时有这个痛点，转向 Obsidian 并接入 AI 后，才真正打通了输入到输出的链路。

### 工具栈（比喻为烹饪）

- **锅**（容器）：Obsidian
- **食材**：导入的笔记、划线、文字
- **大厨**（模型）：Codex、Claude Code 或其他模型
- **菜谱**（技能指南）：Skills 文档，在 VS Code 中与 AI 协作写成
- **调味料**：Obsidian 插件（提效工具）

### 场景一：读书笔记自动化

作者主要用 **Apple Books** 看书并划线，Obsidian 有插件可直接导入 Apple Books 的划线内容，并支持自定义导入模板（日期、原文摘抄、原文超链接）。导入后，在 Obsidian 中通过 Terminal 插件调出 Codex，让它用读书整理 Skill 处理笔记，自动生成结构化文档。

附加功能：Skill 中设置了**术语卡**逻辑——遇到关键概念（如"机会成本"）时，AI 会单独抽出并解释，持续拓宽知识边界。

### 场景二：碎片想法 → 可发布内容

作者在 iPhone 主页设置了 Daily Notes 快捷方式，有想法时直接语音输入，乱七八糟也没关系，先捉住想法。坐下来后，通过 Terminal 调出 Codex，使用 `write-article` Skill，将口述稿整理成可发布的文章结构。

关键逻辑：**不让 AI 从零代写，而是以自己的观点为原料，让 AI 做结构化整理**。同时叠加了一个从 Skills Marketplace 找到的"降低人机味"Skill，最终输出质量可达预期的 80%。

可选：用 **JSON Canvas Skill**（Obsidian CEO 创作）将脚本梳理为思维导图，适合不想逐字逐句照稿念的场景。

## 参考资源 · References

- Obsidian Apple Books 插件（插件市场搜索 "Apple Books"）
- JSON Canvas Skill（Obsidian CEO kepano 出品）
- Skills Marketplace（含降低 AI 人机味的 skill）
- Obsidian CLI（新工具，可节省 token）
