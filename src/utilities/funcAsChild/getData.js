import React from 'react';
import { dbGetNode, dbGetSnapshotData } from './../func/mix1.js';
// import { database } from './../../settings/basics.js';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    // console.log('---componentDidMount');

    dbGetNode(`${this.props.url}`).on('value', (snapshot) => {

      const { singleData } = this.props;
      const data = dbGetSnapshotData({ snapshot, singleData });
      // console.log('---this.setState', data);
      this.setState({ data });

    }); // [end] items ...

  }

  render() {

    // Undefined data will be handled outside
    return (
      <div style={{ position: 'relative'}}>
        { this.props.children(this.state.data) }
      </div>
    );
  }
}

export default GetData;
