"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["4814"],{67294:function(n,e,s){s.r(e),s.d(e,{default:function(){return l}});var r=s(55367),i=s(26971);function t(n){let e=Object.assign({h1:"h1",a:"a",p:"p",blockquote:"blockquote",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"environment-api",children:["Environment API",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-api",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"在这里你可以找到所有与 environment 相关的 API。"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["参考 ",(0,r.jsx)(e.a,{href:"/guide/advanced/environments",children:"多环境构建"})," 了解更多。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"environment-context",children:["Environment Context",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-context",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Environment context 是一个只读对象，提供一些和当前环境有关的上下文信息。"}),"\n",(0,r.jsxs)(e.p,{children:["在 Rsbuild 的 ",(0,r.jsx)(e.a,{href:"/plugins/dev/hooks#plugin-hooks",children:"Plugin hooks"})," 中，你可以通过 ",(0,r.jsx)(e.code,{children:"environment"})," 或 ",(0,r.jsx)(e.code,{children:"environments"})," 入参获取 environment context 对象。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type EnvironmentContext = {\n  name: string;\n  browserslist: string[];\n  config: NormalizedEnvironmentConfig;\n  distPath: string;\n  entry: RsbuildEntry;\n  htmlPaths: Record<string, string>;\n  tsconfigPath?: string;\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"name",children:["name",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["当前环境的唯一名称，用于区分和定位环境，对应于 ",(0,r.jsx)(e.a,{href:"/config/environments",children:"environments"})," 配置中的 key。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"string"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"api.modifyRspackConfig((config, { environment }) => {\n  if (environment.name === 'node') {\n    // modify config for node environment\n  }\n  return config;\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"browserslist",children:["browserslist",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["当前环境设置的目标浏览器范围。详见 ",(0,r.jsx)(e.a,{href:"/guide/advanced/browserslist",children:"设置浏览器范围"}),"。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"string[]"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"api.modifyRspackConfig((config, { environment }) => {\n  console.log(environment.browserslist);\n  return config;\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"config",children:["config",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"当前环境使用的 Rsbuild 配置（经过归一化处理）。"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type NormalizedEnvironmentConfig = DeepReadonly<{\n  dev: NormalizedDevConfig;\n  html: NormalizedHtmlConfig;\n  tools: NormalizedToolsConfig;\n  source: NormalizedSourceConfig;\n  server: NormalizedServerConfig;\n  output: NormalizedOutputConfig;\n  plugins?: RsbuildPlugins;\n  security: NormalizedSecurityConfig;\n  performance: NormalizedPerformanceConfig;\n  moduleFederation?: ModuleFederationConfig;\n}>;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"api.modifyRspackConfig((config, { environment }) => {\n  // Rspack\n  console.log(config);\n  // Rsbuild config for current environment\n  console.log(environment.config);\n  return config;\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"distpath",children:["distPath",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#distpath",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["构建产物输出目录的绝对路径，对应 RsbuildConfig 中的 ",(0,r.jsx)(e.a,{href:"/config/output/dist-path",children:"output.distPath.root"})," 配置项。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"string"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"api.modifyRspackConfig((config, { environment }) => {\n  console.log(environment.distPath);\n  return config;\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"entry",children:["entry",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#entry",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["构建入口对象，对应 ",(0,r.jsx)(e.a,{href:"/config/source/entry",children:"source.entry"})," 选项。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type RsbuildEntry = Record<string, string | string[] | EntryDescription>;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"api.modifyRspackConfig((config, { environment }) => {\n  console.log(environment.entry);\n  return config;\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"htmlpaths",children:["htmlPaths",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlpaths",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"HTML 产物的路径信息。"}),"\n",(0,r.jsx)(e.p,{children:"该 API 会返回一个对象，对象的 key 为 entry 名称，value 为 HTML 文件在产物目录下的相对路径。"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type htmlPaths = Record<string, string>;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"api.modifyRspackConfig((config, { environment }) => {\n  console.log(environment.htmlPaths);\n  return config;\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"tsconfigpath",children:["tsconfigPath",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigpath",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["tsconfig.json 文件的绝对路径，若项目中不存在 tsconfig.json 文件，则为 ",(0,r.jsx)(e.code,{children:"undefined"}),"。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type TsconfigPath = string | undefined;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"api.modifyRspackConfig((config, { environment }) => {\n  console.log(environment.tsconfigPath);\n  return config;\n});\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"environment-api-1",children:["Environment API",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-api-1",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Environment API 包了一些与多环境构建相关的 API。"}),"\n",(0,r.jsxs)(e.p,{children:["你可以通过 ",(0,r.jsx)(e.a,{href:"/api/javascript-api/instance#rsbuildcreatedevserver",children:"rsbuild.createDevServer()"})," 或 ",(0,r.jsx)(e.a,{href:"/config/dev/setup-middlewares",children:"dev.setupMiddlewares"})," 使用 environment API，这允许你在服务端获取特定环境下的构建产物信息。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type EnvironmentAPI = {\n  [name: string]: {\n    getStats: () => Promise<Stats>;\n    loadBundle: <T = unknown>(entryName: string) => Promise<T>;\n    getTransformedHtml: (entryName: string) => Promise<string>;\n  };\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"getstats",children:["getStats",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#getstats",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"获取当前环境的产物信息。"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type GetStats = () => Promise<Stats>;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const webStats = await environments.web.getStats();\n\nconsole.log(webStats.toJson({ all: false }));\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"loadbundle",children:["loadBundle",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#loadbundle",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"在服务端加载并执行构建产物。该方法会返回入口模块导出的内容。"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"/**\n * @param entryName - 入口名称，和 Rsbuild `source.entry` 的某一个 key 值对应\n * @returns 入口模块的返回值\n */\ntype LoadBundle = <T = unknown>(entryName: string) => Promise<T>;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// 加载 `main` 入口的 bundle\nconst result = await environments.node.loadBundle('main');\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"gettransformedhtml",children:["getTransformedHtml",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#gettransformedhtml",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"获取经过编译和转换后的 HTML 模版内容。"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"type GetTransformedHtml = (entryName: string) => Promise<string>;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"示例："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// 获取 main 入口的 HTML 内容\nconst html = await environments.web.getTransformedHtml('main');\n"})}),"\n",(0,r.jsx)(e.p,{children:"该方法会返回完整的 HTML 字符串，包含了所有通过 HTML 插件注入的资源和内容。"})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(t,{...n})}):t(n)}let l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fapi%2Fjavascript-api%2Fenvironment-api.mdx"]={toc:[{text:"Environment Context",id:"environment-context",depth:2},{text:"name",id:"name",depth:3},{text:"browserslist",id:"browserslist",depth:3},{text:"config",id:"config",depth:3},{text:"distPath",id:"distpath",depth:3},{text:"entry",id:"entry",depth:3},{text:"htmlPaths",id:"htmlpaths",depth:3},{text:"tsconfigPath",id:"tsconfigpath",depth:3},{text:"Environment API",id:"environment-api-1",depth:2},{text:"getStats",id:"getstats",depth:3},{text:"loadBundle",id:"loadbundle",depth:3},{text:"getTransformedHtml",id:"gettransformedhtml",depth:3}],title:"Environment API",frontmatter:{}}}}]);