# 🤖 IT 블로그 자동 생성기

티스토리 블로그를 위한 IT 업계 컨텐츠 자동 생성 웹사이트입니다.

## 🌐 바로 사용하기

**GitHub Pages:** [https://teahyen.github.io/outo-uplode/](https://teahyen.github.io/outo-uplode/)

버튼 한 번으로 IT 블로그 글을 자동 생성하세요!

---

## ⚡ 빠른 시작 (5분 완료)

### 1️⃣ 뉴스 자동 업데이트 설정하기

👉 **[QUICK_SETUP.md](./QUICK_SETUP.md)** - 5분이면 완료되는 간단한 가이드

또는 **바로 설정하기**:
1. [GitHub Actions 페이지로 이동](https://github.com/teahyen/outo-uplode/actions/new)
2. "set up a workflow yourself" 클릭
3. [여기 코드](./QUICK_SETUP.md#방법-1-github-웹에서-직접-생성-권장-) 복사 & 붙여넣기
4. Commit → 완료! ✅

### 2️⃣ GitHub Pages 활성화

1. [Settings → Pages](https://github.com/teahyen/outo-uplode/settings/pages)
2. Source: `main` branch, `/ (root)` folder
3. Save → 완료! ✅

---

## ✨ 주요 기능

### 🆕 **실시간 뉴스 모드** (NEW!)
- **실시간 IT 뉴스 크롤링**: TechCrunch, The Verge, Hacker News, Ars Technica, Wired
- **자동 카테고리 분류**: AI/ML, Programming, Cloud/DevOps, Security, Blockchain 등
- **키워드 자동 추출**: 뉴스에서 핵심 키워드를 자동으로 추출
- **뉴스 선택 후 블로그 생성**: 원하는 뉴스를 클릭하고 버튼으로 블로그 글 자동 생성
- **수동 업데이트 버튼**: 언제든지 최신 뉴스로 업데이트 가능

### 📚 **템플릿 모드**
- **버튼 클릭 한 번으로 새로운 블로그 글 생성**
- IT 업계의 다양한 주제 커버:
  - 🤖 인공지능 (ChatGPT, AI 이미지 생성, LLM 등)
  - 💻 프로그래밍 언어 (Rust, TypeScript, Python 등)
  - 📈 IT 트렌드 (Web3, 엣지 컴퓨팅, Platform Engineering 등)
  - 🛠️ 개발 도구 (GitHub Copilot, Docker, Kubernetes 등)
  - 🎯 프레임워크 (Next.js, Astro, Svelte 등)

## 🎯 사용 방법

### 템플릿 모드
1. "📚 템플릿 모드" 선택
2. "새 블로그 글 생성하기" 버튼 클릭
3. 자동으로 생성된 블로그 글 확인
4. "복사하기" 또는 "다운로드" 버튼으로 저장

### 실시간 뉴스 모드 (NEW!)
1. "🔥 실시간 뉴스 모드" 선택
2. 최신 IT 뉴스 목록에서 원하는 뉴스 클릭
3. "선택한 뉴스로 글 생성" 버튼 클릭
4. 뉴스 기반 블로그 글 자동 생성!
5. "🔄 뉴스 업데이트" 버튼으로 최신 뉴스 가져오기

## 🚀 실행 방법

```bash
# 간단한 HTTP 서버로 실행 (Python)
python -m http.server 8000

# 또는 Node.js http-server 사용
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

## 📦 파일 구조

```
.
├── index.html           # 메인 HTML
├── style.css            # 스타일시트
├── script.js            # 블로그 생성 로직 (템플릿 + 뉴스)
├── news-crawler.py      # IT 뉴스 크롤러 (Python)
├── news-data.json       # 크롤링된 뉴스 데이터
└── README.md            # 프로젝트 설명
```

## 💡 특징

- **🆕 실시간 뉴스 크롤링**: 5개 주요 IT 뉴스 소스에서 자동 수집
- **🤖 AI 기반 분류**: 뉴스를 8개 카테고리로 자동 분류
- **🔄 자동/수동 업데이트**: GitHub Actions로 자동 업데이트 + 수동 버튼
- **순수 HTML/CSS/JavaScript**: 별도의 프레임워크나 빌드 도구 없이 실행
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **풍부한 컨텐츠**: 18개 이상의 템플릿 + 실시간 뉴스
- **실용적인 내용**: 실제 기술 트렌드와 개발 지식 기반
- **즉시 사용 가능**: 생성된 글을 바로 복사하여 블로그에 게시

## 🎨 디자인

- 그라데이션 배경과 모던한 UI
- 부드러운 애니메이션 효과
- 깔끔한 타이포그래피
- 직관적인 사용자 경험

## 📝 생성되는 글의 구조

각 블로그 글은 다음 구조로 생성됩니다:

1. **카테고리와 날짜**
2. **제목** (SEO 최적화된 흥미로운 제목)
3. **도입부** (독자의 흥미를 끄는 인트로)
4. **본문** (3-4개의 소제목으로 구성된 상세 내용)
5. **결론** (핵심 메시지 요약)
6. **태그** (관련 키워드 태그)

## 🔄 뉴스 업데이트 방법

### 자동 업데이트 (GitHub Actions)
1. GitHub 저장소의 **Actions** 탭으로 이동
2. **"Update IT News"** 워크플로우 선택
3. **"Run workflow"** 버튼 클릭
4. 몇 분 후 `news-data.json` 파일이 자동으로 업데이트됩니다

### 수동 업데이트 (로컬)
```bash
# Python 환경에서 실행
cd /home/user/webapp
pip install feedparser
python news-crawler.py

# Git에 커밋 및 푸시
git add news-data.json
git commit -m "chore: Update news data"
git push origin main
```

## 🎯 뉴스 소스

- **TechCrunch**: 스타트업 & 기술 뉴스
- **The Verge**: 소비자 기술 & 문화
- **Hacker News**: 개발자 커뮤니티 뉴스
- **Ars Technica**: 심층 기술 분석
- **Wired**: 기술 & 비즈니스 트렌드

## 🔮 향후 계획

- [ ] 더 많은 뉴스 소스 추가
- [ ] AI 기반 블로그 글 품질 개선
- [ ] 다국어 지원 (영어 뉴스 → 한글 블로그)
- [ ] 사용자 맞춤 뉴스 필터링
- [ ] 이미지 자동 생성 및 삽입

## 📄 라이선스

MIT License - 자유롭게 사용하세요!
