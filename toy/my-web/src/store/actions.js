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
    FETCH_POSTS(context, idx) {
        var data = fetchPosts(idx);
        var isContent = idx ? true : false;
        context.commit('SET_POSTS', data);
        context.commit('SET_ISCONTENT', isContent)
        return data
            // return fetchPosts()
            // FAKE-API 를 사용하고 있기 때문에 주석처리. - 12.04
            // .then(response => {
            //     context.commit('SET_POSTS', response.data);
            //     context.commit('SET_ISCONTENT', isContent)
            //     return response;
            // })
            // .catch(error => console.log(error))
    }
}