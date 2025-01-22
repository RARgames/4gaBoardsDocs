// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation for 4ga Boards',
  tagline: 'Get Advantage. Straightforward boards system for realtime project management.',
  favicon: 'img/4ga.png',

  // Set the production url of your site here
  url: 'https://docs.4gaboards.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    localeConfigs: {
    en: {
      label: 'English',
      path: 'en', // Forces the language code to appear
    },
  }
  },

plugins: [

    // ... Your other themes.
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

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/4gaBoards_social_card.webp',
      navbar: {
        title: 'Documentation',
        logo: {
          alt: '4ga Boards Documentation',
          src: 'img/4gaboards512w-white.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label:  'Getting started',
          },
          {
            to: '/docs/structure',
            position: 'left',
            label:  'For Users',

          },
          {
            href: '/docs/admin-settings',
            position: 'left',
            label:  'For Administrators',


          },
          {
            href: '/docs/developers',
            position: 'left',
            label:  'For Developers',

          },
          {
            to: 'https://github.com/RARgames/4gaboards',
            label: 'GitHub',
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
                html: `<div class="footer-custom-logo">
                <img src="/img/4gaboards512w-white.webp" alt="4ga Boards Website" />
              </div>`,
                height: '80px',
                width: '200px',
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
                to: 'https://4gaboards.com/',
              },
              {
                label: 'Contact',
                to: 'https://4gaboards.com/contact',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'For Users',
                to: '/docs/structure',
              },
              {
                label: 'For Administrators',
                to: '/docs/admin-settings',
              },
              {
                label: 'For Developers',
                to: '/docs/developers',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 4ga Labs. All rights reserved. All trademarks are property of their respective owners.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
