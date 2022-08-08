# config.js 讲解文档

```js
module.exports = {

    // - 默认值 undefined: 
    // - 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
    tilte: 'Hello VuePress',
    
    // - 默认值: undefined
    // - 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    description: 'Just playing around',

    // - 默认值为 '/'
    // - 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。
    //   如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，
    //   那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
    // - base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。
    base: '/',

    // - 默认值: []
    // - 额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以
    //   [tagName, { attrName: attrValue }, innerHTML?] 的格式指定，举个例子，增加一个自定义的 favicon：
    head: [
        ['link', {rel: 'icon', href:'/logo.png'}]
    ],

    // - 默认值: '0.0.0.0'
    // - 指定用于 dev server(开发环境) 的主机名。
    // host: '0.0.0.0'

    // - 默认值: 8080
    // - 类型：number
    // - 指定 dev server 的端口
    port: 8080,

    // - Type：string
    // - Default: `/path/to/@vuepress/core/.temp`
    // - 指定客服端文件的临时目录
    temp: '/path/to/@vuepress/core/.temp',


    // - 类型: `string`
    // - 默认值: `.vuepress/dist`
    // - 指定 `vuepress build` 的输出目录。如果传入的是相对路径，则会基于 `process.cwd()` 进行解析。
    dest: '.vuepress/dist',


    // - locale `/ləʊ'kɑːl/` --n.(书活电影中某事发生的)地点，现场，场所 (复：locales)
    // - 类型: `{ [path: string]: Object }`
    // - 默认值: `undefined`
    // - 提供多语言支持的语言配置。具体细节请查看 [多语言支持](../guide/i18n.md)。
    locales:'undefined',


    // - 类型: `Function`
    // - 默认值: `() => true`
    // - 一个函数，用来控制对于哪些文件，是需要生成 `<link rel="prefetch">` 资源提示的。
    //   请参考 [shouldPrefetch](https://ssr.vuejs.org/zh/api/#shouldprefetch)。
    shouldPrefetch:'() => true',
   

    // - 类型: `boolean|string`
    // - 默认值: `true`
    // - VuePress 默认使用了 [cache-loader](https://github.com/webpack-contrib/cache-loader)
    //   来大大地加快 webpack 的编译速度。 此选项可以用于指定 cache 的路径，同时也可以通过设置为 `false`
    //   来在每次构建之前删除 cache。
    // - 这个选项也可以通过命令行来使用：
    // ```bash
    // vuepress dev docs --cache .cache # 设置 cache 路径
    // vuepress dev docs --no-cache     # 在每次构建前删除 cache
    // ```
    cache:'true',


    // - 类型: `Array`
    // - 默认值: `[]`
    // - 指定额外的需要被监听的文件。你可以监听任何想监听的文件，文件变动将会触发 `vuepress` 重新构建，并实时更新。
    // ``` js
    //   extraWatchFiles: [
    //     '.vuepress/foo.js', // 使用相对路径
    //     '/path/to/bar.js'   // 使用绝对路径
    //   ]
    // ```
    extraWatchFiles:[],

    
    // - Type: `Array`
    // - Default: `['**/*.md', '**/*.vue']`
    // - Specify which pattern of files you want to be resolved. (指定要解析的文件模式。)
    patterns:['**/*.md', '**/*.vue'],



	// - 默认主题设置
    themeConfig: {
        
        // - 导航栏 Logo
        // logo: '/assets/img/logo.png',

        // - 导航栏连接
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},

            // - 下拉列表
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         {text: 'Chinese', link: '/language/chinese/'},
            //         {text: 'Japanese', link: '/language/japanese/'}
            //     ]
            // }

            // - 下拉列表中设置分组
            // {
            //     text: 'Languages',
            //     items: [
            //         {text: 'Group1', items:[/* */]},
            //         {text: 'Group2', items:[/* */]},
            //     ]
            // },
        ],
        // - 禁用导航栏
        // navbar: false

        // - 侧边栏
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ],

        // - 显示所有页面的标题链接
        displayAllHeaders: true,    // 默认值: false
        
        // - 活动的标题连接
        activeHeaderLinks: false,   // 默认值: true
    }

}
```

