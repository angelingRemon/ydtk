// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // 组合各个模块
  modules: {
    // appInit,
    // userInfo,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
