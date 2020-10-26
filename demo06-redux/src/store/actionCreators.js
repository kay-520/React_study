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

export const getList = (list) => ({
    type: GET_LIST,
    list
})