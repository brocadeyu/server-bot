"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["4178"],{93527:function(e,n,s){s.r(n),s.d(n,{default:function(){return h}});var r=s(55367),i=s(26971);function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h2:"h2",h3:"h3",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"securitysri",children:["security.sri",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SriOptions = {\n  enable?: 'auto' | boolean;\n  algorithm?: 'sha256' | 'sha384' | 'sha512';\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["为 HTML 所引入的 ",(0,r.jsx)(n.code,{children:"<script>"})," 和 ",(0,r.jsx)(n.code,{children:"<link>"})," 标签添加完整性属性 —— ",(0,r.jsx)(n.code,{children:"integrity"}),"，使浏览器能够验证引入资源的完整性，以此防止下载的资源被篡改。"]}),"\n",(0,r.jsxs)(n.h2,{id:"什么是-sri",children:["什么是 SRI",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是-sri",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"子资源完整性 Subresource Integrity（SRI）是专门用来校验资源的一种方案，它读取资源标签中的 integrity 属性，将其中的信息摘要值，和资源实际的信息摘要值进行对比，如果发现无法匹配，那么浏览器就会拒绝执行资源。"}),"\n",(0,r.jsxs)(n.p,{children:["对于 ",(0,r.jsx)(n.code,{children:"<script>"})," 标签来说，结果为拒绝执行其中的代码；对于 CSS links 来说，结果为不加载其中的样式。"]}),"\n",(0,r.jsxs)(n.p,{children:["关于 SRI 的更多内容，可以查看 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在使用 SRI 时，你需要启用 ",(0,r.jsx)(n.a,{href:"/config/html/crossorigin",children:"html.crossorigin"}),"，这可以确保资源在跨域加载时，SRI 也能正常校验。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    sri: {\n      enable: 'auto',\n    },\n  },\n  html: {\n    crossorigin: 'anonymous',\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Rsbuild 生成的 ",(0,r.jsx)(n.code,{children:"<script>"})," 和 ",(0,r.jsx)(n.code,{children:"<link>"})," 标签上会带有 ",(0,r.jsx)(n.code,{children:"integrity"})," 和 ",(0,r.jsx)(n.code,{children:"crossorigin"})," 属性："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.com/static/js/index.js"\n  crossorigin="anonymous"\n  integrity="sha384-d8fhhhTWXaPPIEMw+POJ9hqCIRvsFbegq/oef7k9R8Rpb8Dy95B2THPOECdZoLDF"\n><\/script>\n\n<link\n  href="https://cdn.com/static/css/index.css"\n  rel="stylesheet"\n  crossorigin="anonymous"\n  integrity="sha384-8U9HYzsHbf55cFZyiWIE29+QPYQ9WO+U5uT/ViFw0TOwM2Fbbb74ZegzRV/nvwrD"\n/>\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"注意",children:["注意",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Rsbuild 的 ",(0,r.jsx)(n.code,{children:"security.sri"})," 仅会作用于 Rsbuild 生成的标签，不会作用于："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTML 模板中原有的标签。"}),"\n",(0,r.jsx)(n.li,{children:"Rspack 异步注入的标签。"}),"\n",(0,r.jsx)(n.li,{children:"通过客户端 JavaScript 代码插入的标签。"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Rsbuild 会处理以下几种 ",(0,r.jsx)(n.code,{children:"<link>"})," 标签："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'<link rel="preload">'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'<link rel="stylesheet">'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'<link rel="modulepreload">'})}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"选项",children:["选项",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"enable",children:["enable",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"'auto' | boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["是否启用 SRI。",(0,r.jsx)(n.code,{children:"'auto'"})," 表示在生产构建时开启，开发构建时关闭。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    sri: {\n      enable: 'auto',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"通常你不需要在开发阶段开启 SRI。"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"algorithm",children:["algorithm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#algorithm",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"'sha256' | 'sha384' | 'sha512'"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"'sha384'"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"指定用于计算 integrity hash 的算法。"}),"\n",(0,r.jsxs)(n.p,{children:["比如设置为 ",(0,r.jsx)(n.code,{children:"sha512"}),"："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    sri: {\n      algorithm: 'sha512',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["生成的 integrity 属性的值会以 ",(0,r.jsx)(n.code,{children:"sha512-"})," 为前缀："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.com/static/js/index.js"\n  crossorigin="anonymous"\n  integrity="sha512-ShExVSs5q/j3ZBI/PeS0niJ4mBxh6tc08QN1uofI1dmGAx7ETMh8/VDddGRewxXQhjCgdgAnaiY3BfnWrUSmZA=="\n><\/script>\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["参考：",(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/SRI/#cryptographic-hash-functions",target:"_blank",rel:"noopener noreferrer",children:"Cryptographic hash functions"}),"。"]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}let h=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfig%2Fsecurity%2Fsri.mdx"]={toc:[{text:"什么是 SRI",id:"什么是-sri",depth:2},{text:"示例",id:"示例",depth:2},{text:"注意",id:"注意",depth:2},{text:"选项",id:"选项",depth:2},{text:"enable",id:"enable",depth:3},{text:"algorithm",id:"algorithm",depth:3}],title:"security.sri",frontmatter:{}}}}]);