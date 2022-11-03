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
              {/*传递参数的两种方式, 第二种方式在下面一点*/}
              {/* <button onClick={this.handleDelClick.bind(this, index)}>
                del
              </button> */}
              {/*富文本展示*/}
              <span dangerouslySetInnerHTML={{ __html: item.mytext }}></span>
              <button onClick={() => this.handleDelClick(index)}>del</button>
            </li>
          ))}
        </ul>
        {/*条件渲染三
种方式*/}
        {/*{this.state.lis.length===0?<div>暂无事项</div>:null}*/}
        {this.state.lis.length === 0 && <div>暂无事项</div>}
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
    {
      /*点击按键以后清空输入框*/
    }
    this.myRef.current.value = "";
  };
  handleDelClick(index) {
    console.log("del-click", index);
    //let newList=this.state.list.slice()
    let newList = this.state.lis.concat();
    newList.splice(index, 1);
    this.setState({
      lis: newList,
    });
  }
}
