"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["4668"],{73766:function(e,n,s){s.r(n),s.d(n,{default:function(){return t}});var i=s(55367),r=s(26971);function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h2:"h2",div:"div",h3:"h3"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputinlinescripts",children:["output.inlineScripts",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputinlinescripts",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type InlineScriptsTest =\n  | RegExp\n  | ((params: { size: number; name: string }) => boolean);\n\ntype InlineScripts =\n  | boolean\n  | InlineScriptsTest\n  | {\n      enable?: boolean | 'auto';\n      test: InlineScriptsTest;\n    };\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["用来控制是否用 ",(0,i.jsx)(n.code,{children:"<script>"})," 标签将产物中的 script 文件（.js 文件）inline 到 HTML 中。"]}),"\n",(0,i.jsx)(n.p,{children:"注意，如果开启了这个选项，那么 script 文件将不会被写入产物目录中，而只会以 inline 脚本的形式存在于 HTML 文件中。"}),"\n",(0,i.jsxs)(n.h2,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"默认情况下，我们有这样的产物文件："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["开启 ",(0,i.jsx)(n.code,{children:"output.inlineScripts"})," 选项后："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    inlineScripts: true,\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"生产构建的产物文件将变成："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\n"})}),"\n",(0,i.jsxs)(n.p,{children:["同时，",(0,i.jsx)(n.code,{children:"dist/static/js/main.js"})," 文件将被 inline 到 ",(0,i.jsx)(n.code,{children:"index.html"})," 中："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <script>\n      // content of dist/static/js/main.js\n    <\/script>\n  </head>\n</html>\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["设置 ",(0,i.jsx)(n.code,{children:"inlineScripts: true"}),"，等价于将 ",(0,i.jsx)(n.a,{href:"#enable",children:"inlineScripts.enable"})," 设置为 ",(0,i.jsx)(n.code,{children:"'auto'"}),"，这表示仅在生产模式时开启内联。\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"script-标签位置",children:["script 标签位置",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#script-标签位置",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["在开启 ",(0,i.jsx)(n.code,{children:"output.inlineScripts"})," 时，建议将 ",(0,i.jsx)(n.a,{href:"/config/html/inject",children:"html.inject"})," 设置为 ",(0,i.jsx)(n.code,{children:"'body'"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["因为 script 标签的默认插入位置是 ",(0,i.jsx)(n.code,{children:"<head>"})," 标签，将插入位置修改为 ",(0,i.jsx)(n.code,{children:"<body>"})," 标签后，可以保证 inlined script 能获取到 ",(0,i.jsx)(n.code,{children:"<body>"})," 中的 DOM 元素。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"export default {\n+  html: {\n+    inject: 'body',\n+  },\n   output: {\n     inlineScripts: true,\n   },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"通过正则匹配",children:["通过正则匹配",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过正则匹配",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["当你需要内联产物中的一部分 JS 文件时，你可以将 ",(0,i.jsx)(n.code,{children:"inlineScripts"})," 设置为一个正则表达式，匹配需要内联的 JS 文件的 URL。"]}),"\n",(0,i.jsxs)(n.p,{children:["比如，将产物中的 ",(0,i.jsx)(n.code,{children:"main.js"})," 内联到 HTML 中，你可以添加如下配置："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    inlineScripts: /[\\\\/]main\\.\\w+\\.js$/,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["生产模式的文件名中默认包含了一个 hash 值，比如 ",(0,i.jsx)(n.code,{children:"static/js/main.18a568e5.js"}),"。因此，在正则表达式中需要通过 ",(0,i.jsx)(n.code,{children:"\\w+"})," 来匹配 hash。\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"通过函数匹配",children:["通过函数匹配",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过函数匹配",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["你也可以将 ",(0,i.jsx)(n.code,{children:"output.inlineScripts"})," 设置为一个函数，函数接收以下参数："]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),"：文件名，比如 ",(0,i.jsx)(n.code,{children:"static/js/main.18a568e5.js"}),"。"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"}),"：文件大小，单位为 byte。"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"比如，我们希望内联小于 10kB 的资源，可以添加如下配置："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    inlineScripts({ size }) {\n      return size < 10 * 1000;\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"异步-chunks",children:["异步 Chunks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#异步-chunks",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["当你在 JavaScript 中使用 ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"noopener noreferrer",children:"dynamic import"})," 时，Rspack 会生成一个异步 Chunk。默认情况下，",(0,i.jsx)(n.code,{children:"output.inlineScripts"})," 不会将异步 Chunk 内联到 HTML 中。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果你希望将异步 Chunks 内联到 HTML 中，你可以通过 ",(0,i.jsx)(n.a,{href:"/config/tools/rspack",children:"tools.rspack"})," 配置项来实现修改 Rspack 的默认行为，将 ",(0,i.jsx)(n.a,{href:"https://rspack.dev/config/module#moduleparserjavascriptdynamicimportmode",target:"_blank",rel:"noopener noreferrer",children:"module.parser.javascript.dynamicImportMode"})," 设置为 ",(0,i.jsx)(n.code,{children:"'eager'"}),"，此时 Rspack 不会为 dynamic import 生成单独的 JS 文件。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    inlineScripts: true,\n  },\n  tools: {\n    rspack: {\n      module: {\n        parser: {\n          javascript: {\n            dynamicImportMode: 'eager',\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"选项",children:["选项",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"enable",children:["enable",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"'auto' | boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["是否启用内联。",(0,i.jsx)(n.code,{children:"'auto'"})," 表示在生产模式时开启，开发模式时关闭。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    inlineScripts: {\n      enable: 'auto',\n      test: /[\\\\/]main\\.\\w+\\.js$/,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"test",children:["test",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#test",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"RegExp | ((params: { size: number; name: string }) => boolean)"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"用来匹配需要内联的 JS 文件。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    inlineScripts: {\n      enable: true,\n      test: /[\\\\/]main\\.\\w+\\.js$/,\n    },\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}let t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfig%2Foutput%2Finline-scripts.mdx"]={toc:[{text:"示例",id:"示例",depth:2},{text:"script 标签位置",id:"script-标签位置",depth:3},{text:"通过正则匹配",id:"通过正则匹配",depth:3},{text:"通过函数匹配",id:"通过函数匹配",depth:3},{text:"异步 Chunks",id:"异步-chunks",depth:3},{text:"选项",id:"选项",depth:2},{text:"enable",id:"enable",depth:3},{text:"test",id:"test",depth:3}],title:"output.inlineScripts",frontmatter:{}}}}]);