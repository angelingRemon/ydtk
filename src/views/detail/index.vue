<template>
  <div class="detailMain">
    <!-- banner&&brief -->
    <div class="headerMain">
      <img class="headerImg" src="@/assets/images/detailHeaderImg.jpg" alt="头部背景" />
      <div class="headerBox">
        <div class="bannerImgBox">
          <img :src="renderData.detail.banner_url" alt="bannerImg" />
        </div>
        <div class="briefMain">
          <div class="briefBox">
            <div class="briefTitleMain ren-flex-ac ren-flex-ce">
              <img class="titleBgLeft" src="@/assets/images/titleBgLeft.png" alt />
              <span>{{renderData.detail[4]}}</span>
              <img class="titleBgRight" src="@/assets/images/titleBgRight.png" alt />
            </div>
            <div class="briefTextMain">{{renderData.detail[7]}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- video -->
    <div class="videoMain">
      <div>
        <video :src="renderData.detail[13]" controls="controls" webkit-playsinline="true"></video>
      </div>
    </div>
    <!-- detail -->
    <div class="detailContent">
      <div class="detailCont">
        <div class="detailTitleMain ren-flex-ac ren-flex-ce">
          <img class="titleBgLeft" src="@/assets/images/titleBgLeft.png" alt />
          <span>{{renderData.detail[4]}}</span>
          <img class="titleBgRight" src="@/assets/images/titleBgRight1.png" alt />
        </div>
        <div class="detailContMain">
          <div class="detailContBox">
            <div>
              <span>地址：</span>
              <div>{{renderData.detail.address}}</div>
            </div>
            <div>
              <span>电话：</span>
              <div>{{renderData.detail.telphone}}</div>
            </div>
            <div class="line_top">{{renderData.detail.remark}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- form -->
    <div class="formContent">
      <div class="formMain">
        <div class="formTitleMain ren-flex-ac ren-flex-ce">
          <img class="titleBgLeft" src="@/assets/images/titleBgLeft.png" alt />
          <span>联系我</span>
          <img class="titleBgRight" src="@/assets/images/titleBgRight.png" alt />
        </div>
        <div class="formBoxMain">
          <div class="formItem">
            <input
              type="text"
              maxlength="10"
              v-model="queryData.form.realName"
              placeholder="请输入您的姓名"
            />
          </div>
          <div class="formItem">
            <input
              type="tel"
              maxlength="11"
              v-model="queryData.form.mobilePhone"
              placeholder="请输入您的联系方式"
            />
          </div>
          <span class="formBtn" @click="submitForm">提交</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, Notify, Button } from "vant";
export default {
  data() {
    return {
      queryData: {
        detail: {
          sessionKey: this.$route.params.sessionKey,
          projectId: this.$route.params.projectId
        },
        form: {
          sessionKey: this.$route.params.sessionKey,
          projectId: this.$route.params.projectId,
          popenId:this.$route.params.projectId,
          realName: "",
          mobilePhone: ""
        }
      },
      renderData: {
        detail: {}
      }
    };
  },
  methods: {
    getDetailData() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      var that = this;
      this.$http
        .get("https://wechat.nmyd168.com/Index/Project/indexDetail", {
          params: that.queryData.detail
        })
        .then(
          function(res) {
            // 响应成功回调
            if (res.body.code == 200) {
              var datas = res.body.data[0];
              //添加域名地址
              datas[2] = "https://wechat.nmyd168.com" + datas[2];
              datas[13] = "https://wechat.nmyd168.com" + datas[13];
              datas.banner_url =
                "https://wechat.nmyd168.com" + datas.banner_url;
              this.renderData.detail = datas;
              Toast.clear();
            } else {
              Notify({ type: "warning", message: res.body.msg });
              Toast.clear();
            }
          },
          function(res) {
            // 响应错误回调
            Toast.clear();
          }
        );
    },
    submitForm() {
      if (this.queryData.form.realName == "") {
        Notify({ type: "danger", message: "请输入真实姓名" });
        return;
      }
      if (this.queryData.form.mobilePhone == "") {
        Notify({ type: "danger", message: "请输入您的联系方式" });
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.queryData.form.mobilePhone)) {
        Notify({ type: "danger", message: "您输入的手机号格式不正确" });
        return;
      }
      Toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      var that = this;
      this.$http
        .post("https://wechat.nmyd168.com/Index/Project/submitCustomer", {
          params: that.queryData.form
        })
        .then(
          function(res) {
            // 响应成功回调
            if (res.body.code == 200) {
              Toast({
                message: "提交成功",
                icon: "success",
                duration:2000
              });
              that.queryData.form.realName = '';
              that.queryData.form.mobilePhone = '';
            } else {
              Toast({
                message:res.body.msg,
                icon: "cross",
                duration:2000
              });
            }
          },
          function(res) {
            // 响应错误回调
            Toast.clear();
          }
        );
    }
  },
  created() {
    this.getDetailData();
  }
};
</script>
<style lang="less" scoped>
.detailMain {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  background: #230e6d;
}
.headerMain {
  position: relative;
  padding-bottom: 120px;
  .headerImg {
    width: 100%;
    height: 600px;
    display: block;
  }
  .headerBox {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 100px;
    .bannerImgBox {
      padding: 0 46px;
      img {
        height: 330px;
        width: 100%;
        border-radius: 10px 10px 0 0;
        border: 2px solid #f1ecf0;
        display: block;
      }
    }
    .briefMain {
      padding: 0 30px;
      position: relative;
      top: -2px;
      .briefBox {
        background-image: linear-gradient(135deg, #5346f6, #9143f9);
        border-radius: 15px;
      }
    }
  }
}
.briefTitleMain {
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  font-style: italic;
  text-shadow: #492de2 4px 4px 10px;
  letter-spacing: 2px;
  padding-top: 25px;
  .titleBgLeft {
    width: 43px;
    height: 48px;
    display: block;
  }
  .titleBgRight {
    width: 42px;
    height: 51px;
    display: block;
  }
}
.briefTextMain {
  padding: 15px 48px 30px;
  font-size: 26px;
  color: #fff;
  line-height: 38px;
  text-align: justify;
}
.videoMain {
  padding: 0 30px;
  > div {
    border-radius: 15px;
    overflow: hidden;
    height: 364px;
    background: #333;
  }
  video {
    width: 100%;
    height: 368px;
    display: block;
  }
}
.detailContent {
  padding: 50px 30px 0;
  .detailCont {
    background-image: linear-gradient(135deg, #5346f6, #9143f9);
    border-radius: 15px;
  }
}
.detailTitleMain {
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  font-style: italic;
  padding: 40px 0;
  text-shadow: #492de2 4px 4px 10px;
  letter-spacing: 2px;
  .titleBgLeft {
    width: 60px;
    height: 60px;
    display: block;
  }
  .titleBgRight {
    width: 44px;
    height: 66px;
    display: block;
  }
  span {
    position: relative;
    z-index: 999;
  }
}
.detailContMain {
  padding: 0 38px 40px;
  .detailContBox {
    background: #fff;
    border-radius: 15px;
    padding: 30px;
    text-align: justify;
    font-size: 26px;
    color: #240f71;
    line-height: 40px;
    min-height: 400px;
    overflow: hidden;
    div {
      span {
        display: block;
        float: left;
      }
      div {
        padding-left: 80px;
        font-weight: bold;
      }
    }
    div.line_top {
      margin-top: 20px;
    }
  }
}
.formContent {
  padding: 50px 30px;
  .formMain {
    background-image: linear-gradient(135deg, #5346f6, #9143f9);
    border-radius: 15px;
  }
}
.formTitleMain {
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  padding: 40px 0;
  text-shadow: #492de2 4px 4px 10px;
  letter-spacing: 2px;
  .titleBgLeft {
    width: 60px;
    height: 60px;
    display: block;
  }
  .titleBgRight {
    width: 44px;
    height: 66px;
    display: block;
  }
  span {
    position: relative;
    z-index: 999;
    padding: 0 70px;
  }
}
.formBoxMain {
  padding: 0 40px 40px;
  .formItem {
    height: 80px;
    padding: 0 20px;
    background: #c7bafc;
    margin-bottom: 25px;
    border-radius: 10px;
    border: 1px solid #c18781;
    input {
      width: 100%;
      height: 80px;
      border: none;
      background: none;
      color: #666666;
      font-size: 32px;
    }
  }
  .formBtn {
    height: 80px;
    background: #c7bafc;
    margin-bottom: 25px;
    border-radius: 10px;
    border: 1px solid #c18781;
    text-align: center;
    display: block;
    line-height: 80px;
    font-size: 36px;
    color: #666;
  }
}
</style>