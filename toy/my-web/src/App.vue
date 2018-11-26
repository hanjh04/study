<template>
  <div id="app">
    <app-header/>
    <app-nav/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import AppFooter from './components/AppFooter'

export default{
  name:"App",
  components:{
    AppHeader,
    AppNav,
    AppFooter
  }

}

</script>

<style>
</style>
