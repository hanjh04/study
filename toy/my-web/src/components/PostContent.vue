<template>
    <div v-html="toHtml(fetchedPosts.content)">
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
var md = require('markdown-it')();
const fs = require('fs');
// console.log(fs)
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
