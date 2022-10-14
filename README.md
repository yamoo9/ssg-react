# React Hooks & Context

## Side Effects

- [x] 네트워크 통신 요청/응답
- [x] DOM 요소 접근/조작
- [x] 이벤트 구독/취소
- [x] 오류 감지/처리 (클래스만 가능)

## useCallback vs. useMemo 훅 비교

- [x] 목적은 같으나, 용도의 차이를 가짐
- [x] React.memo (HOC, 고차 컴포넌트: 컴포넌트 메모리) vs. React.useMemo (Hook, 훅: 값 기억)

## PropTypes 타입 검사

- [x] 여러 타입 검사 (oneOf([null, undefined]), oneOfType([]))
- [x] JSON 포멧 형식의 타입 검사 (shape, exact, arrayOf)
- [x] null, undefined 타입 검사 (oneOf([null, undefined])

## Context API

- [x] Context
- [x] Provider
- [ ] Consumer
- [x] useContext

## 고차 컴포넌트

- [x] withTheme
- [ ] withAuth

## 커스텀 훅

- [x] 로직 재사용
- [x] 클린 트리 (vs. 클래스 with HOC 트리)

## 복잡한 상태 관리

- [x] useReducer 훅
- [x] Redux 아키텍처 (dispatch, reducer, state, action)
