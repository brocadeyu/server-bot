import{_ as m,a as p,b as c}from"./chunks/PartnerJoin.vue_vue_type_script_setup_true_lang.UAFYUOfw.js";import{P as _}from"./chunks/PartnerCard.iqvHWBLz.js";import{P as d}from"./chunks/PageShowcaseListLayout.By4-qtel.js";import{d as u}from"./chunks/partners.BEPWSfV6.js";import{d as f,r as h,E as P,o as n,e as s,w as a,x as r,f as g,c as x}from"./chunks/framework.B2oIMGqn.js";import"./chunks/CallToActionSection.BxA3yRQY.js";import"./chunks/utils.WtiANs38.js";const k=f({__name:"PartnerLanding",setup(l){const e=h(null);return P(()=>{const t=u.filter(o=>o.platinum);e.value=t[Math.floor(Math.random()*t.length)]}),(t,o)=>(n(),s(d,{spotlightTitle:"Partner Spotlight",featuredTitle:"Featured Partners",browseLinkText:"Browse All Partners",browseLinkUrl:"./all.html"},{hero:a(()=>[r(m)]),spotlight:a(()=>[e.value?(n(),s(_,{key:0,hero:"",data:e.value},null,8,["data"])):g("",!0)]),"featured-list":a(()=>[r(p,{filter:i=>i.platinum,showLinkToAll:""},null,8,["filter"])]),join:a(()=>[r(c)]),_:1}))}}),$=JSON.parse('{"title":"Vue Partners","description":"","frontmatter":{"page":true,"footer":false,"title":"Vue Partners"},"headers":[],"relativePath":"partners/index.md","filePath":"partners/index.md"}'),w={name:"partners/index.md"},M=Object.assign(w,{setup(l){return(e,t)=>(n(),x("div",null,[r(k)]))}});export{$ as __pageData,M as default};