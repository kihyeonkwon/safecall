# SafeCall - AI 보이스피싱 예방 훈련 서비스 랜딩페이지

SafeCall은 AI 기술을 활용한 보이스피싱 예방 훈련 서비스의 MVP 랜딩페이지입니다. 딥페이크 음성 기술의 악용으로부터 가족을 보호하기 위한 혁신적인 솔루션을 제공합니다.

## 🎯 프로젝트 목표

- 생성형 AI를 활용한 보이스피싱의 심각성 알리기
- '부모님의 자산을 지키는 가장 확실한 투자'라는 핵심 가치 전달
- 파운더스 클럽 연간 구독 모델 가입자 확보
- 공포와 불안감을 통한 경각심 조성 후 신뢰할 수 있는 해결책 제시

## 🚀 주요 기능

### 랜딩페이지 구성

1. **Hero Section**: 강력한 첫 인상과 즉시 행동 유도
2. **Problem Section**: 객관적 데이터와 실제 사례로 위험성 강조
3. **Founder Story**: 창업자의 진정성 있는 스토리로 신뢰 구축
4. **Solution Section**: AI 기반 훈련 시스템 작동 방식 설명
5. **Founders Club**: 파격적인 할인 혜택과 한정 모집으로 긴급성 조성
6. **Trust & Safety**: 보안과 윤리적 운영으로 불안 해소
7. **FAQ**: 주요 우려사항에 대한 사전 답변
8. **Final CTA**: 마지막 결정 유도
9. **Payment Form**: 간편한 결제 프로세스

### 기술적 특징

- **Next.js 15** + **TypeScript**: 최신 React 프레임워크
- **Tailwind CSS**: 반응형 디자인과 빠른 스타일링
- **Framer Motion**: 부드러운 애니메이션과 인터랙션
- **React Hook Form** + **Zod**: 폼 유효성 검사
- **완전 반응형**: 모든 디바이스에서 최적화된 경험

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: 네이비 블루, 다크 그레이 (신뢰, 안정감)
- **Accent**: 레드, 오렌지 (경고, 긴급성, CTA)
- **Base**: 화이트, 라이트 그레이 (가독성)

### 타이포그래피

- **Primary Font**: Inter (가독성과 현대적 느낌)
- **System Fonts**: 백업 시스템 폰트 지원

## 🛠️ 설치 및 실행

### 개발 환경 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

서버 실행 후 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 📱 주요 컴포넌트

### UI 컴포넌트

- `Button`: 다양한 variant와 size 지원
- `Form Components`: 유효성 검사가 포함된 폼 요소들

### 섹션 컴포넌트

- `HeroSection`: 메인 히어로 섹션
- `ProblemSection`: 문제 제기 섹션
- `FounderStorySection`: 창업자 스토리
- `SolutionSection`: 솔루션 설명
- `FoundersClubSection`: 가격 제안
- `TrustSafetySection`: 신뢰 구축
- `FAQSection`: 자주 묻는 질문
- `FinalCTASection`: 최종 행동 유도
- `PaymentFormSection`: 결제 폼
- `Footer`: 푸터

## 🔧 설정 및 커스터마이징

### 환경 변수

```env
# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id

# Payment Gateway (예시)
NEXT_PUBLIC_TOSS_CLIENT_KEY=your_toss_client_key
```

### SEO 최적화

- 완전한 메타데이터 설정
- Open Graph 태그
- Twitter Card 지원
- 구조화된 데이터 (Schema.org)

## 📊 분석 및 추적

### 포함된 분석 도구

- **Google Analytics 4**: 사용자 행동 추적
- **Hotjar**: 히트맵과 사용자 세션 분석
- **Form Analytics**: 폼 완료율과 이탈 지점 분석

### 주요 추적 지표

- 페이지별 이탈률
- CTA 버튼 클릭률
- 폼 전환율
- 스크롤 깊이

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼

- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📈 성능 최적화

- **Image Optimization**: Next.js Image 컴포넌트 활용
- **Code Splitting**: 자동 코드 분할
- **Bundle Analysis**: webpack-bundle-analyzer
- **Core Web Vitals**: 모든 지표 최적화

## 🔐 보안

- CSP (Content Security Policy) 설정
- XSS 방지
- CSRF 보호
- 안전한 폼 처리

## 🤝 기여하기

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 연락처

- 이메일: support@safecall.kr
- 전화: 1588-0000
- 웹사이트: [https://safecall.kr](https://safecall.kr)

---

**SafeCall** - AI 기술로 가족을 보호하는 보이스피싱 예방 훈련 서비스
