import React from 'react';
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';
import ItemPreview from './../widgets/ItemPreview.js';
import { TEXT_COPY } from './../../settings/language-and-text';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const HomeFocus = () => {

  const responsiveConf = {
    0:{
      items:1
    },
    600:{
        items:2
    },
    893:{
        items:3
    }
  };

  return (
    <div className="container">
      <h2
        style={{marginBottom:'30px'}}
        className="title-section text-center text-uppercase txt-light"
      >
        { TEXT_COPY.admin.onSpotlight }
      </h2>
      <GetData
        endpoint={'products/product'}
        defaultVal={null}
        filter={{ onSpotlight: true }}
      >
        {
          (data) => (
            data &&
            <OwlCarousel
              className="owl-theme"
              autoplay
              loop
              margin={10}
              responsive={responsiveConf}
              // nav
            >
              <ListComponent
                data={data}
                Component={
                  (product) => (
                    <div className="col item">
                      <ItemPreview
                        data={product}
                        modeCondended
                      />
                    </div>
                  )
                }
              />
            </OwlCarousel>
          )
        }
      </GetData>
      
    </div>
  );
};

export default HomeFocus;
