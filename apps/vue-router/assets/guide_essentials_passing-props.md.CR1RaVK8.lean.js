import{_ as n,c as t,j as i,a as e,G as p,a2 as h,B as l,o as k}from"./chunks/framework.Cl57Dsmt.js";const A=JSON.parse('{"title":"Passing Props to Route Components","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/passing-props.md","filePath":"guide/essentials/passing-props.md"}'),r={name:"guide/essentials/passing-props.md"};function d(o,s,B,g,c,y){const a=l("VueSchoolLink");return k(),t("div",null,[s[0]||(s[0]=i("h1",{id:"Passing-Props-to-Route-Components",tabindex:"-1"},[e("Passing Props to Route Components "),i("a",{class:"header-anchor",href:"#Passing-Props-to-Route-Components","aria-label":'Permalink to "Passing Props to Route Components"'},"​")],-1)),p(a,{href:"https://vueschool.io/lessons/route-props",title:"Learn how to pass props to route components"}),s[1]||(s[1]=h(`<p>Using <code>$route</code> or <code>useRoute()</code> in your component creates a tight coupling with the route which limits the flexibility of the component as it can only be used on certain URLs. While this is not necessarily a bad thing, we can decouple this behavior with a <code>props</code> option.</p><p>Let&#39;s return to our earlier example:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">&lt;!-- User.vue --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    User {{ </span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">$route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }}</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> User</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;./User.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">// these are passed to \`createRouter\`</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/users/:id&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">User</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span></code></pre></div><p>We can remove the direct dependency on <code>$route</code> in <code>User.vue</code> by declaring a prop instead:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Xi6KV" id="tab-iZ3hy8g" checked><label data-title="Composition API" for="tab-iZ3hy8g">Composition API</label><input type="radio" name="group-Xi6KV" id="tab-pL1p8w2"><label data-title="Options API" for="tab-pL1p8w2">Options API</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">&lt;!-- User.vue --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">defineProps</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">String</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    User {{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }}</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-dark-font-style:italic;--shiki-light:#6A737D;--shiki-light-font-style:inherit;">&lt;!-- User.vue --&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">String</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">}</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    User {{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">id</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }}</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">div</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div></div></div><p>We can then configure the route to pass the <code>id</code> param as a prop by setting <code>props: true</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/user/:id&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">User</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span></code></pre></div><p>This allows you to use the component anywhere, which makes the component easier to reuse and test.</p><h2 id="Boolean-mode" tabindex="-1">Boolean mode <a class="header-anchor" href="#Boolean-mode" aria-label="Permalink to &quot;Boolean mode&quot;">​</a></h2><p>When <code>props</code> is set to <code>true</code>, the <code>route.params</code> will be set as the component props.</p><h2 id="Named-views" tabindex="-1">Named views <a class="header-anchor" href="#Named-views" aria-label="Permalink to &quot;Named views&quot;">​</a></h2><p>For routes with named views, you have to define the <code>props</code> option for each named view:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/user/:id&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    components</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">default</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">User</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">sidebar</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Sidebar</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> },</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">default</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">sidebar</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span></code></pre></div><h2 id="Object-mode" tabindex="-1">Object mode <a class="header-anchor" href="#Object-mode" aria-label="Permalink to &quot;Object mode&quot;">​</a></h2><p>When <code>props</code> is an object, this will be set as the component props as-is. Useful for when the props are static.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/promotion/from-newsletter&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Promotion</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">newsletterPopup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span></code></pre></div><h2 id="Function-mode" tabindex="-1">Function mode <a class="header-anchor" href="#Function-mode" aria-label="Permalink to &quot;Function mode&quot;">​</a></h2><p>You can create a function that returns props. This allows you to cast parameters into other types, combine static values with route-based values, etc.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/search&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">SearchUser</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">    props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-dark-font-style:italic;--shiki-light:#E36209;--shiki-light-font-style:inherit;">route</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> =&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> ({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">q</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span></code></pre></div><p>The URL <code>/search?q=vue</code> would pass <code>{query: &#39;vue&#39;}</code> as props to the <code>SearchUser</code> component.</p><p>Try to keep the <code>props</code> function stateless, as it&#39;s only evaluated on route changes. Use a wrapper component if you need state to define the props, that way Vue can react to state changes.</p><h2 id="Via-RouterView" tabindex="-1">Via RouterView <a class="header-anchor" href="#Via-RouterView" aria-label="Permalink to &quot;Via RouterView&quot;">​</a></h2><p>You can also pass any props via the <a href="./../advanced/router-view-slot.html"><code>&lt;RouterView&gt;</code> slot</a>:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">RouterView</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">is</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    view-prop</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;value&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">   /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">RouterView</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>In this case, <strong>all view components</strong> will receive <code>view-prop</code>. This is usually not a good idea as it means that all of the view components have declared a <code>view-prop</code> prop, which is not necessarily true. If possible, use any of the options above.</p></div>`,27))])}const u=n(r,[["render",d]]);export{A as __pageData,u as default};