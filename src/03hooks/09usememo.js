// const getCinemaList = useMemo(()=>expression,[])


import React, { Component, useEffect, useState, useMemo } from "react";
import axios from "axios";
import "../css/选项卡.css";

export default function Cinema() {
  const [cinemaList, setCinemaList] = useState([]);
  const [myText, setmyText] = useState("");

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
  //useMemo将返回结果,而不是函数体,如果是一个复杂的逻辑可以优化性能
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
      ),
    [cinemaList, myText]
  );
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
