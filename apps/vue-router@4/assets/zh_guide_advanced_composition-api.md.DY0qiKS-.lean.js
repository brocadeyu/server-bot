import{_ as n,c as h,j as i,a as t,G as k,a2 as l,B as p,o as e}from"./chunks/framework.Cl57Dsmt.js";const A=JSON.parse('{"title":"Vue Router 和 组合式 API","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/advanced/composition-api.md","filePath":"zh/guide/advanced/composition-api.md"}'),r={name:"zh/guide/advanced/composition-api.md"};function d(B,s,g,y,o,E){const a=p("VueSchoolLink");return e(),h("div",null,[s[0]||(s[0]=i("h1",{id:"Vue-Router-和-组合式-API",tabindex:"-1"},[t("Vue Router 和 组合式 API "),i("a",{class:"header-anchor",href:"#Vue-Router-和-组合式-API","aria-label":'Permalink to "Vue Router 和 组合式 API"'},"​")],-1)),k(a,{href:"https://vueschool.io/lessons/router-and-the-composition-api",title:"Learn how to use Vue Router with the composition API"}),s[1]||(s[1]=l(`<p>Vue 的<a href="https://cn.vuejs.org/guide/extras/composition-api-faq.html" target="_blank" rel="noreferrer">组合式 API</a> 的引入开辟了新的可能性，但要想充分发挥 Vue Router 的潜力，我们需要使用一些新的函数来代替访问 <code>this</code> 和组件内导航守卫。</p><h2 id="在-setup-中访问路由和当前路由" tabindex="-1">在 <code>setup</code> 中访问路由和当前路由 <a class="header-anchor" href="#在-setup-中访问路由和当前路由" aria-label="Permalink to &quot;在 \`setup\` 中访问路由和当前路由&quot;">​</a></h2><p>因为我们在 <code>setup</code> 里面没有访问 <code>this</code>，所以我们不能直接访问 <code>this.$router</code> 或 <code>this.$route</code>。作为替代，我们使用 <code>useRouter</code> 和 <code>useRoute</code> 函数：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> route</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">function</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> pushWithQuery</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">  router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;search&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">      ...</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">      ...</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  })</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">}</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p><code>route</code> 对象是一个响应式对象。在多数情况下，你应该<strong>避免监听整个 <code>route</code></strong> 对象，同时直接监听你期望改变的参数。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">watch</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> route</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> userData</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">// 当参数更改时获取用户信息</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">watch</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  async</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;"> newId</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> =&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">    userData</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">value</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> await</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> fetchUser</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">newId</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>请注意，在模板中我们仍然可以访问 <code>$router</code> 和 <code>$route</code>，所以如果你只在模板中使用这些对象的话，是不需要 <code>useRouter</code> 或 <code>useRoute</code> 的。</p><h2 id="导航守卫" tabindex="-1">导航守卫 <a class="header-anchor" href="#导航守卫" aria-label="Permalink to &quot;导航守卫&quot;">​</a></h2><p>Vue Router 将更新和离开守卫作为组合式 API 函数公开：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">onBeforeRouteLeave</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">onBeforeRouteUpdate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">// 与 beforeRouteLeave 相同，无法访问 \`this\`</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">onBeforeRouteLeave</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">((</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> answer</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> window</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">confirm</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">    &#39;Do you really want to leave? you have unsaved changes!&#39;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  )</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // 取消导航并停留在同一页面上</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">!</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">answer</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">return</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;"> false</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> userData</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">// 与 beforeRouteUpdate 相同，无法访问 \`this\`</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">onBeforeRouteUpdate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">async</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> !==</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">    userData</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">value</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> await</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> fetchUser</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>组合式 API 守卫也可以用在任何由 <code>&lt;router-view&gt;</code> 渲染的组件中，它们不必像组件内守卫那样直接用在路由组件上。</p><h2 id="useLink" tabindex="-1"><code>useLink</code> <a class="header-anchor" href="#useLink" aria-label="Permalink to &quot;\`useLink\`&quot;">​</a></h2><p>Vue Router 将 RouterLink 的内部行为作为一个组合式函数 (composable) 公开。它接收一个类似 <code>RouterLink</code> 所有 prop 的响应式对象，并暴露底层属性来构建你自己的 <code>RouterLink</code> 组件或生成自定义链接：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> props</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> defineProps</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // 如果使用 TypeScript，请添加 @ts-ignore</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">  ...</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  inactiveClass</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">String</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">}）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">const</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // 解析出来的路由对象</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // 用在链接里的 href</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // 布尔类型的 ref 标识链接是否匹配当前路由</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  isActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // 布尔类型的 ref 标识链接是否严格匹配当前路由</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  isExactActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // 导航至该链接的函数</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  navigate</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">} </span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">const</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> isExternalLink</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> typeof</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> ===</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;string&#39;</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">startsWith</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;http&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">script</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">&gt;</span></span></code></pre></div><p>注意在 RouterLink 的 <code>v-slot</code> 中可以访问与 <code>useLink</code> 组合式函数相同的属性。</p>`,15))])}const F=n(r,[["render",d]]);export{A as __pageData,F as default};