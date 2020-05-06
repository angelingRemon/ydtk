/**
 * 个人中心
 *
 */

export default [
  //挂号记录
  {
    path: '/ghjl',
    component: resolve => require(['page/grzx/ghjl.vue'], resolve),
    meta: {
      title: '挂号记录'
    }
  },
  //挂号列表
  {
    path: '/ghlb',
    component: resolve => require(['page/grzx/ghlb.vue'], resolve),
    meta: {
      title: '挂号列表'
    }
  },
  //我的收藏
  {
    path: '/wdsc',
    component: resolve => require(['page/grzx/wdsc.vue'], resolve),
    meta: {
      title: '我的收藏'
    }
  },
  //消息中心
  {
    path: '/xxzx',
    component: resolve => require(['page/grzx/xxzx.vue'], resolve),
    meta: {
      title: '消息中心'
    }
  },
  //我的账单
  {
    path: '/wdzd',
    component: resolve => require(['page/grzx/wdzd.vue'], resolve),
    meta: {
      title: '消息中心'
    }
  },
  //主界面添加卡状态
  {
    path: '/zjmtjkzt',
    component: resolve => require(['page/grzx/zjmtjkzt.vue'], resolve),
    meta: {
      title: '主界面添加卡状态'
    }
  },
  //主界面已登录状态（未登录）
  {
    path: '/zjmydlzt',
    component: resolve => require(['page/grzx/zjmydlzt.vue'], resolve),
    meta: {
      title: '主界面已登录状态（未登录）'
    }
  },

]