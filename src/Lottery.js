import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ['','','','','','']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let randNumbers = [];
    let i = 0;
    while(i < this.state.numbers.length){
      randNumbers.push(Math.floor(Math.random() * this.props.max));
      i++;
    }
    this.setState( { numbers: randNumbers } );
  }

  render() {
    let i = 0;
    let lotteryBalls = [];
    for (i = 0; i < this.state.numbers.length; i++) {
      lotteryBalls.push(<LotteryBall number={this.state.numbers[i]}/>)
    }

    return(
      <div className="Lottery">
        <h1>Lottery</h1>
        <div className="LotteryBalls">
          {lotteryBalls}
        </div>
        <button className="LotteryButton" onClick={this.handleClick}>Draw Numbers</button>
      </div>
    )
  }
}
export default Lottery;
