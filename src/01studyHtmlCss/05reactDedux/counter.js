import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT,DECREMENT,RESET}from './action'
class Counter extends Component {
  constructor(props) {
    super(props);
  }
  // state = { count: 0 };
  add = () => {
    // this.setState({ count: this.state.count + 1 });
    // console.log(this.state.count);
    this.props.dispatch({ type: INCREMENT });
  };
  del = () => {
    this.props.dispatch({ type: DECREMENT });
    // this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.props.dispatch({ type: RESET });
  };
  render() {
    const { count} = this.props;
    console.log(this.props)
    return (
      <div>
        <h2>Counter</h2>

        <button onClick={this.add}>add</button>
        <span>{this.props.count}</span>
        <button onClick={this.del}>del</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(Counter);
