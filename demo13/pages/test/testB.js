import React from 'react'
import Link from 'next/link'
import withRouter from "next/dist/client/with-router";

const testB = ({router}) => (
    <>
        <div>testB page . {router.query.name}</div>
        <Link href="/"><a>返回首页</a></Link>
    </>
)

export default withRouter(testB)