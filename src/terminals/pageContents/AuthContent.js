import React from 'react';
import Form from 'react-jsonschema-form';
import { TEXT_COPY } from './../../settings/language-and-text.js';
import { authForm } from './../../settings/forms/authForm.js';

      



const AuthContent = ({
  handleLogin,
  active
}) => {

  if(!active){
    return false;
  }

  return (
    <div className="screen full-screen auth content">
      <div className="container">
        <Form
          // liveValidate
          noHtml5Validate
          {...authForm.data}
          transformErrors={authForm.transformErrors}
          validate={authForm.validate}
          onSubmit={(event)=>handleLogin({
            event: event,
            nodeRoot: 'users'
          })}
        >
          <div>
            <button
              className="btn btn-primary"
              type="submit"
            >{TEXT_COPY.auth.submit}</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AuthContent;
