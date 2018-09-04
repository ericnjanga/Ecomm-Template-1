
/**
 * Display full details of an item
 * -------------------------------
 */

import React from 'react';
import Currency from 'react-currency-formatter';
import { BrowserRouter as Redirect } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { dbGetNode, dbGetSnapshotData } from './../../utilities/func/mix1.js';
import Spinner from './../../utilities/comps/Spinner/Spinner.js';



class ItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({ modal:!this.state.modal });
  }


  /**
   * Fetch specific product and save it to state
   */
  componentDidMount() {

    dbGetNode(`products/product/${this.props.match.params.itemId}`).once('value', (snapshot) => {

      dbGetSnapshotData({ snapshot, singleData:true }).then((item) => {

          this.setState({ item });
          
      });

    }); // [end] dbGetNode

  } //[end] componentDidMount

  

  render() {

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalTop
            item={this.state.item}
            handleToggle={this.toggle}
          />
          <ModalBottom
            item={this.state.item}
            handleToggle={this.toggle}
          />
        </Modal>
      </div>
    );

  } //[end] render
  
};


export default ItemDetail;








/**
 * Helps for making code more readable
 * @param {*} param0 
 */
const ModalTop = ({ item, handleToggle }) => (
  <React.Fragment>
    {
      !item && 
      <React.Fragment>
        <ModalHeader toggle={handleToggle}>&nbsp;</ModalHeader>
        <ModalBody style={{ position: 'relative'}}>
          <Spinner />
        </ModalBody>
      </React.Fragment>
    }
    {
      item && 
      <React.Fragment>
        <ModalHeader toggle={handleToggle}>{item.title}</ModalHeader>
        <ModalBody>
          <img
            className="card-img-top"
            src="https://via.placeholder.com/500x250"
            alt={item.title}
            style={{marginBottom: '20px'}}
          />
          <h3>
            <Currency
              quantity={item.price}
              currency="CAD"
            />

            /

            
          
          {/* {item.price}  {item.price} */}
          </h3>
          <p>{item.description}</p>

          <div className="container">
            <div className="row">
              <ul className="col-sm-6">
                <li>{item.kilometers}</li>
                <li>{item.colors}</li>
              </ul>
              <ul className="col-sm-6">
                <li>{item.kilometers}</li>
                <li>{item.colors}</li>
              </ul>
            </div>
          </div>

          {/* <div>

                'make':'one',
                'year':2011,
                'bodyType':'sedan',
                'color':'red',
                'kilometers': 0.0,
                'transmission': 'automatic',
                'fuelType': 'Gaz',
                'nbDoors': 4,
          </div> */}
        </ModalBody>
      </React.Fragment>
    }
  </React.Fragment>
);

const ModalBottom = ({ item, handleToggle }) => (
  <ModalFooter>
    <Button color="primary" onClick={handleToggle} disabled={!item}>Interested?</Button>{' '}
    <Button color="secondary" onClick={handleToggle}>Cancel</Button>
  </ModalFooter>
);

