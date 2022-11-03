import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = { value: "" };
  handleChange = (evt) => {
    this.setState({ value: evt.target.value });
  };
  render() {
    return (
      <div>
        <Input value={this.state.value}handleChange={this.handleChange}></Input>
        <RenderInput value={this.state.value}></RenderInput>
      </div>
    );
  }
}

function Input(props) {
  console.log(props);
  return (
    <div>
      
      <input value={props.value} onChange={(evt)=>{props.handleChange.bind(this)(evt);}}></input>
    </div>
  );
}
function RenderInput(props) {
    console.log(props)
    return(
        <div>
            {props.value}
        </div>
    )
}