import React from 'react';
import {Button} from 'react-bootstrap';
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Navigation from '../../Components/Navigation/Navigation';
import todo from '../../Images/todo.png';
import points from '../../Images/points.png';

import './Home.css';

function Home() {

    const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(    
        <div className="home-page">
            <Navigation/>

            {/*Hero section 1*/}
            <div className="home-container1">
                <section className="banner-container1">
                    <h1 className="banner-text1"><span className="fcOrange">Earn Points</span> to <span className="fcOrange">Collect Rewards</span> When You Eat at a Restaurant</h1>
                    <Button className="banner-button" variant="warning" size="lg" href="#user-sct">Learn More</Button>
                </section>
            </div>

            {/*Info section 1*/}
            <div className="home-container2" id="user-sct">
                <div className="banner-container2">
                    <h1 className="f1 tc mb3 fcOrange txt1-mb2">Transform the Way You Earn on Your Next Meal</h1>
                    <h1 className="f3 fw1 tc mb4 txt2-mb2">At Yum, we have a deep appreciation for food and those that share this appreciation for food. That is why we want to 
                    take the way food lovers earn rewards to the next level.</h1>

                    <div className="info1-container">
                        <div className="info1-sct">
                            <img className="info1-pic" src={todo} alt="s1"/>
                            <h1 className="f4 fw5 tc fcOrange">What You Are Going to Do</h1>
                            <h1 className="f4 fw1 tc">Whenever you go out for food or drinks, simply just search up the restaurant, check in, and take a picture of the receipt
                            for your meal.</h1>
                        </div>

                        <div className="vl"></div>

                        <div className="info1-sct">
                            <img className="info1-pic" src={points} alt="s2"/>
                            <h1 className="f4 fw5 tc fcOrange">What You Get For Your Effort</h1>
                            <h1 className="f4 fw1 tc">After you check in and upload a picture of your receipt, you will receive points that you can use to redeem rewards for more 
                            food!</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*Newsletter section*/}
            <div className="newsletter-div" id="newsletter-sct">
                <div className="newsletter-container">
                    <h1 className="font1 tc newsletter-header">Keep Up With Us While We Are Under Development</h1>
                    <h1 className="newsletter-info">Sign Up For Our Mailing List</h1>
                    <form className="form-container" onSubmit={handleSubmit}>
                        <MailchimpSubscribe
                            url={process.env.REACT_APP_MAILCHIMP_URL}
                            render={({ subscribe, status, message }) => (
                            <div>
                                <SimpleForm onSubmitted={formData => subscribe(formData)} />
                                {status === "sending" && <div style={{ color: "black" }}>sending...</div>}
                                {status === "error" && <div style={{ color: "black" }} dangerouslySetInnerHTML={{__html: message}}/>}
                                {status === "success" && <div style={{ color: "black" }}>Subscribed</div>}
                            </div>
                            )}
                        />
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Home;