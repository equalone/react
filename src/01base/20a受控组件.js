import React, { Component } from "react";
export default class App extends Component {
  state = {
    username: "input name",
  };
  render() {
    return (
      <div>
        <h2>登录</h2>
        <input
          type="text"
          value={this.state.username}
          onChange={(evt) => {
            console.log(evt.target.value);
            this.setState({
              username: evt.target.value,
            });
          }}
          //受控组件写法, 双向绑定后才能输入
          //defaultValue='input name'//非受控组件,出现一次可输入
        />
        <button
          onClick={() => {
            console.log(this.state.username);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              username: "",
            });
          }}
        >
          重置
        </button>
        {/* // 将状态的值传给子组件 */}
        {/* <Child myvalue={this.state.username} /> */}
      </div>
    );
  }
}
