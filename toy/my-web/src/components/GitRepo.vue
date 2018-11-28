<template>
    <ul>
        <li v-for="data in this.$store.state.repoData" :key="data.path">
            <!-- <li v-if="data.type==file"> {{data.path}}</li> -->
            <!-- <a v-if="data.type=='file'" @click="console.log('abcd')">{{data.path}}</a>
            <a v-else>{{data.path}}</a> -->
            <router-link :to="{name:'path', params:{p:data.path}}">{{data.path}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            uri:window.location.pathname
        }
    },
    created(){
        this.$store.dispatch('FETCH_GITREPO')
        .then(() => console.log(this.$store.state.repoData))
        .catch(() => console.log('fail'));
    },
    method:{
        print(){
            console.log('abcd');
        }
    }
}
</script>

<style>

</style>
