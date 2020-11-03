import React from "react";
import {Route, Link} from "react-router-dom";
import ReactPage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

function Video() {
    return (
        <div>
            <div><h3>视频教程</h3></div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/video/react">React教程</Link>
                    </li>
                    <li>
                        <Link to="/video/vue">Vue教程</Link>
                    </li>
                    <li>
                        <Link to="/video/flutter">Flutter教程</Link>
                    </li>
                </ul>
            </div>
            <Route path="/video/react/" exact component={ReactPage}/>
            <Route path="/video/vue/" component={Vue}/>
            <Route path="/video/flutter/" component={Flutter}/>
        </div>
    )
}

export default Video