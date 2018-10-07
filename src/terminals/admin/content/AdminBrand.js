import React from 'react';
import Form from 'react-jsonschema-form';
import { GlobalContext } from './../../../settings/basics.js';

const structure = {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string', title: 'Brand Name', 'minLength': 3, },
      slogan: { type: 'string', title:'Your Slogan (70 chars max)', 'minLength': 3, 'maxLength': 70, },
      welcomeTitle: { type: 'string', title:'Welcome title (70 chars max)', 'minLength': 3, 'maxLength': 70,  },
      about: { type: 'string', title: 'À Propos (La section "À Propos" sera absente si cette information est inexistente)', 'minLength': 3, },
      email: { type: 'string', title: 'Email' },
      phone1: { type: 'string', title: 'Phone1' },
      phone2: { type: 'string', title: 'Phone2' },
    },
  },
  formData: { // Form default data (shoul match schema)
    'name': '',
    'slogan': '',
    'about': '',
    'email': '',
    'phone1': '',
    'phone2': '',
  },
  uiSchema: {
    'about': {
      "ui:widget": "textarea"
    },
  },
};

const AdminBrand = ({
  handleSubmit
}) => {
  return (
    <div>
      <h1>Brand</h1>
      <GlobalContext.Consumer>
        {
          (global) => {
            const thisFormData = global.brand ? {...global.brand} : structure.formData;
            return (
              <Form
                schema={structure.schema}
                uiSchema={structure.uiSchema}
                // validate={validate}
                formData={thisFormData}
                onSubmit={
                  (event) => global.handleSubmit({
                    event: event,
                    nodeRoot: 'site-info',
                    nodeDir1: 'brand',
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

export default AdminBrand;


