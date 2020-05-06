/**
 * 就诊人管理
 *
 */

export default [
  //就诊卡详情
  {
    path: '/jzkxq',
    component: resolve => require(['page/jzrgl/jzkxq.vue'], resolve),
    meta: {
      title: '就诊卡详情'
    }
  },
  //就诊人管理
  {
    path: '/jzrgl',
    component: resolve => require(['page/jzrgl/jzrgl.vue'], resolve),
    meta: {
      title: '就诊人管理'
    }
  },
  //添加就诊人身份证上传
  {
    path: '/tjjzrsfz',
    component: resolve => require(['page/jzrgl/tjjzrsfz.vue'], resolve),
    meta: {
      title: '添加就诊人身份证上传'
    }
  },
  //添加就诊人输入身份证信息
  {
    path: '/tjjzrsrsfz',
    component: resolve => require(['page/jzrgl/tjjzrsrsfz.vue'], resolve),
    meta: {
      title: '添加就诊人输入身份证信息'
    }
  },
  //添加就诊人
  {
    path: '/tjjzr',
    component: resolve => require(['page/jzrgl/tjjzr.vue'], resolve),
    meta: {
      title: '添加就诊人'
    }
  },
  //添加就诊人(手动)
  {
    path: '/tjjzrsd',
    component: resolve => require(['page/jzrgl/tjjzrsd.vue'], resolve),
    meta: {
      title: '添加就诊人'
    }
  }
]