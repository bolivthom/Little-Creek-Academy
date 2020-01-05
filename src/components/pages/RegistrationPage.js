import React from 'react';


function RegistrationPage() {
  return ( 
      <div>
          <div style={registrationForm} className="uk-grid">
    <div className="">

        <ul className="uk-nav uk-nav-default" uk-switcher="connect: #component-nav; animation: uk-animation-fade">
            <li><a href="#">Personal Information</a></li>
            <li><a href="#">Address</a></li>
            <li><a href="#">Parent/Guardian</a></li>
            <li><a href="#">Supporting Documents</a></li>
        </ul>

    </div>
    <div style={fieldset} className="uk-width-expand@m">

        <ul id="component-nav" className="uk-switcher">
            <li>
                <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Personal Information</legend>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                <form>
                    <fieldset class="uk-fieldset">
                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Input"></input>
                        </div>

                        <div class="uk-margin">
                            <select class="uk-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </fieldset>
                </form>

            </li>
            <li>
                <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Address</legend>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <form>
                    <fieldset class="uk-fieldset">
                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Input"></input>
                        </div>

                        <div class="uk-margin">
                            <select class="uk-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </fieldset>
                </form> 
            </li>
            <li>
                <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Parent/Guardian</legend>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
                <form>
                    <fieldset class="uk-fieldset">
                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Input"></input>
                        </div>

                        <div class="uk-margin">
                            <select class="uk-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </fieldset>
                </form>
            </li>
            <li>
                <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Supporting Documents</legend>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
                <form>
                    <fieldset class="uk-fieldset">
                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Input"></input>
                        </div>

                        <div class="uk-margin">
                            <select class="uk-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                    </fieldset>
                </form>
                <button class="uk-button uk-button-primary">Submit</button>
            </li>
        </ul>

    </div>
</div>
      </div>
  );
}

const registrationForm ={
    marginTop: "10%",
    marginRight: "10%",
    marginLeft: "10%"
}

const fieldset = {
    marginRight: "10%",
    marginLeft: "10%"
}

export default RegistrationPage;