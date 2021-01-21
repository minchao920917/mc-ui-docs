module.exports = {
  theme: 'vuepress-theme-yilia-plus',
  title: 'mc-ui',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
  ],
  output: {
    globalObject: 'this'
  },
  description: 'mc-ui 网站快速成型工具',
  themeConfig: {
    sidebarDepth: 2,
    collapsable: true,
    yilia_plus: {
      github: false,
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2020,
        // 网站作者(关闭请设置为 false)
        author: 'Powered by <a href="http://minchao.me" target="_blank">minchao</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为 false)
          enable: true
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },                      // 根路径
      { text: '使用文档', link: '/doc/' },
      // { text: '配置项', link: '/settings/' },
      { text: '更新日志', link: '/release/' },
      { text: '关于作者', link: 'http://minchao.me' },
      { text: '联系 or 支持', link: '/contact/' },
      // 下拉列表显示分组
    ],
    logo: '/logo.png',
  },
  markdown: {
    plugins: ['task-lists']
  }
}
