export default {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'account'
      ],
      link: {
        type: 'generated-index',
        description: 'Learn about the most important 4ga Boards concepts!',
        slug: '/getting-started',
      },
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
      link: {
        type: 'generated-index',
        description: 'Learn how to get the most of 4ga Boards as a user!',
        slug: '/user-manual',
      },
    },
    {
      type: 'category',
      label: 'For Administrators',
      items: [
        'admin-settings',
        'instance-settings',
        'project-settings',
      ],
      link: {
        type: 'generated-index',
        description: 'Learn how to get the most of 4ga Boards as an admin!',
        slug: '/admin-manual',
      },
    },
    {
      type: 'category',
      label: 'For Developers',
      items: [
        'developers',
        'developers2',
      ],
      link: {
        type: 'generated-index',
        description: 'Learn how to get the most of 4ga Boards as a developer!',
        slug: '/developer-manual',
      },
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
      link: {
        type: 'generated-index',
        description: 'Explore 4ga Boards additional resources!',
        slug: '/additional',
      },
    },
  ],
};
