import React, { Component } from "react";

export default class Tabbar extends Component {
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
  render() {
    return (
      <div>
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
  //index从调用者传入，在这里是list的索引，将索引赋值给状态，更新实现选项卡功能
  handleClick = (index) => {
    this.setState({
      current: index,
    });
    // 通知父组件修改状态,将索引值传给父组件,
    // 在这里是子传父,通过父组件留下的回调函数,传回一个索引值
    this.props.myevent(index)
  };
}
