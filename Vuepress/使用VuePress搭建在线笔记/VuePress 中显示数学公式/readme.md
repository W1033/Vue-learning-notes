# VuePress 中显示数学公式

## 使用哪个插件见下面这篇文章

> https://blog.csdn.net/u011367208/article/details/120168954





## markdown-it-mathjax3 安装和使用

> Github 仓库地址：https://github.com/tani/markdown-it-mathjax3

### 1. 安装组件

```js
npm install markdown-it markdown-it-mathjax3
```

### 2. 添加配置

修改 .vuepress/config.js 下的配置，如下 
```js
module.exports = {
    extendMarkdown(md) {
        // - 注：markdown-it-mathjax 3 
        // md.use(require('markdown-it'));
        md.use(require('markdown-it-mathjax3'));
    }
}
```

到此，mathjax3 就可以正常在 vuepress 静态文档中使用了。

像 markdown-it-KaTeX 还需要其他的配置，详见这篇文章：https://blog.csdn.net/baidu_23377847/article/details/124683150





