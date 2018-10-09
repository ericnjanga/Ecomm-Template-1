import React from 'react';
import Form from 'react-jsonschema-form';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";
import ListActiveComponent from './../../utilities/lists/ListActiveComponent';
import ListComponent from './../../utilities/lists/ListComponent';
import GetData from './../../utilities/funcAsChild/getData.js';
import { dbDeleteRecord, dbUpdateRecord } from './../../utilities/func/mix1.js';
import Spinner from './../../utilities/comps/Spinner/Spinner.js';
import DateFormat from './../../utilities/comps/DateFormat.js';
import { GlobalContext } from './../../settings/basics.js';

import AdminBrand from './content/AdminBrand.js';
import AdminSystem from './content/AdminSystem.js';
import AdminProduct from './content/AdminProduct.js';
import AdminSubscriptions from './content/AdminSubscriptions.js';
import ProductList from './content/ProductList.js';


const AdminContent = ({
  data,
  handleSubmit,
}) => {

  return (
    <section style={{ width:'100%', margin:'0 auto', overflow:'scroll' }}> 
      <div style={{ padding:'30px' }}>
        <Switch>
          <Route path={'/admin'} exact component={AdminBrand} />
          <Route path={'/admin/brand'} exact component={AdminBrand} />
          <Route path={'/admin/system'} exact component={AdminSystem} />
          <Route path={'/admin/create-products'} exact component={AdminProduct} />
          <Route path={'/admin/list-products'} exact component={ProductList} />
          <Route path={'/admin/subscriptions'} exact component={AdminSubscriptions} />
        </Switch>
      </div>

      <GlobalContext.Consumer>
      {
        (global) => (
          global && global.user && !global.user.isAdmin &&
          <Redirect exact to="/" />
        )
      }
      </GlobalContext.Consumer>

      {/* <ListActiveComponent
        data={data}
        Component={
          (section)=>(
            <React.Fragment>
              <h2>
                {section.title}
                {
                  section.info &&
                  <small> &nbsp; ({section.info})</small>
                }
              </h2>
              <ListActiveComponent
                data={section.items}
                Component={
                  (sectionItem)=>(
                    <React.Fragment>
                      <h3 style={{ marginBottom:'20px' }}>{sectionItem.title}</h3>
                      <div className="app-row">
                        {
                          sectionItem.name==='all-subscriptions' ?
                          <div className="app-col">
                            <GetData
                              endpoint={'users'}
                              defaultVal={null}
                            >
                              {
                                (data) => (
                                  <SubscriptionsTable
                                    data={data}
                                  />
                                )
                              }
                            </GetData>
                          </div>
                          :
                          <React.Fragment>
                            <FormInputs
                              className="app-col"
                              {...sectionItem}
                              onSubmit={(event)=>handleSubmit({
                                event: event,
                                nodeRoot: section.name,
                                nodeDir1: sectionItem.name,
                                isSingleRecord: sectionItem.isSingleRecord,
                              })}
                            />
                            <FormOutputs
                              url={`${section.name}/${sectionItem.name}`}
                              isActive={sectionItem.previewLiveData}
                              className="app-col"
                            />
                          </React.Fragment>
                        }
                      </div>
                    </React.Fragment>
                  )
                }
              />
            </React.Fragment>
          )
        }
      /> */}
    </section>
  );
};





export default AdminContent;


// const FormInputs = ({
//   name,
//   schema,
//   uiSchema,
//   formData,
//   validate,
//   onSubmit,
//   className,
// }) => {

//   if(!schema) {

//     return <p>{ name }</p>

//   }

//   return (
//     <div className={className}>
//     {
//       validate ? 
//       <Form
//         schema={schema}
//         uiSchema={uiSchema}
//         validate={validate}
//         formData={formData}
//         onSubmit={onSubmit}
//       />
//       :
//       <Form
//         schema={schema}
//         uiSchema={uiSchema}
//         formData={formData}
//         onSubmit={onSubmit}
//       />
//     }
//     </div>
//   );
// };



// const SubscriptionsTable = ({ data }) => {

//   if (!data) {
//     return false;
//   }

//   return (
//     <table className="table table-striped" style={{ width:'100%'}}>
//       <thead className="thead-dark">
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Nom</th>
//           <th scope="col">Email</th>
//           <th scope="col">Telephone</th>
//           <th scope="col">Dernière inscription</th>
//           <th scope="col">Dernière inscription</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           data.map((item, index) =>{
//             return (
//               <tr key={item.id}>
//                 <th scope="row">{ index + 1}</th>
//                 <td>{ item.name }</td>
//                 <td>{ item.email }</td>
//                 <td>{ item.phone }</td>
//                 <td>
//                   <DateFormat format='MMM Do, YYYY'>{item.createdOn}</DateFormat>
//                 </td>
//                 <td>
//                   <button className="btn btn-primary">Dejà Vu</button>
//                 </td>
//               </tr>                     
//             )
//           })
//         }
//       </tbody>
//     </table> 
//   );

// };



// const FormOutputs = ({
//   isActive,
//   url,
//   className,
// }) => {

//   if (!isActive) {
//     return false;
     
//   }


//   return (
//     <div className={className}>
//       <GetData
//         endpoint={url}
//         defaultVal={null}
//       >
//         {
//           (data) => (
//             data ? 
//             <ListComponent
//               data={data}
//               Component={
//                 (item)=> (
//                   <div className="app-row">
//                     <div className="app-col">
//                       <DateFormat format='MMM Do, YYYY'>{item.createdOn}</DateFormat>
//                     </div>
//                     <div className="app-col">{item.title}</div>
//                     <div className="app-col">
//                       <button className="btn btn-danger" onClick={()=>{ dbDeleteRecord(`${url}/${item.id}`) }}>Delete</button>
//                     </div>
//                   </div>
//                 )
//               }
//             />
//             :
//             <Spinner />
//           )
//         }
//       </GetData>
//     </div>
//   );

// };