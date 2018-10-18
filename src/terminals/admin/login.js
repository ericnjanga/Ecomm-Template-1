import React from 'react';
import Form from 'react-jsonschema-form';
import { GlobalContext } from './../../settings/basics.js';
import { TEXT_COPY } from './../../settings/language-and-text.js';

const structure = {
  name: 'admin-login',
  schema: {
    type: 'object',
    required: [
      'name',
      'password',
    ],
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

  /**
   * Define custom error validations
   * @param {*} formData 
   * @param {*} errors 
   */
  validate : function (formData, errors) {
    // if (!emailPattern.test(formData.email)) {
    //   errors.email.addError(TEXT_COPY.form.errors.email);
    // }
    return errors;
  },

  /**
   * Define custom error messages
   * @param {*} errors 
   */
  transformErrors: function(errors) {
    return errors.map(error => {
      let msgErr = '';
      
      if (error.property === '.name') {
        msgErr = 'Votre nom devrait avoir au moins 5 charactères';
      } else if (error.property === '.password') {
        msgErr = 'Votre mot de passe devrait avoir au moins 8 charactères';
      }
      error.message = msgErr;
      error.stack = `${error.property}: ${msgErr}`;
      return error;
    });
  },


};

const AdminLogin = ({
  handleLogin,
}) => {
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
                    noHtml5Validate
                    schema={structure.schema}
                    transformErrors={structure.transformErrors}
                    uiSchema={structure.uiSchema}
                    validate={structure.validate}
                    formData={structure.formData}
                    onSubmit={handleLogin}
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
