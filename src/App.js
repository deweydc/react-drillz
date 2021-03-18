import React from 'react';
import UserInput from './Components/UserInput';
import UserInput2 from './Components/UserInput2';
import Counter from './Components/Counter';
import UserInputOutput from './Components/UserInputOutput';
import UserInputOutput2 from './Components/UserInputOutput2';
import FilterList from './Components/FilterList';
import App3 from './Components/App3';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1 style={{ color: 'purple' }} className={'title'}>Set 1 - State, Class Methods, Capturing User Input, Mapping, Axios</h1>
      <div className="container">
        <UserInput />
        {/* <UserInput2 /> */}
        {/* <UserInputOutput/> */}
        <UserInputOutput2 />
        <Counter />
        {/* <FilterList /> */}
        <App3 />
      </div>


    </div >
  );
}

export default App;
