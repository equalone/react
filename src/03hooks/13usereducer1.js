import React, { useReducer } from "react";

const reducer = (prevState, action) => {
  //prevState上一次的状态，action是dispatch传过来的对象
  console.log("reducer", prevState, action);
  let newState = { ...prevState };
  switch (action.type) {
    case "minus":
      newState.count--;
      return newState;
    case "add":
      newState.count++;
      return newState;
    default:
      return prevState;
  }
};
//初始值就是一个对象
const initialState = {
  count: 0,
};

export default function App(props) {
  //reducer外部状态管理函数返回给state一个状态,initialState状态的初始值state内部状态dispatch处理状态的唯一方法
  //使用initialState在外部给state一个初始值,
  //dispatch建立一个对象,传递给外部reducer函数做为第二个参数action
  //reducer第一个参数是老状态,第二个参数是action,是一个对象,以这个对象为条件来改变状态值,状态外置,状态在函数体外改变,按道理状态改变函数全部重新执行
  //useReducer执行流程initialState赋值,state可用,dispatch向外传参,reducer改状态
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "minus",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: "add",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
