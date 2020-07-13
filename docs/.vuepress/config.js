const headConf = require("./config/headConf.js");
const pluginsConf = require("./config/pluginsConf.js");
const navConf = require("./config/navConf.js");
const sidebarConf = require("./config/sidebarConf.js");

module.exports = {
  base: '/jialcblog/',
  // base: "/docs/",
  title: "jialiecheng",
  description: "JiaLC'S BLOG",
  head: headConf,
  plugins: pluginsConf,

  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/jlclogo1.png',
    nav: navConf,
    // sidebar: sidebarConf  
    sidebar: 'auto'
  }
}