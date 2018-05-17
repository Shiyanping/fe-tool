- 单行省略号

```css
width: 固定值;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

- 多行省略号

```css
width: 固定值;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
```

- 用户设置字号放大或者缩小导致页面布局错误

```css
body  {  
    -webkit-text-size-adjust: 100% !important;  
    text-size-adjust: 100% !important;  
    -moz-text-size-adjust: 100% !important;  
}
```

- 开启硬件加速

```css
-webkit-transform: translate3d(0, 0, 0);
-moz-transform: translate3d(0, 0, 0);
-ms-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
```

- 设置input里面placeholder字体的大小

```css
::-webkit-input-placeholder{ font-size:10pt;}
```

- 移动端如何清除输入框内阴影

在iOS上，输入框默认有内部阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样关闭

```css
-webkit-appearance: none;
```

- 屏蔽用户选择

禁止用户选择页面中的文字或者图片

```css
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
```

- 去掉点击时的阴影

```css
-webkit-tap-highlight-color : transparent ;  
```