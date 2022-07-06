// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const package = require("../package.json")

let PIANORHYTHM_ENV = (process.env.PIANORHYTHM_ENV || process.env.NODE_ENV || "").toLowerCase();
if (PIANORHYTHM_ENV && PIANORHYTHM_ENV == "dev" || PIANORHYTHM_ENV == "localhost") PIANORHYTHM_ENV = "development";
const isStaging = isTrue(package.isStaging) || (PIANORHYTHM_ENV) == "staging" || (PIANORHYTHM_ENV) == "stg" || (PIANORHYTHM_ENV) == "stage";
const isProduction = isTrue(package.isProduction) || (PIANORHYTHM_ENV) == "production" || (PIANORHYTHM_ENV) == "prd" || (PIANORHYTHM_ENV) == "prod";

if (isProduction) PIANORHYTHM_ENV = "production"
if (isStaging) PIANORHYTHM_ENV = "staging"

const isDevelopment = !isProduction && !isStaging;

function isTrue (str) {
  return String(str).toLowerCase() == "true"
}

let host = isDevelopment ? "http://localhost:3000" : package.homepage;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PianoRhythm',
  tagline: 'General documentation',
  url: host,
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pianorhythm', // Usually your GitHub org/user name.
  projectName: 'pianorhythm', // Usually your repo name.

  plugins: [
    // '@docusaurus/theme-live-codeblock',
    require.resolve('docusaurus-lunr-search'),
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-129794314-1',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          // trailingSlash: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: 'PianoRhythm - Docs',
        hideOnScroll: true,
        logo: {
          alt: 'PianoRhythm Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Get Started',
            position: 'left',
            to: 'guides',
            items: [
              {
                label: "SheetMusic",
                to: 'guides/sheet-music',
              }
            ]
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {href: host, label: 'Enter PianoRhythm', position: 'right'},
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: 'guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Pm2xXxb',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'PianoRhythm',
                href: host,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <b>PianoRhythm, LLC.</b>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      hideableSidebar: true,
      metadata: [{name: 'keywords', content: 'HTML5, WEBGL, Piano, Fable, Documentation, PianoRhythm, PR, Multiplayer, Game, Music, Synthesizer, Instruments'}],
    }),

  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/docs/js/code-block-buttons.js',
  ],
  stylesheets: ['/docs/css/code-block-buttons.css']
};

module.exports = config;
