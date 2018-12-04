<template>
    <div>
        <ul>
            <li v-for="data in fetchedPosts" :key="data.idx">
                <div class="title">
                    {{data.title}}
                </div>
                <div class="content">
                    {{data.content}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['fetchedPosts'])
    }
}
</script>

<style>

</style>
