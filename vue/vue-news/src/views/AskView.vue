<template>
    <div>

    </div>
</template>

<script>
import {fetchAsk} from '../api/index.js';
export default {
    created(){
        this.$store.dispatch('FETCH_ASK')
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
}
</script>

<style>
</style>