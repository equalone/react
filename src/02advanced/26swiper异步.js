import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);
// 在异步状态下,要等dom创建状态更新了再new
export default class App extends Component {
  state = { list: [] };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: ["aaa", "bbb", "ccc"],
      });
      //和教程里不一样的是在异步函数下new的不成功 还是要在componentDidUpdate
      // new Swiper(".swiper", {
      //   loop: true,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      // });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <div>
        <div
          className="swiper"
          style={{ height: "200px", background: "yellow" }}
        >
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div className="swiper-slide" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
