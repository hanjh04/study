<template>
    <p>
        이름 : <input type="text" v-model.trim="name" :placeholder="placeholder" @keyup.enter="keyupEvent"/>
    </p>
</template>
<script type="text/javascript">
export default{
    props: ['placeholder'],
    data: function() {
        return {
            name: ''
        };
    },
    methods: {
        keyupEvent: function(e) {
            var val = e.target.value;
            if (val.length >= 2) {
                this.$emit('search', val);
            } else {
                this.$emit('search', '');
            }
        },
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