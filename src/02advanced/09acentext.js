import React, { Component } from "react";
import axios from "axios";
import "../css/中间人.css";
// 创建context对象,定式
//context供应商模式
const GlobalContext = React.createContext();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      info: "",
    };
    // 拿取自己的Test.js文件, 在public文件下
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6480188",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((ref) => {
      console.log(ref.data.data.films);
      this.setState({
        filmList: ref.data.data.films,
        info: "",
      });
    });
  }
  render() {
    return (
      //注意写法，和bootstrap很像包住所有html元素
      <GlobalContext.Provider
        value={{
          call: "打电话",
          sms: "发短信",
          info: this.state.info,
          changeInfo: (value) => {
            this.setState({
              info: value,
            });
          },
        }}
      >
        <div>
          {this.state.filmList.map((item) => (
            <FilmItems key={item.filmId} {...item}></FilmItems>
          ))}
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    );
  }
}
/*context consumer 消费者的写法,定式
(
<GlobalContext.Consumer>
{
()=>{
return
}
}
</GlobalContext.Consumer>
)
*/
class FilmItems extends Component {
  render() {
    let { name, poster, grade, synopsis } = this.props;
    // console.log(this.props);
    return (
      <GlobalContext.Consumer>
        {(value) => {
          //   console.log(value);

          return (
            <div
              className="filmitem"
              onClick={() => {
                // console.log(synopsis);

                //this.props.onEvent(synopsis)
                // value.info = "2222222";
                value.changeInfo(synopsis);
              }}
            >
              <img src={poster} alt={name} />
              <h2>{name}</h2>
              <div>观众评分：{grade}</div>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => <div className="filmdetail">film-detail-{value.info}</div>}
      </GlobalContext.Consumer>
    );
  }
}
