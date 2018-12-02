import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';
// import GitRepo from '../components/GitRepo'
import GitRepoView from '../views/GitRepoView'
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
            component: GitRepoView,
            query: { type: 'd' },
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_GITREPO')
                    .then(() => next())
                    .catch(() => console.log('fail'));
            }
        },
        {
            path: '/git/:foo+/f',
            name: 'git',
            component: GitRepoView,
            // props: true,
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_GITCONTENT', window.location.pathname.replace('/git', '').replace('/f', ''))
                    .then(() => next())
                    .catch(() => console.log('fail'));
            }
        },
        {
            path: '/git/:foo+/d',
            name: 'git',
            component: GitRepoView,
            query: { type: 'd' },
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_GITREPO', window.location.pathname.replace('/git', ''))
                    .then(() => next())
                    .catch(() => console.log('fail'));
            }
        },
    ]
})