import{_ as n,c as t,j as i,a as h,G as e,a2 as k,B as l,o as p}from"./chunks/framework.Cl57Dsmt.js";const A=JSON.parse('{"title":"Vue Router and the Composition API","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/composition-api.md","filePath":"guide/advanced/composition-api.md"}'),r={name:"guide/advanced/composition-api.md"};function d(o,s,B,g,y,c){const a=l("VueSchoolLink");return p(),t("div",null,[s[0]||(s[0]=i("h1",{id:"Vue-Router-and-the-Composition-API",tabindex:"-1"},[h("Vue Router and the Composition API "),i("a",{class:"header-anchor",href:"#Vue-Router-and-the-Composition-API","aria-label":'Permalink to "Vue Router and the Composition API"'},"​")],-1)),e(a,{href:"https://vueschool.io/lessons/router-and-the-composition-api",title:"Learn how to use Vue Router with the Composition API"}),s[1]||(s[1]=k(`<p>The introduction of Vue&#39;s <a href="https://vuejs.org/guide/extras/composition-api-faq.html" target="_blank" rel="noreferrer">Composition API</a> opened up new possibilities, but to be able to get the full potential out of Vue Router, we will need to use a few new functions to replace access to <code>this</code> and in-component navigation guards.</p><h2 id="Accessing-the-Router-and-current-Route-inside-setup" tabindex="-1">Accessing the Router and current Route inside <code>setup</code> <a class="header-anchor" href="#Accessing-the-Router-and-current-Route-inside-setup" aria-label="Permalink to &quot;Accessing the Router and current Route inside \`setup\`&quot;">​</a></h2><p>Because we don&#39;t have access to <code>this</code> inside of <code>setup</code>, we cannot directly access <code>this.$router</code> or <code>this.$route</code>. Instead, we use the <code>useRouter</code> and <code>useRoute</code> composables:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
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
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>The <code>route</code> object is a reactive object. In most scenarios, you should <strong>avoid watching the whole <code>route</code></strong> object. Instead, you can directly watch the properties you are expecting to change:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">watch</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> route</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> userData</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">// fetch the user information when params change</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">watch</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  async</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;"> newId</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> =&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">    userData</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">value</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> await</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> fetchUser</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">newId</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>Note we still have access to <code>$router</code> and <code>$route</code> in templates, so there&#39;s no need to use <code>useRouter</code> or <code>useRoute</code> if we only need those objects in the template.</p><h2 id="Navigation-Guards" tabindex="-1">Navigation Guards <a class="header-anchor" href="#Navigation-Guards" aria-label="Permalink to &quot;Navigation Guards&quot;">​</a></h2><p>Vue Router exposes update and leave guards as Composition API functions:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">onBeforeRouteLeave</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">onBeforeRouteUpdate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">// same as beforeRouteLeave option but with no access to \`this\`</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">onBeforeRouteLeave</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">((</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> answer</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> window</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">confirm</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">    &#39;Do you really want to leave? you have unsaved changes!&#39;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  )</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // cancel the navigation and stay on the same page</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">!</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">answer</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">return</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;"> false</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> userData</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">// same as beforeRouteUpdate option but with no access to \`this\`</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">onBeforeRouteUpdate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">async</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // only fetch the user if the id changed as maybe only the query or the hash changed</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> !==</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">    userData</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">value</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> await</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> fetchUser</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>Composition API guards can also be used in any component rendered by <code>&lt;router-view&gt;</code>, they don&#39;t have to be used directly on the route component like in-component guards.</p><h2 id="useLink" tabindex="-1"><code>useLink</code> <a class="header-anchor" href="#useLink" aria-label="Permalink to &quot;\`useLink\`&quot;">​</a></h2><p>Vue Router exposes the internal behavior of RouterLink as a composable. It accepts a reactive object like the props of <code>RouterLink</code> and exposes low-level properties to build your own <code>RouterLink</code> component or generate custom links:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> props</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> defineProps</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">  ...</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  inactiveClass</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">String</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // the resolved route object</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">  route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // the href to use in a link</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">  href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // boolean ref indicating if the link is active</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">  isActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // boolean ref indicating if the link is exactly active</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">  isExactActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">  // function to navigate to the link</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">  navigate</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">} </span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> isExternalLink</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> typeof</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> ===</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;string&#39;</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">startsWith</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;http&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>Note that the RouterLink&#39;s <code>v-slot</code> gives access to the same properties as the <code>useLink</code> composable.</p>`,15))])}const u=n(r,[["render",d]]);export{A as __pageData,u as default};