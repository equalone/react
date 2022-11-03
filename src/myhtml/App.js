import React, { Component } from "react";
import Item from './Item'
import axios from 'axios'
export default class App extends Component {
  state={list:[]}
  componentDidMount() { axios.get("/testa.json").then(res=>(console.log(res.data),
    this.setState({list:res.data}))
  ) }
  render() {
    return (
      <div
        style={{
          background: "url(/calorie.JPEG)",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          style={{
            width: "70%",
            margin: "0 auto",
            maxWidth: "500px",
            padding: "20px",
            background: "#00bebe",
          }}
        >
          <h1 style={{ marginBottom: "-15px", textAlign: "center" }}>
            <b>食品卡路里表</b>
          </h1>
          <h2 style={{ textAlign: "center" }}>
            <i>2022.9.29</i>
          </h2>
          <div
            style={{
              display: "block",
              border: "5px solid black",
              background: "black",
            }}
          ></div>
          <div>
            <h3 style={{ textAlign: "center" }}>肉类</h3>
            {this.state.list.map((item) => (
              <Item
                key={item.item}
                item={item.item}
                calorie={item.calorie}
              ></Item>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
