// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '4ga Boards Docs',
  tagline: 'Get Advantage. Straightforward boards system for realtime project management.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.4gaboards.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
  },

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ], 
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/4gaBoards_social_card.webp',
      navbar: {
        logo: {
          alt: '4ga Boards Documentation',
          src: 'img/4gaboards512w-white.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: '/docs/user-manual',
            position: 'left',
            label: 'Users',
          },
          {
            to: '/docs/admin-manual',
            position: 'left',
            label: 'Admins',
          },
          {
            to: '/docs/developer-manual',
            position: 'left',
            label: 'Devs',

          },
          {
            to: 'https://github.com/RARgames/4gaboards',
            className: 'header-github',
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 512"><path d="M259.4,16c-137.7,0-243,104.5-243,242.2c0,110.1,69.3,204.3,168.2,237.4c12.7,2.3,17.2-5.6,17.2-12c0-6.2-0.3-40.1-0.3-60.9 c0,0-69.5,14.9-84.1-29.6c0,0-11.3-28.9-27.6-36.3c0,0-22.7-15.6,1.6-15.3c0,0,24.7,2,38.3,25.6c21.7,38.3,58.2,27.3,72.4,20.7 c2.3-15.9,8.7-26.9,15.9-33.4c-55.5-6.2-111.5-14.2-111.5-109.7c0-27.3,7.5-41,23.4-58.5c-2.6-6.5-11-33.1,2.6-67.4 c20.7-6.5,68.5,26.8,68.5,26.8c19.9-5.6,41.2-8.4,62.3-8.4c21.1,0,42.5,2.9,62.3,8.4c0,0,47.7-33.3,68.5-26.8 c13.6,34.4,5.2,60.9,2.6,67.4c15.9,17.6,25.6,31.3,25.6,58.5c0,95.8-58.5,103.4-113.9,109.7c9.1,7.8,16.9,22.7,16.9,46.1 c0,33.4-0.3,74.8-0.3,83c0,6.5,4.6,14.3,17.2,12c99.3-33,166.5-127.1,166.5-237.2C508.7,120.5,397,16,259.4,16z"/></svg>
                    <p>Star us on GitHub!</p>`,
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {       
        style: 'dark',
        links: [
          {
            items: [
              {
                className: 'footer-custom-logo',
                html: `<a href="https://4gaboards.com" target="_blank" class="footer-custom-logo">
                        <img src="/img/4gaboards512w-white.webp" alt="4ga Boards" />
                      </a>`,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/RARgames/4gaBoards',
              },
              {
                label: 'Website',
                to: 'https://4gaboards.com',
              },
              {
                label: 'Contact',
                to: 'https://4gaboards.com/contact',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'For Users',
                to: '/docs/user-manual',
              },
              {
                label: 'For Administrators',
                to: '/docs/admin-manual',
              },
              {
                label: 'For Developers',
                to: '/docs/developer-manual',
              },
            ],
          },
        ],
        copyright: `&copy; ${new Date().getFullYear()} <a href="https://4galabs.com" target="_blank">4ga Labs</a> · All rights reserved. All trademarks are property of their respective owners.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['nginx', 'docker', 'bash', 'apacheconf'],
      },
    }),
};

export default config;
