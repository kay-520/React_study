import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './index.css'
import Video from "./page/Video";
import Indexs from "./page/Indexs";
import Work from "./page/Work";

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/video/">视频教程</Link></li>
                        <li><Link to="/work">技能</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/" exact component={Indexs}/>
                    <Route path="/video/" component={Video}/>
                    <Route path="/work/" component={Work}/>
                </div>
            </div>

        </Router>
    )
}

export default AppRouter;