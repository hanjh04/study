<template>
    <div>
        <p>{{repoContent}}</p>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters['repoContent']
    }
}
</script>

<style>

</style>
