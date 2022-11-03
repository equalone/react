import React, { Component } from "react";
import BetterScroll from "better-scroll"
//导入的东西可以随意起名的,我输入错为betterscrool,用的时候也是就成功了
export default class App extends Component {
  UNSAFE_componentWillMount() {
    // console.log(document.querySelectorAll("li"));
  }
  // scu  将树的component快速打印出来
  // shouldComponentUpdate(nextProps, nextState) { first }
  // 
  // cdm 
  // componentDidMount() { first }
  componentDidMount() {
    // console.log(document.querySelectorAll("li"));
    //new BetterScroll
  new BetterScroll('#wrapper')
  //成功render并渲染完成真实dom之后触发,可以修改DOM
  //重点部分,渲染完后再用一些插件进行优化,比如BetterScroll
  }
  state = {
    list: [
      "111",
      "222",
      "333",
      "444",
      "555",
      "666",
      "777",
      "888",
      "999",
      "000",
      "121",
      "122",
      "123",
      "124",
    ],
    id: "",
  };
  render() {
    return (
      <div>
        <div id="wrapper" style={{background:'yellow',overflow:'hidden',height:'200px'}}>
          <ul>
            {this.state.list.map((item) => (
              <li id={item} key={this.state.list.indexOf(item)}>
                {item}
                {/* {console.log(document.querySelectorAll("li"))} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
