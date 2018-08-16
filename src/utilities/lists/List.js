import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component which renders a data list in as a unordered list
 *
 * @data: list
 * @className
 */
const List = ({ data: listData, className }) => {

  if (!listData) {

    return false;

  }

  return (
    <ul className={`list ${className}`}>
      {
        listData.map(item => (
          <li key={item.id}>
            <b>{item.name}</b>{' - '}
            {item.description}
          </li>
        ))
      }
    </ul>
  );

};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string,
};

List.defaultProps = {
  className: '',
};


export default List;
