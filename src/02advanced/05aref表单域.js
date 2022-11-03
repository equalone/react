import React, { Component } from "react";

class Filed extends Component {
  state = { value: "" };
  clear() {
    this.setState({
      value: "",
    });
  }
  setValue(value) {
    this.setState({ value: value });
  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            this.setState({
              value: evt.target.value,
            });
          }}value={this.state.value}
          
        />
      </div>
    );
  }
}

export default class App extends Component {
  username = React.createRef();
  password = React.createRef();

  render() {
    return (
      <div>
        <h2>登录页面</h2>

        <Filed label="用户名" type="text" ref={this.username} />
        <Filed label="密码" type="password" ref={this.password} />
        <button
          onClick={() => {
            console.log(
              this.username.current.state.value,
              this.password.current.state.value
            );
          }}
        >
          确定
        </button>
        <button
          onClick={() => {
            this.username.current.clear();
            this.password.current.clear();
          }}
        >
          取消
        </button>
      </div>
    );
  }
}
