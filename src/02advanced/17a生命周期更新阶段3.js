import React, { Component } from "react";
class Child extends Component {
  state = {
    title: "",
  };
  render() {
    return <div>child-{this.state.title}</div>;
  }
  //只能放在子组件，将要收到属性,说收到属性自然是儿子
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    this.setState({ title: nextProps.text + "abcc" });
    //最先获得父组件传来的属性，可以利用属性进行Ajax或者逻辑处理
    //将接受到的属性转化为状态
  }
}

export default class App extends Component {
  state = { text: "11111" };
  render() {
    return (
      <div>
        {this.state.text}
        <button
          onClick={() => {
            this.setState({
              text: "222222",
            });
          }}
        >
          click
        </button>
        <Child text={this.state.text} />
      </div>
    );
  }
}
