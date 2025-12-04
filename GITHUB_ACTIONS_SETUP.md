# GitHub Actions 설정 가이드

이 가이드는 자동 뉴스 크롤링을 위한 GitHub Actions 워크플로우 설정 방법을 안내합니다.

## 📋 설정 단계

### 1. 워크플로우 파일 생성

GitHub 저장소에서 다음 경로에 파일을 생성하세요:

`.github/workflows/update-news.yml`

### 2. 워크플로우 코드 복사

아래 코드를 복사하여 `update-news.yml` 파일에 붙여넣으세요:

```yaml
name: Update IT News

on:
  schedule:
    # 매 6시간마다 자동 실행 (0, 6, 12, 18시 UTC)
    - cron: '0 */6 * * *'
  
  # 수동 실행 버튼 활성화
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
          git diff --quiet && git diff --staged --quiet || (git commit -m "chore: Update IT news data [$(date +'%Y-%m-%d %H:%M:%S')]" && git push)
```

### 3. GitHub에서 직접 생성하는 방법

1. GitHub 저장소 페이지로 이동
2. **Actions** 탭 클릭
3. **"New workflow"** 버튼 클릭
4. **"set up a workflow yourself"** 선택
5. 파일명을 `update-news.yml`로 변경
6. 위 코드를 붙여넣기
7. **"Start commit"** → **"Commit new file"** 클릭

### 4. 수동 실행 방법

워크플로우가 생성되면:

1. GitHub 저장소의 **Actions** 탭으로 이동
2. 왼쪽 사이드바에서 **"Update IT News"** 선택
3. **"Run workflow"** 버튼 클릭
4. 실행 이유 입력 (선택사항)
5. **"Run workflow"** 버튼 다시 클릭
6. 1-2분 후 뉴스 데이터가 자동으로 업데이트됩니다

### 5. 자동 실행 스케줄

워크플로우는 다음 시간에 자동으로 실행됩니다 (UTC 기준):
- 00:00 (한국 시간 09:00)
- 06:00 (한국 시간 15:00)
- 12:00 (한국 시간 21:00)
- 18:00 (한국 시간 03:00)

## ⚠️ 주의사항

### Permissions 오류 해결

만약 `refusing to allow a GitHub App to create or update workflow` 오류가 발생한다면:

1. 저장소 **Settings** → **Actions** → **General**로 이동
2. **Workflow permissions** 섹션에서:
   - ✅ **Read and write permissions** 선택
   - ✅ **Allow GitHub Actions to create and approve pull requests** 체크
3. **Save** 클릭

### GitHub Pages 설정

GitHub Pages를 활성화하려면:

1. 저장소 **Settings** → **Pages**로 이동
2. **Source**:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
3. **Save** 클릭
4. 몇 분 후 `https://<username>.github.io/<repository-name>/`에서 접속 가능

## 🔍 문제 해결

### 워크플로우가 실행되지 않는 경우

1. **Actions** 탭에서 워크플로우 상태 확인
2. 실패한 워크플로우 클릭하여 로그 확인
3. Python 의존성 설치 오류인 경우: feedparser 버전 확인
4. Git push 오류인 경우: Permissions 설정 재확인

### 뉴스 데이터가 업데이트되지 않는 경우

1. `news-crawler.py` 스크립트가 저장소에 있는지 확인
2. RSS 피드 URL이 유효한지 확인
3. 워크플로우 로그에서 에러 메시지 확인

## 📞 도움이 필요하신가요?

GitHub Issues에 문의하거나 워크플로우 로그를 함께 공유해주세요!

## 🎉 완료!

이제 IT 뉴스가 자동으로 수집되고, 웹사이트에서 최신 뉴스 기반 블로그 글을 생성할 수 있습니다!
