import React from 'react';
import AdminContent from './AdminContent.js';
import AdminSidebar from './AdminSidebar.js';


const AdminPresentation = ({
  toggleSidebar,
  togglePages,
  sidebar,
}) => {
  return (
    <div className="screen admin full-screen" style={{ position: 'fixed', top: '0', left:'0' }}> 
      <AdminSidebar
        // data={sections}
        toggleSidebar={toggleSidebar}
        togglePages={togglePages}
        className="screen undefined admin sidebar overflow-y-scroll"
        isOpen={sidebar.active}
      />
      
      <AdminContent
        // data={sections}
        // handleSubmit={handleSubmit}
        togglePages={togglePages}
      />
    </div>
  );
};

export default AdminPresentation;
