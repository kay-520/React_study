import React from "react";
import ReactDOM from 'react-dom';
import Example from "./Example";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Example6 from "./Example6/Example6";
import Example7 from "./Example7";
import Example8 from "./Example8";
import Example9 from "./Example9";

//JSX js+xml 虚拟dom
//1.有状体组件
// ReactDOM.render(<Example/>, document.getElementById("root"));

//2.React Hooks写法
// ReactDOM.render(<Example1/>, document.getElementById("root"));

//3.useState是react自带的一个hook函数，它的作用是用来声明状态变量。
// ReactDOM.render(<Example2/>, document.getElementById("root"));

//4.useEffect  代替生命周期函数 componentDidMonut和componentDidUpdate 并且是异步执行的
// ReactDOM.render(<Example3/>, document.getElementById("root"));

//5.useContext  可访问全局状态，避免一层层的传递状态。
// ReactDOM.render(<Example4/>, document.getElementById("root"));

//6.useReducer 接收两个参数，一个是状态，一个用来控制业务逻辑的判断参数 然后通过action 的传递 控制逻辑
// ReactDOM.render(<Example5/>, document.getElementById("root"));

//6.useReducer代替Redux案例
// ReactDOM.render(<Example6/>, document.getElementById("root"));

//7.useMemo 解决使用React hooks产生的无用渲染的性能问题
// ReactDOM.render(<Example7/>, document.getElementById("root"));

//8.useRef 获取Dom元素和保存变量
// ReactDOM.render(<Example8/>, document.getElementById("root"));

//9.自定义Hooks函数获取窗口大小
ReactDOM.render(<Example9/>, document.getElementById("root"));