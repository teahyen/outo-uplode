#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
IT 뉴스 크롤러
여러 IT 뉴스 소스에서 최신 뉴스를 수집합니다.
"""

import json
import feedparser
from datetime import datetime
import re

# IT 뉴스 RSS 피드 목록
NEWS_SOURCES = {
    'techcrunch': 'https://techcrunch.com/feed/',
    'theverge': 'https://www.theverge.com/rss/index.xml',
    'hackernews': 'https://hnrss.org/frontpage',
    'arstechnica': 'https://feeds.arstechnica.com/arstechnica/index',
    'wired': 'https://www.wired.com/feed/rss',
}

def clean_html(text):
    """HTML 태그 제거"""
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

def extract_keywords(title, summary):
    """제목과 요약에서 키워드 추출"""
    keywords = []
    
    # IT 관련 키워드 리스트
    tech_keywords = [
        'AI', 'ChatGPT', 'GPT', 'OpenAI', 'Anthropic', 'Claude',
        'Python', 'JavaScript', 'TypeScript', 'Rust', 'Go', 'Java',
        'React', 'Vue', 'Angular', 'Next.js', 'Node.js',
        'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud',
        'Machine Learning', 'Deep Learning', 'Neural Network',
        'Blockchain', 'Web3', 'Crypto', 'NFT',
        'API', 'REST', 'GraphQL', 'Microservices',
        'Security', 'Cybersecurity', 'Hack', 'Vulnerability',
        'Startup', 'Funding', 'VC', 'IPO',
        'Apple', 'Google', 'Microsoft', 'Meta', 'Amazon', 'Tesla',
        'iPhone', 'Android', 'iOS', 'Windows', 'Linux',
        'Database', 'SQL', 'NoSQL', 'MongoDB', 'PostgreSQL',
        'DevOps', 'CI/CD', 'Git', 'GitHub',
        '5G', 'IoT', 'Cloud', 'Edge Computing',
        'VR', 'AR', 'Metaverse', 'Gaming',
    ]
    
    text = f"{title} {summary}".lower()
    
    for keyword in tech_keywords:
        if keyword.lower() in text:
            keywords.append(keyword)
    
    return keywords[:5]  # 최대 5개

def categorize_news(title, summary, keywords):
    """뉴스 카테고리 분류"""
    text = f"{title} {summary}".lower()
    
    categories = {
        'AI/ML': ['ai', 'artificial intelligence', 'machine learning', 'gpt', 'chatgpt', 'claude', 'llm', 'neural'],
        'Programming': ['python', 'javascript', 'rust', 'programming', 'code', 'developer', 'typescript'],
        'Cloud/DevOps': ['cloud', 'aws', 'azure', 'docker', 'kubernetes', 'devops', 'ci/cd'],
        'Security': ['security', 'hack', 'breach', 'vulnerability', 'cyber'],
        'Blockchain': ['blockchain', 'crypto', 'bitcoin', 'ethereum', 'web3', 'nft'],
        'Mobile': ['iphone', 'android', 'ios', 'mobile', 'app'],
        'Startup': ['startup', 'funding', 'vc', 'investment', 'ipo'],
        'Hardware': ['chip', 'processor', 'gpu', 'hardware', 'device'],
    }
    
    for category, keywords_list in categories.items():
        for keyword in keywords_list:
            if keyword in text:
                return category
    
    return 'Tech News'

def crawl_news():
    """뉴스 크롤링 메인 함수"""
    all_news = []
    
    print("🔍 IT 뉴스 크롤링 시작...")
    
    for source_name, feed_url in NEWS_SOURCES.items():
        try:
            print(f"📰 {source_name} 크롤링 중...")
            feed = feedparser.parse(feed_url)
            
            for entry in feed.entries[:5]:  # 각 소스에서 최신 5개
                title = entry.get('title', '')
                summary = clean_html(entry.get('summary', entry.get('description', '')))
                link = entry.get('link', '')
                
                # 발행일 파싱
                published = entry.get('published', entry.get('updated', ''))
                
                # 키워드 추출
                keywords = extract_keywords(title, summary)
                
                # 카테고리 분류
                category = categorize_news(title, summary, keywords)
                
                news_item = {
                    'source': source_name,
                    'title': title,
                    'summary': summary[:300],  # 요약은 300자로 제한
                    'link': link,
                    'published': published,
                    'keywords': keywords,
                    'category': category,
                    'crawled_at': datetime.now().isoformat()
                }
                
                all_news.append(news_item)
                
        except Exception as e:
            print(f"❌ {source_name} 크롤링 실패: {str(e)}")
            continue
    
    print(f"✅ 총 {len(all_news)}개의 뉴스를 수집했습니다.")
    return all_news

def save_news(news_list, filename='news-data.json'):
    """뉴스를 JSON 파일로 저장"""
    data = {
        'last_updated': datetime.now().isoformat(),
        'news_count': len(news_list),
        'news': news_list
    }
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"💾 {filename}에 저장 완료!")

def main():
    """메인 실행 함수"""
    print("=" * 50)
    print("IT 뉴스 크롤러")
    print("=" * 50)
    
    # 뉴스 크롤링
    news = crawl_news()
    
    # JSON 파일로 저장
    save_news(news)
    
    print("\n🎉 크롤링 완료!")
    print(f"📅 업데이트 시간: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

if __name__ == "__main__":
    main()
