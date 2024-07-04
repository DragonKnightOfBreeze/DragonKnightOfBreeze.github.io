import { defineUserConfig } from 'vuepress'
import theme from "./theme.js";
import { head } from "./configs/index.js";
import viteBundler from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: '风之遗迹的大图书馆',
    },
    '/en/': {
      lang: 'en-US',
      title: 'The Great Library In The Wind Ruin',
    },
  },
  bundler: viteBundler(),
  theme: theme,
})
