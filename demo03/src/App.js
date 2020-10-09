import React, {Component} from "react";

class App extends Component {
    //----------------Initialization初始化阶段----------------
    constructor(props) {
        super(props);
        console.log('constructor----执行')
    }
    //----------------Mounting挂载阶段----------------
    //页面state或props发生变化时执行
    render() {
        console.log('2-render---组件挂载中.......')
        return (
            <ul className="my-list">
                <li>{false ? 'karma520.com' : '大明的小屋'}</li>
                <li>I love React!!!!</li>
            </ul>
        );
    }
    //在组件即将被挂载到页面的时刻执行
    componentWillMount(){
        console.log('1-componentWillMount----在组件即将被挂载到页面的时刻执行')
    }
    //组件挂载完成的时刻执行
    componentDidMount(){
        console.log('3-componentDidMount----组件挂载完成的时刻执行')
    }

    //----------------Updation更新阶段---------------- 详细请参考demo02
    //组件发生改变前执行
    shouldComponentUpdate(){
        console.log('1-shouldComponentUpdate---组件发生改变前执行')
        return true
    }
    //shouldComponentUpdate返回true才会被执行
    componentWillUpdate(){
        console.log('2-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    //componentDidUpdate在组件更新之后执行
    componentDidUpdate(){
        console.log('3-omponentDidUpdate----组件更新之后执行')
    }
    //接收到父组件传递的值后执行，只针对于子组件使用
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps----接收到父组件传递的值后执行')
    }

    //----------------Unmounting销毁阶段----------------
    //当组件从页面中删除的时候执行
    componentWillUnmount(){
        console.log('child - componentWillUnmount')
    }

}

export default App