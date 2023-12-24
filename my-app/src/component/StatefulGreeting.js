import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // initial state values
            introduction: "Hello!",
            buttonText: "Exit",

        };
    }

    handleClick(){
        // Updating the state of introduction that was initial set in constructor
        this.setState({
            introduction: "Goodbye!",
            buttonText : "Enter",
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default StatefulGreeting;