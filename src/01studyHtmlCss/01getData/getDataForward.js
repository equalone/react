// 前端面试题拿了网页上的数据,自己用react渲染到页面上
// 解决了axios拿到数据怎么第一时间渲染到网页上的问题 不要直接把数据渲染,用map
// 解决了json对象的嵌套解构问题,eval("("+data+")")
// 解决了代码块在react中实现的问题,主要是换行和空格的显示问题,<pre></pre>
import React, { PureComponent } from "react";
import axios from "axios";
export default class App extends PureComponent {
  
  constructor() {
    super();
    this.state = { mydata: [] };
    axios.get("/testd.json").then((res) => {
     console.log(res.data.questions);
    //  answerkey
      this.setState({ mydata: res.data.questions});
    });
    
  }
  
  render() {
    return (
      <div>
        {/* {console.log(this.state.mydata)} */}
        <ol>
          {this.state.mydata.map((item) => (
            <li key={item.id}>
              {/* {item.title} */}
              {/* <br /> */}
              {/* <pre>
                {eval("(" + item.question + ")").ops.map((item) => item.insert)}
              </pre>
              <br /> */}
              
              {/* {item.answerkey} */}
              {/* {eval("(" + item.answerkey + ")").ops[0].insert} */}
               {/* <pre> */}
                {eval("(" + item.answerkey + ")").ops.map(
                  (item) => item.insert
                )}
              {/* </pre>  */}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
