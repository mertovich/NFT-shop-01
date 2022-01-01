import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.svg'
import basketLogo from '../images/basketLogo.svg'
import basketLogoRed from '../images/basketLogoRed.svg'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img src={Logo} height='50px' width='50px' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Link className='NavBarLink' to='/' >Home</Link>
                                <Link className='NavBarLink' to='/store' >Store</Link>
                                <Link className='NavBarLink' to='/register' >Register</Link>
                                <Link className='NavBarLink' to='/login' >Login</Link>
                                {this.props.NavBarActive === 'true' ? <Link onMouseOut={() => this.props.NavBarActiveButtonOver()} onMouseOver={() => this.props.NavBarActiveButton()} className='NavBarLink' to='/basket' >Basket <img src={basketLogoRed} height='15px' width='15px' /> </Link> : <Link onMouseOut={() => this.props.NavBarActiveButtonOver()} onMouseOver={() => this.props.NavBarActiveButton()} className='NavBarLink' to='/basket' >Basket <img src={basketLogo} height='15px' width='15px' /> </Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}