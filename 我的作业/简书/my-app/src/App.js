import React,{Component} from 'react'
import Router from './router/Router'
import {withRouter} from 'react-router-dom';
class App extends Component{
    render(){
        return(
            <div>
            
                <Router/ >
            </div>
        )
    }
}
export default withRouter(App)