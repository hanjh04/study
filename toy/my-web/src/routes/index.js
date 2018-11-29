import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import GitRepo from '../components/GitRepo'
import store from '../store/index.js';

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
            component: GitRepo,
        },
        {
            path: '/git/:foo+',
            name: 'git',
            component: GitRepo
        },
    ]
})