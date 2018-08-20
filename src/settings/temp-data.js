
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
          name: 'section *',
          title: 'section*',
          active: true,
          items: [
            {
              id: 0,
              name: 'section*1',
              active: true,
            },
            {
              id: 1,
              name: 'section*2',
              active: true,
            },
            {
              id: 3,
              name: 'section*3',
              active: true,
            },
          ],
        },
        {
          id: 1,
          name: 'section~',
          title: 'section~',
          active: true,
          items: [
            {
              id: 0,
              name: 'section~1',
              active: true,
            },
            {
              id: 1,
              name: 'section~2',
              active: false,
            },
            {
              id: 2,
              name: 'section~3',
              active: false,
            },
          ],
        },
        {
          id: 2,
          name: 'section%',
          title: 'section%',
          active: true,
          items: [
            {
              id: 0,
              name: 'section%1',
              active: true,
            },
            {
              id: 1,
              name: 'section%2',
              active: false,
            },
            {
              id: 2,
              name: 'section%3',
              active: false,
            },
          ],
        },
      ], // pages 
    }, // admin
  ],
};
