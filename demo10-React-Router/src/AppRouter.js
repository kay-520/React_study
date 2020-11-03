import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Indexs from "./page/Indexs";
import List from "./page/List";
import Home from "./page/Home";

function list() {
    return <h2>listy页面</h2>
}

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            {/*exact 精准匹配url*/}
            <Route path={'/'} exact component={Indexs}/>
            <Route path={'/list/:id'} exact component={List}/>
            <Route path="/home/" component={Home} />
        </Router>
    )
}

export default AppRouter