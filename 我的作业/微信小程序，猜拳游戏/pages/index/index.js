//index.js
//获取应用实例
const app = getApp()

var timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    text: "",
    pcImg: "../../images/shitou.png",
    userImg: "../../images/wenhao.png",
    imgUrl: ["../../images/jiandao.png", "../../images/shitou.png", "../../images/bu.png"],
    flag: true

  },
  //改变 pcImg的图片地址 
  changeUrl: function () {

    // console.log(1111111);
    let that = this;
    let num = 0;
    let len = this.data.imgUrl.length;
    //先清除定时器
    clearInterval(timer)

    timer = setInterval(function () {


      num++;// 0 1 1 1

      //判断num超出2
      if (num >= len) {

        num = 0

      }


      //设置pcImg值

      that.setData({

        pcImg: that.data.imgUrl[num]

      })

    }, 100)


  },

  chuquan: function (e) {

    if (this.data.flag) {


      // console.log(e);
      //天津的著名包子品牌
      //点击出拳的时候 清除定时器


      clearInterval(timer)
      console.log(e);
      var imgId = e.target.id
      var str = "";//结果
      console.log(imgId);

      //改变userImg 的图片地址

      this.setData({

        userImg: this.data.imgUrl[imgId]
      })
      //用户出拳的图片是谁

      var user = this.data.userImg



      //pc出拳的地址

      var pc = this.data.pcImg

      console.log(pc, user);


      if (pc == user) {
        str = "平局"
      } else if (pc == "../../images/jiandao.png" && user == "../../images/shitou.png" || pc == "../../images/bu.png" && user == "../../images/jiandao.png" || pc == "../../images/shitou.png" && user == "../../images/bu.png") {

        str = "你赢了";
        //赢得的次数+1
        this.data.number++

      } else {
        str = '你输了';
      }

      //赋值

      this.setData({

        text: str,
        number: this.data.number,
        flag: false

      })

    } else {
      this.setData({

        text: "滚犊子"
      })

    }

  },

  again: function () {


    //恢复到初始状态

    this.changeUrl();

    this.setData({

      userImg: "../../images/wenhao.png",
      text: "",
      flag: true

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //调用定义的changeUrl方法
    this.changeUrl();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})