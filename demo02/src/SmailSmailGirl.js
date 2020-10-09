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
                    <input id='karma' value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <div><SmailSmailGirlItem key={index + item} content={item} index={index} deleteItem={this.deleteItem.bind(this)}/></div>
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
            inputVal: e.target.value
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
}

export default SmailSmailGirl