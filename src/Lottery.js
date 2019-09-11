import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // STATE HERE
    }
  }
  render() {
    return(
      <div className="Lottery">
        <h1>Lottery</h1>
        <div className="LotteryBalls">
          <LotteryBall />
          <LotteryBall />
          <LotteryBall />
        </div>
        <button className="LotteryButton">Draw Numbers</button>
      </div>
    )
  }
}
export default Lottery;
