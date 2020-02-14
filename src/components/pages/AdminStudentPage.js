import React from 'react';
import Icons from '../../../node_modules/uikit/dist/js/uikit-icons';
import UIkit from 'uikit';
UIkit.use(Icons);

function AdminStudent() {
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
                        <li className="uk-active"> 
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/students">Students</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/teachers">Teachers</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/classes">Classes</a>
                            </li>
                            <li>
                                <a className="uk-text-capitalize uk-text-light" href="/dashboard/admin/admissions">Admissions</a>
                            </li>
                            <li className="uk-margin-large-right">
                            <a className="uk-text-capitalize uk-text-light">Admin</a>
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
            <h1 className="uk-text-lead uk-text-light">Students</h1>
            
      </div>
  );
}

const search = {
    width: "800px"
}
export default AdminStudent;