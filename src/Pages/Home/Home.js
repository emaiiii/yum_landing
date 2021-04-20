import React from 'react';
import {Button} from 'react-bootstrap';
import Navigation from '../../Components/Navigation/Navigation';
import teacher from '../../Images/teacher.png';
import schedule from '../../Images/schedule.png';
import change from '../../Images/change.png';
import money from '../../Images/money.png';
import savemoney from '../../Images/savemoney.png';
import relationship from '../../Images/relationship.png';


import './Home.css';

function Home() {
    return(    
        <div className="home-page">
            <Navigation/>

            <div className="home-container1">
                <section className="banner-container1">
                    <h1 className="banner-text1">Gain Access to Exclusive Work Out Content From Your Favorite Fitness Creators</h1>
                    <h1 className="banner-text2">Become The Best Version of Yourself</h1>
        
                    <div className="button-container">
                        <Button className="banner-button" variant="outline-warning" size="sm">For Creators</Button>
                        <Button className="banner-button" variant="outline-warning" size="sm">For Users</Button>
                    </div>
                    </section>
            </div>

            <div className="home-container2">
                <div className="banner-container2">
                    <h1 className="f1 tc mb3 fcOrange">Transform The Way You Learn To Work Out</h1>
                    <h1 className="f3 fw1 tc mb4">On Fitlib, gain access to exclusive workout content from your favorite fitness creators.
                    See what kind of work it takes to gain and maintain the physiques that you look up to. Learn and incorporate
                    this new knowledge into your own workout routines. </h1>

                    <div className="info1-container">
                        <div className="info1-sct">
                            <img className="info1-pic" src={teacher} alt="s1"/>
                            <h1 className="f4 fw5 fcOrange">Get Exlusive Content</h1>
                            <h1 className="f4 fw1 tc">See what kind work and knowledge goes into building the physiques of your favorite fitness creators.</h1>
                        </div>

                        <div className="info1-sct">
                            <img className="info1-pic" src={schedule} alt="s2"/>
                            <h1 className="f4 fw5 fcOrange">Get a Scheduler</h1>
                            <h1 className="f4 fw1 tc">Have access to an easy to use scheduler tool to plan your workouts and keep yourself on track to achieve your goals.</h1>
                        </div>

                        <div className="info1-sct">
                            <img className="info1-pic" src={change} alt="s3"/>
                            <h1 className="f4 fw5 fcOrange">Make Workouts Your Own</h1>
                            <h1 className="f4 fw1 tc">Be able to create and plan workouts or personalize workouts that you import from fitness creators.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-spacer1">
                <div className="info-spacer1-container">
                    <h1 className="f1 fw2 spacer-text1">Join Our Mailing List to Receive Updates</h1>
                    <Button variant="outline-warning" size="lg">Let's Go</Button>
                </div>
            </div>

            <div className="home-container3">
                <div className="banner-container3">
                    <h1 className="f1 tc fcWhite">Power To Fitness Creators</h1>
                    <h1 className="f3 fw1 tc fcWhite">On Fitlib, fitness creators will have the tools to create an online business 
                    without having to worry about the technological side of having an online business. As a fitness creator starting
                    on FitLib, you will be entering the business of helping users towards achieving their fitness goals.</h1>
                    <h1 className="f2 tc mt4">What's in it for Creators?</h1>

                    <div className="info2-container">
                        <div className="info2-sct">
                            <img className="info2-pic" src={money} alt="s4"/>
                            <h1 className="f4 fw5">Additional Income Stream</h1>
                            <h1 className="f4 fw1 tc">Give fans insight on what it takes to get gains—give them the tools to succeed in their own fitness journey.</h1>
                        </div>
                        <div className="info2-sct">
                            <img className="info2-pic" src={savemoney} alt="s5"/>
                            <h1 className="f4 fw5">Save on Tech Expenses</h1>
                            <h1 className="f4 fw1 tc">Avoid the expenses of building an online fitness business—focus on the fitness and leave the tech to us.</h1>
                        </div>
                        <div className="info2-sct">
                            <img className="info2-pic" src={relationship} alt="s6"/>
                            <h1 className="f4 fw5">Connect With Your Biggest Fans</h1>
                            <h1 className="f4 fw1 tc">Engage on a deeper level with fans that look up to you and want to learn from you.</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*Newsletter*/}
            <div className="newsletter-div">
                <div className="newsletter-container">
                    <h1 className="font1 newsletter-header">Keep Up With Us While We Are Under Development</h1>
                    <h1 className="newsletter-info">Sign Up For Our Mailing List</h1>
                    <form className="form-container">
                        <input className="newsletter-input" type="email" id="newsletter-email" placeholder="Your Email Address"></input>
                        <Button className="newsletter-button" id="newsletter-button" size="lg">Sign Up</Button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Home;