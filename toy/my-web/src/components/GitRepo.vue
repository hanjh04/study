<template>
    <!-- <div>{{gitRepoList}}</div> -->
    <ul>
        <li v-for="data in this.$store.state.repoData" :key="data.path">
            {{data.path}}
            {{data.path}}
        </li>

    </ul>
</template>

<script>
export default {
    created:{
        gitRepoList(){
            this.$store.dispatch('FETCH_GITREPO')
            .then(() => console.log(this.$store.state.repoData))
            .catch(() => console.log('fail'));
        }
    }
}
</script>

<style>

</style>
