import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 20 }).map((_, idx) => (
                        <Col>
                            <Card  style={{
                            border:'none'
                            }}>
                                <Card.Img variant="top" src="" />
                                <Card.Body className='ProductListCardBody' >
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>
                                        Price : 3 BTC
                                    </Card.Text>
                                    <button className='ProductListCardBodyButton' > add to cart </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}
