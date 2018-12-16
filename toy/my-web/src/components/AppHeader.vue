<template>
  <header class="default-header border-bottom shadow-sm">
    <AppNav/>
  </header>
</template>

<script>
import AppNav from './AppNav'
export default {
  components:{
    AppNav
  }
}
</script>

<style>
.default-header {
    background-color: #fff;
    width: 100% !important;
    height:60px;
    top: 0px;
}
</style>
