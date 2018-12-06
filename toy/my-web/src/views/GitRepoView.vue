<template>
    <ul v-if="isDirectory = true">
        <GitRepoDirectory />
    </ul>
    <ul v-else>
        <GitRepoContent/>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import GitRepoContent from '../components/GitRepoContent';
import GitRepoDirectory from '../components/GitRepoDirectory';
export default {
    data() {
        return {
            isDirectory:true
        }
    },
    computed: {
    ...mapGetters([
        'fetchedGitRepoData'])
    },
    components:{
        GitRepoContent,
        GitRepoDirectory
    },
        beforeCreate() {
        console.log('beforeCreate')
    },
    created(){
        console.log('aaa')
        // s = d.createElement('script'),
        // s.setAttribute('data-timestamp', +new Date());
        // (d.head || d.body).appendChild(s);
    }
}
</script>

<style>
</style>