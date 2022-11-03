import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "1111",
  };
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ name: "2222" });
          }}
        >
          click
        </button>
        {this.state.name}
      </div>
    );
  }
  //有getSnapshotBeforeUpdate就不执行componentWillUpdate了,会报错
  //getSnapshotBeforeUpdate是替代componentWillUpdate的新的生命周期
//   componentWillUpdate() {
//     console.log("componentWillUpdate");
//   }
  componentDidUpdate(prevProps, prevState,value) {
    //这里的value就是getSnapshotBeforeUpdate的返回值
    console.log("componentDidUpdate", value);
  }
  //必有返回值
  //记录老DOM状态的生命周期函数
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate");
    return 100
  };
} 
