
/**
 * Display full details of an item
 * -------------------------------
 */

import React from 'react';
import { TEXT_COPY } from './../../settings/language-and-text.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { dbGetNode, dbGetSnapshotData } from './../../utilities/func/mix1.js';
import Spinner from './../../utilities/comps/Spinner/Spinner.js';
import { GlobalContext } from './../../settings/basics.js';
import FetchImage from './../../utilities/funcAsChild/fetchImage.js';
import PictureFrame from './../../utilities/funcAsChild/PictureFrame.js';

import ItemInfo1 from './ItemInfo1.js';



class ItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    // this.props.toggle = this.props.toggle.bind(this);
  }


  toggle() {
    // this.setState({ modal:!this.state.modal });

    /**
     * Return to root url when modal closes
     * (We have access to "history.push" because this component is generated by react-router)
     */
    // this.props.history.push('/');
  }


  /**
   * Fetch specific product and save it to state
   */
  componentDidMount() {
    this.setState({ modal:this.props.show });

    // WE WON'T FETCH DATA FROM ROUTE PARAMS (FOR NOW)
    // dbGetNode(`products/${this.props.match.params.itemId}`).once('value', (snapshot) => {

    //   dbGetSnapshotData({ snapshot, singleData:true }).then((item) => {

    //       this.setState({ item });
          
    //   });

    // }); // [end] dbGetNode

  } //[end] componentDidMount

  

  render() {

    return (
      <Modal isOpen={this.props.show} /*toggle={this.props.toggle}*/ className={`${this.props.className} modal-itemDetail`}>
        <ModalTop
          item={this.props.data}
          handleToggle={this.props.toggle}
        />
        <ModalBottom
          item={this.props.data}
          handleToggle={this.props.toggle}
        />
      </Modal>
    );

  } //[end] render
  
};


export default ItemDetail;






 

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
          <FetchImage
            dir='products'
            placeHolderWidth={400}
            placeholderHeight={300}
            name={item.image}
          >
            {
              (url) => (
                <PictureFrame
                  className='prodImg-frame preview'
                  imgWidth={500}
                  frameHeight={250}
                  style={{ marginBottom:'20px' }}
                >
                  {
                    (position) => (
                      <img
                        style={{...position}}
                        src={url}
                        alt={item.title}
                      />
                    )
                  }
                </PictureFrame>
              )
            }
          </FetchImage>
          
          <div style={{ position:'relative' }}>
            
            <ItemInfo1
              {...item}
              style={{ marginBottom:'1.5rem' }}
            />
            
            <article className="modal-itemDetail__article">
              <p>{item.description}</p>
            </article>

            <div className="container modal-itemDetail__addinfo txt-grayed">
              <div className="row">
                <ul className="col-sm-6">
                  <li>{ TEXT_COPY.itemDetail.mileage }: <span className="txt-dark">{ (item.kilometers===0 ? TEXT_COPY.gen.undefined : item.kilometers) }</span></li>
                  <li>{ TEXT_COPY.itemDetail.colors }: <span className="txt-dark">{item.color}</span></li>
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
    {/* <Button color="primary" onClick={handleToggle} disabled={!item}>Interested?</Button>{' '} */}
    <Button color="secondary" onClick={handleToggle}>Cancel</Button>
  </ModalFooter>
);

