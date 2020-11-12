import React from 'react'
import Link from 'next/link'
import {withRouter} from "next/router";
import Axios from "axios";

const testA = ({router, list}) => (
    <>
        <div>testA page . {router.query.name} {list}</div>
        <Link href="/"><a>返回首页</a></Link>
    </>
)

testA.getInitialProps = async () => {
    const promise = new Promise((resolve => {
        Axios('https://www.easy-mock.com/mock/5f96cc6134c55d14fda96ea1/example/query').then((res) => {
            console.log('远程数据结果：', res)
            resolve(res.data.data)
        })

    }))
    return await promise
}

//withRouter是Next.js框架的高级组件，用来处理路由用的
export default withRouter(testA)
