/**
 * AUTH FORM
 * ---------
 * Everything necessary to:
 * - Create
 * - Generate custom error messages
 * - Custom validate
 * - Autofill form with data saved in localStorage 
 */

import { textCopy } from './../temp-data.js';
import { emailPattern } from './../utils.js';
import { localStorageGetItem } from './../../utilities/func/mix1.js';
import { APP_PREFIX } from './../basics.js';


// Get user credentials saved in the DB
const FORM_AUTOFILL = {
  name: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'name' }) ? localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'name' }) : '',
  email: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'email' }) ? localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'email' }) : '',
  phone: localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'phone' }) ? Number(localStorageGetItem({ prefix:`${APP_PREFIX}-`, name:'phone' })) : '',
};


const data = {
  // schema ...
  schema: {
    title: textCopy.auth.title, // form title
    description: textCopy.auth.paragraph, // form description
    type: 'object',
    required: [
      'name',
      'email',
      'phone',
    ],
    properties: {
      'name': { type: 'string', title: textCopy.auth.name, 'minLength': 3, },
      'email': { type: 'string', title: textCopy.form.email, },
      'phone': { type: 'number', title: textCopy.form.phone },
      'remember-auth' : {
        type: "boolean",
        title: textCopy.form.rememberLabel,
        default: true,
      },
    },
  },

  // formData
  formData: {
    'name': FORM_AUTOFILL.name,
    'email': FORM_AUTOFILL.email,
    'phone': FORM_AUTOFILL.phone,
  },
  
  // uiSchema
  uiSchema: {
    'name': {
      'ui:placeholder': textCopy.auth.name,
    },
    'email': {
      'ui:options': {
        inputType: 'email',
      },
      'ui:placeholder': textCopy.form.emailPlaceholder,
    },
    'phone': {
      'ui:options': {
        inputType: 'tel',
      },
      'ui:placeholder': textCopy.form.phonePlaceholder,
    },
  },
};


/**
 * Define custom error messages
 * @param {*} errors 
 */
let transformErrors = function(errors) {
  return errors.map(error => {
    let msgErr = '';
    if (error.name === 'minLength') {
      msgErr = textCopy.form.errors[error.name];
    } else if (error.property === '.email') {
      msgErr = textCopy.form.errors.email;
    } else if (error.property === '.phone') {
      msgErr = textCopy.form.errors.phone;
    }
    error.message = msgErr;
    error.stack = `${error.property}: ${msgErr}`;
    return error;
  });
};


/**
 * Define custom error validations
 * @param {*} formData 
 * @param {*} errors 
 */
let validate = function (formData, errors) {
  if (!emailPattern.test(formData.email)) {
    errors.email.addError(textCopy.form.errors.email);
  }
  return errors;
}


export const authForm = {
  data: {...data},
  transformErrors,
  validate
};
