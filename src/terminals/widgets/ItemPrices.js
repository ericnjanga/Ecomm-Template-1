
/**
 * ItemPrices
 * - ...
 * -------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';
import {  GlobalContext } from './../../settings/basics.js';


const ItemPrices = ({
  price,
}) => {
  return (
    <React.Fragment>
      <span className="block txt-highlight txt-bold">
        <Currency
          quantity={price}
          currency="CAD"
        />
      </span>
      <span className="block txt-grayed title-size4">
        <GlobalContext.Consumer>
          {
            (global) => (
              global.curr_cdn_to_xaf &&
              <React.Fragment>
                <PriceXaf price={price} quotient={global.curr_cdn_to_xaf} />
              </React.Fragment>
            )
          }
        </GlobalContext.Consumer>
      </span>
    </React.Fragment>
  );
};


// Props validation
ItemPrices.propTypes = {
  price: PropTypes.number.isRequired,
};

ItemPrices.defaultProps = {
};


export default ItemPrices;




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