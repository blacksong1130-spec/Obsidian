---
tags: [IRP, gap-analysis, review, v12]
date: 2026-05-03
version: v12
---

# IRP Proposal — 差距分析 & 已完成操作
## Gap Analysis Report + Actions Taken (2026-05-03)

> **对照来源：** Unit Brief（官方要求）+ 导师4月8日反馈 + NotebookLM 180源研究 + 官方IRP Report Template
> **备份位置：** `07_草稿备份/【03】IRP Proposal (Final Submission)_backup_2026-05-03.md`
> **当前版本：** v12

---

## ✅ 已完成的修改（v11 → v12）

| # | 修改内容 | 位置 | 来源要求 |
|---|---------|------|---------|
| 1 | 新增 Trend Wall Signals 完整章节（3张信号卡） | Section 2b(i) | Template 必须项 |
| 2 | Section 2 结论重构为模板标准格式（3大发现 + 3大趋势 + 关键空白） | Section 2d | Template 必须项 |
| 3 | 加入视觉研究板说明（知识链结构说明） | Section 2b | Template 必须项 |
| 4 | 新增 Folk Theories of Technology（Makhortykh 2022） | Section 3 | NotebookLM / 逻辑漏洞 |
| 5 | 加入生态脆弱性维度（Ecological Vulnerability axis） | Section 4 Preferable Future | 顶级研究者视角 |
| 6 | WEIRD 偏差声明大幅强化，含具体数据（Agapie 2024） | Section 5a | NotebookLM + Template |
| 7 | Section 6（Critique Documentation）重构为模板格式 | Section 6 | Template 格式要求 |
| 8 | Appendix G 全部4个 Mermaid xychart → 数据表格 | Appendix G1–G4 | PDF渲染可靠性 |
| 9 | 新增 Appendix H — Trend Wall Signals（完整3张信号卡） | 文档末尾 | Template Appendix B 要求 |
| 10 | 目录 + 版本号更新（v11→v12，Appendix H 加入目录） | 文件头 / 目录 | 格式 |

---

## 🔴 仍需你处理的事项（AI无法代劳）

### 1. 必须补充：Section 6 展览照片
**问题：** 模板明确要求 "photographs of your display at the Critique exhibition" ——这必须是真实照片。
**你的操作：** 把4月14日展览的任何照片插入 Section 6，格式：`![[展览照片.jpg]]`
**照片存放地：** `04_导师反馈/Attachments/` 或 `06_展览存档/`

### 2. 必须补充：Appendix C Ethics Checklist 实际表单
**问题：** 模板要求附上 Ethics Checklist 表单的实际答案（Google Form填写结果），而非仅有框架描述。
**你的操作：** 把你提交给导师的 Ethics Checklist 表单的副本/截图 粘贴到 Appendix E，或者独立添加 Appendix I。
**格式：** 简单把表格答案复制进来即可。

### 3. 必须确认：Project_Plan.svg 时间线
**问题：** INDEX.md 里记录时间线需要确认到8月（不到10月）。
**你的操作：** 打开 `02_视觉资产/设计图稿/Project_Plan.svg`，确认时间线终点是8月。

### 4. 建议补充：After Glow 手绘草图
**问题：** 导师明确说过"直接画一张，很粗糙也行，拍照插进去"。
**重要性：** Appendix F 目前只有文字描述。有草图→变成真实原型研究；无草图→仍是纯理论。
**你的操作：** 画一张草图（纸上即可）→ 拍照 → 插入 `02_视觉资产/报告图表/` → 在 Appendix F 中引用。

### 5. 建议处理：Appendix A — Futures Wheel 图
**问题：** 文档里有 `📌` 注释说 Futures Wheel 如果没有 polished 版本就用 Excalidraw 重画。
**你的操作：** 检查 `02_视觉资产/报告图表/02 — Futures Wheel.png` 是否存在，如果有，图已嵌入。

---

## 🟡 逻辑架构分析（顶级研究者视角）

以下是整体逻辑架构的三个结构性问题，**已部分在 v12 中解决，但仍值得你理解：**

### 问题1：Affirmative Design 陷阱（最重要）⚠️
**现状：** The After Glow 本质上仍是一个更友善的健康追踪产品。它质疑的是追踪的方式（punitive vs. compassionate），而非追踪行为本身的必要性。

**Dunne & Raby 的框架**（你项目的理论基础）定义：
- **Affirmative Design（肯定性设计）**：在现有范式内改良
- **Critical Design（批判性设计）**：质疑范式本身

**v12 的处理方式：** 在 Section 4 加入了生态脆弱性维度，并说明 Scenario 3 的机制（内感受素养）是低基础设施的。这开始触及批判性问题——但如果审阅者追问："你真的在质疑追踪本身吗，还是只是追踪的设计语言？"，你需要有一个清晰的回答。

**建议备用答案：** "The After Glow 的3项批判性设计特征（Surveillance Blackout / Intentional Placebo Error / Programmed Physical Decay）正是为了质疑追踪本身的权威性——它是一个 probe，不是一个产品。它的成功指标是用户不再需要它（Scenario 3 的最终状态）。"

### 问题2：跨文化样本 vs. 跨文化声明
**现状：** 项目大量引用 Hara Hachi Bu、法式悖论、Itadakimasu 作为理论基础，但研究方法（Phase 1 访谈）只有 6–8 人，且主要来自 RCA 学生圈。

**v12 的处理方式：** 加入了 WEIRD 偏差声明（Agapie 2024），承诺至少2名非西方背景参与者。

**剩余风险：** 如果审阅者指出"你用日本和法国文化作为核心论据，却没有实际研究这些文化的参与者"——这仍然是一个弱点。**暂时无法完全解决（时间不够），但在 Appendix E 伦理框架里已有一定覆盖。**

### 问题3：Section 2 图表与文字分离
**现状：** 图表（SVG/PNG）和文字说明之间的关联有些松散——读者需要自己把图和论点连起来。

**建议（若有时间）：** 在每张图下加 1 句"这张图支持的核心论点"，例如：
> *"Figure 1 illustrates why this project's intervention point is 2026: the Pull toward interoceptive literacy exists (top), but the Weight of manual logging inertia (bottom-left) is stronger than the Push of OTC CGM technology alone (bottom-right) — creating a design opportunity window before engineering-led paradigms dominate."*

---

## 📋 提交前最终检查清单（更新版）

- [ ] **插入展览照片** → Section 6（必须）
- [ ] **附上 Ethics Checklist 表单实际答案** → Appendix E/I
- [ ] **确认 Project_Plan.svg 时间线到8月**（不到10月）
- [ ] **插入 After Glow 手绘草图** → Appendix F（强烈建议）
- [ ] **导出 PDF，检查所有 SVG/图片正确嵌入** 
- [ ] **Moodle 提交 + 邮件发给 peer reviewer**（5月5日 09:00）
- [ ] **写 Peer Review 反馈**（5月8日 09:00）

---

## 🔧 Mermaid 问题的彻底解决方案

**问题本质：** Obsidian 的 Mermaid `xychart-beta` 类型在导出 PDF 时经常渲染失败（空白或乱码）。

**v12 的解决方式：** 所有4个 xychart-beta 图表（G1–G4）已替换为 Markdown 数据表格。表格在任何 PDF 导出中100%可靠渲染。

**如果你想要视觉图表（可选）：** 
1. 打开 [Flourish](https://flourish.studio/) 或 [Datawrapper](https://www.datawrapper.de/)（免费）
2. 用表格里的数据生成图表
3. 下载 PNG → 放入 `02_视觉资产/报告图表/` → 在 Appendix G 引用

---

*生成日期：2026-05-03 | 由 Claudian 基于全部参考文档综合分析*
