import React from 'react';
import { dbGetNode, dbGetSnapshotData } from './../func/mix1.js';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {

    this._ismounted = true;

    // console.log('##1##componentDidMount', this._ismounted);

    dbGetNode(`${this.props.url}`).on('value', (snapshot) => {

      // console.log('##1----2##componentDidMount--', this._ismounted);

      const { singleData } = this.props;
      dbGetSnapshotData({ snapshot, singleData }).then((data) => {

        // console.log('****data=', data);

        if (this._ismounted) {
          this.setState({ data });
        }

        

      });

    }); // [end] items ...

  }


  componentWillUnmount() {

    this._ismounted = false;

    // console.log('--2--componentWillUnmount', this._ismounted);
    dbGetNode(`${this.props.url}`).off();
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
