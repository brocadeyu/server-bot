"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["4409"],{27489:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var s=t(55367),o=t(26971);function r(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsstyleloader",children:["tools.styleLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsstyleloader",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The config of ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/style-loader",target:"_blank",rel:"noopener noreferrer",children:"style-loader"})," can be set through ",(0,s.jsx)(n.code,{children:"tools.styleLoader"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is worth noting that Rsbuild does not enable ",(0,s.jsx)(n.code,{children:"style-loader"})," by default. You can use ",(0,s.jsx)(n.a,{href:"/config/output/inject-styles",children:"output.injectStyles"})," config to enable it."]}),"\n",(0,s.jsxs)(n.h2,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.styleLoader"})," is an object, it will be merged with the default configuration using ",(0,s.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: {\n      insert: 'head',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.styleLoader"})," is a function, the default options will be passed in as the first parameter. You can directly modify this object or return a new object as the final options to be used. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: (config) => {\n      config.insert = 'head';\n      return config;\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}let i=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Ftools%2Fstyle-loader.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:2},{text:"Function Type",id:"function-type",depth:2}],title:"tools.styleLoader",frontmatter:{}}}}]);