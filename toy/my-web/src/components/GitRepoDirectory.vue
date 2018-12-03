<template>
    <div>
        <li v-for="data in fetchedGitRepoData" :key="data.path" v-bind:type="data.type">
            <router-link v-if="data.type === 'dir'" :to="uri+'/'+data.name+'?type=d'" >{{data.name}}</router-link>
            <router-link v-else :to="uri+'/'+data.name+'?type=f'">{{data.name}}</router-link>
        </li>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
            uri:window.location.pathname,
        }
    },
    computed:{
        ...mapGetters([
            'fetchedGitRepoData'])
    },
    methods:{
        routeToDirectory(){

        },
        routeToContent(){
            
        }
    }
}

</script>

<style>

</style>
