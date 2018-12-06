<template>
    <div>
        <ul>
            <li v-for="data in fetchedPosts" :key="data.idx">
                <router-link :to="'/posts/'+data.idx">
                    <div class="title">
                        {{data.idx}}, {{data.title}}
                    </div>
                    <div class="content">
                        {{data.content}}
                    </div>
                </router-link>
            </li>
        </ul>
        <router-view/>
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
