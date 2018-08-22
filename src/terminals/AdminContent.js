import React from 'react';
import Form from 'react-jsonschema-form';
import ListActiveComponent from './../utilities/lists/ListActiveComponent';
import ListComponent from './../utilities/lists/ListComponent';
import GetData from './../utilities/funcAsChild/getData.js';


const AdminContent = ({
  data,
  handleSubmit,
}) => {

  const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
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
                      <FormInputs className="app-col"
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
  onSubmit,
  className,
}) => {

  if(!schema) {

    return <p>{ name }</p>

  }

  return (
    <div className={className}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onSubmit={onSubmit}
      />
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
      <GetData url={url}>
        {
          (data) => (
            <ListComponent
              data={data}
              Component={
                (item)=> (
                  <div>{ item.name} </div>
                )
              }
            />
            // <div className={className}>vsvsvv</div>
          )
        }
      </GetData>
    </div>
  );

};