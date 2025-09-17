import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'مرکز آموزش CRM دیکاتو',
  tagline: 'وقتی فروش باید دقیق، سریع و هوشمند باشه.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.dicato.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dicato', // Usually your GitHub org/user name.
  projectName: 'dicato-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  presets: [
    [
      'classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
        pages: false,
      } satisfies Preset.Options,

    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/dicato.png',
    navbar: {
      title: 'CRM دیکاتو',
      logo: {
        alt: 'CRM دیکاتو Logo',
        src: 'img/dicato.png',
      },
      items: [


        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          href: 'https://dicato.net',
          label: 'ورود به دیکاتو',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
