
/**
 * ...
 * -------------------------------
 */


import React from 'react';
import { Link } from "react-router-dom";
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';
import ItemPreview from './../widgets/ItemPreview.js';


const HomeContent = () => {
  return (
    <div className="container">
      <div className="row multi-rows">
        <GetData
          url={'products/product'}
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
