import React from 'react';
import { GlobalContext } from './../../settings/basics.js';
import { TEXT_COPY } from './../../settings/language-and-text';
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
            { global.brand.welcomeTitle }
            </h1>
            <CollapsePanelPres
              btnLabel={[TEXT_COPY.gen.learnmore, TEXT_COPY.gen.readless]}
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
