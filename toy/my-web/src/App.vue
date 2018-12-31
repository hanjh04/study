<template>
  <div id="app">
    <app-nav/>
    <app-header/>
    <main role="main" class="container-fluid container flex-grow-1 mt-4">
      <router-view/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default{
  name:"App",
  components:{
    AppNav,
    AppHeader,
    AppFooter
  },
}

</script>

<style>
div#app{
  min-height: 100vh;
}
main{
  min-height:calc(100vh - 120px);
}
footer{
  height: 120px
}
</style>
