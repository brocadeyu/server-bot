"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["2832"],{44661:function(n,e,i){i.r(e),i.d(e,{default:function(){return d}});var r=i(55367),s=i(26971);function o(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",h3:"h3",strong:"strong"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"multi-environment-builds",children:["Multi-Environment Builds",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#multi-environment-builds",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Rsbuild supports building outputs for multiple environments at the same time. You can use ",(0,r.jsx)(e.a,{href:"/config/environments",children:"environments"})," to build multiple environments in parallel and set a different Rsbuild config for each environment."]}),"\n",(0,r.jsxs)(e.h2,{id:"what-is-environment",children:["What is environment",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-environment",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"environment"})," refers to the runtime environment for build output. Common environments include browsers, Node.js, and Workers. Rsbuild allows you to define any environment names and set build options for each environment individually."]}),"\n",(0,r.jsxs)(e.p,{children:["A typical scenario is server-side rendering (SSR). You can define two environments, ",(0,r.jsx)(e.code,{children:"web"})," and ",(0,r.jsx)(e.code,{children:"node"}),", where the build targets (",(0,r.jsx)(e.a,{href:"/config/output/target",children:"output.target"}),") are ",(0,r.jsx)(e.code,{children:"web"})," and ",(0,r.jsx)(e.code,{children:"node"}),". These are used for client-side rendering (CSR) and server-side rendering (SSR) scenarios."]}),"\n",(0,r.jsx)(e.p,{children:"You can also define different environments for the same build target, for example:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Define ",(0,r.jsx)(e.code,{children:"rsc"})," and ",(0,r.jsx)(e.code,{children:"ssr"})," environments, both targeting ",(0,r.jsx)(e.code,{children:"node"}),", used separately for React Server Components and SSR."]}),"\n",(0,r.jsxs)(e.li,{children:["Define ",(0,r.jsx)(e.code,{children:"desktop"})," and ",(0,r.jsx)(e.code,{children:"mobile"})," environments, both targeting ",(0,r.jsx)(e.code,{children:"web"}),", used separately for desktop and mobile browsers."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Without the ",(0,r.jsx)(e.code,{children:"environments"})," configuration, you would need to define multiple configurations for these scenarios and run multiple independent Rsbuild builds. Now, with the ",(0,r.jsx)(e.code,{children:"environments"})," configuration, you can complete the build for multiple outputs in a single Rsbuild run (Rsbuild achieves this using Rspack's ",(0,r.jsx)(e.code,{children:"MultiCompiler"}),")."]}),"\n",(0,r.jsxs)(e.p,{children:["In Rsbuild, each ",(0,r.jsx)(e.code,{children:"environment"})," is associated with an Rsbuild configuration, an Rspack configuration, and a set of build outputs. Rsbuild plugin developers can customize the build process for a specified environment based on the ",(0,r.jsx)(e.code,{children:"environment"})," name, such as modifying Rsbuild or Rspack configurations, registering or removing plugins, adjusting Rspack rules, and viewing assets information."]}),"\n",(0,r.jsxs)(e.h2,{id:"environment-configs",children:["Environment configs",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-configs",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Rsbuild supports defining different Rsbuild configs for each environment through ",(0,r.jsx)(e.a,{href:"/config/environments",children:"environments"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"For example, if your project wants to support the SSR function, you need to define different configs for client and SSR respectively. You can define a web and node environment respectively."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:"title=rsbuild.config.ts",children:"export default {\n  environments: {\n    // Configure the web environment for browsers\n    web: {\n      source: {\n        entry: {\n          index: './src/index.client.js',\n        },\n      },\n      output: {\n        // Use 'web' target for the browser outputs\n        target: 'web',\n      },\n      resolve: {\n        alias: {\n          '@common': './src/client/common',\n        },\n      },\n    },\n    // Configure the node environment for SSR\n    node: {\n      source: {\n        entry: {\n          index: './src/index.server.js',\n        },\n      },\n      output: {\n        // Use 'node' target for the Node.js outputs\n        target: 'node',\n      },\n      resolve: {\n        alias: {\n          '@common': './src/server/common',\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"config-merging",children:["Config Merging",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#config-merging",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["If you configure ",(0,r.jsx)(e.code,{children:"environments"}),", Rsbuild will merge the config in ",(0,r.jsx)(e.code,{children:"environments"})," with the outer base config. When merging, the config in ",(0,r.jsx)(e.code,{children:"environments"})," has higher priority."]}),"\n",(0,r.jsx)(e.p,{children:"In the example above, after merging the configs, Rsbuild generates two standalone environment configs for building web and node environments."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"web environments config"}),": Generated by merging base config with ",(0,r.jsx)(e.code,{children:"environments.web"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"node environments config"}),": Generated by merging base config with ",(0,r.jsx)(e.code,{children:"environments.node"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Then, Rsbuild will use these environments configs to internally generate two Rspack configs and execute a single build using Rspack’s MultiCompiler."}),"\n",(0,r.jsxs)(e.h3,{id:"debug-config",children:["Debug Config",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-config",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["When you execute the command ",(0,r.jsx)(e.code,{children:"npx rsbuild inspect"})," in the project root directory, you will find the following output:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"rsbuild.config.[name].mjs: Indicates the Rsbuild config used for a certain environment during build."}),"\n",(0,r.jsx)(e.li,{children:"rspack.config.[name].mjs: Indicates the Rspack config corresponding to a certain environment when building."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"➜ npx rsbuild inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Rsbuild Config (web): /project/dist/.rsbuild/rsbuild.config.web.mjs\n  - Rsbuild Config (node): /project/dist/.rsbuild/rsbuild.config.node.mjs\n  - Rspack Config (web): /project/dist/.rsbuild/rspack.config.web.mjs\n  - Rspack Config (node): /project/dist/.rsbuild/rspack.config.node.mjs\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"default-environment",children:["Default environment",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#default-environment",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["When environments is not specified, Rsbuild will by default create an environment with the same name based on the currently target type (the value of ",(0,r.jsx)(e.a,{href:"/config/output/target",children:"output.target"}),")."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:"title=rsbuild.config.ts",children:"export default {\n  output: {\n    target: 'web',\n  },\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"The above config is equivalent to a simplification of the following config:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:"title=rsbuild.config.ts",children:"export default {\n  environments: {\n    web: {\n      output: {\n        target: 'web',\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"specify-environment-build",children:["Specify environment build",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-environment-build",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["By default, Rsbuild will build all environments in the Rsbuild configuration when you execute ",(0,r.jsx)(e.code,{children:"rsbuild dev"})," or ",(0,r.jsx)(e.code,{children:"rsbuild build"}),". You can build only the specified environment via ",(0,r.jsx)(e.code,{children:"--environment <name>"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# Build for all environments by default\nrsbuild dev\n\n# Build for the web environment\nrsbuild dev --environment web\n\n# Build for the web and ssr environments\nrsbuild dev --environment web --environment node\n\n# Build multiple environments can be shortened to:\nrsbuild dev --environment web,node\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"add-plugins-for-specified-environment",children:["Add plugins for specified environment",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-plugins-for-specified-environment",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Plugins configured through the ",(0,r.jsx)(e.a,{href:"/config/plugins",children:"plugins"})," field support running in all environments. If you want a plugin to run only in a specified environment, you can configure the plugin in the specified ",(0,r.jsx)(e.code,{children:"environment"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"For example, enable the React plugin only in the web environment:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:"title=rsbuild.config.ts",children:"import { pluginReact } from '@rsbuild/plugin-react';\n\nexport default {\n  environments: {\n    web: {\n      output: {\n        target: 'web',\n      },\n      plugins: [pluginReact()],\n    },\n    node: {\n      output: {\n        target: 'node',\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["If you are a plugin developer, you can view ",(0,r.jsx)(e.a,{href:"/plugins/dev/index#environment-plugin",children:"Developing environment plugins"})," for details."]}),"\n",(0,r.jsxs)(e.h2,{id:"plugin-api",children:["Plugin API",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-api",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"update-environment-config",children:["Update environment config",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#update-environment-config",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Rsbuild supports modifying or adding environment config through the ",(0,r.jsx)(e.a,{href:"/plugins/dev/hooks#modifyrsbuildconfig",children:"modifyRsbuildConfig"})," hook."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const myPlugin = () => ({\n  setup: (api) => {\n    api.modifyRsbuildConfig((config, { mergeRsbuildConfig }) => {\n      return mergeRsbuildConfig(config, {\n        environments: {\n          web1: {\n            source: {\n              entry: {\n                index: './src/web1/index',\n              },\n            },\n          },\n        },\n      });\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"configuring-a-specific-environment",children:["Configuring a specific environment",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-a-specific-environment",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Rsbuild supports modifying the Rsbuild config of a specific environment through the ",(0,r.jsx)(e.a,{href:"/plugins/dev/hooks#modifyenvironmentconfig",children:"modifyEnvironmentConfig"})," hook."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const myPlugin = () => ({\n  setup: (api) => {\n    api.modifyEnvironmentConfig((config, { name }) => {\n      if (name !== 'web') {\n        return config;\n      }\n      config.html.title = 'My Default Title';\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"environment-context",children:["Environment context",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-context",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/api/javascript-api/environment-api#environment-context",children:"Environment context"})," is a read-only object that provides some context infos about the current environment. Rsbuild supports obtaining environment context information in plugin hooks."]}),"\n",(0,r.jsxs)(e.p,{children:["For some plugin hooks related to the build environment (such as ",(0,r.jsx)(e.a,{href:"/plugins/dev/hooks#modifyrspackconfig",children:"modifyRspackConfig"})," and ",(0,r.jsx)(e.a,{href:"/plugins/dev/hooks#modifybundlerchain",children:"modifyBundlerChain"}),"), Rsbuild supports obtaining the current environment context through the ",(0,r.jsx)(e.code,{children:"environment"})," parameter."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const myPlugin = () => ({\n  setup: (api) => {\n    api.modifyRspackConfig((rspackConfig, { environment }) => {\n      if (environment.name === 'node') {\n        // do some thing\n      }\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.p,{children:["For some global plugin hooks (such as ",(0,r.jsx)(e.a,{href:"/plugins/dev/hooks#ondevcompiledone",children:"onDevCompileDone"}),", ",(0,r.jsx)(e.a,{href:"/plugins/dev/hooks#onbeforestartdevserver",children:"onBeforeStartDevServer"}),", etc.), Rsbuild supports obtaining the context of all environments through the ",(0,r.jsx)(e.code,{children:"environments"})," parameter."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const myPlugin = () => ({\n  setup: (api) => {\n    api.onDevCompileDone(({ environments }) => {\n      environments.forEach((environment) => {\n        console.log('environment', environment);\n      });\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"environment-api",children:["Environment API",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-api",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Rsbuild server provides a series of APIs related to the build environment. Users can operate the build artifacts in a specific environment on the server side through the Rsbuild ",(0,r.jsx)(e.a,{href:"/api/javascript-api/environment-api#environment-api",children:"environment API"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["You can use the environment API in ",(0,r.jsx)(e.a,{href:"/config/dev/setup-middlewares",children:"Rsbuild DevMiddleware"})," or ",(0,r.jsx)(e.a,{href:"/api/javascript-api/instance#rsbuildcreatedevserver",children:"Custom Server"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"For example, you can quickly implement an SSR function through the Rsbuild environment API in development mode:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import express from 'express';\nimport { createRsbuild, loadConfig } from '@rsbuild/core';\n\nconst serverRender = (serverAPI) => async (_req, res) => {\n  const indexModule = await serverAPI.environments.node.loadBundle('index');\n\n  const markup = indexModule.render();\n\n  const template = await serverAPI.environments.web.getTransformedHtml('index');\n\n  const html = template.replace('\x3c!--app-content--\x3e', markup);\n\n  res.writeHead(200, {\n    'Content-Type': 'text/html',\n  });\n  res.end(html);\n};\n\nexport async function startDevServer() {\n  const { content } = await loadConfig({});\n\n  // Init Rsbuild\n  const rsbuild = await createRsbuild({\n    rsbuildConfig: content,\n  });\n\n  const app = express();\n\n  // Create Rsbuild DevServer instance\n  const rsbuildServer = await rsbuild.createDevServer();\n\n  const serverRenderMiddleware = serverRender(rsbuildServer);\n\n  app.get('/', async (req, res, next) => {\n    try {\n      await serverRenderMiddleware(req, res, next);\n    } catch (err) {\n      logger.error('SSR render error, downgrade to CSR...\\n', err);\n      next();\n    }\n  });\n\n  // Apply Rsbuild’s built-in middlewares\n  app.use(rsbuildServer.middlewares);\n\n  // ...\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["For detailed usage, please refer to: ",(0,r.jsx)(e.a,{href:"https://github.com/rspack-contrib/rspack-examples/tree/main/rsbuild/ssr-express",target:"_blank",rel:"noopener noreferrer",children:"SSR + Express Example"}),"."]}),"\n",(0,r.jsxs)(e.h2,{id:"build-order",children:["Build order",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#build-order",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"By default, Rsbuild builds all environments in parallel."}),"\n",(0,r.jsxs)(e.p,{children:["If you need to control the build order between different environments, you can set build dependencies through Rspack's ",(0,r.jsx)(e.a,{href:"https://rspack.dev/config/other-options#dependencies",target:"_blank",rel:"noopener noreferrer",children:"dependencies"})," configuration."]}),"\n",(0,r.jsxs)(e.p,{children:["For example, if you need to build the ",(0,r.jsx)(e.code,{children:"web"})," environment first, then build the ",(0,r.jsx)(e.code,{children:"node"})," environment, you can add the following configuration:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:"title=rsbuild.config.ts",children:"export default {\n  environments: {\n    web: {\n      tools: {\n        rspack: {\n          name: 'foo',\n        },\n      },\n    },\n    node: {\n      tools: {\n        rspack: {\n          dependencies: ['foo'],\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"We can use a simple plugin to test the build order of multiple environments:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const testPlugin: RsbuildPlugin = {\n  name: 'test-plugin',\n  setup(api) {\n    api.onBeforeEnvironmentCompile(({ environment }) => {\n      console.log('build start:', environment.name);\n    });\n\n    api.onAfterEnvironmentCompile(({ stats, environment }) => {\n      console.log('build done:', environment.name);\n      console.log('stats', stats);\n    });\n  },\n};\n\n// The plugin will output:\n// - build start: web\n// - build done: web\n// - stats: { ... }\n// - build start: node\n// - build done: node\n// - stats: { ... }\n"})})]})}function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}let d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fadvanced%2Fenvironments.mdx"]={toc:[{text:"What is environment",id:"what-is-environment",depth:2},{text:"Environment configs",id:"environment-configs",depth:2},{text:"Config Merging",id:"config-merging",depth:3},{text:"Debug Config",id:"debug-config",depth:3},{text:"Default environment",id:"default-environment",depth:2},{text:"Specify environment build",id:"specify-environment-build",depth:2},{text:"Add plugins for specified environment",id:"add-plugins-for-specified-environment",depth:2},{text:"Plugin API",id:"plugin-api",depth:2},{text:"Update environment config",id:"update-environment-config",depth:3},{text:"Configuring a specific environment",id:"configuring-a-specific-environment",depth:3},{text:"Environment context",id:"environment-context",depth:2},{text:"Environment API",id:"environment-api",depth:2},{text:"Build order",id:"build-order",depth:2}],title:"Multi-Environment Builds",frontmatter:{}}}}]);