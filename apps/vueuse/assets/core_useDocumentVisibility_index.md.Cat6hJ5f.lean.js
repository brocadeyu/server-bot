import{_ as g,a as m,b as y}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.CqAlsCcT.js";import{_ as b}from"./chunks/LearnMoreComponents.p2Ff83Kq.js";import{_ as D}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.B3GoC75D.js";import{u as f}from"./chunks/index.B1hhgVnn.js";import{u as v}from"./chunks/index.B7cSWOT3.js";import{g as A,r as _,x as C,o,c as k,t as B,a as i,b as l,d as a,w as V,e as p}from"./chunks/vue.CliZxonC.js";import"./chunks/configurable.C7TV9RQd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/index.C2bU4x7s.js";import"./chunks/index.CFoihoJv.js";const r="💡 Minimize the page or switch tab then return",x=A({__name:"demo",setup(d){const e=_(r),s=f(),h=v(()=>{e.value=r},3e3);return C(s,(t,n)=>{t==="visible"&&n==="hidden"&&(e.value="🎉 Welcome back!",h.start())}),(t,n)=>(o(),k("div",null,B(e.value),1))}}),R=JSON.parse('{"title":"useDocumentVisibility","description":"","frontmatter":{"category":"Elements"},"headers":[],"relativePath":"core/useDocumentVisibility/index.md","filePath":"core/useDocumentVisibility/index.md"}'),E={name:"core/useDocumentVisibility/index.md"},z=Object.assign(E,{setup(d){return(e,s)=>{const h=g,t=D,n=b,c=m,u=y;return o(),k("div",null,[s[1]||(s[1]=i("h1",{id:"usedocumentvisibility",tabindex:"-1"},[l("useDocumentVisibility "),i("a",{class:"header-anchor",href:"#usedocumentvisibility","aria-label":'Permalink to "useDocumentVisibility"'},"​")],-1)),a(h,{fn:"useDocumentVisibility"}),s[2]||(s[2]=i("p",null,[l("Reactively track "),i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState",target:"_blank",rel:"noreferrer"},[i("code",null,"document.visibilityState")])],-1)),s[3]||(s[3]=i("h2",{id:"demo",tabindex:"-1"},[l("Demo "),i("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1)),a(t,null,{default:V(()=>[s[0]||(s[0]=i("p",{class:"demo-source-link"},[i("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useDocumentVisibility/demo.vue",target:"_blank"},"source")],-1)),a(x)]),_:1}),s[4]||(s[4]=p(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useDocumentVisibility</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/core</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> visibility</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useDocumentVisibility</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre></div><h2 id="component-usage" tabindex="-1">Component Usage <a class="header-anchor" href="#component-usage" aria-label="Permalink to &quot;Component Usage&quot;">​</a></h2>`,3)),a(n),s[5]||(s[5]=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">UseDocumentVisibility</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> v-slot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{ visibility }</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Document Visibility: {{ visibility }}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">UseDocumentVisibility</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-label="Permalink to &quot;Type Declarations&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * Reactively track \`document.visibilityState\`.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">see</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> https://vueuse.org/useDocumentVisibility</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> declare</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useDocumentVisibility</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ConfigurableDocument</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">DocumentVisibilityState</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useDocumentVisibility/index.ts" target="_blank" rel="noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useDocumentVisibility/demo.vue" target="_blank" rel="noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useDocumentVisibility/index.md" target="_blank" rel="noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6)),a(c,{fn:"useDocumentVisibility"}),s[6]||(s[6]=i("h2",{id:"changelog",tabindex:"-1"},[l("Changelog "),i("a",{class:"header-anchor",href:"#changelog","aria-label":'Permalink to "Changelog"'},"​")],-1)),a(u,{fn:"useDocumentVisibility"})])}}});export{R as __pageData,z as default};