import React, { Component } from "react";
class Child extends Component {
  render() {
    return (
      <div>
        Child
        {/* 插槽 vue slot 具名插槽*/}
        {/* 下面是固定写法,没第二种 ,是一个列表可索引*/}
        {this.props.children[2]}
        {this.props.children[1]}
        {this.props.children[0]}
      </div>
    );
  }
}

 class Swiper extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Swiper>
          <div>1111</div>
          <div>2222</div>
          <div>3333</div>
        </Swiper>
        <Swiper>
          {/* <div><img></img>123</div> */}
        </Swiper>
        <Swiper>
          {/* <div><img></img></div> */}
        </Swiper>
        <Child>
          <div>1111</div>
          <div>2222</div>
          <div>3333</div>
          {
            // children
          }
        </Child>
      </div>
    );
  }
}

//第一,为了复用 
//第二,减少父子通信