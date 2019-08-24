<template>
      <div id=" app" class="register-page   logon-page">
        <div class="logon-top">
            <span class=" return-icon" @click="lickMe">
                &lt;</span> 
                <span class="logon">注册
            </span>
            <span class="register">登录</span>
        </div>
        <div class="logon-box">
            <form id="logon-form" action="" method="post">

                <label>手机号：</label> <input type="text">
                <hr>
                <label>密码：</label> <input type="password">
                <hr>
                <label>验证码：</label> <input type="password">
                  <span class="send-msg ">点击获取</span>
                <hr>
                  <input class="next-step  logon-btn" type="submit" value="下一步"><br>
                  <input type="checkbox"><label>我已阅读并同意使用条款和隐私政策</label>
            </form>
        </div>

    </div>
</template>
<script>

export default {
  name: "register",
  data() {
    return {
      
    }
  },
  methods: {
    lickMe(){
      this.$router.push({
        path:'/logon'
      })
    }
  },
};
</script>
<style lang="">




</style>