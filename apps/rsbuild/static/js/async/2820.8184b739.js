"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["2820"],{9262:function(s,e,n){n.r(e),n.d(e,{default:function(){return t}});var r=n(55367),a=n(26971),i=n(28855),d=n(38146);function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",div:"div",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong",blockquote:"blockquote"},(0,a.ah)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"sass-插件",children:["Sass 插件",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sass-插件",children:"#"})]}),"\n","\n",(0,r.jsx)(i.ZB,{href:"https://github.com/web-infra-dev/rsbuild/tree/main/packages/plugin-sass"}),"\n",(0,r.jsxs)(e.p,{children:["使用 ",(0,r.jsx)(e.a,{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer",children:"Sass"})," 作为 CSS 预处理器，基于 ",(0,r.jsx)(e.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer",children:"sass-loader"})," 实现。"]}),"\n",(0,r.jsxs)(e.h2,{id:"快速开始",children:["快速开始",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"安装插件",children:["安装插件",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"你可以通过如下的命令安装插件:"}),"\n","\n",(0,r.jsx)(d.PackageManagerTabs,{command:"add @rsbuild/plugin-sass -D"}),"\n",(0,r.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,r.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(e.div,{className:"rspress-directive-content",children:["\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sass 插件仅支持 @rsbuild/core >= 0.7.0 版本。"}),"\n",(0,r.jsx)(e.li,{children:"当 @rsbuild/core 版本小于 0.7.0 时，内置支持 Sass 插件，你不需要安装该插件。"}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(e.h3,{id:"注册插件",children:["注册插件",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["你可以在 ",(0,r.jsx)(e.code,{children:"rsbuild.config.ts"})," 文件中注册插件："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { pluginSass } from '@rsbuild/plugin-sass';\n\nexport default {\n  plugins: [pluginSass()],\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["注册插件后，你可以在代码中引入 ",(0,r.jsx)(e.code,{children:"*.scss"}),"，",(0,r.jsx)(e.code,{children:"*.sass"}),"，",(0,r.jsx)(e.code,{children:"*.module.scss"})," 或 ",(0,r.jsx)(e.code,{children:"*.module.sass"})," 文件，无须添加其他配置。"]}),"\n",(0,r.jsxs)(e.h2,{id:"选项",children:["选项",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"如果你需要自定义 Sass 的编译行为，可以使用以下配置项。"}),"\n",(0,r.jsxs)(e.h3,{id:"sassloaderoptions",children:["sassLoaderOptions",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sassloaderoptions",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["修改 ",(0,r.jsx)(e.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer",children:"sass-loader"})," 的配置。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"默认值："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const defaultOptions = {\n  api: 'modern-compiler',\n  implementation: require.resolve('sass-embedded'),\n  sourceMap: rsbuildConfig.output.sourceMap.css,\n  sassOptions: {\n    quietDeps: true,\n    silenceDeprecations: ['legacy-js-api', 'import'],\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["当 ",(0,r.jsx)(e.code,{children:"sassLoaderOptions"})," 的值是一个对象时，它会与默认配置通过 ",(0,r.jsx)(e.code,{children:"Object.assign"})," 进行浅层合并，值得注意的是，",(0,r.jsx)(e.code,{children:"sassOptions"})," 会通过 deepMerge 进行深层合并。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"pluginSass({\n  sassLoaderOptions: {\n    sourceMap: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.p,{children:["当 ",(0,r.jsx)(e.code,{children:"sassLoaderOptions"})," 的值是一个函数时，默认配置作为第一个参数传入，你可以直接修改配置对象，也可以返回一个值作为最终结果："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"pluginSass({\n  sassLoaderOptions(config) {\n    config.additionalData = async (content, loaderContext) => {\n      // ...\n    };\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"include",children:["include",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#include",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.a,{href:"https://rspack.dev/config/module#condition",target:"_blank",rel:"noopener noreferrer",children:"RuleSetCondition"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"默认值："})," ",(0,r.jsx)(e.code,{children:"/\\.s(?:a|c)ss$/"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"版本："})," ",(0,r.jsx)(e.code,{children:">= 1.1.0"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["用于指定一部分 ",(0,r.jsx)(e.code,{children:".scss"})," 或 ",(0,r.jsx)(e.code,{children:".sass"})," 模块，这些模块会被 ",(0,r.jsx)(e.code,{children:"sass-loader"})," 编译。这个值与 Rspack 中的 ",(0,r.jsx)(e.code,{children:"rule.test"})," 选项相同。"]}),"\n",(0,r.jsx)(e.p,{children:"比如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"pluginSass({\n  include: /\\.custom\\.scss$/,\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"exclude",children:["exclude",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exclude",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.a,{href:"https://rspack.dev/config/module#condition",target:"_blank",rel:"noopener noreferrer",children:"RuleSetCondition"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"默认值："})," ",(0,r.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["用于排除一部分 ",(0,r.jsx)(e.code,{children:".sass"})," 或 ",(0,r.jsx)(e.code,{children:".scss"})," 模块，这些模块不会被 ",(0,r.jsx)(e.code,{children:"sass-loader"})," 编译。"]}),"\n",(0,r.jsx)(e.p,{children:"比如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"pluginSass({\n  exclude: /some-folder[\\\\/]foo\\.scss/,\n});\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"实践",children:["实践",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#实践",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"修改-sass-implementation",children:["修改 Sass implementation",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-sass-implementation",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Sass 提供了多种实现，包括 ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/sass",target:"_blank",rel:"noopener noreferrer",children:"sass"}),"、",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/sass-embedded",target:"_blank",rel:"noopener noreferrer",children:"sass-embedded"})," 和 ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/node-sass",target:"_blank",rel:"noopener noreferrer",children:"node-sass"}),"。"]}),"\n",(0,r.jsxs)(e.p,{children:["Rsbuild 默认使用最新的 ",(0,r.jsx)(e.code,{children:"sass-embedded"})," 实现。",(0,r.jsx)(e.code,{children:"sass-embedded"})," 是一个围绕原生 Dart Sass 可执行文件的 JavaScript wrapper，具备一致的 API 和最佳的性能。"]}),"\n",(0,r.jsxs)(e.p,{children:["如果你需要使用其他 Sass 实现，而不是使用 Rsbuild 内置的 ",(0,r.jsx)(e.code,{children:"sass-embedded"}),"，可以在项目中安装需要使用的 Sass 实现，并通过 ",(0,r.jsx)(e.code,{children:"sass-loader"})," 的 ",(0,r.jsx)(e.a,{href:"https://github.com/webpack-contrib/sass-loader?tab=readme-ov-file#implementation",target:"_blank",rel:"noopener noreferrer",children:"implementation"})," 选项来设置。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"pluginSass({\n  sassLoaderOptions: {\n    implementation: require.resolve('sass'),\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,r.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"rspress-directive-content",children:(0,r.jsxs)(e.p,{children:["将 ",(0,r.jsx)(e.code,{children:"sass-embedded"})," 修改为其他 Sass 实现，可能会构建性能显著下降。\n"]})})]}),"\n",(0,r.jsxs)(e.h3,{id:"选择-sass-api",children:["选择 Sass API",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#选择-sass-api",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Rsbuild 默认使用最新的 ",(0,r.jsx)(e.code,{children:"modern-compiler"})," API，如果你依赖了 Sass 的 ",(0,r.jsx)(e.code,{children:"legacy"})," API，可以将 sass-loader 的 ",(0,r.jsx)(e.a,{href:"https://github.com/webpack-contrib/sass-loader?tab=readme-ov-file#api",target:"_blank",rel:"noopener noreferrer",children:"api"})," 选项设置为 ",(0,r.jsx)(e.code,{children:"legacy"}),"，以兼容一些废弃的 Sass 写法。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"pluginSass({\n  sassLoaderOptions: {\n    api: 'legacy',\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,r.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"rspress-directive-content",children:(0,r.jsxs)(e.p,{children:["Sass 的 ",(0,r.jsx)(e.code,{children:"legacy"})," API 已经被废弃，并且将在 Sass 2.0 中被移除，建议迁移到 ",(0,r.jsx)(e.code,{children:"modern-compiler"})," API，详见 ",(0,r.jsx)(e.a,{href:"https://sass-lang.com/documentation/breaking-changes/legacy-js-api/",target:"_blank",rel:"noopener noreferrer",children:"Sass - Legacy JS API"}),"。\n"]})})]}),"\n",(0,r.jsxs)(e.h3,{id:"忽略-sass-废弃提示",children:["忽略 Sass 废弃提示",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#忽略-sass-废弃提示",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Sass 会通过 warning 日志提示你一些废弃的写法，这些写法在 Sass 未来的大版本中将会被移除，建议根据日志进行修改。如果你不想看到这些日志，可以通过 Sass 的 ",(0,r.jsx)(e.a,{href:"https://sass-lang.com/documentation/js-api/interfaces/stringoptions/#silenceDeprecations",target:"_blank",rel:"noopener noreferrer",children:"silenceDeprecations"})," 选项来忽略这些警告。"]}),"\n",(0,r.jsxs)(e.p,{children:["例如，",(0,r.jsx)(e.code,{children:"@import"})," 已经被 Sass 废弃，当你使用该语法时，Sass 会输出如下日志："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n 0 | @import './b.scss';\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"@rsbuild/plugin-sass"})," 默认添加了如下配置来忽略 ",(0,r.jsx)(e.code,{children:"@import"})," 的警告，如果你需要忽略其他废弃警告，可以使用同样的方式。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"pluginSass({\n  sassLoaderOptions: {\n    sassOptions: {\n      silenceDeprecations: ['import'],\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["请查看 ",(0,r.jsx)(e.a,{href:"https://sass-lang.com/documentation/js-api/interfaces/deprecations/",target:"_blank",rel:"noopener noreferrer",children:"Sass Deprecations"})," 了解更多信息。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"配置多个-sass-插件",children:["配置多个 Sass 插件",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置多个-sass-插件",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["通过使用 ",(0,r.jsx)(e.code,{children:"include"})," 和 ",(0,r.jsx)(e.code,{children:"exclude"})," 选项，你可以同时注册多个 Sass 插件，并为每个插件指定不同的选项。"]}),"\n",(0,r.jsx)(e.p,{children:"例如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"export default {\n  plugins: [\n    pluginSass({\n      exclude: /\\.another\\.scss$/,\n    }),\n    pluginSass({\n      include: /\\.another\\.scss$/,\n      sassLoaderOptions: {\n        // some custom options\n      },\n    }),\n  ],\n};\n"})})]})}function l(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,a.ah)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(c,{...s})}):c(s)}let t=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fplugins%2Flist%2Fplugin-sass.mdx"]={toc:[{text:"快速开始",id:"快速开始",depth:2},{text:"安装插件",id:"安装插件",depth:3},{text:"注册插件",id:"注册插件",depth:3},{text:"选项",id:"选项",depth:2},{text:"sassLoaderOptions",id:"sassloaderoptions",depth:3},{text:"include",id:"include",depth:3},{text:"exclude",id:"exclude",depth:3},{text:"实践",id:"实践",depth:2},{text:"修改 Sass implementation",id:"修改-sass-implementation",depth:3},{text:"选择 Sass API",id:"选择-sass-api",depth:3},{text:"忽略 Sass 废弃提示",id:"忽略-sass-废弃提示",depth:3},{text:"配置多个 Sass 插件",id:"配置多个-sass-插件",depth:3}],title:"Sass 插件",frontmatter:{}}}}]);