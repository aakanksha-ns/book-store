import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/NavigationBar.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" className="nav-bg">
            <Navbar.Brand href="#"><span className="chapter-logo">CHAPTER</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Link to="/"><span className="nav-item">Register</span></Link>
                    <Link to="/login"><span className="nav-item">Sign In</span></Link>
                    <Link to="/shop"><span className="nav-item">Shop</span></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;