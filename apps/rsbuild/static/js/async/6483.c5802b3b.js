"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["6483"],{40342:function(s,e,n){n.r(e),n.d(e,{default:function(){return c}});var t=n(55367),i=n(26971);function o(s){let e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h2:"h2",h3:"h3",div:"div"},(0,i.ah)(),s.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"toolspostcss",children:["tools.postcss",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolspostcss",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Type:"})," ",(0,t.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"const defaultOptions = {\n  postcssOptions: {\n    config: false,\n    sourceMap: rsbuildConfig.output.sourceMap.css,\n  },\n};\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Rsbuild integrates PostCSS by default, you can configure ",(0,t.jsx)(e.a,{href:"https://github.com/webpack-contrib/postcss-loader",target:"_blank",rel:"noopener noreferrer",children:"postcss-loader"})," through ",(0,t.jsx)(e.code,{children:"tools.postcss"}),"."]}),"\n",(0,t.jsxs)(e.h2,{id:"function-type",children:["Function Type",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:["When ",(0,t.jsx)(e.code,{children:"tools.postcss"})," is a function, the default options will be passed in as the first parameter. You can directly modify this object or return a new object as the final options to be used. For example:"]}),"\n",(0,t.jsxs)(e.p,{children:["For example, to add a PostCSS plugin, you can call the ",(0,t.jsx)(e.a,{href:"#addplugins",children:"addPlugins"})," utility function:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: (opts, { addPlugins }) => {\n      addPlugins(require('postcss-px-to-viewport'));\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(e.p,{children:"If you need to pass parameters to the PostCSS plugin, you can call the PostCSS plugin as a function:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: (opts, { addPlugins }) => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      addPlugins(viewportPlugin);\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can also modify the default ",(0,t.jsx)(e.code,{children:"postcss-loader"})," options:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: (opts) => {\n      opts.sourceMap = false;\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"tools.postcss"})," can return a config object and completely replace the default config:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: () => {\n      return {\n        postcssOptions: {\n          plugins: [require('postcss-px-to-viewport')],\n        },\n      };\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"object-type",children:["Object Type",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:["When ",(0,t.jsx)(e.code,{children:"tools.postcss"})," is an object, it will be merged with the default configuration using ",(0,t.jsx)(e.code,{children:"Object.assign"}),". Note that ",(0,t.jsx)(e.code,{children:"Object.assign"})," is a shallow copy and will completely overwrite the built-in ",(0,t.jsx)(e.code,{children:"presets"})," or ",(0,t.jsx)(e.code,{children:"plugins"})," array, please use it with caution."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: {\n      // As `Object.assign` is used, the default postcssOptions will be overwritten.\n      postcssOptions: {\n        plugins: [require('postcss-px-to-viewport')],\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"utils",children:["Utils",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,t.jsxs)(e.h3,{id:"addplugins",children:["addPlugins",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Type:"})," ",(0,t.jsx)(e.code,{children:"(plugins: PostCSSPlugin | PostCSSPlugin[]) => void"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"For adding additional PostCSS plugins, You can pass in a single PostCSS plugin, or an array of PostCSS plugins."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: (config, { addPlugins }) => {\n      // Add a PostCSS Plugin\n      addPlugins(require('postcss-preset-env'));\n      // Add multiple PostCSS Plugins\n      addPlugins([require('postcss-preset-env'), require('postcss-import')]);\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"practice",children:["Practice",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#practice",children:"#"})]}),"\n",(0,t.jsxs)(e.h3,{id:"multiple-postcss-options",children:["Multiple PostCSS Options",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#multiple-postcss-options",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"tools.postcss.postcssOptions"})," can be set to a function, which receives the Rspack's ",(0,t.jsx)(e.code,{children:"loaderContext"})," as a parameter. This allows you to use different PostCSS options for different file paths."]}),"\n",(0,t.jsxs)(e.p,{children:["For example, use ",(0,t.jsx)(e.code,{children:"postcss-plugin-a"})," for file paths containing ",(0,t.jsx)(e.code,{children:"foo"}),", and use ",(0,t.jsx)(e.code,{children:"postcss-plugin-b"})," for other file paths:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: {\n      postcssOptions: (loaderContext) => {\n        if (/foo/.test(loaderContext.resourcePath)) {\n          return {\n            plugins: [require('postcss-plugin-a')],\n          };\n        }\n        return {\n          plugins: [require('postcss-plugin-b')],\n        };\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,t.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(e.div,{className:"rspress-directive-content",children:(0,t.jsxs)(e.p,{children:["If the project contains a ",(0,t.jsx)(e.code,{children:"postcss.config.*"})," config file, its content will be merged with ",(0,t.jsx)(e.code,{children:"tools.postcss.postcssOptions"}),", and the latter's priority is higher. The ",(0,t.jsx)(e.code,{children:"plugins"})," array will be merged into a single array.\n"]})})]}),"\n",(0,t.jsxs)(e.h2,{id:"notes",children:["Notes",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,t.jsxs)(e.h3,{id:"postcss-version",children:["PostCSS Version",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#postcss-version",children:"#"})]}),"\n",(0,t.jsx)(e.p,{children:"Rsbuild uses the PostCSS v8. When you use third-party PostCSS plugins, please pay attention to whether the PostCSS version is compatible. Some legacy plugins may not work in PostCSS v8."}),"\n",(0,t.jsxs)(e.h3,{id:"postcss-config-loading",children:["PostCSS Config Loading",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#postcss-config-loading",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:["Rsbuild uses ",(0,t.jsx)(e.a,{href:"https://github.com/postcss/postcss-load-config",target:"_blank",rel:"noopener noreferrer",children:"postcss-load-config"})," to load PostCSS config files and merge them with the default config."]}),"\n",(0,t.jsxs)(e.p,{children:["Rsbuild internally sets the ",(0,t.jsx)(e.code,{children:"postcss-loader"}),"'s ",(0,t.jsx)(e.code,{children:"postcssOptions.config"})," option to ",(0,t.jsx)(e.code,{children:"false"})," to avoid loading config files repeatedly."]})]})}function r(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),s.components);return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(o,{...s})}):o(s)}let c=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfig%2Ftools%2Fpostcss.mdx"]={toc:[{text:"Function Type",id:"function-type",depth:2},{text:"Object Type",id:"object-type",depth:2},{text:"Utils",id:"utils",depth:2},{text:"addPlugins",id:"addplugins",depth:3},{text:"Practice",id:"practice",depth:2},{text:"Multiple PostCSS Options",id:"multiple-postcss-options",depth:3},{text:"Notes",id:"notes",depth:2},{text:"PostCSS Version",id:"postcss-version",depth:3},{text:"PostCSS Config Loading",id:"postcss-config-loading",depth:3}],title:"tools.postcss",frontmatter:{}}}}]);