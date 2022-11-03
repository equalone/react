
import axios from "axios";

import React ,{Component,useEffect,useState}from 'react'
export default class App extends Component {
  state = {
    type: 1,
  };
  render() {
    // console.log(this.state.type);

    return (
      <div>
        <ul>
          <li
            onClick={() => {
              this.setState({
                type: 1,
              });
            }}
          >
            正在热映
          </li>
          <li
            onClick={() => {
              this.setState({
                type: 2,
              });
            }}
          >
            即将上映
          </li>
          <li
            onClick={() => {
              this.setState({
                type: 3,
              });
            }}
          >
            third
          </li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    );
  }
}

function FilmList(props) {
    const [list, setlist] = useState([])
    useEffect(() => {
         // console.log(this.props.type)
    if (props.type === 1) {
      // 正在热映
      // console.log("正在热映")
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7605863",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        // this.setState({
        //   list: res.data.data.films,
        // });
        // 改用函数式后,用setlist替代setstate
        setlist(res.data.data.films)
      });
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5818615",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        // this.setState({
        //   list: res.data.data.films,
        // });
        setlist(res.data.data.films)
      });
    }
// 根据父组件传来的值更新列表,如果没变就不更新
// 副作用函数的依赖更新,优化性能
    }, [props.type])
    
  return (
    
      <div>
        {/* 函数式没有this.state */}
        {list.map((item) => (
          <li key={item.filmId}>{item.name}</li>
        ))}
      </div>
    );
  
}
