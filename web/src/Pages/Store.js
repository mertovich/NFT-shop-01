import React, { Component } from 'react'
import ProductList from '../Components/ProductList'
import { Container } from 'react-bootstrap'

export default class Store extends Component {
    render() {
        return (
            <div>
                <Container>
                    <ProductList productList={this.props.productList} getProductList={this.props.getProductList} addToCartButton={this.props.addToCartButton} productListBuy={this.props.productListBuy} />
                </Container>
            </div>
        )
    }
}
