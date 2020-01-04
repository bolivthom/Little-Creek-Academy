import React from 'react';


function MainFooter() {
  return ( 
        <div style={footer}>
            <div className="uk-width-1-1@s uk-container uk-navbar-left">
            <ul className="uk-nav uk-nav-default uk-margin-xlarge-right">
                <li style={footerHeader} className="uk-active"><a href="#">HEADER</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
            </ul>  

            <ul className="uk-nav uk-nav-default uk-margin-xlarge-right">
                <li style={footerHeader} className="uk-active"><a href="#">HEADER</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
            </ul>  

            <ul className="uk-nav uk-nav-default uk-margin-xlarge-right">
                <li style={footerHeader} className="uk-active"><a href="#">HEADER</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
            </ul>   
            <ul className="uk-nav uk-nav-default">
                <li style={footerHeader} className="uk-active"><a href="#">HEADER</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
                <li className="uk-text-light"><a href="#">Item</a></li>
            </ul>   
        </div>
      </div>
  );
}

const footer = {
    paddingTop: "50px",
    backgroundColor: "#F2F3F4",
    height: "200px",
    paddingLeft: "25%",
    paddingRight: "10%"
}

const footerHeader = {
    fontSize: "12px",
}

export default MainFooter;