<template>
  <div id="app">
    <router-view></router-view>
    <tool-bar></tool-bar>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components:{
    ToolBar,
  }
}
</script>

<style>
</style>