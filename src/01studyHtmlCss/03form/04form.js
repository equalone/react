import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <form action="">
          <div>
            <label for="name">name:</label>
            <input id="name"></input>
          </div>
          <div>
            <label for="email">email:</label>
            <input type="email" id="email"></input>
          </div>
        </form>
      </div>
    );
  }
}
