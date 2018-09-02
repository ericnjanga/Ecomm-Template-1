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
      id: 0,
      name: 'auth',
      title: 'Login',
      active: true,
      info1: 'info1',
      info2: 'info2',
      path: '/', 
      dividers: [
        {
          id: 0,
          name: 'content',
          active: true,
          className: 'full-screen',
        }
      ],
    }, // auth
    {
      id: 1,
      name: 'home',
      title: 'Home',
      active: true,
      info1: 'info1',
      info2: 'info2',
      path: '/items',
      className: 'screen overflow-y-scroll',
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
                  about: { type: 'string', title: 'À Propos' },
                  email: { type: 'string', title: 'Email' },
                  phone1: { type: 'string', title: 'Phone1' },
                  phone2: { type: 'string', title: 'Phone2' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'name': '',
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
              schema: {
                type: "array",
                minItems: 2,
                title: "A multiple-choice list",
                items: {
                  type: 'string',
                  enum: ['Login Panel', 'User Can Contact Admin', '*******', '######'],
                },
                uniqueItems: true,
              },
              uiSchema: {
                "ui:widget": "checkboxes"
              },
            },
          ],
        },
        {
          id: 1,
          name: 'presets',
          title: 'Presets',
          info: 'Options used as a complement to other data',
          active: false,
          items: [
            {
              id: 0,
              name: 'preset1',
              title: 'Preset 1',
              active: true,
              previewLiveData: true, // should data created be previewed on admin mode?
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'title': '',
              },
            },
            {
              id: 1,
              name: 'preset2',
              title: 'Preset 2',
              active: false,
              previewLiveData: true, // should data created be previewed on admin mode?
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'title': '',
              },
            },
            {
              id: 2,
              name: 'preset3',
              title: 'Preset 3',
              active: false,
              previewLiveData: true, // should data created be previewed on admin mode?
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'title': '',
              },
            },
          ],
        },
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
                  title: { type: 'string' },
                  onSpotlight: { // Products which will receive more exposure than the rest
                    title: TEXT_COPY.admin.onSpotlight,
                    type: 'boolean',
                    enum: [true, false],
                    enumNames: ['Gaz', '..']
                  },
                  description: { type: 'string' },
                  price: { type: 'number' },
                  make: { 
                    type: 'string',
                    enum: ["one", "two", "three"],
                    enumNames: ["one", "two", "three"]
                  },
                  year: { 
                    type: 'number',
                    enum: [2010,2011,2012],
                    enumNames: [2010,2011,2012]
                  },
                  bodyType: { 
                    type: 'string',
                    enum: ['sedan','...','ccc'],
                    enumNames: ['sedan','...','ccc']
                  },
                  color: { 
                    type: 'string',
                    enum: ['blue','red','...','sss'],
                    enumNames: ['blue','red','...','sss']
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
                    enumNames: ['Gaz', '..']
                  },
                },
              },
              formData: { // Form default data (shoul match schema)
                'title': '',
                'description': '',
                'price': 0.0,
                'make':'one',
                'year':2011,
                'bodyType':'sedan',
                'color':'red',
                'kilometers': 0.0,
                'transmission': 'automatic',
                'fuelType': 'Gaz',
                'nbDoors': 4,
                isVisible: true,
              },
              uiSchema: {
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
