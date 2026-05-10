/* ============================================================
   admin.js — 스티커 관리 시스템 관리자 페이지
   ============================================================ */

const API_URL = (typeof CONFIG !== 'undefined') ? CONFIG.APPS_SCRIPT_URL : '';

let authToken      = sessionStorage.getItem('admin_token');
let allRecords     = [];
let presets        = [];
let selectedCount  = 1;
let presetPanelOpen = false;

/* =================== 초기화 =================== */
document.addEventListener('DOMContentLoaded', () => {

  if (!API_URL || API_URL === 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE') {
    document.getElementById('setup-notice').style.display = 'block';
    document.getElementById('login-btn').disabled = true;
    return;
  }

  if (authToken) {
    showDashboard();
    loadAll();
  }

  document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();
    login();
  });

  document.getElementById('logout-btn').addEventListener('click', logout);

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.getElementById('add-btn').addEventListener('click', addSticker);
  document.getElementById('use-btn').addEventListener('click', useStickers);
  document.getElementById('new-preset-btn').addEventListener('click', addPreset);
  document.getElementById('new-preset-text').addEventListener('keydown', e => {
    if (e.key === 'Enter') addPreset();
  });
  document.getElementById('refresh-btn').addEventListener('click', loadRecords);
  document.getElementById('filter-unused').addEventListener('change', renderRecords);
  document.getElementById('preset-toggle-btn').addEventListener('click', togglePresetPanel);

  initStarRating();
});

/* =================== 인증 =================== */
async function login() {
  const pw    = document.getElementById('pw-input').value;
  const btn   = document.getElementById('login-btn');
  const errEl = document.getElementById('login-error');

  errEl.style.display = 'none';
  if (!pw) { showMsg(errEl, '비밀번호를 입력해주세요.', false); return; }

  setLoading(btn, true, '로그인 중...');
  try {
    const res = await apiPost({ action: 'login', password: pw });
    if (res.success) {
      authToken = res.token;
      sessionStorage.setItem('admin_token', authToken);
      document.getElementById('pw-input').value = '';
      showDashboard();
      loadAll();
    } else {
      showMsg(errEl, res.error || '로그인에 실패했습니다.', false);
    }
  } catch (err) {
    showMsg(errEl, '서버에 연결할 수 없습니다. Apps Script URL을 확인해주세요.', false);
  } finally {
    setLoading(btn, false, '로그인');
  }
}

function logout() {
  if (!confirm('로그아웃 하시겠습니까?')) return;
  authToken = null;
  sessionStorage.removeItem('admin_token');
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
}

function showDashboard() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
}

/* =================== 데이터 로딩 =================== */
async function loadAll() {
  await Promise.all([loadSummary(), loadPresets(), loadRecords()]);
}

async function loadSummary() {
  try {
    const res = await apiGet('getSummary');
    if (res.success) {
      document.getElementById('count-total').textContent     = res.total;
      document.getElementById('count-available').textContent = res.available;
      document.getElementById('count-used').textContent      = res.used;
      document.getElementById('use-available').textContent   = res.available;
    }
  } catch (e) { console.error('요약 로드 실패:', e); }
}

async function loadPresets() {
  try {
    const res = await apiGet('getPresets');
    if (res.success) {
      presets = res.presets;
      renderPresets();
      updatePresetChips();
    }
  } catch (e) {
    document.getElementById('preset-list').innerHTML = '<p class="empty-msg">프리셋을 불러오지 못했습니다.</p>';
  }
}

async function loadRecords() {
  const tbody = document.getElementById('records-body');
  tbody.innerHTML = '<tr><td colspan="6" class="empty-msg">로딩 중...</td></tr>';
  try {
    const res = await apiGet('getRecords');
    if (res.success) {
      allRecords = res.records;
      renderRecords();
    } else {
      tbody.innerHTML = `<tr><td colspan="6" class="empty-msg">${escHtml(res.error || '오류')}</td></tr>`;
    }
  } catch (e) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-msg">기록을 불러오지 못했습니다.</td></tr>';
  }
}

/* =================== 렌더링 =================== */
function renderPresets() {
  const listEl = document.getElementById('preset-list');
  if (!presets.length) {
    listEl.innerHTML = '<p class="empty-msg">등록된 프리셋이 없습니다.<br>위에서 새 프리셋을 추가해주세요.</p>';
    return;
  }
  listEl.innerHTML = presets.map(p => `
    <div class="preset-item">
      <span>${escHtml(p)}</span>
      <button class="btn btn-danger btn-sm" data-preset="${escAttr(p)}" onclick="deletePreset(this)">삭제</button>
    </div>
  `).join('');
}

function updatePresetChips() {
  const chipsEl = document.getElementById('preset-chips');
  if (!presets.length) {
    chipsEl.innerHTML = '<p class="empty-msg small">등록된 프리셋이 없습니다.<br><a href="#" onclick="switchTab(\'presets\'); return false;">프리셋 관리</a>에서 추가해주세요.</p>';
    return;
  }
  chipsEl.innerHTML = presets.map(p => `
    <button type="button" class="preset-chip" data-preset="${escAttr(p)}" onclick="selectPreset(this)">${escHtml(p)}</button>
  `).join('');
}

function renderRecords() {
  const tbody      = document.getElementById('records-body');
  const filterOnly = document.getElementById('filter-unused').checked;
  const summaryEl  = document.getElementById('records-summary');

  let rows = [...allRecords];
  if (filterOnly) rows = rows.filter(r => !r.useDate);

  if (!rows.length) {
    const msg = filterOnly ? '미사용 스티커가 없습니다.' : '기록이 없습니다.';
    tbody.innerHTML = `<tr><td colspan="6" class="empty-msg">${msg}</td></tr>`;
    summaryEl.style.display = 'none';
    return;
  }

  tbody.innerHTML = rows.map(r => {
    const isUsed = !!r.useDate;
    return `
      <tr class="${isUsed ? 'row-used' : ''}">
        <td>${r.order}</td>
        <td style="white-space:nowrap">${fmtDate(r.date)}</td>
        <td>${escHtml(String(r.reason || ''))}</td>
        <td style="white-space:nowrap">${r.useDate ? fmtDate(r.useDate) : '-'}</td>
        <td>${r.useReason ? escHtml(String(r.useReason)) : '-'}</td>
        <td><span class="badge ${isUsed ? 'badge-used' : 'badge-available'}">${isUsed ? '사용됨' : '사용 가능'}</span></td>
      </tr>`;
  }).join('');

  summaryEl.style.display = 'block';
  summaryEl.textContent = `총 ${rows.length}건 표시 중`;
}

/* =================== 탭 전환 =================== */
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-pane').forEach(p => {
    p.style.display = (p.id === `pane-${tab}`) ? 'block' : 'none';
    p.classList.toggle('active', p.id === `pane-${tab}`);
  });
}

/* =================== 프리셋 패널 =================== */
function togglePresetPanel() {
  presetPanelOpen = !presetPanelOpen;
  document.getElementById('preset-panel').style.display = presetPanelOpen ? 'block' : 'none';
  document.getElementById('toggle-arrow').classList.toggle('open', presetPanelOpen);
}

function selectPreset(chipEl) {
  const preset = chipEl.dataset.preset;
  document.getElementById('add-reason-text').value = preset;
  presetPanelOpen = false;
  document.getElementById('preset-panel').style.display = 'none';
  document.getElementById('toggle-arrow').classList.remove('open');
  chipEl.style.background = 'var(--primary)';
  chipEl.style.color = 'white';
  setTimeout(() => { chipEl.style.background = ''; chipEl.style.color = ''; }, 300);
}

/* =================== 별점 (스티커 개수) =================== */
function initStarRating() {
  const stars = document.querySelectorAll('#star-rating .star');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedCount = parseInt(star.dataset.value, 10);
      updateStarDisplay();
      document.getElementById('star-count-label').textContent = selectedCount;
    });

    star.addEventListener('mouseenter', () => {
      const hoverVal = parseInt(star.dataset.value, 10);
      stars.forEach(s => {
        const v = parseInt(s.dataset.value, 10);
        s.classList.remove('filled', 'preview');
        if (v <= selectedCount) s.classList.add('filled');
        if (v > selectedCount && v <= hoverVal) s.classList.add('preview');
      });
    });
  });

  document.getElementById('star-rating').addEventListener('mouseleave', () => {
    updateStarDisplay();
  });

  updateStarDisplay();
}

function updateStarDisplay() {
  document.querySelectorAll('#star-rating .star').forEach(s => {
    const v = parseInt(s.dataset.value, 10);
    s.classList.toggle('filled', v <= selectedCount);
    s.classList.remove('preview');
  });
}

/* =================== 스티커 등록 =================== */
async function addSticker() {
  const reason = document.getElementById('add-reason-text').value.trim();
  const errEl  = document.getElementById('add-error');
  const sucEl  = document.getElementById('add-success');
  const btn    = document.getElementById('add-btn');

  hideMsg(errEl); hideMsg(sucEl);
  if (!reason) { showMsg(errEl, '칭찬 사유를 입력해주세요.', false); return; }

  setLoading(btn, true, '등록 중...');
  try {
    const res = await apiPost({ action: 'addSticker', reason, count: selectedCount, token: authToken });
    if (res.success) {
      document.getElementById('add-reason-text').value = '';
      selectedCount = 1;
      updateStarDisplay();
      document.getElementById('star-count-label').textContent = '1';
      showMsg(sucEl, `✅ 스티커 ${res.added}개가 성공적으로 등록되었습니다!`, true);
      loadSummary();
      loadRecords();
    } else {
      showMsg(errEl, res.error || '등록에 실패했습니다.', false);
      if (res.error && res.error.includes('인증')) handleAuthError();
    }
  } catch (e) {
    showMsg(errEl, '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', false);
  } finally {
    setLoading(btn, false, '등록하기');
  }
}

/* =================== 스티커 사용 =================== */
async function useStickers() {
  const countVal = document.getElementById('use-count').value;
  const reason   = document.getElementById('use-reason').value.trim();
  const errEl    = document.getElementById('use-error');
  const sucEl    = document.getElementById('use-success');
  const btn      = document.getElementById('use-btn');

  hideMsg(errEl); hideMsg(sucEl);

  const count = parseInt(countVal, 10);
  if (!countVal || isNaN(count) || count < 1) { showMsg(errEl, '사용 개수를 1 이상으로 입력해주세요.', false); return; }
  if (!reason) { showMsg(errEl, '사용 사유를 입력해주세요.', false); return; }

  const available = parseInt(document.getElementById('use-available').textContent, 10);
  if (!isNaN(available) && count > available) {
    showMsg(errEl, `사용 가능한 스티커가 ${available}개뿐입니다.`, false); return;
  }

  if (!confirm(`스티커 ${count}개를 사용 처리할까요?\n사유: ${reason}`)) return;

  setLoading(btn, true, '처리 중...');
  try {
    const res = await apiPost({ action: 'useStickers', count, reason, token: authToken });
    if (res.success) {
      document.getElementById('use-count').value  = '';
      document.getElementById('use-reason').value = '';
      showMsg(sucEl, `✅ ${count}개의 스티커를 사용 처리했습니다!`, true);
      loadSummary();
      loadRecords();
    } else {
      showMsg(errEl, res.error || '처리에 실패했습니다.', false);
      if (res.error && res.error.includes('인증')) handleAuthError();
    }
  } catch (e) {
    showMsg(errEl, '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', false);
  } finally {
    setLoading(btn, false, '사용 등록');
  }
}

/* =================== 프리셋 추가 =================== */
async function addPreset() {
  const text  = document.getElementById('new-preset-text').value.trim();
  const errEl = document.getElementById('preset-error');
  const sucEl = document.getElementById('preset-success');
  const btn   = document.getElementById('new-preset-btn');

  hideMsg(errEl); hideMsg(sucEl);
  if (!text) { showMsg(errEl, '프리셋 내용을 입력해주세요.', false); return; }
  if (presets.includes(text)) { showMsg(errEl, '이미 동일한 프리셋이 존재합니다.', false); return; }

  setLoading(btn, true, '추가 중...');
  try {
    const res = await apiPost({ action: 'addPreset', preset: text, token: authToken });
    if (res.success) {
      document.getElementById('new-preset-text').value = '';
      showMsg(sucEl, '✅ 프리셋이 추가되었습니다!', true);
      await loadPresets();
    } else {
      showMsg(errEl, res.error || '추가에 실패했습니다.', false);
    }
  } catch (e) {
    showMsg(errEl, '서버 오류가 발생했습니다.', false);
  } finally {
    setLoading(btn, false, '추가');
  }
}

/* =================== 프리셋 삭제 =================== */
async function deletePreset(btnEl) {
  const preset = btnEl.dataset.preset;
  if (!confirm(`"${preset}" 프리셋을 삭제할까요?`)) return;

  btnEl.disabled = true;
  try {
    const res = await apiPost({ action: 'deletePreset', preset, token: authToken });
    if (res.success) {
      await loadPresets();
    } else {
      alert(res.error || '삭제에 실패했습니다.');
      btnEl.disabled = false;
    }
  } catch (e) {
    alert('서버 오류가 발생했습니다.');
    btnEl.disabled = false;
  }
}

function handleAuthError() {
  sessionStorage.removeItem('admin_token');
  authToken = null;
  alert('세션이 만료되었습니다. 다시 로그인해주세요.');
  logout();
}

/* =================== API 헬퍼 =================== */
async function apiGet(action) {
  const url = new URL(API_URL);
  url.searchParams.set('action', action);
  url.searchParams.set('token', authToken || '');
  const res = await fetch(url.toString(), { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function apiPost(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/* =================== UI 유틸리티 =================== */
function setLoading(btn, loading, label) {
  btn.disabled    = loading;
  btn.textContent = label;
}

function showMsg(el, text, isSuccess) {
  el.textContent = text;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, isSuccess ? 4000 : 6000);
}

function hideMsg(el) { el.style.display = 'none'; }

function fmtDate(val) {
  if (!val) return '-';
  const s = String(val).replace('T', ' ');
  return s.length > 16 ? s.substring(0, 16) : s;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escAttr(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}
