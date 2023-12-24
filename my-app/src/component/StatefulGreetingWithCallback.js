import React from "react";
// Callback have multiple definitions, but in this case, Callback functions are those that executes only once Asyncronous function completes
class StatefulGreetingWithCallback extends React.Component {

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
        // SET STATE IS "Asynchronous" function, meaning it executing in the BACKGOUND, while rest of the code is executing in foreground
        this.setState({
            introduction: "Goodbye!",
            buttonText : "Enter",
        },() =>{
            // This the fix to below issue always, it is CALL BACK function, always write code in callback function like this not after setState
            console.log('new state', this.state.introduction)
            console.log('new state', this.state.buttonText)
        })
        //Issue: This console.log still fetched the old values "Hello!" and Exit as it was continuous executing in foreground
        console.log(this.state.introduction)
        console.log(this.state.buttonText)
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

export default StatefulGreetingWithCallback;