import React, { Component } from "react";
import Mrouter from "./router/indexrouter";
import Tabbar from "./component/tabbar";
import store from "./redux/store";
import "./views/css/app.css";
export default class App extends Component {
  state = {
    isShow: store.getState(),
  };
  //store.subscript 订阅
  componentDidMount() {
    store.subscribe(() => {
      console.log("app 中订阅", store.getState());
      this.setState({
        isShow: store.getState().TabbarReducer.show,
      });
    });
  }
  render() {
    return (
      <div>
        <Mrouter>{this.state.isShow && <Tabbar></Tabbar>}</Mrouter>
      </div>
    );
  }
}
