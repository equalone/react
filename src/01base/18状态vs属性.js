import React, { Component } from "react";
class Child extends Component {
  state = {};
  render() {
    return (
      <div>
        child-{this.props.text}
        {/*会报错,子组件不能修改属性*/}
        <button
          onClick={() => {
            this.props.text = "3333";
          }}
        >
          child-子
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    text: "1111",
  };
  a = 100;
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ text: "2222" });
          }}
        >
          child-父
        </button>
        <Child text={this.state.text}></Child>
      </div>
    );
  }
}
