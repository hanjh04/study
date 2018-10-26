<template>
    <div>
        <ul>
            <!-- <li v-for="item in items" :key="item.id" class="post">
                <a v-bind:href="item.url">{{item.title}}</a>
                <small>{{item.user}}</small>
                {{item.url}}
            </li> -->
            <li v-for="item in this.$store.state.news" :key="item.id" class="post">
                <a v-bind:href="item.url">{{item.title}}</a>
                <small>{{item.user}}</small>
                {{item.url}}
            </li>
        </ul>
    </div>
</template>

<script>
// <button v-on:click="fetchdata"></button>
// <button @click="fetchdata"></button>
import { fetchNews } from '../api/index.js'
export default {
    // methods:{
    //     fetchData(){
    //         this.$store.dispatch('FETCH_NEWS')
    //         // fetchNews()
    //         // .then(({data}) => this.items = data)
    //         // .then(function(data){

    //         // })
    //         // .then((data) => {

    //         // })
    //         // .then(data => {

    //         // })
    //         // .then(data => data)// 한줄로 줄인다 => return을 의미.
    //         // .catch(error => console.log(error));


    //     }
    // },
    created() {
        this.$store.dispatch('FETCH_NEWS')
        .then(() => console.log('success'))
        .catch(() => console.log('fail'));
    }
}
</script>

<style>

</style>
