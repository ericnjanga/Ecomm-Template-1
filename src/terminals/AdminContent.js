import React from 'react';
import ListActiveComponent from './../utilities/lists/ListActiveComponent';

const AdminContent = ({
  data,
}) => {

  console.log('data=', data);
  return (
    // data.map(x => <p>*** ---admin</p>)
    <ListActiveComponent
      data={data}
      Component={
        (elt)=>(
          <p>--{elt.name}</p>
        )
      }
    />
  );
};


export default AdminContent;
