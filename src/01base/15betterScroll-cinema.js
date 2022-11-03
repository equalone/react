import React, { Component } from "react";
import axios from "axios";
import BetterScroll from "better-scroll";
import "../css/选项卡.css";

export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      backcinemaList: [],
    };

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1384733",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705"}',

        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data.data);
      this.setState({
        cinemaList: res.data.data.cinemas,
        backcinemaList: res.data.data.cinemas,
      });
      // 为什么要在这里new,只要是必须执行的逻辑里都行是吧
      new BetterScroll(".wrapper");
    });
  }

  render() {
    return (
      <div>
        <input onInput={this.handleInput} />
        <div
          className="wrapper"
          style={{ height: "500px", background: "yellow", overflow: "hidden" }}
        >
          <div className="content">
            {this.state.cinemaList.map((item) => (
              <dl key={item.cinemaID}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    );
  }

  handleInput = (event) => {
    console.log("input", event.target.value);

    let newList = this.state.backcinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );
    this.setState({
      cinemaList: newList,
    });
  };
}
