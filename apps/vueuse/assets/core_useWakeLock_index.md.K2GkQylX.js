import{_ as m,a as f,b as v}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.CqAlsCcT.js";import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.B3GoC75D.js";import{_ as B}from"./chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.owu95yBy.js";import{x as F,r as E,v as C,f as c,g as L,y as W,o as g,c as u,a as t,b as h,d as p,t as _,F as w,w as q,e as x}from"./chunks/vue.CliZxonC.js";import{c as S,g as P}from"./chunks/configurable.C7TV9RQd.js";import{u as R}from"./chunks/index.B1hhgVnn.js";import{u as T}from"./chunks/index.C2bU4x7s.js";import{u as I}from"./chunks/index.BZhC5QYF.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CFoihoJv.js";import"./chunks/index.ClJO6o9Y.js";function N(r,a,s){return F(r,(i,n,k)=>{i&&a(i,n,k)},{...s,once:!1})}function O(r={}){const{navigator:a=S,document:s=P}=r,l=E(!1),i=C(null),n=R({document:s}),k=I(()=>a&&"wakeLock"in a),y=c(()=>!!i.value&&n.value==="visible");k.value&&(T(i,"release",()=>{var e;l.value=((e=i.value)==null?void 0:e.type)??!1}),N(()=>n.value==="visible"&&(s==null?void 0:s.visibilityState)==="visible"&&l.value,e=>{l.value=!1,o(e)}));async function o(e){var d;await((d=i.value)==null?void 0:d.release()),i.value=k.value?await a.wakeLock.request(e):null}async function A(e){n.value==="visible"?await o(e):l.value=e}async function D(){l.value=!1;const e=i.value;i.value=null,await(e==null?void 0:e.release())}return{sentinel:i,isSupported:k,isActive:y,request:A,forceRequest:o,release:D}}const U=L({__name:"demo",setup(r){const a=W(O()),s=c(()=>a.isActive?"OFF":"ON");function l(){return a.isActive?a.release():a.request("screen")}return(i,n)=>{const k=B;return g(),u(w,null,[t("div",null,[n[0]||(n[0]=h(" Is Supported: ")),p(k,{value:a.isSupported},null,8,["value"])]),t("div",null,[n[1]||(n[1]=h(" Is Active: ")),p(k,{value:a.isActive},null,8,["value"])]),t("button",{onClick:l},_(s.value),1)],64)}}}),Z=JSON.parse('{"title":"useWakeLock","description":"","frontmatter":{"category":"Browser"},"headers":[],"relativePath":"core/useWakeLock/index.md","filePath":"core/useWakeLock/index.md"}'),V={name:"core/useWakeLock/index.md"},ss=Object.assign(V,{setup(r){return(a,s)=>{const l=m,i=b,n=f,k=v;return g(),u("div",null,[s[1]||(s[1]=t("h1",{id:"usewakelock",tabindex:"-1"},[h("useWakeLock "),t("a",{class:"header-anchor",href:"#usewakelock","aria-label":'Permalink to "useWakeLock"'},"​")],-1)),p(l,{fn:"useWakeLock"}),s[2]||(s[2]=t("p",null,[h("Reactive "),t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API",target:"_blank",rel:"noreferrer"},"Screen Wake Lock API"),h(". Provides a way to prevent devices from dimming or locking the screen when an application needs to keep running.")],-1)),s[3]||(s[3]=t("h2",{id:"demo",tabindex:"-1"},[h("Demo "),t("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1)),p(i,null,{default:q(()=>[s[0]||(s[0]=t("p",{class:"demo-source-link"},[t("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/demo.vue",target:"_blank"},"source")],-1)),p(U)]),_:1}),s[4]||(s[4]=x(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useWakeLock</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/core</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> isSupported</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> isActive</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> forceRequest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> request</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> release</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useWakeLock</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre></div><p>When <code>request</code> is called, the wake lock will be requested if the document is visible. Otherwise, the request will be queued until the document becomes visible. If the request is successful, <code>isActive</code> will be <strong>true</strong>. Whenever the document is hidden, the <code>isActive</code> will be <strong>false</strong>.</p><p>When <code>release</code> is called, the wake lock will be released. If there is a queued request, it will be canceled.</p><p>To request a wake lock immediately, even if the document is hidden, use <code>forceRequest</code>. Note that this may throw an error if the document is hidden.</p><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-label="Permalink to &quot;Type Declarations&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> WakeLockType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">screen</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> WakeLockSentinel</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> EventTarget</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">WakeLockType</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  released</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  release</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseWakeLockOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ConfigurableNavigator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ConfigurableDocument</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * Reactive Screen Wake Lock API.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">see</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> https://vueuse.org/useWakeLock</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> options</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> declare</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useWakeLock</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">options</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">UseWakeLockOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  sentinel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ShallowRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">WakeLockSentinel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">WakeLockSentinel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  isSupported</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ComputedRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  isActive</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">ComputedRef</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  request</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">WakeLockType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  forceRequest</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">WakeLockType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  release</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Promise</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> type</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UseWakeLockReturn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ReturnType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useWakeLock</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/index.ts" target="_blank" rel="noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/demo.vue" target="_blank" rel="noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useWakeLock/index.md" target="_blank" rel="noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,10)),p(n,{fn:"useWakeLock"}),s[5]||(s[5]=t("h2",{id:"changelog",tabindex:"-1"},[h("Changelog "),t("a",{class:"header-anchor",href:"#changelog","aria-label":'Permalink to "Changelog"'},"​")],-1)),p(k,{fn:"useWakeLock"})])}}});export{Z as __pageData,ss as default};