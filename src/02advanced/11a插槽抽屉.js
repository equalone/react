import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: "red", width: "200px" }}>
        <ul>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
        </ul>
      </div>
    );
  }
}
class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "yellow" }}>
        {/* 放一个抽屉,被父组件调用时在标签里的都会显示出来 */}
        {this.props.children}
        <span>Navbar</span>
      </div>
    );
  }
}

export default class App extends Component {
  state = { isShow: false };

  render() {
    return (
      <div>
        <Navbar>
          <button
            onClick={() => {
              this.setState({
                isShow: !this.state.isShow,
              });
            }}
          >
            click
          </button>
        </Navbar>

        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    );
  }
}

//父传子通过属性
//子传父通过回调函数
