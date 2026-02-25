// ============================================================
// Finance Academy Web — App Controller
// 认知重力场 · 金融实验室
// DOM-safe: no innerHTML used anywhere (security policy)
// ============================================================

class FinanceAcademyApp {
  constructor() {
    this.activeCat   = 'all';
    this.activeCourse = null;
    this.viewMode    = 'grid';
    this.searchQuery = '';
    this.progress    = this._loadProgress();
    this._searchTimer = null;
    this._courseIndex = null;  // index of activeCourse in filtered list

    this._init();
  }

  // ──────────────────────────────────────────────────────────
  // Init
  // ──────────────────────────────────────────────────────────
  _init() {
    this.renderSidebarCategories();
    this._buildFilterTabs();
    this.renderCourses();
    this._bindEvents();
    this._updateProgressRing();
    lucide.createIcons();
  }

  // ──────────────────────────────────────────────────────────
  // Category colour map (matches design tokens in style.css)
  // ──────────────────────────────────────────────────────────
  _catColor(catId) {
    const map = {
      macro:   '#60a5fa',
      micro:   '#10b981',
      corp:    '#fbbf24',
      pricing: '#c084fc',
      metrics: '#fb7185',
      ai:      '#22d3ee'
    };
    return map[catId] || '#64748b';
  }

  // ──────────────────────────────────────────────────────────
  // Sidebar — category list
  // ──────────────────────────────────────────────────────────
  renderSidebarCategories() {
    const list = document.getElementById('cat-list');
    if (!list) return;
    list.textContent = '';   // clear

    // "All" item
    const allItem = this._makeCatItem('all', '全部课程', null, 48);
    allItem.classList.add('active');
    list.appendChild(allItem);

    courseData.categories.forEach(cat => {
      const item = this._makeCatItem(cat.id, cat.name, this._catColor(cat.id), cat.stats.courses);
      list.appendChild(item);
    });
  }

  _makeCatItem(id, name, color, count) {
    const li = document.createElement('li');

    const btn = document.createElement('button');
    btn.className = 'cat-item';
    btn.setAttribute('data-cat', id);
    btn.setAttribute('type', 'button');

    // Color dot
    const dot = document.createElement('span');
    dot.className = 'cat-dot';
    dot.style.background = color || 'var(--text-muted)';

    // Name
    const nameEl = document.createElement('span');
    nameEl.className = 'cat-item-name';
    nameEl.textContent = name;

    // Count
    const countEl = document.createElement('span');
    countEl.className = 'cat-item-count';
    countEl.textContent = String(count);

    btn.appendChild(dot);
    btn.appendChild(nameEl);
    btn.appendChild(countEl);
    li.appendChild(btn);

    btn.addEventListener('click', () => this._selectCategory(id));
    return li;
  }

  _selectCategory(catId) {
    this.activeCat = catId;
    // Update sidebar active state
    document.querySelectorAll('.cat-item').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-cat') === catId);
    });
    // Sync filter tab
    document.querySelectorAll('.filter-tab').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-cat') === catId);
    });
    this.renderCourses();
  }

  // ──────────────────────────────────────────────────────────
  // Filter tabs (top strip)
  // ──────────────────────────────────────────────────────────
  _buildFilterTabs() {
    const bar = document.getElementById('filter-tabs');
    if (!bar) return;
    // "All" tab is already in HTML; add category tabs
    courseData.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-tab';
      btn.setAttribute('data-cat', cat.id);
      btn.setAttribute('type', 'button');
      btn.textContent = cat.name;

      const badge = document.createElement('span');
      badge.className = 'tab-badge';
      badge.textContent = String(cat.stats.courses);
      btn.appendChild(badge);

      btn.addEventListener('click', () => this._selectCategory(cat.id));
      bar.appendChild(btn);
    });
  }

  // ──────────────────────────────────────────────────────────
  // Course grid
  // ──────────────────────────────────────────────────────────
  renderCourses() {
    const grid = document.getElementById('course-grid');
    const emptyState = document.getElementById('empty-state');
    if (!grid) return;

    let courses = courseData.courses;

    // Filter by category
    if (this.activeCat !== 'all') {
      courses = courses.filter(c => c.categoryId === this.activeCat);
    }

    // Filter by search
    const q = this.searchQuery.trim().toLowerCase();
    if (q) {
      courses = courses.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    grid.textContent = '';  // clear (no innerHTML)

    if (courses.length === 0) {
      emptyState && emptyState.classList.remove('hidden');
      return;
    }

    emptyState && emptyState.classList.add('hidden');

    courses.forEach((course, idx) => {
      const card = this.buildCourseCard(course, idx);
      grid.appendChild(card);
    });

    lucide.createIcons();
  }

  // ──────────────────────────────────────────────────────────
  // Build a single course card (DOM-safe, no innerHTML)
  // ──────────────────────────────────────────────────────────
  buildCourseCard(course, idx) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-id', course.id);
    card.style.setProperty('--card-accent', this._catColor(course.categoryId));

    if (this.activeCourse && this.activeCourse.id === course.id) {
      card.classList.add('active');
    }

    // ── Top row ──
    const top = document.createElement('div');
    top.className = 'card-top';

    const num = document.createElement('span');
    num.className = 'card-num';
    num.textContent = String(idx + 1).padStart(2, '0');

    const diff = document.createElement('span');
    diff.className = 'card-difficulty ' + this._diffClass(course.difficulty);
    diff.textContent = course.difficulty;

    top.appendChild(num);
    top.appendChild(diff);
    card.appendChild(top);

    // ── Title ──
    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = course.title;
    card.appendChild(title);

    // ── Tags ──
    if (course.tags && course.tags.length) {
      const tags = document.createElement('div');
      tags.className = 'card-tags';
      course.tags.slice(0, 3).forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'card-tag';
        tag.textContent = t;
        tags.appendChild(tag);
      });
      card.appendChild(tags);
    }

    // ── Footer ──
    const footer = document.createElement('div');
    footer.className = 'card-footer';

    const stat = document.createElement('div');
    stat.className = 'card-stat';

    // Clock icon via lucide (attribute injection)
    const iconWrap = document.createElement('span');
    iconWrap.setAttribute('data-lucide', 'clock');
    iconWrap.style.width = '11px';
    iconWrap.style.height = '11px';
    stat.appendChild(iconWrap);

    const dur = document.createElement('span');
    dur.textContent = course.duration;
    stat.appendChild(dur);

    const arrow = document.createElement('div');
    arrow.className = 'card-arrow';
    // SVG arrow inline
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 12 12');
    svg.setAttribute('width', '10');
    svg.setAttribute('height', '10');
    svg.setAttribute('fill', 'none');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M2 6h8M7 3l3 3-3 3');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);
    arrow.appendChild(svg);

    footer.appendChild(stat);
    footer.appendChild(arrow);
    card.appendChild(footer);

    // Click → open panel
    card.addEventListener('click', () => this.openPanel(course.id));

    return card;
  }

  _diffClass(diff) {
    if (diff === '基础') return 'diff-basic';
    if (diff === '中级') return 'diff-mid';
    return 'diff-advanced';
  }

  // ──────────────────────────────────────────────────────────
  // Detail panel
  // ──────────────────────────────────────────────────────────
  openPanel(courseId) {
    const course = courseData.courses.find(c => c.id === courseId);
    if (!course) return;

    this.activeCourse = course;

    // Mark active card
    document.querySelectorAll('.course-card').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-id') === courseId);
    });

    // Build panel meta
    this._renderPanelMeta(course);

    // Show panel + adjust layout
    const panel = document.getElementById('detail-panel');
    const main  = document.getElementById('main-content');
    panel.classList.add('open');
    main.classList.add('panel-open');

    // Backdrop (mobile)
    document.getElementById('panel-backdrop').classList.add('visible');

    // Track prev/next
    this._updatePanelNav(course);

    // Load iframe
    this._loadCourseIframe(course);

    // Persist progress
    this._markVisited(courseId);
  }

  _renderPanelMeta(course) {
    const meta = document.getElementById('panel-meta');
    if (!meta) return;
    meta.textContent = '';  // clear

    // Category tag
    const catTag = document.createElement('div');
    catTag.className = 'panel-cat-tag';
    catTag.style.background = this._catColor(course.categoryId) + '20';
    catTag.style.color = this._catColor(course.categoryId);
    catTag.style.borderColor = this._catColor(course.categoryId) + '40';
    catTag.style.border = '1px solid ' + this._catColor(course.categoryId) + '40';

    const catDot = document.createElement('span');
    catDot.style.cssText = 'width:6px;height:6px;border-radius:50%;background:currentColor;display:inline-block';
    catTag.appendChild(catDot);
    const catName = document.createElement('span');
    catName.textContent = course.category;
    catTag.appendChild(catName);
    meta.appendChild(catTag);

    // Title
    const title = document.createElement('h2');
    title.className = 'panel-title';
    title.textContent = course.title;
    meta.appendChild(title);

    // Description
    const desc = document.createElement('p');
    desc.className = 'panel-desc';
    desc.textContent = course.description;
    meta.appendChild(desc);

    // Stats row
    const statsRow = document.createElement('div');
    statsRow.className = 'panel-stats-row';

    [
      { icon: 'clock',         val: course.duration,                   lbl: '' },
      { icon: 'signal',        val: course.difficulty,                 lbl: '' },
      { icon: 'flask-conical', val: course.stats.interactives + '个',  lbl: '交互' }
    ].forEach(s => {
      const ps = document.createElement('div');
      ps.className = 'panel-stat';

      const ico = document.createElement('span');
      ico.setAttribute('data-lucide', s.icon);
      ico.style.cssText = 'width:12px;height:12px;flex-shrink:0';
      ps.appendChild(ico);

      const v = document.createElement('span');
      v.className = 'panel-stat-val';
      v.textContent = s.val + (s.lbl ? ' ' + s.lbl : '');
      ps.appendChild(v);

      statsRow.appendChild(ps);
    });

    meta.appendChild(statsRow);

    // Tags
    if (course.tags && course.tags.length) {
      const tagsWrap = document.createElement('div');
      tagsWrap.className = 'panel-tags';
      course.tags.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'panel-tag';
        tag.textContent = t;
        tagsWrap.appendChild(tag);
      });
      meta.appendChild(tagsWrap);
    }

    lucide.createIcons();
  }

  _loadCourseIframe(course) {
    const iframe  = document.getElementById('course-iframe');
    const loading = document.getElementById('iframe-loading');
    if (!iframe) return;

    loading && loading.classList.remove('hidden');
    iframe.src = 'about:blank';

    // Resolve HTML file path
    const htmlPath = 'HTML\u8bfe\u4ef6\u5408\u96c6/' + course.title + '.html';

    iframe.addEventListener('load', function onLoad() {
      loading && loading.classList.add('hidden');
      iframe.removeEventListener('load', onLoad);
    });

    // Small delay so CSS transition feels smooth
    setTimeout(() => { iframe.src = htmlPath; }, 180);
  }

  closePanel() {
    const panel = document.getElementById('detail-panel');
    const main  = document.getElementById('main-content');
    panel.classList.remove('open');
    main.classList.remove('panel-open');
    document.getElementById('panel-backdrop').classList.remove('visible');

    // Clear active card
    document.querySelectorAll('.course-card').forEach(el => el.classList.remove('active'));
    this.activeCourse = null;

    // Blank iframe to stop playback
    const iframe = document.getElementById('course-iframe');
    if (iframe) iframe.src = 'about:blank';
  }

  _updatePanelNav(course) {
    let courses = courseData.courses;
    if (this.activeCat !== 'all') {
      courses = courses.filter(c => c.categoryId === this.activeCat);
    }
    const idx   = courses.findIndex(c => c.id === course.id);
    const prev  = document.getElementById('panel-prev');
    const next  = document.getElementById('panel-next');
    if (prev) prev.disabled = idx <= 0;
    if (next) next.disabled = idx >= courses.length - 1;
    this._courseIndex = idx;
    this._filteredCourses = courses;
  }

  // ──────────────────────────────────────────────────────────
  // Progress ring
  // ──────────────────────────────────────────────────────────
  _updateProgressRing() {
    const visited = this.progress.visited.length;
    const total   = courseData.courses.length;
    const pct     = Math.round((visited / total) * 100);

    const r    = 28;
    const circ = +(2 * Math.PI * r).toFixed(1);  // 175.9
    const offset = +(circ * (1 - pct / 100)).toFixed(1);

    const ring = document.getElementById('progress-ring-circle');
    if (ring) {
      ring.setAttribute('stroke-dasharray', String(circ));
      ring.setAttribute('stroke-dashoffset', String(offset));
    }

    const pctEl = document.getElementById('progress-pct');
    if (pctEl) pctEl.textContent = pct + '%';

    const doneEl = document.getElementById('stat-done');
    if (doneEl) doneEl.textContent = String(visited);
  }

  _markVisited(courseId) {
    if (!this.progress.visited.includes(courseId)) {
      this.progress.visited.push(courseId);
      this._saveProgress();
      this._updateProgressRing();
    }
  }

  // ──────────────────────────────────────────────────────────
  // Progress persistence
  // ──────────────────────────────────────────────────────────
  _loadProgress() {
    try {
      const raw = localStorage.getItem('cg_lab_progress');
      if (raw) return JSON.parse(raw);
    } catch (_) { /* ignore */ }
    return { visited: [], startedAt: new Date().toISOString() };
  }

  _saveProgress() {
    try {
      localStorage.setItem('cg_lab_progress', JSON.stringify(this.progress));
    } catch (_) { /* ignore */ }
  }

  // ──────────────────────────────────────────────────────────
  // Event binding
  // ──────────────────────────────────────────────────────────
  _bindEvents() {
    // Search — debounced
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        clearTimeout(this._searchTimer);
        this._searchTimer = setTimeout(() => {
          this.searchQuery = e.target.value;
          this.renderCourses();
        }, 200);
      });

      // ⌘K focus shortcut
      document.addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          searchInput.focus();
          searchInput.select();
        }
      });
    }

    // Reset search
    document.getElementById('reset-search')?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      this.searchQuery = '';
      this.renderCourses();
    });

    // Close panel
    document.getElementById('close-panel')?.addEventListener('click', () => this.closePanel());
    document.getElementById('panel-backdrop')?.addEventListener('click', () => this.closePanel());

    // Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closePanel();
    });

    // Panel prev/next
    document.getElementById('panel-prev')?.addEventListener('click', () => this._navigatePanel(-1));
    document.getElementById('panel-next')?.addEventListener('click', () => this._navigatePanel(1));

    // View toggle
    document.getElementById('btn-grid')?.addEventListener('click', () => this._setViewMode('grid'));
    document.getElementById('btn-list')?.addEventListener('click', () => this._setViewMode('list'));

    // iframe fullscreen (open in new tab)
    document.getElementById('toggle-fullscreen')?.addEventListener('click', () => {
      if (!this.activeCourse) return;
      const path = 'HTML\u8bfe\u4ef6\u5408\u96c6/' + this.activeCourse.title + '.html';
      window.open(path, '_blank', 'noopener');
    });
  }

  _navigatePanel(dir) {
    if (!this._filteredCourses) return;
    const next = this._filteredCourses[this._courseIndex + dir];
    if (next) this.openPanel(next.id);
  }

  _setViewMode(mode) {
    this.viewMode = mode;
    const grid = document.getElementById('course-grid');
    if (grid) grid.classList.toggle('list-mode', mode === 'list');

    document.getElementById('btn-grid')?.classList.toggle('active', mode === 'grid');
    document.getElementById('btn-list')?.classList.toggle('active', mode === 'list');
  }

  // ──────────────────────────────────────────────────────────
  // Notification toast
  // ──────────────────────────────────────────────────────────
  notify(msg, type = 'info') {
    const el = document.createElement('div');
    el.className = 'notification notif-' + type;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  window.app = new FinanceAcademyApp();
});
