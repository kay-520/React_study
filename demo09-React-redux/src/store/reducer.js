const defaultState = {
    inputValue: '',
    list: ['aaaa', 'bbbb', 'cccc']
}
export default (state = defaultState, action) => {
    console.log(state, action)
    //记住：Reducer里只能接收state，不能改变state。
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addInfo') {
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}