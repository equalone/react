import React, { Component } from "react";
import Mrouter from "./router/indexrouter";
import Tabbar from "./component/tabbar";
export default class App extends Component {
  render() {
    return (
      <div>
        <Mrouter>
          <Tabbar></Tabbar>
        </Mrouter>
      </div>
    );
  }
}
