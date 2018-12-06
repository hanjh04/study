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
        // var data = fetchPosts(idx);
        var isContent = false;
        // context.commit('SET_POSTS', data);
        // context.commit('SET_ISCONTENT', isContent)
        // return data
        var rtnArr = []
        return fetchPosts()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    var tmpObj = doc.data()
                    tmpObj.id = doc.id
                    rtnArr.push(tmpObj)
                })
                context.commit('SET_POSTS', rtnArr)
                context.commit('SET_ISCONTENT', isContent)
                return rtnArr

            })
            // .then(response => {
            //     context.commit('SET_POSTS', response.data);
            //     context.commit('SET_ISCONTENT', isContent)
            //     return response;
            // })
            .catch(error => console.log(error))
    },
    FETCH_POSTCONTENT(context, idx) {
        var isContent = true;
        console.log('isContent', isContent)
        context.commit('SET_ISCONTENT', isContent);
    }
}