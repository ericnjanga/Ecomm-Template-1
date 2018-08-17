import React from 'react';

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
