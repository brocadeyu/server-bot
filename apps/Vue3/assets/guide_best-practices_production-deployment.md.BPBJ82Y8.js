import{_ as o,c as t,b as l,o as a}from"./chunks/framework.D-hrs3GQ.js";const h=JSON.parse('{"title":"生产部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"开发环境 vs. 生产环境","slug":"development-vs-production","link":"#development-vs-production","children":[]},{"level":2,"title":"不使用构建工具","slug":"without-build-tools","link":"#without-build-tools","children":[]},{"level":2,"title":"使用构建工具","slug":"with-build-tools","link":"#with-build-tools","children":[]},{"level":2,"title":"追踪运行时错误","slug":"tracking-runtime-errors","link":"#tracking-runtime-errors","children":[]}],"relativePath":"guide/best-practices/production-deployment.md","filePath":"guide/best-practices/production-deployment.md"}'),s={name:"guide/best-practices/production-deployment.md"};function r(n,e,i,p,c,d){return a(),t("div",null,e[0]||(e[0]=[l(`<h1 id="production-deployment" tabindex="-1">生产部署 <a class="header-anchor" href="#production-deployment" aria-label="Permalink to &quot;生产部署 {#production-deployment}&quot;">​</a></h1><h2 id="development-vs-production" tabindex="-1">开发环境 vs. 生产环境 <a class="header-anchor" href="#development-vs-production" aria-label="Permalink to &quot;开发环境 vs. 生产环境 {#development-vs-production}&quot;">​</a></h2><p>在开发过程中，Vue 提供了许多功能来提升开发体验：</p><ul><li>对常见错误和隐患的警告</li><li>对组件 props / 自定义事件的校验</li><li><a href="/guide/extras/reactivity-in-depth.html#reactivity-debugging">响应性调试钩子</a></li><li>开发工具集成</li></ul><p>然而，这些功能在生产环境中并不会被使用，一些警告检查也会产生少量的性能开销。当部署到生产环境中时，我们应该移除所有未使用的、仅用于开发环境的代码分支，来获得更小的包体积和更好的性能。</p><h2 id="without-build-tools" tabindex="-1">不使用构建工具 <a class="header-anchor" href="#without-build-tools" aria-label="Permalink to &quot;不使用构建工具 {#without-build-tools}&quot;">​</a></h2><p>如果你没有使用任何构建工具，而是从 CDN 或其他源来加载 Vue，请确保在部署时使用的是生产环境版本（以 <code>.prod.js</code> 结尾的构建文件）。生产环境版本会被最小化，并移除了所有仅用于开发环境的代码分支。</p><ul><li>如果需要使用全局变量版本（通过 <code>Vue</code> 全局变量访问）：请使用 <code>vue.global.prod.js</code>。</li><li>如果需要 ESM 版本（通过原生 ESM 导入访问）：请使用 <code>vue.esm-browser.prod.js</code>。</li></ul><p>更多细节请参考<a href="https://github.com/vuejs/core/tree/main/packages/vue#which-dist-file-to-use" target="_blank" rel="noreferrer">构建文件指南</a>。</p><h2 id="with-build-tools" tabindex="-1">使用构建工具 <a class="header-anchor" href="#with-build-tools" aria-label="Permalink to &quot;使用构建工具 {#with-build-tools}&quot;">​</a></h2><p>通过 <code>create-vue</code>（基于 Vite）或是 Vue CLI（基于 webpack）搭建的项目都已经预先做好了针对生产环境的配置。</p><p>如果使用了自定义的构建，请确保：</p><ol><li><code>vue</code> 被解析为 <code>vue.runtime.esm-bundler.js</code>。</li><li><a href="/api/compile-time-flags.html">编译时功能标记</a>已被正确配置。</li><li><code>process.env<wbr>.NODE_ENV</code> 会在构建时被替换为 <code>&quot;production&quot;</code>。</li></ol><p>其他参考：</p><ul><li><a href="https://cn.vitejs.dev/guide/build.html" target="_blank" rel="noreferrer">Vite 生产环境指南</a></li><li><a href="https://cn.vitejs.dev/guide/static-deploy.html" target="_blank" rel="noreferrer">Vite 部署指南</a></li><li><a href="https://cli.vuejs.org/zh/guide/deployment.html" target="_blank" rel="noreferrer">Vue CLI 部署指南</a></li></ul><h2 id="tracking-runtime-errors" tabindex="-1">追踪运行时错误 <a class="header-anchor" href="#tracking-runtime-errors" aria-label="Permalink to &quot;追踪运行时错误 {#tracking-runtime-errors}&quot;">​</a></h2><p><a href="/api/application.html#app-config-errorhandler">应用级错误处理</a> 可以用来向追踪服务报告错误：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> app</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> createApp</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.config.</span><span style="color:#B392F0;">errorHandler</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">instance</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 向追踪服务报告错误</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>诸如 <a href="https://docs.sentry.io/platforms/javascript/guides/vue/" target="_blank" rel="noreferrer">Sentry</a> 和 <a href="https://docs.bugsnag.com/platforms/javascript/vue/" target="_blank" rel="noreferrer">Bugsnag</a> 等服务也为 Vue 提供了官方集成。</p>`,19)]))}const m=o(s,[["render",r]]);export{h as __pageData,m as default};