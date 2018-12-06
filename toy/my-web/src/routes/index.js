import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import NOTFOUND from '../components/NOTFOUND';
// import GitRepo from '../components/GitRepo'
import GitRepoView from '../views/GitRepoView'
import PostsView from '../views/PostsView'
import store from '../store/index.js';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: HelloWorld
        },
        {
            path: '/posts',
            component: PostsView,
            name: 'postList',
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_POSTS');
                next();
                // dummy-data 를 사용하고 있기 때문에 주석처리. - 12.04
                // store.dispatch('FETCH_POSTS');
                // .then(() => next())
                // .catch(() => console.log('fail'));
            },
            children: [{
                path: ':idx',
                component: PostsView,
                name: 'postContent',
                beforeEnter(routeTo, routeFrom, next) {
                    store.dispatch('FETCH_POSTCONTENT', routeTo.params.idx)
                    next();
                }
            }]
        },
        {
            path: '/git',
            component: GitRepoView,
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_GITREPO')
                    .then(() => next())
                    .catch(() => console.log('fail'));
            }
        },
        {
            path: '/git/:foo*',
            component: GitRepoView,
            beforeEnter(routeTo, routeFrom, next) {
                var fetchAction = '';
                var path = '';
                if (routeTo.query.type === 'd') {
                    fetchAction = 'FETCH_GITREPO';
                } else {
                    fetchAction = 'FETCH_GITCONTENT';
                }
                path = routeTo.path.replace('/git', '')
                store.dispatch(fetchAction, path)
                    .then(() => next())
                    .catch(() => console.log('fail'));
            }
        },
        {
            path: '*',
            component: NOTFOUND

        }
    ]
})