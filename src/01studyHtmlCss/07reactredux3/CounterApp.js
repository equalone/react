import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import CounterAddAction from "./CounterAddAction";
//建立一个从（外部的）state对象到（展示型组件的）props对象的映射关系
//counter与展示型组件同名
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
//建立展现型组件的参数到store.dispatch方法的映射
//传递this.props方法，执行counterAddAction（计数器增加Action）对应的函数
const mapDispatchToProps = (dispatch) => {
  return {
    counterAdd: () => {
      dispatch(CounterAddAction);
    },
  };
};
//connect方法关联展示型组件
const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterApp;
