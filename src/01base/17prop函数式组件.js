import React, { Component } from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* class component */}
        <Navbar title='导航'></Navbar>代wa代
        {/* function component */}
        <Sidebar bg='red' position='right'></Sidebar>
      </div>
    )
  }
}
