/*

import React, { Component } from "react";

{
  /*
// 	document.getElementById("name").innerHTML
// <div style={{fontSize: ‘30px’}}></div>
// {this.state.bool?'aa':'bb'}
// 	input value={name} button onclick setState name:
// const obj={}


export default class App extends Component {
  componentDidMount() {
    {
      console.log(document.getElementById("name").innerHTML);
    }
  }
  state = { bool: true, text: "" };
  render() {
    return (
      <div>
        <div id="name" style={{ fontSize: "30px" }}>
          App
        </div>
        <button
          onClick={() => {
            this.setState({
              bool: !this.state.bool,
            });
          }}
        >
          click
        </button>
        {console.log(this.state.bool)}
        {this.state.bool ? "aa" : "bb"}
        <input
          value={this.state.text}
          onChange={(evt) => {
            this.setState({
              text: evt.target.value,
            });
          }}
        ></input>
      </div>
    );
  }
}
*/

/*
import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types'

  /*
	UNSAFE_componentWillUpdate
	shouldComponentUpdate(nextProps,nextState)
static propTypes = {title: PropTypes.string}
//import PropTypes from "prop-types"
<div style={{color:'blue'}}>222</div>
*/

/*
export default class App extends Component {
  
  state={list:[]}
  componentDidMount() {
    axios.get("/test.json").then((res) => {
      console.log(res);
      this.setState({
        list:res.data
      })
    });
  }

  render() {
    return <div>App
      <Child str={this.state.list}></Child>
    </div>;
  }
}

// import React, { Component } from 'react'

class Child extends Component {
  static propTypes = { str: PropTypes.array };
  render(){
    return <div style={{color:'blue'}}>App</div>;
  }
}
*/


//import React, { Component } from "react";
//// static propTypes = {title: PropTypes.string}
//// 	al(() => {}, 1000);clearInterval(time);
//// {this.state.list.map(i=><li key={i}>{i}</li>)}
//// onChange={(evt)=>{console.log(evt.target.value)
//// 	switch (num){case 1:return ;case 2: return ;}
//
//export default class App extends Component {
//  state = { text: "", list: [1, 2, 3] };
//  which(){
//    switch (this.state.list){
//      case 1 :
//        return 'aaa'
//      case 2 :
//        return 'bbb'
//      case 3 :
//        return 'ccc'
//    }
//  }
//  render() {
//    return (
//      <div>
//        <div>App</div>
//        <input
//          value={this.state.text}
//          onChange={(evt) => {
//            console.log(evt.target.value);
//            this.setState({ text: evt.target.value });
//          }}
//        ></input>
//        <button
//          onClick={() => {
//            let newList = [...this.state.list];
//            newList.push(this.state.text)
//            this.setState({ list: newList});
//            console.log(this.state.list, this.state.text);
//          }}
//        >
//          add
//        </button>
//        <ul>
//          {this.state.list.map((item) => (
//            <li key={item}>{item}</li>
//          ))}
//        </ul>
//      </div>
//    );
//  }
//}
