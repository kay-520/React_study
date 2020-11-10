import React, {useState, createContext, useContext} from "react";

const CountContext = createContext()

function Example4() {
    //React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
    const [count, addCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                addCount(count + 1)
            }}>Click me
            </button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

function Counter() {
    //子组件使用useContext接收变量 参数传入父类createContext的变量名
    const count = useContext(CountContext)
    return <h2>{count}</h2>
}

export default Example4

