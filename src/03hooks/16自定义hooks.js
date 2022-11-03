// const getCinemaList = useMemo(()=>expression,[])
//const { getCinemaList } = useFilter(cinemaList, myText);
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "../css/选项卡.css";

function useCinemaList() {
  const [cinemaList, setCinemaList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1384733",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630311902059432523464705"}',

        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data.data.cinemas);
      setCinemaList(res.data.data.cinemas);
    });
  }, []);
  //加不加大括号很不一样,说是不是解构,是返回一个对象,
  //没有大括号它是列表,有就是对象
  return { cinemaList };
}

function useFilter(cinemaList, myText) {
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
      ),
    [cinemaList, myText]
  );
  return { getCinemaList };
}
export default function Cinema() {
  const [myText, setmyText] = useState("");
  const { cinemaList } = useCinemaList();
  const { getCinemaList } = useFilter(cinemaList, myText);
  //自定义hooks,const{first}=useName(argument) first是返值大括号是解构,useName是函数,argument是形参
  //useMemo将返回结果,而不是函数体,如果是一个复杂的逻辑可以优化性能

  return (
    <div>
      {/* // 值为当前mytext的值,状态更新mytext为输入框事件目标的值 */}
      <input
        value={myText}
        onChange={(evt) => {
          setmyText(evt.target.value);
        }}
      />
      {/* //getCinemaList函数的返回值映射 */}
      {getCinemaList.map((item) => (
        <dl key={item.cinemaId}>
          <dt>{item.name}</dt>
          <dd>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}
