import React, { Component } from 'react'
import { Container, Button, Row, Col, Form, Table } from 'react-bootstrap'
import '../App.css'
import btcGif from '../images/btcGif.gif'

export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='3'>
                            <Container className='ProfilePageConainer'>
                                <h1> Hello {this.props.name} </h1>
                                <p> id : {this.props.user.id} </p>
                                <p> name : {this.props.user.name} </p>
                                <p> Last Name : {this.props.user.lastName} </p>
                                <p> Email : {this.props.user.email} </p>
                                <p> Balance : {this.props.user.balance} <img src={btcGif} height='25px' width='25px' /> </p>
                                <Button onClick={() => this.props.logOutButton()} variant="outline-danger">Log Out</Button>
                                <Form>
                                    <Form.Group className="mb-3" controlId="number">
                                        <Form.Label style={{ color: 'white' }}>Balance</Form.Label>
                                        <Form.Control onChange={(event) => this.props.onChangeHandler(event)} type="number" name='number' placeholder="Number" />
                                    </Form.Group>
                                    <Button onClick={(event) => this.props.balanceSubmitHandler(event)} variant="outline-success">
                                        Add balance
                                    </Button>
                                </Form>
                            </Container>
                        </Col>
                        <Col>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Artiste</th>
                                        <th>Price</th>
                                        <th>Sale price</th>
                                        <th>Sell</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.productList.map(product => (
                                        product.belonging === this.props.user.id ?
                                            <tr key={product.id} >
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.artiste}</td>
                                                <td>{product.price} <img src={btcGif} height='25px' width='25px' /> </td>
                                                <td>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="number">
                                                            <Form.Control onChange={(event) => this.props.onChangeHandler(event)} type="number" name='productNumber' placeholder="BTC" />
                                                        </Form.Group>
                                                    </Form>
                                                </td>
                                                <td> <Button onClick={(event) => this.props.sellSubmitHandler(event,product._id)} variant="outline-warning">Sell</Button></td>
                                            </tr>
                                            :
                                            null
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
