import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return(
        <Navbar className="navbar-container">
            <Navbar.Brand className="navbar-title" href="/">Yum</Navbar.Brand>

            <div className="account-container">
                <Nav.Link className="navbar-link" href="signin">Log in</Nav.Link>
                <Nav.Link className="navbar-link" href="signup">Sign up</Nav.Link>
            </div>
        </Navbar>
    );
}

export default Navigation;