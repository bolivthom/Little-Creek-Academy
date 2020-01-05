import React from 'react';
import Icons from '../../../node_modules/uikit/dist/js/uikit-icons';
import UIkit from 'uikit';
import AdminNavbar from '../navbar/AdminNavbar';
UIkit.use(Icons);

function AdminDashboard() {
  return ( 
      <div>
          <AdminNavbar />

            <div style={card} class="uk-card uk-card-default uk-card-body uk-width-1-5@m">
                <p className="uk-text-light">Students</p>
                <p className="uk-text-light">Teachers</p>
                <p className="uk-text-light">Classes</p>
            </div>
            
      </div>
  );
}

const card = {
    marginTop: "10%",
    marginLeft: "5%"
}


export default AdminDashboard;