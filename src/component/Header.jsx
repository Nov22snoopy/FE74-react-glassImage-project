import React, { Component } from 'react'

export default class Header
 extends Component {
  render() {
    return (
      <header style={{
        backgroundColor: "black",
        padding: "20px 0",
        opacity :"0.5",

      }}>
        <h1 className='display-4 text-white'>TRY GLASSES APP ONLINE</h1>
      </header>
    )
  }
}
