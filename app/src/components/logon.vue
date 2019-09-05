<template>
  <div id=" app" class="logon-page">
    <div class="logon-top">
      <span class="return-icon">&lt;</span>
      <span class="logon">登录</span>
      <span class="register" @click="clickMe">注册</span>
    </div>
    <div class="logon-box">
      <form id="logon-form" action method="post">
        <label>手机号：</label>
        <input v-model="user.phone" type="text" />
        <hr />
        <label>密码：</label>
        <input v-model="user.password" type="password" />
        <hr />
        <label class="forget-psd">忘记密码</label>
        <br />
        <input class="logon-btn" @click="login" type="button" value="登录" />
      </form>
    </div>
  </div>
</template>
<script>
import sUrl from "../urlConfig";
import { Indicator,Toast } from "mint-ui";
import{mapMutations} from 'vuex'
export default {
  name: "logon",
  data() {
    return {
      user: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
      ...mapMutations(['setNickname']),
    seta() {
      console.log(this.user);
    },
    clickMe() {
      this.$router.push({
        path: "/register"
      });
    },
    login() {
      var _this = this;
      var verifyTel = /^1(3|4|5|7|8)\d{9}$/;
      var verifyPsd = /^[a-zA-Z0-9]{6,18}$/;
      if (
        verifyTel.test(_this.user.phone) &&
        verifyPsd.test(_this.user.password)
      ) {
            Toast({
          message: "登录成功",
          position: "top",
          duration: 1000
        });
          _this.setNickname(_this.user.phone)
        sessionStorage.setItem("phone", _this.user.phone);
        sessionStorage.setItem("password", _this.user.password);
          setTimeout(() => {
               _this.$router.push({
          path: "/personalCenter"
        });
          }, 1600);
      } else if(this.user.phone==''||this.user.password==''){
          Toast({
          message: "账号与密码不能为空",
          position: "top",
          duration: 2000
        });
        return false;
      }
      _this.axios
        .get(sUrl.sUrl + "/login", { params: _this.user })
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    }
  },
  mounted() {}
};
</script>
<style lang="">
</style>

