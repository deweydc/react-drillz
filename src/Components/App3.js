import React, { Component } from 'react'

export default class App3 extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            listOfItems: ['Puma', 'Nike', 'Adidas', 'Reebok', 'Asics', 'Vans', 'Jordans']
        };
    }

    handleChange = (e) => {
        this.setState({ userInput: e.target.value })
    };

    render() {

        let filterListOfItems = this.state.listOfItems
            .filter(item => item
                .toLowerCase()
                .includes(this.state.userInput))
            .map(item =>
                <h1 style={myStyle}>{item}</h1>
            )

        return (
            <div style={filterList}>
                <h1 style={{ color: 'red' }}>Filter List and Map</h1>
                <input style={inputStyle} type="text" onChange={this.handleChange} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {filterListOfItems}
                </div>
            </div>
        )
    }
}

const myStyle = {
    backgroundColor: 'yellow',
    maxWidth: 150,
};

const filterList = {
    border: '1px solid black',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
};

const inputStyle = {
    fontSize: '24px',
    maxWidth: 500


};

