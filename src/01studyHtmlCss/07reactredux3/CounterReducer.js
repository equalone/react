export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "COUNTERADD":
      return Object.assign({}, state, {
        count: state.count + 1, //计数器加一
      });
    default:
      return state;
  }
}

const initialState = {
  count: 0, //count初始值
};
