# 🚀 빠른 설정 가이드 (5분 완료)

## 📋 GitHub Actions 자동 뉴스 업데이트 설정

### 방법 1: GitHub 웹에서 직접 생성 (권장) ⭐

1. **GitHub 저장소 페이지로 이동**
   - https://github.com/teahyen/outo-uplode

2. **Actions 탭 클릭**

3. **"New workflow" 버튼 클릭**

4. **"set up a workflow yourself" 링크 클릭**

5. **파일명 변경**
   - `main.yml` → `update-news.yml`로 변경

6. **아래 코드 전체 복사해서 붙여넣기**

```yaml
name: Update IT News

on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:
    inputs:
      reason:
        description: '업데이트 이유'
        required: false
        default: '수동 업데이트'

jobs:
  update-news:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install feedparser
      
      - name: Crawl IT news
        run: |
          python news-crawler.py
      
      - name: Commit and push if changed
        run: |
          git config --local user.email "github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git add news-data.json
          git diff --quiet && git diff --staged --quiet || (git commit -m "chore: Update IT news data" && git push)
```

7. **"Commit changes" 버튼 클릭**

8. **완료! 이제 수동 실행 테스트**
   - Actions 탭으로 이동
   - "Update IT News" 워크플로우 선택
   - "Run workflow" 버튼 클릭
   - 녹색 "Run workflow" 버튼 다시 클릭

---

### 방법 2: 로컬에서 뉴스 업데이트 (GitHub Actions 없이)

GitHub Actions를 설정하지 않고도 뉴스를 업데이트할 수 있습니다!

```bash
# 1. 저장소 클론
git clone https://github.com/teahyen/outo-uplode.git
cd outo-uplode

# 2. Python 환경 설정
pip install feedparser

# 3. 뉴스 크롤링
python news-crawler.py

# 4. Git에 커밋 및 푸시
git add news-data.json
git commit -m "chore: Update news data"
git push origin main
```

그 후 GitHub Pages가 자동으로 업데이트됩니다!

---

## 🎯 수동 업데이트 버튼 사용하기

웹사이트에서 "🔄 뉴스 업데이트" 버튼을 클릭하면:
1. GitHub Actions 페이지가 열립니다
2. "Update IT News" 워크플로우를 찾습니다
3. "Run workflow" 버튼을 클릭합니다
4. 1-2분 후 뉴스가 업데이트됩니다!

---

## ⚙️ GitHub Pages 설정 (필수)

1. **저장소 Settings 탭** 클릭
2. **왼쪽 메뉴에서 Pages** 선택
3. **Source 섹션**:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. **Save** 클릭
5. 몇 분 후 **https://teahyen.github.io/outo-uplode/** 에서 접속!

---

## ✅ 설정 확인

### GitHub Actions가 제대로 설정되었는지 확인:

1. ✅ Actions 탭에 "Update IT News" 워크플로우가 보이나요?
2. ✅ "Run workflow" 버튼이 있나요?
3. ✅ 실행 후 녹색 체크 표시가 나타나나요?
4. ✅ `news-data.json` 파일이 업데이트되었나요?

### GitHub Pages가 제대로 설정되었는지 확인:

1. ✅ Settings → Pages에 배포 URL이 표시되나요?
2. ✅ 웹사이트에 접속되나요?
3. ✅ "🔥 실시간 뉴스 모드"에 뉴스 목록이 표시되나요?

---

## 🆘 문제 해결

### "refusing to allow a GitHub App" 오류

→ **해결방법**: GitHub 웹에서 직접 워크플로우 생성 (방법 1 사용)

### 워크플로우가 실패하는 경우

→ **Settings → Actions → General → Workflow permissions**
   - "Read and write permissions" 선택
   - "Allow GitHub Actions to create and approve pull requests" 체크

### 뉴스가 표시되지 않는 경우

1. `news-data.json` 파일이 저장소에 있는지 확인
2. 파일이 비어있지 않은지 확인
3. 브라우저 캐시 삭제 후 새로고침

---

## 🎉 완료!

이제 다음과 같이 사용할 수 있습니다:

- ✅ 6시간마다 자동 뉴스 업데이트
- ✅ 버튼 클릭으로 수동 업데이트
- ✅ 최신 IT 뉴스 기반 블로그 자동 생성
- ✅ GitHub Pages로 영구 호스팅

**웹사이트 주소**: https://teahyen.github.io/outo-uplode/

즐거운 블로깅 되세요! 🚀
