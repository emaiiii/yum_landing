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
                    <h1 className="lh-title font1 banner-text1">Get Exclusive Access to Work Out Content From Your Favorite Fitness Creators</h1>
                    <h1 className="lh-title font1 banner-text2">Become The Best Version of Yourself</h1>
                    
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

            <div className="newsletter-container">
                <h1 className="font1 newsletter-header">Keep Up With Us While We Are Under Development</h1>
                <h1 className="newsletter-info">Sign Up For Our Mailing List</h1>
                <form className="form-container">
                    <input className="newsletter-input" type="email" id="newsletter-email" placeholder="Your Email Address"></input>
                    <Button className="newsletter-button" id="newsletter-button" size="lg">Sign Up</Button>
                </form>
            </div>
        </div>
    );
}

export default Home;