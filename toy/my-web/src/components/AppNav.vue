<template>
    <!-- <div id="nav">
      <nav class="navbar navbar-light bg-light">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/posts">Post</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger thumbnail" href="#page-top">
          <img src="../assets/thumbnail.png" style="height:40px;width:40px"/>
          Lingi's Blog
        </a>
        <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars">
            ::before
          </i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/posts">Posts</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
