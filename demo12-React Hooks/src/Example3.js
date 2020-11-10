import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

function Example3() {
    //React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
    const [count, addCount] = useState(0)
    //相当于componentDidMount和componentDidUpdate 页面初始化执行和发生变化时执行
    //useEffect:异步执行  componentDidMount和componentDidUpdate:同步执行
    useEffect(() => {
        console.log(`useEffect--->${count} times`)
        return () => {
            console.log(`老弟，你点了${count} times`)
        }
        //useEffect第二个参数，当状态发生变化时，进行解绑
    }, [count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                addCount(count + 1)
            }}>Click me
            </button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/" component={List}/>
            </Router>
        </div>
    )

}

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Index页面')
        return () => {
            console.log('老弟，你走了!Index页面')
        }
    }, [])
    //useEffect第二个参数，当状态发生变化时，进行解绑
    return <h2>Index Page</h2>;
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
        return () => {
            console.log('老弟，你走了!List页面')
        }
    }, [])
    return <h2>List Page</h2>;
}

export default Example3

