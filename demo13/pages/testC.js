import {useState} from "react";

function testC() {
    const [color, setColor] = useState('blue')
    const changeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue')
    }

    return (
        <>
            <div>testC</div>
            <div>
                <button onClick={changeColor}>改变颜色</button>
            </div>
            <div className="karma">karma</div>
            {/*Style JSX语法*/}
            <style jsx>
                {`
                    div{color:${color};},
                    // .karma{color:red}
                `}
            </style>
        </>
    )
}

export default testC