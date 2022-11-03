// const GlobalContext = React.createContext();

import React, { useReducer, useContext } from "react";

const reducer = (prevState, action) => {
  let newState = { ...prevState };
  switch (action.type) {
    case "change-a":
      newState.a = action.value;
      return newState;
    case "change-b":
      newState.b = action.value;
      return newState;
    default:
      return prevState;
  }
};

const initialState = {
  a: "1111",
  b: "2222",
};

const GlobalContext = React.createContext();

export default function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </GlobalContext.Provider>
  );
}

function Child1() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div style={{ background: "red" }}>
      <button
        onClick={() => {
          dispatch({ type: "change-a", value: "3333" });
        }}
      >
        改a
      </button>
      <button
        onClick={() => {
          dispatch({ type: "change-b", value: "44444" });
        }}
      >
        改b
      </button>
    </div>
  );
}

function Child2() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "yellow" }}>Child2{state.a}</div>;
}

function Child3() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "gray" }}>Child3{state.b}</div>;
}
