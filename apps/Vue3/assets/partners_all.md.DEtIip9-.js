import{d as m,r as p,o as l,c,x as t,a as o,h as u,i as d,V as f,F as v,_ as h}from"./chunks/framework.B2oIMGqn.js";import{_ as g,a as x,b as P}from"./chunks/PartnerJoin.vue_vue_type_script_setup_true_lang.UAFYUOfw.js";import{n as V}from"./chunks/theme.DRiGV4ae.js";import"./chunks/CallToActionSection.BxA3yRQY.js";import"./chunks/partners.BEPWSfV6.js";import"./chunks/PartnerCard.iqvHWBLz.js";import"./chunks/utils.WtiANs38.js";const w={class:"container"},B=m({__name:"PartnerAll",setup(i){const a=p("");function s(r){return n(r.name,a.value)||r.region.some(e=>n(e,a.value))}function n(r,e){return r.toLowerCase().includes(e.toLowerCase())}return(r,e)=>(l(),c(v,null,[t(g,{title:"Browser All Partners"}),o("div",w,[t(u(V),{class:"icon"}),d(o("input",{placeholder:"Search partners by name or region","onUpdate:modelValue":e[0]||(e[0]=_=>a.value=_)},null,512),[[f,a.value]]),t(x,{filter:s})]),t(P)],64))}}),$=h(B,[["__scopeId","data-v-10c41961"]]),F=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"partners/all.md","filePath":"partners/all.md"}'),b={name:"partners/all.md"},I=Object.assign(b,{setup(i){return(a,s)=>(l(),c("div",null,[t($)]))}});export{F as __pageData,I as default};