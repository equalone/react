import React, { Component } from "react";

class Box extends Component {
  shouldComponentUpdate(nextProps) {
    
    //   上一次选中的和这一次选中的渲染，红的变白，白的变红，其它的不用渲染，优化性能
    
    if (
      this.props.current === this.props.index ||
      nextProps.current === nextProps.index
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          border:
            this.props.current === this.props.index
              ? "5px solid red"
              : "1px solid gray",
          margin: "10px",
          float: "left",
        }}
      ></div>
    );
  }
}

export default class App extends Component {
  state = {
    list: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    current: 0,
  };
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={(evt) => {
            this.setState({ current: Number(evt.target.value) });
          }}
          value={this.state.current}
        />
        {/*Number  是JavaScript的变数字类函数吗*/}
        <div style={{ overflow: "hidden" }}>
          {this.state.list.map((i, index) => (
            <Box key={i} current={this.state.current} index={index} />
          ))}
        </div>
      </div>
    );
  }
}
