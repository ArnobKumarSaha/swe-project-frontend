import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    currentUser: null
  },
  mutations: {
    setLog (state) {
      state.isLoggedIn = true
    },
    unsetLog (state) {
      state.isLoggedIn = false
    },
    setUser (state, user) {
      state.currentUser = user
    },
    unsetUser (state) {
      state.currentUser = null
    }
  }
})

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default store