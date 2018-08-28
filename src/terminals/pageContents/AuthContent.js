import React from 'react';
import Form from 'react-jsonschema-form';
import { textCopy } from './../../settings/temp-data.js';
import { authForm } from './../../settings/forms/authForm.js';

      



const AuthContent = ({
  handleLogin,
}) => {
  return (
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
          >{textCopy.auth.submit}</button>
        </div>
      </Form>
    </div>
  );
};

export default AuthContent;
