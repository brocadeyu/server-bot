"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["3265"],{24873:function(e,n,s){s.r(n),s.d(n,{default:function(){return h}});var r=s(55367),i=s(26971);function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h2:"h2",h3:"h3",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"securitysri",children:["security.sri",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SriOptions = {\n  enable?: 'auto' | boolean;\n  algorithm?: 'sha256' | 'sha384' | 'sha512';\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Adding an ",(0,r.jsx)(n.code,{children:"integrity"})," attribute to ",(0,r.jsx)(n.code,{children:"<script>"})," and ",(0,r.jsx)(n.code,{children:"<link>"})," tags introduced by HTML allows the browser to verify the integrity of the introduced resource, thus preventing tampering with the downloaded resource."]}),"\n",(0,r.jsxs)(n.h2,{id:"what-is-sri",children:["What is SRI",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-sri",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Subresource Integrity (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match."}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"<script>"})," tags, the result is to refuse to execute the code; for CSS links, the result is not to load the styles."]}),"\n",(0,r.jsxs)(n.p,{children:["For more on subresource integrity, see ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When using SRI, you need to enable ",(0,r.jsx)(n.a,{href:"/config/html/crossorigin",children:"html.crossorigin"}),", which ensures that resources can be properly validated with SRI during cross-origin loading."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    sri: {\n      enable: 'auto',\n    },\n  },\n  html: {\n    crossorigin: 'anonymous',\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<script>"})," and ",(0,r.jsx)(n.code,{children:"<link>"})," tags generated by Rsbuild will include the ",(0,r.jsx)(n.code,{children:"integrity"})," and ",(0,r.jsx)(n.code,{children:"crossorigin"})," attributes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.com/static/js/index.js"\n  crossorigin="anonymous"\n  integrity="sha384-d8fhhhTWXaPPIEMw+POJ9hqCIRvsFbegq/oef7k9R8Rpb8Dy95B2THPOECdZoLDF"\n><\/script>\n\n<link\n  href="https://cdn.com/static/css/index.css"\n  rel="stylesheet"\n  crossorigin="anonymous"\n  integrity="sha384-8U9HYzsHbf55cFZyiWIE29+QPYQ9WO+U5uT/ViFw0TOwM2Fbbb74ZegzRV/nvwrD"\n/>\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"note",children:["Note",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#note",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"security.sri"})," in Rsbuild will only apply to the tags generated by Rsbuild and will not apply to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The original tags in the HTML template."}),"\n",(0,r.jsx)(n.li,{children:"The tags injected asynchronously by Rspack."}),"\n",(0,r.jsx)(n.li,{children:"The tags inserted through client JavaScript code."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Rsbuild will handle the following ",(0,r.jsx)(n.code,{children:"<link>"})," tags:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'<link rel="preload">'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'<link rel="stylesheet">'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'<link rel="modulepreload">'})}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"options",children:["Options",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"enable",children:["enable",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'auto' | boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to enable SRI. ",(0,r.jsx)(n.code,{children:"'auto'"})," means it's enabled in production mode and disabled in development mode."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    sri: {\n      enable: 'auto',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Typically, you do not need to enable SRI in development mode."}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"algorithm",children:["algorithm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#algorithm",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'sha256' | 'sha384' | 'sha512'"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"'sha384'"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Specifies the algorithm used to compute the integrity hash."}),"\n",(0,r.jsxs)(n.p,{children:["For example, set to ",(0,r.jsx)(n.code,{children:"sha512"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    sri: {\n      algorithm: 'sha512',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The generated value of integrity attribute will be prefixed with ",(0,r.jsx)(n.code,{children:"sha512-"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.com/static/js/index.js"\n  crossorigin="anonymous"\n  integrity="sha512-ShExVSs5q/j3ZBI/PeS0niJ4mBxh6tc08QN1uofI1dmGAx7ETMh8/VDddGRewxXQhjCgdgAnaiY3BfnWrUSmZA=="\n><\/script>\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Reference: ",(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/SRI/#cryptographic-hash-functions",target:"_blank",rel:"noopener noreferrer",children:"Cryptographic hash functions"}),"."]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}let h=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fsecurity%2Fsri.mdx"]={toc:[{text:"What is SRI",id:"what-is-sri",depth:2},{text:"Example",id:"example",depth:2},{text:"Note",id:"note",depth:2},{text:"Options",id:"options",depth:2},{text:"enable",id:"enable",depth:3},{text:"algorithm",id:"algorithm",depth:3}],title:"security.sri",frontmatter:{}}}}]);