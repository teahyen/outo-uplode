// IT 블로그 주제 데이터
const blogTopics = {
    ai: {
        category: '🤖 인공지능',
        topics: [
            {
                title: 'ChatGPT의 등장으로 변화하는 개발자의 업무 방식',
                intro: 'OpenAI의 ChatGPT가 출시된 지 1년이 지나면서, 개발자들의 일하는 방식이 근본적으로 변화하고 있습니다.',
                sections: [
                    {
                        heading: '코드 작성의 혁명',
                        content: 'ChatGPT와 GitHub Copilot 같은 AI 도구들은 단순 반복 코드 작성을 자동화하고, 복잡한 알고리즘도 자연어로 설명하면 즉시 생성해줍니다. 이제 개발자들은 로직 구현보다는 문제 해결과 아키텍처 설계에 더 집중할 수 있게 되었습니다.'
                    },
                    {
                        heading: '디버깅과 코드 리뷰의 변화',
                        content: 'AI는 버그를 찾아내고 해결책을 제시하는 데 탁월합니다. 복잡한 에러 메시지를 AI에게 물어보면 원인과 해결 방법을 빠르게 얻을 수 있습니다. 또한 코드 리뷰 과정에서도 AI가 잠재적 문제점과 개선 사항을 미리 제안해줍니다.'
                    },
                    {
                        heading: '학습 곡선의 단축',
                        content: '새로운 프레임워크나 라이브러리를 배울 때, AI는 개인 맞춤형 튜터 역할을 합니다. 복잡한 개념도 쉽게 설명해주고, 실용적인 예제 코드를 즉시 제공합니다.'
                    }
                ],
                conclusion: 'AI는 개발자를 대체하는 것이 아니라, 더 창의적이고 가치 있는 업무에 집중할 수 있도록 돕는 강력한 도구입니다. AI를 활용하는 개발자와 그렇지 않은 개발자의 생산성 격차는 점점 더 벌어질 것입니다.',
                tags: ['ChatGPT', 'AI개발도구', 'GitHub Copilot', '개발생산성', '코딩자동화']
            },
            {
                title: 'Stable Diffusion과 Midjourney: 생성형 AI 이미지 도구 비교',
                intro: '2024년 현재, 생성형 AI 이미지 도구는 창작의 패러다임을 완전히 바꾸고 있습니다. 대표적인 두 도구를 비교해봅니다.',
                sections: [
                    {
                        heading: 'Stable Diffusion의 강점',
                        content: 'Stable Diffusion은 오픈소스로 공개되어 있어 로컬에서 무료로 실행할 수 있습니다. ControlNet, LoRA 등 다양한 확장 기능을 통해 세밀한 제어가 가능하며, 커스텀 모델 학습도 자유롭습니다. 개발자들에게는 API를 통한 자동화가 큰 장점입니다.'
                    },
                    {
                        heading: 'Midjourney의 장점',
                        content: 'Midjourney는 사용이 간편하고 예술적 퀄리티가 뛰어납니다. 별도의 설치 없이 Discord를 통해 바로 사용할 수 있으며, 프롬프트 작성이 상대적으로 쉽습니다. 최신 V6 모델은 텍스트 렌더링과 사실적 표현에서 탁월한 성능을 보여줍니다.'
                    },
                    {
                        heading: '선택 기준',
                        content: '높은 자유도와 커스터마이징이 필요하다면 Stable Diffusion을, 빠르고 쉽게 고품질 이미지가 필요하다면 Midjourney를 추천합니다. 많은 전문가들은 두 도구를 상황에 따라 병행하여 사용합니다.'
                    }
                ],
                conclusion: '생성형 AI 도구는 디자이너, 마케터, 개발자 모두에게 필수적인 도구가 되었습니다. 각 도구의 특성을 이해하고 적재적소에 활용하는 것이 중요합니다.',
                tags: ['Stable Diffusion', 'Midjourney', '생성형AI', 'AI이미지', 'AI아트']
            },
            {
                title: 'LLM(대규모 언어 모델)의 진화: GPT에서 Claude, Gemini까지',
                intro: '2024년 LLM 시장은 치열한 경쟁 속에서 빠르게 발전하고 있습니다. 주요 모델들의 특징을 살펴봅니다.',
                sections: [
                    {
                        heading: 'GPT-4 Turbo의 혁신',
                        content: 'OpenAI의 GPT-4 Turbo는 128K 컨텍스트 윈도우로 긴 문서 처리가 가능하며, 비용도 이전 대비 3배 저렴해졌습니다. 멀티모달 기능으로 이미지 이해와 생성도 가능합니다.'
                    },
                    {
                        heading: 'Claude 3의 차별화',
                        content: 'Anthropic의 Claude 3는 200K 토큰의 긴 컨텍스트와 뛰어난 안전성이 특징입니다. 특히 Claude 3 Opus는 복잡한 추론과 코드 생성에서 GPT-4를 능가하는 성능을 보입니다. 한글 처리 능력도 매우 우수합니다.'
                    },
                    {
                        heading: 'Google Gemini의 통합',
                        content: 'Google의 Gemini는 검색, YouTube, Gmail 등 구글 생태계와의 완벽한 통합이 강점입니다. Gemini Ultra는 멀티모달 이해에서 특히 뛰어난 성능을 보이며, 실시간 정보 접근이 가능합니다.'
                    }
                ],
                conclusion: 'LLM 선택은 사용 목적에 따라 달라집니다. 범용성은 GPT-4, 안전성과 긴 문서는 Claude, 구글 서비스 통합은 Gemini가 최적입니다. 여러 모델을 상황에 맞게 활용하는 것이 현명한 전략입니다.',
                tags: ['LLM', 'GPT-4', 'Claude', 'Gemini', '대규모언어모델', 'AI비교']
            }
        ]
    },
    languages: {
        category: '💻 프로그래밍 언어',
        topics: [
            {
                title: 'Rust가 시스템 프로그래밍의 미래인 이유',
                intro: 'Mozilla에서 시작된 Rust는 이제 시스템 프로그래밍의 새로운 표준으로 자리잡고 있습니다.',
                sections: [
                    {
                        heading: '메모리 안전성의 혁명',
                        content: 'Rust의 소유권(Ownership) 시스템은 컴파일 타임에 메모리 안전성을 보장합니다. C/C++의 고질적 문제였던 메모리 누수, 댕글링 포인터, 데이터 레이스를 원천적으로 차단합니다. 이로 인해 Microsoft, Google 같은 대기업들이 핵심 시스템에 Rust를 도입하고 있습니다.'
                    },
                    {
                        heading: '성능과 안전성의 균형',
                        content: 'Rust는 C/C++에 필적하는 성능을 유지하면서도 높은 수준의 안전성을 제공합니다. 가비지 컬렉션 없이도 메모리를 안전하게 관리하므로, 예측 가능한 성능이 중요한 임베디드, 게임, 시스템 소프트웨어에 이상적입니다.'
                    },
                    {
                        heading: '생태계의 성장',
                        content: 'Cargo 패키지 매니저, crates.io 레지스트리, 풍부한 라이브러리들이 개발 생산성을 높입니다. 또한 WebAssembly 지원으로 웹 개발에도 활용되고, Tokio 같은 비동기 런타임으로 고성능 서버 개발도 가능합니다.'
                    }
                ],
                conclusion: 'Rust는 학습 곡선이 가파르지만, 한번 익히면 안전하고 효율적인 코드를 작성할 수 있습니다. 시스템 프로그래밍의 미래를 준비하는 개발자라면 Rust는 필수 언어입니다.',
                tags: ['Rust', '시스템프로그래밍', '메모리안전성', 'WebAssembly', '성능최적화']
            },
            {
                title: 'TypeScript가 JavaScript를 대체할 수 있을까?',
                intro: 'TypeScript는 JavaScript의 슈퍼셋으로 시작했지만, 이제는 프론트엔드 개발의 사실상 표준이 되었습니다.',
                sections: [
                    {
                        heading: '타입 시스템의 가치',
                        content: 'TypeScript의 정적 타입 시스템은 개발 단계에서 버그를 미리 발견합니다. IDE의 자동완성, 리팩토링, 코드 네비게이션이 월등히 향상되어 대규모 프로젝트에서 필수적입니다. 타입 추론 덕분에 코드 작성량이 크게 늘지 않으면서도 안전성은 크게 향상됩니다.'
                    },
                    {
                        heading: '생태계의 전환',
                        content: 'React, Vue, Angular 등 주요 프레임워크들이 TypeScript를 공식 지원합니다. npm의 대부분 인기 패키지들도 TypeScript 타입 정의를 제공합니다. Next.js, Nest.js 같은 최신 프레임워크들은 TypeScript를 기본으로 채택했습니다.'
                    },
                    {
                        heading: '학습과 전환 비용',
                        content: 'JavaScript 개발자라면 TypeScript로의 전환이 비교적 쉽습니다. 기존 JavaScript 코드도 그대로 사용할 수 있어 점진적 마이그레이션이 가능합니다. 초기 학습 투자 대비 장기적인 생산성 향상 효과가 큽니다.'
                    }
                ],
                conclusion: 'TypeScript는 JavaScript를 완전히 대체하기보다는, JavaScript의 더 나은 형태로 자리잡고 있습니다. 새로운 프로젝트라면 TypeScript로 시작하는 것이 현명한 선택입니다.',
                tags: ['TypeScript', 'JavaScript', '정적타입', '프론트엔드', '타입시스템']
            },
            {
                title: 'Python 3.12의 새로운 기능들: 성능 개선과 편의성 향상',
                intro: 'Python 3.12는 역대 최고의 성능 향상과 함께 개발자 경험을 크게 개선한 버전입니다.',
                sections: [
                    {
                        heading: '극적인 성능 향상',
                        content: 'Python 3.12는 3.11 대비 5-10% 더 빠른 성능을 보입니다. PEP 709의 인라인 컴프리헨션 최적화와 개선된 에러 처리 메커니즘으로 실행 속도가 크게 향상되었습니다. 특히 반복문과 딕셔너리 연산에서 눈에 띄는 개선이 있습니다.'
                    },
                    {
                        heading: '향상된 에러 메시지',
                        content: '더 정확하고 이해하기 쉬운 에러 메시지로 디버깅이 쉬워졌습니다. 스택 트레이스가 더 명확해지고, 에러 발생 지점의 정확한 위치와 원인을 표시합니다. 초보자들의 학습 곡선을 크게 낮춰줍니다.'
                    },
                    {
                        heading: 'f-string 개선과 타입 힌팅',
                        content: 'f-string이 더 강력해져 복잡한 표현식도 사용할 수 있습니다. PEP 692의 TypedDict 언팩으로 타입 안전성이 향상되었고, Generic 타입 파라미터 문법도 간결해졌습니다.'
                    }
                ],
                conclusion: 'Python 3.12는 성능과 개발자 경험 모두에서 큰 도약을 이루었습니다. 기존 Python 사용자라면 업그레이드를 적극 권장하며, 새로 배우는 분들에게도 더 나은 학습 환경을 제공합니다.',
                tags: ['Python', 'Python3.12', '성능최적화', '프로그래밍언어', '개발생산성']
            }
        ]
    },
    trends: {
        category: '📈 IT 트렌드',
        topics: [
            {
                title: 'Web3와 블록체인: 과대광고를 넘어 실제 활용으로',
                intro: '2024년, Web3는 과대광고 단계를 벗어나 실질적인 비즈니스 가치를 창출하기 시작했습니다.',
                sections: [
                    {
                        heading: '탈중앙화 금융(DeFi)의 성숙',
                        content: 'DeFi는 이제 실험 단계를 넘어 실용적인 금융 서비스를 제공합니다. Uniswap, Aave 같은 프로토콜들은 수십억 달러의 유동성을 관리하며, 전통 금융 대비 더 높은 효율성과 접근성을 보여줍니다. 규제가 명확해지면서 기관 투자자들도 적극 참여하고 있습니다.'
                    },
                    {
                        heading: 'NFT의 진화: 투기에서 실용으로',
                        content: 'NFT는 단순 디지털 아트를 넘어 실제 자산의 소유권 증명, 멤버십, 게임 아이템 등 다양한 용도로 활용됩니다. 기업들은 NFT를 통한 충성도 프로그램과 커뮤니티 구축에 집중하고 있으며, 엔터테인먼트 산업에서 새로운 수익 모델을 창출하고 있습니다.'
                    },
                    {
                        heading: '기업용 블록체인의 확산',
                        content: '공급망 관리, 의료 기록, 신원 인증 등 기업 환경에서 블록체인 활용이 증가하고 있습니다. 삼성, IBM, 마이크로소프트 등 대기업들이 자체 블록체인 솔루션을 개발하고 도입하면서 실질적인 비즈니스 가치를 증명하고 있습니다.'
                    }
                ],
                conclusion: 'Web3는 여전히 발전 중이지만, 과대광고 시기를 지나 실제 가치를 만들어내고 있습니다. 기술적 이해와 함께 실용적 관점에서 접근하는 것이 중요합니다.',
                tags: ['Web3', '블록체인', 'DeFi', 'NFT', '탈중앙화', '암호화폐']
            },
            {
                title: '엣지 컴퓨팅: 클라우드에서 엣지로 이동하는 데이터 처리',
                intro: '5G와 IoT 확산으로 엣지 컴퓨팅이 차세대 컴퓨팅 패러다임으로 부상하고 있습니다.',
                sections: [
                    {
                        heading: '엣지 컴퓨팅의 필요성',
                        content: '자율주행차, 스마트 팩토리, AR/VR 등 실시간 처리가 중요한 분야에서 클라우드의 지연시간은 치명적입니다. 엣지 컴퓨팅은 데이터 발생 지점 근처에서 처리하여 밀리초 단위의 초저지연을 실현합니다. 또한 네트워크 트래픽 감소와 프라이버시 보호 효과도 있습니다.'
                    },
                    {
                        heading: '주요 활용 사례',
                        content: 'Netflix, Cloudflare 같은 기업들은 CDN을 통한 엣지 컴퓨팅으로 콘텐츠 전송 속도를 획기적으로 개선했습니다. 제조업에서는 실시간 품질 검사와 예측 정비에 활용되며, 소매업에서는 매장 내 고객 행동 분석과 재고 관리에 사용됩니다.'
                    },
                    {
                        heading: '개발자를 위한 엣지 플랫폼',
                        content: 'Cloudflare Workers, AWS Lambda@Edge, Vercel Edge Functions 등이 개발자 친화적인 엣지 컴퓨팅 플랫폼을 제공합니다. 기존 클라우드 앱을 큰 수정 없이 엣지로 이전할 수 있어, 도입 장벽이 낮아지고 있습니다.'
                    }
                ],
                conclusion: '엣지 컴퓨팅은 클라우드를 대체하는 것이 아니라 보완하는 기술입니다. 상황에 따라 클라우드와 엣지를 하이브리드로 활용하는 것이 최적의 전략입니다.',
                tags: ['엣지컴퓨팅', '클라우드', 'CDN', '저지연', 'IoT', '5G']
            },
            {
                title: 'DevOps에서 Platform Engineering으로: 개발 조직의 진화',
                intro: '2024년 IT 조직의 화두는 Platform Engineering입니다. DevOps의 다음 단계로 주목받는 이유를 알아봅니다.',
                sections: [
                    {
                        heading: 'DevOps의 한계',
                        content: 'DevOps는 개발과 운영의 장벽을 허물었지만, 개발자들이 인프라와 배포에 너무 많은 시간을 쓰게 만들었습니다. 각 팀이 자체 도구를 구축하면서 중복 작업이 증가하고, 학습 곡선도 가팔라졌습니다. 이는 핵심 비즈니스 로직 개발에 집중하기 어렵게 만들었습니다.'
                    },
                    {
                        heading: 'Platform Engineering의 등장',
                        content: 'Platform Engineering은 개발자를 위한 셀프서비스 플랫폼을 구축합니다. 내부 개발자 플랫폼(IDP)을 통해 인프라 프로비저닝, CI/CD, 모니터링 등을 표준화하고 자동화합니다. 개발자들은 복잡한 인프라 지식 없이도 버튼 클릭만으로 배포할 수 있습니다.'
                    },
                    {
                        heading: '성공 사례와 도구들',
                        content: 'Spotify의 Backstage, Airbnb의 내부 플랫폼이 대표적 성공 사례입니다. Kubernetes Operator, Terraform, ArgoCD 등을 조합하여 강력한 플랫폼을 구축할 수 있습니다. 이를 통해 배포 시간이 수일에서 수분으로 단축되고, 개발자 만족도도 크게 향상됩니다.'
                    }
                ],
                conclusion: 'Platform Engineering은 DevOps의 종말이 아니라 진화입니다. 조직이 성장할수록 Platform Engineering의 가치는 더욱 커집니다. 개발자 경험(DX)을 최우선으로 하는 플랫폼 구축이 경쟁력의 핵심입니다.',
                tags: ['Platform Engineering', 'DevOps', 'IDP', 'Kubernetes', '개발자경험', 'CI/CD']
            }
        ]
    },
    tools: {
        category: '🛠️ 개발 도구',
        topics: [
            {
                title: 'GitHub Copilot vs Cursor: AI 코딩 어시스턴트 비교',
                intro: 'AI 기반 코딩 도구들이 개발자의 필수품이 되었습니다. 대표적인 두 도구를 비교해봅니다.',
                sections: [
                    {
                        heading: 'GitHub Copilot의 강점',
                        content: 'GitHub Copilot은 선구자답게 안정성과 신뢰성이 뛰어납니다. VS Code, JetBrains IDE 등 다양한 환경을 지원하고, GitHub과의 완벽한 통합으로 프로젝트 컨텍스트를 잘 이해합니다. 월 10달러로 무제한 사용 가능하며, 학생과 오픈소스 기여자에게는 무료입니다.'
                    },
                    {
                        heading: 'Cursor의 차별화',
                        content: 'Cursor는 IDE 자체가 AI 중심으로 설계되었습니다. Cmd+K로 코드 편집, Cmd+L로 대화형 코딩이 가능하며, 전체 코드베이스 이해도가 뛰어납니다. 멀티파일 편집과 터미널 통합으로 더 자연스러운 워크플로우를 제공합니다. GPT-4를 무제한 사용할 수 있는 Pro 플랜이 매력적입니다.'
                    },
                    {
                        heading: '선택 기준',
                        content: '기존 IDE를 유지하고 싶다면 Copilot을, AI 중심의 새로운 개발 경험을 원한다면 Cursor를 선택하세요. 많은 개발자들이 두 도구를 프로젝트 성격에 따라 병행 사용합니다. 빠른 프로토타이핑은 Cursor로, 프로덕션 코드는 Copilot으로 작성하는 식입니다.'
                    }
                ],
                conclusion: 'AI 코딩 도구는 이제 선택이 아닌 필수입니다. 두 도구 모두 무료 체험을 제공하니, 직접 사용해보고 자신에게 맞는 것을 선택하세요. 생산성 향상은 보장합니다.',
                tags: ['GitHub Copilot', 'Cursor', 'AI코딩', '개발도구', 'IDE', '생산성']
            },
            {
                title: 'Docker와 Kubernetes: 컨테이너 기술의 필수 지식',
                intro: '현대 클라우드 네이티브 개발에서 컨테이너는 필수입니다. Docker와 Kubernetes의 핵심을 정리합니다.',
                sections: [
                    {
                        heading: 'Docker가 해결한 문제',
                        content: '"내 컴퓨터에서는 되는데요?"라는 말은 이제 옛말입니다. Docker는 애플리케이션과 의존성을 하나의 컨테이너로 패키징하여 어디서나 동일하게 실행되도록 합니다. 가상머신보다 가볍고 빠르며, 개발 환경과 프로덕션 환경의 일관성을 보장합니다. Dockerfile 하나로 전체 환경을 코드화할 수 있습니다.'
                    },
                    {
                        heading: 'Kubernetes의 필요성',
                        content: 'Docker로 컨테이너를 만들었다면, Kubernetes는 이를 대규모로 관리합니다. 수백, 수천 개의 컨테이너를 자동으로 배포, 스케일링, 복구합니다. 무중단 배포, 로드밸런싱, 자동 확장이 기본 기능입니다. 구글이 15년간 쌓은 컨테이너 운영 노하우가 오픈소스로 공개된 것입니다.'
                    },
                    {
                        heading: '학습 로드맵',
                        content: '먼저 Docker로 컨테이너 개념을 익히세요. Dockerfile 작성, 이미지 빌드, 컨테이너 실행을 마스터한 후 Docker Compose로 멀티 컨테이너 앱을 다뤄봅니다. 이후 Kubernetes의 Pod, Deployment, Service 개념을 학습하고, Minikube로 로컬 클러스터를 실습합니다. 마지막으로 Helm으로 패키지 관리를 배웁니다.'
                    }
                ],
                conclusion: 'Docker와 Kubernetes는 초기 학습 곡선이 있지만, 현대 백엔드 개발자의 필수 스킬입니다. 클라우드 네이티브 시대에 경쟁력을 갖추려면 반드시 익혀야 할 기술입니다.',
                tags: ['Docker', 'Kubernetes', '컨테이너', 'DevOps', '클라우드네이티브', 'K8s']
            },
            {
                title: 'Postman 대안: Thunder Client와 Insomnia 비교',
                intro: 'API 테스팅 도구의 대명사였던 Postman이 무거워지면서, 가벼운 대안들이 주목받고 있습니다.',
                sections: [
                    {
                        heading: 'Postman의 한계',
                        content: 'Postman은 강력하지만 점점 무거워지고 있습니다. Electron 기반이라 메모리를 많이 소모하고, 로그인이 필수이며, 클라우드 동기화 강요가 부담스럽습니다. 간단한 API 테스트에도 오버스펙인 경우가 많습니다.'
                    },
                    {
                        heading: 'Thunder Client: VS Code 네이티브',
                        content: 'Thunder Client는 VS Code 확장으로 설치 즉시 사용 가능합니다. IDE를 벗어날 필요 없이 코드 바로 옆에서 API를 테스트할 수 있습니다. 가볍고 빠르며, 컬렉션을 Git에 저장하여 팀과 공유할 수 있습니다. 무료 버전도 대부분의 기능을 제공합니다.'
                    },
                    {
                        heading: 'Insomnia: 개발자 중심 설계',
                        content: 'Insomnia는 깔끔한 UI와 GraphQL 지원이 강점입니다. 환경 변수 관리가 직관적이고, 코드 스니펫 생성이 편리합니다. gRPC와 WebSocket도 지원하여 현대적인 API 개발에 최적화되어 있습니다. 오픈소스이며 Kong 생태계와 통합됩니다.'
                    }
                ],
                conclusion: 'VS Code를 주로 사용한다면 Thunder Client를, 독립 도구를 선호한다면 Insomnia를 추천합니다. 둘 다 Postman보다 가볍고 빠르며, 개발자 경험이 뛰어납니다. 팀 규모와 워크플로우에 맞춰 선택하세요.',
                tags: ['API테스팅', 'Thunder Client', 'Insomnia', 'Postman', 'REST API', 'GraphQL']
            }
        ]
    },
    frameworks: {
        category: '🎯 프레임워크',
        topics: [
            {
                title: 'Next.js 14의 Server Actions: 풀스택 개발의 새로운 패러다임',
                intro: 'Next.js 14의 Server Actions는 API 라우트 없이도 서버 로직을 실행할 수 있는 혁신적 기능입니다.',
                sections: [
                    {
                        heading: 'Server Actions란?',
                        content: 'Server Actions는 클라이언트 컴포넌트에서 직접 서버 함수를 호출할 수 있게 합니다. API 엔드포인트를 별도로 만들 필요 없이, "use server" 지시어만으로 서버 측 로직을 정의합니다. 폼 제출, 데이터 변경, 인증 등을 더 간단하고 직관적으로 처리할 수 있습니다.'
                    },
                    {
                        heading: '실용적인 장점',
                        content: '타입 안전성이 보장되어 클라이언트와 서버 간 타입 불일치 에러가 사라집니다. 보일러플레이트 코드가 크게 줄어들고, 서버 상태와 클라이언트 상태를 자연스럽게 연결합니다. Revalidation과 함께 사용하면 데이터 갱신도 자동으로 처리됩니다.'
                    },
                    {
                        heading: '주의사항과 베스트 프랙티스',
                        content: 'Server Actions는 mutations에 최적화되어 있습니다. 복잡한 읽기 로직은 여전히 API 라우트나 Server Components를 사용하는 것이 좋습니다. 에러 처리와 보안 검증을 철저히 하고, 민감한 로직은 서버에서만 실행되도록 주의해야 합니다.'
                    }
                ],
                conclusion: 'Server Actions는 Next.js를 진정한 풀스택 프레임워크로 만들었습니다. React Server Components와 함께 사용하면 개발 생산성이 획기적으로 향상됩니다. Next.js 14를 사용한다면 반드시 활용해야 할 기능입니다.',
                tags: ['Next.js', 'Server Actions', 'React', '풀스택', 'Server Components']
            },
            {
                title: 'Astro 4.0: 컨텐츠 중심 웹사이트의 최적 선택',
                intro: 'Astro는 블로그, 포트폴리오, 마케팅 사이트 등 컨텐츠 중심 웹사이트를 위한 현대적 프레임워크입니다.',
                sections: [
                    {
                        heading: '제로 JavaScript 기본 전략',
                        content: 'Astro의 핵심 철학은 "기본적으로 JavaScript를 보내지 않는다"입니다. 빌드 타임에 정적 HTML을 생성하여 초고속 로딩을 실현합니다. 필요한 곳에만 선택적으로 JavaScript를 hydrate하는 "아일랜드 아키텍처"로 최적의 성능을 보장합니다.'
                    },
                    {
                        heading: '프레임워크 무관성',
                        content: 'React, Vue, Svelte, Solid 등 어떤 UI 프레임워크든 함께 사용할 수 있습니다. 심지어 한 프로젝트에서 여러 프레임워크를 혼합할 수도 있습니다. 기존 컴포넌트를 재사용하면서도 Astro의 성능 이점을 누릴 수 있습니다.'
                    },
                    {
                        heading: '컨텐츠 컬렉션과 Markdown',
                        content: 'Content Collections API로 Markdown/MDX 파일을 타입 세이프하게 관리합니다. 프론트매터를 Zod 스키마로 검증하고, 자동 완성과 타입 체크를 제공합니다. 블로그나 문서 사이트를 만들기에 완벽한 DX를 제공합니다.'
                    }
                ],
                conclusion: 'Astro는 컨텐츠 중심 사이트에서 Next.js보다 훨씬 빠릅니다. SEO와 성능이 중요한 프로젝트라면 Astro를 선택하세요. 학습 곡선도 완만하여 빠르게 익힐 수 있습니다.',
                tags: ['Astro', '정적사이트', 'SSG', '아일랜드아키텍처', 'Markdown', '성능최적화']
            },
            {
                title: 'Svelte와 SvelteKit: React를 대체할 수 있을까?',
                intro: 'Svelte는 가상 DOM 없이도 빠르고 효율적인 UI를 만드는 혁신적 프레임워크입니다.',
                sections: [
                    {
                        heading: 'Svelte의 컴파일러 접근',
                        content: 'Svelte는 런타임 프레임워크가 아닌 컴파일러입니다. 빌드 타임에 최적화된 순수 JavaScript로 변환되어 런타임 오버헤드가 없습니다. 결과물이 작고 빠르며, 메모리 효율도 뛰어납니다. 복잡한 상태 관리 라이브러리 없이도 reactive한 코드를 작성할 수 있습니다.'
                    },
                    {
                        heading: '직관적인 문법',
                        content: 'Svelte의 문법은 순수 HTML/CSS/JavaScript에 가깝습니다. JSX가 아닌 템플릿 문법으로 학습이 쉽고, 보일러플레이트가 거의 없습니다. $: 문법으로 reactive statement를 간단히 작성하고, bind: 지시어로 양방향 바인딩도 직관적입니다.'
                    },
                    {
                        heading: 'SvelteKit: 풀스택 프레임워크',
                        content: 'SvelteKit은 Svelte의 Next.js 버전입니다. 파일 기반 라우팅, SSR/SSG, API 라우트, 서버리스 배포를 지원합니다. Adapter 시스템으로 Vercel, Netlify, Cloudflare 등 어디든 배포할 수 있습니다. 최근 1.0 출시로 프로덕션 준비가 완료되었습니다.'
                    }
                ],
                conclusion: 'Svelte는 React보다 배우기 쉽고 빠릅니다. 생태계는 아직 React만큼 크지 않지만, 빠르게 성장 중입니다. 새 프로젝트나 작은 팀이라면 Svelte를 고려해볼 만합니다. 개발자 만족도 1위는 우연이 아닙니다.',
                tags: ['Svelte', 'SvelteKit', '프론트엔드', '컴파일러', 'React대안', '성능']
            }
        ]
    }
};

// 랜덤 주제 선택 함수
function getRandomTopic() {
    const categories = Object.keys(blogTopics);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const category = blogTopics[randomCategory];
    const topics = category.topics;
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    return {
        category: category.category,
        ...randomTopic
    };
}

// 블로그 글 생성 함수
function generateBlogPost() {
    const topic = getRandomTopic();
    
    // 날짜 생성
    const today = new Date();
    const dateString = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    
    // 카테고리 표시
    document.getElementById('category').textContent = topic.category;
    document.getElementById('date').textContent = dateString;
    
    // 제목
    document.getElementById('postTitle').textContent = topic.title;
    
    // 본문 생성
    let content = `<p><strong>${topic.intro}</strong></p>`;
    
    topic.sections.forEach(section => {
        content += `<h4>${section.heading}</h4>`;
        content += `<p>${section.content}</p>`;
    });
    
    content += `<p><strong>결론</strong></p>`;
    content += `<p>${topic.conclusion}</p>`;
    
    document.getElementById('postContent').innerHTML = content;
    
    // 태그 생성
    const tagsContainer = document.getElementById('postTags');
    tagsContainer.innerHTML = '';
    topic.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = `#${tag}`;
        tagsContainer.appendChild(tagElement);
    });
}

// 토스트 메시지 표시
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 블로그 글 텍스트 추출
function getBlogText() {
    const category = document.getElementById('category').textContent;
    const date = document.getElementById('date').textContent;
    const title = document.getElementById('postTitle').textContent;
    const content = document.getElementById('postContent').innerText;
    const tags = Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent).join(' ');
    
    return `${category}\n${date}\n\n${title}\n\n${content}\n\n${tags}`;
}

// ==================== 뉴스 기능 추가 ====================

let currentMode = 'template'; // 'template' 또는 'news'
let newsData = null;
let selectedNewsIndex = null;

// 뉴스 데이터 로드
async function loadNewsData(forceRefresh = false) {
    try {
        // 캐시 버스팅: 타임스탬프를 쿼리 파라미터로 추가
        const timestamp = forceRefresh ? Date.now() : Math.floor(Date.now() / 60000); // 1분마다 갱신
        const response = await fetch(`news-data.json?t=${timestamp}`);
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

// 영어 제목을 한글로 번역 (간단한 번역 매핑)
function translateNewsTitle(news) {
    // 원문 제목을 그대로 사용하되, 일부 키워드만 번역
    let title = news.title;
    
    // 기본 번역 매핑
    const translations = {
        // 일반 동사
        'announces': '발표',
        'launches': '출시',
        'releases': '공개',
        'introduces': '소개',
        'unveils': '공개',
        'reveals': '밝혀',
        'raises': '투자 유치',
        'acquires': '인수',
        'partners': '파트너십 체결',
        'expands': '확장',
        'updates': '업데이트',
        'challenges': '도전',
        'surpasses': '초과',
        'reaches': '도달',
        'hits': '달성',
        'tops': '1위',
        'leads': '선도',
        'dominates': '지배',
        
        // IT 용어
        'AI': 'AI',
        'chatbot': '챗봇',
        'robotaxis': '로보택시',
        'unicorn': '유니콘',
        'startup': '스타트업',
        'funding': '투자',
        'users': '사용자',
        'revenue': '매출',
        'market': '시장',
        'platform': '플랫폼',
        'service': '서비스',
        'app': '앱',
        'software': '소프트웨어',
        'hardware': '하드웨어',
        'device': '디바이스',
        'chip': '칩',
        'processor': '프로세서',
        'algorithm': '알고리즘',
        'data': '데이터',
        'cloud': '클라우드',
        'security': '보안',
        'privacy': '프라이버시',
        'blockchain': '블록체인',
        'crypto': '암호화폐',
        'NFT': 'NFT',
        'metaverse': '메타버스',
    };
    
    // 제목은 원문 그대로 유지하거나 키워드 위주로 한국어화
    // 너무 긴 제목은 요약
    return `[${news.source.toUpperCase()}] ${news.title}`;
}

// 뉴스 제목 생성
function generateNewsTitle(news) {
    return translateNewsTitle(news);
}

// 영어 요약을 자연스럽게 한글로 번역
function translateSummary(news) {
    // 원문 요약을 그대로 사용 (실제로는 번역 API를 사용하는 것이 이상적)
    // 여기서는 기본적인 의역 제공
    const summary = news.summary;
    const source = news.source.toUpperCase();
    
    // 간단한 번역 (실제로는 번역 API 필요)
    return `${source}에 따르면, ${summary} (원문 요약)`;
}

// 뉴스 본문 생성 - 원문 중심, 정형화된 틀 최소화
function generateNewsContent(news) {
    let content = '';
    
    // 원문 제목과 요약
    content += `<div style="padding: 20px; background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-radius: 12px; margin-bottom: 25px;">`;
    content += `<h3 style="color: #667eea; margin-bottom: 15px; font-size: 1.4em;">${news.title}</h3>`;
    content += `<p style="font-size: 1.05em; line-height: 1.8; color: #333;">${news.summary}</p>`;
    content += `<div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd; display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.9em; color: #666;">`;
    content += `<span><strong>📅 출처:</strong> ${news.source.toUpperCase()}</span>`;
    content += `<span><strong>🏷️ 카테고리:</strong> ${news.category}</span>`;
    content += `<span><strong>🔑 키워드:</strong> ${news.keywords.join(', ')}</span>`;
    if (news.published) {
        content += `<span><strong>📆 발행일:</strong> ${new Date(news.published).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>`;
    }
    content += `</div>`;
    content += `</div>`;
    
    // 한국어 설명 (간단하게)
    content += `<h4>📝 주요 내용</h4>`;
    content += `<p>이 뉴스는 <strong>${news.category}</strong> 분야의 최신 동향을 다루고 있습니다. `;
    content += `${news.keywords.slice(0, 3).join(', ')} 등의 주제와 관련되어 있으며, `;
    content += `IT 업계와 기술 트렌드에 관심 있는 분들에게 유용한 정보를 제공합니다.</p>`;
    
    // 원문 링크
    if (news.link) {
        content += `<div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 8px;">`;
        content += `<p style="margin: 0; font-size: 1.05em;"><strong>🔗 원문 링크:</strong></p>`;
        content += `<p style="margin: 10px 0 0 0;"><a href="${news.link}" target="_blank" style="color: #667eea; text-decoration: none; font-weight: 600; word-break: break-all;">${news.link}</a></p>`;
        content += `<p style="margin: 10px 0 0 0; font-size: 0.9em; color: #666;">※ 자세한 내용은 원문을 참고하시기 바랍니다.</p>`;
        content += `</div>`;
    }
    
    // 관련 태그
    content += `<div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e0e0e0;">`;
    content += `<p style="font-size: 0.95em; color: #666; margin-bottom: 10px;"><strong>관련 태그:</strong></p>`;
    content += `<div style="display: flex; flex-wrap: wrap; gap: 8px;">`;
    [...news.keywords, news.category, news.source].forEach(tag => {
        content += `<span style="background: #e8eaf6; color: #5c6bc0; padding: 6px 14px; border-radius: 15px; font-size: 0.9em; font-weight: 500;">#${tag}</span>`;
    });
    content += `</div>`;
    content += `</div>`;
    
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

// 뉴스 데이터 새로고침
async function refreshNewsData() {
    showToast('🔄 최신 뉴스를 불러오는 중...');
    
    try {
        // 강제로 최신 데이터 로드
        await loadNewsData(true);
        
        if (newsData && newsData.news && newsData.news.length > 0) {
            displayNewsList();
            showToast('✅ 뉴스가 성공적으로 업데이트되었습니다!');
        } else {
            showToast('⚠️ 업데이트할 뉴스가 없습니다.');
        }
    } catch (error) {
        showToast('❌ 뉴스 업데이트에 실패했습니다.');
        console.error('뉴스 업데이트 오류:', error);
    }
}

// GitHub Actions 워크플로우 트리거
async function triggerNewsUpdate() {
    // 먼저 현재 데이터 새로고침 시도
    await refreshNewsData();
    
    // 추가 안내
    setTimeout(() => {
        showToast('💡 더 최신 뉴스를 원하시면 GitHub Actions에서 크롤링을 실행하세요.');
    }, 2000);
    
    // GitHub Actions 페이지 열기 옵션 제공
    setTimeout(() => {
        if (confirm('GitHub Actions 페이지로 이동하여 최신 뉴스를 크롤링하시겠습니까?')) {
            window.open('https://github.com/teahyen/outo-uplode/actions', '_blank');
        }
    }, 3000);
}

// ==================== 통합 초기화 ====================

async function initializeApp() {
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
    
    // 뉴스 상태 클릭으로 새로고침
    document.getElementById('newsStatus').addEventListener('click', refreshNewsData);
    document.getElementById('newsStatus').style.cursor = 'pointer';
    
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
    
    // 첫 글 생성 (템플릿 모드)
    setTimeout(() => {
        if (currentMode === 'template') {
            document.getElementById('generateBtn').click();
        }
    }, 500);
}

// 페이지 로드 시 초기화
window.addEventListener('load', initializeApp);
