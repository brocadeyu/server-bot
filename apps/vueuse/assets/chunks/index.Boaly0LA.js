import{w as h}from"./index._Xu8Z1If.js";function b(e,c,...[l]){const{flush:n="sync",deep:f=!1,immediate:u=!0,direction:o="both",transform:a={}}=l||{},r=[],p="ltr"in a&&a.ltr||(t=>t),i="rtl"in a&&a.rtl||(t=>t);return(o==="both"||o==="ltr")&&r.push(h(e,t=>{r.forEach(s=>s.pause()),c.value=p(t),r.forEach(s=>s.resume())},{flush:n,deep:f,immediate:u})),(o==="both"||o==="rtl")&&r.push(h(c,t=>{r.forEach(s=>s.pause()),e.value=i(t),r.forEach(s=>s.resume())},{flush:n,deep:f,immediate:u})),()=>{r.forEach(t=>t.stop())}}export{b as s};