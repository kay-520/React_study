import React from "react";
// import Head from 'next/head'
import MyHeader from "../components/MyHeader";
import '../styles/test.css'
import {Button} from "antd";

//单个页面上加上Head标签
function Header(){
    return (
        <>
            {/*<Head>*/}
            {/*    <title>这是title</title>*/}
            {/*    <meta charSet='utf-8' />*/}
            {/*</Head>*/}

            <MyHeader/>
            <div>Header page</div>
            <div><Button>按钮</Button></div>
        </>
    )
}
export default Header