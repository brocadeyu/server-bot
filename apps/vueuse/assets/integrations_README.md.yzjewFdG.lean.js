import{_ as a}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import{c as s,e as i,o as r}from"./chunks/vue.CliZxonC.js";const k=JSON.parse('{"title":"@vueuse/integrations","description":"","frontmatter":{},"headers":[],"relativePath":"integrations/README.md","filePath":"integrations/README.md"}'),t={name:"integrations/README.md"};function n(o,e,l,h,c,p){return r(),s("div",null,e[0]||(e[0]=[i(`<h1 id="vueuse-integrations" tabindex="-1">@vueuse/integrations <a class="header-anchor" href="#vueuse-integrations" aria-label="Permalink to &quot;@vueuse/integrations&quot;">​</a></h1><p><a href="https://www.npmjs.com/package/@vueuse/integrations" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@vueuse/integrations?color=a1b858" alt="NPM version"></a></p><blockquote><p>This is an add-on of <a href="https://github.com/vueuse/vueuse" target="_blank" rel="noreferrer">VueUse</a>, providing integration wrappers for utility libraries.</p></blockquote><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> @vueuse/integrations</span></span></code></pre></div><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><ul><li><a href="/integrations/useAsyncValidator/"><code>useAsyncValidator</code></a> — wrapper for <a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noreferrer"><code>async-validator</code></a></li><li><a href="/integrations/useAxios/"><code>useAxios</code></a> — wrapper for <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer"><code>axios</code></a></li><li><a href="/integrations/useChangeCase/"><code>useChangeCase</code></a> — reactive wrapper for <a href="https://github.com/blakeembrey/change-case" target="_blank" rel="noreferrer"><code>change-case</code></a></li><li><a href="/integrations/useCookies/"><code>useCookies</code></a> — wrapper for <a href="https://www.npmjs.com/package/universal-cookie" target="_blank" rel="noreferrer"><code>universal-cookie</code></a></li><li><a href="/integrations/useDrauu/"><code>useDrauu</code></a> — reactive instance for <a href="https://github.com/antfu/drauu" target="_blank" rel="noreferrer">drauu</a></li><li><a href="/integrations/useFocusTrap/"><code>useFocusTrap</code></a> — reactive wrapper for <a href="https://github.com/focus-trap/focus-trap" target="_blank" rel="noreferrer"><code>focus-trap</code></a></li><li><a href="/integrations/useFuse/"><code>useFuse</code></a> — easily implement fuzzy search using a composable with <a href="https://github.com/krisk/fuse" target="_blank" rel="noreferrer">Fuse.js</a></li><li><a href="/integrations/useIDBKeyval/"><code>useIDBKeyval</code></a> — wrapper for <a href="https://www.npmjs.com/package/idb-keyval" target="_blank" rel="noreferrer"><code>idb-keyval</code></a></li><li><a href="/integrations/useJwt/"><code>useJwt</code></a> — wrapper for <a href="https://github.com/auth0/jwt-decode" target="_blank" rel="noreferrer"><code>jwt-decode</code></a></li><li><a href="/integrations/useNProgress/"><code>useNProgress</code></a> — reactive wrapper for <a href="https://github.com/rstacruz/nprogress" target="_blank" rel="noreferrer"><code>nprogress</code></a></li><li><a href="/integrations/useQRCode/"><code>useQRCode</code></a> — wrapper for <a href="https://github.com/soldair/node-qrcode" target="_blank" rel="noreferrer"><code>qrcode</code></a></li><li><a href="/integrations/useSortable/"><code>useSortable</code></a> — wrapper for <a href="https://github.com/SortableJS/Sortable" target="_blank" rel="noreferrer"><code>sortable</code></a></li></ul><h2 id="tree-shaking" tabindex="-1">Tree-shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree-shaking&quot;">​</a></h2><p>For better tree-shaking result, import functions from submodules, for example:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// Don&#39;t</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useAxios</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/integrations</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useAxios</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/integrations/useAxios</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span></code></pre></div><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/master/LICENSE" target="_blank" rel="noreferrer">MIT License</a> © 2019-PRESENT <a href="https://github.com/antfu" target="_blank" rel="noreferrer">Anthony Fu</a></p>`,12)]))}const g=a(t,[["render",n]]);export{k as __pageData,g as default};