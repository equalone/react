//films
import React, { Component } from "react";
import { Redirect, Route, Switch, NavLink } from "react-router-dom";
import Nowplaying from "./films/Nowplaying";
import Comingsoon from "./films/Comingsoon";
import style from './css/film.module.css'
console.log(style)
export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "200px", background: "yellow" }}>大轮播</div>
        <ul>
          <li>
            <NavLink to="/films/Nowplaying" activeClassName={style.active}>正在热映</NavLink>
          </li>
          <li>
            <NavLink to="/films/Comingsoon">即将上映</NavLink>
          </li>
        </ul>
        {/* // 路由配,嵌套路由 */}
        <Switch>
          <Route path="/films/Nowplaying" component={Nowplaying} />
          <Route path="/films/Comingsoon" component={Comingsoon} />
          <Redirect from="/films" to="/films/Nowplaying" exact />
        </Switch>
      </div>
    );
  }
}
