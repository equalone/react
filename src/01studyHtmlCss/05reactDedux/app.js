import React,{Component} from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./counter";

let initialState = {
  count: 0,
};
function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

// const App = () => {
//   <Provider store={store}>
//     <Counter />
//   </Provider>;
// };


// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });
const store = createStore(reducer);
// export default App;
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {/* 关联store */}

          <Counter />
        </Provider>
      </div>
    );
  }
}