import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = ({
  active,
  fullscreen,
  style,
}) => {

  if (!active) {

    return false;

  }

  return (
    <div style={style.container}>
      <div className="app-spinner" style={style.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );

};

/**
 * Component props validation
 */
Spinner.propTypes = {
  active: PropTypes.bool,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
Spinner.defaultProps = {
  active: true,
  style: { // Default styles
    container: {
      position: 'relative',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 157, 255, 0.3)',
      zIndex: '10',
    },
    spinner: {
      position: 'relative',
      top: '20%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};

export default Spinner;