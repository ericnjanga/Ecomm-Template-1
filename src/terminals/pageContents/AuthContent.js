import React from 'react';
import Form from 'react-jsonschema-form';
import { textCopy } from './../../settings/temp-data.js';


const schema = {
  type: 'object',
  properties: {
    'email': { type: 'string', title: textCopy.form.email },
    'telephone': { type: 'string', title: textCopy.form.phone },
    'remember-auth' : {
      type: "array",
      minItems: 1,
      title: textCopy.form.rememberLabel,
      items: {
        type: 'string',
        enum: [textCopy.form.remember],
      },
      uniqueItems: true,
    },
  },
};
const formData = {
  'email': '',
  'telephone': '',
};

// remember-auth
const uiSchema = {
  'email': {
    'ui:placeholder': textCopy.form.emailPlaceholder,
  },
  'telephone': {
    'ui:placeholder': textCopy.form.phonePlaceholder,
  },
  'remember-auth': {
    'ui:widget': 'checkboxes',
  },
};




const AuthContent = () => {
  return (
    <div className="container">
      <h2>{textCopy.auth.title}</h2>
      <p>{textCopy.auth.paragraph}</p>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        // onSubmit={onSubmit}
      >
        <div>
          <button className="btn btn-primary" type="submit">{textCopy.auth.submit}</button>
        </div>
      </Form>
    </div>
  );
};

export default AuthContent;
