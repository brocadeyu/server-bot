"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["2142"],{38622:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",code:"code",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"onAfterBuild"})," 是在执行生产模式构建后触发的回调函数，你可以通过 ",(0,t.jsx)(e.a,{href:"https://rspack.dev/api/javascript-api/stats",target:"_blank",rel:"noopener noreferrer",children:"stats"})," 参数获取到构建结果信息。"]}),"\n",(0,t.jsxs)(e.p,{children:["另外，你可以通过 ",(0,t.jsx)(e.code,{children:"isWatch"})," 判断是否是 watch 模式，并在 watch 模式下通过 ",(0,t.jsx)(e.code,{children:"isFirstCompile"})," 来判断是否为首次构建。"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnAfterBuild(\n  callback: (params: {\n    isFirstCompile: boolean;\n    isWatch: boolean;\n    stats?: Stats | MultiStats;\n    environments: Record<string, EnvironmentContext>;\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonAfterBuild.mdx"]={toc:[],title:"",frontmatter:{}}},15730:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",code:"code",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"onAfterCreateCompiler"})," 是在创建 Compiler 实例后、执行构建前触发的回调函数，当你执行 ",(0,t.jsx)(e.code,{children:"rsbuild.startDevServer"}),"、",(0,t.jsx)(e.code,{children:"rsbuild.build"})," 或 ",(0,t.jsx)(e.code,{children:"rsbuild.createCompiler"})," 时，都会调用此钩子。"]}),"\n",(0,t.jsxs)(e.p,{children:["你可以通过 ",(0,t.jsx)(e.code,{children:"compiler"})," 参数获取到 ",(0,t.jsx)(e.a,{href:"https://rspack.dev/api/javascript-api/compiler",target:"_blank",rel:"noopener noreferrer",children:"Compiler 实例对象"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnAfterCreateCompiler(callback: (params: {\n  compiler: Compiler | MultiCompiler;\n  environments: Record<string, EnvironmentContext>;\n}) => Promise<void> | void;): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonAfterCreateCompiler.mdx"]={toc:[],title:"",frontmatter:{}}},9096:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["在启动开发服务器后调用。你可以通过 ",(0,t.jsx)(e.code,{children:"port"})," 参数获得开发服务器监听的端口号，通过 ",(0,t.jsx)(e.code,{children:"routes"})," 获得页面路由信息。"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"type Routes = Array<{\n  entryName: string;\n  pathname: string;\n}>;\n\nfunction OnAfterStartDevServer(\n  callback: (params: {\n    port: number;\n    routes: Routes;\n    environments: Record<string, EnvironmentContext>;\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonAfterStartDevServer.mdx"]={toc:[],title:"",frontmatter:{}}},89142:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["在启动生产预览服务器后调用，你可以通过 ",(0,t.jsx)(e.code,{children:"port"})," 参数获得生产服务器监听的端口号，通过 ",(0,t.jsx)(e.code,{children:"routes"})," 获得页面路由信息。"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"type Routes = Array<{\n  entryName: string;\n  pathname: string;\n}>;\n\nfunction OnAfterStartProdServer(\n  callback: (params: {\n    port: number;\n    routes: Routes;\n    environments: Record<string, EnvironmentContext>;\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonAfterStartProdServer.mdx"]={toc:[],title:"",frontmatter:{}}},68755:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",code:"code",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"onBeforeBuild"})," 是在执行生产模式构建前触发的回调函数。"]}),"\n",(0,t.jsxs)(e.p,{children:["你可以通过 ",(0,t.jsx)(e.code,{children:"bundlerConfigs"})," 参数获取到 Rspack 配置数组，数组中可能包含一份或多份 ",(0,t.jsx)(e.a,{href:"https://rspack.dev/config/",target:"_blank",rel:"noopener noreferrer",children:"Rspack 配置"}),"，这取决于是否配置了多个 ",(0,t.jsx)(e.a,{href:"/config/environments",children:"environments"}),"。"]}),"\n",(0,t.jsxs)(e.p,{children:["另外，你可以通过 ",(0,t.jsx)(e.code,{children:"isWatch"})," 判断是否是 watch 模式，并在 watch 模式下通过 ",(0,t.jsx)(e.code,{children:"isFirstCompile"})," 来判断是否为首次构建。"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnBeforeBuild(\n  callback: (params: {\n    isWatch: boolean;\n    isFirstCompile: boolean;\n    bundlerConfigs?: Rspack.Configuration[];\n    environments: Record<string, EnvironmentContext>;\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonBeforeBuild.mdx"]={toc:[],title:"",frontmatter:{}}},46607:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",code:"code",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"onBeforeCreateCompiler"})," 是在创建底层 Compiler 实例前触发的回调函数，当你执行 ",(0,t.jsx)(e.code,{children:"rsbuild.startDevServer"}),"、",(0,t.jsx)(e.code,{children:"rsbuild.build"})," 或 ",(0,t.jsx)(e.code,{children:"rsbuild.createCompiler"})," 时，都会调用此钩子。"]}),"\n",(0,t.jsxs)(e.p,{children:["你可以通过 ",(0,t.jsx)(e.code,{children:"bundlerConfigs"})," 参数获取到 Rspack 配置数组，数组中可能包含一份或多份 ",(0,t.jsx)(e.a,{href:"https://rspack.dev/config/",target:"_blank",rel:"noopener noreferrer",children:"Rspack 配置"}),"，这取决于是否配置了多个 ",(0,t.jsx)(e.a,{href:"/config/environments",children:"environments"}),"。"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnBeforeCreateCompiler(\n  callback: (params: {\n    bundlerConfigs: Rspack.Configuration[];\n    environments: Record<string, EnvironmentContext>;\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonBeforeCreateCompiler.mdx"]={toc:[],title:"",frontmatter:{}}},10566:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"在启动开发服务器前调用。"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnBeforeStartDevServer(\n  callback: (params: {\n    environments: Record<string, EnvironmentContext>;\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonBeforeStartDevServer.mdx"]={toc:[],title:"",frontmatter:{}}},94791:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"在启动生产预览服务器前调用。"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnBeforeStartProdServer(callback: () => Promise<void> | void): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonBeforeStartProdServer.mdx"]={toc:[],title:"",frontmatter:{}}},1168:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"在关闭构建时调用，可用于在构建关闭时执行清理操作。"}),"\n",(0,t.jsxs)(e.p,{children:["Rsbuild CLI 会在执行 ",(0,t.jsx)(e.a,{href:"/guide/basic/cli#rsbuild-build",children:"rsbuild build"})," 完成后自动调用此钩子，使用 JavaScript API 的用户需要手动调用 ",(0,t.jsx)(e.a,{href:"/api/javascript-api/instance#rsbuildbuild",children:"rsbuild.close()"})," 方法来触发此钩子。"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function onCloseBuild(callback: () => Promise<void> | void): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonCloseBuild.mdx"]={toc:[],title:"",frontmatter:{}}},16716:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"关闭开发服务器时调用，可用于在开发服务器关闭时执行清理操作。"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function onCloseDevServer(callback: () => Promise<void> | void): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonCloseDevServer.mdx"]={toc:[],title:"",frontmatter:{}}},89548:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["在每次开发模式构建结束后调用，你可以通过 ",(0,t.jsx)(e.code,{children:"isFirstCompile"})," 来判断是否为首次构建。"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnDevCompileDone(\n  callback: (params: {\n    isFirstCompile: boolean;\n    stats: Stats | MultiStats;\n    environments: Record<string, EnvironmentContext>;\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonDevCompileDone.mdx"]={toc:[],title:"",frontmatter:{}}},33329:function(n,e,r){r.d(e,{Z:function(){return c}});var t=r(55367),s=r(26971);function i(n){let e=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"在进程即将退出时调用，这个钩子只能执行同步代码。"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function OnExit(callback: () => void): void;\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}let c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fshared%2FonExit.mdx"]={toc:[],title:"",frontmatter:{}}}}]);