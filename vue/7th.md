#

* 3. 대 부터 webpack-config가 보여지지 않음.
* npm run dev => npm run serve
* `.$mount('#app')` => el 이 없을 때.(instance를 화면에 붙여주는 역할을 함)
* 설계 시 화면단위로 설계하면 됨.
    * router 설계(url 설계)


## 작업
* index.js 생성
* axios, vuex 설치 `npm i axios vuex`
* vue-router 설치 `npm i vue-router`
```
-- cli 3.0 부터
vue create vue-news
-- default 설정
```



// export default <=> export ? 
// 속성 새로 추가
// 배열의 접근 => vue에서 detection 못함.
* 아래 세개는 같은 이미
$.ajax()
axios.get()
fetch()





1. default는 한 파일에서 1개만 export 된다.
2. default 로 export 하면 import에서는 `{}` 쓸 수 없다.
3. console에서 vue 객체를 접근하기 위해서 `window.__VUE_DEVTOOLS_INSTANCE_MAP__.get({key})`를 사용할 수 있다.