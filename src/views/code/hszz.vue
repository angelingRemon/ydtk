<template>
    <div class="hszzCodeMain">
        <img v-if="codeImg" class="codeImg" :src="codeImg" alt="恒盛招租" />
        <div class="failToloadMain" v-if="isSuccess==2">
            <img src="@/assets/images/failToloadImg.png" alt="加载失败" />
            <p>推广码加载失败</p>
            <a href="javascript:;" @click="getCodeImg">重新加载</a>
        </div>
    </div>
</template>
<script>
import { Toast, Notify } from "vant";
export default {
    data() {
        return {
            queryData: {
                code: {
                    sessionKey: this.$route.params.sessionKey,
                    projectId: this.$route.params.projectId
                }
            },
            codeImg: "",
            isSuccess: ""
        };
    },
    methods: {
        getCodeImg() {
            Toast.loading({
                message: "加载中...",
                forbidClick: true
            });
            var that = this;
            this.$http
                .get("https://wechat.nmyd168.com/Index/Project/index", {
                    params: that.queryData.code
                })
                .then(
                    function(res) {
                        // 响应成功回调
                        if (res.body.code == 200) {
                            var url = res.body.data.bg_url;
                            that.codeImg = url;
                            that.$forceUpdate();
                            Toast.clear();
                        } else {
                            that.isSuccess = 2;
                            Toast.clear();
                            Notify({ type: "warning", message: res.body.msg });
                        }
                    },
                    function(res) {
                        // 响应错误回调
                        that.isSuccess = 2;
                        Toast.clear();
                    }
                );
        }
    },
    created() {
        this.getCodeImg();
    }
};
</script>
<style lang="less" scoped>
.hszzCodeMain {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    img.codeImg {
        width: 100%;
        height: 100%;
        display: block;
    }
}
.failToloadMain {
    text-align: center;
    padding-top: 30%;
    img {
        width: 360px;
    }
    p {
        font-size: 32px;
        color: #333;
        font-weight: bold;
        line-height: 80px;
    }
    a {
        display: block;
        width: 200px;
        height: 70px;
        line-height: 70px;
        background: #3f99ff;
        color: #fff;
        display: block;
        margin: 0 auto;
        font-size: 28px;
    }
}
</style>
