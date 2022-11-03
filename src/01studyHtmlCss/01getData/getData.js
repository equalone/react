import axios from "axios";
import React, { PureComponent } from "react";

export default class GetData extends PureComponent {
  state = { quote: "", author: "", data: [] };

  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        console.log(res.data.quotes[1]);

        this.setState({
          // quote:res.data.quote,
          // author:res.data.author
          data: res.data.quotes,
        });
      });
  }
  // componentDidUpdate(state){
  // this.setState({
  //       quote: this.state.data[1].quote,
  //       author: this.state.data[1].author,
  //     });
  // }
  render() {
    return (
      <div>
        <div onClick={
          this.randomNum
          
        }>click</div>
        {/* <AA {...this.state.data}></AA> */}
      </div>
    );
  }
  randomNum = () => {
    //console.log(Object.keys(this.state.data).length);
    console.log(Math.floor(Math.random() * 102));
    // {this.state.data[Math.floor(Math.random()*102)]}
    // return this.state.data[1].quote;
  };

  //   UNSAFE_componentWillUpdate() {
  //     this.setState({
  //       quote: this.state.data[1].quote,
  //       author: this.state.data[1].author,
  //     });
  //   }
}
class AA extends PureComponent {
  state = { quote: "", author: "", data: [] };

  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  //     )
  //     .then((res) => {
  //       // console.log(res.data.quotes[1]);

  //       this.setState({
          
  //          data:res.data.quotes
  // });
  //     });
  // }
  render() {
    return <div>{this.state.data[1].quote}</div>
  }
}