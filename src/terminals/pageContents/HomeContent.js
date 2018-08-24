import React from 'react';
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';


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
                      <div className="card">
                        <img className="card-img-top" src="https://via.placeholder.com/268x180" alt={product.title} />
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
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