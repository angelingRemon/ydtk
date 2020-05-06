    // 页面创建时创建native的window.plus对象
    //console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
    let  plusReady = function(){
        let backCount=false
        //全局隐藏滚动条
   			plus.webview.currentWebview().setStyle({
            		scrollIndicator: 'none'
       	});
        //初始化手机的'返回'按钮事件           按两次退出
        plus.key.addEventListener("backbutton",function(){
           let currentUrlArr = location.href.split('/')
           let isHome = currentUrlArr[currentUrlArr.length-1] ==='home'
           if(isHome){
             if(backCount){
                plus.runtime.quit();
             }else{
               backCount = true
                _this.$vux.toast.show({
                  position:'middle',
                  text: '再按一次退出',
                  time:2000
                })
                setTimeout(function(){
                  backCount = false
                },2000)
             }
           }else{
             _this.$router.back()
           }
          })
    }
     if(window.plus){
       plusReady()
     }else{
       document.addEventListener('plusready', plusReady,false)
     }