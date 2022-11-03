import React, { Component } from "react";

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
        {/* 两种条件渲染的方式,复习一下 */}
        {/* {this.state.isCreated ? <Child /> : ""} */}
        {this.state.isCreated && <Child></Child>}
      </div>
    );
  }
}
class Child extends Component {
  render() {
    return <div>Child</div>;
  }
  componentDidMount() {
    window.onresize = () => {
      console.log("resize");
      
    };
    // timer 加个this 表示是这个类的实例,以便于在后面消毁,
    // 这个函数中的函数在其它函数中是访问不了的 成了类的实例才能访问
    this.timer=setInterval(() => {
      console.log("111");
    }, 1000);
  }
  componentWillUnmount() {
    // 组件被消毁就走这个生命周期
    console.log("componentWillUnmount");
    // 有一些事件监听在组件消毁后还会继续工作,需要解绑,所以需要这个生命周期
    // 绑在window上的事件不会随着组件消毁而消毁,
    window.onresize = null;
    // clearInterval 消毁定时器的命令
    clearInterval(this.timer)

  }
}
