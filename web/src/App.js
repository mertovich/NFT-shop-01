import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Store from './Pages/Store'

export default class App extends Component {
  state = {
    NavBarActive:'false'
  }

  NavBarActiveButton = () =>{
    if(this.state.NavBarActive === 'false'){
      this.setState({NavBarActive:'true'})
    }
  }
  NavBarActiveButtonOver = () =>{
    if(this.state.NavBarActive === 'true'){
      this.setState({NavBarActive:'false'})
    }
  }
  render() {
    return (
      <div style={{
        background: 'black',
        height: '100vh',
        width: '100%',
        overflowX: 'hidden',
      }} >
        <NavBar NavBarActive={this.state.NavBarActive} NavBarActiveButton={this.NavBarActiveButton} NavBarActiveButtonOver={this.NavBarActiveButtonOver}  />
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
