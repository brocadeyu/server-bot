import{_ as n,c as t,j as i,a as h,G as l,a2 as k,B as p,o as e}from"./chunks/framework.Cl57Dsmt.js";const A=JSON.parse('{"title":"滚动行为","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/advanced/scroll-behavior.md","filePath":"zh/guide/advanced/scroll-behavior.md"}'),r={name:"zh/guide/advanced/scroll-behavior.md"};function d(B,s,o,g,y,c){const a=p("VueSchoolLink");return e(),t("div",null,[s[0]||(s[0]=i("h1",{id:"滚动行为",tabindex:"-1"},[h("滚动行为 "),i("a",{class:"header-anchor",href:"#滚动行为","aria-label":'Permalink to "滚动行为"'},"​")],-1)),l(a,{href:"https://vueschool.io/lessons/scroll-behavior",title:"Learn how to customize scroll behavior"}),s[1]||(s[1]=k(`<p>使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。</p><p><strong>注意: 这个功能只在支持 history.pushState 的浏览器中可用。</strong></p><p>当创建一个 Router 实例，你可以提供一个 <code>scrollBehavior</code> 方法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  history</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">createWebHashHistory</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(),</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  routes</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: [</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">...</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">],</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  scrollBehavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">    // return 期望滚动到哪个的位置</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p><code>scrollBehavior</code> 函数接收 <code>to</code>和<code> from</code> 路由对象，如 <a href="./navigation-guards.html">Navigation Guards</a>。第三个参数 <code>savedPosition</code>，只有当这是一个 <code>popstate</code> 导航时才可用（由浏览器的后退/前进按钮触发）。</p><p>该函数可以返回一个 <a href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions" target="_blank" rel="noreferrer"><code>ScrollToOptions</code></a> 位置对象:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  scrollBehavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">    // 始终滚动到顶部</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">top</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p>你也可以通过 <code>el</code> 传递一个 CSS 选择器或一个 DOM 元素。在这种情况下，<code>top</code> 和 <code>left</code> 将被视为该元素的相对偏移量。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  scrollBehavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">    // 始终在元素 #main 上方滚动 10px</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">      // 也可以这么写</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">      // el: document.getElementById(&#39;main&#39;),</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">      el</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;#main&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">      // 在元素上 10 像素</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">      top</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">10</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p>如果返回一个 falsy 的值，或者是一个空对象，那么不会发生滚动。</p><p>返回 <code>savedPosition</code>，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  scrollBehavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> savedPosition</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">else</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">top</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p>如果你要模拟 “滚动到锚点” 的行为：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  scrollBehavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">hash</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        el</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">hash</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p>如果你的浏览器支持<a href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior" target="_blank" rel="noreferrer">滚动行为</a>，你可以让它变得更流畅：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  scrollBehavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">hash</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        el</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">hash</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        behavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;smooth&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><h2 id="延迟滚动" tabindex="-1">延迟滚动 <a class="header-anchor" href="#延迟滚动" aria-label="Permalink to &quot;延迟滚动&quot;">​</a></h2><p>有时候，我们需要在页面中滚动之前稍作等待。例如，当处理过渡时，我们希望等待过渡结束后再滚动。要做到这一点，你可以返回一个 Promise，它可以返回所需的位置描述符。下面是一个例子，我们在滚动前等待 500ms：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  scrollBehavior</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">savedPosition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> new</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> Promise</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">((</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">resolve</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">reject</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">      setTimeout</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(() </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">        resolve</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">left</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">top</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      }, </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">500</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    })</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p>我们可以将其与页面级过渡组件的事件挂钩，以使滚动行为与你的页面过渡很好地结合起来，但由于使用场景可能存在的差异和复杂性，我们只是提供了这个基础来实现特定的用户场景。</p>`,20))])}const F=n(r,[["render",d]]);export{A as __pageData,F as default};