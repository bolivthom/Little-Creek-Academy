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
                <div className="uk-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                <form>
                    <fieldset class="uk-fieldset">
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Surname"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Middle Name"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="First Name"></input>
                        </div>  
                        <div class="uk-margin">
                            <select class="uk-select uk-text-light">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div> 
                        <div class="uk-margin">
                            <input className="uk-input uk-text-light" type="text" placeholder="Date of Birth"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Nationality"></input>
                        </div> 
                    </fieldset>
                </form>

            </li>
            <li>
                <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Address</legend>
                <div className="uk-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <form>
                    <fieldset class="uk-fieldset">
                    <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Street 1"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Street 2"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Apt/Suite/Other"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="City"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Country"></input>
                        </div>
                    </fieldset>
                </form> 
            </li>
            <li>
                <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Parent/Guardian</legend>
                <div className="uk-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <form>
                    <fieldset class="uk-fieldset">
                        <div>Primary</div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="First Name"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Surname"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Email"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Phone Number"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Street 1"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Street 2"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Apt/Suite/Other"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="City"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Country"></input>
                        </div>
                        <div>Secondary</div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="First Name"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Surname"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Email"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Phone Number"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Street 1"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Street 2"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Apt/Suite/Other"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="City"></input>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-text-light" type="text" placeholder="Country"></input>
                        </div>
                    </fieldset>
                </form>
            </li>
            <li>
                <legend class="uk-legend uk-text-center uk-margin-medium uk-text-light">Supporting Documents</legend>
                <div className="uk-text-light uk-text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <form>
                    <fieldset class="uk-fieldset">
                    <div class="uk-margin" uk-margin>
        <div uk-form-custom="target: true" class="uk-margin-right">
            <input type="file"></input>
            <input class="uk-input uk-form-width-medium uk-text-light" type="text" placeholder="Select file" disabled></input>
        </div>
        <div uk-form-custom="target: true">
            <input type="file"></input>
            <input class="uk-input uk-form-width-medium uk-text-light" type="text" placeholder="Select file" disabled></input>
        </div>
    </div>
                    </fieldset>
                </form>
                <button class="uk-button uk-button-primary">Finish</button>
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