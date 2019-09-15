import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from({ length: this.props.maxBalls })
    }
    this.handleClick = this.handleClick.bind(this)
    this.generate = this.generate.bind(this)
  }

  generate() {
    this.setState(current => ( {
      numbers: current.numbers.map(
        n => Math.floor(Math.random() * this.props.maxNum)
      )
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {

    return(
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="LotteryBalls">
          { this.state.numbers.map(n => <LotteryBall number={n} />) }
        </div>
        <button className="LotteryButton" onClick={this.handleClick}>Draw Numbers</button>
      </div>
    )
  }
}
export default Lottery;
