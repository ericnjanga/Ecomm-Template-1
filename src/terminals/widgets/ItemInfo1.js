
/**
 * ItemInfo1
 * - Prices
 * - kilometers
 * -------------------------------
 */


import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';
import { GlobalContext } from './../../settings/basics.js';
import { TEXT_COPY } from './../../settings/language-and-text.js';


const ItemInfo1 = ({
  price,
  kilometers,
  onSpotlight,
  isSmall,
  truncate,
  style,
}) => {

  const cstyle = {
    ...{position:'relative'},
    ...(style?style:{}),
  };

  const badgeStyle = {
    display:'block',
    marginTop:'7px',
    ...(truncate?{width:'60px'}:{}),
  };

  // console.log('>>>>truncate=', truncate, badgeStyle)

  return (
    <section style={cstyle}>
      <h3 className="block txt-highlight txt-bold h4" style={{ marginBottom:'0' }}>
        {
          <WrapWithSmall isSmall={isSmall}>
            <Currency
              quantity={price}
              currency="CAD"
            />
          </WrapWithSmall>
        }
      </h3>
      <h4 className="block txt-grayed h6">
        <GlobalContext.Consumer>
          {
            (global) => (
              global.curr_cdn_to_xaf &&
              <React.Fragment>
                <WrapWithSmall isSmall={isSmall}>
                  <PriceXaf price={price} quotient={global.curr_cdn_to_xaf} />
                </WrapWithSmall>
              </React.Fragment>
            )
          }
        </GlobalContext.Consumer>
      </h4>

      <div className="text-right" style={{ position:'absolute', top:'0', right:'0' }}>
        {
          onSpotlight &&
          <WrapWithSmall isSmall={isSmall}>
            <span className="badge badge-primary text-truncate" style={badgeStyle}>{ TEXT_COPY.itemModal.onSpotlight }</span>
          </WrapWithSmall>
        }
        <WrapWithSmall isSmall={isSmall}>
          <span> 
            {
              (kilometers===0 ? <i>({ TEXT_COPY.gen.undefined })</i> : kilometers)
            } km
          </span>
        </WrapWithSmall>
      </div>
    </section>
  );
};



// Props validation
ItemInfo1.propTypes = {
  price: PropTypes.number.isRequired,
};

ItemInfo1.defaultProps = {
};


export default ItemInfo1;




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
const WrapWithSmall = ({ isSmall, children }) => (
  <React.Fragment>
    {
      isSmall ?
      <small>
        { children }
      </small> 
      :
      children
    }
  </React.Fragment>
);