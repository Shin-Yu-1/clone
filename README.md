# 🎬 Netflix Clone App

**React + Redux Toolkit + Styled-Components + Webpack** 기반의 넷플릭스 클론 프로젝트입니다.  
TMDB API를 활용하여 인기 콘텐츠를 슬라이드로 보여주고, 검색 및 상세 정보를 확인할 수 있습니다.


---


## 🚀 주요 기능

- 🎞️ **영화/TV 목록 출력**: TMDB API를 통해 인기 콘텐츠 가져오기
- 🔍 **검색 기능**: 디바운스를 적용한 실시간 검색 기능
- ✅ **모달 상세 보기**: 항목 클릭 시 모달을 통한 상세 정보 표시
- 🎨 **다크/라이트 테마 전환**: `ThemeContext`로 테마 스위치 가능
- 🎯 **Swiper 슬라이더 적용**: 다양한 콘텐츠를 슬라이드로 탐색
- 📱 **반응형 UI 구성**
- ⚙️ **환경변수 및 .env 파일 관리**

## 🛠️ 기술 스택
- **React** – UI 컴포넌트 기반 SPA
- **React Router v6** – 클라이언트 라우팅
- **Styled Components** – 컴포넌트 스타일링
- **Swiper** – 영화 리스트 슬라이더
- **Webpack** – 빌드 및 번들링
- **ESLint + Prettier** – 코드 스타일 및 정적 분석
- **dotenv** – 환경 변수 관리

## 📁 주요 디렉토리

- `api/`: axios 설정, 요청 정리
- `components/`: 공통 UI 및 모달 컴포넌트
- `hooks/`: 커스텀 훅 (`useDebounce`, `useOnClickOutside`)
- `pages/`: Main, Detail, Search, Error 등 페이지 컴포넌트
- `router/`: React Router 설정 및 라우트 구성
- `styles/`: 테마, 글로벌 스타일, reset 등 스타일 파일

## 🎮 사용 방법
1. 프로젝트를 클론
   ```sh
   git clone -b feat/netflix_react --single-branch git@github.com:Shin-Yu-1/clone.git
   ```
2. 폴더 이동
   ```sh
   cd clone
   ```
3. 개발 패키지 설치
   ```sh
   pnpm install
   ```   
4. 개발 서버 실행
   ```sh
   pnpm start
   ```   
