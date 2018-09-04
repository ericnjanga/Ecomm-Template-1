
/**
 * Display full details of an item
 * -------------------------------
 */

import React from 'react';
import Currency from 'react-currency-formatter';
import {  GlobalContext } from './../../settings/basics.js';
import { TEXT_COPY } from './../../settings/language-and-text.js';
// import { BrowserRouter as Redirect } from "react-router-dom";
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
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={`${this.props.className} modal-itemDetail`}>
        <ModalTop
          item={this.state.item}
          handleToggle={this.toggle}
        />
        <ModalBottom
          item={this.state.item}
          handleToggle={this.toggle}
        />
      </Modal>
    );

  } //[end] render
  
};


export default ItemDetail;








/**
 * Helps for making code more readable
 * @param {*} param0 
 */
const PriceXaf = ({ price, quotient }) => (
  <Currency
    quantity={ quotient * price }
    currency="XAF"
  />
);

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
            className="card-img-top modal-itemDetail__image"
            src="https://via.placeholder.com/500x250"
            alt={item.title}
            style={{marginBottom: '20px'}}
          />
          
          <div style={{ position:'relative' }}>
            {
              item.onSpotlight &&
              <span className="badge badge-primary">{ TEXT_COPY.itemDetail.onSpotlight }</span>
            }

            <h3 className="modal-itemDetail__title">
              <span className="block txt-highlight">
                <Currency
                  quantity={item.price}
                  currency="CAD"
                />
              </span>
              <span className="block txt-grayed title-size4">
                <GlobalContext.Consumer>
                  {
                    (global) => (
                      global.curr_cdn_to_xaf &&
                      <React.Fragment>
                        <PriceXaf price={item.price} quotient={global.curr_cdn_to_xaf} />
                      </React.Fragment>
                    )
                  }
                </GlobalContext.Consumer>
              </span>
            </h3>
            
            <article className="modal-itemDetail__article">
              <p>{item.description}</p>
            </article>

            <div className="container modal-itemDetail__addinfo txt-grayed">
              <div className="row">
                <ul className="col-sm-6">
                  <li>{ TEXT_COPY.itemDetail.mileage }: <span className="txt-dark">{item.kilometers}</span></li>
                  <li>{ TEXT_COPY.itemDetail.colors }: <span className="txt-dark">{item.colors}</span></li>
                  <li>{ TEXT_COPY.itemDetail.bodyType }: <span className="txt-dark">{item.bodyType}</span></li>
                  <li>{ TEXT_COPY.itemDetail.fuelType }: <span className="txt-dark">{item.fuelType}</span></li>
                </ul>
                <ul className="col-sm-6">
                  <li>{ TEXT_COPY.itemDetail.year }: <span className="txt-dark">{item.year}</span></li>
                  <li>{ TEXT_COPY.itemDetail.make }: <span className="txt-dark">{item.make}</span></li>
                  <li>{ TEXT_COPY.itemDetail.nbDoors }: <span className="txt-dark">{item.nbDoors}</span></li>
                  <li>{ TEXT_COPY.itemDetail.transmission }: <span className="txt-dark">{item.transmission}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </ModalBody>
      </React.Fragment>
    }
  </React.Fragment>
);

const ModalBottom = ({ item, handleToggle }) => (
  <ModalFooter className="modal-itemDetail__footer">
    <Button color="primary" onClick={handleToggle} disabled={!item}>Interested?</Button>{' '}
    <Button color="secondary" onClick={handleToggle}>Cancel</Button>
  </ModalFooter>
);

