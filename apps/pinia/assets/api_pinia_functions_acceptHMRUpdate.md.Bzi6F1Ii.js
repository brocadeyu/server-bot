import{_ as s,c as a,a2 as t,o as e}from"./chunks/framework.DS4GivxB.js";const c=JSON.parse('{"title":"acceptHMRUpdate()","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/pinia/functions/acceptHMRUpdate.md","filePath":"api/pinia/functions/acceptHMRUpdate.md"}'),n={name:"api/pinia/functions/acceptHMRUpdate.md"};function h(l,i,p,r,k,d){return e(),a("div",null,i[0]||(i[0]=[t(`<p><a href="./../../">@pinia/root</a> / <a href="./../">pinia</a> / acceptHMRUpdate</p><h1 id="acceptHMRUpdate-" tabindex="-1">acceptHMRUpdate() <a class="header-anchor" href="#acceptHMRUpdate-" aria-label="Permalink to &quot;acceptHMRUpdate()&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> acceptHMRUpdate</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">Id</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> S</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> G</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> A</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;(</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;">initialUseStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;"> hot</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;">newModule</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#97E1F1;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> any</span></span></code></pre></div><p>Creates an <em>accept</em> function to pass to <code>import.meta.hot</code> in Vite applications.</p><h2 id="Type-Parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#Type-Parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>Id</strong> <em>extends</em> <code>string</code> = <code>string</code></p><p>• <strong>S</strong> <em>extends</em> <a href="./../type-aliases/StateTree.html"><code>StateTree</code></a> = <a href="./../type-aliases/StateTree.html"><code>StateTree</code></a></p><p>• <strong>G</strong> <em>extends</em> <a href="./../type-aliases/GettersTree.html"><code>_GettersTree</code></a>&lt;<code>S</code>&gt; = <a href="./../type-aliases/GettersTree.html"><code>_GettersTree</code></a>&lt;<code>S</code>&gt;</p><p>• <strong>A</strong> = <a href="./../type-aliases/ActionsTree.html"><code>_ActionsTree</code></a></p><h2 id="Parameters" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>• <strong>initialUseStore</strong>: <a href="./../interfaces/StoreDefinition.html"><code>StoreDefinition</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;</p><p>return of the defineStore to hot update</p><p>• <strong>hot</strong>: <code>any</code></p><p><code>import.meta.hot</code></p><h2 id="Returns" tabindex="-1">Returns <a class="header-anchor" href="#Returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Function</code></p><h3 id="Parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>newModule</strong>: <code>any</code></p><h3 id="Returns-1" tabindex="-1">Returns <a class="header-anchor" href="#Returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>any</code></p><h2 id="Example" tabindex="-1">Example <a class="header-anchor" href="#Example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> useUser</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> defineStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">...</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">hot</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">hot</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">accept</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">acceptHMRUpdate</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">useUser</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">hot</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">))</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div>`,22)]))}const F=s(n,[["render",h]]);export{c as __pageData,F as default};