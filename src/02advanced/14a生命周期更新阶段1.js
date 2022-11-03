import React, { Component } from "react";
import axios from "axios";
import BetterScroll from "better-scroll";

export default class App extends Component {
  state = {
    name: "11111",
    filmList: [],
  };
  componentDidMount() {
    // 组件完成创建后 进行的
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6480188",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((ref) => {
      console.log(ref.data.data.films);
      this.setState({
        filmList: ref.data.data.films,
        info: "",
      });
      new BetterScroll("#wrapper");
    });
  }
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ name: "2222" });
          }}
        >
          click
        </button>
        {this.state.name}
        <span id="name">{this.state.name}</span>
        <div
          id="wrapper"
          style={{ background: "yellow", height: "100px", overflow: "hidden" }}
        >
          <ul>
            {this.state.filmList.map((item) => (
              <li key={item.filmId}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  UNSAFE_componentWillUpdate() {
    // innerHTML是拿到结点中的值
    console.log(
      "componentWillUpdate",
      document.getElementById("name").innerHTML
    );
  }
  componentDidUpdate(prevProps, prevState) {
    //两个参数是老是属性和老的状态,用来比较新状态是不是一样,一样就不更新,不一样再更新或者操作,算是性能优化
    console.log(
      "componentDidUpdate",
      document.getElementById("name").innerHTML
    ); //更新后相,想要获取DOM结点
    //跟教程不一样,在didmount里没有效果,只有在didupdate里才有用
    console.log(prevState.filmList);
    //只有在老的状态长度为0才执行,不会每更新一次就执行一次,避免浪费或者不可预期的错误
    if (prevState.filmList.length === 0) {
      new BetterScroll("#wrapper");
    }
  }
}
