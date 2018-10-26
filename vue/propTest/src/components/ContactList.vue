<template>
    <div>
        <table id="list">
            <thead>
                <tr>
                    <th>번호</th><th>이름</th><th>전화번호</th><th>주소</th>
                </tr>
            </thead>
            <tbody id="contacts">
                <tr v-for="contact in contacts" :key="contact.no">
                    <td>{{contact.no}}</td>
                    <td>{{contact.name}}</td>
                    <td>{{contact.tel}}</td>
                    <td>{{contact.address}}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script>
import {eventBus} from "../utils/eventBus.js"

export default{
    data:function(){
        return {contacts:{}}; 
    },
    created: function() {
        var vm = this;
        eventBus.$on('setContactList', function(contact){
            vm.setList(contact)
        })
    },
    methods:{
        setList: function (contactList){
            this.contacts = contactList;
        }
    }

}
</script>