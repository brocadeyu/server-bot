"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["7597"],{69485:function(e,s,r){r.r(s),r.d(s,{default:function(){return l}});var i=r(55367),n=r(26971);function d(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h2:"h2",pre:"pre"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"devwritetodisk",children:["dev.writeToDisk",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#devwritetodisk",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"类型："})," ",(0,i.jsx)(s.code,{children:"boolean | ((filename: string) => boolean)"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"默认值："})," ",(0,i.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"用于控制是否将开发模式的构建产物写入到磁盘上。"}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:["在开发模式下，Rsbuild 默认会将构建产物保存在 dev server 的内存中，而不是写入磁盘，这样可以减少 fs 操作产生的开销。你可以参考 ",(0,i.jsx)(s.a,{href:"/guide/basic/server#%E6%9F%A5%E7%9C%8B%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90",children:"查看静态资源"})," 查看当前构建生成的所有静态资源。\n"]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"写入磁盘",children:["写入磁盘",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#写入磁盘",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"你可以选择将构建产物写入到磁盘，这通常用于排查构建产物的内容，或是配置静态资源的代理规则。"}),"\n",(0,i.jsxs)(s.p,{children:["只需要将 ",(0,i.jsx)(s.code,{children:"dev.writeToDisk"})," 配置项设置为 ",(0,i.jsx)(s.code,{children:"true"})," 即可："]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"export default {\n  dev: {\n    writeToDisk: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"writeToDisk: true"})," 用于在开发模式下查看构建产物，它不会改变 dev server 的行为，通过浏览器访问文件时，dev server 仍将从内存中读取文件内容。\n"]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"匹配部分文件",children:["匹配部分文件",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#匹配部分文件",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["你也可以将 ",(0,i.jsx)(s.code,{children:"dev.writeToDisk"})," 设置为函数来匹配一部分文件，函数返回 ",(0,i.jsx)(s.code,{children:"false"})," 时不会写入文件，返回值 ",(0,i.jsx)(s.code,{children:"true"})," 时会将文件写入磁盘。"]}),"\n",(0,i.jsx)(s.p,{children:"例如将文件写入磁盘，并排除热更新临时文件："}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"export default {\n  dev: {\n    writeToDisk: (file) => !file.includes('.hot-update.'),\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfig%2Fdev%2Fwrite-to-disk.mdx"]={toc:[{text:"写入磁盘",id:"写入磁盘",depth:2},{text:"匹配部分文件",id:"匹配部分文件",depth:2}],title:"dev.writeToDisk",frontmatter:{}}}}]);