const API = CONFIG.APPS_SCRIPT_URL;

async function apiFetch(params) {
  const url = API + '?' + new URLSearchParams(params).toString();
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

/* ── 탭 전환 ── */
document.querySelectorAll('.user-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.user-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.user-tab-pane').forEach(p => p.style.display = 'none');
    btn.classList.add('active');
    document.getElementById('user-pane-' + btn.dataset.tab).style.display = 'block';
    if (btn.dataset.tab === 'history') loadHistory();
  });
});

/* ── 현황 탭 ── */
async function loadStatus() {
  try {
    const data = await apiFetch({ action: 'getPublicSummary' });
    if (!data.success) throw new Error(data.error || 'fail');

    const available = data.available ?? 0;
    const total     = data.total     ?? 0;
    const used      = data.used      ?? 0;

    animateNumber('available-count', available);
    document.getElementById('total-count').textContent = total;
    document.getElementById('used-count').textContent  = used;

    renderStars(available);
  } catch (e) {
    document.getElementById('available-count').textContent = '?';
    document.getElementById('status-error').style.display = 'block';
  }
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  const duration = 600;
  const start = performance.now();
  const from = 0;
  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(from + (target - from) * ease);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function renderStars(count) {
  const container = document.getElementById('star-display');
  container.innerHTML = '';

  if (count === 0) {
    container.innerHTML = '<span class="no-sticker-msg">아직 스티커가 없어요 🌱</span>';
    return;
  }

  const MAX_SHOW = 30;
  const show = Math.min(count, MAX_SHOW);

  for (let i = 0; i < show; i++) {
    const s = document.createElement('span');
    s.className = 'display-star';
    s.textContent = '⭐';
    s.style.animationDelay = (i * 30) + 'ms';
    container.appendChild(s);
  }

  if (count > MAX_SHOW) {
    const more = document.createElement('span');
    more.className = 'star-more';
    more.textContent = '+' + (count - MAX_SHOW);
    container.appendChild(more);
  }
}

/* ── 사용 기록 탭 ── */
let historyLoaded = false;

async function loadHistory() {
  if (historyLoaded) return;
  historyLoaded = true;

  const listEl  = document.getElementById('history-list');
  const errorEl = document.getElementById('history-error');
  listEl.innerHTML  = '<p class="loading-msg">로딩 중...</p>';
  errorEl.style.display = 'none';

  try {
    const data = await apiFetch({ action: 'getPublicHistory' });
    if (!data.success) throw new Error(data.error || 'fail');

    const history = data.history ?? [];
    if (history.length === 0) {
      listEl.innerHTML = '<p class="empty-msg">아직 사용 기록이 없어요.</p>';
      return;
    }

    listEl.innerHTML = history.map(item => `
      <div class="history-item">
        <span class="history-date">${formatDate(item.date)}</span>
        <span class="history-stars-row">${'⭐'.repeat(Math.min(item.count, 5))}</span>
        <span class="history-count-badge">⭐ ${item.count}개</span>
      </div>
    `).join('');
  } catch (e) {
    historyLoaded = false;
    listEl.innerHTML = '';
    errorEl.style.display = 'block';
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const days = ['일','월','화','수','목','금','토'];
  const dow = days[d.getDay()];
  return `${y}년 ${m}월 ${day}일 (${dow})`;
}

document.getElementById('history-refresh-btn').addEventListener('click', () => {
  historyLoaded = false;
  loadHistory();
});

/* ── 초기 로드 ── */
loadStatus();
