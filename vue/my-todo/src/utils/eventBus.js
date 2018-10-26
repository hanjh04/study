// NPM으로 설치한 뷰 랄이브러리르 NODE_MODULES로부터 로딩

import Vue from 'vue';

export var eventBus = new Vue();


// TodoFooter
// eventBus.$emit('이벤트 이름', 인자);
// App
// eventBus.$on('이벤트 이름', 인자)