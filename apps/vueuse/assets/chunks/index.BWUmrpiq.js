import{t as c}from"./configurable.C7TV9RQd.js";import{f as h}from"./vue.CliZxonC.js";const $=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,p=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function w(t,e,r,s){let o=t<12?"AM":"PM";return s&&(o=o.split("").reduce((l,n)=>l+=`${n}.`,"")),r?o.toLowerCase():o}function i(t){const e=["th","st","nd","rd"],r=t%100;return t+(e[(r-20)%10]||e[r]||e[0])}function Y(t,e,r={}){const s=t.getFullYear(),o=t.getMonth(),l=t.getDate(),n=t.getHours(),a=t.getMinutes(),m=t.getSeconds(),g=t.getMilliseconds(),D=t.getDay(),u=r.customMeridiem??w,d={Yo:()=>i(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>o+1,Mo:()=>i(o+1),MM:()=>`${o+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(c(r.locales),{month:"short"}),MMMM:()=>t.toLocaleDateString(c(r.locales),{month:"long"}),D:()=>String(l),Do:()=>i(l),DD:()=>`${l}`.padStart(2,"0"),H:()=>String(n),Ho:()=>i(n),HH:()=>`${n}`.padStart(2,"0"),h:()=>`${n%12||12}`.padStart(1,"0"),ho:()=>i(n%12||12),hh:()=>`${n%12||12}`.padStart(2,"0"),m:()=>String(a),mo:()=>i(a),mm:()=>`${a}`.padStart(2,"0"),s:()=>String(m),so:()=>i(m),ss:()=>`${m}`.padStart(2,"0"),SSS:()=>`${g}`.padStart(3,"0"),d:()=>D,dd:()=>t.toLocaleDateString(c(r.locales),{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(c(r.locales),{weekday:"short"}),dddd:()=>t.toLocaleDateString(c(r.locales),{weekday:"long"}),A:()=>u(n,a),AA:()=>u(n,a,!1,!0),a:()=>u(n,a,!0),aa:()=>u(n,a,!0,!0)};return e.replace(p,(S,M)=>{var f;return M??((f=d[S])==null?void 0:f.call(d))??S})}function H(t){if(t===null)return new Date(Number.NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match($);if(e){const r=e[2]-1||0,s=(e[7]||"0").substring(0,3);return new Date(e[1],r,e[3]||1,e[4]||0,e[5]||0,e[6]||0,s)}}return new Date(t)}function L(t,e="HH:mm:ss",r={}){return h(()=>Y(H(c(t)),c(e),r))}export{Y as f,L as u};