import React, { Component } from 'react'

export class Counter extends Component {



    constructor() {
        super();
        this.state = {
            counter: 10,
            plusTen: 10
        };
    }




    countUp = () => {
        this.setState({ counter: this.state.counter + this.state.plusTen })
    }


    render() {

        return (
            <div>
                <h1 style={{ color: 'blue' }}>Counter</h1>

                <button onClick={this.countUp}>Count Up</button>
                <p>{this.state.counter - this.state.plusTen} + 10 = {this.state.counter}</p>

            </div>
        )
    }
}

export default Counter

