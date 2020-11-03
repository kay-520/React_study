import React from "react";
import {Route, Link} from "react-router-dom";
import GetUp from "./work/GetUp";
import Sleep from "./work/Sleep";

function Work() {
    return (
        <div>
            <div><h3>技能</h3></div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/work/getup">起床</Link>
                    </li>
                    <li>
                        <Link to="/work/sleep">睡觉</Link>
                    </li>
                </ul>
            </div>
            <Route path="/work/getup/" exact component={GetUp}/>
            <Route path="/work/sleep/" component={Sleep}/>
        </div>
    )
}

export default Work