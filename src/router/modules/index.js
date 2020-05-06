/**
 *首页 
 *
 */

export default [
    //首页
    {
      path: '/index',
      component: resolve => require(['views/code/index.vue'], resolve),
      meta: {
        title: '益点推客'
      }
    },
  ]