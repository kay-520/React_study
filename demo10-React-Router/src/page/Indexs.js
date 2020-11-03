import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Indexs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, title: 'test-1'},
                {id: 2, title: 'test-2'},
                {id: 3, title: 'test-3'},
            ]
        }
    }

    render() {
        return (
            <ul>
                {this.state.list.map((item, index) => {
                    return (
                        <li key={index}><Link to={'/list/' + item.id}>{item.title}</Link></li>
                    )
                })}
            </ul>)
    }
}

export default Indexs;