# 前端工具库

## 目录

- [前端开发工具](#tools)
- [前端库/框架](#library-frame)
  - [库](#library)
  - [框架](#frame)
  - [文档](#books)
  - [语言](#language)
- [学习网站](#study)
- [博客](#blog)
  - [大牛博客](#noMyBlog)
  - [自己搭建博客](#myBlog)
- [chrome 插件](#chrome)
- [mac 工具](#mac)
- [VSCode 插件](#vscode)
- [常用的 css](#js)
- [常用的 js](#css)

## 正文

<h3 id="tools">前端开发工具</h3>

- [bootCDN](http://www.bootcdn.cn/) - 各种开源库的 cdn 地址，加快开源库访问速度

- [Awesomes.cn](https://www.awesomes.cn/) - 前端各种资源库，想用的这里说不定都有

- [熊猫图片压缩](https://tinypng.com/) - 一个压缩图片的网站，很牛，一次可以压缩 70%左右，还不失真，不过不购买的话压缩有限制，一次最多十张，每张有大小限制（忘记多大了，好像是 5M，好像是 10M）

- [淘宝 npm 镜像](https://npm.taobao.org/) - 加快 npm 包下载速度

- [jquery 插件库](http://www.jq22.com/) - 各种 jquery 的插件，有的需要花钱，有的不用，花钱也很便宜哦

- [时间戳格式化](http://tool.chinaz.com/Tools/unixtime.aspx)

- [站长工具](https://tool.lu/) - 里面包含了很多有用的工具，html、css、js 压缩，解压缩。html 转 markdown，IP 地址查询

- [JSON 代码高亮](http://www.kjson.com/jsonformat/)

- [EnjoyCss](http://enjoycss.com/ref/chrome_extension) - 可以自定义一些 css 样式，然后直接获取代码

- [codepen](https://codepen.io/pen/) - 在网页上快速写代码，可以免去打开编辑器去敲代码，可以解决电脑上没有 IDE，但是你想写代码的情况（那还写个毛线，😀）

- [Unicode 编码转换](http://tool.chinaz.com/Tools/Unicode.aspx)

- [RGB 颜色和十六位颜色转化工具](http://www.kqiqi.com/tools/RGB216/)

- [石墨文档](https://shimo.im/) - 可以多人协作的文档及表格

- [缩短链接](http://sina.lt/) - 如果你觉得自己的链接太长，可以使用新浪的缩短链接服务，将 url 进行缩短

- [在线图片格式转换](http://pic.55.la/)

- [iconfont](http://www.iconfont.cn/) - 阿里维护的 iconfont 里面有很多漂亮的 icon

- [自动添加 css 前缀](https://autoprefixer.github.io/) - 如果没有使用 gulp 或者 webpack 等打包工具的话，为了 css 兼容，可以使用这个，css，less，scss 都可以用

- [压缩 js，css，html](https://www.baidufe.com/fehelper/codecompress.html)

- [base64 加密解密](http://tool.chinaz.com/tools/base64.aspx)

- [css3 中的阴影生成工具](http://www.css88.com/tool/css3Preview/Box-Shadow.html) - 可以让 UI 根据这个去写阴影，后续直接 copy 代码出来使用即可

<h3 id="library-frame">前端库/框架</h3>

<h4 id="library">库</h4>

- [webpack](https://doc.webpack-china.org/)

- [animate.css](https://daneden.github.io/animate.css/) - css 动画，简单一点的动画都有

- [velocity.js](http://www.mrfront.com/docs/velocity.js/index.html) - 基于 js 的动画库，可以和 jquery 完美结合

- [amazeui](http://amazeui.org/) - 国人开发的一款 ui 库，不依赖 vue，react，配合 jquery 使用不错，但是感觉有些用着不习惯，可能我技术不行，😀

- [Cleave.js](http://nosir.github.io/cleave.js/) - 用于格式化文本框输入内容的插件

- [clipboard.js](https://github.com/zenorocha/clipboard.js) - 复制内容到剪切板的插件

- [hcharts](http://www.hcharts.cn/) - 兼容 IE6+、完美支持移动端、图表类型丰富、方便快捷的 HTML5 交互性图表库

- [echarts](http://echarts.baidu.com/) - 百度维护的图标库

- [select2](https://select2.org/) - 下拉框第三方库，随着越来越多的 ui 库集成下拉菜单之后，这个基本很少用了

- [datatables](http://datatables.club/blog/) - 表格库

<h4 id="frame">框架</h4>

- [vue](https://cn.vuejs.org/)

  - [element](http://element.eleme.io/#/resource) - 饿了么出品的 web 库
  - [mint](http://mint-ui.github.io/#!/zh-cn) - 饿了么出品的移动端库
  - [cube](https://didi.github.io/cube-ui/#/zh-CN) - 滴滴出品的移动端库，感觉比 mint 完善一点

- [react](https://doc.react-china.org/)

  - [antd](https://ant.design/docs/react/introduce-cn) - 阿里 react 框架，星星很多哦
  - [antd-pro](https://pro.ant.design/index-cn) - antd 阿里官方解决方案，拉了代码就可以用，非常方便
  - [react-admin](https://github.com/yezihaohao/react-admin) - 网友 react+antd 写的系统模板，很多人在没出 antd-pro 时都用这个

- 小程序框架
  - [mpvue](http://mpvue.com/) - 轻松使用 vue 敲代码，编译成小程序
  - [小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=2018723)
  - [wxParse](https://github.com/icindy/wxParse) - 在小程序中解析 html 和 markdown
  - [mpvue-wxParse](https://github.com/F-loat/mpvue-wxParse/) - 在使用 mpvue 搭建小程序中解析 html 和 markdown，star 比较少，大家用的如果好的话可以给作者一个 star，鼓励一下作者

<h4 id="books">文档</h4>

- [印记中文](https://docschina.org/) - 各种中文文档，与官方文档同步

- [Pro Git](http://git.oschina.net/progit/) - git 各种命令介绍，简单实用

- [前端规范](http://front-end-standards.com/) - 由[MIT License](https://en.wikipedia.org/wiki/MIT_License)开源维护的

- [web 前端导航](http://www.alloyteam.com/nav/) - 由腾讯维护的 web 前端资料库，里面包含各种前端的知识

- [前端书籍资料](http://www.36zhen.com/t?id=3448) - 各种前端书籍的电子书免费下载

- [Markdown 教程](https://kennylee26.gitbooks.io/markdown/content/index.html) - Markdown 语法

- [JSDoc](http://www.css88.com/doc/jsdoc/) - JS 注释中文文档，注释写得好有助于其他人阅读使用

-[前端面试图谱](https://yuchengkai.cn/docs/zh/frontend/) - 前端知识，有助于复习面试基础知识

<h4 id="language">语言</h4>

- [node](http://nodejs.cn/)

<h3 id="study">学习网站</h3>

- [百度前端技术学院](http://ife.baidu.com/)

- [慕课网](https://www.imooc.com/)

- [腾讯课堂](https://ke.qq.com/)

- [github](https://github.com/) - 最大的同性交友网站，被微软收购之后用户数有所减少

- [FreeCodeCamp](https://freecodecamp.cn/challenges/build-a-tribute-page) - 适合刚学前端的同学学习

- [codewars](https://www.codewars.com/) - 学习语言的好网站，代码战争，听着名字就很叼

- [优达学城](https://cn.udacity.com/?utm_source=ruanyf&utm_medium=referral&utm_campaign=ruanyf1st)

- [前端开发博客](http://caibaojian.com/) - 汇集了很多前端有用的东西

<h3 id="blog">博客</h3>

<h4 id="noMyBlog">大牛博客</h4>

- [阮一峰](http://www.ruanyifeng.com/blog/) - ES6 教程写的真的很棒

- [技术胖](http://jspang.com/) - 前端各种免费视频教学

- [翁天信官网](https://www.dandyweng.com/) - 一个辍学在家自学的天才少年，各种旅行漂亮的照片，还有他的个人介绍

- [翁天信博客](https://blog.dandyweng.com/) - 他的官网中可以找到他博客的地址，但是有点不显眼，所以就列出来了

- [surmon](https://surmon.me/) - 不知道怎么称呼，但是是一个很牛 B 的人，点开博客就知道了

- [张鑫旭](http://www.zhangxinxu.com/) - 这个应该很多人都知道，就不介绍了

- [廖雪峰](https://www.liaoxuefeng.com/) - 有关于 python，JS，git 的教程

- [酷壳 - CoolShell](https://coolshell.cn/) - 享受编程和技术所带来的快乐，涉及范围：Android , Bash, book, C++, CodeReview, Coding, CSS, Database, Debug, ebook, Game, Go, Google, HTML, IE, Java, Javascript, jQuery, Linus。。。

<h4 id="myBlog">自己搭建博客</h4>

自己可以使用 hexo 和 githubPage 搭建一个简单的博客，具体步骤请移步这里 [使用 hexo 搭建个人博客](https://blog.csdn.net/qq_33699981/article/details/72716951)，下面主要列举一下搭建博客会用到的工具

- [leancloud](https://leancloud.cn/dashboard/applist.html#/apps) - 使用 hexo 搭建的博客，使用 leancloud 可以统计文章的访问量

- [来必力](https://livere.com/login_form) - 为自己的博客添加评论功能

<h3 id="chrome">chrome插件</h3>

- [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb?hl=zh-CN)：屏蔽广告专用，可以设置白名单

- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=zh-CN)：自动识别 JSON 文件进行格式化

- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=zh-CN)：查看当前网页使用了哪些技术，干什么的慢慢体会吧

- [WEB 前端助手](https://chrome.google.com/webstore/detail/web%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8Bfehelper/pkgccpejnmalmdinmhkkfafefagiiiad?hl=zh-CN)：包括 JSON 格式化、二维码生成与解码、信息编解码、代码压缩、美化、页面取色、Markdown 与 HTML 互转、网页转为图片等，功能很强大，很适合前端

- [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=zh-CN)：可以在 github 上可以生成侧边栏更易查看

- [Wide Github](https://chrome.google.com/webstore/detail/wide-github/kaalofacklcidaampbokdplbklpeldpj?hl=zh-CN)：会将 github 内容区域变宽

- [掘金](https://chrome.google.com/webstore/detail/%E6%8E%98%E9%87%91/lecdifefmmfjnjjinhaennhdlmcaeeeb?hl=zh-CN)：新打开的 tab 页会出现掘金的首页，有助于学习哦

- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN)：用于调试 vue

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=zh-CN)：用于调试 react

- [CSSViewer](https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce?hl=en)：打开后可以吸取除 google 以外网页的元素样式

- [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=zh-CN)：打开后在网页上使用 vim，F 打开

- [Axure RP Extension for Chrome](https://chrome.google.com/webstore/detail/axure-rp-extension-for-ch/dogkpdfcklifaemcdfbildhcofnopogp?hl=zh-CN)：前端在 chrome 上看 Axure 导出的文件

- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=zh-CN)：模拟请求，很强大，还可以敲代码

<h3 id="mac">mac工具</h3>

- [iTerm2](https://www.iterm2.com/) - 很强大的命令行
- [Homebrew](https://brew.sh/index_zh-cn.html) - 方便 mac 进行安装软件

<h3 id="vscode">VSCode插件</h3>

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 自动闭合 HTML 标签
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport) - 自动 import 插件
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 修改 HTML 标签时，自动修改匹配的标签
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) - 给括号前后进行着色
- [Can I Use](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-caniuse) - HTML5、CSS3、SVG 的浏览器兼容性检查
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - 检查代码中的拼写错误
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - 运行选中代码段（支持大量语言，包括 Node）
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame) - 在状态栏显示当前行的 Git 信息
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - 查看 git log
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 显示文件最近的 commit 和作者，显示当前行 commit 信息
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - ESLint 插件
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) - 配合 chrome 进行 debug
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css) - html，css 提示
- [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) - HTML 格式提示
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - 支持 ES6 语法代码段
- [JavaScript Snippet Pack](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-javascript-snippet-pack) - 使用简单的两个字母就可以生成 JS 语句，需要记忆
- [jQuery Code Snippets](https://marketplace.visualstudio.com/items?itemName=donjayamanne.jquerysnippets) - jquery 快捷提示，安装了之后输入 jq 就会看到很多提醒
- [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus) - 支持 stylus
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - icon 样式，很好看
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) - 运行 npm 命令
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - 导入模块时，提示已安装模块名称
- [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser) - 在浏览器运行当前页面，快捷键（option+B）
- [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer) - 控制台输出着色
- [Panda Theme](https://marketplace.visualstudio.com/items?itemName=tinkertrain.theme-panda) - 一个主题
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - 路径自动补充
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码美化，快捷键（shift+option+F）
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - 目前比较好的 Vue 语法高亮

<h3 id="js">常用的js</h3>

- [utils.js](https://github.com/Shiyanping/fe-tool/blob/master/js/utils.js)（常用 js 方法总结）

<h3 id="css">常用的css</h3>

- [常用简单 css 总结](https://github.com/Shiyanping/fe-tool/tree/master/css)
- [0.5 像素边框 css](https://github.com/Shiyanping/fe-tool/tree/master/css/border.css)
- [reset.css](https://github.com/Shiyanping/fe-tool/blob/master/css/reset.css)

**持续更新中**
