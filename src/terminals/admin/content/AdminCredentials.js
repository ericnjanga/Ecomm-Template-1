import React from 'react';
import Form from 'react-jsonschema-form';
import { GlobalContext } from './../../../settings/basics.js';
import { TEXT_COPY } from './../../../settings/language-and-text.js';

const structure = {
  name: 'adminCreds',
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string', title:TEXT_COPY.admin.loginUsername, 'minLength': 5, },
      password: { type: 'string', title:TEXT_COPY.admin.loginPassword, 'minLength': 8, 'maxLength': 70 },
    },
  },
  formData: { // Form default data (shoul match schema)
    'name': '',
    'password': '',
  },
  uiSchema: {
    'password': {
      "ui:widget": "password"
    },
  },
};

const AdminCredentials = () => {

  const dataDir = structure.name;
  
  return (
    <div>
      <h1>Admin Info</h1>
      <p>Mettez à jour votre informations de connection</p>
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

export default AdminCredentials;


