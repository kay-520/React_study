import React from "react";
import ReactDOM from 'react-dom';
import ToList from "./ToList";
import {Provider} from "react-redux";
import store from "./store";

const App = (
    <Provider store={store}>
        <ToList/>
    </Provider>
)
//JSX js+xml 虚拟dom
ReactDOM.render(App, document.getElementById('root'));

