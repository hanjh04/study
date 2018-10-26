import { fetchNews } from '../api/index'

export default {
    FETCH_NEWS({ commit }) {
        fetchNews()
            .then(response => {
                response.data;
                // context.commit('뮤테이션명', response.data)
                commit('SET_NEWS', response.data)
            })
            .catch((error) => {
                error
                // console.log(error)
            })
    }
}