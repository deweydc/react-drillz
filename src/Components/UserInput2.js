import React, { Component } from 'react'

export class UserInput2 extends Component {
    constructor(){
        super();

        this.state = {
            userInput: ''
        }
    }

    handleChange = e => {
        this.setState({userInput: e.target.value})
    }

   

    render() {

        return (
            <div>
                <h1 style={{color: 'red'}}>Set 1 - State, Class Methods, Capturing User Input, Mapping, Axios</h1>
                <input type="text" onChange={this.handleChange}/>
                <p>{this.state.userInput}</p>
                
            </div>
        )
    }
}

export default UserInput2

