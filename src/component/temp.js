import React, { Component } from 'react'
import axios from "axios";


// 用axios找到特定接口数据
export default class Temp extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      backcinemaList: [],
    };

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6480188",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',

        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data);
    //   this.setState({
    //     cinemaList: res.data.data.cinemas,
    //     backcinemaList: res.data.data.cinemas,
    //   });
      // 为什么要在这里new,只要是必须执行的逻辑里都行是吧
    });
  }

  render() {
    return (
      <div></div>
    );
  }}