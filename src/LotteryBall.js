import React, { Component } from 'react';

class LotteryBall extends Component {
  render() {
    return(
      <div className="LotteryBall">{this.props.number}</div>
    )
  }
}

export default LotteryBall;
