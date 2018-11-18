export default {
    created() {
        let flag = this.$route.name === 'news' ? 'FETCH_NEWS' : 'FETCH_JOBS';
        this.$store.dispatch(flag)
            .then((response) => {
                console.log(response);
            })
            .catch();
    }
}