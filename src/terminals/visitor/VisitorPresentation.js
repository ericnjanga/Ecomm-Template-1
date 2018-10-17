import React from 'react';

import GetData from './../../utilities/funcAsChild/getData.js';
import AuthPresentation from './../../terminals/auth/AuthPresentation.js';

import Hero from './Hero.js';
import Spotlight from './Spotlight.js';
import ItemsListing from './ItemsListing.js';
import Footer from './Footer.js';


const VisitorPresentation = ({
  authPanel, 
  handleUserLogin,
}) => {
  return (
    <React.Fragment>
      {/* Auth screen */}
      <AuthPresentation
        className="screen-auth screen-fixed opaque-black full-screen"
        active={authPanel.active}
        handleLogin={handleUserLogin}
      />

      <div className="screen">
        <section className="box-padd30-tb text-center bg-dark1 css-about">
          <Hero />
        </section>
  
        {
          // Only display SPOTLIGHT if there is any data for the spotlight
        }
        <GetData
          endpoint={'products'}
          defaultVal={null}
          filter={{ onSpotlight: true }}
        >
        {
          (data) => (
            data && data.length &&
  
              <section
                className="box-padd50-tb bg-primary1 css-focus"
              >
                <Spotlight
                  data={data}
                />
              </section>
  
          )
        }
        </GetData>
  
        <section className="box-padd50-tb css-content">
          <ItemsListing />
        </section>
        
        
        <footer className="box-padd50-tb bg-dark1 txt-light css-footer">
          <Footer />
        </footer>
      </div>
    </React.Fragment> 
  );
};

export default VisitorPresentation;
