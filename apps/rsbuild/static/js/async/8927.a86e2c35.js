"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["8927"],{51218:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});var t=s(55367),r=s(26971);function l(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolsstyleloader",children:["tools.styleLoader",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsstyleloader",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["通过 ",(0,t.jsx)(n.code,{children:"tools.styleLoader"})," 可以设置 ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/style-loader",target:"_blank",rel:"noopener noreferrer",children:"style-loader"})," 的配置项。"]}),"\n",(0,t.jsxs)(n.p,{children:["值得注意的是，Rsbuild 默认不会开启 ",(0,t.jsx)(n.code,{children:"style-loader"}),"，你可以通过 ",(0,t.jsx)(n.a,{href:"/config/output/inject-styles",children:"output.injectStyles"})," 配置项来开启它。"]}),"\n",(0,t.jsxs)(n.h2,{id:"object-类型",children:["Object 类型",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["当 ",(0,t.jsx)(n.code,{children:"tools.styleLoader"})," 是一个 object 时，它会与默认配置通过 ",(0,t.jsx)(n.code,{children:"Object.assign"})," 合并。"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: {\n      insert: 'head',\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"function-类型",children:["Function 类型",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["当 ",(0,t.jsx)(n.code,{children:"tools.styleLoader"})," 是一个 function 时，默认选项会作为第一个参数传入，你可以直接修改这个对象，也可以返回一个新的对象作为最终使用的选项。比如："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: (config) => {\n      config.insert = 'head';\n      return config;\n    },\n  },\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fconfig%2Ftools%2Fstyle-loader.mdx"]={toc:[{text:"Object 类型",id:"object-类型",depth:2},{text:"Function 类型",id:"function-类型",depth:2}],title:"tools.styleLoader",frontmatter:{}}}}]);