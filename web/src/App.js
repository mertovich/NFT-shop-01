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
    productList: [],
    token: '',
    loginStatus: 'false',
    user: {},
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

  addToCartButton = (product) => {
    let basketList = this.state.basket
    let tmp = basketList.find(p => p._id === product._id)
    if (!tmp) {
      basketList.push(product)
    }
    this.setState({ basket: basketList })
  }

  removeProductBasketList = (id) => {
    let tmpList = this.state.basket
    let tmp = []
    tmpList.forEach(item => {
      if (item._id !== id) {
        tmp.push(item)
      }
    })
    this.setState({ basket: tmp })
  }

  getProductList = () => {
    fetch('http://localhost:8080/productlist')
      .then(data => data.json())
      .then(data => this.setState({ productList: data }))
  }

  onChangeHandler = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  registerSubmitHandler = async (event) => {
    await this.register()
    let user = this.state.user
    this.setState({token:user.token})
    this.setState({loginStatus:user.login})
    alert(this.state.loginStatus)
    event.preventDefault();
  }

  register = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: this.state.name, lastName: this.state.lastName, email: this.state.email, password: this.state.password })
    }
    fetch('http://localhost:8080/register', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({user:data}));
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
          <Route path='/register' element={<Register onChangeHandler={this.onChangeHandler} registerSubmitHandler={this.registerSubmitHandler} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/store' element={<Store productList={this.state.productList} getProductList={this.getProductList} addToCartButton={this.addToCartButton} />} />
          <Route path='/basket' element={<Basket basket={this.state.basket} removeProductBasketList={this.removeProductBasketList} />} />
        </Routes>
      </div>
    )
  }
}
