import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './index.css'
import Video from "./page/Video";
import Indexs from "./page/Indexs";
import Work from "./page/Work";

function AppRouter() {
    let routeConfig = [
        {path: '/', title: '首页', exact: true, component: Indexs},
        {path: '/video/', title: '视频教程', exact: false, component: Video},
        {path: '/work/', title: '技能', exact: false, component: Work}
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        {routeConfig.map((item, index) => {
                            return (
                                <li key={index}><Link to={item.path}>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="rightMain">
                    {routeConfig.map((item, index) => {
                        return (
                            <Route key={index} path={item.path} exact={item.exact} component={item.component}/>
                        )
                    })}
                </div>
            </div>

        </Router>
    )
}

export default AppRouter;