import React, { Component } from "react";
import axios from "axios";
class FilmList extends Component {
  state = { list: [] };
  // 初始化生命周期,只执行一次
  componentDidMount() {
    // console.log(this.props.type)
    if (this.props.type === 1) {
      // 正在热映
      // console.log("正在热映")
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7605863",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          list: res.data.data.films,
        });
      });
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5818615",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          list: res.data.data.films,
        });
      });
    }
  }
  //second

  UNSAFE_componentWillReceiveProps(nextProps) {
    // 在这个生命周期里this.props是老的属性,最新的是形参nextprop.type
    if (nextProps.type === 1) {
      // 正在热映
      console.log("正在热映");
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7605863",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          list: res.data.data.films,
        });
      });
    } else {
      //second
      console.log("即将上映");
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5818615",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        this.setState({
          list: res.data.data.films,
        });
      });
    }
  }
  render() {
    // console.log(this.props.type)

    return (
      <div>
        {this.state.list.map((item) => (
          <li key={item.filmId}>{item.name}</li>
        ))}
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    type: 1,
  };
  render() {
    // console.log(this.state.type);

    return (
      <div>
        <ul>
          <li
            onClick={() => {
              this.setState({
                type: 1,
              });
            }}
          >
            正在热映
          </li>
          <li
            onClick={() => {
              this.setState({
                type: 2,
              });
            }}
          >
            即将上映
          </li>
          <li
            onClick={() => {
              this.setState({
                type: 3,
              });
            }}
          >
            third
          </li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    );
  }
}
