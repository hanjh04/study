<template>
    <div>
        <ul>
            <li v-for="data in fetchedPosts" :key="data.idx">
                <router-link :to="'/posts/'+data.idx">
                    <b-card class="title" title="data.title">
                        {{data.idx}}, {{data.title}}
                        <p class="card-text">
                            {{data.content}}
                        </p>
                    </b-card>

                </router-link>
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
