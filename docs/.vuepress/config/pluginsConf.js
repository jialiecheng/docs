const moment = require('moment');
const secret =require("./secret");

moment.locale("zh-cn");

module.exports ={
    
    '@vuepress/last-updated': {
        transformer: (timestamp, lang) => moment(timestamp).format("LLLL")
      },
      '@vuepress/pwa': {
        serviceWorker: false,
        updatePopup: {
          message: "发现新的内容，奥利给",
          buttonText: "刷新"
        }
      },
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'jialiecheng',
        repo: 'docs',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
        autoCreateIssue: true
      },
      '@vuepress/back-to-top': true,
      '@vuepress/google-analytics': {
        'ga': secret.ga 
      },
      '@vuepress/medium-zoom': {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        // options: {
        //   margin: 16
        }
      
}