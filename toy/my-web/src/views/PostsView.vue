<template>
    <div>
        <div>
            <component :is="isContent ? 'PostContent' : 'PostList'"></component>
        </div>
        <div v-if="isContent == true">
            <Comment/>
        </div>
    </div>
</template>

<script>
import store from '../store/index.js';
import { mapGetters } from 'vuex';
import PostList from '../components/PostList';
import PostContent from '../components/PostContent';
import Comment from '../components/Comment';

export default {
    data() {
        return{

        }
    },  
    components:{
        PostList,
        PostContent,
        Comment
    },
    computed:{
        ...mapGetters(['fetchedPosts', 'isContent'])
    },
    beforeRouteUpdate:(to, from, next)=>{
        console.log('postsview => beforeRouteUpdate')
        let routeToParent = to.matched.every((item, idx, array)=>{
            if(from.matched[idx] === undefined || from.matched[idx].path === undefined) return false;
            return from.matched[idx].path === item.path
        })
        if(routeToParent){
            store.dispatch('FETCH_POSTS');
            // store.dispatch('FETCH_POSTS');
            // .then(() => next())
            // .catch(() => console.log('fail'));
        }
        next();
    }

}
</script>

<style>

</style>
