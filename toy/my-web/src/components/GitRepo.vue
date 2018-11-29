<template>
    <ul>
        <li v-for="data in fetchedGitRepoData" :key="data.path">
            <router-link :to="uri+'/'+data.name">{{data.name}}</router-link>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            uri:window.location.pathname
        }
    },
    mounted(){
        console.log('here~')
        this.$store.dispatch('FETCH_GITREPO', window.location.pathname.replace('/git', ''))
        .then(() => console.log(this.$store.state.repoData))
        .catch(() => console.log('fail'));
    },
    computed: {
    ...mapGetters([
        'fetchedGitRepoData'])
    },
    methods:{
        print(){
            console.log('aaaaaaaa')
        }
    }
}
</script>

<style>

</style>
