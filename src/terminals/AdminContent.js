import React from 'react';
import Form from 'react-jsonschema-form';
import ListActiveComponent from './../utilities/lists/ListActiveComponent';


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
            <h2>{section.title}</h2>
            <ListActiveComponent
              data={section.items}
              Component={
                (sectionItem)=>(
                  <React.Fragment>
                    <h3>--{sectionItem.title}</h3>
                    <FormPreset
                      {...sectionItem}
                      onSubmit={(event)=>handleSubmit({
                        event: event,
                        nodeRoot: section.name,
                        nodeDir1: sectionItem.name,
                        isSingleRecord: sectionItem.isSingleRecord,
                      })}
                    />
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


const FormPreset = ({
  name,
  schema,
  uiSchema,
  onSubmit,
}) => {



// const schema = {
//   type: 'object',
//   properties: {
//     firstName: { type: 'string', default: 'Dan' },
//     lastName: { type: 'string', default: 'Abramov' },
//   },
// }
  if(!schema) {

    return <p>{ name }</p>

  }

  return (
          <Form
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={onSubmit}
          />
        ); //<p>Preset ...</p>;
};