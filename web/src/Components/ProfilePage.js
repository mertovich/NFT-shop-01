import React, { Component } from 'react'
import { Container,Button } from 'react-bootstrap'
import '../App.css'
import btcGif from '../images/btcGif.gif'

export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Container className='ProfilePageConainer'>
                    <h1> Hello {this.props.name} </h1>
                    <p> id : {this.props.user.id} </p>
                    <p> name : {this.props.user.name} </p>
                    <p> Last Name : {this.props.user.lastName} </p>
                    <p> Email : {this.props.user.email} </p>
                    <p> Balance : {this.props.user.balance} <img src={btcGif} height='25px' width='25px' /> </p>
                    <Button onClick={() => this.props.logOutButton()} variant="outline-danger">Log Out</Button>
                </Container>
            </div>
        )
    }
}
