import React from 'react';


function LoginPage() {
  return (
      <div className="uk-position-center">
      <legend class="uk-legend uk-text-center uk-margin-medium">Log into Your Account</legend>
        <form>

    <div class="uk-margin-small">
        <div class="uk-inline">
            <input class="uk-input  uk-width-medium" type="text" placeholder="ID Number"/>
        </div>
    </div>

    <div class="uk-margin-small">
        <div class="uk-inline">
            <input class="uk-input  uk-width-medium" type="text" placeholder="Password"/>
        </div>
    </div>

</form>
<button class="uk-button uk-button-secondary uk-width-expand uk-width-medium">Log in</button>
      </div>
      
  );
}

export default LoginPage;