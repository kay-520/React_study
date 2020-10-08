import React, {Component} from "react";

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{false ? 'karma520.com' : '大明的小屋'}</li>
                <li>I love React!!!!</li>
            </ul>
        );
    }
}

export default App