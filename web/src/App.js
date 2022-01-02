import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Store from './Pages/Store'
import './App.css'
import Basket from './Pages/Basket'

export default class App extends Component {
  state = {
    NavBarActive: 'false',
    basket: [],
    productList:[]
  }

  NavBarActiveButton = () => {
    if (this.state.NavBarActive === 'false') {
      this.setState({ NavBarActive: 'true' })
    }
  }
  NavBarActiveButtonOver = () => {
    if (this.state.NavBarActive === 'true') {
      this.setState({ NavBarActive: 'false' })
    }
  }

  addToCartButton = (product) =>{
    let tmp = this.state.basket
    tmp.push(product)
    this.setState({basket:tmp})
  }

  getProductList = () =>{
    fetch('http://localhost:8080/productlist')
    .then(data => data.json())
    .then(data => this.setState({productList:data}))
  }

  render() {
    return (
      <div style={{
        background: 'black',
        height: '100vh',
        width: '100%',
        overflowX: 'hidden',
      }} >
        <NavBar NavBarActive={this.state.NavBarActive} NavBarActiveButton={this.NavBarActiveButton} NavBarActiveButtonOver={this.NavBarActiveButtonOver} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/store' element={<Store productList={this.state.productList} getProductList={this.getProductList} addToCartButton={this.addToCartButton} />} />
          <Route path='/basket' element={<Basket basket={this.state.basket} />} />
        </Routes>
      </div>
    )
  }
}
