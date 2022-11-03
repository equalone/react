import React, { Component } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
//HashRouter加一个井字,Redirect模糊路由,Route路由,Switch只执行一次路由
import Films from '../views/films'
import Cinemas from '../views/cinemas'
import Center from '../views/center'
import NotFound from '../views/NotFound'
import Nowplaying from "../views/films/Nowplaying";
import Detail from "../views/films/Detail";
import Login from "../views/Login";
import City from "../views/City";
// BrowserRouter不带#,向后端要数据,后端没有相应的逻辑就会404
function isAuth(){
  return localStorage.getItem('token')
}
export default class Mrouter extends Component {
  render() {
    return (
      <div>
        {/* // 给地址栏加个井号 */}
        <HashRouter>
          {this.props.children}
          {/* //地址栏的地址与组件相连接, 也就是路由 */}
          <Switch>
            {/* //Switch只匹配一次 */}
            <Route path="/films" component={Films} />

            <Route path="/films/Nowplaying" component={Nowplaying} />
            <Route path="/cinemas" component={Cinemas} />
            {/* <Route path="/center" component={Center} /> */}
            {/* 另一种写法,比较麻烦,但可以加判断 */}
            {/* <Route path="/center" render={() => <Center />} /> */}
            {/* 路由拦截,无授权进login,有就进center */}
            {/* 这种写法不会自动传参,要手动传参 */}
            {/* center找了withRouter干爹,可以不用{...props} */}
            <Route
              path="/center"
              render={(props) => {
                return isAuth() ? <Center /> : <Redirect to="/Login" />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/city" component={City} />
            {/* :myid 是模糊的,是一个占位符,动态路由的写法 */}
            <Route path="/detail/:myid" component={Detail} />

            {/* query和state传参的写法 ,有隐患,生产中用动态路由*/}
            {/* <Route path="/detail" component={Detail} /> */}

            {/* //模糊匹配，/ // */}
            {/* <Redirect from="/" to="/films" /> */}
            {/* // 精确匹配 exact */}
            <Redirect from="/" to="/films" exact />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
// Route 的原理,原码解析
// class Router extends Component{
//    ...
//   render(){
//     var MyComponent =this.props.component
//     return <div>
//       <MyComponent history={} match={}.../>
//     </div>
//   }
// }