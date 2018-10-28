import Vue from 'vue'
import App from './App.vue'
import { store } from "./store/store";

Vue.config.productionTip = false

var v123456 = new Vue({
    render: h => h(App),
    store
}).$mount('#app')
console.log(this)
console.log(v123456)