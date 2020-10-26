import React, {Component} from "react";
import 'antd/dist/antd.css'
import {Input, Button, List} from "antd";
import store from "./store";
import {CHANGE_INPUT, ADD_INFO, DELETE_ITEM} from './store/actionTypes'
import {changeInput, clickBtn, deleteItem, getList} from './store/actionCreators'
import AppUI from "./AppUI";
import Axios from "axios";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInput = this.changeInput.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <AppUI
                changeInput={this.changeInput}
                inputValue={this.state.inputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }

    componentDidMount() {
        Axios.get('https://www.easy-mock.com/mock/5f96cc6134c55d14fda96ea1/example/query').then((res) => {
            console.log(res)
            store.dispatch(getList(res.data.data.list))
        })
    }

    storeChange() {
        this.setState(store.getState())
    }


    changeInput(e) {
        store.dispatch(changeInput(e.target.value))
    }

    clickBtn() {
        store.dispatch(clickBtn())
    }

    deleteItem(index) {
        store.dispatch(deleteItem(index))
    }


}

export default App