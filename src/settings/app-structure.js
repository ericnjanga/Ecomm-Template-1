import { TEXT_COPY } from './language-and-text';

export const brandSetting = {
  name: 'brand',
  title : 'Brand Name ...',
};

export const appStructure = {

  /**
   * App structure
   * ----------------------
   * (This describes the application's entire structure)
   */
  
  screens: [
    {
      // id: 0,
      // name: 'auth',
      // title: 'Login',
      // active: true,
      // info1: 'info1',
      // info2: 'info2',
      // path: '/', 
      // dividers: [
      //   {
      //     id: 0,
      //     name: 'content',
      //     active: true,
      //     className: 'full-screen',
      //   }
      // ],
    }, // auth
    {
      id: 1,
      name: 'home',
      title: 'Home',
      active: true,
      info1: 'info1',
      info2: 'info2',
      path: '/',
      className: 'screen',
      dividers: [
        {
          id: 0,
          name: 'hero',
          active: true,
        },
        {
          id: 1,
          name: 'focus',
          active: true,
        },
        {
          id: 2,
          name: 'content',
          active: true,
        },
        {
          id: 3,
          name: 'footer',
          active: true,
        },
      ],
    }, // home
    /*
    -- HIDDING SINGLE FOR NOW
    {
      id: 2,
      name: 'single',
      title: 'Single',
      active: true,
      info1: 'info1',
      info2: 'info2',
      dividers: [
        {
          id: 0,
          name: 'hero',
          active: true,
        },
        {
          id: 1,
          name: 'content',
          active: true,
        },
      ],
    }, // single
    */
    {
      id: 3,
      name: 'admin',
      title: 'Administration Panel',
      active: true,
      info1: 'info1',
      info2: 'info2',
      path: '/admin',
      className: 'screen admin full-screen overflow-y-scroll',
      dividers: [
        {
          id: 0,
          name: 'sidebar',
          active: true,
          isDrawer: true, // has a drawer behaviour
          isOpen: true, // opened by default
        },
        {
          id: 1,
          name: 'content',
          active: true,
        },
      ],
      sections: [
        {
          id: 0,
          name: 'site-info',
          info: `App's basic information`,
          title: `Site Info`,
          active: true,
          items: [
            {
              id: 0,
              title: 'Administrator',
              name: 'administrator',
              active: true,
              isSingleRecord: true, // the same record will be updated each time
              previewLiveData: false, // should data created be previewed on admin mode?
              syncWithDatabase: true, // (formData) should feed from database 
              schema: {
                type: 'object',
                properties: {
                  'username': { type: 'string', title: 'Username' },
                  'password': { type: 'string', title: 'Password' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'username': '',
                'password': '',
              },
            },
            {
              id: 1,
              title: 'Brand',
              name: brandSetting.name,
              active: false,
              isSingleRecord: true, // the same record will be updated each time
              previewLiveData: false, // should data created be previewed on admin mode?
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string', title: brandSetting.title },
                  slogan: { type: 'string', title:'Your Slogan (70 chars max)' },
                  about: { type: 'string', title: 'À Propos (La section "À Propos" sera absente si cette information est inexistente)' },
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
            },
            {
              id: 3,
              title: 'System',
              name: 'system',
              active: false,
              isSingleRecord: true, // the same record will be updated each time
              previewLiveData: false, // should data created be previewed on admin mode?
              // schema: {
              //   type: "array",
              //   minItems: 2,
              //   title: "A multiple-choice list",
              //   items: {
              //     type: 'string',
              //     enum: ['Login Panel', 'User Can Contact Admin', '*******', '######'],
              //   },
              //   uniqueItems: true,
              // },
              schema: {
                type: 'object',
                properties: {
                  curr_cdn_to_xaf: { type: 'number', title: 'Combient $1 Canadien coûte en CFA? (cette valeur servira à la conversion en temps réel du prix des voitures en CFA' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'curr_cdn_to_xaf': 0,
                'about': '',
                'email': '',
                'phone1': '',
                'phone2': '',
              },
              uiSchema: {
                "ui:widget": "checkboxes"
              },
              // validate: function(formData, errors){
              //   console.log('validation', typeof formData.curr_cdn_to_xaf);
              //   if (typeof formData.curr_cdn_to_xaf !== 'number') {
              //     errors.curr_cdn_to_xaf.addError('Vous devez entrer un nombre comme 12.5');
              //   }
              //   return errors;
              // },
            },
          ],
        },
        // HIDDING PRESETS FOR NOW
        // -----------------------
        // {
        //   id: 1,
        //   name: 'presets',
        //   title: 'Presets',
        //   info: 'Options used as a complement to other data',
        //   active: false,
        //   items: [
        //     {
        //       id: 0,
        //       name: 'preset1',
        //       title: 'Preset 1',
        //       active: true,
        //       previewLiveData: true, // should data created be previewed on admin mode?
        //       schema: {
        //         type: 'object',
        //         properties: {
        //           title: { type: 'string' },
        //         },
        //       },
        //       formData: { // Form default data (shoul match schema)
        //         'title': '',
        //       },
        //     },
        //     {
        //       id: 1,
        //       name: 'preset2',
        //       title: 'Preset 2',
        //       active: false,
        //       previewLiveData: true, // should data created be previewed on admin mode?
        //       schema: {
        //         type: 'object',
        //         properties: {
        //           title: { type: 'string' },
        //         },
        //       },
        //       formData: { // Form default data (shoul match schema)
        //         'title': '',
        //       },
        //     },
        //     {
        //       id: 2,
        //       name: 'preset3',
        //       title: 'Preset 3',
        //       active: false,
        //       previewLiveData: true, // should data created be previewed on admin mode?
        //       schema: {
        //         type: 'object',
        //         properties: {
        //           title: { type: 'string' },
        //         },
        //       },
        //       formData: { // Form default data (shoul match schema)
        //         'title': '',
        //       },
        //     },
        //   ],
        // },
        {
          id: 2,
          name: 'products',
          title: 'Products',
          info: 'Items actually showcased on the main page for purchase',
          active: false,
          items: [
            {
              id: 0,
              name: 'product',
              title: 'Product',
              active: true,
              previewLiveData: true, // should data created be previewed on admin mode?
              schema: {
                type: 'object',
                properties: {
                  image: { type: 'string' }, //, format: "data-url" },
                  title: { type: 'string' , minLength: 3 },
                  onSpotlight: { // Products which will receive more exposure than the rest
                    title: TEXT_COPY.admin.onSpotlight,
                    type: 'boolean',
                    enum: [true, false],
                    enumNames: ['Gaz', '..']
                  },
                  description: { type: 'string', minLength: 10 },
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
            }, // product
          ], // items
        },
        {
          id: 3,
          name: 'subscriptions',
          title: 'Subscriptions',
          info: 'People who have registered to your site',
          active: false,
          items: [
            {
              id: 0,
              name: 'all-subscriptions',
              title: 'All Subscriptions',
              active: true,
            },
          ],
        },
      ], // pages 
    }, // admin
  ],
};
