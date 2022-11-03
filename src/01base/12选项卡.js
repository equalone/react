import React, { Component } from "react";
import Center from "../component/center";
import Cinema from "../component/cinema";
import Film from "../component/film";
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
      // {/*这三个组未定义,也没有引入*/}
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
        {/*表达式支持函数表达式*/}
        {this.which()}
        <ul>
          {/*类的状态列表映射，参数列表的值和索引，三目表达式条件渲染，点击事件根据列表的索引*/}
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? "active" : ""}
              onClick={() => this.handleClick(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick = (index) => {
    this.setState({
      current: index,
    });
  };
}
