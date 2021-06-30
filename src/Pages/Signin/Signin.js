import React from 'react';

import Navigation from '../../Components/Navigation/Navigation';
import Signinbox from '../../Components/Signinbox/Signinbox';


import './Signin.css';

function Signin() {
    return(
        <div className="signin-page">
            <Navigation/>
            
            <div className="signinpage-sct"> 
                <h1>hello</h1>
                <Signinbox className="signinbox-pos"/>
            </div>

        </div>
    );
}

export default Signin;