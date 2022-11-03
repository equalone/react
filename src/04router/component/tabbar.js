//./component/tabbar

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./tabbar.css";
export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li><a href='#/films'>电影</a></li> */}
          <li>
            <NavLink to="/films" activeClassName="active">
              电影
            </NavLink>
          </li>
          {/* <li><a href='#/cinemas'>影院</a></li> */}
          <li>
            <NavLink to="/cinemas" activeClassName="active">
              影院
            </NavLink>
          </li>
          {/* <li><a href='#/center'>我的</a></li> */}
          <li>
            <NavLink to="/center" activeClassName="active">
              我的
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
//window.onhashchange
//location.hash
// 上面就是路由的原理，原生js的写法
