import {Avatar, Divider} from "antd";
import '../static/style/components/author.css'

const Author = () => {
    return(
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://profile.csdnimg.cn/A/2/B/3_weixin_40826349"  /></div>
            <div className="author-introduction">
                别让平淡的生活耗尽了你所有的向往.
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )
}

export default Author