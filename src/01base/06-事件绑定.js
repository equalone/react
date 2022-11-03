import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input></input>
        <button
          onClick={() => {
            console.log("click1", "如果逻辑过多不推荐这种写法", this.a);
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2.bind(this)}>add2,不推荐</button>
        <button onClick={this.handleClick3}>
          add3,推荐写法,注意调用的方式不同
        </button>
        <button onClick={() => this.handleClick4()}>
          add4,比较推荐-传参好用
        </button>
      </div>
    );
  }
  handleClick2() {
    console.log("click2", this.a);
  }
  handleClick3 = () => {
    console.log("click3", this.a);
  };
  handleClick4() {
    console.log("click4", this.a);
  }
}
