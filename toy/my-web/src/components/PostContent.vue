<template>
    <div>
        {{idx}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
var md = require('markdown-it')();
const fs = require('fs');
// console.log(fs)
// console.log(markdown)
export default {
    data(){
        return {
            idx:"0"
        }
    },
    created(){
        this.idx = this.$route.params.idx
    },
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
