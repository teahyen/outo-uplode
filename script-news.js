// 전역 변수
let currentMode = 'template'; // 'template' 또는 'news'
let newsData = null;
let selectedNewsIndex = null;

// 뉴스 데이터 로드
async function loadNewsData() {
    try {
        const response = await fetch('news-data.json');
        if (!response.ok) {
            throw new Error('뉴스 데이터를 불러올 수 없습니다');
        }
        newsData = await response.json();
        updateNewsStatus(true);
        return newsData;
    } catch (error) {
        console.error('뉴스 로드 실패:', error);
        updateNewsStatus(false);
        return null;
    }
}

// 뉴스 상태 업데이트
function updateNewsStatus(success) {
    const statusEl = document.getElementById('newsStatus');
    if (success && newsData) {
        const lastUpdated = new Date(newsData.last_updated);
        const timeAgo = getTimeAgo(lastUpdated);
        statusEl.innerHTML = `
            <span class="status-icon">✅</span>
            <span class="status-text">최신 뉴스 ${newsData.news_count}개 • ${timeAgo}</span>
        `;
    } else {
        statusEl.innerHTML = `
            <span class="status-icon">⚠️</span>
            <span class="status-text">뉴스 데이터 없음 (템플릿 모드만 사용 가능)</span>
        `;
    }
}

// 시간 경과 표시
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    if (seconds < 60) return '방금 전';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}분 전`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}시간 전`;
    return `${Math.floor(seconds / 86400)}일 전`;
}

// 뉴스 목록 표시
function displayNewsList() {
    const newsList = document.getElementById('newsList');
    if (!newsData || !newsData.news || newsData.news.length === 0) {
        newsList.innerHTML = '<p style="text-align: center; color: #999;">표시할 뉴스가 없습니다.</p>';
        return;
    }
    
    newsList.innerHTML = newsData.news.map((news, index) => `
        <div class="news-item" data-index="${index}">
            <div class="news-item-header">
                <span class="news-item-category">${news.category}</span>
                <span class="news-item-source">${news.source}</span>
            </div>
            <div class="news-item-title">${news.title}</div>
            <div class="news-item-summary">${news.summary}</div>
            <div class="news-item-keywords">
                ${news.keywords.map(keyword => `<span class="news-keyword">#${keyword}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    // 뉴스 아이템 클릭 이벤트
    document.querySelectorAll('.news-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.news-item').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            selectedNewsIndex = parseInt(this.dataset.index);
        });
    });
}

// 뉴스 기반 블로그 생성
function generateBlogFromNews(news) {
    const date = new Date();
    const dateString = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    
    // 카테고리
    document.getElementById('category').textContent = `📰 ${news.category}`;
    document.getElementById('date').textContent = dateString;
    
    // 제목 생성
    const title = generateNewsTitle(news);
    document.getElementById('postTitle').textContent = title;
    
    // 본문 생성
    const content = generateNewsContent(news);
    document.getElementById('postContent').innerHTML = content;
    
    // 태그 생성
    const tags = [...news.keywords, news.category, news.source];
    const tagsContainer = document.getElementById('postTags');
    tagsContainer.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = `#${tag}`;
        tagsContainer.appendChild(tagElement);
    });
}

// 뉴스 제목 생성
function generateNewsTitle(news) {
    const titleVariations = [
        `${news.title}: IT 업계의 새로운 변화`,
        `주목! ${news.title}`,
        `[속보] ${news.title}`,
        `IT 트렌드: ${news.title}`,
        `${news.title} - 알아두어야 할 핵심 정보`,
    ];
    
    return titleVariations[Math.floor(Math.random() * titleVariations.length)];
}

// 뉴스 본문 생성
function generateNewsContent(news) {
    let content = '';
    
    // 도입부
    content += `<p><strong>${news.summary}</strong></p>`;
    
    // 배경 설명
    content += `<h4>📌 배경 및 개요</h4>`;
    content += `<p>최근 IT 업계에서 주목받고 있는 이 소식은 ${news.category} 분야에서 중요한 의미를 가집니다. `;
    content += `${news.source}에서 보도된 이 내용은 앞으로의 기술 발전 방향을 가늠할 수 있는 중요한 지표가 될 것으로 보입니다.</p>`;
    
    // 핵심 포인트
    content += `<h4>🎯 핵심 포인트</h4>`;
    content += `<ul>`;
    content += `<li><strong>주요 키워드</strong>: ${news.keywords.join(', ')}</li>`;
    content += `<li><strong>영향력</strong>: ${news.category} 분야 전반에 걸친 파급효과 예상</li>`;
    content += `<li><strong>시장 전망</strong>: 관련 기술 및 서비스의 성장 가능성</li>`;
    content += `</ul>`;
    
    // 업계 의견
    content += `<h4>💭 업계 전문가 의견</h4>`;
    content += `<p>많은 전문가들은 이번 소식이 ${news.category} 분야에 긍정적인 영향을 미칠 것으로 전망하고 있습니다. `;
    content += `특히 ${news.keywords[0] || '관련 기술'} 분야에서의 혁신이 가속화될 것으로 예상됩니다. `;
    content += `개발자와 기업들은 이러한 변화에 적극적으로 대응해야 할 것입니다.</p>`;
    
    // 향후 전망
    content += `<h4>🔮 향후 전망</h4>`;
    content += `<p>이번 소식은 단순한 뉴스를 넘어 IT 업계 전반의 방향성을 제시하는 중요한 시그널입니다. `;
    content += `관련 기술에 관심 있는 개발자라면 지속적으로 모니터링하고, 필요한 기술을 학습하는 것이 좋습니다. `;
    content += `특히 ${news.keywords.slice(0, 2).join('과 ')} 분야는 향후 더욱 주목받을 것으로 예상됩니다.</p>`;
    
    // 결론
    content += `<p><strong>결론</strong></p>`;
    content += `<p>IT 업계는 끊임없이 변화하고 있으며, 이러한 최신 동향을 파악하는 것은 개발자와 기술 전문가에게 필수적입니다. `;
    content += `이 소식을 계기로 관련 분야에 대한 이해를 깊이 하고, 미래를 준비하는 계기가 되길 바랍니다.</p>`;
    
    // 원문 링크
    if (news.link) {
        content += `<p style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 10px;">`;
        content += `📎 <strong>원문 보기:</strong> <a href="${news.link}" target="_blank" style="color: #667eea; text-decoration: none;">${news.source}</a>`;
        content += `</p>`;
    }
    
    return content;
}

// 모드 전환
function switchMode(mode) {
    currentMode = mode;
    selectedNewsIndex = null;
    
    // 버튼 상태 업데이트
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });
    
    // UI 업데이트
    const newsPreview = document.getElementById('newsPreview');
    const updateBtn = document.getElementById('updateNewsBtn');
    const generateBtn = document.getElementById('generateBtn');
    
    if (mode === 'news') {
        if (newsData && newsData.news && newsData.news.length > 0) {
            newsPreview.style.display = 'block';
            displayNewsList();
            updateBtn.style.display = 'inline-flex';
            generateBtn.querySelector('.btn-text').textContent = '선택한 뉴스로 글 생성';
        } else {
            showToast('⚠️ 뉴스 데이터가 없습니다. 템플릿 모드를 사용해주세요.');
            switchMode('template');
        }
    } else {
        newsPreview.style.display = 'none';
        updateBtn.style.display = 'none';
        generateBtn.querySelector('.btn-text').textContent = '새 블로그 글 생성하기';
    }
}

// GitHub Actions 워크플로우 트리거 (설명용)
async function triggerNewsUpdate() {
    showToast('ℹ️ 뉴스 업데이트는 GitHub Actions에서 자동으로 진행됩니다.');
    showToast('💡 GitHub 저장소의 Actions 탭에서 "Update IT News" 워크플로우를 수동 실행하세요.');
    
    // GitHub Actions 페이지 열기
    setTimeout(() => {
        window.open('https://github.com/teahyen/outo-uplode/actions', '_blank');
    }, 2000);
}

// 초기화
async function initialize() {
    // 뉴스 데이터 로드
    await loadNewsData();
    
    // 모드 버튼 이벤트
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchMode(this.dataset.mode);
        });
    });
    
    // 생성 버튼 이벤트
    document.getElementById('generateBtn').addEventListener('click', () => {
        const loadingEl = document.getElementById('loading');
        const resultEl = document.getElementById('result');
        
        loadingEl.style.display = 'block';
        resultEl.style.display = 'none';
        
        setTimeout(() => {
            if (currentMode === 'news') {
                if (selectedNewsIndex === null) {
                    showToast('⚠️ 뉴스를 선택해주세요!');
                    loadingEl.style.display = 'none';
                    return;
                }
                const selectedNews = newsData.news[selectedNewsIndex];
                generateBlogFromNews(selectedNews);
            } else {
                generateBlogPost();
            }
            
            loadingEl.style.display = 'none';
            resultEl.style.display = 'block';
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1500);
    });
    
    // 뉴스 업데이트 버튼
    document.getElementById('updateNewsBtn').addEventListener('click', triggerNewsUpdate);
    
    // 복사 버튼
    document.getElementById('copyBtn').addEventListener('click', () => {
        const text = getBlogText();
        navigator.clipboard.writeText(text).then(() => {
            showToast('✅ 클립보드에 복사되었습니다!');
        }).catch(() => {
            showToast('❌ 복사에 실패했습니다.');
        });
    });
    
    // 다운로드 버튼
    document.getElementById('downloadBtn').addEventListener('click', () => {
        const text = getBlogText();
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const title = document.getElementById('postTitle').textContent;
        
        a.href = url;
        a.download = `${title}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('💾 파일이 다운로드되었습니다!');
    });
}

// 블로그 텍스트 추출
function getBlogText() {
    const category = document.getElementById('category').textContent;
    const date = document.getElementById('date').textContent;
    const title = document.getElementById('postTitle').textContent;
    const content = document.getElementById('postContent').innerText;
    const tags = Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent).join(' ');
    
    return `${category}\n${date}\n\n${title}\n\n${content}\n\n${tags}`;
}

// 토스트 메시지
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 페이지 로드 시 초기화
window.addEventListener('load', initialize);
