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
