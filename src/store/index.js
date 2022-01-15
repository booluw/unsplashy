import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latest: []
  },
  mutations: {
    SAVE_LATEST(state, val) {
      state.latest = val
    }
  },
  actions: {
    appInit({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'search/photos?query=africa',method: 'GET'}).then( response => {
          resolve(response.data.results)
        }).catch( error => {
          console.log(error)
        })
      })
    },
    searchIt({ commit }, params) {
      return new Promise((resolve, reject) => {
        axios({ url: `search/photos?query=${ params }`,method: 'GET'}).then( response => {
          commit('SAVE_LATEST', response.data.results)
          resolve(response.data.results)
        }).catch( error => {
          console.log(error)
        })
      })
    }
  }
})
