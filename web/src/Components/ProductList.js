import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import btcGif from '../images/btcGif.gif'

export default class ProductList extends Component {
    componentDidMount(){
        this.props.getProductList()
    }
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {this.props.productList.map(product => (
                        <Col>
                            <Card style={{
                                border: 'none'
                            }}>
                                <Card.Img variant="top" src={product.url} />
                                <Card.Body className='ProductListCardBody' >
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {product.artiste}
                                    </Card.Text>
                                    <Card.Text>
                                        {product.price} <img src={btcGif} height='25px' width='25px' />
                                    </Card.Text>
                                    
                                    <button onClick={() => this.props.addToCartButton(product)} className='ProductListCardBodyButton' > add to cart </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}
