"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["2942"],{50911:function(e,s,i){i.r(s),i.d(s,{default:function(){return h}});var n=i(55367),r=i(26971),l=i(28855),d=i(38146);function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",div:"div",ul:"ul",li:"li",strong:"strong"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"solid-插件",children:["Solid 插件",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#solid-插件",children:"#"})]}),"\n","\n",(0,n.jsx)(l.ZB,{href:"https://github.com/web-infra-dev/rsbuild/tree/main/packages/plugin-solid"}),"\n",(0,n.jsxs)(s.p,{children:["Solid 插件提供了对 Solid 的支持，插件内部集成了 ",(0,n.jsx)(s.a,{href:"https://github.com/solidjs/solid/tree/main/packages/babel-preset-solid",target:"_blank",rel:"noopener noreferrer",children:"babel-preset-solid"}),"。"]}),"\n",(0,n.jsxs)(s.h2,{id:"快速开始",children:["快速开始",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,n.jsxs)(s.h3,{id:"安装插件",children:["安装插件",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"你可以通过如下的命令安装插件:"}),"\n","\n",(0,n.jsx)(d.PackageManagerTabs,{command:"add @rsbuild/plugin-babel @rsbuild/plugin-solid -D"}),"\n",(0,n.jsxs)(s.h3,{id:"注册插件",children:["注册插件",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["你可以在 ",(0,n.jsx)(s.code,{children:"rsbuild.config.ts"})," 文件中注册插件："]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"import { pluginBabel } from '@rsbuild/plugin-babel';\nimport { pluginSolid } from '@rsbuild/plugin-solid';\n\nexport default {\n  plugins: [\n    pluginBabel({\n      include: /\\.(?:jsx|tsx)$/,\n    }),\n    pluginSolid(),\n  ],\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"注册插件后，你可以直接进行 Solid 开发。"}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,n.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,n.jsxs)(s.p,{children:["由于 Solid 的 JSX 依赖 Babel 进行编译，因此你需要额外添加 ",(0,n.jsx)(s.a,{href:"/plugins/list/plugin-babel",children:"Babel 插件"}),"。"]}),"\n",(0,n.jsxs)(s.p,{children:["Babel 编译会产生额外的编译开销，在上述例子中，我们通过 ",(0,n.jsx)(s.code,{children:"include"})," 来匹配 ",(0,n.jsx)(s.code,{children:".jsx"})," 和 ",(0,n.jsx)(s.code,{children:".tsx"})," 文件，从而减少 Babel 带来的性能开销。"]}),"\n"]})]}),"\n",(0,n.jsxs)(s.h2,{id:"选项",children:["选项",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"如果你需要自定义 Solid 的编译行为，可以使用以下配置项。"}),"\n",(0,n.jsxs)(s.h3,{id:"solidpresetoptions",children:["solidPresetOptions",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#solidpresetoptions",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["传递给 ",(0,n.jsx)(s.code,{children:"babel-preset-solid"})," 的选项，请查阅 ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/babel-preset-solid",target:"_blank",rel:"noopener noreferrer",children:"babel-preset-solid 文档"})," 来了解具体用法。"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"类型："})," ",(0,n.jsx)(s.code,{children:"SolidPresetOptions"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"默认值："})," ",(0,n.jsx)(s.code,{children:"{}"})]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"示例："})}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"pluginSolid({\n  solidPresetOptions: {\n    generate: 'ssr',\n    hydratable: true,\n  },\n});\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}let h=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fplugins%2Flist%2Fplugin-solid.mdx"]={toc:[{text:"快速开始",id:"快速开始",depth:2},{text:"安装插件",id:"安装插件",depth:3},{text:"注册插件",id:"注册插件",depth:3},{text:"选项",id:"选项",depth:2},{text:"solidPresetOptions",id:"solidpresetoptions",depth:3}],title:"Solid 插件",frontmatter:{}}}}]);