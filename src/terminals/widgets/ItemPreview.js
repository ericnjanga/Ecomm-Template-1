
/**
 * ItemPreview
 * -------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const ItemPreview = ({
  data,
  hasDescription,
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://via.placeholder.com/268x180" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        {
          hasDescription && 
          <p className="card-text">
            <TextTrim length={40}>{data.description}</TextTrim>
          </p>
        }
        
        
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
  hasDescription: PropTypes.bool,
};

ItemPreview.defaultProps = {
  hasDescription: true,
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
