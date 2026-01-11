export default {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'account',
        'import-export'
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
        'board-view',
        'list-view',
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
        {
          type: 'category',
          label: 'Development',
          items: [
            'dev/development/install',
            'dev/development/additional',
          ],
          link: {
            type: 'generated-index',
            slug: '/dev/development',
          },
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            'dev/install/4gaboards',
            {
              type: 'category',
              label: 'Docker Compose (Easy)',
              items: [
                'dev/install/docker-install',
                'dev/install/docker-vars',
                'dev/install/docker-update',
                'dev/install/docker-uninstall',
              ],
              link: {
                type: 'generated-index',
                slug: '/dev/install/docker',
              },
            },
            {
              type: 'category',
              label: 'Kubernetes (Hard)',
              items: [
                'dev/install/k8s-install',
                'dev/install/k8s-vars',
                'dev/install/k8s-uninstall',
                'dev/install/k8s-port-forwarding',
                'dev/install/k8s-additional',
              ],
              link: {
                type: 'generated-index',
                slug: '/dev/install/k8s',
              },
            },
            {
              type: 'category',
              label: 'TrueNAS (Hard)',
              items: [
                'dev/install/truenas-install',
                'dev/install/truenas-vars',
                'dev/install/truenas-uninstall',
              ],
              link: {
                type: 'generated-index',
                slug: '/dev/install/truenas',
              },
            },
            {
              type: 'category',
              label: 'Manual (🤡)',
              items: [
                'dev/install/manual-install',
                'dev/install/manual-vars',
                'dev/install/manual-uninstall',
                'dev/install/manual-additional',
              ],
              link: {
                type: 'generated-index',
                slug: '/dev/install/manual',
              },
            },
          ],
          link: {
            type: 'generated-index',
            description: 'The installation of 4ga Boards is pretty easy!',
            slug: '/dev/install',
          },
        },
        'dev/backup-restore',
        'dev/web-server-config',
        'dev/sso',
        'dev/developers-additional',
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
          label: 'Contact',
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
