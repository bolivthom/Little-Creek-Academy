import React from 'react';


function LoginPage() {
  return ( 
      <div>
    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
    <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                      <li className="uk-active">
                      <a href="/"><span style={arrowLeft} data-uk-icon="arrow-left"/></a>
                      </li>
                      
                  </ul>
              </div>
      </nav>
      <div className="uk-position-center">
          
      <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Log in to Your Account</legend>
        <form>

    <div class="uk-margin-small">
        <div class="uk-inline">
            <input className="uk-input uk-width-medium uk-text-light" type="text" placeholder="ID Number"/>
        </div>
    </div>

    <div class="uk-margin-small">
        <div class="uk-inline">
            <input className="uk-input uk-width-medium uk-text-light" type="text" placeholder="Password"/>
        </div>
    </div>

    </form>
    <button class="uk-button uk-button-primary uk-width-expand uk-width-medium uk-text-capitalize">Log in</button>
      
      </div>
      </div>
  );
}

const arrowLeft = {
    marginTop: "50px",
    marginLeft: "50px"
}



export default LoginPage;