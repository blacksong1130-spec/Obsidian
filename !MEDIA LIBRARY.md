---
type: portal
cssclasses:
  - media-gallery
tags: [media, library, portal, gallery]
updated: 2026-04-19
---

```dataviewjs
// ============================================================
// 我的媒体库 · Media Library Gallery
// 数据源: 02-电影阅读/  (book / movie / teleplay / game)
// ============================================================
const ITEMS_PER_PAGE = 24;

dv.container.innerHTML += `
<style>
.gallery-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.filter-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    background: var(--background-secondary);
    padding: 15px;
    border-radius: 8px;
}
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
}
.gallery-card {
    position: relative;
    overflow: hidden;
    aspect-ratio: 2/3;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background: var(--background-secondary);
    box-shadow: 0 3px 8px rgba(31, 30, 30, 0.39);
    border-radius: 6px;
}
.gallery-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.gallery-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: transform 0.3s ease;
    border-radius: 6px;
}
.gallery-card:hover img {
    transform: scale(1.05);
}
.type-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 0.8em;
}
.rating-badge {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0,0,0,0.7);
    color: #ffeb3b;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    z-index: 2;
}
.date-badge {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    z-index: 2;
}
.status-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 5px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    cursor: pointer;
    z-index: 2;
}
.status-badge:hover { background: rgba(0,0,0,0.9); }
.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
}
.page-btn {
    padding: 8px 15px;
    border-radius: 6px;
    background: var(--background-secondary);
    cursor: pointer;
    transition: background 0.2s ease;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: none;
}
.page-btn:hover { background: var(--background-modifier-hover); }
.page-btn.active {
    background: var(--interactive-accent);
    color: var(--text-on-accent);
}
.page-btn-ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 15px;
    min-height: 40px;
}
.loading-indicator { text-align: center; padding: 20px; font-style: italic; }
.no-results { text-align: center; padding: 30px; font-style: italic; color: var(--text-muted); }
.horizontal-filter-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    min-height: 48px;
    background-color: rgba(0,0,0,0.05);
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: var(--text-normal);
    transition: all 0.2s ease;
}
.horizontal-filter-item {
    flex: 1;
    min-width: 120px;
    position: relative;
    border-right: 1px solid rgba(0,0,0,0.5);
}
.horizontal-filter-item:last-child { border-right: none; }
.horizontal-filter-select {
    width: 100%;
    padding: 12px 16px;
    border: none;
    background-color: transparent;
    font-size: 14px;
    color: var(--text-normal);
    appearance: none;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
    min-height: 48px;
    box-shadow: none;
    border-radius: 0;
}
.horizontal-filter-select:hover { background-color: rgba(0,0,0,0.05); }
.horizontal-filter-select:focus { outline: none; background-color: rgba(0,0,0,0.08); }
.horizontal-filter-select option {
    background-color: var(--background-primary);
    color: var(--text-normal);
    font-weight: 500;
}
.horizontal-search-box {
    flex: 2;
    min-width: 200px;
    position: relative;
    border-right: 1px solid rgba(0,0,0,0.1);
}
.horizontal-search-input {
    width: 100%;
    padding: 12px 16px 12px 40px;
    border: none;
    background-color: transparent;
    font-size: 14px;
    color: var(--text-normal);
    height: 48px;
}
.horizontal-search-input:focus { outline: none; background-color: rgba(0,0,0,0.05); }
.horizontal-search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
}
.add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    min-height: 48px;
    background-color: rgba(0,0,0,0.05);
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: var(--text-normal);
    transition: all 0.2s ease;
}
.add-button:hover { color: var(--interactive-accent); }
</style>
`;

const container = dv.el("div", "", { cls: "gallery-container" });

async function loadData() {
    const loadingIndicator = dv.el("div", "加载中...", { cls: "loading-indicator" });
    container.appendChild(loadingIndicator);
    
    const pages = dv.pages('"02-电影阅读"')
        .filter(p => p.file)
        .map(p => {
            let cover = p.image || p.cover || p.poster || p.thumbnail || p.coverImage || "";
            let creator = p.author || p.director || p.artist || p.developer || "";
            let date = p.datePublished || p.releaseDate || p.year || p.publishYear || "";
            let score = typeof p.score === 'number' ? p.score : parseFloat(p.score || 0);
            let tags = Array.isArray(p.tags) ? p.tags : (p.tags ? [p.tags] : []);
            return {
                title: p.title || p.file.name,
                creator: creator,
                date: date,
                year: p.year || p.publishYear || "",
                score: score,
                type: p.type || "",
                status: p.status !== undefined ? p.status : false,
                cover: cover,
                path: p.file.path,
                file: p.file,
                genre: p.genre || "",
                publisher: p.publisher || "",
                platform: p.platform || "",
                tags: tags,
                rawContent: p.file.content || ""
            };
        });
    
    container.removeChild(loadingIndicator);
    return pages;
}

function createHorizontalFilterBar(pages, onFilter) {
    const types = [...new Set(pages.map(p => p.type).filter(Boolean))];
    const filterBar = dv.el("div", "", { cls: "horizontal-filter-bar" });
    
    const searchBox = dv.el("div", "", { cls: "horizontal-search-box" });
    const searchIcon = dv.el("span", "🔍", { cls: "horizontal-search-icon" });
    const searchInput = dv.el("input", "", { cls: "horizontal-search-input", attr: { placeholder: "搜索标题、创作者..." } });
    searchBox.appendChild(searchIcon);
    searchBox.appendChild(searchInput);
    filterBar.appendChild(searchBox);
    
    const typeItem = dv.el("div", "", { cls: "horizontal-filter-item" });
    const typeSelect = dv.el("select", "", { cls: "horizontal-filter-select" });
    const defaultTypeOpt = document.createElement("option");
    defaultTypeOpt.value = ""; defaultTypeOpt.textContent = "类型";
    defaultTypeOpt.disabled = true; defaultTypeOpt.selected = true;
    typeSelect.appendChild(defaultTypeOpt);
    const allTypeOpt = document.createElement("option");
    allTypeOpt.value = "all"; allTypeOpt.textContent = "全部类型";
    typeSelect.appendChild(allTypeOpt);
    types.forEach(type => {
        const opt = document.createElement("option");
        opt.value = type;
        const icons = { movie: '🎬 ', teleplay: '📺 ', tv: '📺 ', book: '📚 ', music: '🎵 ', game: '🎮 ' };
        opt.textContent = (icons[type] || '') + type;
        typeSelect.appendChild(opt);
    });
    typeItem.appendChild(typeSelect);
    filterBar.appendChild(typeItem);
    
    const ratingItem = dv.el("div", "", { cls: "horizontal-filter-item" });
    const ratingSelect = dv.el("select", "", { cls: "horizontal-filter-select" });
    const defaultRatingOpt = document.createElement("option");
    defaultRatingOpt.value = ""; defaultRatingOpt.textContent = "评分";
    defaultRatingOpt.disabled = true; defaultRatingOpt.selected = true;
    ratingSelect.appendChild(defaultRatingOpt);
    [{value:'all',text:'全部评分'},{value:'5',text:'⭐⭐⭐⭐⭐'},{value:'4',text:'⭐⭐⭐⭐'},{value:'3',text:'⭐⭐⭐'},{value:'2',text:'⭐⭐'},{value:'1',text:'⭐'}].forEach(o => {
        const opt = document.createElement("option"); opt.value = o.value; opt.textContent = o.text;
        ratingSelect.appendChild(opt);
    });
    ratingItem.appendChild(ratingSelect);
    filterBar.appendChild(ratingItem);
    
    const statusItem = dv.el("div", "", { cls: "horizontal-filter-item" });
    const statusSelect = dv.el("select", "", { cls: "horizontal-filter-select" });
    const defaultStatusOpt = document.createElement("option");
    defaultStatusOpt.value = ""; defaultStatusOpt.textContent = "状态";
    defaultStatusOpt.disabled = true; defaultStatusOpt.selected = true;
    statusSelect.appendChild(defaultStatusOpt);
    [{value:'all',text:'全部状态'},{value:'true',text:'已完成'},{value:'false',text:'未完成'}].forEach(o => {
        const opt = document.createElement("option"); opt.value = o.value; opt.textContent = o.text;
        statusSelect.appendChild(opt);
    });
    statusItem.appendChild(statusSelect);
    filterBar.appendChild(statusItem);
    
    const sortItem = dv.el("div", "", { cls: "horizontal-filter-item" });
    const sortSelect = dv.el("select", "", { cls: "horizontal-filter-select" });
    const defaultSortOpt = document.createElement("option");
    defaultSortOpt.value = ""; defaultSortOpt.textContent = "排序";
    defaultSortOpt.disabled = true; defaultSortOpt.selected = true;
    sortSelect.appendChild(defaultSortOpt);
    [
        {value:JSON.stringify({field:'score',direction:'desc'}),text:'评分 ↓'},
        {value:JSON.stringify({field:'score',direction:'asc'}),text:'评分 ↑'},
        {value:JSON.stringify({field:'title',direction:'asc'}),text:'标题 A-Z'},
        {value:JSON.stringify({field:'date',direction:'desc'}),text:'日期 (新→旧)'},
        {value:JSON.stringify({field:'date',direction:'asc'}),text:'日期 (旧→新)'}
    ].forEach(o => {
        const opt = document.createElement("option"); opt.value = o.value; opt.textContent = o.text;
        sortSelect.appendChild(opt);
    });
    sortItem.appendChild(sortSelect);
    filterBar.appendChild(sortItem);
    
    const addItem = dv.el("div", "", { cls: "horizontal-filter-item" });
    const addBtn = dv.el("button", "+", { cls: "add-button" });
    addBtn.title = "从豆瓣添加媒体";
    addBtn.addEventListener('click', () => {
        const cmds = app.commands.commands;
        const douban = Object.values(cmds).find(c => c.name && (c.name.includes('Douban') || c.name.includes('豆瓣')));
        if (douban) app.commands.executeCommandById(douban.id);
        else new Notice("请先安装豆瓣插件 (obsidian-douban-plugin)");
    });
    addItem.appendChild(addBtn);
    filterBar.appendChild(addItem);
    
    const savedFilters = loadFilters();
    if (savedFilters) {
        searchInput.value = savedFilters.search || '';
        typeSelect.value = savedFilters.type || 'all';
        ratingSelect.value = savedFilters.rating || 'all';
        statusSelect.value = savedFilters.status || 'all';
        if (savedFilters.sort) sortSelect.value = JSON.stringify(savedFilters.sort);
    }
    
    const triggerFilter = () => {
        const f = {
            search: searchInput.value,
            type: typeSelect.value,
            rating: ratingSelect.value,
            status: statusSelect.value,
            sort: sortSelect.value ? JSON.parse(sortSelect.value) : {field:'score',direction:'desc'}
        };
        saveFilters(f);
        onFilter(f);
    };
    
    searchInput.addEventListener('input', triggerFilter);
    [typeSelect, ratingSelect, statusSelect, sortSelect].forEach(s => s.addEventListener('change', triggerFilter));
    return filterBar;
}

function saveFilters(f) {
    try { localStorage.setItem('mlFilters', JSON.stringify(f)); localStorage.setItem('mlFiltersTs', Date.now().toString()); } catch(e){}
}
function loadFilters() {
    try {
        const f = localStorage.getItem('mlFilters');
        const ts = parseInt(localStorage.getItem('mlFiltersTs') || '0');
        if (f && Date.now() - ts < 30*60*1000) return JSON.parse(f);
    } catch(e){}
    return null;
}
function saveCurrentPage(p) { try { localStorage.setItem('mlPage', p.toString()); localStorage.setItem('mlPageTs', Date.now().toString()); } catch(e){} }
function loadCurrentPage() {
    try {
        const p = localStorage.getItem('mlPage');
        const ts = parseInt(localStorage.getItem('mlPageTs') || '0');
        if (p && Date.now() - ts < 30*60*1000) return parseInt(p);
    } catch(e){}
    return 1;
}

function getTypeIcon(type) {
    return {movie:'🎬', book:'📚', teleplay:'📺', tv:'📺', music:'🎵', game:'🎮'}[type] || '📄';
}
function getRatingStars(score) {
    score = typeof score === 'number' ? score : parseFloat(score || 0);
    if (score >= 9) return '⭐⭐⭐⭐⭐';
    if (score >= 7) return '⭐⭐⭐⭐';
    if (score >= 5) return '⭐⭐⭐';
    if (score >= 3) return '⭐⭐';
    if (score > 0) return '⭐';
    return '未评分';
}
function getCoverUrl(page) {
    if (!page || !page.cover) return '';
    const p = page.cover;
    if (p.startsWith('http') || p.startsWith('data:')) return p;
    if (p.includes('[[') || p.includes('![[')) {
        const clean = p.replace(/[!\[\]]/g, '').split('|')[0].trim();
        try { return app.vault.adapter.getResourcePath(clean); } catch(e) { return ''; }
    }
    try { return app.vault.adapter.getResourcePath(p); } catch(e) { return p; }
}
function getDefaultCover(type) {
    const colors = {movie:'6b4a67', book:'674a4a', teleplay:'4a5e67', tv:'4a5e67', game:'4a6741'};
    const c = colors[type] || '4a4a4a';
    const icons = {movie:'🎬+电影', book:'📚+书籍', teleplay:'📺+剧集', tv:'📺+剧集', game:'🎮+游戏'};
    const i = icons[type] || '📄+未知';
    return `https://via.placeholder.com/300x450/${c}/ffffff?text=${i}`;
}
function formatDate(d) {
    if (!d) return '';
    if (/^\d{4}$/.test(String(d))) return String(d);
    const dt = new Date(d);
    if (isNaN(dt.getTime())) return String(d);
    const y = dt.getFullYear();
    const m = (dt.getMonth()+1).toString().padStart(2,'0');
    return `${y}-${m}`;
}

async function updateStatus(page, newStatus) {
    try {
        const content = await app.vault.read(app.vault.getAbstractFileByPath(page.path));
        const hasStatus = /status:\s*(true|false)/i.test(content);
        let newContent;
        if (hasStatus) {
            newContent = content.replace(/status:\s*(true|false)/i, `status: ${newStatus}`);
        } else if (content.startsWith('---')) {
            const end = content.indexOf('---', 3);
            if (end !== -1) newContent = content.slice(0, end) + `status: ${newStatus}\n` + content.slice(end);
            else newContent = content;
        } else {
            newContent = `---\nstatus: ${newStatus}\n---\n\n${content}`;
        }
        await app.vault.modify(app.vault.getAbstractFileByPath(page.path), newContent);
        return true;
    } catch(e) { return false; }
}

function createPagination(totalPages, currentPage, onPageChange) {
    const pagination = dv.el("div", "", { cls: "pagination" });
    if (currentPage > 1) {
        const prev = dv.el("div", "上一页", { cls: "page-btn" });
        prev.addEventListener('click', () => onPageChange(currentPage - 1));
        pagination.appendChild(prev);
    }
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            const btn = dv.el("div", i.toString(), { cls: `page-btn ${i === currentPage ? 'active' : ''}` });
            btn.addEventListener('click', () => onPageChange(i));
            pagination.appendChild(btn);
        } else if ((i === currentPage - 3 || i === currentPage + 3) && pagination.lastChild && !pagination.lastChild.classList.contains('page-btn-ellipsis')) {
            pagination.appendChild(dv.el("div", "...", { cls: "page-btn-ellipsis" }));
        }
    }
    if (currentPage < totalPages) {
        const next = dv.el("div", "下一页", { cls: "page-btn" });
        next.addEventListener('click', () => onPageChange(currentPage + 1));
        pagination.appendChild(next);
    }
    return pagination;
}

function renderGallery(pages, filters, currentPage, onPageChange) {
    let fp = [...pages];
    
    if (filters.search) {
        const terms = filters.search.toLowerCase().split(/\s+/).filter(t => t.length > 0);
        if (terms.length > 0) {
            fp = fp.filter(p => {
                const text = [p.title, p.creator, p.type, p.genre, p.publisher, p.platform, String(p.year||''), String(p.date||''), ...(p.tags||[]), p.rawContent].filter(Boolean).join(' ').toLowerCase();
                return terms.every(t => text.includes(t));
            });
        }
    }
    if (filters.type && filters.type !== 'all') fp = fp.filter(p => p.type === filters.type);
    if (filters.rating && filters.rating !== 'all') {
        const r = parseInt(filters.rating);
        fp = fp.filter(p => {
            const s = typeof p.score === 'number' ? p.score : parseFloat(p.score || 0);
            if (r === 5) return s >= 9;
            if (r === 4) return s >= 7 && s < 9;
            if (r === 3) return s >= 5 && s < 7;
            if (r === 2) return s >= 3 && s < 5;
            if (r === 1) return s > 0 && s < 3;
            return false;
        });
    }
    if (filters.status && filters.status !== 'all') {
        const target = filters.status === 'true';
        fp = fp.filter(p => p.status === target);
    }
    if (filters.sort) {
        fp = fp.sort((a, b) => {
            let va, vb;
            if (filters.sort.field === 'score') {
                va = typeof a.score === 'number' ? a.score : parseFloat(a.score || 0);
                vb = typeof b.score === 'number' ? b.score : parseFloat(b.score || 0);
            } else if (filters.sort.field === 'title') {
                va = (a.title||'').toLowerCase(); vb = (b.title||'').toLowerCase();
            } else if (filters.sort.field === 'date') {
                va = a.date ? new Date(a.date) : new Date(0);
                vb = b.date ? new Date(b.date) : new Date(0);
            } else {
                va = a[filters.sort.field] || ''; vb = b[filters.sort.field] || '';
            }
            return filters.sort.direction === 'asc' ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
        });
    }
    
    const totalPages = Math.max(1, Math.ceil(fp.length / ITEMS_PER_PAGE));
    const validPage = Math.min(totalPages, Math.max(1, currentPage));
    const paginated = fp.slice((validPage-1)*ITEMS_PER_PAGE, validPage*ITEMS_PER_PAGE);
    
    saveCurrentPage(validPage);
    
    const grid = document.querySelector('.gallery-grid');
    grid.innerHTML = '';
    
    // Result count
    const countEl = document.createElement('div');
    countEl.style.cssText = 'font-size:0.85em;color:var(--text-muted);margin-bottom:8px;';
    countEl.textContent = `找到 ${fp.length} 个结果`;
    grid.parentNode.insertBefore(countEl, grid);
    
    if (fp.length === 0) {
        grid.innerHTML = '<div class="no-results">没有找到匹配的结果</div>';
        return { totalPages, currentPage: 1 };
    }
    
    paginated.forEach(page => {
        const card = dv.el("div", "", { cls: "gallery-card" });
        const img = document.createElement("img");
        img.src = page.cover ? getCoverUrl(page) : getDefaultCover(page.type);
        img.alt = page.title;
        img.onerror = () => { img.src = getDefaultCover(page.type); };
        card.appendChild(img);
        
        if (page.type) card.appendChild(dv.el("div", getTypeIcon(page.type) + " " + page.type, { cls: "type-badge" }));
        if (page.score) card.appendChild(dv.el("div", getRatingStars(page.score), { cls: "rating-badge" }));
        const dateText = formatDate(page.date || page.year);
        if (dateText) card.appendChild(dv.el("div", dateText, { cls: "date-badge" }));
        
        const statusBadge = dv.el("div", page.status ? "已完成" : "未完成", { cls: "status-badge" });
        statusBadge.addEventListener('click', async (e) => {
            e.stopPropagation();
            const newStatus = !page.status;
            const ok = await updateStatus(page, newStatus);
            if (ok) {
                page.status = newStatus;
                statusBadge.textContent = newStatus ? "已完成" : "未完成";
            }
        });
        card.appendChild(statusBadge);
        
        card.addEventListener('click', () => app.workspace.openLinkText(page.path, '', false));
        grid.appendChild(card);
    });
    
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) container.removeChild(existingPagination);
    if (totalPages > 1) container.appendChild(createPagination(totalPages, validPage, onPageChange));
    
    return { totalPages, currentPage: validPage };
}

async function initGallery() {
    const grid = dv.el("div", "", { cls: "gallery-grid" });
    container.appendChild(grid);
    
    const pages = await loadData();
    
    const savedFilters = loadFilters() || { search:'', type:'all', rating:'all', status:'all', sort:{field:'score',direction:'desc'} };
    let currentPage = loadCurrentPage();
    
    const handlePageChange = (page) => {
        currentPage = page;
        saveCurrentPage(page);
        renderGallery(pages, savedFilters, currentPage, handlePageChange);
    };
    
    const filterBar = createHorizontalFilterBar(pages, (newFilters) => {
        Object.assign(savedFilters, newFilters);
        currentPage = 1;
        saveCurrentPage(1);
        const { currentPage: validPage } = renderGallery(pages, savedFilters, currentPage, handlePageChange);
        currentPage = validPage;
    });
    
    container.insertBefore(filterBar, grid);
    const { currentPage: validPage } = renderGallery(pages, savedFilters, currentPage, handlePageChange);
    currentPage = validPage;
}

dv.container.appendChild(container);
initGallery();
```
