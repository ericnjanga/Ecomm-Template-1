
/**
 * ...
 * -------------------------------
 */


import React from 'react';
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';
import ItemPreview from './../widgets/ItemPreview.js';
// import AppPagination from './../../utilities/comps/AppPagination.js';


const ItemsListing = () => {
  return (
    <div className="container">
      <div className="row multi-rows">
        <GetData
          endpoint={'products'}
          defaultVal={null}
          filter={{ onSpotlight: true }}
          filterType='exclude'
        >
          {
            (data) => (
              <ListComponent
                data={data}
                Component={
                  (product) => (
                    <div className="col">
                      <ItemPreview
                        data={product}
                      />
                    </div>
                  )
                }
              />
            )
          }
        </GetData>
      </div>{/* row multi-rows */}
      

      {/* <div className="row" style={{ marginTop:'20px'}}>
        <AppPagination />
      </div> */}
    </div>
  );
};

export default ItemsListing;
