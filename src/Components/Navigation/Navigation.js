import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return(
        <Navbar fixed="top">
            <Navbar.Brand className="navbar-title" href="#home">FitLib</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="navbar-link" href="#home">Home</Nav.Link>
                <Nav.Link className="navbar-link" href="#features">Features</Nav.Link>
                <Nav.Link className="navbar-link" href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;