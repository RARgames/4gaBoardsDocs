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
        {
          type: 'category',
          label: 'Install',
          items: [
            'install-4gaboards',
            {
              type: 'category',
              label: 'Docker Compose (Easy)',
              items: [
                'install-docker-install',
                'install-docker-vars',
                'install-docker-uninstall',
              ],
              link: {
                type: 'generated-index',
                slug: '/install-docker',
              },
            },
            {
              type: 'category',
              label: 'Kubernetes (Hard)',
              items: [
                'install-k8s-install',
                'install-k8s-vars',
                'install-k8s-uninstall',
                'install-k8s-port-forwarding',
                'install-k8s-additional',
              ],
              link: {
                type: 'generated-index',
                slug: '/install-k8s',
              },
            },
            {
              type: 'category',
              label: 'True NAS (Hard)',
              items: [
                'install-truenas-install',
                'install-truenas-vars',
                'install-truenas-uninstall',
              ],
              link: {
                type: 'generated-index',
                slug: '/install-truenas',
              },
            },
            {
              type: 'category',
              label: 'Manual (🤡)',
              items: [
                'install-manual-install',
                'install-manual-vars',
                'install-manual-uninstall',
                'install-manual-additional',
              ],
              link: {
                type: 'generated-index',
                slug: '/install-truenas',
              },
            },
          ],
          link: {
            type: 'generated-index',
            description: 'The installation of 4ga Boards is pretty easy!',
            slug: '/install',
          },
        },
        'development',
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
      collapsed: false,
    },
  ],
};
