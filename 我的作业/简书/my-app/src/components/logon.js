import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../font-icon/iconfont.css'
import '../css/logon.css'
import axios from 'axios'
import '../fonticon2/iconfont.css'
class logon extends Component {
    constructor() {
        super()
        this.state = {
            getLoginData: '',
            value: '',
            psd: '',
            ischeck: false,
            loginMsg: '',
            opacity:0
        }
    }
    render() {
        return (

            <div className='logonPage clearfloat'>

                <a ref='/' className='logo1'><img src='//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png' /></a>
                <div className='logon-cont clearfloat'>
                    <div className='from-tab'>
                        <a className='tab-items current-logon'>登录</a>
                        <i>·</i>
                        <a className='tab-items'>注册</a>
                    </div>
                    <form action='' id='logon-from' ref='inpValue'>
                        <div className='logon-write'>
                            <i className='iconfont icon-yonghu'></i>
                            <i className='iconfont icon-mima'></i>
                            <input id='user' type='text' onChange={this.writeValue} value={this.state.value} placeholder='手机号或邮箱' />
                            <input id='psd' type='password' onChange={this.writePsd} value={this.state.psd} placeholder='密码' />
                        </div>

                        <div className='logon-option'>
                            <div className='checked-btn'>
                                <input type='checkbox' onChange={this.SetCheck} checked={this.state.ischeck} />
                                <span>&nbsp;记住我</span>
                                <span className='logonIssue '>登录遇到问题?</span>
                            </div>

                        </div>
                        <input  onClick={this.loginBtn} type='button' id='logon-btn' value='登录' />
                        <div className='loginMsg' style={{opacity:this.state.opacity}}>{this.state.loginMsg}</div>
                    </form>
                    <div className='elseAccount'>
                        <div className='elseTitle'>
                            <i></i>
                            <span>社交账号登录</span>
                            <i></i>
                        </div>
                        <div className='elseItem'>
                            <i className='iconfont icon-weibo'></i>
                            <i className='iconfont icon-weixin'></i>
                            <i className='iconfont icon-qq'></i>
                            <i className='iconfont icon-douban'></i>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
    logon = () => {
        var _this = this
        axios.get('/api/login.json')
            .then((res) => {
                console.log(res.data)
                _this.setState({
                    getLoginData: res.data
                })
            })
    }
    writeValue = (e) => {
        this.setState({
            value: e.target.value,
            psd: ''
        })
    }
    writePsd = (e) => {
        this.setState({
            psd: e.target.value
        })
    }
    SetCheck = (e) => {

        var ischeck = this.state.ischeck

        if (!ischeck) {
            var fromChild = this.refs.inpValue.getElementsByTagName('input')
            console.log(fromChild)
            if (!window.localStorage) {
                alert('浏览器不支持localstorage')
            } else {
                localStorage.setItem('user', fromChild[0].value)
                localStorage.setItem('psd', fromChild[1].value)
                localStorage.setItem('isTrue', fromChild[2].checked)
            }

        }

        this.setState({
            ischeck: e.target.checked
        })
    }
    getLocalStorage = () => {
        var fromChild = this.refs.inpValue.getElementsByTagName('input')
        console.log(this.state.psd)
        var checked = localStorage.getItem('isTrue') == 'false' ? false : true;
        fromChild[2].checked = checked
        fromChild[0].value = localStorage.getItem('user')
        fromChild[1].value = localStorage.getItem('psd')
    }
    loginBtn = () => {
        var fromChild = this.refs.inpValue.getElementsByTagName('input')
        var Value = fromChild[0].value
        var psd =   fromChild[1].value
        var myreg = /^1(3|4|5|7|8)\d{9}$/;
        var reg = new RegExp("^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$"); //正则表达式
        var regPsd = /^[a-zA-Z0-9]{6,18}$/;
    
        var time=setTimeout(() => {
            this.setState({
                opacity:0

            })
          
        }, 2000);
        console.log(psd)
        if (!(myreg.test(Value) ||reg.test(Value) )||(Value == ''||psd=='') || !regPsd.test(psd)) {
            if(Value == ''||psd==''){
                this.setState({
                    loginMsg: '账号或密码不能为空',
                    opacity:1
                })
            }else{
                this.setState({
                    loginMsg: '账号或密码错误',
                    opacity:1
                })
            }
           
      
            time  = time
            return
        } else {
            
            this.setState({
                loginMsg: '登录成功',
                opacity:1,
              
             
            })
           
        }
     
    }
   
    componentDidMount() {
        this.logon() 
        setTimeout(this.getLocalStorage, 100)
      
      
    }
}
export default logon 