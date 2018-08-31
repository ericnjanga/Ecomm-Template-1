
/**
 * ItemPreview
 * (SHowcasing a product sample without revealing everything)
 * 
 * - @modeCondended: Don't display "title" and "description"
 * -------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const ItemPreview = ({
  data,
  modeCondended,
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://via.placeholder.com/268x180" alt={data.title} />
      <div className="card-body">
        <DisplayText
          data={data}
          modeCondended={modeCondended}
        />
        <div>
          <Link to={`/items/${data.id}`} className="btn btn-primary">More details</Link>
        </div>
      </div>
    </div>
  );
};


// Props validation
ItemPreview.propTypes = {
  data: PropTypes.shape({}).isRequired,
  modeCondended: PropTypes.bool,
};

ItemPreview.defaultProps = {
  modeCondended: false,
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

const DisplayText = ({ data, modeCondended }) => {
  // console.log('>>>>modeCondended=', modeCondended)
  if(modeCondended) {
    return false;
  }
  return (
    <React.Fragment>
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">
        <TextTrim length={40}>{data.description}</TextTrim>
      </p>
    </React.Fragment>
  );
};
