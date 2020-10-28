import React from "react";
import {Button, Input, List} from "antd";

const AppUI = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <div>
                <Input style={{width: '250px', marginRight: '10px'}}
                       onChange={props.changeInput} value={props.inputValue}/>
                <Button type={"primary"} onClick={props.clickBtn}>添加</Button>
            </div>
            <div>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
                    )}
                />
            </div>
        </div>
    )
}


// eslint-disable-next-line no-unused-vars
// class AppUI extends Component {
//     render() {
//         return (
//             <div style={{margin: '10px'}}>
//                 <div>
//                     <Input style={{width: '250px', marginRight: '10px'}}
//                            onChange={this.props.changeInput} value={this.props.inputValue}/>
//                     <Button type={"primary"} onClick={this.props.clickBtn}>添加</Button>
//                 </div>
//                 <div>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (
//                             <List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>
//                         )}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default AppUI;