import React, {useReducer} from "react";

function Example5() {
    const [count, dispathch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)
    //useReducer第二个参数是初始值

    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={() => dispathch('add')}>加</button>
            <button onClick={() => dispathch('sub')}>减</button>
        </div>
    )
}

export default Example5

