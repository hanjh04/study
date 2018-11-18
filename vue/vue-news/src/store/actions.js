import { fetchNews, fetchJobs } from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    return fetchNews()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch(error => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    return fetchJobs()
      .then(response => {
        commit('SET_JOBS', response.data);
        return response;
      })
      .catch(error => console.log(error));
  }
}