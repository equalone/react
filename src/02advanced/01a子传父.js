
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
        <button
          onClick={() => {
            console.log("通知父组件", this.props.event)
            this.props.event()
          }}
        >
          click
        </button>
        <span>Navbar</span>
      </div>
    );
  }
}

export default class App extends Component {
  state = { isShow: false }
  handleEvent = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
    console.log("调用");
  };
  render() {
    return (
      <div>
        <Navbar
          event={this.handleEvent}
          //	this.setState({
          //		isShow:!this.state.isShow})
          // 		console.log('调用')
        />
        {/* <button
          onClick={() => {
            this.setState({ isShow: !this.state.isShow });
          }}
        >
          chick
        </button> */}
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    );
  }
}

//父传子通过属性
//子传父通过回调函数
