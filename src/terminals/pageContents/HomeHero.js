import React from 'react';
import GetData from './../../utilities/funcAsChild/getData.js';
import { brandSetting } from './../../settings/app-structure.js';
import CollapsePanelPres from './../../utilities/comps/CollapsePanelPresentation.js';


const HomeHero = () => {
  return (
    <React.Fragment>
      <h1 className="title">
        <GetData
            url={'site-info/brand'}
            singleData
            defaultVal={brandSetting}
          >
            {
              (brand) => (
                brand.name
              )
            }
          </GetData>
      </h1>
      <CollapsePanelPres btnLabel={['Learn more','Read Less']}>
        <div className="container">
          <div className="col-md-6 offset-3">
            <p>*** -Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.</p>
          </div>
        </div>
      </CollapsePanelPres>
    </React.Fragment>
  );
};

export default HomeHero;
