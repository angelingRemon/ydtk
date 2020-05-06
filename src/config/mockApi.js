/*
 功能：模拟Api
 说明：新增时请填写接口地址、数据名、数据类型
 文档：http://mockjs.com/examples.html
 */
import Mock from 'mockjs' //引入Mock
var mocktest = Mock.mock('/searchItem', {
    'code':'101',
    'data|1-10': ['@name']
});
var  mocktest1 = Mock.mock('/itemList', {
    'code':'101',
    'data|1-10': [
    	{
    		name: '@cname',
    		title:'@ctitle',
    		number:'@increment',
    		price:'@increment',
    		img:'@url()',
    		style:'@ctitle',
            itemId: '@id()'
    	}
    ]
});



export default {
  mocktest
}
