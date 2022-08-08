# 焕然一新的 Vue 3 中文文档要来了


> 原文链接：https://juejin.cn/post/7077701166397653028

2022年03月22日 07:39 



![焕然一新的 Vue 3 中文文档要来了🎉 ](readme.assets/e9a97d06416649d9b0d3de5ff3b0837ctplv-k3u1fbpfcp-zoom-crop-mark3024302430241702.webp)

新文档地址：[vuejs.org](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2F)

中文版翻译：[staging-cn.vuejs.org](https://link.juejin.cn/?target=https%3A%2F%2Fstaging-cn.vuejs.org%2F)

看完本篇你将有`2`点**收获**：

> 1. 了解新文档的新变化
> 2. 收获一份 `Vue 3` 新文档学习笔记（`50`张思维导图，附原图及原 `xmind` 文档）

# 前言

大家好，我是`LBJ`，最近参与了 `Vue 3`新文档的翻译和校验工作 ([vuejs/docs contributor](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fdocs%2Fgraphs%2Fcontributors) 和 [docs-zh-cn contributor](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs-translations%2Fdocs-zh-cn%2Fgraphs%2Fcontributors))

我们知道 `Vue 3` 新文档 ( [`vuejs.org`](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2F) ) 已经发布一个多月了，但那是英文版的，不知道你看了没？

没有看，那就有福了！**中文版翻译**要来了🎁

为什么说它要来了呢？

一是，原 `Vue 3` 中文文档 ( [v3.cn.vuejs.org](https://link.juejin.cn/?target=https%3A%2F%2Fv3.cn.vuejs.org%2F) ) 尤大已经标注：**旧版**

![image.png](readme.assets/22186cd57e6b425d9cb6e05c13cf9e2dtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

二是，新文档`vuejs.org` 对应的中文版翻译已经将 *英文版中稳定的页面* 翻译完毕！而且前天官方已经将 `banner` 中的移除 **编写中**、**仅供预览** 等字样，这意味着新的中文文档已经可以开始供大家阅读了

![image.png](readme.assets/8815ed2390e740cb8c3d8752da1b5c4dtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

因此，**焕然一新的 `Vue 3` 中文文档它来了**，和我一起先睹为快，看看文档都有哪些新变化吧

以下正文内容将分为两部分：

1. 新文档的新变化
2. `Vue 3` 新文档学习笔记

# 一、新文档的新变化

一图简单小结了`10`点主要的变化，如下

![新文档的新变化.png](readme.assets/5f71379620fb4d5583001486cf0c4ecftplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 1. 新增了深色模式

![image.png](readme.assets/ce679a6134e0486daae802d591ccafedtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 2. 响应式设计

![image.png](readme.assets/f3163069ad9043ca81031d96f0c59527tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 3. 在指引、教程和范例中新增API风格切换功能（选择Options或者Composition API）

![image.png](readme.assets/8bbd99d45577428d80339a2d4b066b1atplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 4. 全新的互动教程

![image.png](readme.assets/a4916f5cf2fa451eb41752ceb63b8dfbtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 5. 新增了例子,包括7GUIs的实现

![image.png](readme.assets/fcfe7d0432824f7d8f8554dbafd32f0etplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 6. 更快的查找API

![image.png](readme.assets/4653522b4c51460e8ce73168a88a1992tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 7. 重做了指引

![image.png](readme.assets/196a9fc6b4df4a239bb0f99c04b3adf7tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

#### 重写了 TypeScript 指引

![image.png](readme.assets/207db231c67b449aa88db4ede640aa66tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

#### 重写了深入响应式系统

![image.png](readme.assets/622721727a2f460bb8dd611c14267919tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

#### 重写了渲染机制

![image.png](readme.assets/5386fbd2e6864eb48581bceaa2411e47tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

#### 全新的可组合函数指引

![image.png](readme.assets/88477df47a3342a8a80db5d6ebf7d662tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

#### 新的工具链指引

![image.png](readme.assets/ef73f80171b04144a74c6181c5f83e8ftplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

#### 新的性能指引

![image.png](readme.assets/dcbb34f6784640c096f237fd8d76c63atplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 8. 单页面导航+智能预读取视口中的链接

![image.png](readme.assets/254eb47e7f7649cd8451edc5af28434btplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 9. 使用 VitePress 构建

![image.png](readme.assets/cb6d2b70d83b47b58e2ca697525bc9edtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 10. 自动水合部分静态内容

![image.png](readme.assets/73eca155999c45aaaa6d78c2d7c95c60tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

# 二、新文档学习笔记

## 开始

### 简介

![1.1简介.png](readme.assets/55770bbc83b54d4a81a14a5be715794ftplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 快速开始

![1.2快速开始.png](readme.assets/38ed042f7ec94fc6a22d1c8da152b035tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 基础

### 创建 Vue 应用

![2.1创建 Vue 应用.png](readme.assets/165d1b6f30f346d79f9c8f57fcb6db3btplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 模板语法

![2.2模板语法.png](readme.assets/0eb2cfb6eab14381b975fbdd0f994423tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 响应式基础

![2.3响应式基础.png](readme.assets/38b481a4e39f4344a3014b511423e4d0tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 计算属性

![2.4计算属性.png](readme.assets/e8acf74314d14580964f6a10689b03c4tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 类与样式绑定

![2.5类与样式绑定.png](readme.assets/1b8c90ff4b1a487c8f1ea56096f832edtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 条件渲染

![2.6条件渲染.png](readme.assets/6fff91c14e9e4c2e842b3e6098206ca5tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 列表渲染

![2.7列表渲染.png](readme.assets/ea77c91b482d40da8f1ff13a3a192d04tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 事件处理

![2.8事件处理.png](readme.assets/deb0102443ab40e9ad4de9786f0f1308tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 表单输入绑定

![2.9表单输入绑定.png](readme.assets/8205c61dc80e490b80f8861ff4d3ca6ctplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 生命周期钩子

![2.10生命周期钩子.png](readme.assets/bc17a34fcc9f479895ef593fd2ef4f00tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 侦听器

![2.11侦听器.png](readme.assets/cb7d2d11916c43749364e04264e6c9b8tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 模板 ref

![2.12模板 ref.png](readme.assets/3d79dff8b6cc44d492dc8a99d6843b1ctplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 组件基础

![2.13组件基础.png](readme.assets/e7c7b000970d4b31badd6536a3f594e5tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 深入组件

### 组件注册

![3.1组件注册.png](readme.assets/dc704843e57b46e484943ea266ca4d69tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### Props

![3.2Props.png](readme.assets/91d7ee6b017649f580eb5ee0cedf0fbctplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 组件事件

![3.3组件事件.png](readme.assets/078a5fc679ef459898055a0e3a99119atplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 透传 attribute

![3.4透传 attribute.png](readme.assets/b23a7ecfd1d044f3a7c86d55723a2a90tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 插槽

![3.5插槽.png](readme.assets/bc59c0360e89499b8fb32d64618f22d3tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 依赖注入

![3.6依赖注入.png](readme.assets/f88cd79997604105bb8edcbc3d094cc0tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 异步组件

![3.7异步组件.png](readme.assets/c64a9837f07848aaa2e244914f713563tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 可重用性

### 可组合函数

![4.1可组合函数.png](readme.assets/92d9c987fdff4577ac50d8fc09df5b72tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 自定义指令

![4.2自定义指令.png](readme.assets/eda3751a9fcb48ef8cbf06f7b175ef53tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 插件

![4.3插件.png](readme.assets/420274900423488683c4bc7cab9d7f51tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 内置组件

### Transition

![5.1Transition·过渡.png](readme.assets/50acf192292f48ebbccfbc71f1314f89tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### TransitionGroup

![5.2TransitionGroup·过渡组.png](readme.assets/46e203bd6cfb4d18b6de640e7b9b1745tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### KeepAlive

![5.3KeepAlive.png](readme.assets/781a77a78ed84adc8d1af7db675970c9tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### Teleport

![5.4Teleport·传送门.png](readme.assets/2a38ad082cd9403cb9d56469db3033d9tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### Suspense

![5.5Suspense.png](readme.assets/d4db4b74bb5040859cb108eec340ac90tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 升级规模

### 单文件组件

![6.1单文件组件.png](readme.assets/bba871a4b16142b3937d7086841bdea5tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 工具链

![6.2工具链.png](readme.assets/067b1857dd5742dda8e92e345fdab17ctplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 路由

![6.3路由.png](readme.assets/0bec5741659e433ca695047629773092tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 状态管理

![6.4状态管理.png](readme.assets/086c50b3380d4c85abe2f2e3ccf48fe8tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 测试

![6.5测试.png](readme.assets/a3b9daf80f134560a8e746fa9bddb2cftplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 服务端渲染 (SSR)

![6.6服务端渲染 (SSR).png](readme.assets/31d41f0649534d7688ba5c5b1f4ef22dtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 最佳实践

### 生产环境部署

![7.1生产环境部署.png](readme.assets/e6667affa8c74eaebecf9c1a30d6a0b3tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 性能

![7.2性能.png](readme.assets/232fcbe7d45b4930b6f42625e83e3650tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 无障碍访问

![7.3无障碍访问.png](readme.assets/9531e87f22004c19b0aa12f0d64436d7tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 安全

![7.4安全.png](readme.assets/fd66c99a76304ec29f032553413e9d9atplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 与TS

### 搭配 TypeScript 使用 Vue

![8.1搭配 TypeScript 使用 Vue.png](readme.assets/e9c80b2390154e69bd2eebf47941fd1btplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### TypeScript 与组合式 API

![8.2TypeScript 与组合式 API.png](readme.assets/fe3f507807a641708d139148424da0d8tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### TypeScript 与选项式 API

![8.3TypeScript 与选项式 API.png](readme.assets/96eee769dd5f479c9b999560cf90ec1dtplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 进阶

### 多种方式使用 Vue

![9.1多种方式使用 Vue.png](readme.assets/f8fd87c89b194002917d3168ccfc2450tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 组合式 API FAQ

![9.2组合式 API FAQ.png](readme.assets/26500ad14a9b40468abd6248f0e19ca5tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 深入响应式系统

![9.3深入响应式系统.png](readme.assets/ee7f26b79e594314b0ed7dae6ec99120tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 渲染机制

![9.4渲染机制.png](readme.assets/438d00c6d3704be09dccc28e7659336atplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

### 渲染函数 & JSX

![9.5渲染函数 & JSX.png](readme.assets/d11a905a44ce4472971eb60059925bbctplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

# 附件

- 已将上述思维导图原图及原 `xmind` 文档上传到 `github`，如有需要可自行下载：[传送门](https://github.com/jCodeLife/mind-map/tree/master/Vue3%E6%96%B0%E6%96%87%E6%A1%A3)

# 补充说明

看新的中文文档时，可能你会遇到一些问题，比如有些页面未翻译等等。不要诧异，因为中文版非正式上线，可能存在问题，截止目前仅集中翻译了`src\guide`目录下的文档，正式上线的英文版也还在更新中，所以之后会增加其他稳定页面的翻译和校验，还有很多工作，欢迎一起参与进来🤞

# 结语

以上是本文的所有内容，如有问题欢迎指正 🤞