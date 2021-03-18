import React, { useState } from 'react';


export default function UserInput() {

    const [userInput, setUserInput] = useState('');


    return (
        <div style={{ border: '1px solid black', margin: '20px' }}>
            <h2>User Input => Output</h2>
            <p>This will take a user input and render output on screen</p>
            <input style={{ display: 'flex', alignItems: 'center' }} type="text" onChange={(e) => setUserInput(e.target.value)} />
            <h1>{userInput}</h1>
        </div>
    )
}


