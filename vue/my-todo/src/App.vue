<template>
  <div>
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    // clearAllTodoItems: function() {
    //   localStorage.clear(); 
    //   this.todoItems = [];
    // }
  },
    // 이벤트 버스 수신 로직
    // App 컴포넌트 38번
    // var vm = this; // 이 this는 컴포넌트(38번)를 가리키고
    // eventBus.$on('delete:all', function() {
    //   // this는 이벤트 버스의 컴포넌트 (40번)
    //   vm.clearAllTodoItems();
    // });
};
</script>
  
<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>