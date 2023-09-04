// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blogger Gabut",
  tagline: "Cuman Blog kecil yang membagikan tutorial seputar IT",
  url: "https://web.binarstrike.my.id",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "binarstrike", // Usually your GitHub org/user name.
  projectName: "binarstrike.github.io", // Usually your repo name.
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },
  themes: [require.resolve("@easyops-cn/docusaurus-search-local")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
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
        title: "Blogger Gabut",
        logo: {
          alt: "My Site Logo",
          src: "/img/ryo-padoru.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "Perkenalan",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/binarstrike",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            // label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Let's connect",
            items: [
              {
                label: "Email",
                to: "mailto:binarnugroho775@gmail.com",
              },
              {
                label: "Telegram",
                to: "https://t.me/binarstrike",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord Server",
                href: "https://discord.gg/z7d9HPysCs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/binarstrike",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blogger Gabut, Inc. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer" class="footer__link-item">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
