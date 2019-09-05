<template>
  <div id="app">
    <keep-alive><!--缓存路由组件对象-->
    <router-view />
    </keep-alive>
  </div>
</template>

<script>
import publics from "./assets/js/public";
export default {
  name: "App"
};
</script>

<style>
@import url("./assets/css/public.css");
@import url("./assets/css/Index.css");
@import url("./assets/css/store.css");
@import url("./assets/css/pleaseLogin.css");
@import url("./assets/css/classify.css");
@import url("./assets/css/logon.css");
@import url("./assets/css/personalCenter.css");
@import url("./assets/css/publicPraise.css");
@import url("./assets/css/register.css");
@import url("./assets/css/shopping.css");
@import url('./font-icon/iconfont.css');
</style>
