import React from 'react';


function LoginPage() {
  return ( 
      <div style={pageStyle} className="uk-position-center">
          <div class="uk-card uk-card-default uk-card-body uk-width-2-1@m">
      <legend class="uk-legend uk-text-center uk-margin-medium">Log in to Your Account</legend>
        <form>

    <div class="uk-margin-small">
        <div class="uk-inline">
            <input className="uk-input uk-width-medium uk-text-small" type="text" placeholder="ID Number"/>
        </div>
    </div>

    <div class="uk-margin-small">
        <div class="uk-inline">
            <input className="uk-input uk-width-medium uk-text-small" type="text" placeholder="Password"/>
        </div>
    </div>

    </form>
    <button class="uk-button uk-button-primary uk-width-expand uk-width-medium uk-text-capitalize">Log in</button>
      </div>
      </div>
  );
}

const pageStyle = {
    backgroundColor: "#03A9F4"
  };


export default LoginPage;