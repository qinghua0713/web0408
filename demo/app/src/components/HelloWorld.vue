<template>
  <div class="hello">
    <ul>
      <li
        @mouseenter="mouseenter($event)"
        :class="current_index == index ? 'bg_f':''"
        :data-index="index"
        v-for="(item,index) in data"
        :key="index"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      data: ["首页", "列表", "微信好友", "QQ好友"],
      current_index: 0
    };
  },
  methods: {

  },
  mounted() {


  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg_f {
  background: #fff !important;
  color: #000 !important;
}
ul {
  background: #333;
  list-style: none;
  overflow: hidden;
}
li {
  height: 50px;
  width: 100px;
  line-height: 50px;
  text-align: center;
  float: left;
  background: #000;
  color: #fff;
}
body {
    background-color: #193c6d;
    filter: progid: DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#003073', endColorstr='#029797');
    background-image: url(//img.alicdn.com/tps/TB1d.u8MXXXXXXuXFXXXXXXXXXX-1900-790.jpg);
    background-size: 100%;
    background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0, #003073), color-stop(100%, #029797));
    background-image: -webkit-linear-gradient(135deg, #003073, #029797);
    background-image: -moz-linear-gradient(45deg, #003073, #029797);
    background-image: -ms-linear-gradient(45deg, #003073 0, #029797 100%);
    background-image: -o-linear-gradient(45deg, #003073, #029797);
    background-image: linear-gradient(135deg, #003073, #029797);
    text-align: center;
    margin: 0px;
    overflow: hidden;
}
</style>
