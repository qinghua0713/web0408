import React, { Component } from 'react'
import '../font-icon/iconfont.css'
import TopNav from '../topNav/topNav.js'
import '../css/index.css'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'
import {withRouter} from 'react-router-dom'

class index extends Component {
  constructor() {
    super()

    this.state = {
      getHomeData: "",

    }
  }
  render() {
    return (

      <div className="App">
        <TopNav />
     
        <div className='mian-cont'>
          <div className='left-cont'>
            <div className='banner swiper-container '>
              <ul className='swiper-wrapper banner-list'>
                {
                  (function (_this) {
                    if (_this.state.getHomeData.swpierImg) {
                      var arr = []

                      _this.state.getHomeData.swpierImg.map((item, index) => {
                        arr.push(
                          <li className='swiper-slide' key={item}>
                            <a>
                              <img src={item} />
                            </a>

                          </li>
                        )
                      })

                      return arr
                    }
                  })(this)
                }





              </ul>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-pagination"></div>
            </div>
            <ul className='note-list'>

              {
                (function (_this) {
                  if (_this.state.getHomeData.articleList) {
                    var arr = [];

                    _this.state.getHomeData.articleList.map((item, index) => {
                      arr.push(
                        <li onClick={_this.GoDetail} key={item.id} className='note-items'>
                          <div className='content'>
                            <a className='title'>
                              {item.title}
                              {console.log(item.title)}
                            </a>
                            <p className='abstract'>
                              {item.desc}
                            </p>
                            <div className='mate'>
                              <span className='jsd-meta'>
                                <i className='iconfont icon-icon_star'>4.3</i>
                              </span>
                              <a>倒不了的dota</a>
                              <a>
                                <i className='iconfont icon-icon_message'>2</i>
                              </a>
                              <a>
                                <i className='iconfont icon-jushoucanggift'>20</i>
                              </a>
                            </div>
                          </div>
                          <a className='right-img'>
                            <img src={"https:" + item.imgUrl} />
                          </a>

                        </li>
                      )

                    })
                    return arr;
                  }
                })(this)
              }

            </ul>
            <div className='more'>
              <a>阅读更多</a>
            </div>
          </div>

          <div className='right-cont'>
            <div className='board'>
              <a>
                <img src='//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png' />
              </a>
              <a>
                <img src='//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png' />
              </a>
              <a>
                <img src='//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png' />
              </a>
              <a>
                <img src='//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png' />
              </a>
            </div>
            <div className='er-wei-ma'>

              <a>
                <img src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' />
              </a>
              <div className='info'>
                <span>下载简书手机App<i className='iconfont icon-icon-test6'></i></span><br />
                <span>随时随地发现和创作内容</span>
              </div>

            </div>
            <div className='recommended-authors'>
              <div className='authors-title'>
                <span>推荐作者</span>
                <a>
                  <i className='iconfont icon-icon_roundclose_fill'>换一批</i>
                </a>
              </div>
              <ul className='authors-list'>
                <li className='authors-items'>
                  <a className='authors-portrait'>
                    <img src='//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
                  </a>
                  <a className='authorsName'>简书大学堂</a><br />
                  <a className='attention '>+关注</a>
                  <span> 写了1508.7k字 · 34.6k喜欢</span>
                </li>

              </ul>

              <a className='examine-more'>查看全部<i className='iconfont icon-icon-test6'></i></a>

            </div>
          </div>
        </div>
        <footer className='AboutUs'>
          <div className='AboutUs-list'>
            <a>关于我们</a>
            <em>.</em>
            <a>联系我们</a>
            <em>.</em>
            <a>加入我们</a>
            <em>.</em>
            <a>简书出版</a>
            <em>.</em>
            <a>品牌与徽标</a>
            <em>.</em>
            <a>帮助中心</a>
            <em>.</em>
            <a>合作伙伴</a>
          </div>
          <div className='icp'>
            <span>
              ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
              </span>
            <a>
              <img src='//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png' />
            </a><br />
            <a>
              沪公网安备31010402002252号 /
              <img src='//cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png' />
            </a>
            <span>
              简书网举报电话：021-34770013 /
               <a>
                <img src='//cdn2.jianshu.io/assets/web/fanzha-10518f0f6b33635180b190975ae68ca6.jpg' />
              </a>
            </span>
            <span>
              亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /
              <a>
                <img src='//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png' />
              </a>
            </span>
          </div>
        </footer>
      </div>
    )
  }

  getHomeData1 = () => {
    var _this = this
    axios.get('/api/home.json')
      .then(res => {
        _this.setState({
          getHomeData: res.data.data
        },
          () => {
            new Swiper('.swiper-container', {
              loop: true,
              autoplay: {
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              autoplay: {
                delay: 4000,
              },
            })
          }
        )

      })
  }
  GoDetail=()=>{
    this.props.history.push('/detailPage')
    console.log('我去')
  }
 
  componentDidMount() {
    this.getHomeData1()
  }
}
export default  withRouter(index)