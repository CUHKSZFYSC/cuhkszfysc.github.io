import type { DefaultTheme, UserConfig } from "vitepress";

import vite from "../../vite.config";
import sidebar from "../sidebar";

/** @see https://vitepress.dev/reference/site-config */
export default {
  srcDir: "../content",
  outDir: "../dist",
  cacheDir: "../cache",
  base: "/",
  cleanUrls: true,
  title: "CUHKSZ 飞跃手册",
  description: "CUHKSZ 飞跃手册",

  /** @see https://vitepress.dev/reference/default-theme-config */
  themeConfig: {
    outline: { level: "deep", label: "目录" },
    nav: [
      { text: "主页", link: "/" },
      { text: "最近更新", link: "updates", activeMatch: "updates" },
      {
        text: "分享经验",
        link: "docs/contribute",
        activeMatch: "docs/contribute",
      },
      { text: "参考文档", link: "docs/contribute", activeMatch: "docs" },
    ],
    sidebar: {
      "/docs": sidebar.docs,
      "/": sidebar.posts, // least precedence
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CUHKSZFYSC/cuhkszfysc.github.io",
      },
    ],
  } as DefaultTheme.Config,
  vite,
} as UserConfig;
