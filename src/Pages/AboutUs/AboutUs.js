import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import pushup from '../../Images/pushup.png';

import './AboutUs.css';

function AboutUs() {
    return(    
        <div className="aboutus-page">
            <Navigation/>

            <div className="aboutus-sct1">
                <div className="sct1-info">
                    <h1 className="f3 mb3">Founder</h1>
                    <img src={pushup} alt="spacer"/>
                    <h1 className="f2 mt3 mb3">Meet Erik and Andrew.</h1>
                    <h2 className="f3">He Wants People to be Happy</h2>
                </div>
            </div>

            <div className="aboutus-sct2">
                <div className="sct2-info">
                    <h1>Our Goal</h1>
                    <h1>We believe that fitness is essential to living a happy life and it should be enjoyed by all.
                        Here at FitLib, we want to eliminate the knowledge gap that separates people from their fitness
                        goals.
                    </h1>
                </div>
            </div>
            <div className="aboutus-sct3"></div>
        </div>
    );
}

export default AboutUs;