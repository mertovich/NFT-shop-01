import React, { Component } from 'react'
import RegisterForm from '../Components/RegisterForm'
import ProfilePage from '../Components/ProfilePage'


export default class Register extends Component {
    render() {
        return (
            <div>
                {this.props.loginStatus === 'true' ? <ProfilePage user={this.props.user} logOutButton={this.props.logOutButton} onChangeHandler={this.props.onChangeHandler} balanceSubmitHandler={this.props.balanceSubmitHandler} productList={this.props.productList} /> : <RegisterForm onChangeHandler={this.props.onChangeHandler} registerSubmitHandler={this.props.registerSubmitHandler} />}
            </div>
        )
    }
}
