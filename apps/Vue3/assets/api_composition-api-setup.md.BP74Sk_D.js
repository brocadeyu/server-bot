import{_ as n,c as a,b as p,o as l}from"./chunks/framework.D-hrs3GQ.js";const d=JSON.parse('{"title":"组合式 API：setup()","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"访问 Props","slug":"accessing-props","link":"#accessing-props","children":[]},{"level":2,"title":"Setup 上下文","slug":"setup-context","link":"#setup-context","children":[{"level":3,"title":"暴露公共属性","slug":"exposing-public-properties","link":"#exposing-public-properties","children":[]}]},{"level":2,"title":"与渲染函数一起使用","slug":"usage-with-render-functions","link":"#usage-with-render-functions","children":[]}],"relativePath":"api/composition-api-setup.md","filePath":"api/composition-api-setup.md"}'),o={name:"api/composition-api-setup.md"};function e(t,s,c,r,E,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="composition-api-setup" tabindex="-1">组合式 API：setup() <a class="header-anchor" href="#composition-api-setup" aria-label="Permalink to &quot;组合式 API：setup() {#composition-api-setup}&quot;">​</a></h1><h2 id="basic-usage" tabindex="-1">基本使用 <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;基本使用 {#basic-usage}&quot;">​</a></h2><p><code>setup()</code> 钩子是在组件中使用组合式 API 的入口，通常只在以下情况下使用：</p><ol><li>需要在非单文件组件中使用组合式 API 时。</li><li>需要在基于选项式 API 的组件中集成基于组合式 API 的代码时。</li></ol><div class="info custom-block"><p class="custom-block-title">注意</p><p>对于结合单文件组件使用的组合式 API，推荐通过 <a href="/api/sfc-script-setup.html"><code>&lt;script setup&gt;</code></a> 以获得更加简洁及符合人体工程学的语法。</p></div><p>我们可以使用<a href="./reactivity-core.html">响应式 API</a> 来声明响应式的状态，在 <code>setup()</code> 函数中返回的对象会暴露给模板和组件实例。其他的选项也可以通过组件实例来获取 <code>setup()</code> 暴露的属性：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 返回值会暴露给模板和其他的选项式 API 钩子</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count) </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">count</span><span style="color:#F97583;">++</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;{{ count }}&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><p>在模板中访问从 <code>setup</code> 返回的 <a href="/api/reactivity-core.html#ref">ref</a> 时，它会<a href="/guide/essentials/reactivity-fundamentals.html#deep-reactivity">自动浅层解包</a>，因此你无须再在模板中为它写 <code>.value</code>。当通过 <code>this</code> 访问时也会同样如此解包。</p><p><code>setup()</code> 自身并不含对组件实例的访问权，即在 <code>setup()</code> 中访问 <code>this</code> 会是 <code>undefined</code>。你可以在选项式 API 中访问组合式 API 暴露的值，但反过来则不行。</p><p><code>setup()</code> 应该<em>同步地</em>返回一个对象。唯一可以使用 <code>async setup()</code> 的情况是，该组件是 <a href="./../guide/built-ins/suspense.html">Suspense</a> 组件的后裔。</p><h2 id="accessing-props" tabindex="-1">访问 Props <a class="header-anchor" href="#accessing-props" aria-label="Permalink to &quot;访问 Props {#accessing-props}&quot;">​</a></h2><p><code>setup</code> 函数的第一个参数是组件的 <code>props</code>。和标准的组件一致，一个 <code>setup</code> 函数的 <code>props</code> 是响应式的，并且会在传入新的 props 时同步更新。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: String</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(props.title)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>请注意如果你解构了 <code>props</code> 对象，解构出的变量将会丢失响应性。因此我们推荐通过 <code>props.xxx</code> 的形式来使用其中的 props。</p><p>如果你确实需要解构 <code>props</code> 对象，或者需要将某个 prop 传到一个外部函数中并保持响应性，那么你可以使用 <a href="./reactivity-utilities.html#torefs">toRefs()</a> 和 <a href="/api/reactivity-utilities.html#toref">toRef()</a> 这两个工具函数：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { toRefs, toRef } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 将 \`props\` 转为一个其中全是 ref 的对象，然后解构</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">title</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> toRefs</span><span style="color:#E1E4E8;">(props)</span></span>
<span class="line"><span style="color:#6A737D;">    // \`title\` 是一个追踪着 \`props.title\` 的 ref</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(title.value)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 或者，将 \`props\` 的单个属性转为一个 ref</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> title</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> toRef</span><span style="color:#E1E4E8;">(props, </span><span style="color:#9ECBFF;">&#39;title&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="setup-context" tabindex="-1">Setup 上下文 <a class="header-anchor" href="#setup-context" aria-label="Permalink to &quot;Setup 上下文 {#setup-context}&quot;">​</a></h2><p>传入 <code>setup</code> 函数的第二个参数是一个 <strong>Setup 上下文</strong>对象。上下文对象暴露了其他一些在 <code>setup</code> 中可能会用到的值：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">context</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 透传 Attributes（非响应式的对象，等价于 $attrs）</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(context.attrs)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 插槽（非响应式的对象，等价于 $slots）</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(context.slots)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 触发事件（函数，等价于 $emit）</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(context.emit)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 暴露公共属性（函数）</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(context.expose)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>该上下文对象是非响应式的，可以安全地解构：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">attrs</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">slots</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">emit</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">expose</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p><code>attrs</code> 和 <code>slots</code> 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 <code>attrs.x</code> 或 <code>slots.x</code> 的形式使用其中的属性。此外还需注意，和 <code>props</code> 不同，<code>attrs</code> 和 <code>slots</code> 的属性都<strong>不是</strong>响应式的。如果你想要基于 <code>attrs</code> 或 <code>slots</code> 的改变来执行副作用，那么你应该在 <code>onBeforeUpdate</code> 生命周期钩子中编写相关逻辑。</p><h3 id="exposing-public-properties" tabindex="-1">暴露公共属性 <a class="header-anchor" href="#exposing-public-properties" aria-label="Permalink to &quot;暴露公共属性 {#exposing-public-properties}&quot;">​</a></h3><p><code>expose</code> 函数用于显式地限制该组件暴露出的属性，当父组件通过<a href="/guide/essentials/template-refs.html#ref-on-component">模板引用</a>访问该组件的实例时，将仅能访问 <code>expose</code> 函数暴露出的内容：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">expose</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 让组件实例处于 “关闭状态”</span></span>
<span class="line"><span style="color:#6A737D;">    // 即不向父组件暴露任何东西</span></span>
<span class="line highlighted"><span style="color:#B392F0;">    expose</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> publicCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> privateCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">    // 有选择地暴露局部状态</span></span>
<span class="line highlighted"><span style="color:#B392F0;">    expose</span><span style="color:#E1E4E8;">({ count: publicCount })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h2 id="usage-with-render-functions" tabindex="-1">与渲染函数一起使用 <a class="header-anchor" href="#usage-with-render-functions" aria-label="Permalink to &quot;与渲染函数一起使用 {#usage-with-render-functions}&quot;">​</a></h2><p><code>setup</code> 也可以返回一个<a href="/guide/extras/render-function.html">渲染函数</a>，此时在渲染函数中可以直接使用在同一作用域下声明的响应式状态：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line highlighted"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">, count.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>返回一个渲染函数将会阻止我们返回其他东西。对于组件内部来说，这样没有问题，但如果我们想通过模板引用将这个组件的方法暴露给父组件，那就有问题了。</p><p>我们可以通过调用 <a href="#exposing-public-properties"><code>expose()</code></a> 解决这个问题：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { h, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">expose</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> increment</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#F97583;"> ++</span><span style="color:#E1E4E8;">count.value</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#B392F0;">    expose</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      increment</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">, count.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><p>此时父组件可以通过模板引用来访问这个 <code>increment</code> 方法。</p>`,32)]))}const u=n(o,[["render",e]]);export{d as __pageData,u as default};