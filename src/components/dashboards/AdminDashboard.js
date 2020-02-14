import React from 'react';
import Icons from '../../../node_modules/uikit/dist/js/uikit-icons';
import UIkit from 'uikit';
import AdminNavbar from '../navbar/AdminNavbar';
UIkit.use(Icons);

function AdminDashboard() {
  return ( 
      <div>
          <AdminNavbar />
            
      </div>
  );
}

const card = {
    marginTop: "10%",
    marginLeft: "5%"
}


export default AdminDashboard;