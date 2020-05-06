import * as types from '../mutation-types'

import {
  cookie
} from 'vux'

import {
  GetUserToken,
  GetUserInfo,
  GetAddressList,
  AddInfoAddress,
  UpdateAddress,
  DeleteAddress,
  GetInvoiceList,
  AddInvoice,
  UpdateInvoice,
  DelInvoice,
  UserSignup,             //用户注册
  FindPassword,           //用户找回密码
  GetMsgCode,             //注册时短信验证
  ChangeUserInfo,         //修改用户昵称
  IsSignup,               //判断用户是否登录
  FindMsgCode,            //忘记密码短信验证
  ChangePassWord          //用户修改密码
} from '../../service/getData' 

const state = {
  /* 用户信息 */
  userToken: '',           //token
  userInfo: {organization:{}},            //用户信息
  loginStatus: false,      //登录状态
  hasShop: false,          //是否有店铺
  isAdmin: false,             //是否为组织管理员
  orgInfo: {},             //组织信息
  isMN   : false,          //是否为蒙牛
  isGroup: false,          //是否为集团
  isPasture: false,        //是否为牧场
  showSeller: false,       //显示卖家页面
  loginMessage: '',        //登录返回的提示信息
  isAuitCart:false ,       //是否显示采购申请

  userExitence: false,     //用户是否存在（false表示不存在，true表示存在)
  msgSuccess: false,       //短信是否发送成功(true表示发送成功，false表示发送失败)
  messageTip: '',          //短信成功失败的提示信息

  /* 收货地址 */
  addressList: [],         //获取地址信息
  activeAddress: [],       //修改的地址
  editAddressId: '',       //修改地址的索引值
  // defaultAddressId: '', //选择默认地址的索引值
  selectAddress: [],       //选择收货地址暂时保存的信息

  /* 开票 */
  invoiceList: [],        //获取开票信息
  activeInvoice: [],      //修改的开票P
  editInvoiceId: '',      //修改开票的索引值
  selectInvoice: [],      //选择开票暂时保存的信息

  deleteStatus: false,    //删除状态
  saveStatus: false       //保存状态


}

const mutations = {
  /* 用户登录,获取token */
  [types.USER_GET_TOKEN](state, info) {
    // console.log('登录信息：', JSON.stringify(info));
    state.userToken = info.code == '101' ? info.data : ''
    localStorage.aynUserToken = info.code == '101' ? info.data : '' //把token放入本地存储
  },
  /* 用户登录,获取用户信息 */
  [types.USER_GET_USERINFO](state, info) {
    // console.log("我重新掉了没")
    if (info.code == '101') {
      state.userInfo = info.data || {}
      state.loginStatus = true
      state.hasShop = info.data.shop ? true : false
      state.orgInfo = info.data.organization ? info.data.organization : {} //保存组织信息
      console.log("orgInfo",info.data.organization)

      if (state.orgInfo.orgType) { //判断组织类型

        let orgType = state.orgInfo.orgType
        switch (orgType) {
          case 1:
            state.isGroup = true //是否为集团
            break
          case 2:
            state.isPasture = true //是否为牧场
            break
          case 3:
        }
      }
      let num           //是否蒙牛
      state.isMN = false
      if(state.userInfo.organization && ((num =state.userInfo.organization.parentId) || (num =state.userInfo.organization.id))){
          if(num == 1826){
            // console.log("isMN",num)
             state.isMN = true
          }
      }
      let isAdmin = state.userInfo.isAdmin
      state.isAdmin = isAdmin == 0 ? true : false //是否为组织管理员

      let organizationConfig = state.orgInfo.organizationConfig ? state.orgInfo.organizationConfig : {}
      let isBuyAudit = organizationConfig.dssStatus
      // state.isAuitCart = state.orgInfo.isBuyAudit == '1' ? true : false
       state.isAuitCart = isBuyAudit == '1' ? true : false
    } else {
      state.loginMessage = info.message //登录的提示信息
    }
  },
  /* 用户退出登录*/
  [types.USER_LOGIN_EXIT](state) {
    state.loginStatus = false
    state.userToken = ''
    state.userInfo = ''
    localStorage.aynUserToken = ''
    localStorage.aynUsername = ''
    localStorage.aynPassword = ''
      // cookie.set('USERNAME', '', -1)
      // cookie.set('PASSWORD', '', -1)
  },
    /* 被动退出登录401*/
  [types.USER_LOGIN_EXIT_UNADUIT](state) {
    state.loginStatus = false
    state.userToken = ''
    state.userInfo = ''
  },
  /* 保存用户cookies */
  [types.USER_SAVE_COOKIES](state, params) {
    localStorage.aynUsername = params.username
    localStorage.aynPassword = params.password
      // let validity = 3; //cookie保存天数
      // let now = new Date();
      // now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
      // cookie.set('USERNAME', params.username, {
      //   path: '/',
      //   expires: now.toGMTString()
      // })
      // cookie.set('PASSWORD', params.password, {
      //   path: '/',
      //   expires: now.toGMTString()
      // })
  },



  /* 判断用户是否存在*/
  [types.IS_EXISTENCE](state, result) {
    result.code == '101' ? (state.userExitence = false) : (state.userExitence = true)
  },
  /* 判断短信是否发送成功*/
  [types.MSG_SUCCESS](state, result) {
    localStorage.aynUserToken = result.data //把token放入本地存储
    result.code == '101' ? (state.msgSuccess = true) : (state.msgSuccess = false, state.messageTip = result.message)
  },
  /* 判断新用户是否注册成功*/
  [types.USER_SIGNUP](state, result) {
    result.code == '101' ? (state.saveStatus = true) : (state.saveStatus = false, state.messageTip = result.message)
  },
  /* 判断用户找回密码是否成功*/
  [types.FIND_PASSWORD](state, result) {
    result.code == '101' ? (state.saveStatus = true) : (state.saveStatus = false, state.messageTip = result.message)
  },
  /* 判断用户修改昵称是否成功*/
  [types.CHANGE_NICK_NAME](state, info) {
    info.result.code == '101' ? (state.saveStatus = true, state.userInfo.nickName = info.params.nickname) : (state.saveStatus = false, state.messageTip = info.result.message)
  },
  /* 判断用户修改密码是否成功*/
  [types.CHANGE_PASSWORD](state, result) {
    result.code == '101' ? (state.saveStatus = true) : (state.saveStatus = false, state.messageTip = result.message)
  },


  /* 获取地址信息*/
  [types.ADDRESS_INFO_GET](state, {
    data
  }) {
    state.addressList = data || [];
  },
  /*上传修改的收货地址*/
  [types.EDIT_ADDRESS](state, payload) {
    state.activeAddress = payload;
    state.editAddressId = payload.id;
  },
  /*新增的收货地址*/
  [types.ADD_ADDRESS](state) {
    state.activeAddress = [];
    state.editAddressId = '';
  },
  /*保存收货地址*/
  [types.SAVE_ADDRESS](state, item) {
    !state.editAddressId ? state.addressList.push(item) : state.addressList[state.editAddressId] = item;
  },
  /*保存选择收货地址的信息*/
  [types.CHOICE_ADDRESS](state, item) {
    state.selectAddress = item || {}
  },
  /*保存收货地址状态*/
  [types.SAVE_ADDRESS_STATUS](state, result) {
    result.code == '101' ? (state.saveStatus = true) : (state.saveStatus = false)
  },
  /*删除收货地址*/
  [types.DELETE_ADDRESS](state, res) {
    res.code == '101' ? (state.deleteStatus = true) : (state.deleteStatus = false)
  },
  /* 获取开票信息*/
  [types.RECORD_INVOICE_LIST](state, {
    data
  }) {
    state.invoiceList = data || [];
  },

  /*修改开票信息*/
  [types.EDIT_INVOICE](state, payload) {
    state.activeInvoice = payload;
    state.editInvoiceId = payload.id;
  },

  /*新增的开票信息*/
  [types.ADD_INVOICE](state) {
    state.activeInvoice = [];
    state.editInvoiceId = '';
  },

  /*保存开票信息*/
  [types.SAVE_INVOICE](state, item) {
    !state.editInvoiceId ? state.invoiceList.push(item) : state.invoiceList[state.editInvoiceId] = item;
  },

  /*保存选择收货地址的信息*/
  [types.CHOICE_INVOICE](state, item) {
    state.selectInvoice = item || {}
  },

  /*保存开票状态*/
  [types.SAVE_INVOICE_STATUS](state, result) {
    result.code == '101' ? (state.saveStatus = true) : (state.saveStatus = false)
  },

  /*删除开票信息*/
  [types.DELETE_INVOICE](state, item) {
    item.code == '101' ? (state.deleteStatus = true) : (state.deleteStatus = false)
  },

  /* 是否显示卖家页面 */
  [types.USER_SHOW_SELLER_CHANGE](state) {
    state.showSeller = !state.showSeller
  },
}

const actions = {
  /* 获取token */
  getUserToken: async({
    commit
  }, params) => {
    let token = await GetUserToken(params) //获取token
    await commit(types.USER_GET_TOKEN, token)
    await commit(types.USER_SAVE_COOKIES, params) //保存用户名和密码至cookies
    return token
  },
  /* 获取用户信息 */
  getUserInfo: async({
    commit
  }) => {
    let result = await GetUserInfo() //获取用户信息
    // console.log('result,result',result)
    await commit(types.USER_GET_USERINFO, result)
  },
  /* 退出登录 */
  exitSuccess: ({
    commit
  }) => { //退出登录
    commit(types.USER_LOGIN_EXIT)
    commit(types.SELLER_ORDER_SUMMARY_GET,{code:101,data:{waitPay:0,waitSend:0,waitReceive:0}})  //清空订单数量数据
    commit(types.ORDER_SUMMARY_GET,{code:101,data:{waitPay:0,waitSend:0,waitReceive:0,received:0,waitCommnet:0}})  //清空订单数量数据
    commit(types.CART_LIST_GET,{code:101,data:{onSale:[]}})
    commit(types.AFTER_SALE_SUMMARY_GET,{code:101,data:{total:[]}})
    commit(types.SELLER_AFTER_SALE_SUMMARY_GET,{code:101,data:{total:[]}})
  },
  /* 被动退出登录 */
  exitUnaduit: ({
    commit
  }) => { //退出登录
    commit(types.USER_LOGIN_EXIT_UNADUIT)
  },
  /* 修改用户昵称 */
  changeNickName: async({
    commit
  }, params) => { //修改用户昵称
    let result = await ChangeUserInfo(params)
    await commit(types.CHANGE_NICK_NAME, {
      result,
      params
    })
  },
  changePassWord: async({
    commit
  }, params) => { //修改用户密码
    let result = await ChangePassWord(params)
    await commit(types.CHANGE_PASSWORD, result)
  },

  /* 判断用户是否注册 */
  isExistence: async({
    commit
  }, params) => {
    let result = await IsSignup(params) //获取用户信息
    await commit(types.IS_EXISTENCE, result)
  },
  /* 注册时发送短信验证码 */
  getMsgCode: async({
    commit
  }, params) => {
    let result = await GetMsgCode(params) //注册时发送短信验证
    await commit(types.MSG_SUCCESS, result)
  },
  /* 注册新用户 */
  userSignup: async({
    commit
  }, params) => {
    let result = await UserSignup(params) //注册用户是否成功
    await commit(types.USER_SIGNUP, result)
  },
  /* 找回密码 */
  findPassword: async({
    commit
  }, params) => {
    let result = await FindPassword(params) //找回密码
    await commit(types.FIND_PASSWORD, result)
  },
  /* 找回密码时发送短信验证码 */
  findMsgCode: async({
    commit
  }, params) => {
    let result = await FindMsgCode(params) //找回密码时发送短信验证
    await commit(types.MSG_SUCCESS, result)
  },

  /*我的个人资料*/
  getAddressInfo: async({
    commit
  }, params) => { //获取收货地址信息
    let result = await GetAddressList(params)
    commit(types.ADDRESS_INFO_GET, result)
  },

  deleteAddress: async({
    commit
  }, params) => { //删除地址信息
    let result = await DeleteAddress(params)
    await commit(types.DELETE_ADDRESS, result)
  },

  editAddress: ({
    commit
  }, payload) => { //上传修改的收货地址信息
    commit(types.EDIT_ADDRESS, payload)
  },

  addAddress: ({
    commit
  }) => { //上传修改的收货地址信息
    commit(types.ADD_ADDRESS)
  },

  setDefaultAddress: async({
    commit
  }, payload) => { //选择默认收货地址
    await UpdateAddress(payload)
  },

  saveAddress: async({
    commit
  }, params) => { //保存上传的地址
    if (!state.editAddressId) {
      let result = await AddInfoAddress(params)
      commit(types.SAVE_ADDRESS_STATUS, result)
    } else {
      let result = await UpdateAddress(params)
      commit(types.SAVE_ADDRESS_STATUS, result)
    }
    commit(types.SAVE_ADDRESS, params)
  },

  choiceAddress: ({
    commit
  }, params) => { //选择收货地址，但不是默认收货地址
    // console.log('params', params)
    commit(types.CHOICE_ADDRESS, params)
  },


  setInvoiceList: async({
    commit
  }) => { //获取开票信息
    let result = await GetInvoiceList()
    commit(types.RECORD_INVOICE_LIST, result)
  },

  deleteInvoice: async({
    commit
  }, params) => { //删除开票信息
    let result = await DelInvoice(params)
    await commit(types.DELETE_INVOICE, result)
  },

  editInvoice: ({
    commit
  }, payload) => { //上传修改的开票信息
    commit(types.EDIT_INVOICE, payload)
  },

  addInvoice: ({
    commit
  }) => { //新增的开票信息
    commit(types.ADD_INVOICE)
  },

  setDefaultInvoice: async({
    commit
  }, payload) => { //选择默认开票
    await UpdateInvoice(payload) //更新接口
  },

  saveInvoice: async({
    commit
  }, params) => { //保存上传的开票
    if (!state.editInvoiceId) {
      let result = await AddInvoice(params)
      commit(types.SAVE_INVOICE_STATUS, result)
    } else {
      let result = await UpdateInvoice(params)
      commit(types.SAVE_INVOICE_STATUS, result)
    }
    commit(types.SAVE_INVOICE, params)
  },


  choiceInvoice: ({
    commit
  }, params) => { //选择收货地址，但不是默认收货地址
    // console.log('params', params)
    commit(types.CHOICE_INVOICE, params)
  },

  /* 是否显示卖家页面 */
  changeShowSeller: ({
    commit
  }) => {
    commit(types.USER_SHOW_SELLER_CHANGE)
  },

}

const getters = {
  userToken: state => state.userToken,
  userInfo: state => state.userInfo,
  loginStatus: state => state.loginStatus,
  hasShop: state => state.hasShop,
  showSeller: state => state.showSeller,
  loginMessage: state => state.loginMessage,
  orgInfo: state => state.orgInfo,
  isMN: state => state.isMN,
  isAdmin: state => state.isAdmin,
  isGroup: state => state.isGroup,
  isPasture: state => state.isPasture,
  isAuitCart: state => state.isAuitCart,

  addressList: state => state.addressList,
  activeAddress: state => state.activeAddress,
  editAddressId: state => state.editAddressId,
  defaultAddress: state => {
    // console.log(state.addressList, state.addressList)
    let addressList = _.cloneDeep(state.addressList),
      address = _.pullAllBy(addressList, [{
        'isDefault': '1'
      }], 'isDefault');
// console.log(address, 'address')
    return address[0]
  },

  invoiceList: state => state.invoiceList,
  activeInvoice: state => state.activeInvoice,
  editInvoiceId: state => state.editInvoiceId,
  defaultInvoice: state => {
    let invoiceList = _.cloneDeep(state.invoiceList),
      invoice = _.pullAllBy(invoiceList, [{
        'isDefault': '1'
      }], 'isDefault');
    return invoice[0]
  },
  selectAddress: state => state.selectAddress, //选择收货地址时临时保存的信息
  selectInvoice: state => state.selectInvoice, //选择收货地址时临时保存的信息

  starItemList: state => state.starItemList,
  starShopList: state => state.starShopList,

  deleteStatus: state => state.deleteStatus, //删除是否成功的状态
  saveStatus: state => state.saveStatus, //保存是否成功的状态
  userExitence: state => state.userExitence, //判断用户是否存在
  msgSuccess: state => state.msgSuccess, //判断短信是否发送成功
  messageTip: state => state.messageTip, //发送短信后的提示信息
}

export default {
  state,
  mutations,
  actions,
  getters
}