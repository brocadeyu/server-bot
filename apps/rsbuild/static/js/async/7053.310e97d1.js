"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["7053"],{52549:function(e,s,n){n.r(s),n.d(s,{default:function(){return a}});var r=n(55367),c=n(26971);function l(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"resolvealiasstrategy",children:["resolve.aliasStrategy",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#resolvealiasstrategy",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"类型："})," ",(0,r.jsx)(s.code,{children:"'prefer-tsconfig' | 'prefer-alias'"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"默认值："})," ",(0,r.jsx)(s.code,{children:"'prefer-tsconfig'"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"版本："})," ",(0,r.jsx)(s.code,{children:">=1.1.7"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["控制 ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,r.jsx)(s.code,{children:"paths"})," 选项与 Rsbuild 的 ",(0,r.jsx)(s.a,{href:"/config/resolve/alias",children:"resolve.alias"})," 选项的优先级。"]}),"\n",(0,r.jsxs)(s.h3,{id:"prefer-tsconfig",children:["prefer-tsconfig",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#prefer-tsconfig",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"resolve.aliasStrategy"})," 默认为 ",(0,r.jsx)(s.code,{children:"'prefer-tsconfig'"}),"，此时 ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,r.jsx)(s.code,{children:"paths"})," 选项和打包工具的 ",(0,r.jsx)(s.code,{children:"alias"})," 选项都会生效，但 tsconfig paths 选项的优先级更高。"]}),"\n",(0,r.jsx)(s.p,{children:"比如同时配置以下内容："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"tsconfig paths:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common-1/*"]\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"resolve.alias"}),":"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"export default {\n  resolve: {\n    alias: {\n      '@common': './src/common-2',\n      '@utils': './src/utils',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"由于 tsconfig paths 的优先级更高，所以："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"@common"})," 会使用 tsconfig paths 定义的值，指向 ",(0,r.jsx)(s.code,{children:"./src/common-1"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"@utils"})," 会使用 ",(0,r.jsx)(s.code,{children:"resolve.alias"})," 定义的值，指向 ",(0,r.jsx)(s.code,{children:"./src/utils"})]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"prefer-alias",children:["prefer-alias",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#prefer-alias",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["当 ",(0,r.jsx)(s.code,{children:"resolve.aliasStrategy"})," 的值为 ",(0,r.jsx)(s.code,{children:"prefer-alias"})," 时，",(0,r.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,r.jsx)(s.code,{children:"paths"})," 选项只用于提供 TypeScript 类型定义，而不会对打包结果产生任何影响。此时，构建工具只会读取 ",(0,r.jsx)(s.code,{children:"alias"})," 选项作为路径别名。"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"export default {\n  resolve: {\n    aliasStrategy: 'prefer-alias',\n  },\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"比如同时配置以下内容："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"tsconfig paths:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common-1/*"],\n      "@utils/*": ["./src/utils/*"]\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"resolve.alias"}),":"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"export default {\n  resolve: {\n    alias: {\n      '@common': './src/common-2',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["由于 tsconfig paths 只用于提供类型，所以最终只有 ",(0,r.jsx)(s.code,{children:"@common"})," 别名生效，并指向 ",(0,r.jsx)(s.code,{children:"./src/common-2"})," 目录。"]}),"\n",(0,r.jsxs)(s.p,{children:["大部分情况下你不需要使用 ",(0,r.jsx)(s.code,{children:"prefer-alias"}),"，但当你需要动态生成一些别名配置时，可以考虑使用它。比如，基于环境变量来生成 ",(0,r.jsx)(s.code,{children:"alias"})," 选项："]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"export default {\n  resolve: {\n    alias: {\n      '@common':\n        process.env.NODE_ENV === 'production'\n          ? './src/common-prod'\n          : './src/common-dev',\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}let a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fconfig%2Fresolve%2Falias-strategy.mdx"]={toc:[{text:"prefer-tsconfig",id:"prefer-tsconfig",depth:3},{text:"prefer-alias",id:"prefer-alias",depth:3}],title:"resolve.aliasStrategy",frontmatter:{}}}}]);