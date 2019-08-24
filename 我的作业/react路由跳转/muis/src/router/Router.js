import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import recommend from '../component/recommend'
import ranking from '../component/ranking'
import search from '../component/search'

class Router extends Component{
    render(){
        return(
            <Switch>
               <Route exact path='/' component={recommend}></Route>
               <Route path='/ranking' component={ranking}></Route>
               <Route path='/search' component={search}></Route>
            </Switch>
        )
    }
}
export default Router