<!DOCTYPE html>
<template>
  <div id="app" class="store-page">
    <div class="banner-container">
      <swiper :options="swiperOption">
        <swiper-slide :key="index1+'q'" v-for="(item1,index1) in DetailsArr.swiperImgArr">
          <img :src="item1" alt />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
      <div class="operation-bar">
        <router-link to="/">
          <span>
            <img src="../assets/img/icon_back.png" />
          </span>
        </router-link>
        <router-link to>
          <span>
            <img src="../assets/img/icon_menu.png" alt />
          </span>
        </router-link>
        <router-link to="/shopping">
          <span>
            <img src="../assets/img/icon_shopping.png" alt />
          </span>
        </router-link>
      </div>
    </div>
    <div class="detail_decoration">
      <div class="detail-commodity">
        <p>{{DetailsArr.name}}</p>
        <p>
          <img src="../assets/img/shocang.jpg" alt />
          <br />
          <span>收藏</span>
        </p>
      </div>
      <div class="detail-discounts">
        <span class="discount-price">
          <i>&yen;</i>
          <i>{{DetailsArr.reduct_price}}</i>
        </span>
        <span class="original-price">
          <i>{{((DetailsArr.allowance)*10).toFixed(1)}}</i>
          <i>折</i>
        </span>
        <span class="postage" v-show="DetailsArr.isFreeShip">包邮</span>
      </div>
      <div class="detail-assure">
        <span>
          <del>
            <i>&yen;</i>
            <i>{{DetailsArr.original_price}}</i>
          </del>
        </span>

        <span :key="index+'w'" v-for=" (item,index) in DetailsArr.describe">{{item}}</span>
      </div>
    </div>
    <div class="product-introduce-tab">
      <span :class="num==1?'tab-items current-tab':'tab-items'" @click="num=1">商品详细</span>
      <span :class="num==2? 'tab-items current-tab' : 'tab-items' " @click="num=2">买家口碑</span>
    </div>
    <div class="product-introduce" v-show="num==1">
      <img :src="item2" alt :key="index2+'e'" v-for="(item2,index2) in DetailsArr.shopDes" />
    </div>

    <div class="evaluate-tab" v-show="num==2">
      <span
        :key="index+'qq'"
        v-for="(item,index) in evaArr"
        :class="num1==index?'ev-items current':'ev-items'"
        @click="num1=index"
      >{{item}}</span>
    </div>

    <div class="evaluate-big" v-show="num==2">
      <div
        :key="index+'r'"
        v-for="(val,key,index) in DetailsArr.buyerReviews"
        class="evaluate-district"
      >
        <div
          class="evaluate-container"
          :key="index1+'t'"
          v-for="(item1,index1) in val"
          v-show="num1==index"
        >
          <div class="evaluate-items">
            <p class="user-evaluate">
              <span>{{item1.buyerName}}</span>
              <span>{{parseInt(item1.createTime) | formatDate}}</span>
            </p>
            <div class="evaluate-cont">
              <img :src="item2" alt :key="index2+'y'" v-for="(item2,index2) in item1.postImg" />
              <p>{{item1.postDescribe}}</p>
            </div>
            <p class="Adm-reply">
              <span>
                <i>管理员：</i>
                {{item1.adminReviews}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="shade-conta" v-show="isTrue">
      <div class="show-detail-sku">
        <div class="header">
          <p class="commodity-pic">
            <img :src="mini" alt />
          </p>

          <p class="commodity-pirce">
            &yen;
            <em>{{DetailsArr.reduct_price}}</em>
          </p>
          <p class="repertory">
            <span>
              库存
              <em>{{DetailsArr.total}}</em>件
            </span>
            <br />
            <span>请选者商品属性</span>
          </p>
          <p class="close-btn" @click="isTrue=!isTrue">
            <img src="../assets/img/关闭.jpg" alt />
          </p>
        </div>
        <div class="quantity">
          <span>购买数量</span>
          <p class="quantity-btn">
            <span @click="sub">-</span>
            <input type="number" @keyup="keyPress" @blur="keyPress" v-model.lazy="comQua" />
            <span @click="add">+</span>
          </p>
        </div>

        <div class="weight-size" :key="index+'l'" v-for="(item,index) in DetailsArr.buySelect">
          <h3>{{item.name}}</h3>
          <span
            :class="tabitems[index]==index1?'items current':'items'"
            :key="index1+'z'"
            v-for="(itme1,index1) in item.list"
            @click="tabcik(index,index1)"
          >{{itme1}}</span>
        </div>
      </div>
    </div>

    <div class="purchase-bar">
      <ul>
        <li class="total-price">
          <span>总价</span>
          <span>
            <i>&yen;</i>

            <i>{{isTrue==true?DetailsArr.reduct_price*comQua:0}}</i>
          </span>
        </li>
        <li class="addCar">
          <span @click="isTrue==true?goShop():isTrue=true ">加入购物车</span>
        </li>
        <li class="immediately-buy">
          <span @click="isTrue=true  ">立即购买</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import sUrl from "../urlConfig";
import { Toast } from "mint-ui";
import { mapState, mapMutations } from "vuex";
export default {
  name: "store",
  data() {
    return {
      DetailsArr: [],
      num: 1,
      num1: 0,
      mini: "",
      id: '',
       comQua:1,
      tabitems: [],
      isTrue: false,
      evaArr: ["全部评价", "好评", "差评", "晒单"],
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        loop: true,
        pagination: ".swiper-pagination"
      }
    };
  },

  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  methods: {
    keyPress(e) {
      this.comQua = e.target.value.replace(/[^1-9]+/g, "");
      if (this.comQua == "" || this.comQua == 0) {
        this.comQua = 1;
        console.log("正确");
      } else {
        console.log("错误");
      }
      if (
        e.keyCode == 190 ||
        e.keyCode == 69 ||
        e.keyCode == 189 ||
        e.keyCode == 40 ||
        e.keyCode == 32
      ) {
        this.comQua = 1;
      }
    },
    add() {
      this.comQua++;
    },
    sub() {
      this.comQua > 1 ? this.comQua-- : this.comQua;
    },
    goShop() {
      this.isTrue = false;
      var buySelect = [];
      if (this.comQua > Number(this.DetailsArr.total)) {
        this.isTrue = true;
        Toast({
          message: "库存不足",
          position: "",
          duration: 2000
        });
        return false;
      } else {
        Toast({
          message: "加入成功",
          position: "",
          duration: 2000
        });
      }
     
      for (var i = 0; i < this.tabitems.length; i++) {
        var val = this.DetailsArr.buySelect[i].list[this.tabitems[i]];
        var key = this.DetailsArr.buySelect[i].name;
        buySelect += key + val;
      }
    
           this.$store.commit({
            type: "setShopCar",
            id: this.id,
            name: this.DetailsArr.name,
            num: parseInt(this.comQua),
            price: this.DetailsArr.reduct_price * this.comQua,
            comImg: this.mini,
            buySelect: buySelect,
            isFreeShip : this.DetailsArr.isFreeShip
          });

    },

    tabcik(index, index1) {
      this.$set(this.tabitems, index, index1);
     
    },
    getDetails() {
      this.id = this.$route.query.id;
      this.axios
        .get(sUrl.sUrl + "/getDetails", {
          params: {
            pid: this.id
          }
        })
        .then(res => {
          if (res.data.code == 200 && res.data.success) {
            this.DetailsArr = res.data.data;
            this.mini = this.DetailsArr.swiperImgArr[0];
            console.log(res.data);
          }
          for (var i = 0; i < this.DetailsArr.buySelect.length; i++) {
            this.tabitems.push(0);
          }
        })
        .catch(err => {});
    }
  },
  computed: {},
  mounted() {
    this.getDetails();
  }
};
</script>
<style lang="">
.swiper-slide img {
  width: 100%;
  height: 4.4rem;
}
.evaluate-big {
  margin-bottom: 1.3rem;
}
.swiper-pagination {
  z-index: 120;
  width: 100%;
  margin-top: -0.5rem;
}
.swiper-pagination-bullet {
  margin-left: 0.2rem;
  background: #999;
}
.swiper-pagination-bullet-active {
  background: #ff9900;
}
</style>