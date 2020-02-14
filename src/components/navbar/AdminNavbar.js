import React from 'react';
import Icons from '../../../node_modules/uikit/dist/js/uikit-icons';
import UIkit from 'uikit';
UIkit.use(Icons);

function AdminDashboard() {
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
                            <li className="uk-margin-large-right">
                            <a className="uk-text-light">Account</a>
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
            
      </div>
  );
}





export default AdminDashboard;