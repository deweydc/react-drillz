import React from 'react';
import { List } from '../listObjects';

const styleOne = {
    border: '1px solid black',
    padding: 5,
}

const display = {
    listStyleType: "none",
    display: 'flex',
    justifyContent: 'left',
    margin: 0,
    padding: 0
}

const listItem = {
    padding: 5,
    fontWeight: 700,
    color: 'green',
    marginTop: 0,
    paddingTop: 0
}

export default function UserInputOutput2() {
    return (
        <div style={{ border: '1px solid black', margin: '20px' }}>
            <h2>Mapping List</h2>
            <p>Maps a list of items from a object in another file</p>
            <div style={display}>
                {List.map(item =>
                    <h1 style={listItem} key={item.id}>{item.style}</h1>)}
            </div>
        </div>
    );
};





