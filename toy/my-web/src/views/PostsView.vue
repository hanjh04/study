<template>
<PostList/>
</template>

<script>
import { mapGetters } from 'vuex';
import PostList from '../components/PostList';
import PostContent from '../components/PostContent';

export default {
    data() {
        return{

        }
    },  
    components:{
        PostList,
        PostContent
    },
    computed:{
        ...mapGetters(['fetchedPosts'])
    }
}
</script>

<style>

</style>
