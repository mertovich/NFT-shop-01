import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Register from './Pages/Register'

export default class App extends Component {
  render() {
    return (
      <div style={{
        background: '#121212',
        height: '100vh',
        width: '100%',
        overflowX: 'hidden',
      }} >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    )
  }
}
