import React from 'react';
import Icons from '../../../node_modules/uikit/dist/js/uikit-icons';
import UIkit from 'uikit';
UIkit.use(Icons);

function AdminClasses() {
  return ( 
      <div>
          <nav className="uk-navbar-container" uk-navbar="">
          <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active">
                                <a className="uk-margin-large-left" href="/dashboard/admin">LITTLE CREEK PRESCHOOL</a>
                            </li>
                            
                        </ul>
                    </div>


                    <div className="uk-navbar-right uk-margin-right">
                        <ul className="uk-navbar-nav">
                        <li> 
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/students">Students</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/teachers">Teachers</a>
                            </li>
                            <li className="uk-active">
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/classes">Classes</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/admissions">Admissions</a>
                            </li>
                            <li className="uk-margin-large-right">
                                <span style={userIcon} data-uk-icon="user"/>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Sign out</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
            </nav>
          <h1 className="uk-text-lead uk-text-light">All Classes</h1>
            
      </div>
  );
}

const card = {
    marginTop: "10%",
    marginLeft: "5%"
}

const userIcon = {
    marginTop: "26px",
    marginLeft: "16px"
}

export default AdminClasses;