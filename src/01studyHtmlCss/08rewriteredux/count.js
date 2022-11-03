import React, { Component } from 'react'
import { connect } from 'react-redux';
class Count extends Component {
  
  state = { count: 0 };
  addHandleClick = () => {
    // this.setState({ count: this.state.count + 1 });
    this.props.dispatch({type: 'ADD'})
  };
  delHandleClick = () => {
    // this.setState({ count: this.state.count - 1 });
    this.props.dispatch({type: "DEL"})
  };
  render() {
    // const {count}=this.props
    return (
      <div>
        <button onClick={this.addHandleClick}>add</button>
        {this.props.count}
        <button onClick={this.delHandleClick}>del</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{return{count:state.count}}

export default connect(mapStateToProps)(Count)