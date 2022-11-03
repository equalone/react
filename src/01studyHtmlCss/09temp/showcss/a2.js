import React, { Component } from "react";

export default class App extends Component {
  state = { value: "" };
  handleChange = (evt) => {
    this.setState({ value: evt.target.value });
  };
  render() {
    console.log(this.state.value)
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(evt)=>{this.handleChange(evt)}}
        ></input>
      </div>
    );
  }
}
