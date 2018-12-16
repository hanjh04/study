<template>
  <div id="app">
    <app-header/>
    <main role="main" class="container" style="margin:10px, 20px, 30px, 40px">
      <router-view/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default{
  name:"App",
  components:{
    AppHeader,
    AppFooter
  },
}

</script>

<style>
</style>
