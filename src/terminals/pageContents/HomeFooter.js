import React from 'react';
import BrandLogo from './../BrandLogo.js';
import moment from 'moment';
import GetData from './../../utilities/funcAsChild/getData.js';
import ListComponent from './../../utilities/lists/ListComponent';
import DateFormat from './../../utilities/comps/DateFormat.js';


const HomeFooter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BrandLogo />
        </div>
        <div className="col-lg-3">
          <h3>Links</h3>
          <ul>
            <li>Anim pariatur cliche</li>
            <li>reprehenderit, enim eiusmod high</li>
            <li>life accusamus terry richardson</li>
            <li>Nihil anim keffiyeh helvetica</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h3>Info additionnelle</h3>
          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
        </div>
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
