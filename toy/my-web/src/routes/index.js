import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../components/Welcome';
import NOTFOUND from '../components/NOTFOUND';
import GitRepoView from '../views/GitRepoView'
import PostsView from '../views/PostsView'
import About from '../components/About';
import store from '../store/index.js';
// import GitRepo from '../components/GitRepo'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Welcome
        },
        {
            path: '/posts',
            component: PostsView,
            name: 'postList',
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_POSTS')
                    .then(() => next())
                    .catch(() => console.log('fail'));
            },
            children: [{
                path: ':idx',
                component: PostsView,
                name: 'postContent',
                beforeEnter(routeTo, routeFrom, next) {
                    store.dispatch('FETCH_POSTCONTENT', routeTo.params.idx)
                    console.log('idx ', routeTo.params.idx)
                    next();
                }
            }]
        },
        {
            path: '/about',
            component: About
        }, {
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