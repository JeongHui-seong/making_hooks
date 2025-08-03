# React의 훅들을 가지고 나만의 커스텀 훅 만들기
## useInput
useState를 활용하여 input 태그 안에 값을 감지해 내가 설정해놓은 input 값 조건에 맞지 않으면 실행되지 않음
[useInput](./src/pages/UseInput.jsx)

## useTabs
useState를 활용하여 탭 버튼을 누르면 해당 탭의 내용이 나오게하는 자동화 훅
[useTabs](./src/pages/UseTabs.jsx)

## useEffect
useEffect 작동원리 및 주기 이해
[useEffect](./src/pages/useEffect.jsx)

## useTitle
useEffect의 componentDidMount와 componentWillUpdate를 활용한 웹 브라우저 타이블 변경
[useTitle](./src/pages/useTitle.jsx)

## useClick
useEffect의 componentDidMount, componentWillUpdate, componentWillUnMount를 모두 활용하고, useRef와 함께 사용해 클릭시 함수 동작
[useClick](./src/pages/useClick.jsx)

## useBeforeLeave
useEffect를 활용하여 마우스 커서가 브라우저를 이탈했을 때 함수 동작
[useBeforeLeave](./src/pages/useBeforeLeave.jsx)

## usePreventLeave
Hook을 활용하진 않았지만 함수를 활용하여 브라우저를 끄려고 할 때 한 번더 물어보는 모달 생성
[usePreventLeave](./src/pages/usePreventLeave.jsx)

## useConfirm
Hook을 활용하진 않았지만 함수를 활용하여 중요한 작업 실행 전 한 번더 물어보는 (ex. 게시글 삭제...) 모달 생성
[useConfirm](./src/pages/useConfirm.jsx)

## useFadeIn
useRef와 useEffect를 사용하여 요소를 FadeIn 애니메이션을 적용
[useFadeIn](./src/pages/useFadeIn.jsx)

## useNetwork
useEffect를 활용하여 브라우저가 온라인일 때와 오프라인일 때를 감지하여 함수 실행
[useNetwork](./src/pages/useNetwork.jsx)

## useAxios
Axios를 활용하여 REST API 커스텀 훅 제작, useEffect와 함수형 프로그래밍에 집중
[useAxios](./src/pages/useAxios.jsx)

## useFullScreen
useRef를 활용하여 사진을 전체화면으로 키우고 빠져나가는 커스텀 훅 제작
[useFullScreen](./src/pages/useFullScreen.jsx)

## useNotification
웹 브라우저에 알림을 보낼 수 있는 커스텀 훅 제작
[useNotification](./src/pages/useNotification.jsx)

## useScroll
웹페이지에서 스크롤 양에 따라 다양한 커스텀 가능, useEffect 활용
[useScroll](./src/pages/useScroll.jsx)

# 강의를 들으며 커스텀 훅 제작 후기
우선 자주 쓰는 것들에 대해 커스텀 훅을 잘 만들어 놓으면 깔끔한 코드와 재사용성, 유지보수의 용이성까지 다 잡을 수 있다는 것을 몸소 깨닫게 해주었고, 강의를 보면서 만들었지만 공부하면서 자주 쓰일 것 같은 부분들은 직접 만들어보면서 감을 익혀야겠다는 생각이 들었다. 그래도 점점 깔끔한 코드란 무엇인가라는 개념에 대해 시야가 넓어지고 있는 느낌이라 너무 좋다.

