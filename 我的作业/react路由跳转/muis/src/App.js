import React, { Component } from 'react';
import { Link, Switch, NavLink, withRouter } from 'react-router-dom'
import Router from './router/Router'
import './css/App.css';
class App extends Component {
  render() {
    return (
      <div id='app'>
        <header className='top-box'>
          <div className='top-box-bd'>
            <img className='logo' src='//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000' />
            <a className='top-dow-btn'>下载app</a>
          </div>
        </header>
        <nav className='mod-nav '>
          <NavLink exact to='/' activeClassName='current'>推荐</NavLink>
          <NavLink to='/ranking' activeClassName='current'>排行榜</NavLink>
          <NavLink to='/search' activeClassName='current'>搜索</NavLink>
        </nav>
        
        <Router />
      </div>
    )
  }

}

export default withRouter(App);
