<template>
  <div id="app">
    <div class="mian-banner">
      <div class="mian-banner-box">
        <ul>
          <li class="mian-banner-list">
            <img src="../assets/img/图层 2.jpg" alt />
          </li>
        </ul>
      </div>
    </div>
    <div class="mian-search" v-show="seachShow<1">
      <form id="top-search-form" action="#">
        <input class="mian-search-inp" type="text" placeholder="Montagne jeunesse" />
        <span>
          <img src="../assets/img/search.png" alt />
        </span>
      </form>
    </div>

    <div class="mian-shopping">
      <div class="seckill commodity" :key="index+'w'" v-for="(item,index) in arr">
        <div class="seckill-title-box Commodity-title">
          <img class="commodity-icon" :src="imgArr[index].path" />
          <h2 class="seckill-h2">{{item.name}}</h2>
        </div>
        <div class="seckill-commodity merchandise">
          <ul>
            <li
              class="seckill-list commodity-li"
              :key="indexs+'q'"
              v-for="(items,indexs) in item.list"
              @click="toStore(items.id)"
            >
              <img v-lazy="items.thumbnail" ref="imgs" />
              <div class="seckill-describe describe">
                <span class="price">&yen;{{items.reduct_price}}</span>
                <span class="or-price">
                  <del>&yen;{{items.original_price}}</del>
                </span>
                <p>{{items.name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Tab type="0"></Tab>
    <div class="goTop" @click="goTop" v-show="showTop>0">
      <i class="iconfont icon-icon-test3"></i>
    </div>
  </div>
</template>
<script>
import Tab from "../tab/tabPage";
import sUrl from "../urlConfig";
import { Indicator } from "mint-ui";

export default {
  name: "Index",
  data() {
    return {
      arr: [],
      newArr: [],
      imgArr: [
        { path: require("../assets/img/hot.png") },
        { path: require("../assets/img/baby.png") },
        { path: require("../assets/img/meizhuang.png") },
        { path: require("../assets/img/furniture.png") },
        { path: require("../assets/img/food.png") },
        { path: require("../assets/img/airplane.png") }
      ],
      seachShow: 0,
      showTop: 0
    };
  },
  methods: {
    goTop() {
      var timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;

        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    handleScroll() {
      var top = document.documentElement.scrollTop;
      var clientH = window.innerHeight;
      var scrollH = document.body.scrollHeight;
      if (top + clientH == scrollH) {
        this.showTop = 1;
      } else {
        this.showTop = 0;
      }
      top > 10 ? (this.seachShow = 1) : (this.seachShow = 0);
    },
    toStore(id) {
      this.$router.push({
        path: "/store",
        query: {
          id: id
        }
      });
    }
  },
  components: {
    Tab
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    this.axios.get(sUrl.sUrl + "/getIndexData")
    
      .then(res => {
        if (res.data.code == 200 && res.data.success) {
          this.arr = res.data.data;
          console.log(res.data)
          Indicator.close();
        }
       
      })
      
      .catch(err => {
        
        Indicator.close();
      });
     
  }
};
</script>
<style lang="">
.goTop {
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #999;
  position: fixed;
  bottom: 100px;
  right: 10px;
  white-space: normal;
  font-size: 34px;
  font-weight: 100;
  transition: all 1s;
  background: #fff;
}
.goTop i {
  font-size: 30px;
  text-align: center;
  position: absolute;
  top: 4px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
