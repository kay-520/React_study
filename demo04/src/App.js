import React, {Component} from "react";
import axios from 'axios'

class App extends Component {
    //----------------Initialization初始化阶段----------------
    constructor(props) {
        super(props);
        console.log('constructor----执行')
    }

    componentDidMount() {
        axios.get(' https://www.easy-mock.com/mock/5f807b3446477f19b2848ee5/example/mock')
            .then((res) => {
                console.log('axios 获取数据成功：' + JSON.stringify(res))
                this.setState({
                    list:res.data.data
                })
                console.log('赋值之后---axios 获取数据成功：' + JSON.stringify(this.state.list))
            })
            .catch((error) => console.log(error))

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
}

export default App