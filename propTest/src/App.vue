<template>
  <div id="app">
    <search-contact></search-contact>
    <search-component placeholder="두 글자 이상 입력 후 엔터!" v-on:search="searchEvent"></search-component>
    <contact-list v-bind:contacts="contactlist"></contact-list>
  </div>
</template>

<script>
import SearchContact from "./components/SearchContact.vue"
import Search from "./components/Search.vue"
import ContactList from "./components/ContactList.vue"

export default {
    name: "App",
    components: {
        'search-contact':SearchContact,
        'search-component':Search,
        'contact-list':ContactList
    }
}
</script>

<style>

</style>
