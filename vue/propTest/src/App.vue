<template>
  <div id="app">
    <!-- <SearchComponent ></SearchComponent> -->
    <!-- <ContactList v-bind:contacts="contactlist"></ContactList> -->
    <SearchContact placeholder="두 글자 이상 입력 후 엔터!"></SearchContact>
    <ContactList></ContactList>
  </div>
</template>

<script>
import SearchContact from "./components/SearchContact.vue"
import ContactList from "./components/ContactList.vue"

export default {
    name: "App",
    components: {
        'SearchContact':SearchContact,
        'ContactList':ContactList
    },
    methods:{

    }
}
</script>

<style>

</style>
