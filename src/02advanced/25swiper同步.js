import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  state = { list: ["111", "222", "333"] };
  componentDidMount() {
    new Swiper(".swiper", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      //   分页器1要引入pagination,2要引入css,3要在New时写下,4在div里也要写一个
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
