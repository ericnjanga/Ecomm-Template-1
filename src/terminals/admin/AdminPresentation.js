import React from 'react';
import AdminContent from './AdminContent.js';
import AdminSidebar from './AdminSidebar.js';


const AdminPresentation = (props) => {
  return (
    <div className="screen admin full-screen overflow-y-scroll">
      <div className="screen undefined admin sidebar isOpen">
        <AdminSidebar
          // data={sections}
          toggleSidebar={props.toggleSidebar}
          togglePages={props.togglePages}
          // className="$$$$$"
          isOpen={true}
        />
      
        <AdminContent
          // data={sections}
          handleSubmit={props.handleSubmit}
          togglePages={props.togglePages}
        />
      </div>
    </div>
  );
};

export default AdminPresentation;
