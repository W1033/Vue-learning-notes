# chapter04 -- Vue 选项(`options`) 的规范化

## 目录(Catalog)
- 4.1 弄清传给`mergeOptions()`(此方法在:`src/core/util/options.js`内)
  函数的 3 个参数.
- 4.2 检查组件名称是否符合要求
- 4.3 允许合并另一个实例构造函数的选项(`options`)
- 4.4 规范化 `props` (`normalizeProps()` 标准化props)
- 4.5 规范化 `inject`(`normalizeInject()` 标准化注入)
- 4.6 规范化 `directives` (`normalizeDirectives()` 标准化指令)



## 生词 (New Words
- **directive [dɪ'rektɪv] --n.指示, 指令  --adj.指导的, 管理的**
    + It's a directive straight from the President. 这是总统直接下达的指令. 


## 内容 (Content)
- Notice: 本节讨论依旧沿用上一章(chapter03) 的例子
- Tip: 本章几乎全部在讲 `src/core/util/options.js` 文件内的代码; `options.js`
  的完整代码讲解见: `../2.6-vue-source-document/src/core/util/options.js`
### 4.1 弄清传给 `mergeOptions()` 函数的 3 个参数.
- Tip: mergeOptions() 方法在 `src/core/util/options.js`内.
- 这一小节我们继续前面的讨论, 看一看 `mergeOptions` 都做了些什么. 根据
  `src/core/instance/init.js` 顶部的引用关系可知, `mergeOptions`
  函数来自于 `src/core/util/options.js` 文件, 事实上不仅仅是
  `mergeOptions` 函数, 整个文件所做的一切都为了一件事: **选项的合并**. 
  
  不过在我们深入 `options.js` 文件之前, 我们有必要搞清楚一件事, 就是如下代码中: 
  ```js
    // - src/core/instance/init.js
    vm.$options = mergeOptions( 
        resolveConstructorOpitons(vm.constructor),
        options || {},
        vm
    )
  ```
  传递给 `mergeOptions` 函数的三个参数到底是什么. 

  其中第一个参数是通过调用一个函数得到的, 这个函数叫做 `resolveConstructorOptions`, 
  并将 `vm.constructor` 作为参数传递进去. 第二个参数 `options` 就是我们调用 `Vue`
  构造函数时透传进来的对象, 第三个参数是当前 `Vue 实例`, 现在我们逐一去看. 

  `resolveConstructorOptions` 是一个函数, 这个函数就声明在
  `src/core/instance/init.js` 文件中, 如下: 
  ```js
    // - `2.6-vue-source-document/src/core/instance/init.js`

    // - resolve constructor options (解析构造函数的 options)
    export function resolveConstructorOptions(Ctor: Class<Component>) { // {1-59}
        let options = Ctor.options;                                     // {1-60}
        if (Ctor.super) {                                               // {1-61}
            const superOptions = resolveConstructorOptions(Ctor.super); // {1-62}
            const cachedSuperOptions =  Ctor.superOptions;              // {1-63}
            if (superOptions !== cachedSuperOptions) {                  // {1-64}
                // - super option changed, need to resolve new options. 
                //   (父选项已变更, 需要解析新 options)
                Ctor.superOptions = superOptions;                       // {1-65}
                // - check if there are any late-modified/attached options (#4976)
                const modifiedOptions = resolveModifiedOptions(Ctor);   // {1-66}
                // - update base extend options
                if (modifiedOptions) {                                  // {1-67}
                    extend(Ctor.extendOptions, modifiedOptions);        // {1-68}
                }
                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions); // {1-69}
                if (options.name) {                                     // {1-70}
                    options.component[options.name] = Ctor;             // {1-71}
                }
            }
        }
        return options;                                                 // {1-72}
    };
  ```
  在具体去看代码之前, 大家能否通过这个函数的名字猜一猜这个函数的作用呢？其名字是
  `resolve Constructor Options` 那么这个函数是不是用来 `解析构造器的 options` 的呢？
  答案是: 对, 就是干这个的. 接下来我们就具体看一下它是怎么做的, 首先第一句: 
  ```js
    let options = Ctor.options;                                     // {1-60}
  ```
  其中 `Ctor` 即传递进来的参数 `vm.constructor`, 在我们的例子中他就是 `Vue` 构造函数, 
  可能有的同学会问: 难道它还有不是 `Vue` 构造函数的时候吗？当然, 当你使用 `Vue.extend`
  创造一个子类并使用子类创造实例时, 那么 `vm.constructor` 就不是 `Vue` 构造函数, 
  而是子类, 比如: 
  ```js
    const Sub = Vue.extend();
    const s = new Sub();
  ```
  那么 `s.constructor` 自然就是 `Sub` 而非 `Vue`, 大家知道这一点即可, 但在我们的例子中, 
  这里的 `Ctor` 就是 `Vue` 构造函数, 而有关于 `Vue.extend` 的东西, 我们后面会专门讨论的. 

  所以, `Ctor.options` 就是 `Vue.options`, 然后我们再看
  `resolveConstructorOptions` 的返回值是什么？如下: 
  ```js
    return options;                                                 // {1-72}
  ```
  也就是把 `Vue.options` 返回回去了, 所以这个函数的确就像他的名字那样, 
  是用来获取构造者的 `options` 的. 不过同学们可能注意到了, 
  `resolveConstructorOptions` 函数的第一句和最后一句代码中间还有一坨包裹在 `if`
  语句块中的代码, 那么这坨代码是干什么的呢？

  我可以很明确地告诉大家, 这里水稍微有那么点深, 比如 `if` 语句的判断条件
  `Ctor.super`, `super` 这是子类才有的属性, 如下: 
  ```js
    const sub = Vue.extend();
    console.log(Sub.super); //vue
  ```
  也就是说, `super` 这个属性是与 `Vue.extend` 有关系的, 事实也的确如此. 
  除此之外判断分支内的第一句代码: 
  ```js
    const superOptions = resolveConstructorOptions(Ctor.super); // {1-62}    
  ```
  我们发现, 又递归地调用了 `resolveConstructorOptions` 函数, 
  只不过此时的参数是构造者的父类, 之后的代码中, 还有一些关于父类的 `options`
  属性是否被改变过的判断和操作, 并且大家注意这句代码: 
  ```js
    // - check if there are any late-modified/attached options (#4976)
    const modifiedOptions = resolveModifiedOptions(Ctor);   // {1-66}
  ```
  我们要注意的是注释, 有兴趣的同学可以根据注释中括号内的 `issue` 索引去搜一下相关的问题, 
  这句代码是用来解决使用 `vue-hot-reload-api` 或者 `vue-loader` 时产生的一个 bug 的. 

  现在大家知道这里的水有多深了吗？关于这些问题, 我们在讲 `Vue.extend`
  时都会给大家一一解答, 不过有一个因素从来没有变, 那就是 `resolveConstructorOptions`
  这个函数的作用永远都是用来获取当前实例构造者的 `options` 属性的, 即使 `if`
  判断分支内也不例外, 因为 `if` 分支只不过是处理了 `options`, 
  最终返回的永远都是 `options`. 

  所以根据我们的例子, `resolveConstructorOptions` 函数目前并不会走 `if` 判断分支, 
  即此时这个函数相当于: 
  ```js
    export function resolveConstructorOptions(Ctor: Class<Component>) {
        let options = Ctor.options;
        return options;
    }
  ```
  所以, 根据我们的例子, 此时的 `mergeOptions` 函数的第一个参数就是 `Vue.options`,
  那么大家还记得 `Vue.options` 长成什么样子吗? 
- (1) 打开 `chapter02.md` 找到 `行{4-24}` 
  (Tip: 请用 Typora 打开 `chapter02.md` 文件做参考)
  ```js
    // - `src/core/global-api/index.js` 

    Vue.options = Object.create(null);                  // {4-24}
    // - `ASSET_TYPES` 来自 `src/shared/constants.js`, 源码为:
    //   export const ASSET_TYPES = [
    //       'component',
    //       'directive',
    //       'filter'
    //   ]
    ASSET_TYPES.forEach(type => {                       // {4-25}
        Vue.options[type + 's'] = Object.create(null);  // {4-26}
    });
    // - this is used to identify the "base" constructor to extend all
    //   plain-object components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;                            // {4-27}

    extend(Vue.options.components, builtInComponents);  // {4-28}

    initUse(Vue);                                       // {4-29}
    initMixin(Vue);                                     // {4-30}
    initExtend(Vue);                                    // {4-31}
    initAssetRegisters(Vue);                            // {4-32}
  ```
  经过 `行{4-25}` 和 `行{4-26}` 后 `Vue.options` 将变成这样:
  ```js
    Vue.options = {
        components: Object.create(null),
        directives: Object.create(null),
        filters: Object.create(null),
        _base: Vue
    }
  ```
- (2) 我们接着看 `chapter02.md` 中操作 `Vue.options` 的代码, 找到代码
  ```js
    // - ../src/core/components/index.js (全部代码)

    import KeepAlive from './keep-alive';
    export default {
        KeepAlive
    }
  ```
  经过上面的代码后 `Vue.options.components` 的值变为:
  ```js
    Vue.options.components = {
        KeepAlive
    }
  ```
  此时 `Vue.options` 变成:
  ```js
    Vue.options = {     // {flag: 00-1}
        components: {
            KeepAlive
        },
        directives: Object.create(null),
        filters: Object.create(null),
        _base: Vue
    }
  ```
- (3) 还是看 `chapter02.md` 文件, 找到 `行{10-15}`,`行{10-16}` 代码
  ```js
    // - `src/platform/web/runtime/index.js`

    // - install platform runtime directives & components.
    // - 安装平台运行时指令和组件
    extend(Vue.options.directives, platformDirectives);         // {10-15}
    extend(Vue.options.components, platformComponents);         // {10-16}
  ```
  经过 `行{10-15}` 和 `行{10-16}` 两行代码之后的 `Vue.options` 最终变成
  (Tip: 更详细过程见 `chapter02.md` 讲解):
  ```js
    Vue.options = {  
        components: {
            KeepAlive,
            Transition,
            TransitionGroup
        },
        directives: {
            model,
            show
        },
        filters: Object.create(null),
        _base: Vue
    }
  ```
- 经过上面的 `(1)`, `(2)`, `(3)` 步的解说我们知道 `Vue.options` 目前的面貌了,
  现在我们接着看:
  ```js
    // - src/core/instance/init.js
    vm.$options = mergeOptions( 
        resolveConstructorOpitons(vm.constructor),
        options || {},
        vm
    )
  ```
  `mergeOptions()` 方法的第二个参数 `options`, 这个参数实际上就是我们调用 `Vue`
  构造函数时传进来的选项(options), 所以根据我们目前例子 `options` 的值如下:
  ```json
    {
        el: '#app',
        data: {
            test: 1
        }
    }
  ```
  而 `mergeOptions` 的第 3 个参数 `vm` 就是 `Vue` 实例对象本身, 综上所述,
  最终代码如下:
  ```js
    vm.$options = {
        // - resolveConstructorOptions(vm.constructor)
        {
            components: {
                keepAlive,
                Transition,
                TransitionGroup
            },
            directives: {
                model,
                show
            },
            filters: Object.create(null),
            _base: Vue
        },
        // - options || {}
        {
            el: '#app',
            data: {
                test: 1
            }
        },
        vm
    }
  ```
  现在我们已经搞清楚传递给 `mergeOptions` 函数的三个参数分别是什么了, 
  那么接下来我们就打开 `../2.6-vue-source-document/src/core/util/options.js`
  文件并找到 `mergeOptions` 方法, 看一看都发生了什么. 

### 4.2 检查组件名称是否符合要求 (`validateComponentName`)
- 我们接着看 `../2.6-vue-source-document/src/core/util/options.js` 文件, 找到
  `mergeOptions` 方法, 这个方法上面有一段注释: 
  ```js
    /**
     * Merge two option objects into a new one.
     * (合并两个 option 对象到一个新对象中.)
     * Core utility used in both instantiation and inheritance.
     * (用于实例化和继承的核心工具)
     */
  ```
  合并两个选项对象为一个新的对象, 这个函数在实例化和继承的时候都有用到, 这里要注意两点,
  第一: 这个函数将会产生一个新的对象; 第二: 这个函数不仅仅在实例化对象 (即 `_init` 方法中)
  的时候用到, 在 继承(`Vue.extend`) 中也有用到,
  所以这个函数应该是一个用来合并两个选项对象为一个新对象的通用程序. 

  所以我们现在就看看它是怎么去合并两个选项对象的, 找到 `mergeOptions` 函数, 
  我么先来预览一下这个函数的全貌, 然后再切段分析:
  ```js
    export function mergeOptions(
        parent: Object,
        child: Object,
        vm?: Component
    ): Object {
        if (process.env.NODE_ENV !== 'production') {
            checkComponents(child);
        }
        
        if (typeof child === 'function') {
            child = child.options;
        }
        
        // - 下面 3 个方法, 定义在同文件中. 请对照
        //   `../2.6-vue-source-document/src/core/util/options.js` 查看.
        normalizeProps(child, vm);
        normalizeInject(child, vm);
        normalizeDirectives(child, vm);

        // - Apply extends and mixins on the child options, but only
        //   if it is a raw options object that isn't the result of 
        //   another mergeOptions call. 
        //   (在子选项上应用扩展和混合, 但前提是它是一个原始选项的对象, 而不是另一个
        //   mergeOptions 调用的结果.)
        // - Only merged options has the _base property. 
        //   (仅合并选项具有 _base 属性的.) 
        if (!child_base) {
            if (child.extends) {
                parent = mergeOptions(parent, child.extends, vm);
            }
            if (child.mixins) {
                for (let i = 0, l = child.mixins.length; i < l; i++) {
                    parent = mergeOptions(parent, child.mixins[i], vm);
                }
            }
        }
        const options = {};
        let key;
        for (key in parent) {
            mergeField(key);
        }
        for (key in child) {
            if (!hasOwn(parent, key)) {
                mergeField(key);
            }
        }
        function mergeField(key) {
            const strat = strats[key] || defaultStrat;
            options[key] = strat(parent[key], child[key], vm, key);
        }
        return options;
    };
  ```
  现在我们来仔细分析一下上面的 `mergeOptions`, 开始的一段代码:
  ```js
    if (process.env.NODE_ENV !== 'production') {
        checkComponents(child)
    }
  ```
  在非生产环境下, 会以 `child` 为参数调用 `checkComponents` 方法, 我们看看
  `checkComponents` 是做什么的, 这个方法同样定义在当前 `options.js` 文件中,
  内容如下:
  ```js
    /**
     * Validate component names (验证组件名)
     */
    function checkComponents (options: Object) {
        for (const key in options.components) {
            validateComponentName(key)
        }
    }
  ```
  由注释可知, 这个方法是用来校验组件的名字是否符合要求的, 首先 `checkComponents`
  方法使用一个 `for...in` 循环遍历 `options.components` 选项, 
  将每个子组件的名字作为参数依次传递给 `validateComponentName` 函数, 所以
  `validateComponentName `函数才是真正用来校验名字的函数, 该函数就定义在
  `checkComponents` 函数下方, 源码如下:
  ```js
    // - validate component name (验证组件名)
    export function validateComponentName(name: string) {
        // - `^[a-zA-Z]`: 匹配以字母开头
        // - `[\\-\\.0-9]_${unicodeLetters}*`: 匹配 `-` 或 `.` 或 `0-9` 开头,
        //   接着是 `_` 然后是 `${unicodeLetters}` unicode 字符.
        if (!new RegExp(`^[a-zA-Z][\\-\\.0-9_${unicodeLetters}]*$`).test(name)) {
            warn(
                'Invalid component name: "' + name + '", Component names ' +
                'should conform to valid custom element name in html5 specificaton.'
            )
        }
        if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn(
                'Do not use built-in or reserved HTML elements as component ' + 
                'id: ' + name;
            )
        }
    };
  ```
  `validateComponentName` 函数由 2 个 `if` 语句块组成, 所以可想而知,
  对于组件的名字要满足这两条规则才行, 这两条规则就是这 2 个 `if` 分支的条件语句:
    + (1): 组件的名字要满足正则表达式: `^[a-zA-Z][\\-\\.0-9_${unicodeLetters}]*$`.
    + (2): 要满足: 条件 `isBuiltInTag(name) || congfig.isReservedTag(name)`
      不成立.
  
  对于第一条规则, `Vue` 限定组件的名字由 "普通的字符" 和 "中横线(-)" 组成
  且必须以字母开头. 

  对于第二条规则, 首先将 `options.components` 对象的 `key` 小写化作为组件的名字, 
  然后以组件的名字为参数分别调用两个方法: `isBuiltInTag` 和 `config.isReservedTag`, 
  其中 `isBuiltInTag` 方法的作用是用来检测你所注册的组件是否是内置的标签, 
  这个方法可以在 `../2.6-vue-source-document/src/shared/util.js`
  文件工具方法全解中查看, 于是我们可知: `slot` 和 `component`
  这两个名字被 `Vue` 作为内置标签而存在的, 你是不能够使用的, 比如:
  
  ```js
    new Vue({
        components: {
            'slot': myComponent
        }
    })
  ```
  这样你将得到一个警告, 该警告的内容就是 `validateComponentName` 方法中的 `warn` 文案:
`Do not use built-in or reserved HTML elements as component id: slot`.
  
  除了检测注册的组件名字是否为内置的标签之外, 还会检测是否是保留标签, 即通过
  `config.isReservedTag` 方法进行检测, 大家是否还记得 `config.isReservedTag`
  在哪里被赋值的？前面我们讲到过, 打开
  `../2.6-vue-source-document/src/platforms/web/runtime/index.js`
  文件中有这样一段代码: 
  ```js
    // - install platform specific utils. (安装特定于平台的工具)
    Vue.config.mustUseProp = mustUseProp;                       // {10-10}
    Vue.config.isReservedTag = isReservedTag;                   // {10-11}
    Vue.config.isReservedAttr = isReservedAttr;                 // {10-12}
    Vue.config.getTagNamespace = getTagNamespace;               // {10-13}
    Vue.config.isUnknownElement = isUnknownElement;             // {10-14}
  ```
  其中:
  ```js
    Vue.config.isReservedTag = isReservedTag;
  ```
  就是在给 `config.isReservedTag` 赋值, 其值为来自于
  `/src/platforms/web/util/element.js` 文件的 `isReservedTag` 函数, 
  大家可以在附录 `../附录/src-platforms-web-util-目录下工具方法全解.md`
  中查看该方法的作用及实现, 可知在 `Vue` 中 `html` 标签和部分 `SVG` 标签被认为是保留的.
  所以这段代码是在保证选项被合并前是合法的. 最后大家注意一点, 这些工作是在非生产环境下做的, 
  所以在非生产环境下开发者就能够发现并修正这些问题, 
  所以在生产环境下就不需要再重复做一次校验检测了.
  
  另外要说一点, 我们的例子中并没有使用 `components` 选项, 
  但是这里还是给大家顺便介绍了一下. 如果按照我们的例子的话, 
  mergeOptions 函数中的很多代码都不会执行, 
  但是为了保证让大家理解整个选项合并所做的事情, 这里都会有所介绍.

### 4.3 允许合并另一个实例构造函数的选项(`options`)
- 我们继续看 `mergeOptions` 方法, 接下来的一段代码同样是一个 `if` 语句块:
  ```js
    if (typeof child === 'function') {
        child = child.options
    }
  ```
  这说明 `child` 参数除了是普通的选项对象外，还可以是一个函数，
  如果是函数的话就取该函数的 `options` 静态属性作为新的 `child`，
  我们想一想什么样的函数具有 `options` 静态属性呢？现在我们知道 `Vue`
  构造函数本身就拥有这个属性，其实通过 `Vue.extend`
  创造出来的子类也是拥有这个属性的。所以这就允许我们在进行选项合并的时候，
  去合并一个 `Vue` 实例构造者的选项了. 

### 4.4 规范化 `props` (normalizeProps 标准化props)


### 4.5 规范化 `inject`(normalizeInject 标准化注入)


### 4.6 规范化 `directives` (normalizeDirectives 标准化指令)
