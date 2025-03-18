# 프로젝트 저장소

이 저장소는 여러 개의 프로젝트를 포함하고 있으며, 각 기능 브랜치(feat/*)에 따라 다른 프로젝트가 관리되고 있습니다.

## 브랜치별 프로젝트 개요

### 1. `main`
- 저장소의 기본 브랜치로, 프로젝트 안내 목적.
- 전체 프로젝트의 README 및 공통 정보 관리.

### 2. `develop`
- 개발 브랜치

### 3. `feat/netflix`
- **Netflix Clone Project**
- 사용 기술: **HTML5, CSS, JavaScript**
- Netflix의 기본 UI를 클론한 프로젝트로, 프론트엔드 디자인과 레이아웃을 중심으로 구현됨.

### 4. `feat/todo`
- **Todo List App**
- 사용 기술: **HTML, CSS, JavaScript**
- 사용자가 할 일을 추가, 삭제, 수정할 수 있도록 구현됨.

### 5. `feat/todo_react`
- **React 기반 Todo List App**
- 사용 기술: **React**
- 기존 `feat/todo` 프로젝트를 React를 사용하여 리팩토링한 버전으로, 컴포넌트 기반 UI와 상태 관리를 활용하여 더 나은 사용자 경험을 제공.

## 프로젝트 실행 방법
각 브랜치에서 프로젝트를 실행하는 방법은 해당 브랜치의 README를 참고하세요.

```bash
# 브랜치 이동
$ git checkout <브랜치명>

# 프로젝트 실행 예시
$ pnpm install  # (React 프로젝트의 경우)
$ pnpm start    # (React 프로젝트 실행)
```

---

더 자세한 내용은 각 브랜치의 README를 참고해주세요.