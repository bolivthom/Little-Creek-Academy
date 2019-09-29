import React from 'react';
import backgroundImg from '../../Assets/Images/kids.jpg'


function HomePage() {
    return (
        <div >
            <div className="uk-position-top">
                <nav className="uk-navbar-container uk-navbar-transparent uk-container" uk-navbar="">


                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><a href="/">PRE-SCHOOL MANAGEMENT SYSTEM</a></li>
                        </ul>
                    </div>


                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <p uk-margin>
                                <a className="uk-button uk-button-secondary" href="/login">LOGIN</a>
                            </p>
                        </ul>
                    </div>


                </nav>
                
            </div>
            <div className="uk-position-center ">
            <h2 className="uk-container uk-text-center">A Website that enables the tracking, managing and reporting on what
                happens with children at a Pre-School on a daily basis
            </h2>
            </div>
        </div>
    );
}

export default HomePage;