import React from 'react';
import Lottery from './Lottery';
import './Lottery.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Lottery max={9}/>
    </div>
  );
}

export default App;
