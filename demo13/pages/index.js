import React from "react";
import Link from "next/link";
import Router from "next/router";


function jump() {
    Router.push({
        pathname: '/test/testB',
        query: {
            name: 'karma'
        }
    })
}

//routeChangeStart路由发生变化时
Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart->路由开始变化,参数为:', ...args)
})

//routeChangeComplete路由结束变化时
Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete->路由结束变化,参数为:', ...args)
})

//beforeHistoryChange浏览器history触发前
Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.beforeHistoryChange->浏览器history触发前,参数为:', ...args)
})

//routeChangeError跳转发生错误时
Router.events.on('routeChangeError', (...args) => {
    console.log('4,routeChangeError->跳转发生错误,参数为:', ...args)
})


//针对hash的，所以现在要转变成hash模式
Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
})

Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
})

const Home = () => (
    <>
        <div>首页</div>
        {/*<div><Link href="/test/testA?name=karma"><a>Link跳转去testA页面</a></Link></div>*/}
        <div><Link href={{pathname: '/test/testA', query: {name: 'karma'}}}><a>Link跳转去testA页面</a></Link></div>
        <div onClick={jump}><a>Router跳转去testB页面</a></div>
        <div>
            <Link href="#testC"><a>测试hash 两种钩子函数</a></Link>
        </div>
    </>
)
export default Home
