import{d as c}from"./configurable.C7TV9RQd.js";import{u as s}from"./index.C2bU4x7s.js";import{u as l}from"./index.BZhC5QYF.js";import{r as i}from"./vue.CliZxonC.js";function O(a={}){const{window:e=c}=a,o=l(()=>e&&"screen"in e&&"orientation"in e.screen),n=o.value?e.screen.orientation:{},t=i(n.type),r=i(n.angle||0);return o.value&&s(e,"orientationchange",()=>{t.value=n.type,r.value=n.angle}),{isSupported:o,orientation:t,angle:r,lockOrientation:u=>o.value&&typeof n.lock=="function"?n.lock(u):Promise.reject(new Error("Not supported")),unlockOrientation:()=>{o.value&&typeof n.unlock=="function"&&n.unlock()}}}export{O as u};