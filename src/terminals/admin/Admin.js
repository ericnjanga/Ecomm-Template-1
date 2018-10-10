import React from 'react';
import AdminPresentation from './AdminPresentation.js';

export default class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebar: {
        active: true,
      }
    };
  }


  /**
   * Toggle sibebar visibility
   * @param {*} data 
   * @param {*} itemId 
   */
  handleToggleSidebar = () => {
  
    const { sidebar } = this.state;
    sidebar.active = !sidebar.active;
    this.setState({ sidebar });
  
  }
  

  render() {
    return(
      <AdminPresentation
        {...this.state}
        toggleSidebar={this.handleToggleSidebar}
      />
    );
  }

}
