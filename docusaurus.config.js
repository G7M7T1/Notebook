// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Notebook",
  tagline: "G7M7T1 / Xpakeb13 / AsheOne",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.jpg",
  organizationName: "Twly",
  projectName: "Notebook",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/G7M7T1/Notebook",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/G7M7T1/Notebook",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Notebook",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Note",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/G7M7T1",
            label: "G7M7T1",
            position: "right",
          },
          {
            href: "https://github.com/Xpakeb13",
            label: "Xpakeb13",
            position: "right",
          },
          {
            href: "https://github.com/AsheOne18",
            label: "AsheOne18",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Note Book",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                href: "https://github.com/G7M7T1",
                label: "G7M7T1",
              },
              {
                href: "https://github.com/Xpakeb13",
                label: "Xpakeb13",
              },
              {
                href: "https://github.com/AsheOne18",
                label: "AsheOne18",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} G7M7T1 and Xpakeb13 Website`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
