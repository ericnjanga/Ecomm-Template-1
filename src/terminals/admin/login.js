import React from 'react';
import Form from 'react-jsonschema-form';
import { GlobalContext } from './../../settings/basics.js';
import { TEXT_COPY } from './../../settings/language-and-text.js';

const structure = {
  name: 'brand',
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string', title:TEXT_COPY.admin.loginUsername, 'minLength': 5, },
      password: { type: 'string', title:TEXT_COPY.admin.loginPassword, 'minLength': 8, 'maxLength': 70 },
      'remember-auth' : {
        type: "boolean",
        title: TEXT_COPY.form.rememberLabel,
        default: true,
      },
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

const AdminLogin = () => {
  return (
    <div className="screen admin full-screen admin-login">

      <GlobalContext.Consumer>
        {
          (global) => (
            <React.Fragment>
              {
                global && global.brand && global.brand.name &&
                <h1 className="admin-login__title title">{ global.brand.name }</h1>
              }
              <div className="admin-login__card card">
                <div className="card-body">
                  <Form
                    className="admin-login__form"
                    schema={structure.schema}
                    uiSchema={structure.uiSchema}
                    // validate={validate}
                    formData={structure.formData}
                    onSubmit={
                      (event) => global.handleSubmit({
                        // event: event,
                        // nodeRoot: 'site-info',
                        // nodeDir1: dataDir,
                        // isSingleRecord: true,
                      })
                    }
                  >
                    <div>
                      <button
                        className="btn btn-primary"
                        type="submit"
                      >{TEXT_COPY.admin.login}</button>
                    </div>
                  </Form>
                </div>
              </div>
            </React.Fragment>
          )
        }
      </GlobalContext.Consumer>
    </div>
  );
};

export default AdminLogin;
