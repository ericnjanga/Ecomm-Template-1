import React from 'react';
import { GlobalContext } from './../../settings/basics.js';
import CollapsePanelPres from './../../utilities/comps/CollapsePanelPresentation.js';


const HomeHero = () => {
  return (
    <GlobalContext.Consumer>
      {
        (global) => (
          global.brand && 
          <React.Fragment>
            <h1 className="title h3 text-uppercase txt-light">
            { global.brand.name }
            </h1>
            <CollapsePanelPres btnLabel={['Learn more','Read Less']}>
              <div className="container">
                <div className="col-md-6 offset-md-3 txt-light">
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
