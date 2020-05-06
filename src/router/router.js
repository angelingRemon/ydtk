import Vue from 'vue'
import VueRouter from 'vue-router' //引用路由
import store from '../vuex/store.js' //引用vuex
Vue.use(VueRouter) //调用

/**
 * 引入路由表
 */

import code from './modules/code.js' // 二维码海报
// import index from './modules/index.js' // 首页
// import drgh from './modules/drgh.js' // 当日挂号
// import yygh from './modules/yygh.js' // 预约挂号
// import mzjf from './modules/mzjf.js' // 门诊缴费
// import grzx from './modules/grzx.js' // 个人中心
// import jzrgl from './modules/jzrgl.js' // 就诊人管理
// import kzt from './modules/kzt.js' // 空状态

/**
 *  配置路由
 */
const routes = [
  //顶层路由
  {
    path: '/',
    component: resolve => require(['@/views/Home'], resolve),
    redirect: "/hszz",
    meta: {
      title: '益点推客'
    },
    children: [
      ...code, //二维码海报
      // ...index,  //首页
      // ...login, //登录
      // ...drgh, // 当日挂号
      // ...yygh, // 预约挂号
      // ...mzjf, // 门诊缴费
      // ...grzx, // 个人中心
      // ...jzrgl, // 就诊人管理
      // ...kzt, // 空状态
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
 * 转场动画
 */
VueRouter.prototype.go = function(n) {
  let path = store.state.route.path
  // if(n<0 && path != '/login'){
  //  store.dispatch('changeTransition','slide-right')
  // }
  if (n < 0) {
    store.dispatch('changeTransition', 'slide-right')
  }
  window.history.go(n)
}

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
// router.beforeEach((to, from, next) => {
//   // console.log("跳转参数to",to)
//   // console.log("跳转参数from",from)
//   // console.log("跳转参数next",next)
//   if (store.getters.loginStatus) {
//     //登录成功后不返回登录页面
//     console.log("获取用户123", store.getters.userInfo)

//     getUserPrivlegeByUserId({ userId: store.getters.userInfo.id }).then(res => {
//       if (res.code == 101) {
//         console.log("当前用户权限", res)
//         let privlegeList = []
//         res.data.forEach(list => {
//           if (list.systemCode == 1010 && list.type == 2) {
//             privlegeList.push(list)
//           }
//         })
//         console.log("整理后的权限", privlegeList)
//         // 开始卡路由
//         let goOrnNot = 1
//         for (let i = 0; i < privlegeList.length; i++) {
//           if (privlegeList[i].location === to.path) {
//             goOrnNot = 2
//             console.log("goOrnNot", goOrnNot)
//             break;
//           } else {
//             goOrnNot = 1
//             console.log("goOrnNot", goOrnNot)
//           }
//         }
//         console.log('---')
//         if (goOrnNot === 1) {
//           next();
//           router.$writerSetpre = from
//         } else if (goOrnNot === 2) {
//           Vue.$vux.toast.show({
//             text: "您当前不具备进入该模块的权限",
//             type: "warn",
//             width: "13em"
//           })
//         }
//       }
//     })


//     // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------注释开始以下

//     // let curOrgType = store.getters.userInfo.organization.orgType
//     // // 5 || '' || 其他.个人注册用户-------------------------------------
//     // if(curOrgType != 2 && curOrgType != 3 && curOrgType != 4 && curOrgType != 1){
//     //   // 限制的路由页面
//     //   if(to.path === '/mengniu' || to.path === '/focusPurchase' || to.path === '/FinanceChain' || to.path==='/cattleTrading' || to.path === '/brandHall' || to.path === '/homeNavBottomClassify'){
//     //     Vue.$vux.toast.show({
//     //       text:"您当前不具备进入该模块的权限",
//     //       type:"warn",
//     //       width:"13em"
//     //     })
//     //   }else{
//     //     next();
//     //     router.$writerSetpre = from
//     //   }
//     // }
//     // // 4.供应商、金融机构----------------------------------
//     // else if(curOrgType == 4){
//     //   // 限制的路由页面
//     //   if(to.path === '/mengniu' || to.path === '/focusPurchase' || to.path==='/cattleTrading' || to.path === '/brandHall' || to.path === '/homeNavBottomClassify'){
//     //     Vue.$vux.toast.show({
//     //       text:"您当前不具备进入该模块的权限",
//     //       type:"warn",
//     //       width:"13em"
//     //     })
//     //   }else{
//     //     next();
//     //     router.$writerSetpre = from
//     //   }
//     // }
//     // // 3.集采用户
//     // else if(curOrgType == 3){
//     //   // 限制的路由页面
//     //   if(to.path === '/mengniu'){
//     //     Vue.$vux.toast.show({
//     //       text:"您当前不具备进入该模块的权限",
//     //       type:"warn",
//     //       width:"13em"
//     //     })
//     //   }else{
//     //     next();
//     //     router.$writerSetpre = from
//     //   }
//     // }
//     // // 2统采用户
//     // else if(curOrgType == 2){
//     //   // 限制的路由页面
//     //     next();
//     //     router.$writerSetpre = from
//     // }
//     // // 1.管理员
//     // else if(curOrgType == 1){
//     //   // 限制的路由页面
//     //     next();
//     //     router.$writerSetpre = from
//     // }else{
//     //   Vue.$vux.toast.show({
//     //     text:"您暂时没有更多权限",
//     //     type:"warn",
//     //     width:"13em"
//     //   })
//     //   next({path:'/home'})
//     // }
//     // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------if逻辑注释结束以上




//   } else { //强制登陆

//     if (localStorage.aynUserToken != '') { // 通过vuex state获取当前的登录状态
//       console.log('router拦截器：用户已登录，可以跳转');
//       // --------------2019-04-13
//       GetUserInfo().then(res => {
//         console.log("宝塔镇河妖", res)
//         if (res.code == 101) {

//           getUserPrivlegeByUserId({ userId: res.data.id }).then(res => {
//             if (res.code == 101) {
//               console.log("当前用户权限", res)
//               let privlegeList = []
//               res.data.forEach(list => {
//                 if (list.systemCode == 1010 && list.type == 2) {
//                   privlegeList.push(list)
//                 }
//               })
//               console.log("整理后的权限", privlegeList)
//               // 开始卡路由
//               let goOrnNot = 1
//               for (let i = 0; i < privlegeList.length; i++) {
//                 if (privlegeList[i].location === to.path) {
//                   goOrnNot = 2
//                   console.log("goOrnNot", goOrnNot)
//                   break;
//                 } else {
//                   goOrnNot = 1
//                   console.log("goOrnNot", goOrnNot)
//                 }
//               }
//               console.log('---')
//               if (goOrnNot === 1) {
//                 next();
//                 router.$writerSetpre = from
//               } else if (goOrnNot === 2) {
//                 Vue.$vux.toast.show({
//                   text: "您当前不具备进入该模块的权限",
//                   type: "warn",
//                   width: "13em"
//                 })
//               }
//             }
//           })




//           // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------继续注释以下

//           // let curOrgType = res.data.organization.orgType
//           // // 5 || '' || 其他.个人注册用户-------------------------------------
//           // if(curOrgType != 2 && curOrgType != 3 && curOrgType != 4 && curOrgType != 1){
//           //   // 限制的路由页面
//           //   if(to.path === '/mengniu' || to.path === '/focusPurchase' || to.path === '/FinanceChain' || to.path==='/cattleTrading' || to.path === '/brandHall' || to.path === '/homeNavBottomClassify'){
//           //     Vue.$vux.toast.show({
//           //       text:"您当前不具备进入该模块的权限",
//           //       type:"warn",
//           //       width:"13em"
//           //     })
//           //   }else{
//           //     next();
//           //     router.$writerSetpre = from
//           //   }
//           // }
//           // // 4.供应商、金融机构----------------------------------
//           // else if(curOrgType == 4){
//           //   // 限制的路由页面
//           //   if(to.path === '/mengniu' || to.path === '/focusPurchase' || to.path==='/cattleTrading' || to.path === '/brandHall' || to.path === '/homeNavBottomClassify'){
//           //     Vue.$vux.toast.show({
//           //       text:"您当前不具备进入该模块的权限",
//           //       type:"warn",
//           //       width:"13em"
//           //     })
//           //   }else{
//           //     next();
//           //     router.$writerSetpre = from
//           //   }
//           // }
//           // // 3.集采用户
//           // else if(curOrgType == 3){
//           //   // 限制的路由页面
//           //   if(to.path === '/mengniu'){
//           //     Vue.$vux.toast.show({
//           //       text:"您当前不具备进入该模块的权限",
//           //       type:"warn",
//           //       width:"13em"
//           //     })
//           //   }else{
//           //     next();
//           //     router.$writerSetpre = from
//           //   }
//           // }
//           // // 2统采用户
//           // else if(curOrgType == 2){
//           //   // 限制的路由页面
//           //     next();
//           //     router.$writerSetpre = from
//           // }
//           // // 1.管理员
//           // else if(curOrgType == 1){
//           //   // 限制的路由页面
//           //     next();
//           //     router.$writerSetpre = from
//           // }


//           // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------有一个 以上


//         } else {  //请求用户的信息失败返回主页
//           next({ path: '/home' })
//         }
//       })
//     } else { // 非登录用户状态跳转
//       if (to.path === '/mengniu' || to.path === '/MengNiu' || to.path === '/focusPurchase' || to.path === '/brandHall' || to.path === '/homeNavBottomClassify') {

//         Vue.$vux.toast.show({
//           text: "请您登录后再进行操作",
//           type: "warn",
//           width: "13em"
//         })
//       } else {
//         next();
//         router.$writerSetpre = from
//       }
//     }
//   }
// })
// /* 路由跳转后 */
// // router.afterEach(route => {
// //   window.scrollTo(0, 0) //跳转后返回页面顶部
// // })

export default router