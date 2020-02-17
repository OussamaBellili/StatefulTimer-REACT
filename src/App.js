import React, { Component } from "react";

export default class App extends Component {
  // method 1
  constructor(props) {
    super(props);
    this.state = {
      t: 3597
    };
  }

  // method 2
  // state={
  //   t:0,
  //   hours:0,
  //   minutes:0,
  //   seconds:0
  // }

  startTimer = () => {
    this.myInterval = setInterval(
      () => this.setState({ t: this.state.t + 1 }),
      1000
    );
  };

  resetTimer = () => {
    this.setState({ t: 0 });
  };

  pauseTimer = () => {
    this.myInterval = clearInterval(this.myInterval);
  };

  render() {
    let hours = parseInt(this.state.t / 3600);
    let minutes = parseInt((this.state.t % 3600) / 60);
    let seconds = parseInt(this.state.t % 60);
    return (
      <div>
        {hours}:{minutes}:{seconds}
        <button onClick={() => this.startTimer()}>Start</button>
        <button onClick={() => this.pauseTimer()}>Pause</button>
        <button onClick={() => this.resetTimer()}>Reset</button>
      </div>
    );
  }
}
