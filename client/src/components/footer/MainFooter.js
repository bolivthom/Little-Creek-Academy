import React from 'react';


function MainFooter() {
  return ( 
        <div style={footer}>
            <div className="uk-container uk-navbar-left">
            <ul className="uk-nav uk-nav-default uk-margin-xlarge-right">
                <li style={footerHeader} className="uk-active">INFORMATION</li>
                <li className="uk-text-light"><a href="#">About Us</a></li>
                <li className="uk-text-light"><a href="#">Curriculum</a></li>
                <li className="uk-text-light"><a href="#">Admission</a></li>
                <li className="uk-text-light"><a href="#">Contact</a></li>
            </ul>  

            <ul className="uk-nav uk-nav-default uk-margin-xlarge-right">
                <li style={footerHeader} className="uk-active">EVENTS</li>
                <li className="uk-text-light"><a href="#">Calender</a></li>
                <li className="uk-text-light"><a href="#">News</a></li>
            </ul>  

            <ul className="uk-nav uk-nav-default uk-margin-xlarge-right">
                <li style={footerHeader} className="uk-active">RESOURCES</li>
                <li className="uk-text-light"><a href="#">FAQ</a></li>
                <li className="uk-text-light"><a href="#">Preperation and Drop-off</a></li>
                <li className="uk-text-light"><a href="#">Supply List</a></li>
            </ul>   
            <ul className="uk-nav uk-nav-default">
                <li style={footerHeader} className="uk-active">CONTACT</li>
                <li className="uk-text-light"><a href="#">Employment Opportunities</a></li>
                <li className="uk-text-light"><a href="#">Information Request Form</a></li>
            </ul>   
        </div>
      </div>
  );
}

const footer = {
    backgroundColor: "#F2F3F4",
    height: "300px",
}

const footerHeader = {
    marginTop: "50px",
    fontSize: "12px",
}

export default MainFooter;