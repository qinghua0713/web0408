import React,{Component} from 'react'
import '../css/search.css'
class search extends Component{
    render(){
        return(
            <div className='search-box'>
                <div className='search-bar'>
                     <div className='search-cont'>
                             <input type='search' placeholder='搜索歌曲、歌单、专辑'/>
                     </div>
                </div> 
                <div className='js_hot_keys'>
                    <h3 className='hotsearch'>热门搜索</h3>
                    <div className='result_tags'>
                        <span>声入人心</span>
                        <span>TAYLOR SWIFT THE ARCHER </span>
                        <span>夜空中最亮的星 </span>
                        <span>LOST RIVERS </span>
                        <span>亲爱的,热爱的 </span>
                        <span>想死却又不敢 </span>
                        <span>无名之辈 </span>
                        <span>爱上未来的你 </span>
                        <span>出现又离开 </span>
                        <span>差不多姑娘 </span>
                        <span>关不上的窗 </span>
                      
                    </div>
                </div>
            </div>
        )
    }
}
export default search 