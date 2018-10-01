<template>
    <div>
        <p>
            이름 : <input type="text" v-model.trim="name" :placeholder="placeholder" @keyup.enter="keyupEvent"/>
        </p>
        <div v-show="isProcessing === true">조회중</div>
    </div>
</template>
<script>
import {eventBus} from "../utils/eventBus.js"

export default{
    props: ['placeholder'],
    data() {
        return {
            name:'',
            // contactlist: [],
            isProcessing: false
        }
    },
    methods: {
        keyupEvent: function(e) {
            var val = e.target.value;
            if (val.length >= 2) {
                this.searchEvent(val);
            } else {
                this.searchEvent('');
            }
        },
        searchEvent(name) {
            if (name == '') {
                // this.contactlist = [];
            } else {
                this.fetchContacts(name);
            }
        },
        fetchContacts: _.debounce(function(name) {
            // this.contactList = [];
            var vm = this;
            var url = "http://sample.bmaster.kro.kr/contacts_long/search/" + name;

            vm.isProcessing = true;

            fetch(url).then(function(response) {
                            return response.json()
                        }).then(function(json) {
                            eventBus.$emit('setContactList', json)
                            vm.isProcessing = false;
                        }).catch(function(ex) {
                            console.log('parsing failed', ex);
                            vm.isProcessing = false;
                        })
        }, 300)
    }
}
</script>