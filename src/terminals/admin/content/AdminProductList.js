import React from 'react';
import GetData from './../../../utilities/funcAsChild/getData.js';
import DateFormat from './../../../utilities/comps/DateFormat.js';
import { dbDeleteRecord /*, dbUpdateRecord*/ } from './../../../utilities/func/mix1.js';
import Spinner from './../../../utilities/comps/Spinner/Spinner.js';

const AdminProductList = () => {
  return (

    <GetData
      endpoint="products"
      defaultVal={null}
    >
      {
        (data) => (
          data ? 
            <table className="table table-striped" style={{ width:'100%'}}>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Created On</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) =>{
                    return (
                      <tr key={item.id}>
                        <th scope="row">{ index + 1}</th>
                        <td>
                          {item.title}
                        </td>
                        <td>
                          <DateFormat format='MMM Do, YYYY'>{item.createdOn}</DateFormat>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            // onClick={
                            //   ()=>{
                            //     dbDeleteRecord(`products/${item.id}`)
                            //   }
                            // }
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={
                              ()=>{
                                dbDeleteRecord(`products/${item.id}`)
                              }
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>                     
                    )
                  })
                }
              </tbody>
            </table> 
          :
          <Spinner />
        )
      }
    </GetData>

  );
};

export default AdminProductList;
