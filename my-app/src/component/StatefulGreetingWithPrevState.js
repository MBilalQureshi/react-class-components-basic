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

    // 1
    increment(){
        this.setState({
            count: this.state.count +=1
        })
        console.log(this.state.count)
    }

    // 2
    // Issue : The incremnt five method is to show the counter will still add only one each time even with multiple methods ehich can be seen on dev tool,
    // 1,1,1,1,1 should have outputed on dev tool first and this is because react group setState method to increase REACT performance
    // IN MY CASE: IT WORKED JUST FINE, I GOT 1,2,3,4,5 INSTAED OF 1,1,1,1,1 
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    // 3. if issue still occurs at point 2, this is solution and (IMPORTANT)set state should always be used like this
    incrementWithPrev(){
        this.setState((prevState, prevProps) => {
            console.log("Previous State",prevState)
            console.log("Previous Props",prevProps)
            return {
                count: this.state.count +1
            }
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
                <button onClick={() => this.incrementFive()}>
                    +
                </button>
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={() => this.incrementWithPrev()}>
                    +
                </button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;