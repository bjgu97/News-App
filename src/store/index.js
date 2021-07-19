import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        }
    },
    actions: {
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
})