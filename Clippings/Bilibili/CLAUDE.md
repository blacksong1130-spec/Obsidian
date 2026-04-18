# Bilibili Clipper — Claudian Processing Instructions

When asked to "process", "clean", or "格式化" a note in this folder, apply the following rules:

## Workflow
1. Read the raw note from `00.Inbox/Bilibili/` (or current folder if already here)
2. Generate a **cleaned version** using the format below
3. Save cleaned version to `Clippings/Bilibili/` with the SAME filename
4. Move the original raw file to `60.Archives/Bilibili/raw/` (do NOT delete)

## Output Format

```markdown
---
title: "[original title]"
url: "[original url]"
bvid: "[bvid]"
author: "[author]"
upload_date: "[upload_date]"
processed: "[today's date]"
tags: [clippings, bilibili]
---

<iframe ...> [keep original embed] </iframe>

## 速览 · TL;DR
> [1-2句话：这个视频讲了什么，核心价值是什么]

## 关键洞见 · Key Insights
- **[洞见1]**: [1句话说清楚]
- **[洞见2]**: [1句话说清楚]
- **[洞见3]**: [1句话说清楚]
(最多5条，必须是真正的洞见，不是复述)

## 立即行动 · Action Items
- [ ] [具体可执行的下一步]
- [ ] [工具/资源/链接]
(只写真正可操作的，没有就留空)

## 内容摘要 · Summary
(按章节结构，去除所有时间戳，合并相关句子成段落，保留核心信息)

### [章节标题1]
[合并后的段落文字，没有`时间戳`标注]

### [章节标题2]
[...]

## 参考资源 · References
- [任何提到的工具、链接、GitHub等]
```

## Rules
- **Remove all inline timestamps** like `` `00:00` `` from the summary body
- **Chapter headings** from the original can be kept, but remove their timestamp too
- **No fluff**: do not pad the summary, keep it dense and useful
- **Language**: keep Chinese if original is Chinese; translate if requested
- **Frontmatter**: preserve all original fields, add `processed` date
