import React from 'react';
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';
import ItemPreview from './../widgets/ItemPreview.js';
import { TEXT_COPY } from './../../settings/language-and-text';


const HomeFocus = () => {


  return (
    <div className="container">
      <h2 className="text-center text-uppercase txt-light">{ TEXT_COPY.admin.onSpotlight }</h2>
      <div className="row multi-rows">
        <GetData
          endpoint={'products/product'}
          defaultVal={null}
          filter={{ onSpotlight: true }}
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
                        modeCondended
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

export default HomeFocus;
