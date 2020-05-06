/**
 * 空状态
 *
 */

export default [
  //加载失败
  {
    path: '/jzsb',
    component: resolve => require(['page/kzt/jzsb.vue'], resolve),
    meta: {
      title: '加载失败'
    }
  },
  //预约成功
  {
    path: '/yycg',
    component: resolve => require(['page/kzt/yycg.vue'], resolve),
    meta: {
      title: '预约成功'
    }
  },
  //暂时没有消息
  {
    path: '/zsmyxx',
    component: resolve => require(['page/kzt/zsmyxx.vue'], resolve),
    meta: {
      title: '暂时没有消息'
    }
  },
  //暂无收藏
  {
    path: '/zwsc',
    component: resolve => require(['page/kzt/zwsc.vue'], resolve),
    meta: {
      title: '暂无收藏'
    }
  },
  //暂无预约
  {
    path: '/zwyy',
    component: resolve => require(['page/kzt/zwyy.vue'], resolve),
    meta: {
      title: '暂无预约'
    }
  }
]