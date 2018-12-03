import { fetchGitRepo, fetchGitContent, fetchPosts } from '../api/index'

export default {
    FETCH_GITREPO(context, path) {
        return fetchGitRepo(path)
            .then(response => {
                context.commit('SET_GITREPO', response.data);
                return response;
            })
            .catch(error => console.log(error))
    },
    FETCH_GITCONTENT(context, path) {
        return fetchGitContent(path)
            .then(response => {
                context.commit('SET_GITCONTENT', response.data);
                return response;
            })
            .catch(error => console.log(error))
    },
    FETCH_POSTS(context) {
        return fetchPosts()
            .then(response => {
                context.commit('SET_POSTS', response.data);
                return response;
            })
            .catch(error => console.log(error))
    }
}