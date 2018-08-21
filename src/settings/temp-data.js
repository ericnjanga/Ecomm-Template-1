
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
          isDrawer: true,
          isOpen: false,
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
          title: `App's basic information`,
          active: true,
          items: [
            {
              id: 0,
              title: 'Administrator',
              name: 'administrator',
              active: true,
              isSingleRecord: true,
              schema: {
                type: 'object',
                properties: {
                  'Username': { type: 'string', default: 'Admin Username' },
                  'Password': { type: 'string', default: 'Admin Password' },
                },
              },
            },
            {
              id: 1,
              title: 'Brand',
              name: 'brand',
              active: false,
              schema: {
                type: 'object',
                properties: {
                  'Brand Name': { type: 'string', default: 'Company Brand Name' },
                  'À Propos': { type: 'string', default: 'Text About the company' },
                  'Email': { type: 'string', default: 'Company email' },
                  'Phone1': { type: 'string', default: 'Company Phone (Primary)' },
                  'Phone2': { type: 'string', default: 'Company Phone (Secondary)' },
                },
              },
              uiSchema: {
                'À Propos': {
                  "ui:widget": "textarea"
                },
              },
            },
            {
              id: 3,
              title: 'System',
              name: 'system',
              active: false,
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
          name: 'section BETA',
          title: 'BETA',
          active: false,
          items: [
            {
              id: 0,
              name: 'BETA 1',
              active: true,
              schema: {
                type: 'object',
                properties: {
                  firstName: { type: 'string', default: 'BETA 1 - item1' },
                  lastName: { type: 'string', default: 'BETA 1 - item2' },
                },
              },
            },
            {
              id: 1,
              name: 'BETA 2',
              active: false,
            },
            {
              id: 2,
              name: 'BETA 3',
              active: false,
            },
          ],
        },
        {
          id: 2,
          name: 'section GAMA',
          title: 'GAMA',
          active: false,
          items: [
            {
              id: 0,
              name: 'GAMA 1',
              active: true,
            },
            {
              id: 1,
              name: 'GAMA 2',
              active: false,
            },
            {
              id: 2,
              name: 'GAMA 3',
              active: false,
            },
          ],
        },
      ], // pages 
    }, // admin
  ],
};
