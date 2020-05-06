import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/NavigationBar.css';
import { Link } from "react-router-dom";


const show_links = (current_user, logged_in) => {
    if (logged_in) {
        return (
            <div>
                <Link to="/"><span className="nav-item">Hi {current_user}</span></Link>
                <Link to="/login"><span className="nav-item">Sign Out</span></Link>
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/"><span className="nav-item">Register</span></Link>
                <Link to="/login"><span className="nav-item">Sign In</span></Link>
            </div>
        )
    }
};

const NavigationBar = ({ current_user, logged_in }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" className="nav-bg">
            <Navbar.Brand href="#"><span className="chapter-logo">CHAPTER</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    {show_links(current_user, logged_in)}
                    <Link to="/shop"><span className="nav-item">Shop</span></Link>
                    <Link to="/cart"><span className="nav-item">Cart</span></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;