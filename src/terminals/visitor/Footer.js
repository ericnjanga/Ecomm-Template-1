import React from 'react';
import BrandLogo from './../BrandLogo.js';
import DateFormat from './../../utilities/comps/DateFormat.js';
import { GlobalContext } from './../../settings/basics.js';
import { TEXT_COPY } from './../../settings/language-and-text.js';


const HomeFooter = () => {

  // console.log('-4- HomeFooter');

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BrandLogo />
        </div>


        <GlobalContext.Consumer>
        {
          (global) => (
            global && global.brand &&
            <React.Fragment>
              {
                global.brand.email && global.brand.phone1 &&
                <div className="col-lg-3">
                  <h3>{ TEXT_COPY.gen.contactus }</h3>
                  <ul>
                    <li>{ global.brand.email }</li>
                    <li>{ global.brand.phone1 }</li>
                  </ul>
                </div>
              }
              {
                global.brand.about &&
                <div className="col-lg-4">
                  <h3>{ TEXT_COPY.gen.aboutus }</h3>
                  <p>
                  {
                    global.brand.about && `${global.brand.about.substr(0, 150)} ...`
                  }
                  </p>
                </div>
              }
            </React.Fragment>
          )
        }
        </GlobalContext.Consumer>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>Copyright &copy; <DateFormat format='YYYY'>{ Date.now() }</DateFormat> Toronto, Canada</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
