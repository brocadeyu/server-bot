"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["3859"],{68648:function(e,n,r){r.r(n),r.d(n,{default:function(){return s}});var o=r(55367),i=r(26971);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"improve-build-performance",children:["Improve Build Performance",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#improve-build-performance",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Rsbuild optimizes build performance by default, but as the project becomes larger, you may encounter some build performance problems."}),"\n",(0,o.jsx)(n.p,{children:"This document provides some optional speed-up methods, developers can choose some of them to improve the build performance."}),"\n",(0,o.jsxs)(n.h2,{id:"performance-profiling",children:["Performance Profiling",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-profiling",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Performing a performance analysis can help you identify performance bottlenecks in your project, allowing for targeted optimization."}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to the ",(0,o.jsx)(n.a,{href:"/guide/debug/build-profiling",children:"Performance Building Analysis"})," section for more information."]}),"\n",(0,o.jsxs)(n.h2,{id:"general-optimization",children:["General Optimization",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#general-optimization",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"The following are some general optimization methods, which can speed up the development build and production build."}),"\n",(0,o.jsxs)(n.h3,{id:"reducing-modules",children:["Reducing Modules",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reducing-modules",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Optimizing the number of modules referenced by the application can reduce the bundle size and improve build performance. Please read the ",(0,o.jsx)(n.a,{href:"/guide/optimization/optimize-bundle",children:"Bundle Size Optimization"})," section to learn some optimization methods."]}),"\n",(0,o.jsxs)(n.h2,{id:"development-optimization",children:["Development optimization",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development-optimization",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"The following are methods for improving performance in development mode."}),"\n",(0,o.jsxs)(n.h2,{id:"enable-lazy-compilation",children:["Enable Lazy Compilation",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-lazy-compilation",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Enabling lazy compilation can significantly reduce the number of modules compiled at dev startup and improve startup time."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    lazyCompilation: true,\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Please refer to ",(0,o.jsx)(n.a,{href:"/config/dev/lazy-compilation",children:"dev.lazyCompilation"})," for more information."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"source-map-format",children:["Source Map Format",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-map-format",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["In order to provide a good debugging experience, Rsbuild uses the ",(0,o.jsx)(n.code,{children:"cheap-module-source-map"})," format source map by default in development mode, which is a high-quality source map format and will bring certain performance overhead."]}),"\n",(0,o.jsxs)(n.p,{children:["You can improve build speed by adjusting the source map format in development mode through ",(0,o.jsx)(n.a,{href:"/config/output/source-map",children:"output.sourceMap"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"For example to disable source map:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    sourceMap: {\n      js: false,\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Or set the source map format of the development mode to the cheapest ",(0,o.jsx)(n.code,{children:"eval"})," format:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    sourceMap: {\n      js: process.env.NODE_ENV === 'development' ? 'eval' : false,\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["For detailed differences between different source map formats, see ",(0,o.jsx)(n.a,{href:"https://rspack.dev/config/devtool",target:"_blank",rel:"noopener noreferrer",children:"Rspack - devtool"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"browserslist-for-development",children:["Browserslist for development",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist-for-development",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["This strategy is similar to ",(0,o.jsx)(n.a,{href:"/guide/optimization/optimize-bundle#adjust-browserslist",children:'"Adjust Browserslist"'}),", the difference is that we can set different browserslist for development and production mode, thereby reducing the compilation overhead in development mode."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, you can add the following config to ",(0,o.jsx)(n.code,{children:".browserslistrc"}),", which means that only the latest browsers are compatible in development mode, and the actual browsers are compatible in the production mode:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",meta:'title=".browserslistrc"',children:"[production]\nchrome >= 87\nedge >= 88\nfirefox >= 78\nsafari >= 14\n\n[development]\nlast 1 chrome version\nlast 1 firefox version\nlast 1 safari version\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note that this can lead to some differences in the build result between development and production modes."})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}let s=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Foptimization%2Fbuild-performance.mdx"]={toc:[{text:"Performance Profiling",id:"performance-profiling",depth:2},{text:"General Optimization",id:"general-optimization",depth:2},{text:"Reducing Modules",id:"reducing-modules",depth:3},{text:"Development optimization",id:"development-optimization",depth:2},{text:"Enable Lazy Compilation",id:"enable-lazy-compilation",depth:2},{text:"Source Map Format",id:"source-map-format",depth:3},{text:"Browserslist for development",id:"browserslist-for-development",depth:3}],title:"Improve Build Performance",frontmatter:{}}}}]);