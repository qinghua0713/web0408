<template>
      <div id=" app" class="logon-page">
        <div class="logon-top">
            <span class=" return-icon">
                &lt;</span> <span class="logon">登录
            </span>
            <span class="register" @click="clickMe">注册</span>
        </div>
        <div class="logon-box">
            <form id="logon-form" action="" method="post">

                <label>手机号：</label> <input type="text">
                <hr>
                <label>密码：</label> <input type="password">
                <hr>
                 <label  class="forget-psd">忘记密码</label>
                  <br>
                  <input class="logon-btn" type="submit" value="登录">
            </form>
        </div>

    </div>
</template>
<script>

export default {
  name: "logon",
  data() {
      return {
          
      }
  },
  methods: {
      clickMe(){
          this.$router.push({
              path:'/register'
          })
      }
  },
};
</script>
<style lang="">



</style>

