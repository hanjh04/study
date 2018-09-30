<template>
    <div>
        <div v-show="isProcessing === true">조회중</div>
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