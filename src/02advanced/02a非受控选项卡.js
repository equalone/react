import React, { Component } from "react";
import Center from "../component/center";
import Cinema from "../component/cinema";
import Film from "../component/film";
import Navbar from '../component/navbar2'
import Tabbar from "../component/tabbar"
import "../css/选项卡.css";
export default class App extends Component {
  state = {
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
            console.log('父组件定义');
            this.setState({ current: index });
          }}
        />
      </div>
    );
  }
}
