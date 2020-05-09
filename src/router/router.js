import Vue from 'vue'
import VueRouter from 'vue-router' //引用路由
Vue.use(VueRouter) //调用

/**
 * 引入路由表
 */
import code from './modules/code.js' // 二维码海报
import detail from './modules/detail.js' // 详情页 
/**
 *  配置路由
 */
const routes = [
  //顶层路由
  {
    path: '/',
    component: resolve => require(['@/views/home/index'], resolve),
    redirect: "/hszz",
    meta: {
      title: '益点推客'
    },
    children: [
      ...code, //二维码海报
      ...detail //详情页
    ]
  },
]

/**
 *  路由对象
 */
const router = new VueRouter({ // 使用配置文件规则
  routes,
  mode: 'hash',
  strict: process.env.NODE_ENV !== 'production'
})

/**
 *  路由钩子
 */
/* 路由跳转前 */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    const head = document.getElementsByTagName('head')
    const meta = document.createElement('meta')
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})
export default router