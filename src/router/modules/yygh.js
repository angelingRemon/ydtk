/**
 * 预约挂号
 *
 */

export default [
  //医生列表已收藏
  {
    path: '/yslbysc',
    component: resolve => require(['page/yygh/yslbysc.vue'], resolve),
    meta: {
      title: '医生列表已收藏'
    }
  },
  //挂号支付
  {
    path: '/ghzf',
    component: resolve => require(['page/yygh/ghzf.vue'], resolve),
    meta: {
      title: '挂号支付'
    }
  },
  //挂号成功
  {
    path: '/yyghcg',
    component: resolve => require(['page/yygh/yyghcg.vue'], resolve),
    meta: {
      title: '挂号成功'
    }
  },
  //挂号记录
  {
    path: '/ghjl',
    component: resolve => require(['page/yygh/ghjl.vue'], resolve),
    meta: {
      title: '挂号记录'
    }
  },
  //挂号支付
  // {
  //   path: '/ghzf',
  //   component: resolve => require(['page/yygh/ghzf.vue'], resolve),
  //   meta: {
  //     title: '挂号支付'
  //   }
  // },

  //具体科室医生列表
  {
    path: '/jtksyslb',
    component: resolve => require(['page/yygh/jtksyslb.vue'], resolve),
    meta: {
      title: '具体科室医生列表'
    }
  },
  //具体科室医生主页
  {
    path: '/jtksyszy',
    component: resolve => require(['page/yygh/jtksyszy.vue'], resolve),
    meta: {
      title: '具体科室医生主页'
    }
  },
  {
    path: '/ysjs',
    component: resolve => require(['page/yygh/ysjs.vue'], resolve),
    meta: {
      title: '医生介绍'
    }
  },
  //选择科室列表
  {
    path: '/xzkslb',
    component: resolve => require(['page/yygh/xzkslb.vue'], resolve),
    meta: {
      title: '选择科室列表'
    }
  },

  //预约挂号选择科室
  {
    path: '/yyghxzks',
    component: resolve => require(['page/yygh/yyghxzks.vue'], resolve),
    meta: {
      title: '预约挂号选择科室'
    }
  },

]