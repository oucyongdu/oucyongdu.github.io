module.exports = {
  title: "Yong Du's Homepage",
  description: "Yong Du's Homepage",
  head: [["link", { rel: "icon", href: `/headlogo.png` }]],
  base: "/homepage/",
  dest: "/dist",

  themeConfig: {
    search: false,
    logo: '/logo.png',
    nav: [
      { text: "Home", link: "/" },     
      { text: "Publications", link: "/publications/" },
      { text: "Group", link: "/group/" },    
      { text: "Teaching", link: "/teaching/" },
      { text: "Contact", link: "/contact/" },
    ],
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};



