import React from 'react';
import { GlobalContext } from './../../settings/basics.js';
import CollapsePanelPres from './../../utilities/comps/CollapsePanelPresentation.js';


const HomeHero = ({
  className,
}) => {
  return (
    <GlobalContext.Consumer>
      {
        (global) => (
          global.brand && 
          <React.Fragment>
            <h1 className="title h3 text-uppercase txt-light">
            { global.brand.name }
            </h1>
            <CollapsePanelPres
              btnLabel={['Learn more','Read Less']}
              style={{ marginBottom:'5px'}}
              className="bg-dark1"
              >
              <div className="container">
                <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3 txt-light">
                  <p>{ global.brand.about }</p>
                </div>
              </div>
            </CollapsePanelPres>
          </React.Fragment>
        )
      }
    </GlobalContext.Consumer>
  );
};

export default HomeHero;
