import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "abc",
  };
  //   生命周期函数就是勾子函数
  //React官方不推荐用WillMount,不想看到警告用UNSAFE
  //如果初始化的逻辑过于复杂会造成界面卡顿,对于我无所谓
  //   react官方在16.8之后推出了fiber纤维,更小的碎片化的,所以不推荐WillMount了
  UNSAFE_componentWillMount() {
    // 在生命周期第一次将要创建时是拿不到render里的结点的,null未创建
    console.log(
      "first will mount",
      this.state.name,
      document.getElementById("name")
    );
    // 第一次上树前,最后一次修改状态的机会
    this.setState({
      name: "ABC",
    }); //   初始化数据的作用,逻辑复杂的情况下好用
  }

  componentDidMount() {
    console.log("first did mount", document.getElementById("name"));
    // 数据请求 如axios
    // 订阅函数调用
    // setInterval
    // 基于创建完的DOM 进行初始化 如BetterScroll ,无可替代
  }

  render() {
    console.log("render");
    return (
      <div>
        App-
        {/* 这里的id是为了在生命周期第一次试验拿结点 */}
        <span id="name">{this.state.name}</span>
      </div>
    );
  }
}
