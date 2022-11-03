import React, { PureComponent } from "react";
// 注意这里引用component加了pure意为纯化,
// 能够自动对比新老状态,没有改变就不更新
// 如果你的状态一直都在变,比如记时器,Pure不会优化性能,反而浪费了对比的时间 

export default class App extends PureComponent {
  state = {
    name: "1111",
  };
  render() {
    console.log("render");

    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              name: "2222",
            });
          }}
        >
          click
        </button>
        {this.state.name}
      </div>
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   //  return true //应该更新
  //   //  return false //阻止更新
  //   // this.state  老的状态
  //   // nextState 新的状态
  //   // console.log("shouldComponentUpdate");
  //   // if (this.state.name!==nextState.name){
  //   // 把对像变成字符串进行比较,不一样就更新,一样就不更新,
  //   // JSON.stringify这个函数没见过,不过功能很好理解,改为字符串
  //   if (JSON.stringify(this.state.name) !== JSON.stringify(nextState.name)) {
  //     return true;
  //   }
  //   return false;
  // }
  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
