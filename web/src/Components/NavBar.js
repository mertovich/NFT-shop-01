import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'
import Logo from '../images/Logo.svg'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar  className='NavBar'>
                    <Container>
                        <Navbar.Brand href="#home"><img src={Logo} height='50px' width='50px' />  </Navbar.Brand>
                        <Nav className="me-right">
                        <Link className='NavBarLink' to='/' >Home</Link>
                        <Link className='NavBarLink' to='/store' >Store</Link>
                        <Link className='NavBarLink' to='/register' >Register</Link>
                        <Link className='NavBarLink' to='/login' >Login</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
