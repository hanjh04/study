<template>
    <div>
        
    </div>
</template>

<script>
import {fetchJobs} from '../api/index.js';

export default {
    created(){
        fetchJobs()
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
}
</script>

<style>

</style>
