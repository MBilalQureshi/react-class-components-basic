import React from "react";
class StatefulGreetingWithPrevState extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // initial state values
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,

        };
    }

    handleClick(){
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText : this.state.buttonText === "Exit" ? "Enter" : "Exit",
        },() =>{
            console.log('new state', this.state.introduction)
            console.log('new state', this.state.buttonText)
        })
    }

    increment(){
        this.setState({
            count: this.state.count +=1
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
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={() => this.increment()}>
                    +
                </button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;