import{_ as i,c as a,a2 as t,o as e}from"./chunks/framework.DS4GivxB.js";const c=JSON.parse('{"title":"mapActions()","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/pinia/functions/mapActions.md","filePath":"api/pinia/functions/mapActions.md"}'),n={name:"api/pinia/functions/mapActions.md"};function h(l,s,p,r,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<p><a href="./../../">@pinia/root</a> / <a href="./../">pinia</a> / mapActions</p><h1 id="mapActions-" tabindex="-1">mapActions() <a class="header-anchor" href="#mapActions-" aria-label="Permalink to &quot;mapActions()&quot;">​</a></h1><p>Allows directly using actions from your store without using the composition API (<code>setup()</code>) by generating an object to be spread in the <code>methods</code> field of a component.</p><h2 id="Param" tabindex="-1">Param <a class="header-anchor" href="#Param" aria-label="Permalink to &quot;Param&quot;">​</a></h2><p>store to map from</p><h2 id="Param-1" tabindex="-1">Param <a class="header-anchor" href="#Param-1" aria-label="Permalink to &quot;Param&quot;">​</a></h2><p>array or object</p><h2 id="mapActions-useStore-keyMapper-" tabindex="-1">mapActions(useStore, keyMapper) <a class="header-anchor" href="#mapActions-useStore-keyMapper-" aria-label="Permalink to &quot;mapActions(useStore, keyMapper)&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> mapActions</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">Id</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> S</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> G</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> A</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> KeyMapper</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;(</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;">useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;"> keyMapper</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#97E1F1;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> _MapActionsObjectReturn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">A</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> KeyMapper</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span></code></pre></div><p>Allows directly using actions from your store without using the composition API (<code>setup()</code>) by generating an object to be spread in the <code>methods</code> field of a component. The values of the object are the actions while the keys are the names of the resulting methods.</p><h3 id="Type-Parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#Type-Parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h3><p>• <strong>Id</strong> <em>extends</em> <code>string</code></p><p>• <strong>S</strong> <em>extends</em> <a href="./../type-aliases/StateTree.html"><code>StateTree</code></a></p><p>• <strong>G</strong> <em>extends</em> <a href="./../type-aliases/GettersTree.html"><code>_GettersTree</code></a>&lt;<code>S</code>&gt;</p><p>• <strong>A</strong></p><p>• <strong>KeyMapper</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, keyof <code>A</code>&gt;</p><h3 id="Parameters" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>useStore</strong>: <a href="./../interfaces/StoreDefinition.html"><code>StoreDefinition</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;</p><p>store to map from</p><p>• <strong>keyMapper</strong>: <code>KeyMapper</code></p><p>object to define new names for the actions</p><h3 id="Returns" tabindex="-1">Returns <a class="header-anchor" href="#Returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../type-aliases/MapActionsObjectReturn.html"><code>_MapActionsObjectReturn</code></a>&lt;<code>A</code>, <code>KeyMapper</code>&gt;</p><h3 id="Param-2" tabindex="-1">Param <a class="header-anchor" href="#Param-2" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>store to map from</p><h3 id="Param-3" tabindex="-1">Param <a class="header-anchor" href="#Param-3" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>array or object</p><h3 id="Example" tabindex="-1">Example <a class="header-anchor" href="#Example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">export</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> default</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">  methods</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    // other methods properties</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    // useCounterStore has two actions named \`increment\` and \`setCount\`</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">    ...</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">mapActions</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">useCounterStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;"> more</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">increment</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;"> setIt</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">setCount</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> })</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  created</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BF9EEE;--shiki-dark-font-style:italic;--shiki-light:#A65E2B;--shiki-light-font-style:inherit;">    this</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">more</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#BF9EEE;--shiki-dark-font-style:italic;--shiki-light:#A65E2B;--shiki-light-font-style:inherit;">    this</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">setIt</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#2F798A;">2</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div><h2 id="mapActions-useStore-keys-" tabindex="-1">mapActions(useStore, keys) <a class="header-anchor" href="#mapActions-useStore-keys-" aria-label="Permalink to &quot;mapActions(useStore, keys)&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> mapActions</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">Id</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> S</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> G</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> A</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;(</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;">useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;"> keys</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#97E1F1;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> _MapActionsReturn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">A</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span></code></pre></div><p>Allows directly using actions from your store without using the composition API (<code>setup()</code>) by generating an object to be spread in the <code>methods</code> field of a component.</p><h3 id="Type-Parameters-1" tabindex="-1">Type Parameters <a class="header-anchor" href="#Type-Parameters-1" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h3><p>• <strong>Id</strong> <em>extends</em> <code>string</code></p><p>• <strong>S</strong> <em>extends</em> <a href="./../type-aliases/StateTree.html"><code>StateTree</code></a></p><p>• <strong>G</strong> <em>extends</em> <a href="./../type-aliases/GettersTree.html"><code>_GettersTree</code></a>&lt;<code>S</code>&gt;</p><p>• <strong>A</strong></p><h3 id="Parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>useStore</strong>: <a href="./../interfaces/StoreDefinition.html"><code>StoreDefinition</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;</p><p>store to map from</p><p>• <strong>keys</strong>: keyof <code>A</code>[]</p><p>array of action names to map</p><h3 id="Returns-1" tabindex="-1">Returns <a class="header-anchor" href="#Returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../type-aliases/MapActionsReturn.html"><code>_MapActionsReturn</code></a>&lt;<code>A</code>&gt;</p><h3 id="Param-4" tabindex="-1">Param <a class="header-anchor" href="#Param-4" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>store to map from</p><h3 id="Param-5" tabindex="-1">Param <a class="header-anchor" href="#Param-5" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>array or object</p><h3 id="Example-1" tabindex="-1">Example <a class="header-anchor" href="#Example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">export</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> default</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">  methods</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    // other methods properties</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">    ...</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">mapActions</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">useCounterStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">increment</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">setCount</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">])</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  created</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#BF9EEE;--shiki-dark-font-style:italic;--shiki-light:#A65E2B;--shiki-light-font-style:inherit;">    this</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">increment</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#BF9EEE;--shiki-dark-font-style:italic;--shiki-light:#A65E2B;--shiki-light-font-style:inherit;">    this</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">setCount</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#2F798A;">2</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;"> // pass arguments as usual</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div>`,50)]))}const F=i(n,[["render",h]]);export{c as __pageData,F as default};