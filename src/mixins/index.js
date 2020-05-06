import filters from './filter'
export default {
  filters, //自定义过滤器
  computed:{
    /* 缓存白名单 */
    $keepAlive(){
      let list = 'home,find,mengniu,classify,'
      return list
    },
    /* 获取终端的font-size基准 */
    $fs(){
      let str = getComputedStyle(window.document.documentElement)['font-size']
      let fs = str.substring(0,str.length -2)
      return fs?fs:14
    },
    /* 移动终端浏览器版本信息 */
    $ver(){
      let u = navigator.userAgent,
      app = navigator.appVersion,
      title = '移动终端浏览器版本信息',
      kernel = '',    //浏览器内核
      devices = '',   //终端
      system = ''     //终端系统
      /* 检测浏览器内核 */
      if(u.indexOf('Trident') > -1){
        kernel = 'trident'
      }else if(u.indexOf('Presto') > -1) {
        kernel = 'presto'
      }else if(u.indexOf('AppleWebKit') > -1){
        kernel = 'webKit'
      }else if(u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1){
        kernel = 'gecko'
      }
      /* 检测终端 */
      if(u.indexOf('iPhone') > -1){
        devices = 'iPhone'
      }else if(u.indexOf('Mac') > -1){
        devices = 'Mac'
      }else if(u.indexOf('iPad') > -1){
        devices = 'iPad'
      }

      /* 检测终端系统 */
      if(!! u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        system = 'ios'
      }else if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
        system = 'android'
      }

      /* 是否为移动端 */
      let mobile = !! u.match(/AppleWebKit.*Mobile.*/) || !! u.match(/AppleWebKit/)? true : false
      /* 是否为微信 */
      let weixin = u.toLowerCase().indexOf('micromessenger') > -1?true:false

      let ver = { //移动终端浏览器版本信息
        title,
        kernel,
        devices,
        system,
        weixin
      }
      //判断是否为native
      if(window.plus){
        return ver
      }else{
        return false
      }

    }
  },
  methods: {
    /* 路由跳转 */
    jump (to) {
      // console.log(this.$router,to)
      if (this.$router) {
        this.$router.push(to)
      }
    },
    /* 返回上一页 适用于多级route的父页面 */
    jumpLast () {
      if (this.$router && typeof(this.$route.query.lastPath) != 'undefined') {
        this.$router.push(this.$route.query.lastPath);
      }
    },
    /* 全局跳转外链 newUrl外链 oldUrl需要返回的页面*/
    jumpExt(newUrl,oldUrl){
      if(newUrl != ''){
          let optQuery =  { newUrl: newUrl,oldUrl:oldUrl }
          this.$router.push({ path: '/iframe', query:optQuery})
      }
    },
    /* 组件懒加载提示 */
    lazyCom(component){
      // console.log('组件懒加载完成');
    },
    /* 变更状态栏颜色 */
    $statusBar(style){ // light 白色字体  / dark 黑色字体
      // if(this.$ver.system == 'ios'){
      //   plus.navigator.setStatusBarStyle(style);
      // }
    },
  },

  mounted(){
   
  }
}
