import res from '../config/vueResource'

/**
 *  首页
 */

// 登录接口
export const login = (params) => res('get', 'wxHip', '/api/login', { params: params });
// 用户登出接口
export const logout = (params) => res('get', 'wxHip', '/api/logout', { params: params });
// 退出
export const logoutPost = (params) => res('post', 'wxHip', '/api/logout', params);

/**
 *  就诊科室管理
 */

// 二级就诊科室列表
export const deptList = (params) => res('post', 'wxHip', '/patient/dept/deptList', params);
// 一级分科列表
export const superDeptList = (params) => res('get', 'wxHip', '/patient/dept/superDeptList', { params: params });

/**
 *  就诊人管理
 */

// 根据ID获取就诊人信息
export const patientgetById = (params) => res('get', 'wxHip', '/patient/patient/getById/{id}', { params: params });
// 根据patientId获取就诊人信息
export const patientgetByPatientId = (params) => res('get', 'wxHip', '/patient/patient/getByPatientId/{patientId}', { params: params });
// 自助机读取身份识别信息
export const patientlogout = (params) => res('post', 'wxHip', '/patient/patient/logout', params);
// 上传身份证图片后调用阿里OCR接口 识别身份证信息
export const patientocrIdCard = (params) => res('post', 'wxHip', '/patient/patient/ocrIdCard', params);
// 就诊人列表
export const patientpatientList = (params) => res('get', 'wxHip', '/patient/patient/patientList', { params: params });
// 退出
export const patientsavePatient = (params) => res('post', 'wxHip', '/patient/patient/savePatient', params);
// 修改就诊人信息
export const patientupdatePatient = (params) => res('get', 'wxHip', '/patient/patient/updatePatient', { params: params });
// 建档短信验证码
export const patientorderNumcode = (params) => res('get', 'wxHip', '/patient/patient/{orderNum}/code', { params: params });

/**
 *  就诊科室管理 
 */

// 二级就诊科室列表
export const deptdeptList = (params) => res('post', 'wxHip', '/patient/dept/deptList', params);
// 一级分科列表
export const deptsuperDeptList = (params) => res('get', 'wxHip', '/patient/dept/superDeptList', { params: params });

/**
 *  微信关注账号与病患关系管理 
 */

// 解绑当前微信用户和指定的就诊人
export const wxUserPatientdeleteInfo = (params) => res('get', 'wxHip', '/patient/wxUserPatient/deleteInfo', { params: params });
// 重新设置当前微信用户的默认就诊人
export const wxUserPatientsetDefaultPatient = (params) => res('get', 'wxHip', '/patient/wxUserPatient/setDefaultPatient', { params: params });

/**
 *  微信网页授权登录 
 */
// 获取用户openI
export const getUserOpenId = (params) => res('get', 'wxHip', '/wx/oauth2/getUserOpenId', { params: params });
// 获取用户信息
export const oauth2getWxMpUser = (params) => res('get', 'wxHip', '/wx/oauth2/getWxMpUser', { params: params });

/**
 *  文件上传  
 */

// 文件上传服务
export const fileupload = (params) => res('post', 'wxHip', '/file/upload', params);

/**
 *  文章信息  
 */
// 列表
export const articlist = (params) => res('get', 'wxHip', '/demo/artic/list', { params: params });
// 信息
export const articid = (params) => res('get', 'wxHip', '/demo/artic/{id}', { params: params });
/**
 *  院内导航楼层
 */

// 院内导航楼层科室列表查询接口
export const floordeptList = (params) => res('get', 'wxHip', '/floor/deptList', { params: params });
// 院内导航楼层列表查询接口
export const floorlist = (params) => res('get', 'wxHip', '/floor/list', { params: params });
