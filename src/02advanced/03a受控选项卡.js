import React, { Component } from "react";
import Center from "../component3/center";
import Cinema from "../component3/cinema";
import Film from "../component3/film";
import Navbar from "../component3/navbar2";
import Tabbar from "../component3/tabbar";
import "../css/选项卡.css";
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },

      { id: 2, text: "影院" },

      { id: 3, text: "我的" },
    ],
    current: 0,
  };
  which() {
    switch (this.state.current) {
      case 0:
        return <Film />;
      case 1:
        return <Cinema />;
      case 2:
        return <Center />;
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        <Navbar
          mytext={() => {
            console.log("navbar-center");
            this.setState({ current: 2 });
          }}
        />
        {/*表达式支持函数表达式*/}
        {this.which()}
        <Tabbar
          myevent={(index) => {
            console.log("父组件定义");
            this.setState({ current: index });
          }}
          //   将自己的状态做为属性传给tabbar子组件,
          // 子组件里用this.props.current调用
          // 传过去的属性不用定义 直接拿来用
          current={this.state.current}
          list={this.state.list}
        />
      </div>
    );
  }
}
