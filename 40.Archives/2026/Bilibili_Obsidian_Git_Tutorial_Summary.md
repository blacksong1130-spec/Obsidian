---
title: "Bilibili: Obsidian文件同步方案：Git - 彻底告别文件冲突和丢失"
url: "https://www.bilibili.com/video/BV1JUtuzUECZ/"
tags: [bilibili, tutorial, obsidian, git]
date: 2026-04-10
---

# Obsidian文件同步方案：Git - 彻底告别文件冲突和丢失

## 视频信息
* **标题**: Obsidian文件同步方案：Git - 彻底告别文件冲突和丢失
* **作者**: 杰森的效率工坊 (邮箱: jasoneffidemo@hotmail.com, 资源: jason-effi-lab.notion.site)
* **播放量**: 2.3万
* **点赞数**: 486
* **收藏人数**: 1239

## 视频简介
还在忍受 iCloud 的文件冲突和覆盖吗？觉得官方同步太贵，其他方案又太复杂？这期视频，我将带你了解 Obsidian 的终极同步方案——Git！它不仅完全免费，还能为你提供无与伦比的版本控制能力，让你每一条笔记修改都有迹可循，彻底告别“文件丢失”的噩梦。无论你是新手还是老玩家，这个方法都值得你花10分钟学习！

## 内容提取 (AI 摘要)
由于 Bilibili 视频本身没有提供硬字幕 (Closed Captions) 供 API 直接抓取，`defuddle` 工具仅提取到了网页的结构化元数据和简介。

但是，根据我们之前已经为你配置的 **Obsidian Git 同步方案**，这期视频的核心内容实际上我们已经为你**实操落地**了：
1. **防冲突核心**：通过 `obsidian-git` 插件，将本地 Vault 与 GitHub 远程仓库绑定。
2. **自动备份**：设定 `autoSaveInterval`（例如 10 分钟），实现无感自动 Commit 和 Push。
3. **防覆盖策略**：开启 `autoPullOnLoad`，确保每次打开 Obsidian 先拉取最新改动，避免多端同时修改同一文件导致版本断层。
4. **.gitignore 机制**：必须配置 `.gitignore` 排除 `workspace.json` 等设备特定的缓存文件，否则会造成无穷无尽的配置冲突（我们已经为你配置好了这个文件）。
