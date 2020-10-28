import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'   //引入saga
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();   //创建saga中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
    reducer,
    enhancer
) // 创建数据存储仓库
sagaMiddleware.run(mySaga)
export default store