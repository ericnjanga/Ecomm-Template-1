import React from 'react';
import ListComponent from './../../utilities/lists/ListComponent';
import ItemPreview from './../widgets/ItemPreview.js';
import { TEXT_COPY } from './../../settings/language-and-text';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const HomeFocus = ({
  data,
}) => {

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

  // console.log('>>>data=', data)

  return (
    <div className="container">
      <h2
        style={{marginBottom:'30px'}}
        className="title-section text-center text-uppercase txt-light"
      >
        { TEXT_COPY.admin.onSpotlight }
      </h2>

      <OwlCarousel
        className="owl-theme"
        autoplay
        // loop
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
                  modeCondenced
                />
              </div>
            )
          }
        />
      </OwlCarousel>
         
      
    </div>
  );
};

export default HomeFocus;
