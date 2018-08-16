import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component which renders a data list in as a unordered list
 * (Allows to use external property keys which match with data item keys)
 *
 * @data: list
 * @properties: list item property keys
 * @className
 */
const ListWithKeys = ({ data: listData, properties, className }) => {

  if (!listData || !properties) {

    return false;

  }

  return (
    <ul className={`list ${className}`}>
      {
        listData.map(item => (
          <li key={item.id}>
            {
              properties.map((ppt) => {

                return item[ppt];

              })
            }
          </li>
        ))
      }
    </ul>
  );

};

ListWithKeys.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  properties: PropTypes.arrayOf(PropTypes.sstring).isRequired,
  className: PropTypes.string,
};

ListWithKeys.defaultProps = {
  className: '',
};


export default ListWithKeys;
