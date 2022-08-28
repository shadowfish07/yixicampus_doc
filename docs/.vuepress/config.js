module.exports = {
  title: "亦习校园 用户使用指引",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `./logo.ico` },
    ],
  ],
  themeConfig: {
    sidebar: "auto",
    sidebarDepth: 2,
    nav: [
      { text: "微信小程序文档", link: "/wechat" },
      { text: "亦习校园", link: "https://yixicampus.top/" },
      { text: "官方论坛", link: "https://support.qq.com/products/298998/" },
      // { text: "开放平台", link: "/open" },
      { text: "用户协议", link: "/UserAgreement" },
      { text: "开发者博客", link: "https://blog.shadowfish0.top/" },
    ],
  },
  plugins: [
    ["image"],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-160302727-6",
      },
    ],
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: "img",
        delay: 1000,
        options: {
          margin: 24,
          background: "#9E9E9E",
          scrollOffset: 0,
        },
      },
    ],
  ],
};
