import React, { Component } from "react";
import PropTypes from "prop-types";
console.log(PropTypes);
export default class Navbar extends Component {
  state = {
    //只能内部使用,外面无法改变
  };
  // 类属性 接口约束 静态的验证属性类型
  static propTypes = {
    title: PropTypes.string,
    leftside: PropTypes.bool,
  };
  static defaultProps = {
    leftside: true,
  };
  render() {
    let { title, leftside } = this.props;
    console.log(title, leftside);

    return (
      <div style={{ display: "flex" }}>
        {leftside && <button>返回</button>}
        <div>Navbar-{title}</div>
        <button>home</button>
      </div>
    );
  }
}
//类属性默认值
// Navbar.defaultProps = {
//   leftside: true,
// };
// // 类属性,验证属性类型
// Navbar.propTypes = {
//   title: PropTypes.string,
//   leftside: PropTypes.string,
// };
// class test {
//   a = 1; //对象属性 new一个对象 对象名加属性名才能访问
//   static a = 111; //类属性 静态属性 类名加属性名就能访问
// }
// let obj = new test();
// console.log(test.a, obj.a);
