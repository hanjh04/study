<template>
  <div>
    <!-- <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter> -->
    <search-contact></search-contact>
  </div>
</template>


<script>
Vue.config.devtools = true;
import SearchContact from "./components/SearchContact.vue"    


export default {
    name: "App",
    components: {
        SearchContact,
    }
}
</script>

<style>

</style>
