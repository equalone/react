import React, { Component } from "react";
import axios from "axios";
import "../css/选项卡.css";
// {/*还没有下载*/}
// {/*右键点击我的这个项目
// 为的是进入我的react项目目录
// npm i axios
// cnpm i --save axios
// 淘宝镜像下载
// nrm ls 显示下载源*/}
export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      backcinemaList: [],
    };
    // axios
    //   .get("https://m.maizuo.com/gateway/?cinemaId=1701&k=7768766")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

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
        backcinemaList: res.data.data.cinemas,
      });
    });
    // {/*axios第三方的库用于请求数据*/}
    // {/*请求回来的数据更新状态到列表*/}
  }
  // {/*后面讲的生命周期函数,更适合于调取ajax*/}
  render() {
    return (
      <div>
        <input onInput={this.handleInput} />
        {this.state.cinemaList.map((item) => (
          <dl key={item.cinemaID}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }
  // {/*事件监听自带的event
  // event.target 拿到这个事件也就是input本身,加上value也就是input的值*/}
  handleInput = (event) => {
    console.log("input", event.target.value);

    //   过滤函数匹配输入框输入的文字被包含在列表对象(名字与地址)中, 不区分大小写
    let newList = this.state.backcinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );
    this.setState({
      cinemaList: newList,
    });
  };
  // {/*箭头函数自动返回了过滤后列表, 但是这个列表怎么被应用的没搞清楚, 自动渲染了?
  // 还是用setState 更新状态*/}
}
