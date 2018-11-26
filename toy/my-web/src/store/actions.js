import { fetchGitRepo } from '../api/index'

export default {
    FETCH_GITREPO(context) {
        return fetchGitRepo()
            .then(response => {
                context.commit('SET_GITREPO', response.data);
                return response;
            })
            .catch(error => console.log(error))
    }
}