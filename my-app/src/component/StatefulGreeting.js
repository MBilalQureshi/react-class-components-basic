import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // initial state values
        };
    }

    render() {
        return <h1>Hello, {this.props.greeting} my name is {this.props.name}</h1>
    }
}

export default StatefulGreeting;