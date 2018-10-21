import React from 'react';
// Without "Redirect" Routes aren't working
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";
import AdminCredentials from './content/AdminCredentials.js';
import AdminContentBrand from './content/AdminContentBrand.js';
import AdminContentSystem from './content/AdminContentSystem.js';
import AdminCreateProduct from './content/AdminCreateProduct.js';
import AdminSubscriptions from './content/AdminSubscriptions.js';
import AdminProductList from './content/AdminProductList.js';


const AdminContent = () => {

  return (
    <section style={{ width:'100%', margin:'0 auto', overflow:'scroll' }}> 
      <div style={{ padding:'30px' }}>
        <Switch>
          <Route path={'/admin/admin-user'} exact component={AdminCredentials} />
          <Route path={'/admin/brand'} exact component={AdminContentBrand} />
          <Route path={'/admin/system'} exact component={AdminContentSystem} />
          <Route path={'/admin/create-products'} exact component={AdminCreateProduct} />
          <Route path={'/admin/list-products'} exact component={AdminProductList} />
          <Route path={'/admin/subscriptions'} exact component={AdminSubscriptions} />
        </Switch>
      </div>
    </section>
  );
};


export default AdminContent;
