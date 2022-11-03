import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
export default function Nowplaying(props) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res.data);
      setlist(res.data);
    });
  }, []);
  const history = useHistory();
  const handlechangepage = (id) => {
    // console.log("click");
    // window.location.href='#/detail'+id
    // console.log(props);
    //es6字符串模板${1+1}和python里面的字符串格式化是一样的
    // props.history.push(`/detail/${id}`);
    //1.动态路由传参
    history.push(`/detail/${id}`);
    //2.query传参
    // history.push({ pathname: "/detail", query: { id: id } })
    //3.state传参
    // history.push({ pathname: "/detail", state: { id: id } });
  };
  return (
    <div>
      {list.map((item) => (
        <WithFilmItem key={item.filmId} {...item} />
      ))}
      {/* {list.map((item) => (
        <li
          key={item.filmId}
          onClick={() => {
            handlechangepage(item.filmId);
          }}
        >
          {item.name}
        </li>
      ))} */}
    </div>
  );
}
//用hooks的写法
// import { useHistory } from "react-rouder-dom";
// const history = useHistory();
// history.push(`/detail/${id}`);

function FilmItem(props) {
  // let {filmId,name}=props
  return (
    <div>
      <li
        // key={props.filmId}
        onClick={() => {
          props.history.push(`/detail/${props.filmId}`);
        }}
      >
        {props.name}
      </li>
    </div>
  );
}

const WithFilmItem = withRouter(FilmItem);