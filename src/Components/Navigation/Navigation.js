import React from 'react';
import {Navbar} from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return(
        <Navbar className="navbar-container" fixed="top">
            <Navbar.Brand className="navbar-title" href="/">Yum</Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;