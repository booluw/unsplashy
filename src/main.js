import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import './assets/css/styles.css'

Vue.config.productionTip = false

Vue.prototype.$http = Axios
const baseURL = 'https://api.unsplash.com/'
const access_key = 'Ghoe8iCIVAxXYDXtg4YVIArtzqRRjr_kD7Y7vDHUUCo'

Vue.prototype.$http.defaults.baseURL = baseURL
Vue.prototype.$http.defaults.headers.common.Authorization = `Client-ID ${access_key}`

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
