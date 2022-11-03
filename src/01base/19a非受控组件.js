import React, { Component } from "react";
export default class App extends Component {
  myusername = React.createRef();
  a = 100;
  render() {
    return (
      <div>
        <h2>登录</h2>
        <input
          type="text"
          ref={this.myusername}
          //   value="input name"
          //   //受控组件写法,不能输入了
          //   defaultValue="input name" //非受控组件,出现一次可输入
        />
        <button
          onClick={() => {
            console.log(this.myusername.current.value);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.myusername.current.value = "";
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
