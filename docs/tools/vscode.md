# VSCode 插件

#### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

代码美化，快捷键（shift+option+F）,可以格式化很多格式的文件，团队的话建议在项目的目录下使用 `.prettierrc` 进行 prettier 的配置，`.prettierrc` 的优先级比编辑器的设置更高，可以让团队保持统一的代码风格，最好再配合 eslint 使用。

#### [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)

npm 插件可以检查 package.json 中所定义的 npm 模块与实际安装的 npm 模块是否一致。

- package.json 中定义了，但是实际未安装
- package.json 中未定义，但是实际安装了
- package.json 中定义的版本与实际安装的版本不一致

![](https://github.com/Microsoft/vscode-npm-scripts/raw/master/images/validation.png)

#### [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

npm Intellisense 插件会为 package.json 建立索引，这样当我 require 某个模块时，它可以自动补全。

![](https://github.com/ChristianKohler/NpmIntellisense/raw/master/images/auto_complete.gif)

#### [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

查看 git log

![](https://raw.githubusercontent.com/DonJayamanne/gitHistoryVSCode/master/images/gitLogv2.gif)

#### [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

显示文件最近的 commit 和作者，显示当前行 commit 信息

![](https://raw.githubusercontent.com/eamodio/vscode-gitlens/master/images/docs/gitlens-preview.gif)

#### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

ESLint 插件，这个不必多讲，配合自己的项目的 eslint 使用

#### [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

目前比较好的 Vue 语法高亮

#### [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

可以为代码中的匹配的括号自动着色，以不同的颜色进行区分，这样我们可以轻易地辨别某个代码块的开始与结束。

![](https://github.com/CoenraadS/BracketPair/raw/master/images/example.png)

#### [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

插件的功能非常简单，它可以自动补全 HTML/XML 的关闭标签

![](https://github.com/formulahendry/vscode-auto-close-tag/raw/master/images/usage.gif)

#### [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

自动去查找、分析、然后提供代码补全。对于 TypeScript 和 TSX，可以适用

![](https://image.fundebug.com/2019-01-10-autoimport.gif)

#### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

修改 HTML 标签时，自动修改匹配的标签

![](https://github.com/formulahendry/vscode-auto-rename-tag/raw/master/images/usage.gif)

#### [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

帮助你检查代码中的拼写错误

![](https://raw.githubusercontent.com/streetsidesoftware/vscode-spell-checker/master/packages/client/images/example.gif)

#### [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

可以在编辑器中选中部分代码段，然后运行（支持大量语言，包括 Node），但是极少数情况运行出来的结果会和浏览器不同，如果你在编辑器中使用这个功能之后，觉得答案和你想的不同，要在浏览器中再测试一下。

#### [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

配合 chrome 进行 debug

![](https://github.com/Microsoft/vscode-chrome-debug/blob/master/images/demo.gif?raw=true)

#### [jQuery Code Snippets](https://marketplace.visualstudio.com/items?itemName=donjayamanne.jquerysnippets)

jquery 快捷提示，安装了之后输入 jq 就会看到很多提醒，对目前还在用 jq 的小伙伴有帮助

![](https://raw.githubusercontent.com/DonJayamanne/jquerysnippets/master/images/snippets.png)

#### [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)

支持 stylus

#### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

icon 样式，很好看

#### [vscode-element-helper](https://marketplace.visualstudio.com/items?itemName=ElemeFE.vscode-element-helper)

可以快速提示 element-ui

![](https://user-images.githubusercontent.com/1659577/27990775-4b7db888-6494-11e7-9b27-3ec7fa5f99b7.gif)

#### [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)

在浏览器运行当前页面，快捷键（option+B）

#### [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)

控制台输出着色

![](https://raw.githubusercontent.com/IBM-Bluemix/vscode-log-output-colorizer/master/github-assets/screenshot-1.jpg)

#### [Panda Theme](https://marketplace.visualstudio.com/items?itemName=tinkertrain.theme-panda)

一个主题，比较护眼，熊猫主题

#### [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

路径自动补充

![](http://i.giphy.com/iaHeUiDeTUZuo.gif)

#### [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer)

可以在编辑器中查看 svg 图片

![](https://github.com/cssho/vscode-svgviewer/raw/master/img/from_context.gif)
