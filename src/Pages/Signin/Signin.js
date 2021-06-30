import React from 'react';

import Navigation from '../../Components/Navigation/Navigation';
import Signinbox from '../../Components/Signinbox/Signinbox';


import './Signin.css';

function Signin() {
    return(
        <div className="signin-page">
            <Navigation/>
            
            <div className="signinpage-sct"> 
                <div className="signin-info-sct">
                    <h1>Earn Rewards For Food</h1>
                    <h1>When You Buy Food!</h1>
                </div>
                <Signinbox className="signinbox-pos"/>
            </div>
            
        </div>
    );
}

export default Signin;