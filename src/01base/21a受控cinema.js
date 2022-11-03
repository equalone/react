import React, { Component } from "react";
import axios from "axios";
import "../css/选项卡.css";

export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      myText: "",
      //backcinemaList: [],
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
      console.log(res.data.data.cinemas);
      this.setState({
        cinemaList: res.data.data.cinemas,
        // backcinemaList: res.data.data.cinemas,
      });
    });
  }
  render() {
    return (
      <div>
        {/* // 值为当前mytext的值,状态更新mytext为输入框事件目标的值 */}
        <input
          value={this.state.myText}
          onChange={(evt) => {
            this.setState({ myText: evt.target.value });
          }}
        />
        {/* //getCinemaList函数的返回值映射 */}
        {this.getCinemaList().map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }
  
  getCinemaList() {
    return this.state.cinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.myText.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.myText.toUpperCase())
    );
  }
}
