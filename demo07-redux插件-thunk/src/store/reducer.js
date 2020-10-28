import {CHANGE_INPUT, ADD_INFO, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: ['aaaa', 'bbbb', 'cccc']
}
export default (state = defaultState, action) => {
    console.log(state, action)
    //记住：Reducer里只能接收state，不能改变state。
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_INFO) {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.list.splice(action.index, 1)
        return newState;
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝statec
        newState.list=action.list
        return newState;
    }
    return state
}