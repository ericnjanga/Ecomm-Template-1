
/**
 * Renders a preview version of the product (which can be further "contenced")
 * - Renders:
 * -- Title (if not in @modeCondenced)
 * -- Price
 * -- kilometers
 * -- price (In all available currencies)
 * -- ItemInfo1 Component
 * -- CTA button
 * 
 * - Props
 * - @data: data to be rendered (title, price, ...)
 * - @modeCondenced: Dictate rendering style
 * -------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from "react-router-dom";
import ItemInfo1 from './ItemInfo1.js';
import FetchImage from './../../utilities/funcAsChild/fetchImage.js';
import PictureFrame from './../../utilities/funcAsChild/PictureFrame.js';
import { GlobalContext } from './../../settings/basics.js';


const ItemPreview = ({
  data,
  modeCondenced,
}) => {

  // console.log('-5- ItemPreview rendered = ', data);

  if(!data || !data.title) {
    return false;
  }

  return (
    <div className="card box-shadow-hover">
      <FetchImage
        dir='products'
        name={data.image}
      >
        {
          (url) => (
            <PictureFrame
              className='prodImg-frame preview'
              imgWidth={400}
              frameHeight={200}
            >
              {
                (position) => (
                  <img
                    style={{...position}}
                    src={url}
                    alt={data.title}
                  />
                )
              }
            </PictureFrame>
          )
        }
      </FetchImage>

      <div className="card-body">
        <ItemInfo1
          {...data}
          isSmall
          truncate
        />

        <DisplayItemText
          data={data}
          modeCondenced={modeCondenced}
        />
        <div className="text-center">
          {/* <NavLink to={`//${data.id}`} className="link">More details</NavLink> */}
          <GlobalContext.Consumer>
            {
              (global) => (
                <button className="btn btn-link" onClick={()=>{ global.toggleItemDetailModal(data, true)}}>More details</button>
              )
            }
          </GlobalContext.Consumer>
          
        </div>
      </div>
    </div>
  );
};


// Props validation
ItemPreview.propTypes = {
  data: PropTypes.shape({}).isRequired,
  modeCondenced: PropTypes.bool,
};

ItemPreview.defaultProps = {
  modeCondenced: false,
};


export default ItemPreview;








/**
 * Helps for making code more readable
 * @param {*} param0 
 */
const TextTrim = ({ length, children }) => (
  <React.Fragment>
    {
      children.substring(0, length)
    }
    {
      (length < children.length) && ' ...'
    }
  </React.Fragment>
);

const DisplayItemText = ({ data, modeCondenced }) => {
  // console.log('>>>>modeCondenced=', modeCondenced)
  if(modeCondenced || !data || !data.title) {
    return false;
  }
  return (
    <React.Fragment>
      <h5 className="card-title">
        <TextTrim length={18}>{data.title}</TextTrim>
      </h5>
      {/* <p className="card-text">
        <TextTrim length={40}>{data.description}</TextTrim>
      </p> */}
    </React.Fragment>
  );
};
