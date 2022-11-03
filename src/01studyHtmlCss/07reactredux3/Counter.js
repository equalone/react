import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    //从this.props获取count计数值和counterAdd 方法
    const { count, counterAdd } = this.props;
    return (
      <div>
        <button onClick={counterAdd}>计数器加一</button>
        <div>
          <div>计数器值: {count}</div>
        </div>
      </div>
    );
  }
  //指定count为number类型，counterAdd为函数类型
  static propTypes = {
    count: PropTypes.number.isRequired,
    counterAdd: PropTypes.func.isRequired,
  };
}

export default Counter;
