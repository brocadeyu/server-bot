import{_ as i,c as a,a2 as e,o as s}from"./chunks/framework.DS4GivxB.js";const c=JSON.parse('{"title":"mapWritableState()","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/pinia/functions/mapWritableState.md","filePath":"api/pinia/functions/mapWritableState.md"}'),r={name:"api/pinia/functions/mapWritableState.md"};function h(n,t,l,o,p,k){return s(),a("div",null,t[0]||(t[0]=[e('<p><a href="./../../">@pinia/root</a> / <a href="./../">pinia</a> / mapWritableState</p><h1 id="mapWritableState-" tabindex="-1">mapWritableState() <a class="header-anchor" href="#mapWritableState-" aria-label="Permalink to &quot;mapWritableState()&quot;">​</a></h1><p>Allows using state and getters from one store without using the composition API (<code>setup()</code>) by generating an object to be spread in the <code>computed</code> field of a component.</p><h2 id="Param" tabindex="-1">Param <a class="header-anchor" href="#Param" aria-label="Permalink to &quot;Param&quot;">​</a></h2><p>store to map from</p><h2 id="Param-1" tabindex="-1">Param <a class="header-anchor" href="#Param-1" aria-label="Permalink to &quot;Param&quot;">​</a></h2><p>array or object</p><h2 id="mapWritableState-useStore-keyMapper-" tabindex="-1">mapWritableState(useStore, keyMapper) <a class="header-anchor" href="#mapWritableState-useStore-keyMapper-" aria-label="Permalink to &quot;mapWritableState(useStore, keyMapper)&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> mapWritableState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">Id</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> S</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> G</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> A</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> KeyMapper</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;(</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;">useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;"> keyMapper</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#97E1F1;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> _MapWritableStateObjectReturn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">S</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> G</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> KeyMapper</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span></code></pre></div><p>Same as <code>mapState()</code> but creates computed setters as well so the state can be modified. Differently from <code>mapState()</code>, only <code>state</code> properties can be added.</p><h3 id="Type-Parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#Type-Parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h3><p>• <strong>Id</strong> <em>extends</em> <code>string</code></p><p>• <strong>S</strong> <em>extends</em> <a href="./../type-aliases/StateTree.html"><code>StateTree</code></a></p><p>• <strong>G</strong></p><p>• <strong>A</strong></p><p>• <strong>KeyMapper</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, <code>_MapWritableStateKeys</code>&lt;<code>S</code>, <code>G</code>&gt;&gt;</p><h3 id="Parameters" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>useStore</strong>: <a href="./../interfaces/StoreDefinition.html"><code>StoreDefinition</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;</p><p>store to map from</p><p>• <strong>keyMapper</strong>: <code>KeyMapper</code></p><p>object of state properties</p><h3 id="Returns" tabindex="-1">Returns <a class="header-anchor" href="#Returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><a href="./../type-aliases/MapWritableStateObjectReturn.html"><code>_MapWritableStateObjectReturn</code></a>&lt;<code>S</code>, <code>G</code>, <code>KeyMapper</code>&gt;</p><h3 id="Param-2" tabindex="-1">Param <a class="header-anchor" href="#Param-2" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>store to map from</p><h3 id="Param-3" tabindex="-1">Param <a class="header-anchor" href="#Param-3" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>array or object</p><h2 id="mapWritableState-useStore-keys-" tabindex="-1">mapWritableState(useStore, keys) <a class="header-anchor" href="#mapWritableState-useStore-keys-" aria-label="Permalink to &quot;mapWritableState(useStore, keys)&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> mapWritableState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">Id</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> S</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> G</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> A</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> Keys</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;(</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;">useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#B07D48;--shiki-light-font-style:inherit;"> keys</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#97E1F1;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> Pick</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">_MapWritableStateReturn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;">S</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> G</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> Keys</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;,</span><span style="--shiki-dark:#FFB86C;--shiki-dark-font-style:italic;--shiki-light:#2E8F82;--shiki-light-font-style:inherit;"> Keys</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span></code></pre></div><p>Allows using state and getters from one store without using the composition API (<code>setup()</code>) by generating an object to be spread in the <code>computed</code> field of a component.</p><h3 id="Type-Parameters-1" tabindex="-1">Type Parameters <a class="header-anchor" href="#Type-Parameters-1" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h3><p>• <strong>Id</strong> <em>extends</em> <code>string</code></p><p>• <strong>S</strong> <em>extends</em> <a href="./../type-aliases/StateTree.html"><code>StateTree</code></a></p><p>• <strong>G</strong></p><p>• <strong>A</strong></p><p>• <strong>Keys</strong> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></p><h3 id="Parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>• <strong>useStore</strong>: <a href="./../interfaces/StoreDefinition.html"><code>StoreDefinition</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;</p><p>store to map from</p><p>• <strong>keys</strong>: readonly <code>Keys</code>[]</p><p>array of state properties</p><h3 id="Returns-1" tabindex="-1">Returns <a class="header-anchor" href="#Returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><p><code>Pick</code>&lt;<a href="./../type-aliases/MapWritableStateReturn.html"><code>_MapWritableStateReturn</code></a>&lt;<code>S</code>, <code>G</code>, <code>Keys</code>&gt;, <code>Keys</code>&gt;</p><h3 id="Param-4" tabindex="-1">Param <a class="header-anchor" href="#Param-4" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>store to map from</p><h3 id="Param-5" tabindex="-1">Param <a class="header-anchor" href="#Param-5" aria-label="Permalink to &quot;Param&quot;">​</a></h3><p>array or object</p>',47)]))}const y=i(r,[["render",h]]);export{c as __pageData,y as default};