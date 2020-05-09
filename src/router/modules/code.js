/**
 * 推广二维码海报页
 *
 */

export default [
  //恒盛招租
  {
    path: '/hszz/:sessionKey/:projectId',
    component: resolve => require(['@/views/code/hszz.vue'], resolve),
    meta: {
      title: '恒盛招租'
    }
  }
]