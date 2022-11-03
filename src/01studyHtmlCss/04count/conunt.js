import React, { Component } from "react";

export default class App extends Component {
  state = { count: 0 };
  add = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count)
  };
  del = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.add}>add</button>
        <button onClick={this.del}>del</button>
      </div>
    );
  }
}
