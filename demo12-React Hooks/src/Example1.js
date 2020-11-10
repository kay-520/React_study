import React, {useState} from "react";

function Example1() {
    const [count, addCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                addCount(count + 1)
            }}>Click me
            </button>
        </div>
    )

}

export default Example1