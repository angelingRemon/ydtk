/**
 * 推广二维码海报页
 *
 */

export default [
    {
      path: '/detail/:sessionKey/:projectId/:popenId',
      component: resolve => require(['@/views/detail/index.vue'], resolve),
      meta: {
        title: '益点推客'
      }
    }
  ]