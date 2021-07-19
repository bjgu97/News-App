import { fetchNewsList, fetchJobsList, fetchAskList} from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response);
                // SET_NEWWS 실행할 때 response.data 데이터 넘겨준다. 
                context.commit('SET_NEWS', response.data); // 이걸로 mutation에 데이터 넘긴다. 
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_JOBS({ commit }) {
        fetchJobsList()
            // .then(response => context.commit('SET_JOBS', response.data))
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => console.log(error));
    },

    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(error => 
                console.log(error));
    },
}