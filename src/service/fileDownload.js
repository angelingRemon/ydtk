
let waiting


export default{
    down:function(imgUrl){

        // console.log(imgUrl)
        // imgUrl = "http://10.162.16.25:8080/5,017d9739c899"
        // console.log(imgUrl)
        var downLoader = plus.downloader.createDownload(imgUrl, {
            filename: "_downloads/image/"
        }, function(download, status) {
            var fileName = download.filename;
            waiting.close()
            if(status ==200){
            plus.gallery.save(fileName, function() {
                // console.log('保存至相册成功')
                plus.nativeUI.toast("下载成功，请至相册查看",2000)
            })
            }else{
                plus.nativeUI.toast("下载失败",2000)
            }
            
        })
    //     let changeTime = 600
    //     let timer = (new Date).valueOf()
    //     downLoader.addEventListener("statechanged", function(dtask,status){
    //         if(!dtask){return;}
    //         switch(dtask.state) {
    //             case 1: // 开始
    //             // console.log(1)
    //             break;
    //             case 2: // 已连接到服务器
    //             // console.log(2)
    //             break;
    //             case 3:    // 已接收到数据
    //             // console.log(3)
    //              let _time = (new Date).valueOf()
    //              if(_time-timer>changeTime){
    //                    timer = _time
    //                   _this.showLoading = true
    //                   let progressVal = ((dtask.downloadedSize/dtask.totalSize).toFixed(4)*(100))+''
    //                 //  console.log(progressVal)
    //              }
    //             break;
    //             case 4:    // 下载完成
    //             // console.log(4)
    //             // console.log(dtask.filename)
    //             // console.log(dtask)

    //             break;
    //         }
    //    })
        downLoader.start();
        waiting = plus.nativeUI.showWaiting("下载中");

        // console.log('start')

    }
}
