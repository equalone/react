// useEffect(() => {return () => {}}, [])


import React, { Component, useState, useEffect } from "react";

export default class App extends Component {
  state = {
    isCreated: true,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isCreated: !this.state.isCreated,
            });
          }}
        >
          click
        </button>
        {this.state.isCreated && <Child></Child>}
      </div>
    );
  }
}
function Child() {
  useEffect(() => {
    //监听窗口尺寸改变
    window.onresize = () => {
      console.log("resize");
    };
    // 定时器
    var time = setInterval(() => {
      console.log("111");
    }, 1000);
    return () => {
      console.log("组件消毁");
    // 消毁定时器和监听器
      window.onresize = null;
      clearInterval(time);
    };
  }, []);
}
//定时器和监听器不会随着组件消毁而消毁,需要手动消毁