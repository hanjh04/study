import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import GitRepo from '../components/GitRepo'

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
            children: [{
                path: ':p',
                name: 'path',
                component: 'GitRepo'
            }]
        },
        {
            path: '/git/:folderName',
            component: GitRepo
        }
    ]
})