import{_ as n,a as r,b as p}from"./chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.CqAlsCcT.js";import{_ as d}from"./chunks/CodeToggle.vue_vue_type_style_index_0_lang.Cpi1l5_w.js";import{_ as g}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import{c as y,a as i,b as s,d as a,w as o,e as A,o as c}from"./chunks/vue.CliZxonC.js";import"./chunks/configurable.C7TV9RQd.js";import"./chunks/utils.B5e_uQLX.js";import"./chunks/index.CGnDy86n.js";import"./chunks/index.BaP1Ew-9.js";import"./chunks/index.BaH89Rsy.js";import"./chunks/index._Xu8Z1If.js";import"./chunks/index.DjB8f8Dt.js";import"./chunks/filters.DuwCkQ5C.js";import"./chunks/index.C2bU4x7s.js";import"./chunks/index.CFoihoJv.js";const U=JSON.parse('{"title":"toObserver","description":"","frontmatter":{"category":"@RxJS"},"headers":[],"relativePath":"rxjs/toObserver/index.md","filePath":"rxjs/toObserver/index.md"}'),D={name:"rxjs/toObserver/index.md"};function B(u,h,m,b,f,v){const k=n,t=d,l=r,e=p;return c(),y("div",null,[h[1]||(h[1]=i("h1",{id:"toobserver",tabindex:"-1"},[s("toObserver "),i("a",{class:"header-anchor",href:"#toobserver","aria-label":'Permalink to "toObserver"'},"​")],-1)),a(k,{fn:"toObserver"}),h[2]||(h[2]=i("p",null,[s("Sugar function to convert a "),i("code",null,"ref"),s(" into an RxJS "),i("a",{href:"https://rxjs.dev/guide/observer",target:"_blank",rel:"noreferrer"},"Observer"),s(". Available in the "),i("a",{href:"/rxjs/README"},"@vueuse/rxjs"),s(" add-on.")],-1)),h[3]||(h[3]=i("h2",{id:"usage",tabindex:"-1"},[s("Usage "),i("a",{class:"header-anchor",href:"#usage","aria-label":'Permalink to "Usage"'},"​")],-1)),a(t,null,{default:o(()=>h[0]||(h[0]=[i("div",{class:"code-block-ts"},[i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," from"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," fromEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," toObserver"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useSubscription"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@vueuse/rxjs"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," interval"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"rxjs"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," mapTo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," startWith"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," takeUntil"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," withLatestFrom"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"rxjs/operators"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ref"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vue"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"count"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ref"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"button"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ref"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}},"HTMLButtonElement"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">("),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"useSubscription"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  interval"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1000"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"pipe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      mapTo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      takeUntil"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"fromEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"button"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"click"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      withLatestFrom"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"from"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"count"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"pipe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"startWith"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"))),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"((["),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"curr"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," total"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"])"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," curr"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," total"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"subscribe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"toObserver"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"count"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")),"),i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," // same as ).subscribe(val => (count.value = val))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")])])])])],-1),i("div",{class:"code-block-js"},[i("div",{class:"language-js vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"js"),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code",style:{"--shiki-light":"#393a34","--shiki-dark":"#dbd7caee","--shiki-light-bg":"#ffffff","--shiki-dark-bg":"#121212"},tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," from"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," fromEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," toObserver"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," useSubscription"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"@vueuse/rxjs"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," interval"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"rxjs"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  mapTo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  startWith"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  takeUntil"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  withLatestFrom"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"rxjs/operators"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ref"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vue"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," count"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ref"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"const"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," button"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," ref"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"useSubscription"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"  interval"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1000"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"pipe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      mapTo"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      takeUntil"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"fromEvent"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"button"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"click"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      withLatestFrom"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"from"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"count"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"pipe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"startWith"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"))),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"      map"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"((["),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"curr"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," total"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"])"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," =>"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," curr"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," total"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    ."),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"subscribe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"toObserver"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"count"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")])])])])],-1)])),_:1}),h[4]||(h[4]=A('<h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-label="Permalink to &quot;Type Declarations&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> declare</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> toObserver</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> NextObserver</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/rxjs/toObserver/index.ts" target="_blank" rel="noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/rxjs/toObserver/index.md" target="_blank" rel="noreferrer">Docs</a></p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',5)),a(l,{fn:"toObserver"}),h[5]||(h[5]=i("h2",{id:"changelog",tabindex:"-1"},[s("Changelog "),i("a",{class:"header-anchor",href:"#changelog","aria-label":'Permalink to "Changelog"'},"​")],-1)),a(e,{fn:"toObserver"})])}const L=g(D,[["render",B]]);export{U as __pageData,L as default};