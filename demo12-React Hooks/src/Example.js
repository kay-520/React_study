import React, {Component} from "react";

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.add.bind(this)}>Click me</button>
            </div>
        )
    }

    add() {
        this.setState({
            count: this.state.count + 1
        })

    }

}
export default Example