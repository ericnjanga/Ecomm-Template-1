import React from 'react';

const Box = (props) => {
  return (
    <div className={props.className}>
      { props.children }
    </div>
  );
}

export default Box;
