<template>
  <div class="inputBox shadow">
    <input v-model="todoItem" type="text">
    <span class="addContainer" v-on:click="addItem">
      <i class="addBtn fas fa-plus"></i>
    </span>

    <app-modal v-if="showModal" @close="showModal = false">
      <div slot="header">header</div>
      <div slot="body">body</div>
      <div slot="footer">footer</div>
    </app-modal>
  </div>
</template>

<script>
import AppModal from './common/AppModal.vue';

export default {
  components: {
    'app-modal': AppModal
  },
  data: function() {
    return {
      todoItem: '',
      showModal: false
    }
 },
 methods: {
   addItem: function() {
     if (this.todoItem.length > 0) {
      var value = this.todoItem; 
      // this.$emit('send', value);
      this.$store.commit('addTodoItem', value);
      this.todoItem = '';
     } else {
      this.showModal = true;
     }
   }
 }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
