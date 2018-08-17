
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
          name: 'section1',
          title: 'section1',
          active: true,
          items: [
            {
              name: 'section11',
              active: true,
            },
            {
              name: 'section12',
              active: true,
            },
            {
              name: 'section13',
              active: true,
            },
          ],
        },
        {
          id: 1,
          name: 'section2',
          title: 'section2',
          active: true,
          items: [
            {
              name: 'section21',
              active: true,
            },
            {
              name: 'section22',
              active: false,
            },
            {
              name: 'section23',
              active: false,
            },
          ],
        },
        {
          id: 2,
          name: 'section3',
          title: 'section3',
          active: true,
          items: [
            {
              name: 'section31',
              active: true,
            },
            {
              name: 'section32',
              active: false,
            },
            {
              name: 'section33',
              active: false,
            },
          ],
        },
      ], // pages 
    }, // admin
  ],
};
