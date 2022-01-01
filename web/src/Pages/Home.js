import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import HomeTwoSection from '../Components/HomeTwoSection'
import HomeOneSection from '../Components/HomeOneSection'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <HomeOneSection />
                        </Col>
                        <Col>
                            <HomeTwoSection />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
