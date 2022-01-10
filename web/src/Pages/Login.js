import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm'
import ProfilePage from '../Components/ProfilePage'

export default class Login extends Component {
    render() {
        return (
            <div>
                {this.props.loginStatus === 'true' ? <ProfilePage user={this.props.user} logOutButton={this.props.logOutButton} onChangeHandler={this.props.onChangeHandler} balanceSubmitHandler={this.props.balanceSubmitHandler} productList={this.props.productList} /> : <LoginForm onChangeHandler={this.props.onChangeHandler} loginSubmitHandler={this.props.loginSubmitHandler} />}
            </div>
        )
    }
}
