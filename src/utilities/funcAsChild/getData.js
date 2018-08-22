import React from 'react';
import { database } from './../../settings/basics.js';
import Spinner from './../comps/Spinner/Spinner.js';

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    database.ref(`${this.props.url}`).on('value', (snapshot) => {

      const nodeVal = snapshot.val();
      const tempsItems = [];
      if (nodeVal) {//Avoid error if there is no DB objects 
        const itemsMap = new Map(Object.entries(nodeVal));
        itemsMap.forEach((value) => {
          const post = Object.assign({}, value);
          // push values in a regular array
          tempsItems.push(post);
        }); // itemsMap
      }//nodeVal
      // save array in state
      const dataReverse = tempsItems.reverse();
      const data = [...dataReverse];
      // console.log('.....data=', data)
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


// const getData = ({
//   children,
// }) => {

//   return (
//     <div>
//       { children() }
//     </div>
//   );

// }