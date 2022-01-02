import React, { Component } from 'react'
import {Table,Container,Button} from 'react-bootstrap'

export default class BasketList extends Component {
    render() {
        return (
            <div>
                <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>artiste</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.basket.map(product => (
                            <tr key={product._id} >
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.artiste}</td>
                                <td>{product.price} BTC</td>
                                <td><Button style={{width:'100%'}} variant="danger">Delet</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Container>
            </div>
        )
    }
}
