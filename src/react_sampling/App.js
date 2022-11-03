import React, { Component } from "react";
{
  /*
	shouldComponentUpdate(nextProps,nextState)
	getSnapshotBeforeUpdate = (prevProps, prevState) => {return value};componentDidUpdate(prevProps, prevState,value) {}
	num==0?<Film />:(num==1?<Cinema />:(num==2?<Center />:null))
<button onClick={this.handleClick2.bind(this)}>add2</button>
	{this.props.children}
*/
}

export default class App extends Component {
  myref=React.createRef()
  state = { name: "111" };
  handleclick=()=>{
    console.log('click',this.myref.current.value)
    this.myref.current.value=''
  }
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              name: "2222",
            });
          }}
        >
          click
        </button>
        {this.state.name}
        <Child>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
        </Child>
        <input ref={this.myref}></input>
        <button onClick={this.handleclick}>add</button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, value) {
    console.log("componentDidUpdate", value);
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate");
    return 100;
  };
}

function Child(props) {
  return (
    <div>
      {props.children}
      child
      {props.children}
    </div>
  );
}
