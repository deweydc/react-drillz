import React, { Component } from 'react'
import { ListOfItems } from '../listOfItems';

export class FilterList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            ListOfItems
        };
    }

    //* set state of userInput and array
    //* function to set state of userInput to filter
    //* set var for updated state of list
    //* filter though (current value, index)
    //* return items that include the state of the userInput
    // map element and index 
    // return element
    // onChange handle change
    //* create input
    //* display list of items

    handleChange = (value) => {
        this.setState({ userInput: value })
    }


    render() {

        let filterListOfItems = this.state.ListOfItems
            .filter((item) => {
                return item.includes(this.state.userInput);
            })
            .map((items, index) => {
                return <h1 key={index}>{items}</h1>
            });
        return (
            <div>
                <input type="text" onChange={e => this.handleChange(e.target.value)} />
                {filterListOfItems}
            </div>
        )
    }
}

export default FilterList
