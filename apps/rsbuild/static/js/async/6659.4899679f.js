"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["6659"],{22002:function(e,n,s){s.r(n),s.d(n,{default:function(){return l}});var d=s(55367),i=s(26971);function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",div:"div",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"命令行工具",children:["命令行工具",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#命令行工具",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Rsbuild 内置了一个轻量的命令行工具，包含 ",(0,d.jsx)(n.a,{href:"#rsbuild-dev",children:"rsbuild dev"}),"、",(0,d.jsx)(n.a,{href:"#rsbuild-build",children:"rsbuild build"})," 等命令。"]}),"\n",(0,d.jsxs)(n.h2,{id:"rsbuild--h",children:["rsbuild -h",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rsbuild--h",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"如果你需要查看所有可用的 CLI 命令，请在项目目录中运行以下命令："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npx rsbuild -h\n"})}),"\n",(0,d.jsx)(n.p,{children:"输出如下："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"Usage: rsbuild <command> [options]\n\nOptions:\n  -V, --version      显示版本号\n  -h, --help         显示命令帮助\n\nCommands:\n  dev [options]      启动开发服务器\n  build [options]    构建生产环境产物\n  preview [options]  本地预览生产环境产物\n  inspect [options]  检查 Rspack 和 Rsbuild 配置\n  help [command]     显示命令帮助\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"rsbuild-dev",children:["rsbuild dev",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rsbuild-dev",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"rsbuild dev"})," 命令用于启动一个本地开发服务器，对源代码进行开发模式编译。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: rsbuild dev [options]\n\nOptions:\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -r --root <root>      指定项目根目录，可以是绝对路径或者相对于 cwd 的路径\n  -m --mode <mode>      指定构建模式，可以是 `development`，`production` 或 `none`\n  -o, --open [url]      启动时是否在浏览器中打开页面\n  --port <port>         设置 Rsbuild Server 监听的端口号\n  --host <host>         指定 Rsbuild Server 启动时监听的 host\n  --env-mode <mode>     指定 env 模式来加载 `.env.[mode]` 文件\n  --env-dir <dir>       指定目录来加载 `.env` 文件\n  --environment <name>  指定需要构建的 environment 名称\n  -h, --help            显示命令帮助\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"打开页面",children:["打开页面",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#打开页面",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"--open"})," 选项可以在启动 dev server 时自动打开页面，等同于将 ",(0,d.jsx)(n.a,{href:"/config/server/open",children:"server.open"})," 设置为 ",(0,d.jsx)(n.code,{children:"true"}),"。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"rsbuild dev --open\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"--open"})," 选项也支持指定需要打开的 URL 地址，比如："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"rsbuild dev --open http://localhost:3000/foo\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"--open"})," 选项也可以缩写为 ",(0,d.jsx)(n.code,{children:"-o"}),"："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"rsbuild dev -o\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["当同时使用 ",(0,d.jsx)(n.a,{href:"/config/server/open",children:"server.open"})," 和 ",(0,d.jsx)(n.code,{children:"--open"})," 时，",(0,d.jsx)(n.code,{children:"--open"})," 的优先级更高。\n"]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"rsbuild-build",children:["rsbuild build",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rsbuild-build",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"rsbuild build"})," 命令默认会在 ",(0,d.jsx)(n.code,{children:"dist/"})," 目录下构建出可用于生产环境的产物。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: rsbuild build [options]\n\nOptions:\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -r --root <root>      指定项目根目录，可以是绝对路径或者相对于 cwd 的路径\n  -m --mode <mode>      指定构建模式，可以是 `development`，`production` 或 `none`\n  -w --watch            开启 watch 模式, 监听文件变更并重新构建\n  --env-mode <mode>     指定 env 模式来加载 `.env.[mode]` 文件\n  --env-dir <dir>       指定目录来加载 `.env` 文件\n  --environment <name>  指定需要构建的 environment 名称\n  -h, --help            显示命令帮助\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"rsbuild-preview",children:["rsbuild preview",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rsbuild-preview",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"rsbuild preview"})," 命令用于在本地预览生产模式构建的产物, 注意你需要提前执行 ",(0,d.jsx)(n.code,{children:"rsbuild build"})," 命令构建出对应产物。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: rsbuild preview [options]\n\nOptions:\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -r --root <root>      指定项目根目录，可以是绝对路径或者相对于 cwd 的路径\n  -m --mode <mode>      指定构建模式，可以是 `development`，`production` 或 `none`\n  -o, --open [url]      启动时是否在浏览器中打开页面\n  --port <port>         设置 Rsbuild Server 监听的端口号\n  --host <host>         指定 Rsbuild Server 启动时监听的 host\n  --env-mode <mode>     指定 env 模式来加载 `.env.[mode]` 文件\n  --env-dir <dir>       指定目录来加载 `.env` 文件\n  --environment <name>  指定需要构建的 environment 名称\n  -h, --help            显示命令帮助\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsx)(n.p,{children:"preview 命令仅用于本地预览，请勿将它用于生产服务器，因为它不是为此而设计的。"})})]}),"\n",(0,d.jsxs)(n.h2,{id:"rsbuild-inspect",children:["rsbuild inspect",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rsbuild-inspect",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"rsbuild inspect"})," 命令用于查看项目的 Rsbuild 配置以及 Rspack 配置。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'Usage: rsbuild inspect [options]\n\nOptions:\n  -c --config <config>  指定配置文件路径，可以为相对路径或绝对路径\n  -r --root <root>      指定项目根目录，可以是绝对路径或者相对于 cwd 的路径\n  -m --mode <mode>      指定构建模式，可以是 `development`，`production` 或 `none`\n  --output <output>     指定在 dist 目录下输出的路径 (default: ".rsbuild")\n  --verbose             在结果中展示函数的完整内容\n  --env-mode <mode>     指定 env 模式来加载 `.env.[mode]` 文件\n  --env-dir <dir>       指定目录来加载 `.env` 文件\n  --environment <name>  指定需要构建的 environment 名称\n  -h, --help            显示命令帮助\n'})}),"\n",(0,d.jsxs)(n.p,{children:["当你在项目根目录下执行命令 ",(0,d.jsx)(n.code,{children:"npx rsbuild inspect"})," 后，会在项目的 ",(0,d.jsx)(n.code,{children:"dist/.rsbuild"})," 目录生成以下文件："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rsbuild.config.mjs"}),": 表示在构建时使用的 Rsbuild 配置。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rspack.config.web.mjs"}),": 表示在构建时使用的 Rspack 配置。"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"➜ npx rsbuild inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Rsbuild Config: /project/dist/.rsbuild/rsbuild.config.mjs\n  - Rspack Config (web): /project/dist/.rsbuild/rspack.config.web.mjs\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"指定模式",children:["指定模式",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#指定模式",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，inspect 命令会输出开发模式的配置，你可以添加 ",(0,d.jsx)(n.code,{children:"--mode production"})," 选项来输出生产模式的配置："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"rsbuild inspect --mode production\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"完整内容",children:["完整内容",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#完整内容",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，inspect 命令会省略配置对象中的函数内容，你可以添加 ",(0,d.jsx)(n.code,{children:"--verbose"})," 选项来输出函数的完整内容："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"rsbuild inspect --verbose\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"多种产物类型",children:["多种产物类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#多种产物类型",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["如果当前项目有多种产物类型，比如同时构建了浏览器产物和 Node.js 产物，那么会在 ",(0,d.jsx)(n.code,{children:"dist/.rsbuild"})," 目录生成多份 Rspack 配置文件。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"➜ npx rsbuild inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Rsbuild Config (web): /project/dist/.rsbuild/rsbuild.config.web.mjs\n  - Rsbuild Config (node): /project/dist/.rsbuild/rsbuild.config.node.mjs\n  - Rspack Config (web): /project/dist/.rsbuild/rspack.config.web.mjs\n  - Rspack Config (node): /project/dist/.rsbuild/rspack.config.node.mjs\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fcli.mdx"]={toc:[{text:"rsbuild -h",id:"rsbuild--h",depth:2},{text:"rsbuild dev",id:"rsbuild-dev",depth:2},{text:"打开页面",id:"打开页面",depth:3},{text:"rsbuild build",id:"rsbuild-build",depth:2},{text:"rsbuild preview",id:"rsbuild-preview",depth:2},{text:"rsbuild inspect",id:"rsbuild-inspect",depth:2},{text:"指定模式",id:"指定模式",depth:3},{text:"完整内容",id:"完整内容",depth:3},{text:"多种产物类型",id:"多种产物类型",depth:3}],title:"命令行工具",frontmatter:{}}}}]);