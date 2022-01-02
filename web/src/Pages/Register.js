import React, { Component } from 'react'
import RegisterForm from '../Components/RegisterForm'

export default class Register extends Component {
    render() {
        return (
            <div>
                <RegisterForm onChangeHandler={this.props.onChangeHandler} registerSubmitHandler={this.props.registerSubmitHandler} />
            </div>
        )
    }
}
