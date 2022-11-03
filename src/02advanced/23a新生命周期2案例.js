import React, { Component } from "react";
// 邮件增加后,显示最后一次改变之前的邮件
export default class App extends Component {
  myRef = React.createRef();

  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(this.myRef.current.scrollHeight);
    return this.myRef.current.scrollHeight;
  };
  //这里的value是上面getSnapshotBeforeUpdate的返回值
  componentDidUpdate(prevProps, prevState, value) {
    console.log(this.myRef.current.scrollHeight);
    this.myRef.current.scrollTop += this.myRef.current.scrollHeight - value;
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [
                ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                ...this.state.list,
              ],
            });
          }}
        >
          来邮件
        </button>
        <h1>邮件应用</h1>
        <div
          ref={this.myRef}
          style={{ height: "200px", overflow: "auto", background: "yellow" }}
        >
          <ul>
            {this.state.list.map((item) => (
              <li key={item} style={{ height: "100px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
