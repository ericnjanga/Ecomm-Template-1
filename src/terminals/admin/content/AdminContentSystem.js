import React from 'react';
import Form from 'react-jsonschema-form';
import { GlobalContext } from './../../../settings/basics.js';

const structure = {
  name: 'system',
  schema: {
    type: 'object',
    properties: {
      curr_cdn_to_xaf: { type: 'number', title: 'Combient $1 Canadien coûte en CFA? (cette valeur servira à la conversion en temps réel du prix des voitures en CFA' },
    },
  },
  formData: { // Form default data (shoul match schema)
    'curr_cdn_to_xaf': 0,
  },
  uiSchema: {
    // 'about': {
    //   "ui:widget": "textarea"
    // },
  },
};

const AdminContentSystem = ({
  handleSubmit
}) => {

  const dataDir = structure.name;
  
  return (
    <div>
      <h1>System</h1>
      <GlobalContext.Consumer>
        {
          (global) => {
            const thisFormData = global[dataDir] ? {...global[dataDir]} : structure.formData;
            return (
              <Form
                className="admin-form"
                schema={structure.schema}
                uiSchema={structure.uiSchema}
                // validate={validate}
                formData={thisFormData}
                onSubmit={
                  (event) => global.handleSubmit({
                    event: event,
                    nodeRoot: 'site-info',
                    nodeDir1: dataDir,
                    isSingleRecord: true,
                  })
                }
              />
            )
            
          }
        }
      </GlobalContext.Consumer>
  </div>
  );
}

export default AdminContentSystem;
