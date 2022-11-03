import React, { Component } from "react";
import Cswiper from "./swiper/Swiper";
import CSwiperItem from "./swiper/swiperItem";
import axios from "axios";
export default class App extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    console.log("componentDidMount");
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5818615",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      //   console.log(res.data.data.films);
      this.setState({
        list: res.data.data.films,
      });
    });
  }
  render() {
    return (
      <div>
        {console.log("render")}
        {console.log(this.state.list)}
        <Cswiper>
          {this.state.list.map((item) => (
            <CSwiperItem key={item.filmId}>
              <img
                src={item.poster}
                alt={item.name}
                style={{ width: "100%", height: "100%" }}
              />
            </CSwiperItem>
          ))}
        </Cswiper>
      </div>
    );
  }
}
