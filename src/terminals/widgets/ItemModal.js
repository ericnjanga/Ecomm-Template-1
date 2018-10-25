
/**
 * Display full details of an item
 * -------------------------------
 */

import React from 'react';
import { TEXT_COPY } from './../../settings/language-and-text.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Spinner from './../../utilities/comps/Spinner/Spinner.js';
import FetchImage from './../../utilities/funcAsChild/fetchImage.js';
import PictureFrame from './../../utilities/funcAsChild/PictureFrame.js';

import ItemInfo1 from './ItemInfo1.js';


const ItemModal = ({
  data, 
  show,
  toggle,
  className,
}) => {

  if(!data) {
    return false;
  }

  return (
    <Modal isOpen={show} toggle={toggle} className={`${className} itemModal`}>
      <ModalTop
        item={data}
        handleToggle={toggle}
      />
      <ModalBottom
        item={data}
        handleToggle={toggle}
      />
    </Modal>
  );
  
};


export default ItemModal;






 

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
            
            <article className="itemModal__article">
              <p>{item.description}</p>
            </article>

            <div className="container itemModal__addinfo txt-grayed">
              <div className="row">
                <ul className="col-sm-6">
                  <li>{ TEXT_COPY.itemModal.mileage }: <span className="txt-dark">{ (item.kilometers===0 ? TEXT_COPY.gen.undefined : item.kilometers) }</span></li>
                  <li>{ TEXT_COPY.itemModal.colors }: <span className="txt-dark">{item.color}</span></li>
                  <li>{ TEXT_COPY.itemModal.bodyType }: <span className="txt-dark">{item.bodyType}</span></li>
                  <li>{ TEXT_COPY.itemModal.fuelType }: <span className="txt-dark">{item.fuelType}</span></li>
                </ul>
                <ul className="col-sm-6">
                  <li>{ TEXT_COPY.itemModal.year }: <span className="txt-dark">{item.year}</span></li>
                  <li>{ TEXT_COPY.itemModal.make }: <span className="txt-dark">{item.make}</span></li>
                  <li>{ TEXT_COPY.itemModal.nbDoors }: <span className="txt-dark">{item.nbDoors}</span></li>
                  <li>{ TEXT_COPY.itemModal.transmission }: <span className="txt-dark">{item.transmission}</span></li>
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
  <ModalFooter className="itemModal__footer">
    {/* <Button color="primary" onClick={handleToggle} disabled={!item}>Interested?</Button>{' '} */}
    <Button color="secondary" onClick={handleToggle}>Cancel</Button>
  </ModalFooter>
);

