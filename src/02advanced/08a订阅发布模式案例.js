import React, { Component } from "react";
import axios from "axios";
import "../css/中间人.css"
var bus = {
  list: [],
  // 订阅
  subscribt(callback) {
    console.log(callback);
    this.list.push(callback);
  },
  // 发布
  publish(text) {
    // 遍历列表,将回调函数执行
    // console.log(this.list);
    this.list.forEach((callback) => {
      callback && callback(text);
    });
  },
};
export default class App extends Component {
  constructor() {
    super();
    this.state={
      filmList: [],
    };
    // 拿取自己的Test.js文件, 在public文件下
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6480188",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',

        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((ref) => {
    //   console.log(ref.data.data.films);
      this.setState({
        filmList: ref.data.data.films,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.filmList.map((item) => (
          <FilmItems key={item.filmId} {...item}></FilmItems>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    );
  }
}

class FilmItems extends Component {
  render() {
    //this.props在这里是一个大对象,将里面两个属性解构出来，根据同名原理吗
    let { name, poster, grade, synopsis } = this.props;
    // console.log(this.props);
    return (
      <div
        className="filmitem"
        onClick={() => {
        //   console.log(synopsis);
          // 发布
          bus.publish(synopsis);
        }}
      >
        <img src={poster} alt={name} />
        <h2>{name}</h2>
        <div>观众评分：{grade}</div>
      </div>
    );
  }
}

class FilmDetail extends Component {
  constructor() {
    super();
    // 在构造函数里定义状态，前面要加this
    this.state = {
      info: "",
    };
    // 构造函数里面都是自动执行的, 这里是订阅
    bus.subscribt((info) => {
    //   console.log("我在filmdetail中定义", info);
      this.setState({
        info: info,
      });
    });
  }
  render() {
    return (
      <div className="filmdetail">
        film-detail
        {this.state.info}
      </div>
    );
  }
}
