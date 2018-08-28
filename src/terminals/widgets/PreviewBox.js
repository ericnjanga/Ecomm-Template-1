import React from 'react';
import PropTypes from 'prop-types';

const PreviewBox = ({
  name,
  email,
  phone,
}) => {

  return (
    <div className="PreviewBox">
      <p>Bienvenue <b>{name}</b></p>
      <p>[Logo] vous contactera bientot au <b>{email}</b> ou <b>{phone}</b></p>
    </div>
  );

};


// Props validation
PreviewBox.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
};

PreviewBox.defaultProps = {
  name: 'username',
  email: 'useremail',
  phone: 0,
};


export default PreviewBox;
