import{_ as e,c as t,a2 as i,o as s}from"./chunks/framework.DS4GivxB.js";const u=JSON.parse('{"title":"SubscriptionCallbackMutationDirect","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/pinia/interfaces/SubscriptionCallbackMutationDirect.md","filePath":"api/pinia/interfaces/SubscriptionCallbackMutationDirect.md"}'),r={name:"api/pinia/interfaces/SubscriptionCallbackMutationDirect.md"};function o(n,a,l,c,d,p){return s(),t("div",null,a[0]||(a[0]=[i('<p><a href="./../../">@pinia/root</a> / <a href="./../">pinia</a> / SubscriptionCallbackMutationDirect</p><h1 id="SubscriptionCallbackMutationDirect" tabindex="-1">SubscriptionCallbackMutationDirect <a class="header-anchor" href="#SubscriptionCallbackMutationDirect" aria-label="Permalink to &quot;SubscriptionCallbackMutationDirect&quot;">​</a></h1><p>Context passed to a subscription callback when directly mutating the state of a store with <code>store.someState = newValue</code> or <code>store.$state.someState = newValue</code>.</p><h2 id="Extends" tabindex="-1">Extends <a class="header-anchor" href="#Extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./SubscriptionCallbackMutationBase.html"><code>_SubscriptionCallbackMutationBase</code></a></li></ul><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#59873A;">events</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> DebuggerEvent</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">;</span></span></code></pre></div><p>🔴 DEV ONLY, DO NOT use for production code. Different mutation calls. Comes from <a href="https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging" target="_blank" rel="noreferrer">https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging</a> and allows to track mutations in devtools and plugins <strong>during development only</strong>.</p><h4 id="Overrides" tabindex="-1">Overrides <a class="header-anchor" href="#Overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./SubscriptionCallbackMutationBase.html"><code>_SubscriptionCallbackMutationBase</code></a>.<a href="./SubscriptionCallbackMutationBase.html#events"><code>events</code></a></p><hr><h3 id="storeId" tabindex="-1">storeId <a class="header-anchor" href="#storeId" aria-label="Permalink to &quot;storeId&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#59873A;">storeId</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> string</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">;</span></span></code></pre></div><p><code>id</code> of the store doing the mutation.</p><h4 id="Inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./SubscriptionCallbackMutationBase.html"><code>_SubscriptionCallbackMutationBase</code></a>.<a href="./SubscriptionCallbackMutationBase.html#storeid"><code>storeId</code></a></p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#59873A;">type</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> direct</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">;</span></span></code></pre></div><p>Type of the mutation.</p><h4 id="Overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#Overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./SubscriptionCallbackMutationBase.html"><code>_SubscriptionCallbackMutationBase</code></a>.<a href="./SubscriptionCallbackMutationBase.html#type"><code>type</code></a></p>',23)]))}const k=e(r,[["render",o]]);export{u as __pageData,k as default};