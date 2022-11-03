import React ,{ useEffect }from "react";
import store from "../../redux/store";
import { show,hide } from "../../redux/actionCreate/TabbarActionCreate";
export default function Detail(props) {
  // console.log(props);
  console.log(props.match.params.myid)
  //   console.log(props.location.query.id)
//   console.log(props.location.query.id);
useEffect(() => {
  //console.log('create')
  //store.dispatch 通知
  store.dispatch(hide())
  return () => {
    console.log('destroy')
    store.dispatch(show())
  }
}, [])

  return <div>detail</div>;
}
