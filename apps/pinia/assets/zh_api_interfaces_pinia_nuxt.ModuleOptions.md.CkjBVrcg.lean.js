import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.DS4GivxB.js";const c=JSON.parse('{"title":"接口：ModuleOptions","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"zh/api/interfaces/pinia_nuxt.ModuleOptions.md","filePath":"zh/api/interfaces/pinia_nuxt.ModuleOptions.md"}'),n={name:"zh/api/interfaces/pinia_nuxt.ModuleOptions.md"};function o(p,s,l,r,d,h){return t(),a("div",null,s[0]||(s[0]=[e('<p><a href="./../">API 文档</a> / <a href="./../modules/pinia_nuxt.html">@pinia/nuxt</a> / ModuleOptions</p><h1 id="接口-ModuleOptions" tabindex="-1">接口：ModuleOptions <a class="header-anchor" href="#接口-ModuleOptions" aria-label="Permalink to &quot;接口：ModuleOptions&quot;">​</a></h1><p><a href="./../modules/pinia_nuxt.html">@pinia/nuxt</a>.ModuleOptions</p><h2 id="Properties" tabindex="-1">属性 <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;属性 %{#Properties}%&quot;">​</a></h2><h3 id="Properties-autoImports" tabindex="-1">autoImports <a class="header-anchor" href="#Properties-autoImports" aria-label="Permalink to &quot;autoImports %{#Properties-autoImports}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>autoImports</strong>: (<code>string</code> | [<code>string</code>, <code>string</code>])[]</p><p>将被添加到 nuxt.config.js 文件的自动导入数组。</p><p><strong><code>Example</code></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#59873A;">autoImports</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [</span></span>\n<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;"> // automatically import `defineStore`</span></span>\n<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">defineStore</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>\n<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;"> // automatically import `defineStore` as `definePiniaStore`</span></span>\n<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">defineStore</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">definePiniaStore</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>\n<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">]</span></span></code></pre></div><hr><h3 id="Properties-disableVuex" tabindex="-1">disableVuex <a class="header-anchor" href="#Properties-disableVuex" aria-label="Permalink to &quot;disableVuex %{#Properties-disableVuex}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>disableVuex</strong>: <code>boolean</code></p><p>默认情况下，Pinia 会禁用 Vuex，将此选项设置为 <code>false</code> 可启用 Vuex，然后便可同时使用 Pinia 和 Vuex（仅在 Nuxt 2 中支持）。</p><p><strong><code>Default</code></strong></p><p><code>true</code></p>',15)]))}const u=i(n,[["render",o]]);export{c as __pageData,u as default};