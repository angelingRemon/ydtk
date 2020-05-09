/*
  真实接口地址配置
 */
let env = process.env.NODE_ENV,
  name = process.env.NAME,
  api = {};

if (env === 'development') { //开发环境
  api = {
    wxHip: 'https://wechat.nmyd168.com/Index/Project/index',
  }
} else if (env === 'testing') {
  api = {
    wxHip: 'https://wechat.nmyd168.com/Index/Project/index',
  }
} else { //生产环境
  api = {
    wxHip: 'https://wechat.nmyd168.com/Index/Project/index',
  }

}
export default api