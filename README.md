# 📌 Todo App

**React + Redux Toolkit + localStorage** 기반의 간단한 **Todo List** 프로젝트입니다.

## 🚀 주요 기능
- **할 일 추가**: `ADD` 버튼을 눌러 입력 창을 띄우고 새로운 할 일을 추가할 수 있습니다.
- **할 일 완료 표시**: 체크박스를 클릭하면 완료된 항목에 `line-through` 스타일이 적용됩니다.
- **할 일 수정**: `Edit` 버튼을 클릭하면 해당 항목을 편집할 수 있습니다.
- **할 일 삭제**: `Delete` 버튼을 클릭하면 항목이 제거됩니다.
- **데이터 저장**: `localStorage`에 저장되어 새로고침 후에도 데이터가 유지됩니다.

## 🛠️ 기술 스택
- **React** – UI 컴포넌트 구성
- **Redux Toolkit** – 상태 관리
- **localStorage** – 데이터 영구 저장
- **Styled Components** – 스타일링
- **React Hooks (`useState`, `useDispatch`, `useSelector`)** – 상태 및 이벤트 관리

## 📂 프로젝트 구조
```
/src
├── components
│ ├── elements
│ │ ├── Button.jsx # 재사용 가능한 버튼 컴포넌트
│ │ ├── Input.jsx # 재사용 가능한 입력 필드 컴포넌트
│ │ ├── Checkbox.jsx # 재사용 가능한 체크박스 컴포넌트
│ ├── Add.jsx # Todo 추가 입력창
│ ├── List.jsx  # Todo 리스트
│ ├── ThemeToggleSwitch.jsx  # Theme 변경
├── constant
│ ├── routes.js // 상수 정의
├── hooks
├── pages
│ ├── error
│ │ ├── errpr.jsx
│ ├── main
│ │ ├── main.jsx
├── router
│ ├── index.jsx
├── store
│ ├── index.js
│ ├── ThemeContext.js
│ ├── todo.js # Redux Toolkit을 이용한 Todo 상태 관리
├── styles
│ ├── globalStyle.js
│ ├── reset.css
│ ├── theme.js
├── App.jsx # 메인 컴포넌트
├── index.jsx # React 앱 엔트리 포인트
```

## 🎮 사용 방법
1. 프로젝트를 클론
   ```sh
   git clone -b feat/todo_react --single-branch git@github.com:Shin-Yu-1/clone.git
   ```
2. 폴더 이동
   ```sh
   cd todo-app
   ```
3. 개발 패키지 설치
   ```sh
   pnpm install
   ```   
4. 개발 서버 실행
   ```sh
   pnpm start
   ```   

## 📸 UI 스크린샷
