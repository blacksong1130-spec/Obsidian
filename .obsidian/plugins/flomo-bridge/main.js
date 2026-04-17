/*
THIS IS A GENERATED FILE
*/
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => FlomoSyncPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");

// src/settings.ts
var import_obsidian2 = require("obsidian");

// src/flomoClient.ts
var import_obsidian = require("obsidian");
var SIGN_SECRET = "dbbc3dd73364b4084c3a69346e0ce2b2";
var BASE_URL = "https://flomoapp.com/api/v1";
var LIMIT = 200;
var FlomoApiError = class extends Error {
  constructor(message, code, status) {
    super(message);
    this.code = code;
    this.status = status;
    this.name = "FlomoApiError";
  }
};
function generateSign(params) {
  const sortedKeys = Object.keys(params).sort();
  const parts = [];
  for (const key of sortedKeys) {
    const value = params[key];
    if (value === null || value === void 0 || value === "")
      continue;
    if (Array.isArray(value)) {
      const filtered = value.filter((x) => x || x === 0).map((x) => String(x)).sort();
      for (const item of filtered) {
        parts.push(`${key}[]=${item}`);
      }
    } else {
      parts.push(`${key}=${value}`);
    }
  }
  const qs = parts.join("&");
  const signStr = qs + SIGN_SECRET;
  return simpleMD5(signStr);
}
function simpleMD5(str) {
  return md5(str);
}
function md5(input) {
  const hexChars = "0123456789abcdef";
  const s = [
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    7,
    12,
    17,
    22,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    5,
    9,
    14,
    20,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    4,
    11,
    16,
    23,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21,
    6,
    10,
    15,
    21
  ];
  const K = [];
  for (let i = 0; i < 64; i++) {
    K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
  }
  let a0 = 1732584193;
  let b0 = 4023233417;
  let c0 = 2562383102;
  let d0 = 271733878;
  const bytes = [];
  for (let i = 0; i < input.length; i++) {
    bytes.push(input.charCodeAt(i) & 255);
  }
  const originalLen = bytes.length * 8;
  bytes.push(128);
  while ((bytes.length * 8 + 64) % 512 !== 0) {
    bytes.push(0);
  }
  const lenLow = originalLen >>> 0;
  const lenHigh = Math.floor(originalLen / 4294967296) >>> 0;
  for (let i = 0; i < 4; i++) {
    bytes.push(lenLow >>> i * 8 & 255);
  }
  for (let i = 0; i < 4; i++) {
    bytes.push(lenHigh >>> i * 8 & 255);
  }
  for (let i = 0; i < bytes.length; i += 64) {
    const chunk = bytes.slice(i, i + 64);
    const M = [];
    for (let j = 0; j < 16; j++) {
      M[j] = chunk[j * 4] | chunk[j * 4 + 1] << 8 | chunk[j * 4 + 2] << 16 | chunk[j * 4 + 3] << 24;
    }
    let A = a0;
    let B = b0;
    let C = c0;
    let D = d0;
    for (let j = 0; j < 64; j++) {
      let F, g;
      if (j < 16) {
        F = B & C | ~B & D;
        g = j;
      } else if (j < 32) {
        F = D & B | ~D & C;
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        F = B ^ C ^ D;
        g = (3 * j + 5) % 16;
      } else {
        F = C ^ (B | ~D);
        g = 7 * j % 16;
      }
      const temp = D;
      D = C;
      C = B;
      B = B + leftRotate(A + F + K[j] + M[g], s[j]) >>> 0;
      A = temp;
    }
    a0 = a0 + A >>> 0;
    b0 = b0 + B >>> 0;
    c0 = c0 + C >>> 0;
    d0 = d0 + D >>> 0;
  }
  function leftRotate(x, c) {
    return (x << c | x >>> 32 - c) >>> 0;
  }
  function toHex(n) {
    const b02 = n & 255;
    const b1 = n >>> 8 & 255;
    const b2 = n >>> 16 & 255;
    const b3 = n >>> 24 & 255;
    function byteToHex(b) {
      return hexChars[b >>> 4 & 15] + hexChars[b & 15];
    }
    return byteToHex(b02) + byteToHex(b1) + byteToHex(b2) + byteToHex(b3);
  }
  return toHex(a0) + toHex(b0) + toHex(c0) + toHex(d0);
}
var FlomoClient = class {
  constructor(config) {
    let token = config.token.trim();
    if (token.toLowerCase().startsWith("bearer ")) {
      token = token.slice(7).trim();
    }
    this.token = token;
    this.debug = config.debugMode;
  }
  /** 构建请求参数 */
  buildParams(extra) {
    const params = {};
    for (const [k, v] of Object.entries(extra)) {
      params[k] = String(v);
    }
    params.timestamp = String(Math.floor(Date.now() / 1e3));
    params.api_key = "flomo_web";
    params.app_version = "4.0";
    params.platform = "web";
    params.webp = "1";
    params.sign = generateSign(params);
    return params;
  }
  /** 构建请求头 */
  buildHeaders() {
    return {
      accept: "application/json, text/plain, */*",
      authorization: `Bearer ${this.token}`,
      origin: "https://v.flomoapp.com",
      referer: "https://v.flomoapp.com/",
      "device-id": "503b6439-1884-443d-b04e-0828bf9f138f",
      "device-model": "Chrome",
      platform: "Web",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    };
  }
  /** 日志输出 */
  log(...args) {
    if (this.debug) {
      console.log("[FlomoSync]", ...args);
    }
  }
  /**
   * 拉取一页 memo
   *
   * @param latestUpdatedAt - 上次同步的最大 updated_at 时间戳
   * @param latestSlug - 上次最后一条 memo 的 slug
   * @returns memo 列表
   */
  async fetchMemosPage(latestUpdatedAt, latestSlug) {
    var _a, _b, _c, _d;
    const params = this.buildParams({
      limit: LIMIT,
      // flomo 首次全量请求使用空字符串，而不是 "0"
      latest_updated_at: latestUpdatedAt > 0 ? latestUpdatedAt : "",
      latest_slug: latestSlug != null ? latestSlug : "",
      tz: "8:0"
    });
    const orderedKeys = ["limit", "latest_updated_at", "latest_slug", "tz", "timestamp", "api_key", "app_version", "platform", "webp", "sign"];
    const queryString = orderedKeys.map((k) => `${k}=${params[k]}`).join("&");
    const url = `${BASE_URL}/memo/updated/?${queryString}`;
    const signStrForDebug = Object.entries(params).filter(([k]) => k !== "sign").sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => `${k}=${v}`).join("&") + SIGN_SECRET;
    this.log("=== HTTP Request ===");
    this.log("URL:", url);
    this.log("Params:", params);
    this.log("Sign string for debug:", signStrForDebug);
    try {
      const response = await (0, import_obsidian.requestUrl)({
        url,
        method: "GET",
        headers: this.buildHeaders()
      });
      if (response.status !== 200) {
        throw new FlomoApiError(`HTTP ${response.status}`, void 0, response.status);
      }
      const body = response.json;
      this.log("=== HTTP Response ===");
      this.log("Status:", response.status);
      this.log("Body:", body);
      if (body.code !== 0) {
        if (body.code === -1 && ((_a = body.message) == null ? void 0 : _a.includes("sign"))) {
          this.log("!!! SIGN ERROR !!!");
          const sortedEntries = Object.entries(params).sort(([a], [b]) => a.localeCompare(b));
          this.log("Expected sign base:", sortedEntries.filter(([k]) => k !== "sign").map(([k, v]) => `${k}=${v}`).join("&") + SIGN_SECRET);
          throw new FlomoApiError("\u7B7E\u540D\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5 token \u662F\u5426\u6709\u6548", body.code);
        }
        if (((_b = body.message) == null ? void 0 : _b.includes("\u767B\u5F55")) || ((_c = body.message) == null ? void 0 : _c.includes("auth"))) {
          throw new FlomoApiError("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6 token", body.code, 401);
        }
        throw new FlomoApiError(body.message || "API \u9519\u8BEF", body.code);
      }
      return body.data || [];
    } catch (error) {
      if (error instanceof FlomoApiError) {
        throw error;
      }
      const err = error;
      if ((_d = err.message) == null ? void 0 : _d.includes("Request")) {
        throw new FlomoApiError("\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5", void 0, 0);
      }
      throw new FlomoApiError(`\u8BF7\u6C42\u5931\u8D25: ${err.message}`);
    }
  }
  /**
   * 分页获取所有 memo
   *
   * @param afterTs - 起始 updated_at 时间戳（含），0 表示从最早开始
   * @param onPage - 每页回调，用于进度显示
   * @returns 所有 memo 的异步生成器
   */
  async *iterMemos(afterTs = 0, onPage) {
    let latestUpdatedAt = afterTs;
    let latestSlug = "";
    let page = 1;
    while (true) {
      this.log(`Fetching page ${page}...`);
      const items = await this.fetchMemosPage(latestUpdatedAt, latestSlug);
      if (onPage) {
        onPage(page, items.length, { updatedAt: latestUpdatedAt, slug: latestSlug });
      }
      if (!items || items.length === 0) {
        this.log("No more items");
        break;
      }
      yield items;
      if (items.length < LIMIT) {
        break;
      }
      const last = items[items.length - 1];
      const lastUpdatedAt = last.updated_at;
      if (typeof lastUpdatedAt === "string") {
        latestUpdatedAt = Math.floor(new Date(lastUpdatedAt).getTime() / 1e3);
      } else {
        latestUpdatedAt = Math.floor(Number(lastUpdatedAt));
      }
      latestSlug = last.slug;
      page++;
      await sleep(300);
    }
  }
  /**
   * 下载附件
   *
   * @param url - 附件 URL
   * @returns ArrayBuffer 或 null（下载失败）
   */
  async downloadAttachment(url) {
    try {
      const response = await (0, import_obsidian.requestUrl)({
        url,
        method: "GET",
        headers: {
          referer: "https://v.flomoapp.com/"
        }
      });
      if (response.status !== 200) {
        return null;
      }
      return response.arrayBuffer;
    } catch (error) {
      this.log("Download failed:", error);
      return null;
    }
  }
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/tooltip.ts
var TooltipManager = class {
  constructor() {
    this.tooltipEl = null;
    this.showTimer = null;
    this.activeTarget = null;
  }
  show(target, text, delayMs = 100) {
    this.clearShowTimer();
    this.activeTarget = target;
    this.showTimer = window.setTimeout(() => {
      if (this.activeTarget !== target) {
        return;
      }
      this.ensureTooltip();
      if (!this.tooltipEl) {
        return;
      }
      this.tooltipEl.textContent = text;
      this.tooltipEl.classList.add("is-visible");
      this.positionTooltip(target);
    }, delayMs);
  }
  hide() {
    this.clearShowTimer();
    this.activeTarget = null;
    if (this.tooltipEl) {
      this.tooltipEl.classList.remove("is-visible");
    }
  }
  ensureTooltip() {
    if (this.tooltipEl) {
      return;
    }
    const tooltipEl = document.createElement("div");
    tooltipEl.className = "flomo-tooltip";
    document.body.appendChild(tooltipEl);
    this.tooltipEl = tooltipEl;
  }
  positionTooltip(target) {
    if (!this.tooltipEl) {
      return;
    }
    const targetRect = target.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();
    const gap = 8;
    const viewportPadding = 8;
    let top = targetRect.top - tooltipRect.height - gap;
    if (top < viewportPadding) {
      top = targetRect.bottom + gap;
    }
    let left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
    const maxLeft = window.innerWidth - tooltipRect.width - viewportPadding;
    if (left < viewportPadding) {
      left = viewportPadding;
    } else if (left > maxLeft) {
      left = maxLeft;
    }
    this.tooltipEl.style.top = `${Math.round(top)}px`;
    this.tooltipEl.style.left = `${Math.round(left)}px`;
  }
  clearShowTimer() {
    if (this.showTimer !== null) {
      window.clearTimeout(this.showTimer);
      this.showTimer = null;
    }
  }
};
var sharedTooltipManager = null;
function getTooltipManager() {
  if (!sharedTooltipManager) {
    sharedTooltipManager = new TooltipManager();
  }
  return sharedTooltipManager;
}

// src/settings.ts
var DEFAULT_SETTINGS = {
  token: "",
  targetDir: "flomo",
  downloadAttachments: true,
  syncInterval: 60,
  debugMode: false,
  // 游标数据（内部使用）
  cursor: {
    latest_updated_at: 0,
    latest_slug: ""
  },
  // 上次同步统计
  lastSyncStats: void 0
};
var _FlomoSyncSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.tabs = [
      { id: "overview", label: "\u6982\u89C8", icon: "layout-dashboard" },
      { id: "config", label: "\u914D\u7F6E", icon: "settings" },
      { id: "actions", label: "\u64CD\u4F5C", icon: "zap" }
    ];
    this.currentTab = "overview";
    this.contentContainer = null;
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    this.addSettingsStyles(containerEl);
    containerEl.createEl("h2", {
      text: "Flomo Bridge \u8BBE\u7F6E",
      cls: "flomo-settings-title"
    });
    this.renderTabNav(containerEl);
    this.contentContainer = containerEl.createDiv({ cls: "flomo-tab-content" });
    this.renderCurrentTab();
  }
  /**
   * 添加设置面板样式
   */
  addSettingsStyles(containerEl) {
    containerEl.addClass("flomo-settings-container");
    const styleId = "flomo-settings-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = this.getSettingsStyles();
      document.head.appendChild(style);
    }
  }
  /**
   * 获取设置面板样式
   */
  getSettingsStyles() {
    return `
      /* \u8BBE\u7F6E\u9762\u677F\u5BB9\u5668 */
      .flomo-settings-container {
        padding-bottom: 40px;
      }

      .flomo-settings-title {
        margin-bottom: 16px;
      }

      /* Tab \u5BFC\u822A */
      .flomo-tab-nav {
        display: flex;
        gap: 4px;
        border-bottom: 2px solid var(--background-modifier-border);
        margin-bottom: 20px;
        padding-bottom: 0;
      }

      .flomo-tab-button {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 16px;
        border: none;
        background: transparent;
        color: var(--text-muted);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        margin-bottom: -2px;
        transition: all 0.2s ease;
        border-radius: 4px 4px 0 0;
      }

      .flomo-tab-button:hover {
        color: var(--text-normal);
        background: var(--background-modifier-hover);
      }

      .flomo-tab-button.active {
        color: var(--text-accent);
        border-bottom-color: var(--text-accent);
        background: var(--background-modifier-hover);
      }

      .flomo-tab-button .flomo-tab-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
      }

      .flomo-tab-button .flomo-tab-icon svg {
        width: 16px;
        height: 16px;
      }

      /* Tab \u5185\u5BB9\u533A\u57DF */
      .flomo-tab-content {
        animation: fadeIn 0.2s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* \u5361\u7247\u5BB9\u5668 */
      .flomo-settings-card {
        background: var(--background-secondary);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
        border: 1px solid var(--background-modifier-border);
      }

      .flomo-settings-card-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--background-modifier-border);
      }

      .flomo-settings-card-header h3 {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--text-normal);
      }

      .flomo-settings-card-content {
        /* \u5361\u7247\u5185\u5BB9\u533A\u57DF */
      }

      .flomo-settings-card.danger {
        border-color: var(--text-error);
        background: var(--background-secondary);
      }

      .flomo-settings-card.danger .flomo-settings-card-header {
        border-bottom-color: rgba(var(--text-error-rgb, 248, 81, 73), 0.3);
      }

      .flomo-settings-card.danger .flomo-settings-card-header h3 {
        color: var(--text-error);
      }

      /* \u72B6\u6001\u5361\u7247\u7F51\u683C */
      .flomo-status-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
        margin-bottom: 16px;
      }

      .flomo-status-card {
        background: var(--background-primary);
        border-radius: 6px;
        padding: 12px;
        text-align: center;
        border: 1px solid var(--background-modifier-border);
      }

      .flomo-status-card-title {
        font-size: 11px;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
      }

      .flomo-status-card-value {
        font-size: 18px;
        font-weight: 600;
        color: var(--text-normal);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }

      .flomo-status-card-value .status-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
      }

      .flomo-status-card-value .status-icon svg {
        width: 18px;
        height: 18px;
      }

      .flomo-status-card-value.status-connected {
        color: var(--text-success, #2ea043);
      }

      .flomo-status-card-value.status-disconnected {
        color: var(--text-muted);
      }

      .flomo-status-card-value.status-syncing {
        color: var(--text-accent, #58a6ff);
      }

      .flomo-status-card-value.status-error {
        color: var(--text-error, #f85149);
      }

      .flomo-status-card-value.status-pending {
        color: var(--text-warning, #d29922);
      }

      .flomo-status-card-action {
        margin-top: 8px;
        font-size: 11px;
        color: var(--text-muted);
      }

      /* \u6982\u89C8\u9875 - \u8FF7\u4F60\u70ED\u529B\u56FE */
      .flomo-overview-heatmap-mini {
        margin-top: 12px;
      }

      .flomo-overview-heatmap-mini h4 {
        font-size: 12px;
        color: var(--text-muted);
        margin-bottom: 8px;
        font-weight: 500;
      }

      .flomo-heatmap-mini-grid {
        display: flex;
        gap: 3px;
      }

      .flomo-heatmap-mini-day {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        background: var(--background-modifier-border);
      }

      .flomo-heatmap-mini-day.has-data {
        background: var(--text-accent);
      }

      /* \u6700\u8FD1\u540C\u6B65\u8BB0\u5F55 */
      .flomo-recent-sync-list {
        margin-top: 12px;
      }

      .flomo-sync-list-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 12px;
        background: var(--background-primary);
        border-radius: 6px;
        margin-bottom: 8px;
        font-size: 12px;
      }

      .flomo-sync-list-item:last-child {
        margin-bottom: 0;
      }

      .flomo-sync-list-item .sync-time {
        color: var(--text-muted);
        min-width: 80px;
      }

      .flomo-sync-list-item .sync-status {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .flomo-sync-list-item .sync-stats {
        margin-left: auto;
        color: var(--text-muted);
      }

      /* \u914D\u7F6E\u9875 */
      .flomo-config-section {
        margin-bottom: 16px;
      }

      .flomo-config-section:last-child {
        margin-bottom: 0;
      }

      .flomo-config-collapsible {
        border: 1px solid var(--background-modifier-border);
        border-radius: 6px;
        overflow: hidden;
      }

      .flomo-config-collapsible-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        background: var(--background-primary);
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
      }

      .flomo-config-collapsible-header:hover {
        background: var(--background-modifier-hover);
      }

      .flomo-config-collapsible-content {
        padding: 12px;
        border-top: 1px solid var(--background-modifier-border);
      }

      .flomo-config-collapsible-content.hidden {
        display: none;
      }

      .flomo-token-help-block {
        margin-top: 6px;
      }

      .flomo-token-help-steps {
        font-size: 12px;
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 6px;
      }

      .flomo-token-help-steps a {
        color: var(--text-accent);
        text-decoration: underline;
      }

      .flomo-token-demo-collapsible {
        border: none;
        background: transparent;
      }

      .flomo-token-demo-collapsible .flomo-config-collapsible-header {
        justify-content: flex-start;
        gap: 6px;
        padding: 4px 0;
        background: transparent;
        border: none;
        color: var(--text-muted);
        font-size: 12px;
        font-weight: 500;
      }

      .flomo-token-demo-collapsible .flomo-config-collapsible-header:hover {
        background: transparent;
        color: var(--text-normal);
      }

      .flomo-token-demo-collapsible .flomo-config-collapsible-header:focus-visible {
        outline: 2px solid var(--text-accent);
        outline-offset: 2px;
        border-radius: 4px;
      }

      .flomo-token-demo-header-label {
        display: inline-flex;
        align-items: center;
        gap: 5px;
      }

      .flomo-token-demo-chevron {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        color: var(--text-faint);
        transition: transform 0.2s ease;
      }

      .flomo-token-demo-chevron svg {
        width: 12px;
        height: 12px;
      }

      .flomo-token-demo-collapsible.is-open .flomo-token-demo-chevron {
        transform: rotate(90deg);
      }

      .flomo-token-demo-collapsible.is-open .flomo-config-collapsible-header {
        color: var(--text-normal);
      }

      .flomo-token-demo-content {
        padding: 8px 0 0;
        border-top: none;
      }

      .flomo-token-demo-image-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 8px;
        border: 1px solid var(--background-modifier-border);
        background: var(--background-primary);
      }

      .flomo-token-demo-image {
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto;
      }

      .flomo-token-demo-fallback {
        display: inline-block;
        margin-top: 8px;
        font-size: 12px;
      }

      /* \u64CD\u4F5C\u9875 */
      .flomo-action-buttons {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .flomo-action-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: var(--background-primary);
        border-radius: 6px;
      }

      .flomo-action-info {
        flex: 1;
      }

      .flomo-action-info h4 {
        margin: 0 0 4px 0;
        font-size: 13px;
        font-weight: 600;
      }

      .flomo-action-info p {
        margin: 0;
        font-size: 12px;
        color: var(--text-muted);
      }

      .flomo-sync-progress {
        margin-top: 12px;
        padding: 12px;
        background: var(--background-primary);
        border-radius: 6px;
      }

      .flomo-progress-bar {
        height: 4px;
        background: var(--background-modifier-border);
        border-radius: 2px;
        overflow: hidden;
        margin-top: 8px;
      }

      .flomo-progress-bar-fill {
        height: 100%;
        background: var(--text-accent);
        border-radius: 2px;
        transition: width 0.3s ease;
      }

      /* \u5371\u9669\u533A\u57DF */
      .flomo-danger-zone {
        margin-top: 16px;
      }

      .flomo-danger-zone-title {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text-error);
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 12px;
      }

      /* \u7EDF\u8BA1\u7F51\u683C */
      .flomo-stats-grid-detailed {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        margin-bottom: 16px;
      }

      .flomo-stats-card {
        background: var(--background-primary);
        border-radius: 6px;
        padding: 16px 12px;
        text-align: center;
        border: 1px solid var(--background-modifier-border);
      }

      .flomo-stats-card-value {
        font-size: 24px;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        font-family: var(--font-monospace);
        line-height: 1.2;
      }

      .flomo-stats-card-label {
        font-size: 11px;
        color: var(--text-muted);
        margin-top: 4px;
      }

      .flomo-stats-card.created .flomo-stats-card-value {
        color: var(--text-success, #2ea043);
      }

      .flomo-stats-card.updated .flomo-stats-card-value {
        color: var(--text-accent, #58a6ff);
      }

      .flomo-stats-card.skipped .flomo-stats-card-value {
        color: var(--text-muted);
      }

      .flomo-stats-card.failed .flomo-stats-card-value {
        color: var(--text-error, #f85149);
      }

      /* \u7A7A\u72B6\u6001 */
      .flomo-empty-state {
        text-align: center;
        padding: 32px 16px;
        color: var(--text-muted);
      }

      .flomo-empty-state-icon {
        margin-bottom: 12px;
        opacity: 0.5;
      }

      .flomo-empty-state-text {
        font-size: 13px;
      }

      /* \u8BBE\u7F6E\u9879\u7D27\u51D1\u6837\u5F0F */
      .flomo-settings-card .setting-item {
        padding: 8px 0;
      }

      .flomo-settings-card .setting-item:first-child {
        padding-top: 0;
      }

      .flomo-settings-card .setting-item:last-child {
        padding-bottom: 0;
      }

      .flomo-settings-card .setting-item-description {
        font-size: 11px;
      }

      /* \u9A8C\u8BC1\u72B6\u6001\u6307\u793A\u5668 */
      .flomo-validation-status {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        margin-left: 8px;
      }

      .flomo-validation-status.valid {
        color: var(--text-success);
      }

      .flomo-validation-status.invalid {
        color: var(--text-error);
      }

      .flomo-validation-status .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
      }

      /* \u70ED\u529B\u56FE\u5934\u90E8\u7EDF\u8BA1 */
      .flomo-heatmap-header-stats {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
      }

      .flomo-heatmap-stat-item {
        color: var(--text-muted);
      }

      .flomo-heatmap-stat-separator {
        color: var(--text-faint);
      }
    `;
  }
  /**
   * 渲染 Tab 导航
   */
  renderTabNav(containerEl) {
    const nav = containerEl.createDiv({ cls: "flomo-tab-nav" });
    for (const tab of this.tabs) {
      const button = nav.createEl("button", {
        cls: `flomo-tab-button${tab.id === this.currentTab ? " active" : ""}`
      });
      const iconSpan = button.createSpan({ cls: "flomo-tab-icon" });
      (0, import_obsidian2.setIcon)(iconSpan, tab.icon);
      button.createSpan({ text: tab.label });
      button.addEventListener("click", () => {
        this.switchTab(tab.id);
      });
    }
  }
  /**
   * 切换 Tab
   */
  switchTab(tabId) {
    if (tabId === this.currentTab)
      return;
    this.currentTab = tabId;
    const buttons = this.containerEl.querySelectorAll(".flomo-tab-button");
    buttons.forEach((btn, index) => {
      var _a;
      if (((_a = this.tabs[index]) == null ? void 0 : _a.id) === tabId) {
        btn.addClass("active");
      } else {
        btn.removeClass("active");
      }
    });
    this.renderCurrentTab();
  }
  /**
   * 渲染当前 Tab 内容
   */
  renderCurrentTab() {
    if (!this.contentContainer)
      return;
    this.contentContainer.empty();
    switch (this.currentTab) {
      case "overview":
        this.renderOverviewTab(this.contentContainer);
        break;
      case "config":
        this.renderConfigTab(this.contentContainer);
        break;
      case "actions":
        this.renderActionTab(this.contentContainer);
        break;
    }
  }
  /**
   * 渲染概览 Tab
   */
  renderOverviewTab(container) {
    const lastStats = this.plugin.settings.lastSyncStats;
    const cursor = this.plugin.settings.cursor;
    const hasSyncHistory = cursor.latest_updated_at > 0;
    if (!hasSyncHistory) {
      const emptyState = container.createDiv({ cls: "flomo-empty-state" });
      const iconEl = emptyState.createDiv({ cls: "flomo-empty-state-icon" });
      (0, import_obsidian2.setIcon)(iconEl, "cloud");
      emptyState.createDiv({
        cls: "flomo-empty-state-text",
        text: "\u6B22\u8FCE\u4F7F\u7528 Flomo Bridge\uFF01\u8BF7\u5148\u5728\u300C\u914D\u7F6E\u300DTab \u8BBE\u7F6E Token\uFF0C\u7136\u540E\u5728\u300C\u64CD\u4F5C\u300DTab \u5F00\u59CB\u540C\u6B65\u3002"
      });
      return;
    }
    const statusCard = container.createDiv({ cls: "flomo-settings-card" });
    const statusHeader = statusCard.createDiv({ cls: "flomo-settings-card-header" });
    statusHeader.createEl("h3", { text: "\u540C\u6B65\u72B6\u6001" });
    const statusGrid = statusCard.createDiv({ cls: "flomo-status-grid" });
    const hasToken = !!this.plugin.settings.token;
    const isValidated = this.plugin.settings.tokenValidated;
    let connectionStatusClass;
    let connectionIconName;
    let connectionText;
    if (!hasToken) {
      connectionStatusClass = "status-disconnected";
      connectionIconName = "unlink";
      connectionText = "\u672A\u914D\u7F6E";
    } else if (!isValidated) {
      connectionStatusClass = "status-pending";
      connectionIconName = "link";
      connectionText = "\u5F85\u9A8C\u8BC1";
    } else {
      connectionStatusClass = "status-connected";
      connectionIconName = "link";
      connectionText = "\u5DF2\u8FDE\u63A5";
    }
    const connectionCard = statusGrid.createDiv({ cls: "flomo-status-card" });
    connectionCard.createDiv({ cls: "flomo-status-card-title", text: "\u8FDE\u63A5\u72B6\u6001" });
    const connectionValue = connectionCard.createDiv({
      cls: `flomo-status-card-value ${connectionStatusClass}`
    });
    const connectionIcon = connectionValue.createSpan({ cls: "status-icon" });
    (0, import_obsidian2.setIcon)(connectionIcon, connectionIconName);
    connectionValue.appendText(connectionText);
    const syncCard = statusGrid.createDiv({ cls: "flomo-status-card" });
    syncCard.createDiv({ cls: "flomo-status-card-title", text: "\u540C\u6B65\u72B6\u6001" });
    const isSyncing = this.plugin.isSyncing;
    const syncValue = syncCard.createDiv({
      cls: `flomo-status-card-value ${isSyncing ? "status-syncing" : lastStats && lastStats.failed > 0 ? "status-error" : "status-connected"}`
    });
    const syncIcon = syncValue.createSpan({ cls: "status-icon" });
    if (isSyncing) {
      (0, import_obsidian2.setIcon)(syncIcon, "loader");
    } else if (lastStats && lastStats.failed > 0) {
      (0, import_obsidian2.setIcon)(syncIcon, "alert-circle");
    } else {
      (0, import_obsidian2.setIcon)(syncIcon, "check-circle");
    }
    syncValue.appendText(isSyncing ? "\u540C\u6B65\u4E2D" : lastStats && lastStats.failed > 0 ? "\u6709\u9519\u8BEF" : "\u6B63\u5E38");
    const totalCard = statusGrid.createDiv({ cls: "flomo-status-card" });
    totalCard.createDiv({ cls: "flomo-status-card-title", text: "\u672C\u5730\u8BB0\u5F55" });
    const totalValue = totalCard.createDiv({ cls: "flomo-status-card-value" });
    const totalCount = this.getLocalMemoCount();
    totalValue.appendText(String(totalCount));
    const lastSyncCard = statusGrid.createDiv({ cls: "flomo-status-card" });
    lastSyncCard.createDiv({ cls: "flomo-status-card-title", text: "\u4E0A\u6B21\u540C\u6B65" });
    const lastSyncValue = lastSyncCard.createDiv({ cls: "flomo-status-card-value" });
    const lastSyncTime = (lastStats == null ? void 0 : lastStats.timestamp) ? this.getRelativeTime(Math.floor(lastStats.timestamp / 1e3)) : "\u4ECE\u672A\u540C\u6B65";
    lastSyncValue.appendText(lastSyncTime);
    if (lastStats) {
      const statsCard = container.createDiv({ cls: "flomo-settings-card" });
      const statsHeader = statsCard.createDiv({ cls: "flomo-settings-card-header" });
      const statsIcon = statsHeader.createSpan();
      (0, import_obsidian2.setIcon)(statsIcon, "pie-chart");
      const hasNewContentStats = lastStats.newContent && lastStats.newContent.total > 0;
      statsHeader.createEl("h3", {
        text: hasNewContentStats ? "\u4E0A\u6B21\u540C\u6B65\u7EDF\u8BA1\uFF08\u771F\u6B63\u65B0\u589E\uFF09" : "\u4E0A\u6B21\u540C\u6B65\u7EDF\u8BA1"
      });
      const statsGrid = statsCard.createDiv({ cls: "flomo-stats-grid-detailed" });
      const displayStats = hasNewContentStats ? lastStats.newContent : lastStats;
      const createdCard = statsGrid.createDiv({ cls: "flomo-stats-card created" });
      createdCard.createDiv({ cls: "flomo-stats-card-value", text: String(displayStats.created) });
      createdCard.createDiv({ cls: "flomo-stats-card-label", text: "\u65B0\u589E" });
      const updatedCard = statsGrid.createDiv({ cls: "flomo-stats-card updated" });
      updatedCard.createDiv({ cls: "flomo-stats-card-value", text: String(displayStats.updated) });
      updatedCard.createDiv({ cls: "flomo-stats-card-label", text: "\u66F4\u65B0" });
      const skippedCard = statsGrid.createDiv({ cls: "flomo-stats-card skipped" });
      skippedCard.createDiv({ cls: "flomo-stats-card-value", text: String(displayStats.skipped) });
      skippedCard.createDiv({ cls: "flomo-stats-card-label", text: "\u8DF3\u8FC7" });
      const failedCard = statsGrid.createDiv({ cls: "flomo-stats-card failed" });
      failedCard.createDiv({ cls: "flomo-stats-card-value", text: String(lastStats.failed) });
      failedCard.createDiv({ cls: "flomo-stats-card-label", text: "\u5931\u8D25" });
      const footer = statsCard.createDiv({
        cls: "flomo-stats-footer",
        text: `\u603B\u8BA1: ${lastStats.total} \u6761 | \u8017\u65F6: ${lastStats.duration}\u79D2 | ${new Date(lastStats.timestamp).toLocaleString("zh-CN")}`
      });
      footer.style.marginTop = "12px";
      footer.style.fontSize = "12px";
      footer.style.color = "var(--text-muted)";
      if (hasNewContentStats) {
        const bz = lastStats.bufferZone;
        let noteText = `* \u5B9E\u9645\u5904\u7406\u4E86 ${lastStats.created} \u65B0\u589E / ${lastStats.updated} \u66F4\u65B0\uFF08\u542B\u5BB9\u9519\u7F13\u51B2\u533A\u5185\u5BB9\uFF09`;
        if (bz && bz.total > 0) {
          noteText += `\uFF0C\u5176\u4E2D\u5BB9\u9519\u533A\u6709 ${bz.created} \u65B0\u589E / ${bz.updated} \u66F4\u65B0`;
        }
        const noteEl = statsCard.createDiv({ cls: "flomo-stats-note", text: noteText });
        noteEl.style.marginTop = "8px";
        noteEl.style.fontSize = "11px";
        noteEl.style.color = "var(--text-faint)";
        noteEl.style.fontStyle = "italic";
      }
    }
    this.renderContributionHeatmap(container);
  }
  /**
   * 渲染配置 Tab
   */
  renderConfigTab(container) {
    const connectionCard = container.createDiv({ cls: "flomo-settings-card" });
    const connectionHeader = connectionCard.createDiv({ cls: "flomo-settings-card-header" });
    const connectionIcon = connectionHeader.createSpan();
    (0, import_obsidian2.setIcon)(connectionIcon, "link");
    connectionHeader.createEl("h3", { text: "\u8FDE\u63A5\u914D\u7F6E" });
    new import_obsidian2.Setting(connectionCard).setName("Flomo Token").setDesc("\u7528\u4E8E\u8BBF\u95EE flomo API\uFF0C\u53EF\u76F4\u63A5\u7C98\u8D34 Authorization \u4E2D\u7684 token\u3002").addText(
      (text) => text.setPlaceholder("Bearer 1023456|... \u6216\u76F4\u63A5\u7C98\u8D34 token").setValue(this.plugin.settings.token).onChange(async (value) => {
        let token = value.trim();
        if (token.toLowerCase().startsWith("bearer ")) {
          token = token.slice(7).trim();
        }
        if (token !== this.plugin.settings.token) {
          this.plugin.settings.tokenValidated = false;
        }
        this.plugin.settings.token = token;
        await this.plugin.saveSettings();
      })
    ).addButton((button) => {
      button.setButtonText("\u9A8C\u8BC1").onClick(async () => {
        await this.validateToken(button);
      });
    });
    const tokenHelpBlock = connectionCard.createDiv({ cls: "flomo-token-help-block" });
    const tokenSteps = tokenHelpBlock.createDiv({ cls: "flomo-token-help-steps" });
    tokenSteps.appendText("\u6B65\u9AA4\uFF1A");
    tokenSteps.createEl("br");
    tokenSteps.appendText("1. \u70B9\u51FB ");
    tokenSteps.createEl("a", {
      text: "v.flomoapp.com/mine",
      href: "https://v.flomoapp.com/mine",
      attr: { target: "_blank" }
    });
    tokenSteps.appendText(" \u767B\u5F55 flomo");
    tokenSteps.createEl("br");
    tokenSteps.appendText("2. \u6309 F12 \u2192 Network \u2192 \u627E\u5230 api \u8BF7\u6C42 \u2192 \u590D\u5236 Authorization \u4E2D\u7684 token");
    const demoCollapsible = tokenHelpBlock.createDiv({
      cls: "flomo-config-collapsible flomo-token-demo-collapsible"
    });
    const demoHeader = demoCollapsible.createDiv({ cls: "flomo-config-collapsible-header" });
    demoHeader.setAttr("role", "button");
    demoHeader.setAttr("tabindex", "0");
    demoHeader.setAttr("aria-expanded", "false");
    const headerLabel = demoHeader.createDiv({ cls: "flomo-token-demo-header-label" });
    const chevron = headerLabel.createSpan({ cls: "flomo-token-demo-chevron" });
    (0, import_obsidian2.setIcon)(chevron, "chevron-right");
    headerLabel.createSpan({ text: "Token \u83B7\u53D6\u793A\u610F\u56FE" });
    const demoContent = demoCollapsible.createDiv({
      cls: "flomo-config-collapsible-content flomo-token-demo-content hidden"
    });
    const gifPath = `${this.app.vault.configDir}/plugins/${this.plugin.manifest.id}/img/start_setup.gif`;
    const gifResourcePath = this.app.vault.adapter.getResourcePath(gifPath);
    const imageWrap = demoContent.createDiv({ cls: "flomo-token-demo-image-wrap" });
    const imageEl = imageWrap.createEl("img", {
      cls: "flomo-token-demo-image",
      attr: {
        src: gifResourcePath,
        alt: "Token \u83B7\u53D6\u793A\u610F\u56FE"
      }
    });
    const toggleDemo = () => {
      const isHidden = demoContent.hasClass("hidden");
      if (isHidden) {
        demoContent.removeClass("hidden");
        demoCollapsible.addClass("is-open");
        demoHeader.setAttr("aria-expanded", "true");
      } else {
        demoContent.addClass("hidden");
        demoCollapsible.removeClass("is-open");
        demoHeader.setAttr("aria-expanded", "false");
      }
    };
    demoHeader.addEventListener("click", toggleDemo);
    demoHeader.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();
        toggleDemo();
      }
    });
    imageEl.addEventListener("error", () => {
      imageWrap.style.display = "none";
      const existingFallback = demoContent.querySelector(".flomo-token-demo-fallback");
      if (existingFallback)
        return;
      demoContent.createEl("a", {
        cls: "flomo-token-demo-fallback",
        text: "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u51FB\u67E5\u770B\u793A\u610F\u56FE",
        href: gifResourcePath,
        attr: { target: "_blank" }
      });
    });
    const syncCard = container.createDiv({ cls: "flomo-settings-card" });
    const syncHeader = syncCard.createDiv({ cls: "flomo-settings-card-header" });
    const syncIcon = syncHeader.createSpan();
    (0, import_obsidian2.setIcon)(syncIcon, "folder-sync");
    syncHeader.createEl("h3", { text: "\u540C\u6B65\u914D\u7F6E" });
    const targetDirSetting = new import_obsidian2.Setting(syncCard).setName("\u540C\u6B65\u76EE\u6807\u76EE\u5F55").setDesc("\u76F8\u5BF9\u4E8E Vault \u6839\u76EE\u5F55\u7684\u8DEF\u5F84\uFF0Cflomo \u7B14\u8BB0\u5C06\u540C\u6B65\u5230\u6B64\u76EE\u5F55").addText(
      (text) => text.setPlaceholder("flomo").setValue(this.plugin.settings.targetDir).onChange(async (value) => {
        const newValue = value.trim() || "flomo";
        this.plugin.settings.targetDir = newValue;
        await this.plugin.saveSettings();
        this.updateFullPathDisplay(fullPathEl, newValue);
      })
    );
    const fullPathContainer = targetDirSetting.descEl.createDiv({ cls: "flomo-full-path-container" });
    fullPathContainer.style.marginTop = "8px";
    fullPathContainer.style.fontSize = "12px";
    fullPathContainer.style.color = "var(--text-muted)";
    fullPathContainer.createSpan({ text: "\u5B8C\u6574\u8DEF\u5F84: ", cls: "flomo-full-path-label" });
    const fullPathEl = fullPathContainer.createSpan({ cls: "flomo-full-path-value" });
    fullPathEl.style.fontFamily = "var(--font-monospace)";
    this.updateFullPathDisplay(fullPathEl, this.plugin.settings.targetDir);
    new import_obsidian2.Setting(syncCard).setName("\u4E0B\u8F7D\u9644\u4EF6").setDesc("\u662F\u5426\u4E0B\u8F7D\u56FE\u7247\u548C\u97F3\u9891\u9644\u4EF6\u5230\u672C\u5730\uFF08\u63A8\u8350\u5F00\u542F\uFF09").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.downloadAttachments).onChange(async (value) => {
        this.plugin.settings.downloadAttachments = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian2.Setting(syncCard).setName("\u81EA\u52A8\u540C\u6B65\u95F4\u9694").setDesc('\u8BBE\u7F6E\u4E3A 0 \u6216"\u624B\u52A8\u540C\u6B65"\u5219\u5173\u95ED\u81EA\u52A8\u540C\u6B65\uFF0C\u9ED8\u8BA4\u6BCF\u96941\u5206\u949F\u540C\u6B65').addDropdown(
      (dropdown) => dropdown.addOption("0", "\u624B\u52A8\u540C\u6B65").addOption("10", "10\u79D2").addOption("30", "30\u79D2").addOption("60", "1\u5206\u949F").addOption("300", "5\u5206\u949F").addOption("600", "10\u5206\u949F").addOption("1800", "30\u5206\u949F").addOption("3600", "1\u5C0F\u65F6").setValue(String(this.plugin.settings.syncInterval)).onChange(async (value) => {
        const interval = parseInt(value, 10);
        this.plugin.settings.syncInterval = interval;
        await this.plugin.saveSettings();
        this.plugin.setupAutoSync();
      })
    );
    const devCard = container.createDiv({ cls: "flomo-settings-card" });
    const devHeader = devCard.createDiv({ cls: "flomo-settings-card-header" });
    const devIcon = devHeader.createSpan();
    (0, import_obsidian2.setIcon)(devIcon, "code");
    devHeader.createEl("h3", { text: "\u5F00\u53D1\u8005\u9009\u9879" });
    new import_obsidian2.Setting(devCard).setName("\u8C03\u8BD5\u6A21\u5F0F").setDesc("\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u8BE6\u7EC6\u65E5\u5FD7\uFF08\u7528\u4E8E\u6392\u67E5\u95EE\u9898\uFF09").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.debugMode).onChange(async (value) => {
        this.plugin.settings.debugMode = value;
        await this.plugin.saveSettings();
      })
    );
  }
  /**
   * 渲染操作 Tab
   */
  renderActionTab(container) {
    const actionCard = container.createDiv({ cls: "flomo-settings-card" });
    const actionHeader = actionCard.createDiv({ cls: "flomo-settings-card-header" });
    const actionIcon = actionHeader.createSpan();
    (0, import_obsidian2.setIcon)(actionIcon, "zap");
    actionHeader.createEl("h3", { text: "\u540C\u6B65\u64CD\u4F5C" });
    const buttonsContainer = actionCard.createDiv({ cls: "flomo-action-buttons" });
    const syncRow = buttonsContainer.createDiv({ cls: "flomo-action-row" });
    const syncInfo = syncRow.createDiv({ cls: "flomo-action-info" });
    syncInfo.createEl("h4", { text: "\u7ACB\u5373\u540C\u6B65" });
    syncInfo.createEl("p", { text: "\u6267\u884C\u589E\u91CF\u540C\u6B65\uFF0C\u53EA\u83B7\u53D6\u65B0\u589E\u548C\u66F4\u65B0\u7684\u5185\u5BB9" });
    const syncButton = syncRow.createEl("button", {
      text: this.plugin.isSyncing ? "\u540C\u6B65\u4E2D..." : "\u5F00\u59CB\u540C\u6B65",
      cls: "mod-cta"
    });
    syncButton.disabled = this.plugin.isSyncing;
    syncButton.addEventListener("click", async () => {
      syncButton.disabled = true;
      syncButton.textContent = "\u540C\u6B65\u4E2D...";
      try {
        await this.plugin.performSync();
      } finally {
        syncButton.disabled = this.plugin.isSyncing;
        syncButton.textContent = this.plugin.isSyncing ? "\u540C\u6B65\u4E2D..." : "\u5F00\u59CB\u540C\u6B65";
        this.renderCurrentTab();
      }
    });
    const fullSyncRow = buttonsContainer.createDiv({ cls: "flomo-action-row" });
    const fullSyncInfo = fullSyncRow.createDiv({ cls: "flomo-action-info" });
    fullSyncInfo.createEl("h4", { text: "\u5168\u91CF\u540C\u6B65" });
    fullSyncInfo.createEl("p", { text: "\u91CD\u7F6E\u6E38\u6807\u5E76\u91CD\u65B0\u540C\u6B65\u6240\u6709\u7B14\u8BB0\uFF08\u4F1A\u66F4\u65B0\u5DF2\u5B58\u5728\u7684\u6587\u4EF6\uFF09" });
    const fullSyncButton = fullSyncRow.createEl("button", {
      text: this.plugin.isSyncing ? "\u540C\u6B65\u4E2D..." : "\u5168\u91CF\u540C\u6B65"
    });
    fullSyncButton.disabled = this.plugin.isSyncing;
    fullSyncButton.addEventListener("click", async () => {
      fullSyncButton.disabled = true;
      fullSyncButton.textContent = "\u540C\u6B65\u4E2D...";
      try {
        await this.plugin.performFullSync();
      } finally {
        fullSyncButton.disabled = this.plugin.isSyncing;
        fullSyncButton.textContent = this.plugin.isSyncing ? "\u540C\u6B65\u4E2D..." : "\u5168\u91CF\u540C\u6B65";
        this.renderCurrentTab();
      }
    });
    const dangerCard = container.createDiv({ cls: "flomo-settings-card danger" });
    const dangerHeader = dangerCard.createDiv({ cls: "flomo-settings-card-header" });
    const dangerIcon = dangerHeader.createSpan();
    (0, import_obsidian2.setIcon)(dangerIcon, "alert-triangle");
    dangerHeader.createEl("h3", { text: "\u5371\u9669\u533A\u57DF" });
    new import_obsidian2.Setting(dangerCard).setName("\u91CD\u7F6E\u540C\u6B65\u72B6\u6001").setDesc("\u6E05\u9664\u540C\u6B65\u6E38\u6807\uFF0C\u4E0B\u6B21\u540C\u6B65\u5C06\u4ECE\u5934\u5F00\u59CB\uFF08\u4E0D\u4F1A\u5220\u9664\u672C\u5730\u6587\u4EF6\uFF09").addButton(
      (button) => button.setButtonText("\u91CD\u7F6E").setWarning().onClick(async () => {
        if (confirm("\u786E\u5B9A\u8981\u91CD\u7F6E\u540C\u6B65\u72B6\u6001\u5417\uFF1F\u4E0B\u6B21\u540C\u6B65\u5C06\u4ECE\u5934\u5F00\u59CB\u83B7\u53D6\u6240\u6709\u8BB0\u5F55\u3002")) {
          this.plugin.settings.cursor = { latest_updated_at: 0, latest_slug: "" };
          await this.plugin.saveSettings();
          new import_obsidian2.Notice("\u540C\u6B65\u72B6\u6001\u5DF2\u91CD\u7F6E\uFF0C\u4E0B\u6B21\u5C06\u6267\u884C\u5168\u91CF\u540C\u6B65");
          this.renderCurrentTab();
        }
      })
    );
    new import_obsidian2.Setting(dangerCard).setName("\u6E05\u9664\u672C\u5730\u6570\u636E").setDesc("\u5220\u9664\u540C\u6B65\u76EE\u5F55\u4E2D\u7684\u6240\u6709 flomo \u7B14\u8BB0\u6587\u4EF6\uFF08\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF09").addButton(
      (button) => button.setButtonText("\u6E05\u9664").setWarning().onClick(async () => {
        if (confirm("\u8B66\u544A\uFF1A\u8FD9\u5C06\u5220\u9664\u6240\u6709\u672C\u5730 flomo \u7B14\u8BB0\u6587\u4EF6\uFF01\u786E\u5B9A\u8981\u7EE7\u7EED\u5417\uFF1F")) {
          const confirmed = prompt('\u8BF7\u8F93\u5165 "DELETE" \u786E\u8BA4\u5220\u9664\uFF1A') === "DELETE";
          if (confirmed) {
            await this.clearLocalData();
          } else {
            new import_obsidian2.Notice("\u64CD\u4F5C\u5DF2\u53D6\u6D88");
          }
        }
      })
    );
  }
  /**
   * 清除本地数据
   */
  async clearLocalData() {
    try {
      const dir = this.normalizeTargetDir(this.plugin.settings.targetDir);
      const folder = this.app.vault.getAbstractFileByPath(dir);
      if (!folder) {
        new import_obsidian2.Notice("\u540C\u6B65\u76EE\u5F55\u4E0D\u5B58\u5728");
        return;
      }
      const files = this.app.vault.getMarkdownFiles().filter(
        (f) => f.path.startsWith(dir + "/")
      );
      for (const file of files) {
        await this.app.vault.delete(file);
      }
      new import_obsidian2.Notice("\u672C\u5730\u6570\u636E\u5DF2\u6E05\u9664");
    } catch (error) {
      new import_obsidian2.Notice("\u6E05\u9664\u5931\u8D25: " + error.message);
    }
  }
  /**
   * 渲染贡献热力图
   */
  renderContributionHeatmap(containerEl) {
    var _a;
    const tooltipManager = getTooltipManager();
    const heatmapCard = containerEl.createDiv({ cls: "flomo-settings-card" });
    const heatmapHeader = heatmapCard.createDiv({ cls: "flomo-settings-card-header" });
    const heatmapIcon = heatmapHeader.createSpan();
    (0, import_obsidian2.setIcon)(heatmapIcon, "calendar");
    heatmapHeader.createEl("h3", { text: "\u8BB0\u5F55\u6D3B\u8DC3\u5EA6\uFF08\u6700\u8FD1\u4E00\u5E74\uFF09" });
    const dailyCounts = this.collectDailyMemoCounts();
    const totalCount = this.getLocalMemoCount();
    const lastYearCount = this.calculateLastYearCount(dailyCounts);
    const statsEl = heatmapHeader.createDiv({ cls: "flomo-heatmap-header-stats" });
    statsEl.createSpan({ text: `\u6700\u8FD1\u4E00\u5E74: ${lastYearCount} \u6761`, cls: "flomo-heatmap-stat-item" });
    statsEl.createSpan({ text: " | ", cls: "flomo-heatmap-stat-separator" });
    statsEl.createSpan({ text: `\u603B\u8BA1: ${totalCount} \u6761`, cls: "flomo-heatmap-stat-item" });
    const heatmapContainer = heatmapCard.createDiv({ cls: "flomo-heatmap-container" });
    const maxCount = Math.max(...dailyCounts.values(), 0);
    if (maxCount === 0) {
      heatmapContainer.createDiv({
        cls: "flomo-heatmap-empty",
        text: "\u6682\u65E0\u540C\u6B65\u6570\u636E\uFF0C\u5B8C\u6210\u540C\u6B65\u540E\u4F1A\u5C55\u793A\u6BCF\u65E5\u8BB0\u5F55\u70ED\u529B\u56FE\u3002"
      });
      return;
    }
    const weeks = _FlomoSyncSettingTab.HEATMAP_WEEKS;
    const today = this.startOfDay(new Date());
    const currentWeekStart = this.getWeekStart(today);
    const startDate = new Date(currentWeekStart);
    startDate.setDate(startDate.getDate() - (weeks - 1) * 7);
    const monthsRow = heatmapContainer.createDiv({ cls: "flomo-heatmap-months" });
    const monthGrid = monthsRow.createDiv({ cls: "flomo-heatmap-month-grid" });
    let previousMonth = -1;
    for (let week = 0; week < weeks; week++) {
      const weekStart = new Date(startDate);
      weekStart.setDate(startDate.getDate() + week * 7);
      const monthCell = monthGrid.createDiv({ cls: "flomo-heatmap-month-cell" });
      if (weekStart.getMonth() !== previousMonth) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        monthCell.setText(monthNames[weekStart.getMonth()]);
      }
      previousMonth = weekStart.getMonth();
    }
    const body = heatmapContainer.createDiv({ cls: "flomo-heatmap-body" });
    const grid = body.createDiv({ cls: "flomo-heatmap-grid" });
    for (let week = 0; week < weeks; week++) {
      const weekColumn = grid.createDiv({ cls: "flomo-heatmap-week" });
      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + week * 7 + day);
        const dateKey = this.formatDateKey(date);
        const count = (_a = dailyCounts.get(dateKey)) != null ? _a : 0;
        const level = this.resolveHeatmapLevel(count);
        const tooltipText = `${dateKey}: ${count} \u6761`;
        const cell = weekColumn.createDiv({ cls: `flomo-heatmap-cell flomo-heatmap-level-${level}` });
        cell.setAttr("aria-description", tooltipText);
        cell.setAttr("tabindex", "0");
        cell.addEventListener("mouseenter", () => tooltipManager.show(cell, tooltipText, 100));
        cell.addEventListener("mouseleave", () => tooltipManager.hide());
        cell.addEventListener("focus", () => tooltipManager.show(cell, tooltipText, 100));
        cell.addEventListener("blur", () => tooltipManager.hide());
      }
    }
    const legend = heatmapContainer.createDiv({ cls: "flomo-heatmap-legend" });
    legend.createSpan({ cls: "flomo-heatmap-legend-text", text: "\u5C11" });
    const legendLevels = [0, 1, 3, 5, 7, 9];
    for (const level of legendLevels) {
      legend.createDiv({ cls: `flomo-heatmap-cell flomo-heatmap-level-${level}` });
    }
    legend.createSpan({ cls: "flomo-heatmap-legend-text", text: "\u591A" });
  }
  /**
   * 聚合目标目录下 memo 的每日数量
   */
  collectDailyMemoCounts() {
    var _a;
    const counts = /* @__PURE__ */ new Map();
    const dir = this.normalizeTargetDir(this.plugin.settings.targetDir);
    const markdownFiles = this.app.vault.getMarkdownFiles();
    for (const file of markdownFiles) {
      if (dir && !(file.path === dir || file.path.startsWith(`${dir}/`))) {
        continue;
      }
      if (file.path.includes("/attachments/")) {
        continue;
      }
      const dateMatch = file.name.match(/^(\d{4}-\d{2}-\d{2})_/);
      if (!dateMatch) {
        continue;
      }
      const dateKey = dateMatch[1];
      counts.set(dateKey, ((_a = counts.get(dateKey)) != null ? _a : 0) + 1);
    }
    return counts;
  }
  /**
   * 路径归一化
   */
  normalizeTargetDir(dir) {
    const trimmed = dir.trim();
    if (!trimmed || trimmed === ".") {
      return "";
    }
    return trimmed.replace(/^\.?\//, "").replace(/\/+$/, "");
  }
  /**
   * 更新完整路径显示
   */
  updateFullPathDisplay(element, targetDir) {
    const normalizedDir = this.normalizeTargetDir(targetDir) || "flomo";
    const vaultPath = this.app.vault.getName();
    element.textContent = `${vaultPath}/${normalizedDir}`;
  }
  /**
   * 使用 log 函数计算热力图色阶 (0-9)
   * 映射关系: 0->0, 1->1, 2->2, 3->3, 4->4, 5-6->5, 7-8->6, 9-12->7, 13-15->8, 16+->9
   */
  resolveHeatmapLevel(count) {
    if (count <= 0)
      return 0;
    const levels = [0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9];
    return count < levels.length ? levels[count] : 9;
  }
  /**
   * 获取当天的 0 点时间
   */
  startOfDay(date) {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
  }
  /**
   * 获取所在周的周日
   */
  getWeekStart(date) {
    const start = this.startOfDay(date);
    start.setDate(start.getDate() - start.getDay());
    return start;
  }
  /**
   * 格式化为 YYYY-MM-DD
   */
  formatDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  /**
   * 计算最近一年的记录数
   */
  calculateLastYearCount(dailyCounts) {
    const today = this.startOfDay(new Date());
    const oneYearAgo = new Date(today);
    oneYearAgo.setDate(oneYearAgo.getDate() - 365);
    let count = 0;
    for (const [dateKey, dayCount] of dailyCounts.entries()) {
      const date = new Date(dateKey);
      if (date >= oneYearAgo && date <= today) {
        count += dayCount;
      }
    }
    return count;
  }
  /**
   * 获取本地记录数
   */
  getLocalMemoCount() {
    const dir = this.normalizeTargetDir(this.plugin.settings.targetDir);
    return this.app.vault.getMarkdownFiles().filter((f) => {
      if (dir && !(f.path === dir || f.path.startsWith(`${dir}/`))) {
        return false;
      }
      return !f.path.includes("/attachments/");
    }).length;
  }
  /**
   * 获取相对时间字符串
   */
  getRelativeTime(timestamp) {
    const now = Date.now() / 1e3;
    const diff = now - timestamp;
    if (diff < 60)
      return "\u521A\u521A";
    if (diff < 3600)
      return `${Math.floor(diff / 60)}\u5206\u949F\u524D`;
    if (diff < 86400)
      return `${Math.floor(diff / 3600)}\u5C0F\u65F6\u524D`;
    if (diff < 2592e3)
      return `${Math.floor(diff / 86400)}\u5929\u524D`;
    return new Date(timestamp * 1e3).toLocaleDateString("zh-CN");
  }
  /**
   * 刷新设置界面（在同步完成后调用）
   */
  refresh() {
    if (!this.contentContainer)
      return;
    this.renderCurrentTab();
  }
  /**
   * 验证 Token 有效性
   */
  async validateToken(button) {
    const token = this.plugin.settings.token;
    if (!token) {
      new import_obsidian2.Notice("\u8BF7\u5148\u8F93\u5165 Token");
      return;
    }
    const originalText = button.buttonEl.getText();
    button.setButtonText("\u9A8C\u8BC1\u4E2D...");
    button.setDisabled(true);
    try {
      const client = new FlomoClient({
        token,
        targetDir: this.plugin.settings.targetDir,
        downloadAttachments: this.plugin.settings.downloadAttachments,
        syncInterval: this.plugin.settings.syncInterval,
        debugMode: this.plugin.settings.debugMode
      });
      await client.fetchMemosPage(0, "");
      this.plugin.settings.tokenValidated = true;
      this.plugin.settings.tokenValidatedAt = Date.now();
      await this.plugin.saveSettings();
      if (this.currentTab === "overview") {
        this.renderCurrentTab();
      }
      new import_obsidian2.Notice("\u2705 Token \u6709\u6548", 3e3);
    } catch (error) {
      this.plugin.log("Token validation error:", error);
      let errorMsg = "\u9A8C\u8BC1\u5931\u8D25";
      if (error instanceof FlomoApiError) {
        if (error.status === 401 || error.message.includes("\u767B\u5F55") || error.message.includes("token")) {
          errorMsg = "Token \u65E0\u6548\u6216\u5DF2\u8FC7\u671F";
        } else if (error.status === 0) {
          errorMsg = "\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25";
        } else {
          errorMsg = error.message;
        }
      } else {
        errorMsg = error.message || "\u672A\u77E5\u9519\u8BEF";
      }
      new import_obsidian2.Notice(`\u274C ${errorMsg}`, 5e3);
      this.plugin.settings.tokenValidated = false;
      await this.plugin.saveSettings();
      if (this.currentTab === "overview") {
        this.renderCurrentTab();
      }
    } finally {
      button.setButtonText(originalText);
      button.setDisabled(false);
    }
  }
};
var FlomoSyncSettingTab = _FlomoSyncSettingTab;
FlomoSyncSettingTab.HEATMAP_WEEKS = 53;

// src/syncEngine.ts
var import_obsidian3 = require("obsidian");

// src/formatter.ts
var IMAGE_EXTS = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);
var AUDIO_EXTS = /* @__PURE__ */ new Set([".m4a", ".mp3", ".wav", ".ogg"]);
function htmlToMarkdown(html) {
  if (!html)
    return "";
  let md = html;
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, code) => {
    const cleanCode = code.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");
    return "\n```\n" + cleanCode + "\n```\n";
  });
  md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`");
  md = md.replace(/<(strong|b)[^>]*>(.*?)<\/(strong|b)>/gi, "**$2**");
  md = md.replace(/<(em|i)[^>]*>(.*?)<\/(em|i)>/gi, "*$2*");
  md = md.replace(/<del[^>]*>(.*?)<\/del>/gi, "~~$1~~");
  md = md.replace(/<a[^>]+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)");
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "![$2]($1)");
  md = md.replace(/<img[^>]+alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, "![$1]($2)");
  md = md.replace(/<img[^>]+src="([^"]*)"[^>]*\/?>/gi, "![]($1)");
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n# $1\n");
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n## $1\n");
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n### $1\n");
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n#### $1\n");
  md = md.replace(/<h5[^>]*>(.*?)<\/h5>/gi, "\n##### $1\n");
  md = md.replace(/<h6[^>]*>(.*?)<\/h6>/gi, "\n###### $1\n");
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n");
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, "\n$1\n");
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, "\n$1\n");
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n");
  md = md.replace(/<br\s*\/?>/gi, "\n");
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, "\n$1\n");
  md = md.replace(/<[^>]+>/g, "");
  md = md.replace(/&lt;/g, "<");
  md = md.replace(/&gt;/g, ">");
  md = md.replace(/&amp;/g, "&");
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#39;/g, "'");
  md = md.replace(/&nbsp;/g, " ");
  md = md.split("\n").map((line) => line.trim()).join("\n");
  md = md.replace(/\n{3,}/g, "\n\n");
  return md.trim();
}
function getExtensionFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const ext = pathname.slice(pathname.lastIndexOf(".")).toLowerCase();
    return ext.includes(".") ? ext : "";
  } catch (e) {
    return "";
  }
}
function formatAttachment(file, localPath) {
  const name = file.name || "file";
  const url = localPath || file.url || "";
  if (!url) {
    return `- ${name}`;
  }
  const ext = getExtensionFromUrl(file.url) || getExtensionFromUrl(file.name);
  if (IMAGE_EXTS.has(ext)) {
    return `![${name}](${url})`;
  }
  if (AUDIO_EXTS.has(ext)) {
    return `[\u97F3\u9891: ${name}](${url})`;
  }
  return `[${name}](${url})`;
}
function memoToMarkdown(memo, attachmentPaths) {
  const tags = memo.tags || [];
  const tagsStr = tags.length > 0 ? JSON.stringify(tags) : "[]";
  console.log("[FlomoSync Debug] memoToMarkdown - tags input:", tags);
  console.log("[FlomoSync Debug] memoToMarkdown - tagsStr output:", tagsStr);
  console.log("[FlomoSync Debug] memoToMarkdown - attachmentPaths:", attachmentPaths ? Object.fromEntries(attachmentPaths) : null);
  let body = htmlToMarkdown(memo.content || "");
  let attachmentsSection = "";
  const files = memo.files || [];
  if (files.length > 0) {
    const fileLines = files.map((f) => {
      const localPath = attachmentPaths == null ? void 0 : attachmentPaths.get(f.url);
      console.log("[FlomoSync Debug] Processing attachment - file:", f.name, "url:", f.url, "localPath:", localPath);
      return formatAttachment(f, localPath);
    });
    attachmentsSection = "\n\n**\u9644\u4EF6:**\n" + fileLines.join("\n");
  }
  const result = `---
slug: ${memo.slug}
created_at: "${memo.created_at || ""}"
updated_at: "${memo.updated_at || ""}"
tags: ${tagsStr}
source: "${memo.source || ""}"
---

${body}${attachmentsSection}
`;
  console.log("[FlomoSync Debug] memoToMarkdown - final result length:", result.length);
  return result;
}
function generateFilename(memo) {
  const slug = memo.slug || `memo_${Date.now()}`;
  const parts = [];
  const createdAt = memo.created_at || "";
  if (createdAt.length >= 10) {
    parts.push(createdAt.slice(0, 10));
  }
  const tags = memo.tags || [];
  if (tags.length > 0) {
    const firstTag = tags[0];
    const leaf = firstTag.split("/").pop() || firstTag;
    const safeLeaf = leaf.replace(/[\\/:*?"<>|]/g, "").trim();
    if (safeLeaf) {
      parts.push(safeLeaf);
    }
  }
  const contentMd = htmlToMarkdown(memo.content || "");
  const contentClean = contentMd.replace(/#\S+/g, "");
  const chars = contentClean.match(/[\u4e00-\u9fa5\w]/g) || [];
  const preview = chars.slice(0, 6).join("");
  if (preview) {
    parts.push(preview);
  }
  parts.push(slug);
  return parts.join("_") + ".md";
}
function parseTimestamp(time) {
  if (typeof time === "number") {
    return time > 9999999999 ? Math.floor(time / 1e3) : time;
  }
  if (typeof time === "string") {
    const date = new Date(time.replace(" ", "T"));
    if (!isNaN(date.getTime())) {
      return Math.floor(date.getTime() / 1e3);
    }
  }
  return 0;
}
function isImage(filename) {
  const cleanName = filename.split("?")[0];
  const ext = cleanName.slice(cleanName.lastIndexOf(".")).toLowerCase();
  return IMAGE_EXTS.has(ext);
}
function isAudio(filename) {
  const cleanName = filename.split("?")[0];
  const ext = cleanName.slice(cleanName.lastIndexOf(".")).toLowerCase();
  return AUDIO_EXTS.has(ext);
}
function extractImageIdFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const filename = pathname.split("/").pop() || "";
    if (filename.includes(".")) {
      return filename;
    }
    return null;
  } catch (e) {
    return null;
  }
}

// src/syncEngine.ts
var SyncEngine = class {
  constructor(client, settings, app, onProgress) {
    this.client = client;
    this.settings = settings;
    this.app = app;
    this.onProgress = onProgress;
    this.debug = settings.debugMode;
  }
  /** 日志输出 */
  log(...args) {
    if (this.debug) {
      console.log("[FlomoSync]", ...args);
    }
  }
  /**
   * 执行同步
   *
   * @param fullSync - 是否执行全量同步（重置游标）
   * @returns 同步统计
   */
  async sync(fullSync = false) {
    var _a, _b, _c, _d, _e, _f;
    const stats = {
      created: 0,
      updated: 0,
      skipped: 0,
      failed: 0,
      total: 0,
      startTime: new Date(),
      // 初始化 B-C 段统计
      newContent: {
        created: 0,
        updated: 0,
        skipped: 0,
        failed: 0,
        total: 0
      },
      // 初始化 A-B 段统计（只记录 created/updated）
      bufferZone: {
        created: 0,
        updated: 0,
        total: 0
      }
    };
    const targetDir = await this.ensureTargetDir();
    let cursor;
    let originalCursorTime;
    if (fullSync) {
      cursor = { latest_updated_at: 0, latest_slug: "" };
      originalCursorTime = 0;
    } else {
      cursor = { ...this.settings.cursor };
      originalCursorTime = cursor.latest_updated_at;
      if (cursor.latest_updated_at > 86400) {
        cursor.latest_updated_at -= 86400;
      }
    }
    this.log("Starting sync with cursor:", cursor, "originalCursorTime (B\u70B9):", originalCursorTime);
    try {
      for await (const items of this.client.iterMemos(
        cursor.latest_updated_at,
        (page, count, cur) => {
          var _a2;
          (_a2 = this.onProgress) == null ? void 0 : _a2.call(this, {
            page,
            pageCount: count,
            totalCount: stats.total,
            status: "fetching",
            message: `\u83B7\u53D6\u7B2C ${page} \u9875\uFF0C${count} \u6761`
          });
        }
      )) {
        (_a = this.onProgress) == null ? void 0 : _a.call(this, {
          page: 0,
          pageCount: items.length,
          totalCount: stats.total,
          status: "processing",
          message: `\u5904\u7406 ${items.length} \u6761\u7B14\u8BB0`
        });
        for (const memo of items) {
          try {
            const result = await this.processMemo(memo, targetDir);
            const memoUpdatedAt = parseTimestamp(memo.updated_at);
            const isInBufferZone = !fullSync && memoUpdatedAt <= originalCursorTime;
            const isSkippedInBufferZone = isInBufferZone && result === "skipped";
            if (isSkippedInBufferZone) {
              this.log(`[A-B\u6BB5/skipped-\u5B8C\u5168\u5FFD\u7565] slug=${memo.slug}, updated_at=${memo.updated_at} (${memoUpdatedAt}) <= cursor (${originalCursorTime})`);
            } else {
              stats[result]++;
              stats.total++;
              if (isInBufferZone) {
                if (result === "created" || result === "updated") {
                  stats.bufferZone[result]++;
                  stats.bufferZone.total++;
                }
                this.log(`[A-B\u6BB5/${result}] slug=${memo.slug}, updated_at=${memo.updated_at} (${memoUpdatedAt}) <= cursor (${originalCursorTime})`);
              } else {
                stats.newContent[result]++;
                stats.newContent.total++;
                this.log(`[B-C\u6BB5/${result}] slug=${memo.slug}, updated_at=${memo.updated_at} (${memoUpdatedAt}) > cursor (${originalCursorTime})`);
              }
            }
          } catch (error) {
            this.log("Failed to process memo:", memo.slug, error);
            const memoUpdatedAt = parseTimestamp(memo.updated_at);
            const isInBufferZone = !fullSync && memoUpdatedAt <= originalCursorTime;
            if (isInBufferZone) {
              this.log(`[A-B\u6BB5/failed-\u5B8C\u5168\u5FFD\u7565] slug=${memo.slug}, updated_at=${memo.updated_at} (${memoUpdatedAt}) <= cursor (${originalCursorTime})`);
            } else {
              stats.failed++;
              stats.total++;
              if (stats.newContent) {
                stats.newContent.failed++;
                stats.newContent.total++;
              }
            }
          }
          (_c = this.onProgress) == null ? void 0 : _c.call(this, {
            page: 0,
            pageCount: items.length,
            totalCount: stats.total,
            status: "processing",
            processedCount: stats.total,
            stats: {
              created: stats.created,
              updated: stats.updated,
              skipped: stats.skipped,
              failed: stats.failed
            },
            newContentStats: stats.newContent,
            bufferZoneStats: stats.bufferZone,
            message: `\u5904\u7406\u4E2D: ${stats.total} \u6761 (\u65B0\u589E ${((_b = stats.newContent) == null ? void 0 : _b.created) || 0})`
          });
        }
        const lastMemo = items[items.length - 1];
        if (lastMemo) {
          this.settings.cursor = {
            latest_updated_at: parseTimestamp(lastMemo.updated_at),
            latest_slug: lastMemo.slug
          };
        }
      }
      stats.endTime = new Date();
      const nc = stats.newContent;
      const bz = stats.bufferZone;
      const completionMessage = nc && nc.total > 0 ? `\u540C\u6B65\u5B8C\u6210\uFF1A\u65B0\u589E ${nc.created}\uFF0C\u66F4\u65B0 ${nc.updated}\uFF0C\u8DF3\u8FC7 ${nc.skipped}` : `\u540C\u6B65\u5B8C\u6210\uFF1A\u65B0\u589E ${stats.created}\uFF0C\u66F4\u65B0 ${stats.updated}\uFF0C\u8DF3\u8FC7 ${stats.skipped}`;
      this.log("========== \u540C\u6B65\u7EDF\u8BA1\u62A5\u544A ==========");
      this.log(`\u603B\u5904\u7406: ${stats.total} \u6761 (\u65B0\u589E ${stats.created} / \u66F4\u65B0 ${stats.updated} / \u8DF3\u8FC7 ${stats.skipped} / \u5931\u8D25 ${stats.failed})`);
      if (!fullSync) {
        this.log(`\u539F\u59CB\u6E38\u6807\u70B9 (B\u70B9): ${originalCursorTime} (${new Date(originalCursorTime * 1e3).toISOString()})`);
        this.log(`\u5BB9\u9519\u6E38\u6807\u70B9 (A\u70B9): ${cursor.latest_updated_at} (${new Date(cursor.latest_updated_at * 1e3).toISOString()})`);
        this.log(`B-C\u6BB5 (\u771F\u6B63\u65B0\u589E): ${(nc == null ? void 0 : nc.total) || 0} \u6761 (\u65B0\u589E ${(nc == null ? void 0 : nc.created) || 0} / \u66F4\u65B0 ${(nc == null ? void 0 : nc.updated) || 0} / \u8DF3\u8FC7 ${(nc == null ? void 0 : nc.skipped) || 0} / \u5931\u8D25 ${(nc == null ? void 0 : nc.failed) || 0})`);
        this.log(`A-B\u6BB5 (\u5BB9\u9519\u7F13\u51B2): ${(bz == null ? void 0 : bz.total) || 0} \u6761 (\u65B0\u589E ${(bz == null ? void 0 : bz.created) || 0} / \u66F4\u65B0 ${(bz == null ? void 0 : bz.updated) || 0}) - \u6CE8\u610F: skipped \u4E0D\u8BA1\u5165\u6B64\u6BB5`);
      } else {
        this.log("\u5168\u91CF\u540C\u6B65: \u6240\u6709\u5185\u5BB9\u8BA1\u5165 B-C \u6BB5");
      }
      this.log("===================================");
      (_d = this.onProgress) == null ? void 0 : _d.call(this, {
        page: 0,
        pageCount: 0,
        totalCount: stats.total,
        status: "completed",
        message: completionMessage
      });
      return stats;
    } catch (error) {
      stats.endTime = new Date();
      if (error instanceof FlomoApiError) {
        (_e = this.onProgress) == null ? void 0 : _e.call(this, {
          page: 0,
          pageCount: 0,
          totalCount: stats.total,
          status: "error",
          message: error.message,
          error
        });
        throw error;
      }
      const err = error;
      const flomoError = new FlomoApiError(err.message);
      (_f = this.onProgress) == null ? void 0 : _f.call(this, {
        page: 0,
        pageCount: 0,
        totalCount: stats.total,
        status: "error",
        message: err.message,
        error: flomoError
      });
      throw error;
    }
  }
  /**
   * 处理单条 memo
   *
   * @param memo - flomo memo
   * @param targetDir - 目标目录
   * @returns 操作结果
   */
  async processMemo(memo, targetDir) {
    var _a;
    const slug = memo.slug;
    const newFilename = generateFilename(memo);
    const newPath = `${this.settings.targetDir}/${newFilename}`;
    this.log("Processing memo:", slug, "->", newFilename);
    console.log("[FlomoSync Debug] Processing memo:", {
      slug: memo.slug,
      created_at: memo.created_at,
      updated_at: memo.updated_at,
      tags: memo.tags,
      filesCount: ((_a = memo.files) == null ? void 0 : _a.length) || 0
    });
    const attachmentPaths = /* @__PURE__ */ new Map();
    if (this.settings.downloadAttachments && memo.files && memo.files.length > 0) {
      const CONCURRENT_LIMIT = 3;
      for (let i = 0; i < memo.files.length; i += CONCURRENT_LIMIT) {
        const batch = memo.files.slice(i, i + CONCURRENT_LIMIT);
        const batchResults = await Promise.all(
          batch.map((file) => this.downloadAttachment(file, memo))
        );
        batch.forEach((file, index) => {
          const localPath = batchResults[index];
          if (localPath) {
            attachmentPaths.set(file.url, localPath);
          }
        });
      }
    }
    console.log("[FlomoSync Debug] Attachment paths:", Object.fromEntries(attachmentPaths));
    const content = memoToMarkdown(memo, attachmentPaths);
    console.log("[FlomoSync Debug] Generated content (first 200 chars):", content.slice(0, 200));
    const existingFile = await this.findFileBySlug(slug, targetDir);
    if (existingFile) {
      const existingContent = await this.app.vault.adapter.read(existingFile.path);
      console.log("[FlomoSync Debug] File exists:", existingFile.path);
      console.log("[FlomoSync Debug] Existing content (first 200 chars):", existingContent.slice(0, 200));
      console.log("[FlomoSync Debug] Content length - existing:", existingContent.length, "new:", content.length);
      console.log("[FlomoSync Debug] Content match:", existingContent === content);
      if (existingContent === content) {
        console.log("[FlomoSync Debug] -> SKIPPED (content identical)");
        return "skipped";
      }
      console.log("[FlomoSync Debug] -> UPDATED (content different)");
      console.log("[FlomoSync Debug] Filename check - existing:", existingFile.name, "new:", newFilename);
      if (existingFile.name !== newFilename) {
        await this.app.vault.delete(existingFile);
        await this.app.vault.create(newPath, content);
      } else {
        await this.app.vault.modify(existingFile, content);
      }
      return "updated";
    } else {
      console.log("[FlomoSync Debug] -> CREATED (file not found for slug:", slug, ")");
      await this.app.vault.create(newPath, content);
      return "created";
    }
  }
  /**
   * 根据 slug 查找文件
   *
   * @param slug - memo slug
   * @param dir - 搜索目录
   * @returns 文件或 null
   */
  async findFileBySlug(slug, dir) {
    const pattern = new RegExp(`_${slug}\\.md$`);
    for (const child of dir.children) {
      if (child instanceof import_obsidian3.TFile && pattern.test(child.name)) {
        return child;
      }
    }
    return null;
  }
  /**
   * 下载附件
   *
   * @param file - 附件信息
   * @param memo - 所属 memo
   * @returns 本地相对路径（相对于 vault root）或 null
   */
  async downloadAttachment(file, memo) {
    const url = file.url;
    const filename = file.name || "unnamed";
    console.log("[FlomoSync Debug] downloadAttachment - filename:", filename, "url:", url);
    const isImg = isImage(filename) || isImage(url);
    const isAud = isAudio(filename) || isAudio(url);
    console.log("[FlomoSync Debug] downloadAttachment - isImg:", isImg, "isAud:", isAud);
    if (!isImg && !isAud) {
      console.log("[FlomoSync Debug] downloadAttachment - unsupported format, skipping");
      return null;
    }
    const ext = getExtensionFromUrl(file.url) || getExtensionFromUrl(file.name) || "";
    let buffer = null;
    try {
      this.log("Downloading attachment:", filename);
      buffer = await this.client.downloadAttachment(url);
      if (!buffer) {
        return null;
      }
    } catch (error) {
      this.log("Failed to download attachment:", filename, error);
      return null;
    }
    let localFilename = extractImageIdFromUrl(file.url);
    if (!localFilename) {
      const fileTime = new Date(memo.updated_at);
      const timePart = `${String(fileTime.getHours()).padStart(2, "0")}_${String(fileTime.getMinutes()).padStart(2, "0")}_${String(fileTime.getSeconds()).padStart(2, "0")}`;
      localFilename = `${memo.slug}_${timePart}${ext}`;
    }
    const createdAt = memo.created_at || "";
    const dateDir = createdAt.length >= 10 ? `${createdAt.slice(0, 4)}/${createdAt.slice(5, 7)}/${createdAt.slice(8, 10)}` : "unknown";
    const localDir = `${this.settings.targetDir}/attachments/${dateDir}`;
    const localPath = `${localDir}/${localFilename}`;
    if (await this.app.vault.adapter.exists(localPath)) {
      this.log("Attachment already exists:", localPath);
      return localPath;
    }
    try {
      await this.ensureDir(localDir);
      const uint8Array = new Uint8Array(buffer);
      await this.app.vault.adapter.writeBinary(localPath, uint8Array);
      this.log("Attachment saved:", localPath);
      return localPath;
    } catch (error) {
      this.log("Failed to save attachment:", localPath, error);
      return null;
    }
  }
  /**
   * 确保目标目录存在
   *
   * @returns 目标文件夹
   */
  async ensureTargetDir() {
    const dirPath = this.settings.targetDir;
    const existingFolder = this.app.vault.getAbstractFileByPath(dirPath);
    if (existingFolder instanceof import_obsidian3.TFolder) {
      return existingFolder;
    }
    await this.ensureDir(dirPath);
    const folder = this.app.vault.getAbstractFileByPath(dirPath);
    if (folder instanceof import_obsidian3.TFolder) {
      return folder;
    }
    throw new Error(`Failed to create target directory: ${dirPath}`);
  }
  /**
   * 确保目录存在（递归创建）
   *
   * @param path - 目录路径
   */
  async ensureDir(path) {
    const parts = path.split("/").filter((p) => p);
    let currentPath = "";
    for (const part of parts) {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      const existing = this.app.vault.getAbstractFileByPath(currentPath);
      if (!existing) {
        await this.app.vault.createFolder(currentPath);
      }
    }
  }
};

// src/statusBar.ts
var import_obsidian4 = require("obsidian");
var ErrorDetailModal = class extends import_obsidian4.Modal {
  constructor(app, errorDetails, plugin) {
    super(app);
    this.errorDetails = errorDetails;
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    const headerEl = contentEl.createDiv({ cls: "flomo-error-modal-header" });
    const iconEl = headerEl.createSpan({ cls: "flomo-error-modal-icon" });
    (0, import_obsidian4.setIcon)(iconEl, "alert-circle");
    headerEl.createEl("h2", { text: "\u540C\u6B65\u5931\u8D25", cls: "flomo-error-modal-title" });
    const detailsEl = contentEl.createDiv({ cls: "flomo-error-modal-details" });
    if (this.errorDetails.code !== void 0 || this.errorDetails.status !== void 0) {
      const codeEl = detailsEl.createDiv({ cls: "flomo-error-modal-row" });
      codeEl.createSpan({ text: "\u9519\u8BEF\u4EE3\u7801: ", cls: "flomo-error-modal-label" });
      const codeValue = this.errorDetails.status !== void 0 ? `HTTP ${this.errorDetails.status}` : `Code ${this.errorDetails.code}`;
      codeEl.createSpan({ text: codeValue, cls: "flomo-error-modal-code" });
    }
    const messageEl = detailsEl.createDiv({ cls: "flomo-error-modal-row" });
    messageEl.createSpan({ text: "\u9519\u8BEF\u4FE1\u606F: ", cls: "flomo-error-modal-label" });
    messageEl.createSpan({ text: this.errorDetails.message, cls: "flomo-error-modal-message" });
    const timeEl = detailsEl.createDiv({ cls: "flomo-error-modal-row flomo-error-modal-time" });
    const timeStr = new Date(this.errorDetails.timestamp).toLocaleString("zh-CN");
    timeEl.createSpan({ text: `\u53D1\u751F\u65F6\u95F4: ${timeStr}`, cls: "flomo-error-modal-time-text" });
    const buttonEl = contentEl.createDiv({ cls: "flomo-error-modal-buttons" });
    buttonEl.createEl("button", {
      text: "\u91CD\u8BD5\u540C\u6B65",
      cls: "mod-cta"
    }).addEventListener("click", () => {
      this.close();
      this.plugin.performSync();
    });
    buttonEl.createEl("button", {
      text: "\u67E5\u770B\u8BBE\u7F6E"
    }).addEventListener("click", () => {
      this.close();
      this.plugin.openSettings();
    });
    const hintEl = contentEl.createDiv({ cls: "flomo-error-modal-hint" });
    hintEl.createEl("small", {
      text: "\u63D0\u793A: \u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\u53EF\u67E5\u770B\u8BE6\u7EC6\u65E5\u5FD7",
      cls: "flomo-error-modal-hint-text"
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var StatusBarManager = class {
  constructor(plugin) {
    this.statusText = "";
    this.tooltipText = "";
    this.currentStatus = "idle";
    this.hasActiveSyncCycle = false;
    this.suppressHoverTooltipOnce = false;
    this.tooltipManager = getTooltipManager();
    this.plugin = plugin;
    this.statusBarEl = plugin.addStatusBarItem();
    this.registerClickHandler();
    this.updateDisplay();
  }
  /**
   * 注册点击事件处理器（只调用一次）
   */
  registerClickHandler() {
    this.statusBarEl.addEventListener("mousedown", (evt) => {
      if (evt.button === 0) {
        if (this.currentStatus === "error" && this.lastError) {
          new ErrorDetailModal(this.plugin.app, this.lastError, this.plugin).open();
        } else {
          this.plugin.performSync();
        }
      } else if (evt.button === 2) {
        evt.preventDefault();
        this.showContextMenu(evt);
      }
    });
    this.statusBarEl.addEventListener("contextmenu", (evt) => {
      evt.preventDefault();
    });
    this.statusBarEl.addClass("mod-clickable");
    this.statusBarEl.addEventListener("mouseenter", () => {
      if (this.tooltipText) {
        this.tooltipManager.show(this.statusBarEl, this.tooltipText, 100);
      }
    });
    this.statusBarEl.addEventListener("mouseleave", () => {
      this.tooltipManager.hide();
    });
  }
  /**
   * 设置同步状态
   */
  setStatus(status, message, errorDetails) {
    const previousStatus = this.currentStatus;
    const isLeavingSyncing = previousStatus === "syncing" && status !== "syncing";
    if (status === "syncing") {
      this.hasActiveSyncCycle = true;
      this.suppressHoverTooltipOnce = false;
    }
    this.currentStatus = status;
    if (isLeavingSyncing && this.hasActiveSyncCycle) {
      this.tooltipManager.hide();
      this.suppressHoverTooltipOnce = true;
      this.hasActiveSyncCycle = false;
    }
    switch (status) {
      case "syncing":
        this.statusText = message || "\u6B63\u5728\u540C\u6B65...";
        this.statusBarEl.addClass("flomo-sync-active");
        this.lastError = void 0;
        break;
      case "success":
        this.statusText = message || "\u540C\u6B65\u6210\u529F";
        this.statusBarEl.removeClass("flomo-sync-active");
        this.currentProgress = void 0;
        this.lastError = void 0;
        this.updateLastSyncTime();
        break;
      case "error":
        this.statusText = message || "\u540C\u6B65\u5931\u8D25";
        this.statusBarEl.removeClass("flomo-sync-active");
        this.currentProgress = void 0;
        this.lastError = {
          message: message || "\u540C\u6B65\u5931\u8D25",
          timestamp: Date.now(),
          ...errorDetails
        };
        break;
      default:
        this.statusBarEl.removeClass("flomo-sync-active");
        this.currentProgress = void 0;
        this.lastError = void 0;
        this.updateLastSyncTime();
        break;
    }
    this.updateDisplay();
  }
  /**
   * 更新实时进度（同步中数字+++效果）
   */
  updateProgress(processedCount, stats, newContentStats, bufferZoneStats) {
    this.currentProgress = { processedCount, stats, newContentStats, bufferZoneStats };
    this.updateDisplay();
  }
  /**
   * 更新显示
   */
  updateDisplay() {
    const iconName = this.getStatusIcon();
    this.statusBarEl.empty();
    const container = this.statusBarEl.createSpan({ cls: "flomo-sync-status" });
    const iconEl = container.createSpan({ cls: "flomo-sync-icon" });
    (0, import_obsidian4.setIcon)(iconEl, iconName);
    if (this.currentStatus === "syncing" && this.currentProgress) {
      const { processedCount, stats, newContentStats } = this.currentProgress;
      const countEl = container.createSpan({
        cls: "flomo-sync-count",
        text: String(processedCount)
      });
      const displayStats = newContentStats && newContentStats.total > 0 ? newContentStats : stats;
      const statsEl = container.createSpan({ cls: "flomo-sync-stats" });
      if (displayStats.created > 0)
        statsEl.createSpan({ cls: "stat-created", text: `+${displayStats.created}` });
      if (displayStats.updated > 0)
        statsEl.createSpan({ cls: "stat-updated", text: `~${displayStats.updated}` });
      if (displayStats.skipped > 0)
        statsEl.createSpan({ cls: "stat-skipped", text: `\xB7${displayStats.skipped}` });
    } else {
      container.createSpan({ text: this.statusText, cls: "flomo-sync-text" });
    }
    this.updateTooltip();
  }
  /**
   * 更新悬停提示
   */
  updateTooltip() {
    let tooltipText = "";
    switch (this.currentStatus) {
      case "idle": {
        const lastStats = this.plugin.settings.lastSyncStats;
        if (lastStats && lastStats.timestamp > 0) {
          const syncDate = new Date(lastStats.timestamp).toLocaleString("zh-CN");
          const nc = lastStats.newContent;
          const bz = lastStats.bufferZone;
          if (nc && nc.total > 0) {
            tooltipText = `\u4E0A\u6B21\u540C\u6B65\uFF1A${syncDate}
`;
            tooltipText += `\u65B0\u589E\u533A +${nc.created} ~${nc.updated} \xB7${nc.skipped}`;
            if (bz && bz.total > 0) {
              tooltipText += ` | \u5BB9\u9519\u533A +${bz.created} ~${bz.updated}`;
            }
            tooltipText += `
\u672C\u6B21\u5904\u7406 +${lastStats.created} ~${lastStats.updated} \xB7${lastStats.skipped} \xD7${lastStats.failed} | ${lastStats.total}\u6761/${lastStats.duration}s`;
          } else {
            tooltipText = `\u4E0A\u6B21\u540C\u6B65\uFF1A${syncDate}
\u672C\u6B21\u5904\u7406 +${lastStats.created} ~${lastStats.updated} \xB7${lastStats.skipped} \xD7${lastStats.failed} | ${lastStats.total}\u6761/${lastStats.duration}s`;
          }
        } else {
          tooltipText = "Flomo \u672A\u540C\u6B65\n\u70B9\u51FB\u5F00\u59CB\u9996\u6B21\u540C\u6B65";
        }
        break;
      }
      case "syncing": {
        if (this.currentProgress) {
          const { processedCount, stats, newContentStats, bufferZoneStats } = this.currentProgress;
          if (newContentStats && newContentStats.total > 0) {
            tooltipText = `\u540C\u6B65\u4E2D\uFF1A\u5DF2\u5904\u7406 ${processedCount} \u6761
`;
            tooltipText += `\u65B0\u589E\u533A +${newContentStats.created} ~${newContentStats.updated} \xB7${newContentStats.skipped}`;
            if (bufferZoneStats && bufferZoneStats.total > 0) {
              tooltipText += ` | \u5BB9\u9519\u533A +${bufferZoneStats.created} ~${bufferZoneStats.updated}`;
            }
            tooltipText += `
\u672C\u6B21\u5904\u7406 +${stats.created} ~${stats.updated} \xB7${stats.skipped}`;
          } else {
            tooltipText = `\u540C\u6B65\u4E2D\uFF1A\u5DF2\u5904\u7406 ${processedCount} \u6761
\u672C\u6B21\u5904\u7406 +${stats.created} ~${stats.updated} \xB7${stats.skipped}`;
          }
        } else {
          tooltipText = "\u540C\u6B65\u4E2D...";
        }
        break;
      }
      case "success": {
        const lastStats = this.plugin.settings.lastSyncStats;
        if (lastStats) {
          const nc = lastStats.newContent;
          if (nc && nc.total > 0) {
            tooltipText = `\u540C\u6B65\u5B8C\u6210
\u65B0\u589E\u533A +${nc.created} ~${nc.updated} \xB7${nc.skipped}
\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5`;
          } else {
            tooltipText = `\u540C\u6B65\u5B8C\u6210
\u672C\u6B21\u5904\u7406 +${lastStats.created} ~${lastStats.updated} \xB7${lastStats.skipped} \xD7${lastStats.failed}
\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5`;
          }
        } else {
          tooltipText = "\u540C\u6B65\u5B8C\u6210\n\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5";
        }
        break;
      }
      case "error": {
        if (this.lastError) {
          const shortErrorMessage = this.lastError.message.length > 36 ? `${this.lastError.message.slice(0, 36)}...` : this.lastError.message;
          tooltipText = `\u540C\u6B65\u5931\u8D25\uFF1A${shortErrorMessage}
\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5\u5E76\u91CD\u8BD5`;
        } else {
          tooltipText = "\u540C\u6B65\u5931\u8D25\n\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5\u5E76\u91CD\u8BD5";
        }
        break;
      }
    }
    this.tooltipText = tooltipText;
    if (this.statusBarEl.matches(":hover") && this.tooltipText) {
      if (this.suppressHoverTooltipOnce) {
        this.suppressHoverTooltipOnce = false;
        return;
      }
      this.tooltipManager.show(this.statusBarEl, this.tooltipText, 100);
    }
  }
  /**
   * 获取状态图标 (Lucide 图标名称)
   */
  getStatusIcon() {
    switch (this.currentStatus) {
      case "syncing":
        return "loader";
      case "success":
        return "check-circle";
      case "error":
        return "alert-circle";
      default:
        return "cloud";
    }
  }
  /**
   * 更新上次同步时间显示
   */
  updateLastSyncTime() {
    const lastStats = this.plugin.settings.lastSyncStats;
    if (lastStats && lastStats.timestamp > 0) {
      const lastSync = (0, import_obsidian4.moment)(lastStats.timestamp);
      const now = (0, import_obsidian4.moment)();
      const diffMinutes = now.diff(lastSync, "minutes");
      const diffHours = now.diff(lastSync, "hours");
      const diffDays = now.diff(lastSync, "days");
      let timeText;
      if (diffMinutes < 1) {
        timeText = "\u521A\u521A";
      } else if (diffMinutes < 60) {
        timeText = `${diffMinutes}\u5206\u949F\u524D`;
      } else if (diffHours < 24) {
        timeText = `${diffHours}\u5C0F\u65F6\u524D`;
      } else {
        timeText = `${diffDays}\u5929\u524D`;
      }
      this.statusText = `Flomo: ${timeText}`;
    } else {
      this.statusText = "Flomo: \u672A\u540C\u6B65";
    }
  }
  /**
   * 显示进度通知
   */
  showProgressNotice(message) {
  }
  /**
   * 清理资源
   */
  unload() {
    this.tooltipManager.hide();
    this.statusBarEl.remove();
  }
  /**
   * 显示右键上下文菜单
   */
  showContextMenu(evt) {
    const menu = new import_obsidian4.Menu();
    menu.addItem(
      (item) => item.setTitle("\u7ACB\u5373\u540C\u6B65").setIcon("sync").onClick(() => {
        this.plugin.performSync();
      })
    );
    menu.addItem(
      (item) => item.setTitle("\u5168\u91CF\u540C\u6B65").setIcon("refresh-cw").onClick(() => {
        this.plugin.performFullSync();
      })
    );
    menu.addSeparator();
    menu.addItem(
      (item) => item.setTitle("\u6253\u5F00\u8BBE\u7F6E").setIcon("settings").onClick(() => {
        this.plugin.openSettings();
      })
    );
    menu.addItem(
      (item) => item.setTitle("\u4E0A\u6B21\u540C\u6B65\u8BE6\u60C5...").setIcon("info").onClick(() => {
        this.showLastSyncDetails();
      })
    );
    menu.showAtMouseEvent(evt);
  }
  /**
   * 显示上次同步详情
   */
  showLastSyncDetails() {
    const lastStats = this.plugin.settings.lastSyncStats;
    if (lastStats) {
      const syncDate = new Date(lastStats.timestamp).toLocaleString("zh-CN");
      const nc = lastStats.newContent;
      const bz = lastStats.bufferZone;
      let message = `\u4E0A\u6B21\u540C\u6B65\u7EDF\u8BA1 (${syncDate})
`;
      if (nc && nc.total > 0) {
        message += `\u3010\u771F\u6B63\u65B0\u589E\u3011\u65B0\u589E: ${nc.created} | \u66F4\u65B0: ${nc.updated} | \u8DF3\u8FC7: ${nc.skipped}
`;
      }
      if (bz && bz.total > 0) {
        message += `\u3010\u5BB9\u9519\u533A\u53D8\u5316\u3011\u65B0\u589E: ${bz.created} | \u66F4\u65B0: ${bz.updated}
`;
      }
      message += `\u3010\u5B9E\u9645\u5904\u7406\u3011\u65B0\u589E: ${lastStats.created} | \u66F4\u65B0: ${lastStats.updated} | \u8DF3\u8FC7: ${lastStats.skipped} | \u5931\u8D25: ${lastStats.failed}
`;
      message += `\u603B\u8BA1: ${lastStats.total} \u6761 | \u8017\u65F6: ${lastStats.duration}\u79D2`;
      new import_obsidian4.Notice(message, 6e3);
    } else {
      new import_obsidian4.Notice("\u6682\u65E0\u540C\u6B65\u8BB0\u5F55", 3e3);
    }
  }
};
function addStatusBarStyles(plugin) {
  const style = document.createElement("style");
  style.id = "flomo-sync-status-styles";
  style.textContent = `
    .flomo-sync-status {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 6px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .flomo-sync-status:hover {
      background-color: var(--background-modifier-hover);
    }

    .flomo-tooltip {
      position: fixed;
      z-index: 10000;
      max-width: 420px;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 12px;
      line-height: 1.4;
      color: var(--text-normal);
      background: var(--background-primary);
      border: 1px solid var(--background-modifier-border);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
      pointer-events: none;
      opacity: 0;
      transform: translateY(2px);
      transition: opacity 0.12s ease, transform 0.12s ease;
      white-space: nowrap;
    }

    .flomo-tooltip.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .flomo-sync-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
    }

    .flomo-sync-icon svg {
      width: 14px;
      height: 14px;
      stroke-width: 2;
    }

    .flomo-sync-text {
      font-size: 12px;
      color: var(--text-muted);
    }

    .flomo-sync-active .flomo-sync-icon svg {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* \u5B9E\u65F6\u540C\u6B65\u6570\u5B57\u6837\u5F0F */
    .flomo-sync-count {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-normal);
      font-variant-numeric: tabular-nums;
      font-family: var(--font-monospace);
      margin-right: 6px;
    }

    .flomo-sync-stats {
      display: inline-flex;
      gap: 6px;
      font-size: 11px;
    }

    .flomo-sync-stats .stat-created {
      color: var(--text-success, #2ea043);
      font-weight: 500;
    }

    .flomo-sync-stats .stat-updated {
      color: var(--text-accent, #58a6ff);
      font-weight: 500;
    }

    .flomo-sync-stats .stat-skipped {
      color: var(--text-muted);
    }

    /* \u8BBE\u7F6E\u9762\u677F\u7EDF\u8BA1\u5361\u7247\u6837\u5F0F */
    .flomo-stats-title {
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 14px;
      color: var(--text-normal);
    }

    .flomo-stats-container {
      background: var(--background-secondary);
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 16px;
    }

    .flomo-stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 12px;
    }

    .flomo-stats-item {
      text-align: center;
      padding: 8px;
      border-radius: 6px;
      background: var(--background-primary);
    }

    .flomo-stats-value {
      font-size: 20px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      font-family: var(--font-monospace);
      line-height: 1.2;
    }

    .flomo-stats-label {
      font-size: 11px;
      color: var(--text-muted);
      margin-top: 4px;
    }

    .flomo-stats-created .flomo-stats-value {
      color: var(--text-success, #2ea043);
    }

    .flomo-stats-updated .flomo-stats-value {
      color: var(--text-accent, #58a6ff);
    }

    .flomo-stats-skipped .flomo-stats-value {
      color: var(--text-muted);
    }

    .flomo-stats-failed .flomo-stats-value {
      color: var(--text-error, #f85149);
    }

    .flomo-stats-header {
      text-align: center;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--background-modifier-border);
      margin-bottom: 12px;
    }

    .flomo-stats-header .flomo-stats-time {
      font-size: 12px;
      color: var(--text-muted);
    }

    .flomo-stats-footer {
      text-align: center;
      padding-top: 8px;
      border-top: 1px solid var(--background-modifier-border);
    }

    .flomo-stats-summary {
      font-size: 11px;
      color: var(--text-muted);
    }

    /* \u8BBE\u7F6E\u9762\u677F\u8D21\u732E\u70ED\u529B\u56FE */
    .flomo-heatmap-title {
      margin-top: 12px;
      margin-bottom: 8px;
      font-size: 14px;
      color: var(--text-normal);
    }

    .flomo-heatmap-container {
      background: var(--background-secondary);
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 16px;
      overflow-x: auto;
    }

    .flomo-heatmap-empty {
      font-size: 12px;
      color: var(--text-muted);
      text-align: center;
      padding: 8px 0;
    }

    .flomo-heatmap-months {
      display: grid;
      grid-template-columns: 1fr;
      align-items: end;
      margin-bottom: 6px;
    }

    .flomo-heatmap-month-grid {
      display: grid;
      grid-template-columns: repeat(53, minmax(6px, 1fr));
      gap: 2px;
      min-width: 400px;
    }

    .flomo-heatmap-month-cell {
      min-height: 14px;
      font-size: 10px;
      color: var(--text-muted);
      line-height: 1;
    }

    .flomo-heatmap-body {
      display: grid;
      grid-template-columns: 1fr;
      gap: 6px;
      align-items: start;
    }

    .flomo-heatmap-grid {
      display: grid;
      grid-template-columns: repeat(53, minmax(6px, 1fr));
      gap: 2px;
      min-width: 400px;
    }

    .flomo-heatmap-week {
      display: grid;
      grid-template-rows: repeat(7, 8px);
      gap: 2px;
    }

    .flomo-heatmap-cell {
      width: 8px;
      height: 8px;
      border-radius: 1.5px;
      background: var(--background-modifier-border);
    }

    .flomo-heatmap-level-0 { background: var(--background-modifier-border); }
    .flomo-heatmap-level-1 { background: color-mix(in srgb, var(--text-success) 10%, transparent); }
    .flomo-heatmap-level-2 { background: color-mix(in srgb, var(--text-success) 20%, transparent); }
    .flomo-heatmap-level-3 { background: color-mix(in srgb, var(--text-success) 30%, transparent); }
    .flomo-heatmap-level-4 { background: color-mix(in srgb, var(--text-success) 40%, transparent); }
    .flomo-heatmap-level-5 { background: color-mix(in srgb, var(--text-success) 50%, transparent); }
    .flomo-heatmap-level-6 { background: color-mix(in srgb, var(--text-success) 60%, transparent); }
    .flomo-heatmap-level-7 { background: color-mix(in srgb, var(--text-success) 70%, transparent); }
    .flomo-heatmap-level-8 { background: color-mix(in srgb, var(--text-success) 85%, transparent); }
    .flomo-heatmap-level-9 { background: color-mix(in srgb, var(--text-success) 100%, transparent); }

    .flomo-heatmap-legend {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
      margin-top: 10px;
    }

    .flomo-heatmap-legend-text {
      font-size: 10px;
      color: var(--text-muted);
    }

    /* \u9519\u8BEF\u8BE6\u60C5\u5F39\u7A97\u6837\u5F0F */
    .flomo-error-modal-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--background-modifier-border);
    }

    .flomo-error-modal-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--text-error, #f85149);
    }

    .flomo-error-modal-icon svg {
      width: 24px;
      height: 24px;
      stroke-width: 2;
    }

    .flomo-error-modal-title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--text-normal);
    }

    .flomo-error-modal-details {
      margin-bottom: 20px;
    }

    .flomo-error-modal-row {
      margin-bottom: 12px;
      line-height: 1.5;
    }

    .flomo-error-modal-label {
      color: var(--text-muted);
      font-size: 13px;
    }

    .flomo-error-modal-code {
      font-family: var(--font-monospace);
      font-size: 13px;
      color: var(--text-error, #f85149);
      font-weight: 500;
    }

    .flomo-error-modal-message {
      font-size: 14px;
      color: var(--text-normal);
    }

    .flomo-error-modal-time {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px dashed var(--background-modifier-border);
    }

    .flomo-error-modal-time-text {
      font-size: 12px;
      color: var(--text-faint);
    }

    .flomo-error-modal-buttons {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }

    .flomo-error-modal-buttons button {
      flex: 1;
    }

    .flomo-error-modal-hint {
      text-align: center;
    }

    .flomo-error-modal-hint-text {
      color: var(--text-faint);
      font-size: 11px;
    }
  `;
  document.head.appendChild(style);
  plugin.register(() => {
    style.remove();
  });
}

// main.ts
var PLUGIN_VERSION = "1.0.1";
var FlomoSyncPlugin = class extends import_obsidian5.Plugin {
  constructor() {
    super(...arguments);
    this.syncIntervalId = null;
    this.isSyncing = false;
  }
  // public for sync completion refresh
  async onload() {
    console.log(`[FlomoSync] Plugin loaded, version: ${PLUGIN_VERSION}`);
    await this.loadSettings();
    addStatusBarStyles(this);
    this.statusBar = new StatusBarManager(this);
    this.settingsTab = new FlomoSyncSettingTab(this.app, this);
    this.addSettingTab(this.settingsTab);
    this.registerCommands();
    this.setupAutoSync();
    this.statusBar.setStatus("idle");
    if (this.settings.cursor.latest_updated_at > 0) {
      const lastSync = new Date(this.settings.cursor.latest_updated_at * 1e3);
      this.log("Last sync:", lastSync.toLocaleString());
    }
  }
  onunload() {
    var _a;
    console.log("Unloading Flomo Sync plugin");
    if (this.syncIntervalId !== null) {
      window.clearInterval(this.syncIntervalId);
      this.syncIntervalId = null;
    }
    (_a = this.statusBar) == null ? void 0 : _a.unload();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /**
   * 注册命令
   */
  registerCommands() {
    this.addCommand({
      id: "sync-now",
      name: "Sync Now",
      callback: () => this.performSync()
    });
    this.addCommand({
      id: "sync-full",
      name: "Sync Full",
      callback: () => this.performFullSync()
    });
    this.addCommand({
      id: "open-settings",
      name: "Open Settings",
      callback: () => this.openSettings()
    });
  }
  /**
   * 设置自动同步
   */
  setupAutoSync() {
    if (this.syncIntervalId !== null) {
      window.clearInterval(this.syncIntervalId);
      this.syncIntervalId = null;
    }
    const interval = this.settings.syncInterval;
    if (interval > 0) {
      const ms = interval * 1e3;
      this.syncIntervalId = window.setInterval(() => {
        this.log("Auto sync triggered");
        this.performSync();
      }, ms);
      this.log(`Auto sync enabled: every ${interval} seconds`);
    }
  }
  /**
   * 执行增量同步
   */
  async performSync() {
    var _a;
    if (this.isSyncing) {
      new import_obsidian5.Notice("\u540C\u6B65\u6B63\u5728\u8FDB\u884C\u4E2D...");
      return;
    }
    if (!this.settings.token) {
      new import_obsidian5.Notice("\u8BF7\u5148\u914D\u7F6E Flomo Token", 5e3);
      this.openSettings();
      return;
    }
    this.isSyncing = true;
    this.statusBar.setStatus("syncing", "\u6B63\u5728\u540C\u6B65...");
    let completedMessage = "\u540C\u6B65\u5B8C\u6210";
    try {
      const client = new FlomoClient({
        token: this.settings.token,
        targetDir: this.settings.targetDir,
        downloadAttachments: this.settings.downloadAttachments,
        syncInterval: this.settings.syncInterval,
        debugMode: this.settings.debugMode
      });
      const engine = new SyncEngine(client, this.settings, this.app, (progress) => {
        this.log("Sync progress:", progress);
        if (progress.status === "error") {
          const errorDetails = {};
          if (progress.error instanceof FlomoApiError) {
            errorDetails.code = progress.error.code;
            errorDetails.status = progress.error.status;
          }
          this.statusBar.setStatus("error", progress.message || "\u540C\u6B65\u5931\u8D25", errorDetails);
        } else if (progress.status === "completed") {
          completedMessage = progress.message || completedMessage;
        } else if (progress.status === "processing" && progress.processedCount !== void 0 && progress.stats) {
          this.statusBar.updateProgress(
            progress.processedCount,
            progress.stats,
            progress.newContentStats,
            progress.bufferZoneStats
          );
        } else {
          this.statusBar.setStatus("syncing", progress.message);
        }
      });
      const stats = await engine.sync(false);
      const duration = stats.endTime ? Math.round((stats.endTime.getTime() - stats.startTime.getTime()) / 1e3) : 0;
      this.settings.lastSyncStats = {
        created: stats.created,
        updated: stats.updated,
        skipped: stats.skipped,
        failed: stats.failed,
        total: stats.total,
        newContent: stats.newContent,
        bufferZone: stats.bufferZone,
        timestamp: Date.now(),
        duration
      };
      await this.saveSettings();
      this.statusBar.setStatus("success", completedMessage);
      (_a = this.settingsTab) == null ? void 0 : _a.refresh();
      this.log("Sync completed:", stats);
    } catch (error) {
      this.handleSyncError(error);
    } finally {
      this.isSyncing = false;
    }
  }
  /**
   * 执行全量同步
   */
  async performFullSync() {
    var _a;
    if (this.isSyncing) {
      new import_obsidian5.Notice("\u540C\u6B65\u6B63\u5728\u8FDB\u884C\u4E2D...");
      return;
    }
    if (!this.settings.token) {
      new import_obsidian5.Notice("\u8BF7\u5148\u914D\u7F6E Flomo Token", 5e3);
      this.openSettings();
      return;
    }
    this.isSyncing = true;
    this.statusBar.setStatus("syncing", "\u6B63\u5728\u5168\u91CF\u540C\u6B65...");
    let completedMessage = "\u5168\u91CF\u540C\u6B65\u5B8C\u6210";
    try {
      const client = new FlomoClient({
        token: this.settings.token,
        targetDir: this.settings.targetDir,
        downloadAttachments: this.settings.downloadAttachments,
        syncInterval: this.settings.syncInterval,
        debugMode: this.settings.debugMode
      });
      const engine = new SyncEngine(client, this.settings, this.app, (progress) => {
        this.log("Full sync progress:", progress);
        if (progress.status === "error") {
          const errorDetails = {};
          if (progress.error instanceof FlomoApiError) {
            errorDetails.code = progress.error.code;
            errorDetails.status = progress.error.status;
          }
          this.statusBar.setStatus("error", progress.message || "\u540C\u6B65\u5931\u8D25", errorDetails);
        } else if (progress.status === "completed") {
          completedMessage = progress.message || completedMessage;
        } else if (progress.status === "processing" && progress.processedCount !== void 0 && progress.stats) {
          this.statusBar.updateProgress(
            progress.processedCount,
            progress.stats,
            progress.newContentStats,
            progress.bufferZoneStats
          );
        } else {
          this.statusBar.setStatus("syncing", progress.message);
        }
      });
      const stats = await engine.sync(true);
      const duration = stats.endTime ? Math.round((stats.endTime.getTime() - stats.startTime.getTime()) / 1e3) : 0;
      this.settings.lastSyncStats = {
        created: stats.created,
        updated: stats.updated,
        skipped: stats.skipped,
        failed: stats.failed,
        total: stats.total,
        newContent: stats.newContent,
        bufferZone: stats.bufferZone,
        timestamp: Date.now(),
        duration
      };
      await this.saveSettings();
      this.statusBar.setStatus("success", completedMessage);
      (_a = this.settingsTab) == null ? void 0 : _a.refresh();
      new import_obsidian5.Notice(
        `Flomo \u5168\u91CF\u540C\u6B65\u5B8C\u6210
\u65B0\u589E: ${stats.created} | \u66F4\u65B0: ${stats.updated}
\u8DF3\u8FC7: ${stats.skipped} | \u5931\u8D25: ${stats.failed}
\u8017\u65F6: ${duration}s`,
        4e3
      );
      this.log("Full sync completed:", stats);
    } catch (error) {
      this.handleSyncError(error);
    } finally {
      this.isSyncing = false;
    }
  }
  /**
   * 处理同步错误
   */
  handleSyncError(error) {
    this.log("Sync error:", error);
    if (error instanceof FlomoApiError) {
      if (error.status === 401 || error.code === -1) {
        new import_obsidian5.Notice("Flomo Token \u65E0\u6548\u6216\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u914D\u7F6E", 5e3);
      } else if (error.status === 429) {
        new import_obsidian5.Notice("\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", 5e3);
      } else {
        new import_obsidian5.Notice(`\u540C\u6B65\u5931\u8D25: ${error.message}`, 5e3);
      }
    } else {
      const err = error;
      new import_obsidian5.Notice(`\u540C\u6B65\u5931\u8D25: ${err.message}`, 5e3);
    }
    this.statusBar.setStatus("error", "\u540C\u6B65\u5931\u8D25");
  }
  /**
   * 打开设置面板
   */
  openSettings() {
    this.app.setting.open();
    this.app.setting.openTabById(this.manifest.id);
  }
  /**
   * 调试日志
   */
  log(...args) {
    if (this.settings.debugMode) {
      console.log("[FlomoSync]", ...args);
    }
  }
};
