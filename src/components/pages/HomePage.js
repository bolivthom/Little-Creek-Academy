import React from 'react';


function HomePage() {
    return (
        <div className="uk-position-relative">
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
        </div>
    );
}

export default HomePage;