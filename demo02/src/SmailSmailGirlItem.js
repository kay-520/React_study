import React, {Component} from "react";
import PropTypes from 'prop-types'

class SmailSmailGirlItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }

    //接收到父组件传递的值后执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps----接收到父组件传递的值后执行')
    }
    componentWillUnmount(){
        console.log('child - componentWillUnmount')
    }
}

//校验传递值
SmailSmailGirlItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number.isRequired, //isRequired 必传，不传会报错
    deleteItem: PropTypes.func
}

export default SmailSmailGirlItem;