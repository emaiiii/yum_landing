import React from 'react';
import {Button, Form} from 'react-bootstrap';

import './Signinbox.css';

function Signinbox() {
    return(
        <div className="signinbox">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className="singinbox-button" type="submit">
                    Log In
                </Button>

                <div className="fp-sct">
                    <a href="fpass">Forgot Password?</a>
                </div>


                <hr/>

                <Button className="singinbox-button createacc-button" type="submit">
                    Create an Account
                </Button>
            </Form>
        </div>
    );
}

export default Signinbox;