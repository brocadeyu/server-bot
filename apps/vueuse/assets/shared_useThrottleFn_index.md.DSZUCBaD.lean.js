import{_ as y,a as A,b as m}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.CqAlsCcT.js";import{_ as f}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.B3GoC75D.js";import{_ as b}from"./chunks/Note.vZPJI0IQ.js";import{u as B}from"./chunks/index.dnJP40w_.js";import{g as F,r,o as d,c as g,a as s,d as e,w as u,b as i,t as o,e as p}from"./chunks/vue.CliZxonC.js";import"./chunks/configurable.C7TV9RQd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import"./chunks/filters.DuwCkQ5C.js";const v=F({__name:"demo",setup(c){const l=r(0),a=r(0),n=B(()=>{l.value+=1},1e3);function h(){a.value+=1,n()}return(k,t)=>{const D=b;return d(),g("div",null,[s("button",{onClick:h}," Smash me! "),e(D,null,{default:u(()=>t[0]||(t[0]=[i("Delay is set to 1000ms for this demo.")])),_:1}),s("p",null,"Button clicked: "+o(a.value),1),s("p",null,"Event handler called: "+o(l.value),1)])}}}),N=JSON.parse('{"title":"useThrottleFn","description":"","frontmatter":{"category":"Utilities","related":"refThrottled, refDebounced, useDebounceFn"},"headers":[],"relativePath":"shared/useThrottleFn/index.md","filePath":"shared/useThrottleFn/index.md"}'),_={name:"shared/useThrottleFn/index.md"},O=Object.assign(_,{setup(c){return(l,a)=>{const n=y,h=f,k=A,t=m;return d(),g("div",null,[a[1]||(a[1]=s("h1",{id:"usethrottlefn",tabindex:"-1"},[i("useThrottleFn "),s("a",{class:"header-anchor",href:"#usethrottlefn","aria-label":'Permalink to "useThrottleFn"'},"​")],-1)),e(n,{fn:"useThrottleFn"}),a[2]||(a[2]=s("p",null,"Throttle execution of a function. Especially useful for rate limiting execution of handlers on events like resize and scroll.",-1)),a[3]||(a[3]=s("blockquote",null,[s("p",null,"Throttle is a spring that throws balls: after a ball flies out it needs some time to shrink back, so it cannot throw any more balls unless it's ready.")],-1)),a[4]||(a[4]=s("h2",{id:"demo",tabindex:"-1"},[i("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1)),e(h,null,{default:u(()=>[a[0]||(a[0]=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/demo.vue",target:"_blank"},"source")],-1)),e(v)]),_:1}),a[5]||(a[5]=p(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useThrottleFn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">@vueuse/core</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> throttledFn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useThrottleFn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // do something, it will be called at most 1 time per second</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">window</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">addEventListener</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">resize</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> throttledFn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h2 id="recommended-reading" tabindex="-1">Recommended Reading <a class="header-anchor" href="#recommended-reading" aria-label="Permalink to &quot;Recommended Reading&quot;">​</a></h2><ul><li><a href="https://redd.one/blog/debounce-vs-throttle" target="_blank" rel="noreferrer"><strong>Debounce vs Throttle</strong>: Definitive Visual Guide</a></li></ul><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-label="Permalink to &quot;Type Declarations&quot;">​</a></h2>`,5)),a[6]||(a[6]=s("details",null,[s("summary",{op50:"",italic:"","cursor-pointer":"","select-none":""},"Show Type Declarations"),s("div",{class:"language-typescript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"typescript"),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"/**")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * Throttle execution of a function. Especially useful for rate limiting")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * execution of handlers on events like resize and scroll.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"   fn"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *                                    to `callback` when the throttled-function is executed.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"   ms"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *                                    (default value: 200)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," [trailing] if true, call fn again after the time is up (default value: false)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," [leading] if true, call fn on the leading edge of the ms timeout (default value: true)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"param"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," [rejectOnCancel] if true, reject the last call if it's been cancel (default value: false)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," *")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," * "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"@"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"return"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  A new, throttled, function.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," declare"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," function"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," useThrottleFn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," extends"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," FunctionArgs"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  fn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  ms"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"MaybeRefOrGetter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"number"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  trailing"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  leading"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  rejectOnCancel"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"boolean"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"):"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," PromisifyFn"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"T"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])])])],-1)),a[7]||(a[7]=p('<h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/index.ts" target="_blank" rel="noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/demo.vue" target="_blank" rel="noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/index.md" target="_blank" rel="noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',3)),e(k,{fn:"useThrottleFn"}),a[8]||(a[8]=s("h2",{id:"changelog",tabindex:"-1"},[i("Changelog "),s("a",{class:"header-anchor",href:"#changelog","aria-label":'Permalink to "Changelog"'},"​")],-1)),e(t,{fn:"useThrottleFn"})])}}});export{N as __pageData,O as default};