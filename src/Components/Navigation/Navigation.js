import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return(
        <Navbar className="navbar-container" fixed="top">
            <Navbar.Brand className="navbar-title" href="/">FitLib</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="navbar-link" href="/">Home</Nav.Link>
                <Nav.Link className="navbar-link" href="/AboutUs">About Us</Nav.Link>
                <Nav.Link className="navbar-link" href="/ContactUs">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;