/**
 * - Search in firebase database for data located at the provided @endpoint
 * - Conduct additional filtering on the resulting data if a @filter object is provided
 * 
 * - @endpoint
 * - @filter
 * - @filterType (Used to determine if we return result not containing the filter)
 * -------------------------------------------------------------
 */

import React from 'react';
import PropTypes from 'prop-types';
import { dbGetNode, dbGetSnapshotData } from './../func/mix1.js';


class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {

    this._isMounted = true;

    // console.log('##1##componentDidMount', this._isMounted);

    dbGetNode(`${this.props.endpoint}`).on('value', (snapshot) => {

      // console.log('##1----2##componentDidMount--', this._isMounted);

      const { singleData } = this.props;
      dbGetSnapshotData({ snapshot, singleData }).then((resultData) => {

        // console.log('****resultData=', resultData);

        if (this._isMounted) {
          const { filter, filterType } = this.props;
          let data = resultData;

          if (data) { // Only if any data is available

            // Filter resulting data if a @filter object has been provided
            if (filter) {
              const filterKey = Object.keys(filter)[0];
              const filterValue = Object.values(filter)[0];

              if(filterType && filterType==='exclude') { // Data without filter
                data = data.filter(dataItem => !dataItem[filterKey]);
              } else { // Data with filter
                data = data.filter(dataItem => dataItem[filterKey]===filterValue);
              }
              // console.log('****data=', data); 
            }

            // Save resulting data for rendering
            this.setState({ data });

          }

        }

      });

    }); // [end] items ...

  }


  componentWillUnmount() {

    this._isMounted = false;

    // console.log('--2--componentWillUnmount', this._isMounted);
    dbGetNode(`${this.props.endpoint}`).off();
  }


  render() {
    // console.log('--2--this.state.datat', this.state.data);

    if (!this.state.data) {
      return (
        <React.Fragment>
          { this.props.children(this.props.defaultVal) }
        </React.Fragment>
      );
    }

    // Undefined data will be handled outside
    return (
      <React.Fragment>
        { this.props.children(this.state.data) }
      </React.Fragment>
    );
  }
}


// Props validation
GetData.propTypes = {
  endpoint: PropTypes.string.isRequired,
  filter: PropTypes.shape({}),
  filterType: PropTypes.string,
};

GetData.defaultProps = {
  filter: null,
  filterType: null,
};


export default GetData;
