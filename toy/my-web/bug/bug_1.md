# bug_1
## 현상
* router를 사용했을 때 특정 컴포넌트(GitRepo) 가 reload가 되지 않음.
## 원인 분석
* This is expected behaviour as Vue is trying to be optimal and reuse existing components. 
## 해결방법
* The behaviour you want to achieve used to be solved with a setting called canReuse, but that has been deprecated. The current recommended solution is to set a unique `:key` property on your `<router-view>`
* 출처 : https://stackoverflow.com/questions/42603583/vue-js-same-component-with-different-routes/42610919