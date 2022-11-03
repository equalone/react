import axios from "axios";
import React, { PureComponent } from "react";

export class GetData extends PureComponent {
  state = { quote: "", author: "", data: [] };
  constructor() {
    super();
    axios.get("testb.json").then((res) => {
      console.log(res.data.quotes);

      this.setState({
        // quote:res.data.quote,
        // author:res.data.author
        data: res.data.quotes,
      });
    });
  }
  
  
  render() {
    // console.log(this.state.data);
    // console.log(this.state.data[11]);
    // console.log(this.state.data[11].quote);

    return (
      <div>
        GetData
        {/* {console.log(this.state.data)} */}
        {this.state.data.quote}
        {this.state.data.author}
      </div>
    );
  }
}

export default GetData;
