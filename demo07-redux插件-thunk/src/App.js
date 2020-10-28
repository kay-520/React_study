import React, {Component} from "react";
import 'antd/dist/antd.css'
import store from "./store";
import {changeInput, clickBtn, deleteItem, getList} from './store/actionCreators'
import AppUI from "./AppUI";

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
        const action = getList();
        store.dispatch(action);
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