<template>
  <header>
    <h1 v-text="appTitle"></h1>
    <!-- <h1>{{appTitle}}</h1> -->
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      appTitle: 'My TODO'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>