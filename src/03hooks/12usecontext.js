import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../css/中间人.css";
const GlobalContext = React.createContext();

export default function App() {
  const [filmList, setfilmList] = useState([]);
  const [info, setinfo] = useState("");
  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res.data);
      setfilmList(res.data);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        call: "打电话",
        sms: "发短信",
        info: info,
        setInfo: (value) => {
          setinfo(value);
        },
      }}
    >
      <div>
        {filmList.map((item) => (
          <FilmItems key={item.filmId} {...item}></FilmItems>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}

function FilmItems(props) {
  let { name, poster, grade, synopsis } = props;
  const value = useContext(GlobalContext);
//   console.log(value);

  return <div className="filmitem" onClick={() => {value.setInfo(synopsis);
              }}
            >
              <img src={poster} alt={name} />
              <h2>{name}</h2>
              <div>观众评分：{grade}</div></div>
}

function FilmDetail() {
  const value = useContext(GlobalContext);
  return <div className="filmdetail">film-detail-{value.info}</div>;
}
// 编程中函数式组件钩子context的写法比类组件的context写法简单的多
