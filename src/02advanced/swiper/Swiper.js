import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

export default class Cswiper extends Component {
  state = {};
  componentDidUpdate() {
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
          style={{ height: "400px", background: "yellow" }}
        >
          <div className="swiper-wrapper">
            {/* <div className="swiper-slide">111</div>
            <div className="swiper-slide">222</div>/
            <div className="swiper-slide">333</div> */}
            {this.props.children}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
