module.exports = {
  base: '/fe-tool/',
  title: '开发工具集',
  description: '将开发中经常用到的工具，第三方库，插件进行一个总结，以便后续开发使用。',
  head: [['link', { rel: 'icon', href: `/logo.jpg` }]],
  themeConfig: {
    repo: 'Shiyanping/fe-tool',
    editLinks: true,
    docsDir: '',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '博客',
        link: 'https://shiyanping.github.io/'
      },
      {
        text: '简历',
        link: 'https://shiyanping.github.io/resume/'
      }
    ],
    sidebar: [
      {
        title: '前端开发工具',
        collapsable: false,
        children: ['tools/']
      },
      {
        title: '前端库/框架/文档',
        collapsable: false,
        children: ['library/library', 'library/frame', 'library/books', 'library/language']
      },
      {
        title: '学习网站',
        collapsable: false,
        children: ['study/']
      },
      {
        title: '博客',
        collapsable: false,
        children: ['blog/noMyBlog', 'blog/myBlog']
      },
      {
        title: 'chrome 插件',
        collapsable: false,
        children: ['chrome/']
      },
      {
        title: 'mac 工具',
        collapsable: false,
        children: ['mac/']
      },
      {
        title: 'VSCode 插件',
        collapsable: false,
        children: ['vscode/']
      },
      {
        title: 'CSS总结',
        collapsable: false,
        children: ['css/border','css/reset', 'css/oftenUse']
      },
      {
        title: 'JS总结',
        collapsable: false,
        children: ['js/']
      }
      // {
      //   title: 'JS总结',
      //   collapsable: false,
      //   children: [['vuex/', 'Introduction'], 'vuex/init', 'vuex/api', 'vuex/plugin']
      // }
    ]
  }
};
