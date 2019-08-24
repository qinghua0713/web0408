import React, { Component } from 'react'
import TopNav from '../topNav/topNav.js'
import '../css/detailPage.css'
import '../font-icon/iconfont.css'

class detailPage extends Component {
    render() {
        return (

            <div className='detailPage'>
                <TopNav />
                <div className='mian-detail'>
                    <div className='mian-active'>
                        <h1>《药神》里面最丑的黄毛是最帅的，现实中的他拥有着“神仙颜值”</h1>
                        <div className='author'>
                            <img src='//upload.jianshu.io/users/upload_avatars/15569637/87cfa617-81df-44ab-aae6-43b6bde575c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' />
                            <div className='author-release'>
                                <span className='author-Name'>文字剧社</span>
                                <img src='//upload.jianshu.io/user_badge/b67c298d-f020-4f89-aac6-0710bc0709ec' />
                                <span className='Focus-on'>+关注</span>
                                <div className='fans-Num'>
                                    <i className='live iconfont icon-icon_star'>6.6</i>
                                    <span>2019.01.23 10:33</span>
                                    <span>字数 302</span>
                                    <span>阅读 11068</span>
                                    <span>评论 29</span>
                                    <span>喜欢 59</span>
                                </div>
                            </div>
                        </div>
                        <div className='img-view'>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-8426c3b29bbdb45b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp' />
                            <div className='img-from'>图片发自简书App</div>
                            <p>不得不说《我不是药神》这一部电影真的是非常的好看相信很多的网友都在观看这部电影的时候泪洒电影院，不得不说的一个电影真的是非常的值得它得到的票房！</p>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-7207a05541d530b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp' />
                            <div className='img-from'>图片发自简书App</div>
                            <p>不过在这一个电影里面里面最丑的男主演黄毛也是让不少的网友调侃她是一个重情义的非主流但是在电影中的黄毛现实中其实是一个高颜值的型男！</p>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-515414cd4756a850.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/380/format/webp' />
                            <div className='img-from'>图片发自简书App</div>
                            <p>不得不说在《药神》里面饰演黄毛的角色叫做章宇他现实中的长相可以说是非常的帅气而且不少的网友都表示只要看了她的照片之后很难能够不喜欢他！</p>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-4ec4f6e564af5739.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/587/format/webp' />
                            <div className='img-from'>图片发自简书App</div>
                            <p>他现实中的长相完全可以说是拥有着神仙颜值而且颠覆了他在电影中的形象相信这样的一个男神一定会比蔡徐坤哪一种类型的更受女生的喜欢！对于章宇的颜值长相大家有没有被震惊到呢？欢迎评论区留言说出你们的看法！</p>

                        </div>
                        <div className='free-reward-panel'>
                            <p>如果觉得我的文章对你有帮助，请随意赞赏。您的支持将鼓励我继续创作！</p>
                            <button className='reward-btn'>赞赏支持</button>
                        </div>
                        <div className='show-foot'>
                            <i className='iconfont icon-icon_task_done'></i>
                            <span>每日精选</span>
                            <div className='right-notebook'>
                                <span>举报文章</span>
                                <span>© 著作权归作者所有</span>
                            </div>

                        </div>
                        <div className='follow-detail'>
                                <div className=' author-more author'>
                                    <img src='//upload.jianshu.io/users/upload_avatars/15569637/87cfa617-81df-44ab-aae6-43b6bde575c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' />
                                    <div className='author-release'>
                                        <span className='author-Name'>文字剧社</span>
                                        <img src='//upload.jianshu.io/user_badge/b67c298d-f020-4f89-aac6-0710bc0709ec' />
                                        <span className='author-sex iconfont  icon-icon-test1'></span>
                                        <div className='fans-Num'>
                                            <i className='live iconfont icon-icon_star'>6.6</i>
                                            <span>2019.01.23 10:33</span>
                                            <span>字数 302</span>
                                            <span>阅读 11068</span>
                                            <span>评论 29</span>
                                            <span>喜欢 59</span>
                                        </div>

                                    </div>
                                    <div className='FocusOn-Big-btn'>+关注</div>
                                </div>
                                <div className='signature'>
                                人间至味是清欢！
                                </div>
                        </div>
                        <div className='meta-bottom'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default detailPage