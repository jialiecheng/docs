const moment = require('moment');
moment.locale("zh-cn");
module.exports = {
  base: "/docs/",
  title: "jialiecheng",
  description: "jialiecheng的笔记",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: 'jialiecheng' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明，jialiecheng' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          return moment(timestamp).format("LLLL")
        }
      }
    ],
    [
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新的内容，奥利给",
        buttonText: "刷新"
      }
    }
    ],
  themeConfig, {
    lastUpdated: '更新时间',
    logo: '/assets/img/jlclogo1.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/css' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/css' }
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/css' }
            ]
          }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      "/css/": [
        'c-aaa',
        'c-bbb',
        'c-ccc',
      ],
      "/javascript/": [
        'j-aaa',
        'j-bbb',
        'j-ccc',
      ]
    }
  }
}