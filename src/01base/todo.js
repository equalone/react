import React, { Component } from "react";

export default class Todo extends Component {
  myRef = React.createRef();
  a = 100;
  state = {
    lis: [
      { id: 1, mytext: "aaa" },
      { id: 2, mytext: "bbb" },
      { id: 3, mytext: "ccc" },
    ],
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleclick}>add</button>
        <ul>
          {this.state.lis.map((item, index) => (
            <li key={item.id}>
              {item.mytext}
              {/* <button onClick={this.handleDelClick.bind(this, index)}>
                del
              </button> */}
              <button onClick={() => this.handleDelClick(index)}>del</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleclick = () => {
    console.log("click", this.myRef.current.value);

    let newList = [...this.state.lis];
    newList.push({
      id: Math.random() * 100000,
      mytext: this.myRef.current.value,
    });
    this.setState({ lis: newList });
  };
  handleDelClick(index) {
    console.log("del-click", index);
  }
}
