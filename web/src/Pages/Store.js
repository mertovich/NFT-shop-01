import React, { Component } from 'react'
import ProductList from '../Components/ProductList'
import { Container } from 'react-bootstrap'

export default class Store extends Component {
    render() {
        return (
            <div>
                <Container>
                    <ProductList />
                </Container>
            </div>
        )
    }
}
