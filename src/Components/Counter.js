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
            <div className={'counter'} style={{ border: '1px solid black', margin: '20px' }}>
                <h1 style={{ color: 'blue' }}>Counter</h1>
                <button onClick={this.countUp}>Count Up</button>
                <h4>{this.state.counter - this.state.plusTen} + 10 = {this.state.counter}</h4>
            </div>
        )
    }
}

export default Counter

