import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import HomeTwoSection from '../Components/HomeTwoSection'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>

                        </Col>
                        <Col>
                            <HomeTwoSection/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
