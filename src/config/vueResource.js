/*
  说明：vue-resource 二次封装
  参数：type       //请求的HTTP方法，例如：'GET', 'POST'或其他HTTP方法
       apiName    //接口地址
       url        //接口模块
       options    //配置参数,例如传{params={}}
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import api from './api' //真实接口配置
import store from '../vuex/store.js'  //引用vuex
import qs from 'qs'


Vue.use(VueResource)
// Vue.http.options.xhr = {withCredentials: true};
// Vue.http.options.credentials = true;
// Vue.http.options.emulateHTTP = true
// Vue.http.options.emulateJSON = true
/* vue-resource拦截器 */
Vue.http.interceptors.push((request, next) => {

  request.corssOrigin = true
  request.credentials = true
  //生产环境的request加token
  if(localStorage.aynUserToken != 'undefined' && request.url != '/apiUser/users/login'){
    request.headers.set('X-AIYANGNIU-SIGNATURE',localStorage.aynUserToken)
  }
  // request.headers.set('Referer','http://m.aiyangniu.cn')
  
  next((response) => {
     if(response.status){
       let code =  response.body.code
       let status = response.status
        switch (status) {
          case 400:
            vue.$vux.toast.show({
             text: '网络连接失败',
             type: 'cancel',
             position:'middle'
            })
            response.data = {}
            break;
          case 401:
              //  console.log("localStorage.noAuthPageReload",localStorage.noAuthPageReload,((localStorage.noAuthPageReload -  (new Date()).valueOf())) )
              // return false
            if(!localStorage.noAuthPageReload || ((localStorage.noAuthPageReload -  (new Date()).valueOf()) > 1800000)){
              localStorage.noAuthPageReload = (new Date()).valueOf()
              location.reload()
              return false
            }
            store.dispatch('updateLoading',{show:false}) //loading false
            localStorage.aynUserToken = '' //清空本地存储的token
            //token失效 或 无token时跳转至登录页面
            // location.reload()
            store._actions.exitUnaduit[0]()
            // console.log('loginStatususerToken',store.state.loginStatus,store.state.userToken)
            let jumpPath = store.state.route.path == '/login'?'/myCenter':store.state.route.path

            if(store.state.route.path === '/fontContentForShare'){
              // 若是在分享图文页 不做登陆用户验证跳转
            }else{
              vue.$router.push({ //跳转登录
                path: '/login',
                query: {lastPath: jumpPath}
              })
            }
            response.data = {}
            break;
          case 503:
            store.dispatch('updateLoading',{show:false}) //loading false
            vue.$vux.toast.show({
             text: '网络连接失败',
             type: 'cancel',
             position:'middle'
            })
            response.data = {}
            break;
          case 504:
            store.dispatch('updateLoading',{show:false}) //loading false
            vue.$vux.toast.show({
             text: '网络连接失败',
             type: 'cancel',
             position:'middle'
            })
            response.data = {}
            break;
          case 200:  
          if(code ===110){
            // vue.$router.push({ //跳转登录
            //     path: '/organization'
            // })
            vue.$vux.confirm.show({
                // 组件除show外的属性
                content:"您尚未加入公司或组织",
                confirmText:"去加入",
                cancelText:"稍后",
                onConfirm () {
                  vue.$router.push({ //跳转登录
                     path: '/organization'
                  })
                }
            })
            response.data = {}
            break;
          }
        }
     }
     return response
  })
})
/* 二次封装 */
export default async (type, apiName, url,data,options) => {
  var vm = this
  //url拼接
  let path = (apiName != '')? api[apiName] + url:url
  await store.dispatch('updateLoading',{show:true}) //loading true
  // console.log(path, 'path')
  // /-------------newadd
  if (options && options.form) {
    let opt = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    data = qs.stringify(data)
    options === {} ? options.headers = opt.headers : options = opt
  }
  // -----------------new add
  await Vue.http[type](path,data,options).then((response) => {
    vm.result = response.data
  })
  await store.dispatch('updateLoading',{show:false}) //loading false
  return vm.result
}
