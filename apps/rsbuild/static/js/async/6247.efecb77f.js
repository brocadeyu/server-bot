"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["6247"],{69069:function(e,d,n){n.r(d),n.d(d,{default:function(){return i}});var s=n(55367),r=n(26971);function c(e){let d=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.h1,{id:"resolvededupe",children:["resolve.dedupe",(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#resolvededupe",children:"#"})]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"类型："})," ",(0,s.jsx)(d.code,{children:"string[]"})]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"默认值："})," ",(0,s.jsx)(d.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.strong,{children:"版本："})," ",(0,s.jsx)(d.code,{children:">= 1.1.7"})]}),"\n"]}),"\n",(0,s.jsx)(d.p,{children:"强制 Rsbuild 从项目根目录解析指定的包，这可以用于移除重复包和减少包大小。"}),"\n",(0,s.jsxs)(d.h2,{id:"示例",children:["示例",(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(d.p,{children:["例如，假设你的项目是基于 React 19 开发的，而你正在使用的 ",(0,s.jsx)(d.code,{children:"foo"})," 包依赖了 React 17，那么你的项目中就会存在两个不同版本的 React："]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"app/\n├── src/\n└── node_modules/\n    ├── foo/\n    │   └── node_modules/\n    │       ├── react (v17)\n    │       └── react-dom (v17)\n    ├── react (v19)\n    └── react-dom (v19)\n"})}),"\n",(0,s.jsxs)(d.p,{children:["在这种情况下，你可以使用 ",(0,s.jsx)(d.code,{children:"resolve.dedupe"})," 配置项来移除重复的 React 包，将所有 ",(0,s.jsx)(d.code,{children:"react"})," 和 ",(0,s.jsx)(d.code,{children:"react-dom"})," 包都解析到 ",(0,s.jsx)(d.code,{children:"/node_modules/react"})," 和 ",(0,s.jsx)(d.code,{children:"/node_modules/react-dom"}),"："]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-ts",meta:'title="rsbuild.config.ts"',children:"export default defineConfig({\n  resolve: {\n    dedupe: ['react', 'react-dom'],\n  },\n});\n"})}),"\n",(0,s.jsxs)(d.p,{children:["注意，如果使用 ",(0,s.jsx)(d.code,{children:"resolve.dedupe"})," 将一个包的不同 major 版本统一为同一个，可能导致一些包无法正常工作，因为它们可能依赖于特定版本的 API 或功能。"]}),"\n",(0,s.jsxs)(d.p,{children:["例如，如果 ",(0,s.jsx)(d.code,{children:"foo"})," 依赖了一个 React 17 特有的 API 或功能，此时将 React 17 和 React 19 统一为 React 19，就可能会导致 ",(0,s.jsx)(d.code,{children:"foo"})," 无法正常工作。"]}),"\n",(0,s.jsxs)(d.h2,{id:"实现原理",children:["实现原理",(0,s.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#实现原理",children:"#"})]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"resolve.dedupe"})," 是基于 ",(0,s.jsx)(d.a,{href:"/config/resolve/alias",children:"resolve.alias"})," 实现的，它会在当前项目的根目录下通过 ",(0,s.jsx)(d.code,{children:"require.resolve"})," 获取指定包的路径，并设置到 alias 中。"]}),"\n",(0,s.jsxs)(d.p,{children:["在上述的例子中，",(0,s.jsx)(d.code,{children:"resolve.dedupe"})," 会被转换为以下 alias 配置："]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-ts",children:"const alias = {\n  react: '/app/node_modules/react',\n  'react-dom': '/app/node_modules/react-dom',\n};\n"})}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"resolve.dedupe"})," 生成的 alias 会与项目中配置的 ",(0,s.jsx)(d.code,{children:"resolve.alias"})," 合并，当两者配置了相同的 key 时，",(0,s.jsx)(d.code,{children:"resolve.alias"})," 的优先级更高。"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:d}=Object.assign({},(0,r.ah)(),e.components);return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}let i=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfig%2Fresolve%2Fdedupe.mdx"]={toc:[{text:"示例",id:"示例",depth:2},{text:"实现原理",id:"实现原理",depth:2}],title:"resolve.dedupe",frontmatter:{}}}}]);