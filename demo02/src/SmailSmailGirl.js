import React, {Component, Fragment} from "react";
import './css/detal.css'
import SmailSmailGirlItem from "./SmailSmailGirlItem";

class SmailSmailGirl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            list: ['头部按摩', '拔罐']
        }
    }

    render() {
        return (
            <Fragment>
                {/* 正确注释的写法 */}
                {
                    //正确注释的写法
                }
                <div>
                    <label htmlFor='karma'>加入服务：</label>
                    <input id='karma' value={this.state.inputVal} ref={(input) => {
                        this.input = input
                    }} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <div><SmailSmailGirlItem key={index + item} content={item} index={index}
                                                            deleteItem={this.deleteItem.bind(this)}/></div>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        console.info(e.target.value)
        console.info(this)
        this.setState({
            inputVal: this.input.value
        })
    }

    //增加列表
    addList() {
        this.setState({
            //ES    语法
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        })
    }

    deleteItem(index) {
        console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

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
}

export default SmailSmailGirl