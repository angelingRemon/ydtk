/**
 * 门诊缴费记录
 *
 */

export default [
  //门诊缴费列表
  {
    path: '/mzjflb',
    component: resolve => require(['page/mzjf/mzjflb.vue'], resolve),
    meta: {
      title: '门诊缴费列表'
    }
  },
  // 门诊缴费成功
  {
    path: '/mzjfcg',
    component: resolve => require(['page/mzjf/mzjfcg.vue'], resolve),
    meta: {
      title: '门诊缴费成功'
    }
  },
  // 门诊缴费记录
  {
    path: '/mzjfjl',
    component: resolve => require(['page/mzjf/mzjfjl.vue'], resolve),
    meta: {
      title: '门诊缴费记录'
    }
  },
  // 门诊缴费详单
  {
    path: '/mzjfxd',
    component: resolve => require(['page/mzjf/mzjfxd.vue'], resolve),
    meta: {
      title: '门诊缴费详单'
    }
  }
]