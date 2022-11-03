import React, { Component } from 'react'
import { Provider } from 'react-redux';

const ADD='ADD'
const DEL='DEL'
const RESET='RESET'
const initialState={count:0}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
      case ADD:
        return {
          count: state.count + 1,
        };
      case DEL:
        return {
          count: state.count - 1,
        };
      case RESET:
        return {
          count: 0,
        };
        default:return{state}
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>

                </Provider>
            </div>
        )
    }
}

export default App