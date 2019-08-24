import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import App from '../App'
import index from '../components/index'
import logon from '../components/logon'
import detailPage from '../components/detailPage'
class Router extends Component{
    render(){
        return(
            <Switch>
                 <Route exact path='/' component={index}></Route>
                 <Route exact path='/logon' component={logon}></Route>
                 <Route exact path='/detailPage' component={detailPage}></Route>

            </Switch>
        )
    }
}
export default Router