import React, { Component } from 'react'

export default class App extends Component {
    state={
        name:'cbc'
    }
    // 每次更新都会执行,通过逻辑改状态传给属性
    // 替代了componentWillMount
    static getDerivedStateFromProps(props, state) {
        // console.log(this.state.name)静态类属性没有this
        console.log("getDerivedStateFromProps");
        // substring 这个命令没见过 和slice好像
        return {name:state.name.substring(0,1).toUpperCase()+state.name.substring(1)
    }
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.setState({
                name:'xiaoming'
            })
        }}>click</button>
        {this.state.name}</div>
    )
  }
}
