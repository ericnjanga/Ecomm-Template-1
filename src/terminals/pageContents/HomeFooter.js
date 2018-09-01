import React from 'react';
import BrandLogo from './../BrandLogo.js';
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';


const HomeFooter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BrandLogo />
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            <li>Anim pariatur cliche</li>
            <li>reprehenderit, enim eiusmod high</li>
            <li>life accusamus terry richardson</li>
            <li>Nihil anim keffiyeh helvetica</li>
          </ul>
        </div>
        <div className="col">
          <h3>Info additionnelle</h3>
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
