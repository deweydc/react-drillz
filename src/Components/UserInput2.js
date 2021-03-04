import React, { Component } from 'react'

export class UserInput2 extends Component {

    constructor() {
        super();
        this.state = {
            userInput2: ''
        };
    }

    handleChange = e => {
        this.setState({ userInput2: e.target.value })
    }

    render() {

        return (
            <div>
                <h1 style={{color: 'red'}}>Set 1 - State, Class Methods, Capturing User Input, Mapping, Axios</h1>
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.userInput2}</p>
            </div>
        )
    }
}

export default UserInput2

