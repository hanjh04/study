export default {
    SET_GITREPO(state, repoData) {
        state.repoData = repoData
    },
    SET_GITCONTENT(state, repoContent) {
        state.repoContent = repoContent;
    },
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_ISCONTENT(state, isContent) {
        state.isContent = isContent;
    }
}