import React from 'react';
import MainFooter from '../footer/MainFooter';


function HomePage() {
    return (
        <div >
            
                <nav className="uk-navbar-container uk-navbar-transparent uk-container" uk-navbar="">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active">
                                <a href="/">LITTLE CREEK PRESCHOOL</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="#">About Us</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="#">Curriculum</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="#">Admission</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>


                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active register-button">
                                <a className="uk-text-capitalize" href="/login">Log in</a>
                            </li>
                            <li style={orText}>
                                <a className="uk-text-lowercase uk-text-light" href="#">or</a>
                            </li>
                            <p style={loginButton}>
                                <a className="uk-button uk-button-primary uk-text-capitalize uk-button-small" href="/registration">Register</a>
                            </p>
                        </ul>
                    </div>
                </nav>
                
            
            <div style={sectionA} className="Slider">
                <div className="uk-container">
                    <h1 style={sliderContent} className="uk-text-lead uk-text-light">Lorem ipsum dolor</h1>
                    <p style={sliderContent} className="uk-text-meta uk-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <button style={sliderContent} class="uk-button uk-button-primary">Primary</button>
                </div>
            </div>
            <div uk-slideshow>
    <ul class="uk-slideshow-items">
        <li>
            a
        </li>
        <li>
            b
        </li>
    </ul>
</div>
            
            
            <div style={sectionC}>
                <p></p>
            </div>
            <MainFooter/>
    </div>
    );
}

const loginButton = {
    marginTop: "25px"
};

const orText = {
    marginLeft: "-18px",
    marginRight: "-3px"
}

const sliderContent ={
    marginRight: "120px",
    marginLeft: "120px"
}

const sectionA = {
    marginTop: "200px"
}

const sectionC = {
    height: "200px",
    marginTop: "200px"
}

export default HomePage;