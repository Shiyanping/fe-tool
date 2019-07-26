module.exports = {
  base: '/fe-tool/',
  title: '开发工具集',
  dest: './dist',
  description: '将开发中经常用到的工具，第三方库，插件进行一个总结，以便后续开发使用。',
  head: [['link', { rel: 'icon', href: `/logo.jpg` }]],
  themeConfig: {
    repo: 'Shiyanping/fe-tool',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'vuepress',
    editLinkText: '欢迎大家来补充',
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
        title: '工欲善其事必先利其器',
        collapsable: false,
        children: ['tools/developTools', 'tools/chrome', 'tools/vscode']
      },
      {
        title: '前端库/框架',
        collapsable: false,
        children: ['library/library', 'library/frame']
      },
      {
        title: '学习资源',
        collapsable: false,
        children: ['study/document', 'study/website', 'study/books', 'study/team']
      },
      {
        title: '博客',
        collapsable: false,
        children: ['blog/noMyBlog', 'blog/myBlog']
      }
    ]
  }
};
