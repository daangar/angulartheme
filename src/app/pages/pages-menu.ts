import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Fulfillment',
    icon: 'cube-outline',
    children: [
      {
        title: 'Inbound',
        link: '/pages/layout/stepper',
        children: [
          {
            title: 'Search',
            link: '/pages/layout/list',
          },
          {
            title: 'Create',
            link: '/pages/inbound/create',
          },
      ]
      },
      {
        title: 'B2B',
        link: '/pages/layout/list',
        children: [
          {
            title: 'Search',
            link: '/pages/layout/list',
          },
          {
            title: 'Create',
            link: '/pages/layout/list',
          },
      ]
      },
      {
        title: 'B2C',
        link: '/pages/layout/infinite-list',
        children: [
          {
            title: 'Search',
            link: '/pages/layout/list',
          },
          {
            title: 'Create',
            link: '/pages/layout/list',
          },
      ]
      },
      {
        title: 'Reports',
        link: '/pages/layout/infinite-list',
        children: [
          {
            title: 'Inventory',
            link: '/pages/layout/list',
          },
          {
            title: 'Cycle Count',
            link: '/pages/layout/list',
          },
      ]
      },
    ],
  },
  {
    title: 'Transportation',
    icon: 'car-outline',
    children: [
      {
        title: 'Search Orders',
        link: '/pages/forms/datepicker',
      },
      {
        title: 'Create Order',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Invoices',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Open Orders',
        link: '/pages/forms/buttons',
      },
      {
        title: 'LTL Calc',
        link: '/pages/forms/buttons',
      },
    ],
  },
  {
    title: 'Assembly',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Search',
        link: '/pages/ui-features/grid',
      },
      
    ],
  },
];
