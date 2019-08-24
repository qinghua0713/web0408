import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import '../font-icon/iconfont.css'
import '../css/topNav.css'
import '../fonticon2/iconfont.css'
import Router from '../router/Router'

class topNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
     background:'none',
     isTrue:false,
     isHover:false,
     transform:"rotate(360deg)",
     keyword:['区块链','小程序','VUE','毕业','PHP','故事','flutter','理财','美食','投稿','沐风杂谈','javascript',
     'java','web','微店','C++','GO语言','易语言','英语','ES6','程序员','typesctipy','React','微信','简书下载'],
      MathNum:''
    }
  }
  componentDidMount(){
    this.clickRotate();
  }
  inputonfocus=(event)=> {
    event.target.style.width = 300+'px'
    this.setState({
      isTrue:true,
     background:'#999',
    
    })
  }
  inputonbluer = (event)=>{
    event.target.style.width = 160+'px'
   
    this.setState({
      isTrue:false,
      background:'none'
    })
  }
  Boxonhover = (blor)=>{
    this.setState({
      isHover:blor,
      
    })
  }
  clickRotate=()=>{
   var  MathNum=[];
    var  num=Math.floor(Math.random()*(12-6)+6)
    var arr = JSON.parse(JSON.stringify(this.state.keyword));
    for(var i = 0;i<num;i++){
      var index = parseInt(Math.random()*arr.length)
      var val = arr[index];
      MathNum.push(<span key={val}>{val}</span>);
      arr.splice(index,1);
    }
   console.log(this.state.keyword)
   var str = this.state.transform + "rotate(360deg)";
     this.setState({
      transform:str,
      MathNum:MathNum
     })
  }
 
  render() {
    return (
      <div>
    
        <nav className='navber' role='navigation'>
          <div className='top-flex'>
            <Link to='/' className='logo-link'>
              <img alt='' className='logo' src='//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png' />
            </Link>
            <ul className='nav-list'>
              <li>
                <span>写作</span>
              </li>
              <li>
                <span>发现</span>
              </li>
              <li>
                <span>消息</span>
              </li>
              <li>

                <form className='nav-search'>
                  <input className='search-inp'onFocus={this.inputonfocus} onBlur={this.inputonbluer}  type='text' placeholder='搜索'></input>
                  <i style={{background:this.state.background}} className='iconfont icon-icon-test2'></i>
                </form>
              </li>
            </ul>
            <div className='my-conter'>
              <div className='icon-font'>
                <a href=''><i className='iconfont icon-jushoucanggift'></i></a>
              </div>
              <div className='icon-font'>
                <a href=''><i className='iconfont icon-erweima'></i></a>
              </div>
              <div onClick={this.GoLogon}  className='my-portrait'>
                <Link to='/logon' className='portrait'>
                  <img alt='' src='//upload.jianshu.io/users/upload_avatars/18800393/34fcb2b2-f338-4373-83c6-38a95a79c6fa?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120' />
                </Link>
                <i className='iconfont icon-icon-test5'></i>
              </div>

            </div>

            <a href='' className='write-essay'>
              <i className='iconfont icon-icon_addperson'>&nbsp;写文章</i>
            </a>


          </div>
        </nav>
   {(function(_this) {
   
     if(_this.state.isTrue||_this.state.isHover){
        return (
            <div  className='hot-search' onMouseLeave={()=>{_this.Boxonhover(false)}} onMouseOver={()=>{_this.Boxonhover(true)}}>
            <span id='triangle-up'></span>
            <div className='hot-title'>
              <span>热门搜索</span>
              <span className='refresh'>
                <i style={{transform:_this.state.transform,WebkitTransform:_this.state.transform}} className='iconfont icon-shuaxin rotate'></i>
                <i onClick={_this.clickRotate}>换一批</i>
                </span>
            </div>
            <div className='hot-keyword'>
              {_this.state.MathNum}
            </div>
          </div>
        )
     }
   })(this)
        
   }
      </div>
    )
  }
  GoLogon=()=>{
    this.props.history.push({pathName:'/logon'})
    console.log(1)
 }

}
export default  withRouter(topNav)