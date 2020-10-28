import React from "react";
import {connect} from 'react-redux'  //引入连接器


const ToList = (props) => {
    let {inputValue, inputChange, clickButton, list} = this.props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange.bind(this)}/>
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'changeInput',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton() {
            let action = {
                type: 'addInfo',
            }
            dispatch(action)
        }
    }
}

// eslint-disable-next-line no-undef
export default connect(stateToProps, dispatchToProps)(ToList)
//https://jspang.com/detailed?id=48#toc290