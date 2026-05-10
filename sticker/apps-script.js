/**
 * ============================================================
 * Google Apps Script 코드
 * 이 파일의 내용을 Google Apps Script 편집기에 붙여넣으세요.
 * 웹사이트에서 직접 사용되지 않는 서버 측 코드입니다.
 * ============================================================
 *
 * [설정 순서]
 * 1. https://script.google.com 접속 → 새 프로젝트 생성
 * 2. 아래 코드 전체를 편집기에 붙여넣기
 * 3. 상단 메뉴 → 프로젝트 설정 → 스크립트 속성에서 아래 두 가지 추가:
 *    - ADMIN_PASSWORD : 관리자 로그인 비밀번호 (예: MyPassword123!)
 *    - AUTH_TOKEN     : 임의의 긴 문자열 (예: 랜덤 UUID)
 *      → 또는 setupInitialToken() 함수 실행 후 로그에서 복사
 * 4. 배포 → 새 배포 → 유형: 웹 앱
 *    - 다음 사용자로 실행: 나
 *    - 액세스 권한: 모든 사용자
 * 5. 배포 URL 복사 → config.js의 APPS_SCRIPT_URL에 붙여넣기
 * ============================================================
 */

const SHEET_ID         = '1-C5gJHesG9sAKdHHQCLmwFU9vLFiFPczYigYMosfrDU';
const RECORD_SHEET     = '칭찬 기록';
const PRESET_SHEET     = '칭찬 목록';
const RECORD_HEADERS   = ['순서', '등록날짜', '사유', '사용날짜', '사용사유'];
const KST              = 'Asia/Seoul';

/* ============================================================
   진입점
   ============================================================ */
function doGet(e) {
  try {
    const action = e.parameter.action;
    const token  = e.parameter.token;

    if (!verifyToken(token)) return json({ success: false, error: '인증이 필요합니다.' });

    switch (action) {
      case 'getSummary': return getSummary();
      case 'getRecords': return getRecords();
      case 'getPresets': return getPresets();
      default:           return json({ success: false, error: '알 수 없는 요청입니다.' });
    }
  } catch (err) {
    return json({ success: false, error: err.message });
  }
}

function doPost(e) {
  try {
    const data   = JSON.parse(e.postData.contents);
    const action = data.action;

    if (action === 'login') return handleLogin(data);

    if (!verifyToken(data.token)) return json({ success: false, error: '인증이 필요합니다.' });

    switch (action) {
      case 'addSticker':   return handleAddSticker(data);
      case 'useStickers':  return handleUseStickers(data);
      case 'addPreset':    return handleAddPreset(data);
      case 'deletePreset': return handleDeletePreset(data);
      default:             return json({ success: false, error: '알 수 없는 요청입니다.' });
    }
  } catch (err) {
    return json({ success: false, error: err.message });
  }
}

/* ============================================================
   인증
   ============================================================ */
function handleLogin(data) {
  const props    = PropertiesService.getScriptProperties();
  const password = props.getProperty('ADMIN_PASSWORD');

  if (!password) {
    return json({
      success: false,
      error: 'Script Properties에서 ADMIN_PASSWORD를 먼저 설정해주세요.'
    });
  }

  if (data.password !== password) {
    return json({ success: false, error: '비밀번호가 올바르지 않습니다.' });
  }

  const token = props.getProperty('AUTH_TOKEN');
  if (!token) {
    return json({
      success: false,
      error: 'Script Properties에서 AUTH_TOKEN을 먼저 설정해주세요.'
    });
  }

  return json({ success: true, token });
}

function verifyToken(token) {
  if (!token) return false;
  const props = PropertiesService.getScriptProperties();
  return token === props.getProperty('AUTH_TOKEN');
}

/* ============================================================
   스티커 등록
   ============================================================ */
function handleAddSticker(data) {
  if (!data.reason || !String(data.reason).trim()) {
    return json({ success: false, error: '사유를 입력해주세요.' });
  }

  const sheet   = getRecordSheet();
  const lastRow = sheet.getLastRow();
  const order   = lastRow <= 1 ? 1 : lastRow; // 헤더 제외 다음 번호
  const now     = Utilities.formatDate(new Date(), KST, 'yyyy-MM-dd HH:mm:ss');

  sheet.appendRow([order, now, String(data.reason).trim(), '', '']);
  return json({ success: true });
}

/* ============================================================
   스티커 사용
   ============================================================ */
function handleUseStickers(data) {
  const count = parseInt(data.count, 10);
  if (!count || count < 1) {
    return json({ success: false, error: '사용 개수가 올바르지 않습니다.' });
  }
  if (!data.reason || !String(data.reason).trim()) {
    return json({ success: false, error: '사용 사유를 입력해주세요.' });
  }

  const sheet   = getRecordSheet();
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return json({ success: false, error: '등록된 스티커가 없습니다.' });
  }

  const range  = sheet.getRange(2, 1, lastRow - 1, 5);
  const values = range.getValues();

  // 사용 가능한 스티커 수 확인 (사용날짜 빈 행)
  const available = values.filter(row => row[0] !== '' && !row[3]).length;
  if (available < count) {
    return json({ success: false, error: `사용 가능한 스티커가 ${available}개뿐입니다.` });
  }

  const now    = Utilities.formatDate(new Date(), KST, 'yyyy-MM-dd HH:mm:ss');
  const reason = String(data.reason).trim();
  let used     = 0;

  for (let i = 0; i < values.length && used < count; i++) {
    if (values[i][0] !== '' && !values[i][3]) {   // 유효 행 + 미사용
      sheet.getRange(i + 2, 4).setValue(now);
      sheet.getRange(i + 2, 5).setValue(reason);
      used++;
    }
  }

  return json({ success: true, used });
}

/* ============================================================
   프리셋 추가
   ============================================================ */
function handleAddPreset(data) {
  if (!data.preset || !String(data.preset).trim()) {
    return json({ success: false, error: '프리셋 내용을 입력해주세요.' });
  }

  const sheet  = getPresetSheet();
  const preset = String(data.preset).trim();

  // 중복 확인
  const lastRow = sheet.getLastRow();
  if (lastRow > 0) {
    const existing = sheet.getRange(1, 1, lastRow, 1).getValues().flat();
    if (existing.includes(preset)) {
      return json({ success: false, error: '이미 동일한 프리셋이 존재합니다.' });
    }
  }

  sheet.appendRow([preset]);
  return json({ success: true });
}

/* ============================================================
   프리셋 삭제
   ============================================================ */
function handleDeletePreset(data) {
  if (!data.preset) return json({ success: false, error: '삭제할 프리셋을 지정해주세요.' });

  const sheet   = getPresetSheet();
  const lastRow = sheet.getLastRow();

  if (lastRow === 0) return json({ success: false, error: '삭제할 프리셋이 없습니다.' });

  const values = sheet.getRange(1, 1, lastRow, 1).getValues();
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === data.preset) {
      sheet.deleteRow(i + 1);
      return json({ success: true });
    }
  }

  return json({ success: false, error: '해당 프리셋을 찾을 수 없습니다.' });
}

/* ============================================================
   요약 조회
   ============================================================ */
function getSummary() {
  const sheet   = getRecordSheet();
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return json({ success: true, total: 0, used: 0, available: 0 });
  }

  const values    = sheet.getRange(2, 1, lastRow - 1, 5).getValues();
  const validRows = values.filter(row => row[0] !== '');
  const total     = validRows.length;
  const used      = validRows.filter(row => row[3] !== '').length;

  return json({ success: true, total, used, available: total - used });
}

/* ============================================================
   기록 조회
   ============================================================ */
function getRecords() {
  const sheet   = getRecordSheet();
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) return json({ success: true, records: [] });

  const values  = sheet.getRange(2, 1, lastRow - 1, 5).getValues();
  const records = values
    .filter(row => row[0] !== '')
    .map(row => ({
      order:     row[0],
      date:      fmtCell(row[1]),
      reason:    row[2],
      useDate:   fmtCell(row[3]),
      useReason: row[4]
    }));

  return json({ success: true, records });
}

/* ============================================================
   프리셋 조회
   ============================================================ */
function getPresets() {
  const sheet   = getPresetSheet();
  const lastRow = sheet.getLastRow();

  if (lastRow === 0) return json({ success: true, presets: [] });

  const values  = sheet.getRange(1, 1, lastRow, 1).getValues();
  const presets = values.map(row => row[0]).filter(v => v !== '' && v !== null);

  return json({ success: true, presets });
}

/* ============================================================
   시트 헬퍼
   ============================================================ */
function getRecordSheet() {
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  let   sheet = ss.getSheetByName(RECORD_SHEET);

  if (!sheet) {
    sheet = ss.insertSheet(RECORD_SHEET);
    const headerRange = sheet.getRange(1, 1, 1, RECORD_HEADERS.length);
    headerRange.setValues([RECORD_HEADERS]);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#EDE9FE');
  } else if (sheet.getLastRow() === 0) {
    const headerRange = sheet.getRange(1, 1, 1, RECORD_HEADERS.length);
    headerRange.setValues([RECORD_HEADERS]);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#EDE9FE');
  }

  return sheet;
}

function getPresetSheet() {
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  let   sheet = ss.getSheetByName(PRESET_SHEET);

  if (!sheet) {
    sheet = ss.insertSheet(PRESET_SHEET);
  }

  return sheet;
}

/* ============================================================
   유틸리티
   ============================================================ */
function fmtCell(val) {
  if (!val || val === '') return '';
  if (val instanceof Date) {
    return Utilities.formatDate(val, KST, 'yyyy-MM-dd HH:mm:ss');
  }
  return String(val);
}

function json(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ============================================================
   최초 설정용 함수 (편집기에서 직접 실행)
   Apps Script 편집기에서 이 함수를 선택 후 실행하면
   AUTH_TOKEN이 자동 생성되어 Script Properties에 저장됩니다.
   ============================================================ */
function setupInitialToken() {
  const props    = PropertiesService.getScriptProperties();
  const existing = props.getProperty('AUTH_TOKEN');
  if (existing) {
    Logger.log('이미 AUTH_TOKEN이 설정되어 있습니다: ' + existing);
    return;
  }
  const token = Utilities.getUuid();
  props.setProperty('AUTH_TOKEN', token);
  Logger.log('AUTH_TOKEN이 생성되었습니다: ' + token);
  Logger.log('이 값을 Script Properties에 AUTH_TOKEN으로 저장하세요.');
}
