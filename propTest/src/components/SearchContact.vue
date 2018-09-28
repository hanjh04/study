<template>
    <div>
        <search-component>
            <div>
                <search-component placeholder="두 글자 이상 입력 후 엔터!" v-on:search="searchEvent"></search-component>
                <contactlist-component v-bind:contacts="contactlist"></contactlist-component>
                <div v-show="isProcessing === true">조회중</div>
            </div>
        </search-component>
    </div>
</template>
<script>
export default{
    data: function() {
        return {
            contactlist: [],
            isProcessing: false
        }
    },
    methods: {
        searchEvent: function(name) {
            if (name == '') {
                this.contactlist = [];
            } else {
                this.fetchContacts(name);
            }
        },
        fetchContacts: _.debounce(function(name) {
            tihs.contactList = [];
            this.isProcessing = true;
            var url = "http://sample.bmaster.kro.kr/contacts_long/search/" + name;
            var vm = this;
            fetch(url).then(function(response) {
                            return response.json()
                        }).then(function(json) {
                            vm.contactlist = json;
                            vm.isProcessing = false;
                        }).catch(function(ex) {
                            console.log('parsing failed', ex);
                            vm.contactlist = [];
                            vm.isProcessing = false;
                        })
        }, 300)
    }
}
</script>