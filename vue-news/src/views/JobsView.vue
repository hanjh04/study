<template>
    <div>
        
    </div>
</template>

<script>
import {fetchJobs} from '../api/index.js';

export default {
    // created(){
    //     fetchJobs()
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    // }
    created() {
        this.$store.dispatch('FETCH_JOBS')
        .then(() => console.log('success'))
        .catch(() => console.log('fail'));
    }
}
</script>

<style>

</style>
