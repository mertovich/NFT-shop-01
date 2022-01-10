import React, { Component } from 'react'
import ProfilePage from '../Components/ProfilePage'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <ProfilePage user={this.props.user} logOutButton={this.props.logOutButton} onChangeHandler={this.props.onChangeHandler} balanceSubmitHandler={this.props.balanceSubmitHandler} productList={this.props.productList} onChangeHandler={this.props.onChangeHandler} sellSubmitHandler={this.props.sellSubmitHandler} />
            </div>
        )
    }
}
