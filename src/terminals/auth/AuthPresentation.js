import React from 'react';
import Form from 'react-jsonschema-form';
import { TEXT_COPY } from './../../settings/language-and-text.js';
import { authForm } from './../../settings/forms/authForm.js';

      



const AuthPresentation = ({
  className,
  handleLogin,
  active
}) => {

  if(!active){
    return false;
  }

  return (
    <section className={className}>
      <div className="container container-small">
        <Form
          // liveValidate
          className="visitor-login__form"
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
    </section>
  );
};

export default AuthPresentation;
