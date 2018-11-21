# vue-news

## 사용 기술
* vue-cli 3.0
* vuex
* vue-router
* axios

## Project Setup
### Project Create
```
vue create vue-news
cd vue-news
npm i vuex vue-router axios
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## TODO LIST and Details
### TODO LIST

idx|기능|내용|완료
-|-|-|:-:
1|router|프로젝트 생성 및 라우터 설정|O
2|store|스토어 설치, 초기화 및 vuex 관련 파일 생성|
3|api|api 파일 생성 및 액시오스 설치<br>각 페이지뷰에서 api호출 및 결과 확인<br>ToolBar(헤더)컴포넌트 생성|
4|page|News, Ask, Jobs 페이지에서 api 호출하여 리스트 표시|
5|router-params|라우터 params를 이용하여 Item, User 페이지 구현|
6|transitions|라우터에 트랜지션 효과<br>라우터에 redirect 속성 + views 폴더의 페이지 컴포넌트를 로딩하기 위한 index.js 파일 제작|
7|markup|마크업 구현|
8|refactoring-profile|UserProfile 컴포넌트화|
9|refactoring-hoc|HOC를 이용한 ListView 컴포넌트 생성 및 News, Ask, Jobs 페이지 재활용|
10|refactoring‑fetching|beforeEnter 속성을 활용한 페이지 데이터 요청 개선|
11|sticky‑header|scroll 이벤트를 이용한 헤더 컴포넌트 고정 기능 구현|
12|spinner|스피너 라이브러리를 설치하여 대체해보기 ‑ Spinner 컴포넌트 모듈화 및 이벤트 버스를 이용한 구현|
13|etc|api 파일의 axios 인스턴스 정리

### Details
1. router
    1. 설치
        * `npm i vue-router`
    2. 폴더 구조
        ```
        └─src
            └─routes
                └─`index.js`
        ```
    3. 파일 내용
        * 화면 구성에 필요한 `view` import
        * `Vue.use(VueRouter)`로 router 등록
        * URI 정의, 각 URI에 보여줄 `view` 등록

2. store
    1. 설치
        * `npm i vuex`
    2. 폴더 구조
        ```
        └─src
            └─store
                ├─`index.js`
                ├─`getters.js`
                ├─`actions.js`
                ├─`mutations.js`
                └─`state.js`
        ```   
    3. 파일 내용
        * index.js
            * vuex 진입점.
            * `getters.js`, `mutaions.js`, `actions.js`, `state.js` 파일 import
            * getters, mutations, actions, state 를 store 객체의 인자로 넘김.
        * state.js
            * 관리하는 데이터.
            * `news`, `ask`, `jobs`, `user`, `item`
        * mutations.js
            * 상태변경
            * synchronous 작업
            * `set` 작업
        * actions.js
            * 외부 api 호출
            * asynchronous 작업
            * `fetch` 작업
            * Instead of mutating the state, actions `commit` mutations.
            * Actions are triggered with the store.dispatch method:
                * `store.dispatch('increment')`
        * getters.js
            *
3. api   
    1. 설치
        * `npm i axios`
    2. 폴더구조
        ```
        └─src
            └─api
                └─`index.js`
        ```
    3. 파일 내용
        * api 정의



        



## File Structure and Details
### File Structure
```tree
vue-news
├─`README.md`
├─`package.json`
├─`package-lock.json`
├─`babel.config.js`
├─`App.vue`
├─`main.js`
├─public
└─src
    ├─api
    │   └─`index.js`
    ├─assets
    │   └─`logo.png`
    ├─components
    │   └─`ToolBar.vue`
    ├─routes
    │   └─`index.js`
    ├─store
    │   ├─`actions.js`
    │   ├─`getters.js`
    │   ├─`index.js`
    │   ├─`mutations.js`
    │   └─`state.js`
    └─views
        ├─`AskView.vue`
        ├─`ItemView.vue`
        ├─`JobsView.vue`
        ├─`NewsView.vue`
        └─`UserView.vue`
```

### Details
* `main.js`
    * 프로젝트의 진입점.
    * `Vue`를 로드 하고 `App.vue`를 로드하고 앱을 초기화 함.