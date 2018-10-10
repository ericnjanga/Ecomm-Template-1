import React from 'react';
import Form from 'react-jsonschema-form';
import { GlobalContext } from './../../../settings/basics.js';
import { TEXT_COPY } from './../../../settings/language-and-text.js';


const structure = {
  name: 'products',
  schema: {
    type: 'object',
    properties: {
      image: { type: 'string' }, //, format: "data-url" },
      title: { type: 'string' , minLength: 3 },
      price: { type: 'number' },
      make: { 
        type: 'string',
        enum: ['toyota', 'honda', 'subaru', 'bMW', 'mercedes', 'audi', 'alpha romeo', 'kia','volvo', 'nissan', 'mazda'],
        enumNames: ['Toyota', 'Honda', 'Subaru', 'BMW', 'Mercedes', 'Audi', 'Alpha Romeo', 'Kia','Volvo', 'Nissan', 'Mazda'],
      },
      year: { 
        type: 'number',
        enum: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,2011,2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        enumNames: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,2011,2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      },
      bodyType: { 
        type: 'string',
        enum: ['non défini','sedan'],
        enumNames: ['Non défini','Sedan']
      },
      color: { 
        type: 'string',
        enum: ['non définie', 'bleu','rouge','gris', 'gris clair', 'gris foncé', 'jaune', 'orange'],
        enumNames: ['Non définie', 'Bleu','Rouge','Gris', 'Gris Clair', 'Gris foncé', 'Jaune', 'Orange']
      },
      kilometers: { type: 'number' },
      transmission: { 
        type: 'string',
        enum: ['automatic','manual'],
        enumNames: ['automatic','manual']
      },
      nbDoors: { 
        type: 'number',
        enum: [3,4,5],
        enumNames: [3,4,5]
      },
      fuelType: { 
        type: 'string',
        enum: ['Gaz', 'Diesel'],
        enumNames: ['Gaz', 'Diesel']
      },
      isVisible: { 
        type: 'boolean',
        enum: [true, false],
        enumNames: ['Yes', 'No']
      },
      description: { type: 'string', minLength: 10 },
      onSpotlight: { // Products which will receive more exposure than the rest
        title: TEXT_COPY.admin.onSpotlight,
        type: 'boolean',
        enum: [true, false],
        enumNames: ['Gaz', '..']
      },
    },
  },
  formData: { // Form default data (shoul match schema)
    'title': '',
    'onSpotlight': false,
    'description': '',
    'price': 0.0,
    'make':'toyota',
    'year':2011,
    'bodyType':'non défini',
    'color':'non définie',
    'kilometers': 0.0,
    'transmission': 'automatic',
    'fuelType': 'Gaz',
    'nbDoors': 4,
    isVisible: true,
  },
  uiSchema: {
    'image': {
      "ui:widget": "file"
    },
    'price': {
      "ui:widget": "text"
    },
    'description': {
      "ui:widget": "textarea"
    },
    'make': {
      "ui:widget": "select"
    },
    'bodyType': {
      "ui:widget": "select"
    },
    'color': {
      "ui:widget": "select"
    },
    'transmission': {
      "ui:widget": "radio",
      "ui:options": {
        "inline": true
      }
    },
    'nbDoors': {
      "ui:widget": "radio",
      "ui:options": {
        "inline": true
      }
    },
    'fuelType': {
      "ui:widget": "radio",
      "ui:options": {
        "inline": true
      }
    },
    'isVisible': {
      "ui:widget": "radio",
      "ui:options": {
        "inline": true
      }
    },
  }, // uiSchema
  validate: function(formData, errors) {
    if (!formData.image) {
      errors.image.addError('You have to select an image');
    }
    return errors;
  },
};

const AdminCreateProduct = () => {

  const dataDir = structure.name;

  return (
    <section>
      <h1>Products</h1>
      <h2>(Items actually showcased on the main page for purchase)</h2>
      <div className="app-row">
        <div className="app-col">
          <GlobalContext.Consumer>
            {
              (global) => {
                const thisFormData = global[dataDir] ? {...global[dataDir]} : structure.formData;
                return (
                  <Form
                    className="admin-form"
                    schema={structure.schema}
                    uiSchema={structure.uiSchema}
                    validate={structure.validate}
                    formData={thisFormData}
                    onSubmit={
                      (event) => global.handleSubmit({
                        event: event,
                        nodeRoot: dataDir,
                        isSingleRecord: false,
                      })
                    }
                  />
                )
                
              }
            }
          </GlobalContext.Consumer>
        </div>
      </div>
    </section>
  );
}

export default AdminCreateProduct;
