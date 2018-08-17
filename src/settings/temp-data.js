
export const tempData = {
  screens: [
    {
      id: 0,
      name: 'auth',
      title: 'Login',
      active: true,
      info1: 'info1',
      info2: 'info2',
    },
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
    },
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
    },
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
          name: 'mainContent',
          active: true,
        },
      ],
      sections: [
        {
          name: 'item1',
          title: 'item1',
          active: true,
          items: [
            {
              name: 'item11',
              active: true,
            },
            {
              name: 'item12',
              active: false,
            },
            {
              name: 'item13',
              active: false,
            },
          ],
        },
        {
          name: 'item2',
          title: 'item2',
          active: false,
          items: [
            {
              name: 'item21',
              active: true,
            },
            {
              name: 'item22',
              active: false,
            },
            {
              name: 'item23',
              active: false,
            },
          ],
        },
        {
          name: 'item3',
          title: 'item3',
          active: false,
          items: [
            {
              name: 'item31',
              active: true,
            },
            {
              name: 'item32',
              active: false,
            },
            {
              name: 'item33',
              active: false,
            },
          ],
        },
      ], // pages 
    },
  ],
};
