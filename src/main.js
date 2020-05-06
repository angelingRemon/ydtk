import Vue from 'vue'
import App from './App.vue'

/* vuex状态管理 */
import store from './vuex/store'

/* 路由 */
import router from '@/router/router' // 引用路由配置文件
/* vuex-router-sync 将router放入store进行管理 */
import { sync } from 'vuex-router-sync'
sync(store, router)
import api from './config/api' //真实接口配置
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* 全局 mixins */
import mixins from './mixins'
Vue.mixin(mixins)

/* 过滤器 */
import vueFilter from 'vue-filter'
Vue.use(vueFilter)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,  
  render: h => h(App)
}).$mount('#app')
