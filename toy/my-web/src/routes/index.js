import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: HelloWorld
        },
        {
            path: '/git',
            name: 'git',
            //component: ,
        }
    ]
})