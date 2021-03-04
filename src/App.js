import React from 'react';
import UserInput from './Components/UserInput';
import UserInput2 from './Components/UserInput2';
import Counter from './Components/Counter';
import UserInputOutput from './Components/UserInputOutput';
import UserInputOutput2 from './Components/UserInputOutput2';
import FilterList from './Components/FilterList';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* <UserInput /> */}
      <UserInput2 />
      {/* <UserInputOutput/> */}
      <UserInputOutput2/>
      {/* <FilterList/> */}
      <Counter/>
      
    </div>
  );
}

export default App;
