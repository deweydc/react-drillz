import React from 'react';

const styleOne = {
    border: '1px solid black',
    padding: 5
}

const display = {
    listStyleType: "none",
    display: 'flex',
    textAlign: 'left',
    padding: 10
}
const listItem = {
    padding: 10,
    fontWeight: 700,
    textAlign: 'center'
}


const list = [
    {
        id: 0,
        style: 'nike',
        type: 'shoe',
        color: 'black'
    },
    {
        id: 1,
        style: 'rebook',
        type: 'shirt',
        color: 'red'
    },
    {
        id: 2,
        style: 'adidas',
        type: 'shoe',
        color: 'white'
    },
    {
        id: 3,
        style: 'nike',
        type: 'shirt',
        color: 'black'
    },
];

const List = () => {
    return (
        <div style={styleOne}>
            <h1>App #2</h1>
            <ul style={display}>
                {list.map((item) => (
                    <li style={listItem} key={item.id}>{item.style}</li>
                ))}
            </ul>
        </div>
    );
};


export default List;
