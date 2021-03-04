import React from 'react';
import { list } from '../listObjects';

const styleOne = {
    border: '1px solid black',
    padding: 5,
}

const display = {
    listStyleType: "none",
    display: 'flex',
    justifyContent: 'center'
}

const listItem = {
    padding: 10, 
    fontWeight: 700,
    color: 'green'
}

export default function UserInputOutput2() {
    return (
        <div style={styleOne}>
            <h1>App #2 Attempt 2</h1>
            <div style={display}>
                {list.map(item => 
                <h1 style={listItem} key={item.id}>{item.style}</h1>)}
            </div>
        </div>
    );
};





