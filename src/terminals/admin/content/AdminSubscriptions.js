import React from 'react';
import GetData from './../../../utilities/funcAsChild/getData.js';
import DateFormat from './../../../utilities/comps/DateFormat.js';

const AdminSubscriptions = () => {
  return ( 
    <div className="app-col">
      <GetData
        endpoint={'users'}
        defaultVal={null}
      >
        {
          (data) => (
            <SubscriptionsTable
              data={data}
            />
          )
        }
      </GetData>
    </div>
  );
}

export default AdminSubscriptions;




const SubscriptionsTable = ({ data }) => {

  if (!data) {
    return false;
  }

  return (
    <table className="table table-striped" style={{ width:'100%'}}>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Email</th>
          <th scope="col">Telephone</th>
          <th scope="col">Dernière inscription</th>
          <th scope="col">Dernière inscription</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) =>{
            return (
              <tr key={item.id}>
                <th scope="row">{ index + 1}</th>
                <td>{ item.name }</td>
                <td>{ item.email }</td>
                <td>{ item.phone }</td>
                <td>
                  <DateFormat format='MMM Do, YYYY'>{item.createdOn}</DateFormat>
                </td>
                <td>
                  <button className="btn btn-primary">Dejà Vu</button>
                </td>
              </tr>                     
            )
          })
        }
      </tbody>
    </table> 
  );

};