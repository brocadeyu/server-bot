import{r as i,x as v}from"./vue.CliZxonC.js";import{b as y,c as b}from"./filters.DuwCkQ5C.js";function w(l,p,h={}){const{eventFilter:g=y,...r}=h,f=b(g,p);let n,o,u;if(r.flush==="sync"){const t=i(!1);o=()=>{},n=e=>{t.value=!0,e(),t.value=!1},u=v(l,(...e)=>{t.value||f(...e)},r)}else{const t=[],e=i(0),a=i(0);o=()=>{e.value=a.value},t.push(v(l,()=>{a.value++},{...r,flush:"sync"})),n=s=>{const c=a.value;s(),e.value+=a.value-c},t.push(v(l,(...s)=>{const c=e.value>0&&e.value===a.value;e.value=0,a.value=0,!c&&f(...s)},r)),u=()=>{t.forEach(s=>s())}}return{stop:u,ignoreUpdates:n,ignorePrevAsyncUpdates:o}}export{w};