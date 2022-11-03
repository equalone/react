import React, {  useEffect, useContext, useReducer } from "react";
import axios from "axios";
import "../css/中间人.css";
const GlobalContext = React.createContext();
const initialState = { info: "", filmList: [] };
const reducer = (prevState, action) => {
  let newState = { ...prevState };
  switch (action.type) {
    //根据dispatch给的对象,对状态进行处理
    case "change-filmlist":
      newState.filmList = action.value;
      return newState;
    case "change-info":
      newState.info = action.value;
      return newState;
    default:
      return prevState;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("/test.json").then((res) => {
      dispatch({
        type: "change-filmlist",
        value: res.data,
      });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        {state.filmList.map((item) => (
          <FilmItems key={item.filmId} {...item}></FilmItems>
        ))}
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}

function FilmItems(props) {
   // 属性要解出来才能用
  let { name, poster, grade, synopsis } = props;
  //解构方法给订阅者使用
  const {dispatch} = useContext(GlobalContext);
  //   console.log(value);

  return (
    <div
      className="filmitem"
      onClick={() => {
        dispatch({
          type: "change-info",
          value: synopsis,
        });
      }}
    >
      <img src={poster} alt={name} />
      <h2>{name}</h2>
      <div>观众评分：{grade}</div>
    </div>
  );
}

function FilmDetail() {
  const {state} = useContext(GlobalContext);
  return <div className="filmdetail">film-detail-{state.info}</div>;
}
// 编程中函数式组件钩子context的写法比类组件的context写法简单的多
