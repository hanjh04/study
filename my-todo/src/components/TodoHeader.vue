<template>
  <header>
    <h1>{{ appTitle }}</h1>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      appTitle: 'Vue TODO'
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