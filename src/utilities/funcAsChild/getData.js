import React from 'react';
import { dbGetNode, dbGetSnapshotData } from './../func/mix1.js';
// import { database } from './../../settings/basics.js';
import Spinner from './../comps/Spinner/Spinner.js';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    console.log('---componentDidMount');

    dbGetNode(`${this.props.url}`).on('value', (snapshot) => {

      const data = dbGetSnapshotData({ snapshot });
      console.log('---this.setState', data);
      this.setState({ data });

    }); // [end] items ...

  }

  render() {

    // Display spinner while data is loading
    if (!this.state.data) {
      return (
        <div style={{ position: 'relative'}}>
          <Spinner />
        </div>
      );
    }

    return (
      <div style={{ position: 'relative'}}>
        { this.props.children(this.state.data) }
      </div>
    );
  }
}

export default GetData;
