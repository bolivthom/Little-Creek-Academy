import React from 'react';
import Icons from '../../../node_modules/uikit/dist/js/uikit-icons';
import UIkit from 'uikit';
UIkit.use(Icons);


function RegistrationPage() {
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
    <div>
        <div style={registrationForm} className="uk-grid">
            <div style={switcherNav}>
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
                                <div class="uk-margin uk-margin-top">
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
                            <div class="uk-margin uk-margin-top">
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
                                <div className="uk-margin-top">Primary</div>
                                <div class="uk-margin uk-margin-top">
                                    <input class="uk-input uk-text-light" type="text" placeholder="First Name"></input>
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input uk-text-light" type="text" placeholder="Surname"></input>
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input uk-text-light" type="text" placeholder="Relationship"></input>
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
                                <div className="uk-margin-large-top">Secondary</div>
                                <div class="uk-margin uk-margin-top">
                                    <input class="uk-input uk-text-light" type="text" placeholder="First Name"></input>
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input uk-text-light" type="text" placeholder="Surname"></input>
                                    <div class="uk-margin">
                                    <input class="uk-input uk-text-light" type="text" placeholder="Relationship"></input>
                                </div>
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
                                    <div uk-form-custom="target: true" class="uk-margin-right uk-margin-top">
                                        <input type="file"></input>
                                        <input class="uk-input uk-form-width-medium uk-text-light" type="text" placeholder="Select Birth Certificate" disabled></input>
                                    </div>
                                    <div uk-form-custom="target: true" className="uk-margin-top">
                                        <input type="file"></input>
                                        <input class="uk-input uk-form-width-medium uk-text-light" type="text" placeholder="Select Medical Form" disabled></input>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <button class="uk-button uk-button-primary uk-text-light">Finish</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
}

const registrationForm ={
    marginTop: "5%",
    marginRight: "10%",
    marginLeft: "10%",
    marginBottom: "10%"
}

const fieldset = {
    marginRight: "10%",
    marginLeft: "10%"
}

const switcherNav = {
    marginTop: "8%"
}

const arrowLeft = {
    marginTop: "50px",
    marginLeft: "50px"
}


export default RegistrationPage;