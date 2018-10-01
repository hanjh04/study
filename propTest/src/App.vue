<template>
  <div id="app">
    <SearchContact></SearchContact>
    <SearchComponent placeholder="두 글자 이상 입력 후 엔터!" v-on:search="searchEvent"></SearchComponent>
    <ContactList v-bind:contacts="contactlist"></ContactList>
  </div>
</template>

<script>
import SearchContact from "./components/SearchContact.vue"
import Search from "./components/Search.vue"
import ContactList from "./components/ContactList.vue"
Search.methods.searCh
export default {
    name: "App",
    components: {
        'SearchContact':SearchContact,
        'SearchComponent':Search,
        'ContactList':ContactList
    },
    methods:{
      searchEvent: function(name) {
            if (name == '') {
                this.contactlist = [];
            } else {
                this.fetchContacts(name);
            }
        },
    }
}
</script>

<style>

</style>
