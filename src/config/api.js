/*
  真实接口地址配置
 */
let env = process.env.NODE_ENV,
  name = process.env.NAME,
  api = {};

if (env === 'development') { //开发环境
  api = {
    wxHip: 'http://wx.gsy8.com/hip-api',
  }
} else if (env === 'testing') {
  api = {
    wxHip: 'http://wx.gsy8.com/hip-api',
  }
} else { //生产环境
  api = {
    wxHip: 'http://wx.gsy8.com/hip-api',
  }

}
export default api