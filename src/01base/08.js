import React, { Component } from "react";

export default class App extends Component {
  state = {
    myShow: true,
  };
  render() {
    return (
      <div>
        <div>App</div>
        <button
          onClick={() => {
            this.setState({
              myShow: !this.state.myShow,
            });
          }}
        >
          {this.state.myShow ? "收藏" : "取消收藏"}
        </button>
      </div>
    );
  }
}
