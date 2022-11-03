// 1 引入 redux,
// 2 createStore(reducer)
import { combineReducers, createStore } from "redux";
import CityReducer from "./reducers/Cityreducer";
import TabbarReducer from "./reducers/TabbarReducer";

const reducer =combineReducers({TabbarReducer,CityReducer})
const store = createStore(reducer);

// store.dispatch
// store.subscribe
// store.getState

// 简单的redux源码实现,同步状态下的,异步未考虑
// function createColeStore(reducer) {
//   let list = [];
//   var state = reducer(undefined,{});
//   function subscribe(callback) {
//     list.push(callback);
//   }
//   function dispatch(action) {
//     state = reducer(state, action);
//     for (var i in list) {
//       list[i] && list[i]();
//     }
//   }
//   function getState() {
//     return state;
//   }
//   return { subscribe, dispatch, getState };
// }

export default store;
