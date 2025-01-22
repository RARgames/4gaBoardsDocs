export default {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'home',
        'account'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'For Users',
      items: [
        'structure',
        'project',
        'board',
        'list',
        'card',
        'sidebar',
        'settings',
        'view',
        'shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'For Administrators',
      items: [
        'admin-settings',
        'instance-settings',
        'project-settings',
      ],
    },
    {
      type: 'category',
      label: 'For Developers',
      items: [
        'developers',
      ],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      items: [
        'additional-info',
        { type: 'link',
          label: 'Github Repository',
          href: 'https://github.com/RARgames/4gaBoards',
        },
        { type: 'link',
          label: '4ga Boards Website',
          href: 'https://4gaboards.com/',
        },
        { type: 'link',
          label: 'Contact Form',
          href: 'https://4gaboards.com/contact',
        }
      ],
    },
  ],
};
