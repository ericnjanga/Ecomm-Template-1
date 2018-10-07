import React from 'react';
import PropTypes from 'prop-types';
import AdminPresentation from './AdminPresentation.js';

export default class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebar: {
        active: true,
      }
    };

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }




  /**
   * Toggle sibebar visibility
   * @param {*} data 
   * @param {*} itemId 
   */
  handleToggleSidebar(data, itemId) {
  
    const { sidebar } = this.state;
    sidebar.active = !sidebar.active;
    this.setState({ sidebar });
  
  }
  // toggleSidebar={handleToggleSidebar}

  render() {
    return(
      <AdminPresentation
        {...this.state}
        toggleSidebar={this.handleToggleSidebar}
      />
    );
  }

}


// Props validation
Admin.propTypes = {
};

Admin.defaultProps = {
};