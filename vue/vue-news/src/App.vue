<template>
  <div id="app">
    <progress-bar :loading="loading"></progress-bar>
    <tool-bar></tool-bar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue';
import ToolBar from './components/ToolBar.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ProgressBar,
    ToolBar,
  },
  data() {
    return {
      loading: false
    }
  },
  created() {
    bus.$on('on:progress', () => this.loading = true);
    bus.$on('off:progress', () => this.loading = false);
  }
}
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Vue Router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
