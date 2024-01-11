import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZHZX Dev",
  description: "Let's build from here",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Members", link: "/members/" },
    ],

    // sidebar: [
    //   {
    //     text: 'Projects',
    //     items: [
    //     ]
    //   }
    // ],

    socialLinks: [{ icon: "github", link: "https://github.com/zz-developer/" }],
  },
});
