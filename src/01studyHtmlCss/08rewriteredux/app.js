import React, { Component } from "react";
import { createStore } from "redux";
import Count from "./count";
import { Provider } from "react-redux";
const initialState = { count:0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {count:state.count+1};
    case "DEL":
        return {count:state.count-1};
    default:
      return state;
  }
};
const store = createStore(reducer);
export default class App extends Component {
  
  render() {
    return <div>
        <Provider store={store}><Count></Count></Provider>
    </div>;
  }
}


