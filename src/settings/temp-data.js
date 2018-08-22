

export const textCopy = {
  'confirm delete': `Voulez-vous vraiment supprimer cet element?`,
};


export const brandSetting = {
  name: 'brand',
  title : 'Brand Name ...',
};

export const tempData = {

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
    }, // auth
    {
      id: 1,
      name: 'home',
      title: 'Home',
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
          name: 'focus',
          active: true,
        },
        {
          id: 2,
          name: 'content',
          active: true,
        },
      ],
    }, // home
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
    {
      id: 3,
      name: 'admin',
      title: 'Administration Panel',
      active: true,
      info1: 'info1',
      info2: 'info2',
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
                'username': '**Admin Username',
                'password': '**Admin Password',
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
                  'brand-name': { type: 'string', title: brandSetting.title },
                  'about': { type: 'string', title: 'À Propos' },
                  'email': { type: 'string', title: 'Email' },
                  'phone1': { type: 'string', title: 'Phone1' },
                  'phone2': { type: 'string', title: 'Phone2' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'brand-name': 'Company Brand Name',
                'about': '...Text About the company',
                'email': 'Company email',
                'phone1': 'Company Phone (Primary)',
                'phone2': 'Company Phone (Secondary)',
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
                  name: { type: 'string' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'name': '+++',
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
                  name: { type: 'string' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'name': '+++',
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
                  name: { type: 'string' },
                },
              },
              formData: { // Form default data (shoul match schema)
                'name': '+++',
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
            },
          ],
        },
      ], // pages 
    }, // admin
  ],
};
