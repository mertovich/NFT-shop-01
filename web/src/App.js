import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Store from './Pages/Store'

export default class App extends Component {
  render() {
    return (
      <div style={{
        background: 'black',
        height: '100vh',
        width: '100%',
        overflowX: 'hidden',
      }} >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </div>
    )
  }
}
