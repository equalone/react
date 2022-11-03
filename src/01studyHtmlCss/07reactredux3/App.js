// import React from "react";
// import ReactDOM from "react-dom";
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CounterApp from "./CounterApp";
import Reducers from "./Reducers";
// 通过createStore方法生成store
const store = createStore(Reducers);
// ReactDOM.render(
//   <Provider store={store}>
//     {" "}
//     //关联store
//     <CounterApp />
//   </Provider>,
//   document.getElementById("root")
// );

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {/* 关联store */}
          
          <CounterApp />
        </Provider>
      </div>
    );
  }
}
