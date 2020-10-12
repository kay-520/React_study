import React, {Component} from "react";
import 'antd/dist/antd.css'
import {Input, Button, List} from "antd";
import store from "./store";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInput = this.changeInput.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input style={{width: '250px', marginRight: '10px'}}
                           onChange={this.changeInput} value={this.state.inputValue}/>
                    <Button type={"primary"} onClick={this.clickBtn}>添加</Button>
                </div>
                <div>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>
                        )}
                    />
                </div>
            </div>

        );
    }

    changeInput(e) {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }

    clickBtn() {
        const action = {
            type: 'addInfo'
        }
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    deleteItem(index) {
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action)
    }


}

export default App