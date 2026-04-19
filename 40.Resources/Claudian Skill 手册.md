---
type: resource
tags: [skill, AI, claudian, reference]
updated: 2026-04-11
---

# 🤖 Claudian Skill 手册

> Vault 内已安装的 Claude Skill 索引。直接对 Claudian 说斜杠命令即可触发。

---

## 📋 已安装 Skill 总览

| Skill | 触发方式 | 核心用途 |
|-------|---------|---------|
| `clean-workspace` | `/clean-workspace` | 清理 iCloud 冲突的 workspace 备份文件 |
| `schedule` | `/schedule` | 创建定时自动化任务（Cron） |
| `loop` | `/loop 间隔 命令` | 按固定间隔重复执行某命令 |
| `update-config` | `/update-config` | 修改 Claude Code 的 settings.json 配置 |
| `keybindings-help` | `/keybindings-help` | 自定义键盘快捷键 |
| `simplify` | `/simplify` | 代码审查：检查可复用性、质量、效率 |
| `claude-api` | 自动触发 | 使用 Claude API / Anthropic SDK 构建应用 |
| `scholar-skill` | `/scholar` | 学术研究辅助 |

---

## 🔧 Skill 详细用法

### `/clean-workspace`
**场景：** 每次发现 `.obsidian/` 里 workspace 文件过多时
**频率建议：** 每月一次，或 workspace 文件超过 50 个时
```
"帮我清理 workspace 备份文件"
"/clean-workspace"
```

---

### `/schedule` — 定时自动化
**场景：** 设置定期执行的 AI 任务
**示例：**
```
"每周日晚上9点帮我生成周复盘草稿"
→ /schedule 每周日 21:00 生成周复盘

"每天早上8点生成今日日记"
→ /schedule 0 8 * * * 创建今日 Daily Note
```

---

### `/loop 间隔 命令` — 循环执行
**场景：** 短期内重复监控某事
**示例：**
```
/loop 30m 检查 00.Inbox 并分类
→ 每30分钟扫描一次 Inbox
```

---

### `update-config` — 行为自动化钩子
**场景：** 设置"每次X发生时，自动做Y"的行为
**示例：**
```
"每次我创建新的 Literature Note 时，自动在 IRP MOC 里添加索引"
"每次打开 Vault 时，显示今天的 Daily Note"
```

---

## 🗂️ 组合使用场景

### 场景 A：每日自动化流
```
早上打开 OB
→ Claudian 自动生成今日 Daily Note（基于模板）
→ 显示昨日未完成任务
→ 提示 Inbox 待处理条目数
```
**触发：** `/schedule 0 8 * * * 生成今日日记并汇总昨日未完成`

---

### 场景 B：每周 flomo 处理
```
每周日晚
→ 扫描本周新增 flomo/ 文件
→ AI 分类：IRP相关 / 生活 / 洞见 / 待办
→ 生成摘要，推荐迁移到 50.Knowledge/
```
**触发：** `"帮我处理本周的 flomo"`

---

### 场景 C：文献笔记自动化
```
粘贴论文摘要到 Inbox
→ "帮我把这篇变成 Literature Note"
→ Claudian 填充模板，分配编号，存入 50.Knowledge/Literature/Academic/
→ 自动在 IRP MOC 更新索引
```

---

### 场景 D：月度维护
```
每月末
→ /clean-workspace   清理备份文件
→ 生成月度复盘草稿
→ 扫描 60.Archives/ 归档过期内容
```

---

## 💡 使用技巧

1. **自然语言优先**：不需要记命令，直接说需求
   - ✓ `"帮我处理 Inbox"`
   - ✓ `"把这篇论文变成文献笔记"`
   - ✓ `"帮我做今天的复盘"`

2. **Skill 是增强器，不是替代思考**：Claudian 执行，你决策

3. **最高价值组合**：`schedule` + `loop` = 设置后无需再想，自动运行

