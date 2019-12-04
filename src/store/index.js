import Vuex from 'vuex'
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/', // should be set based on env
});

const storeFactory = (state) => {
  return new Vuex.Store({
    state: () => ({
      author: {}
    }),
    getters: {
      author: state => state.author
    },
    mutations: {
      MUTATE_AUTHOR (state, val) {
        state.author = val
      }
    },
    actions: {
      fetchAuthor ({commit}) {
        // return null
        return axios.get('http://localhost:3000/authors').then(resp => {
          commit('MUTATE_AUTHOR', resp.data)
        }).catch(err => {
          console.log('axios error: ', err)
        })
      }
    },
    modules: []
  });
};

export default storeFactory;
