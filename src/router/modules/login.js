/**
 * 登录/注册
 *
 */
const Login = resolve => require(['page/login/Login.vue'], resolve)
const Signup = resolve => require(['page/login/Signup.vue'], resolve)
const ForgetPassword = resolve => require(['page/login/ForgetPassword.vue'], resolve)
const RegAgreement = resolve => require(['page/login/RegAgreement.vue'], resolve)
const RegOver = resolve => require(['page/login/RegOver.vue'], resolve)


export default [
  //登录
  {
    path: '/login',
    component: Login
  },
  //新用户注册
  {
    path: '/signup',
    component: Signup
  },
  //忘记密码
  {
    path: '/forgetPassword',
    component: ForgetPassword
  },
  // 《 公众号用户注册协议和隐私政策》
  {
    path: '/regAgreement',
    component: RegAgreement
  },
  // 《 公众号用户注册协议和隐私政策》
  {
    path: '/regOver',
    component: RegOver
  },
]
