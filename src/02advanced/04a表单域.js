import React, { Component } from "react";

class Filed extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            this.props.onChangeEvent(evt.target.value);
          }}
          // 父组建中的属性回调函数, 和其他函数一样调用。不过前面要加的属性定式，后面加个小括号，表示调用
          value={this.props.value}
        />
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    // 从本地储存取得项目的值
    username: localStorage.getItem("username"),
    password: "",
  };
  render() {
    return (
      <div>
        <h2>登录页面</h2>
        {/* // 在父组件中回调函数就是给子组件一个函数名让子组件，在子组件中。使用这个函数来改变父组件的状态 */}
        <Filed
          label="用户名"
          type="text"
          onChangeEvent={(value) => {
            console.log(value);
            this.setState({ username: value });
          }}
          value={this.state.username}
        />
        <Filed
          label="密码"
          type="password"
          onChangeEvent={(value) => {
            console.log(value);
            this.setState({ password: value });
          }}
          value={this.state.password}
        />
        <button
          onClick={() => {
            console.log(
              this.state.username,
              this.state.password,
              "发送给后端验证"
            );
          }}
        >
          确定
        </button>
        <button
          onClick={() => {
            this.setState({
              username: "",
              password: "",
            });
          }}
        >
          取消
        </button>
      </div>
    );
  }
}
