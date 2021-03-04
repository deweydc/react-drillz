import React, { Component } from 'react'

export default class userInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        };
    }

    handleChange = e => {
        this.setState({userInput: e.target.value})
    }

    render() {

        return (
            <div>
                <h1>Set 1 - State, Class Methods, Capturing User Input, Mapping, Axios</h1>
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}

