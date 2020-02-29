import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  //   actions: {
  //     changeCity (cts, city) { // cts指上下文
  //       cts.commit('changeCity', city)
  //     }
  //   },
  mutations
})
