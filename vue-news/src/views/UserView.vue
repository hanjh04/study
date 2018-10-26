<template>
    <div>
        
    </div>
</template>

<script>
export default {
  created() {
    fetchUser('davideast')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
