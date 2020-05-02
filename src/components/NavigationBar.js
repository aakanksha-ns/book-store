import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/NavigationBar.css'

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#"><span className="chapter-logo">CHAPTER</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/shop"><span className="nav-item">Shop</span></Nav.Link>
                    <Nav.Link href="/login"><span className="nav-item">Sign In</span></Nav.Link>
                    <Nav.Link href="/"><span className="nav-item">Register</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;