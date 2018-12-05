<template>
    <div v-html="toHtml(fetchedPosts.content)">
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
var md = require('markdown-it')();
// console.log(markdown)
export default {
    computed:{
        ...mapGetters(['fetchedPosts'])
    },
    methods:{
        toHtml(markdownText){
            console.log(md.render(markdownText))
            return md.render(markdownText)
        }
    }
}
</script>

<style>

</style>
