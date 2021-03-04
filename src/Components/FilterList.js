import React, { Component } from 'react'
import { list } from '../listObjects';

export class FilterList extends Component {

    constructor() {
        super();
        this.state = {
            value: ''

        };
    }

    handleFilter = () => {
        console.log('changed')

    }


    render() {
        return (
            <div>
                <h1>APP #3</h1>
                <input type="text" onChange={this.handleFilter}/>
                {list.map((item) => 
                <h1>{item.style}</h1>
                )}

            </div>
        )
    }
}

export default FilterList
