import React, { Component } from "react";
import Navabar from "../component/navabar";
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navabar title="首页" leftside={false} />
        </div>
        <div>
          <h2>列表</h2>
          <Navabar title="列表" leftside={true} />
        </div>
        <div>
          <h2>购物车</h2>
          <Navabar title="购物车" leftside={true} />
        </div>
      </div>
    );
  }
}
