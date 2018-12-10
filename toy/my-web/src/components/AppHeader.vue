<template>
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>
              <!-- <a href="/" class="logo"><img src="../assets/thumbnail.png" style="height:50px;width:50px"/></a> -->
              Home
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AppNav from './AppNav'
export default {
  components:{
    AppNav
  }
}
</script>

<style>

</style>
