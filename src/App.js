import React from 'react';
import Lottery from './Lottery';
import './Lottery.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <Lottery />
    <Lottery title={"Lottery Mania"} maxBalls={3} maxNum={10}/>
    </div>
  );
}

export default App;
