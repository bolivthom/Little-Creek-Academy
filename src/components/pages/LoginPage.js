import React from 'react';


function LoginPage() {
  return ( 
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
  );
}





export default LoginPage;