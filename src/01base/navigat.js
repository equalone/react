import React, { Component } from "react";
import "./css/nav.css";

export default class Navigat extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li>首页</li>
          <li>新闻</li>
          <li>公司产品</li>
          <li>关于我们</li>
          <li>公司介绍</li>
        </ul>
      </div>
    );
  }
}
