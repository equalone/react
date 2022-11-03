import React, { useState ,useEffect} from "react";
import axios from 'axios'
export default function App(props) {
  // React hooks钩子函数, 设置状态的初始值List, 为状态更新的唯一方法的函数命名setList, 每次调用setList 是整个函数重新执行一遍，渲染一遍
  //下面的写法是递归了, 回调函数自动执行,钩子函数又将整个函数运行一遍，形成递归调用
  const [list, setList] = useState([]);
  //axios.get('test.js')
  //.then(res=>
  //{console.log(res.date)
  //setList(res.date)})
  //副作用函数, 后面的空数组表示不依赖于任何东西
  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []);
  return <div>app</div>;
}
