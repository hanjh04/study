# bug_2
## 현상
* child component에서 parent component로 이동(뒤로가기 등..) 했을 때 데이터 갱신 안됨.
## 원인 분석
* vue-router 훅 이해
## 해결방법
* 컴포넌트.vue 파일에 `beforeRouteUpdate` 훅에 로직 추가