
/**
 * ...
 * -------------------------------
 */


import React from 'react';
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';
import ItemPreview from './../widgets/ItemPreview.js';


const HomeContent = () => {
  return (
    <div className="container">
      <div className="row multi-rows">
        <GetData
          endpoint={'products/product'}
          defaultVal={null}
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
      </div>
    </div>
  );
};

export default HomeContent;
