import React, { Component } from 'react'
import BasketList from '../Components/BasketList'
import {Container} from 'react-bootstrap'

export default class Basket extends Component {
    render() {
        return (
            <div>
                <BasketList basket={this.props.basket} />
            </div>
        )
    }
}
