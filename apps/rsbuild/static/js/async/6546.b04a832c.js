"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["6546"],{63038:function(e,r,n){n.r(r),n.d(r,{default:function(){return o}});var s=n(55367),i=n(26971);function d(e){let r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"outputoverridebrowserslist",children:["output.overrideBrowserslist",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#outputoverridebrowserslist",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"类型："})," ",(0,s.jsx)(r.code,{children:"string[]"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"默认值："})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"指定项目兼容的目标浏览器范围。"}),"\n",(0,s.jsxs)(r.p,{children:["该值会被 ",(0,s.jsx)(r.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," 和 ",(0,s.jsx)(r.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," 等工具读取，用来确定需要转换的 JavaScript 语法特性和需要添加的 CSS 浏览器前缀。"]}),"\n",(0,s.jsxs)(r.h2,{id:"优先级",children:["优先级",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#优先级",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," 配置的优先级高于项目中的 ",(0,s.jsx)(r.code,{children:".browserslistrc"})," 配置文件和 package.json 中的 ",(0,s.jsx)(r.code,{children:"browserslist"})," 字段。"]}),"\n",(0,s.jsxs)(r.p,{children:["大多数场景下，推荐优先使用 ",(0,s.jsx)(r.code,{children:".browserslistrc"})," 文件，而不是使用 ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"})," 配置。因为 ",(0,s.jsx)(r.code,{children:".browserslistrc"})," 文件是官方定义的配置文件，通用性更强，可以被社区中的其他库识别。"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["详见 ",(0,s.jsx)(r.a,{href:"/guide/advanced/browserslist",children:"设置浏览器范围"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"默认值",children:["默认值",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["如果项目中没有定义任何 ",(0,s.jsx)(r.code,{children:"browserslist"})," 相关的配置，也没有定义 ",(0,s.jsx)(r.code,{children:"overrideBrowserslist"}),"，那么 Rsbuild 会设置默认值为："]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"示例",children:["示例",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"下面是兼容移动端 H5 场景的示例："}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:["查看 ",(0,s.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"browserslist 文档"})," 来了解如何自定义浏览器范围。"]}),"\n",(0,s.jsxs)(r.h2,{id:"基于-environment-设置",children:["基于 environment 设置",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#基于-environment-设置",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["当你面向多个 ",(0,s.jsx)(r.a,{href:"/config/environments",children:"environments"})," 构建时，可以为每个 environment 设置不同的 browserslist："]}),"\n",(0,s.jsxs)(r.p,{children:["比如为 ",(0,s.jsx)(r.code,{children:"web"})," 和 ",(0,s.jsx)(r.code,{children:"node"})," 环境设置不同的 browserslist："]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  environments: {\n    web: {\n      output: {\n        target: 'web',\n        overrideBrowserslist: ['iOS >= 9', 'Android >= 4.4'],\n      },\n    },\n    node: {\n      output: {\n        target: 'node',\n        overrideBrowserslist: ['node >= 20'],\n      },\n    },\n  },\n};\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let o=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fconfig%2Foutput%2Foverride-browserslist.mdx"]={toc:[{text:"优先级",id:"优先级",depth:2},{text:"默认值",id:"默认值",depth:2},{text:"示例",id:"示例",depth:2},{text:"基于 environment 设置",id:"基于-environment-设置",depth:2}],title:"output.overrideBrowserslist",frontmatter:{}}}}]);