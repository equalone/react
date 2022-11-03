import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <div></div>;
  }
}
var bus = {
  list: [],
  // 订阅
  subscribt(callback) {
    console.log(callback);
    this.list.push(callback);
  },
  // 发布
  publish(text) {
    // 遍历列表,将回调函数执行
    console.log(this.list);
    this.list.forEach((callback) => {
      callback && callback(text);
    });
  },
};

//订阅者
bus.subscribt((value) => {
  console.log("1111", value);
});

bus.subscribt((value) => {
  console.log("2222", value);
});

//发布者, 发布一般都是异步调用异步的单位是毫秒
setTimeout(() => {
  bus.publish("卷死你们");
}, 0);

setTimeout(() => {
  bus.publish("卷死你们111");
}, 1000);

setTimeout(() => {
  bus.publish("卷死你们222");
}, 2000);

// 后面要学习redux, 就是基于订阅发布
