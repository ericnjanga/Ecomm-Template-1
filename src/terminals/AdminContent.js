import React from 'react';
import Form from 'react-jsonschema-form';
import ListActiveComponent from './../utilities/lists/ListActiveComponent';
import ListComponent from './../utilities/lists/ListComponent';
import GetData from './../utilities/funcAsChild/getData.js';
import { dbDeleteRecord, dbUpdateRecord } from './../utilities/func/mix1.js';
import Spinner from './../utilities/comps/Spinner/Spinner.js';
import DateFormat from './../utilities/comps/DateFormat.js';
import { GlobalContext } from './../settings/basics.js';


const AdminContent = ({
  data,
  handleSubmit,
}) => {
  // console.log('handleSubmit=', handleSubmit);

  return (
    // data.map(x => <p>*** ---admin</p>)
    <ListActiveComponent
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
                    <h3>{sectionItem.title}</h3>
                    <div className="app-row">
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
                    </div>
                  </React.Fragment>
                )
              }
            />
          </React.Fragment>
        )
      }
    />
  );
};





export default AdminContent;


const FormInputs = ({
  name,
  schema,
  uiSchema,
  formData,
  validate,
  onSubmit,
  className,
}) => {

  if(!schema) {

    return <p>{ name }</p>

  }

  return (
    <div className={className}>
    {
      validate ? 
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validate={validate}
        formData={formData}
        onSubmit={onSubmit}
      />
      :
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onSubmit={onSubmit}
      />
    }
    </div>
  );
};



const FormOutputs = ({
  isActive,
  url,
  className,
}) => {

  if (!isActive) {
    return false;
     
  }


  return (
    <div className={className}>
      <GetData
        endpoint={url}
        defaultVal={null}
      >
        {
          (data) => (
            data ? 
            <ListComponent
              data={data}
              Component={
                (item)=> (
                  <div className="app-row">
                    <div className="app-col">
                      <DateFormat format='MMM Do, YYYY'>{item.createdOn}</DateFormat>
                    </div>
                    <div className="app-col">{item.title}</div>
                    <div className="app-col">
                      <GlobalContext.Consumer>
                        {
                          (global) => (
                            <button className="btn btn-secondary" onClick={()=>{ global.update(item); }}>Update</button>
                          )
                        }
                      </GlobalContext.Consumer>
                    </div>
                    <div className="app-col">
                      <button className="btn btn-danger" onClick={()=>{ dbDeleteRecord(`${url}/${item.id}`) }}>Delete</button>
                    </div>
                  </div>
                )
              }
            />
            :
            <Spinner />
          )
        }
      </GetData>
    </div>
  );

};