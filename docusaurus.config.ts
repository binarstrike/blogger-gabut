import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { PluginOptions as SearchLocalPluginOptions } from "@easyops-cn/docusaurus-search-local";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Blogger Gabut",
  tagline: "Cuman Situs Web kecil yang membagikan tutorial seputar IT",
  url: "https://blogger-gabut.site",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "binarstrike",
  projectName: "blogger-gabut",
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/tutorial",
        docsDir: "./tutorial",
      } satisfies SearchLocalPluginOptions,
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/tutorial",
          showLastUpdateTime: true,
          path: "./tutorial",
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Blogger Gabut",
      logo: {
        alt: "My Site Logo",
        // TODO: change default docusaurus icon.
        src: "img/docusaurus.png",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/tutorial", label: "Tutorial", position: "left" },
        {
          href: "https://github.com/binarstrike/blogger-gabut",
          className: "header-github-link",
          "aria-label": "GitHub repository",
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
              to: "https://t.me/yuki2048",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord Server",
              href: "https://discord.gg/8JZ4JBYqeJ",
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
      copyright: `Copyright © ${new Date().getFullYear()} Blogger Gabut. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer" class="footer__link-item">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "yaml"],
      magicComments: [
        {
          className: "code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "Ini error",
          block: { start: "ini-error-mulai", end: "ini-error-selesai" },
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    announcementBar: {
      id: "announcement_bar",
      content: "Masih dalam pengembangan",
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
