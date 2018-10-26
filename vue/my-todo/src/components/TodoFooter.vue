<template>
  <div>
    <!-- <button @click="">Clear All</button> -->
    <button v-on:click="removeAllItems">Clear All</button>
  </div>
</template>

<script>
import { eventBus } from '../utils/eventBus.js';

export default {
    methods:{
        removeAllItems: function(){
            this.todoItems = [];
            // localStorage.clear();
            //이전
            // this.$emit('deleteAll');
            //최신
            // this.$emit('delete:all');
            eventBus.$emit('delete:all');


        }
    }
}
</script>

<style>

</style>
