import React, { Component } from "react";
import BetterScroll from "better-scroll";
export default class App extends Component {
  state = {
    list: [],
  };
  a = 100;
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.getData();
          }}
        >
          add
        </button>
        <div
          className="wrapper"
          style={{ height: "200px", background: "yellow", overflow: "hidden" }}
        >
          <ul className="content">
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  getData = () => {
    var list = [1, 2, 3, 4, 5, 6, 6, 8, 12, 14, 17, 19, 22];
    this.setState({ list: list }, () => {
      new BetterScroll(".wrapper");
    });
  };
}
//在react项目上打开终端，npm i better-scroll
//setState, 第二个参数加一个回调函数就可以立即更新
//setState用异步的方法不好用了,回调好用
