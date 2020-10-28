import {CHANGE_INPUT, ADD_INFO, DELETE_ITEM, GET_LIST} from './actionTypes'

export const changeInput = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const clickBtn = () => ({
    type: ADD_INFO
})

export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
})

// export const getListAction = (list) => ({
//     type: GET_LIST,
//     list
// })

export const getList = ()=>({
    type: GET_LIST
})


// export const getList = () => {
//     return (dispatch) => {
//         Axios.get('https://www.easy-mock.com/mock/5f96cc6134c55d14fda96ea1/example/query').then((res) => {
//             const action = getListAction(res.data.data.list)
//             dispatch(action)
//         })
//     }
// }