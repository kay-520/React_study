import React, {useState} from "react";

function Example2() {
    //React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
    const [count, addCount] = useState(0)
    const [sex, setSex] = useState('男')
    const [age, setAge] = useState(18)
    return (
        <div>
            <p>You clicked {count} times</p>
            <p>性别：{sex}</p>
            <p>年龄：{age}</p>
            <button onClick={() => {
                addCount(count + 1)
            }}>Click me
            </button>
        </div>
    )

}

export default Example2