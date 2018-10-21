import React from 'react';
import AdminContent from './AdminContent.js';
import AdminSidebar from './AdminSidebar.js';

// alert('Make sure only admin sees admin');

const AdminPresentation = ({
  toggleSidebar,
  sidebar,
}) => {

  return (
    <React.Fragment>
      <div className="screen admin full-screen" style={{ position: 'fixed', top: '0', left:'0' }}> 
        <AdminSidebar
          toggleSidebar={toggleSidebar}
          className="screen admin sidebar overflow-y-scroll"
          isOpen={sidebar.active}
        />
        
        <AdminContent />
      </div>
    </React.Fragment>
  );
};

export default AdminPresentation;
