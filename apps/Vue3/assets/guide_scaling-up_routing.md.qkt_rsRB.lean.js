import{_ as e,c as o,b as n,a as l,x as p,w as t,G as r,o as c,s as E}from"./chunks/framework.B2oIMGqn.js";const f=JSON.parse('{"title":"Routing","description":"","frontmatter":{},"headers":[{"level":2,"title":"Client-Side vs. Server-Side Routing","slug":"client-side-vs-server-side-routing","link":"#client-side-vs-server-side-routing","children":[]},{"level":2,"title":"Official Router","slug":"official-router","link":"#official-router","children":[]},{"level":2,"title":"Simple Routing from Scratch","slug":"simple-routing-from-scratch","link":"#simple-routing-from-scratch","children":[]}],"relativePath":"guide/scaling-up/routing.md","filePath":"guide/scaling-up/routing.md"}'),i={name:"guide/scaling-up/routing.md"};function y(u,s,d,h,F,g){const a=r("VueSchoolLink");return c(),o("div",null,[s[1]||(s[1]=n('<h1 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;Routing {#routing}&quot;">​</a></h1><h2 id="client-side-vs-server-side-routing" tabindex="-1">Client-Side vs. Server-Side Routing <a class="header-anchor" href="#client-side-vs-server-side-routing" aria-label="Permalink to &quot;Client-Side vs. Server-Side Routing {#client-side-vs-server-side-routing}&quot;">​</a></h2><p>Routing on the server side means the server is sending a response based on the URL path that the user is visiting. When we click on a link in a traditional server-rendered web app, the browser receives an HTML response from the server and reloads the entire page with the new HTML.</p><p>In a <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA" target="_blank" rel="noreferrer">Single-Page Application</a> (SPA), however, the client-side JavaScript can intercept the navigation, dynamically fetch new data, and update the current page without full page reloads. This typically results in a more snappy user experience, especially for use cases that are more like actual &quot;applications&quot;, where the user is expected to perform many interactions over a long period of time.</p><p>In such SPAs, the &quot;routing&quot; is done on the client side, in the browser. A client-side router is responsible for managing the application&#39;s rendered view using browser APIs such as <a href="https://developer.mozilla.org/en-US/docs/Web/API/History" target="_blank" rel="noreferrer">History API</a> or the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event" target="_blank" rel="noreferrer"><code>hashchange</code> event</a>.</p><h2 id="official-router" tabindex="-1">Official Router <a class="header-anchor" href="#official-router" aria-label="Permalink to &quot;Official Router {#official-router}&quot;">​</a></h2>',6)),l("div",null,[p(a,{href:"https://vueschool.io/courses/vue-router-4-for-everyone",title:"Free Vue Router Course"},{default:t(()=>s[0]||(s[0]=[E(" Watch a Free Video Course on Vue School ")])),_:1})]),s[2]||(s[2]=n(`<p>Vue is well-suited for building SPAs. For most SPAs, it&#39;s recommended to use the officially-supported <a href="https://github.com/vuejs/router" target="_blank" rel="noreferrer">Vue Router library</a>. For more details, see Vue Router&#39;s <a href="https://router.vuejs.org/" target="_blank" rel="noreferrer">documentation</a>.</p><h2 id="simple-routing-from-scratch" tabindex="-1">Simple Routing from Scratch <a class="header-anchor" href="#simple-routing-from-scratch" aria-label="Permalink to &quot;Simple Routing from Scratch {#simple-routing-from-scratch}&quot;">​</a></h2><p>If you only need very simple routing and do not wish to involve a full-featured router library, you can do so with <a href="/guide/essentials/component-basics.html#dynamic-components">Dynamic Components</a> and update the current component state by listening to browser <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event" target="_blank" rel="noreferrer"><code>hashchange</code> events</a> or using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/History" target="_blank" rel="noreferrer">History API</a>.</p><p>Here&#39;s a bare-bone example:</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Home </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./Home.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> About </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./About.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NotFound </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./NotFound.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> routes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/&#39;</span><span style="color:#E1E4E8;">: Home,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/about&#39;</span><span style="color:#E1E4E8;">: About</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentPath</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(window.location.hash)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hashchange&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  currentPath.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.location.hash</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentView</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> routes[currentPath.value.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;/&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> NotFound</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#/&quot;</span><span style="color:#E1E4E8;">&gt;Home&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt; |</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#/about&quot;</span><span style="color:#E1E4E8;">&gt;About&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt; |</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#/non-existent-path&quot;</span><span style="color:#E1E4E8;">&gt;Broken Link&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#B392F0;"> :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentView&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><a href="https://play.vuejs.org/#eNptUk1vgkAQ/SsTegAThZp4MmhikzY9mKanXkoPWxjLRpgly6JN1P/eWb5Eywlm572ZN2/m5GyKwj9U6CydsIy1LAyUaKpiHZHMC6UNnEDjbgqxyovKYAIX2GmVg8sktwe9qhzbdz+wga15TW++VWX6fB3dAt6UeVEVJT2me2hhEcWKSgOamVjCCk4RAbiBu6xbT5tI2ML8VDeI6HLlxZXWSOZdmJTJPJB3lJSoo5+pWBipyE9FmU4soU2IJHk+MGUrS4OE2nMtIk4F/aA7BW8Cq3WjYlDbP4isQu4wVp0F1Q1uFH1IPDK+c9cb1NW8B03tyJ//uvhlJmP05hM4n60TX/bb2db0CoNmpbxMDgzmRSYMcgQQCkjZhlXkPASRs7YmhoFYw/k+WXvKiNrTcQgpmuFv7ZOZFSyQ4U9a7ZFgK2lvSTXFDqmIQbCUJTMHFkQOBAwKg16kM3W6O7K3eSs+nbeK+eee1V/XKK0dY4Q3vLhR6uJxMUK8/AFKaB6k" target="_blank" rel="noreferrer">Try it in the Playground</a></p></div><div class="options-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Home </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./Home.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> About </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./About.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NotFound </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./NotFound.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> routes</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/&#39;</span><span style="color:#E1E4E8;">: Home,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;/about&#39;</span><span style="color:#E1E4E8;">: About</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      currentPath: window.location.hash</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#B392F0;">    currentView</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> routes[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentPath.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &#39;/&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> NotFound</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hashchange&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">		  this</span><span style="color:#E1E4E8;">.currentPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.location.hash</span></span>
<span class="line"><span style="color:#E1E4E8;">		})</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#/&quot;</span><span style="color:#E1E4E8;">&gt;Home&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt; |</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#/about&quot;</span><span style="color:#E1E4E8;">&gt;About&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt; |</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">a</span><span style="color:#B392F0;"> href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#/non-existent-path&quot;</span><span style="color:#E1E4E8;">&gt;Broken Link&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">component</span><span style="color:#B392F0;"> :is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;currentView&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p><a href="https://play.vuejs.org/#eNptUstO6zAQ/ZVR7iKtVJKLxCpKK3Gli1ggxIoNZmGSKbFoxpEzoUi0/87YeVBKNonHPmfOmcdndN00yXuHURblbeFMwxtFpm6sY7i1NcLW2RriJPWBB8bT8/WL7Xh6D9FPwL3lG9tROWHGiwGmqLDUMjhhYgtr+FQEEKdxFqRXfaR9YrkKAoqOnocfQaDEre523PNKzXqx7M8ADrlzNEYAReccEj9orjLYGyrtPtnZQrOxlFS6rXqgZJdPUC5s3YivMhuTDCkeDe6/dSalvognrkybnIgl7c4UuLhcwuHgS3v2/7EPvzRruRXJ7/SDU12W/98l451pGQndIvaWi0rTK8YrEPx64ymKFQOce5DOzlfs4cdlkA+NzdNpBSRgrJudZpQIINdQOdyuVfQnVdHGzydP9QYO549hXIII45qHkKUL/Ail8EUjBgX+z9k3JLgz9OZJgeInYElAkJlWmCcDUBGkAsrTyWS0isYV9bv803x1OTiWwzlrWtxZ2lDGDO90mWepV3+vZojHL3QQKQE=" target="_blank" rel="noreferrer">Try it in the Playground</a></p></div>`,6))])}const v=e(i,[["render",y]]);export{f as __pageData,v as default};