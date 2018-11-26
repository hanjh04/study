<template>
    <div>{{gitRepoList}}</div>
</template>

<script>
export default {
    computed:{
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
