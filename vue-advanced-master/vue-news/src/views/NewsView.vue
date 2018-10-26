<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <li></li>

        </div>
    </div>
</template>

<script>
// <button v-on:click="fetchdata"></button>
// <button @click="fetchdata"></button>
import { fetchNews } from '../api/index.js'
export default {
    methods:{
        fetchData(){
            fetchNews()
            .then(({data}) => this.items = data)
            .then(function(data){

            })
            .then((data) => {

            })
            .then(data => {

            })
            .then(data => data)// 한줄로 줄인다 => return을 의미.
            .catch(error => console.log(error));


        }
    }
}
</script>

<style>

</style>
