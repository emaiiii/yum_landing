import React from 'react';
import {Button} from 'react-bootstrap';
import Navigation from '../../Components/Navigation/Navigation';
import homeVideo from './landing-video1.mp4';
import './Home.css';

function Home() {
    return(    
        <div className="home-page">
            <Navigation/>

            <div className="hero-container">
                <section className="banner-container">
                    <h1 className="f1 lh-title banner-text1">Get Exclusive Access to Work Out Content From Your Favorite Fitness Creators</h1>
                    <h1 className="f1 lh-title banner-text2">Become The Best Version of Yourself</h1>
                    
                    <div className="banner-button-container">
                        <Button className="banner-button" size="lg">Learn More</Button>
                    </div>
                </section>

                <div className="video-content">
                    <video autoPlay loop muted id='video'>
                        <source src={homeVideo} type='video/mp4'/>
                    </video>
                </div>
            </div>

            <div className="footer">
                <h1>©FitLib</h1>
            </div>
        </div>
    );
}

export default Home;