import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';


const DateFormat = ({ children, format }) => (
  <span>{moment(children).format(format) }</span>
);


// Props validation
DateFormat.propTypes = {
  format: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

DateFormat.defaultProps = {
  format: 'MMMM Do, YYYY',
};


export default DateFormat;
