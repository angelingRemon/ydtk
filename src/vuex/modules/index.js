/**
 * 新闻
 */
import * as types from '../mutation-types'

const state = {
  touchStart:"",  //新闻详情
  // photoswipeShow:false,
  photoSwipeData:[]
}

const mutations = {
  /* 触发事件 */
  [types.TOUCH_START](state,data){
      state.touchStart = data?data:""
  },
  // [types.photoswipeData](state,data){
  [types.SET_PHOTO_SWIPE_DATA](state,data){
      state.photoSwipeData = data
  }
}

const getters = {
  touchStart: state => state.touchStart,
  // photoswipeShow:state => state.photoswipeShow,
  photoSwipeData:state => state.photoSwipeData
}

const actions = {
  /*  app初始化  */
  setTouchStart : ({commit},val) => {
    commit(types.TOUCH_START,val)
  }
}

export default{
  state,
  mutations,
  getters,
  actions
}