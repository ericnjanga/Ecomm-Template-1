import React from 'react';
import { dbGetNode, dbGetSnapshotData } from './../func/mix1.js';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    dbGetNode(`${this.props.url}`).on('value', (snapshot) => {

      const { singleData } = this.props;
      const data = dbGetSnapshotData({ snapshot, singleData });
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
