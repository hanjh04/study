<template>
    <div id="nav">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/posts">Post</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
div #nav nav ul{
  position:relative;margin:0px; padding:0px;
}
div #nav nav ul li{
  padding:10px;
  display:inline;
}
</style>
