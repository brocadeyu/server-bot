"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["9768"],{55563:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var i=t(55367),s=t(26971);function l(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h2:"h2",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"htmltitle",children:["html.title",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltitle",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string ｜ Function"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"'Rsbuild App'"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Set the title tag of the HTML page."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If the HTML template used in the current project already includes the ",(0,i.jsx)(n.code,{children:"<title>"})," tag, the ",(0,i.jsx)(n.code,{children:"html.title"})," will not take effect.\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"string-usage",children:["String Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-usage",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"html.title"})," can be directly set as a string:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    title: 'Example',\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"title"})," tag generated in HTML will be:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<title>Example</title>\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"function-usage",children:["Function Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-usage",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type TitleFunction = ({ value: string; entryName: string }) => string | void;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"html.title"})," is of type Function, the function receives an object as the argument, and the object's values include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"value"}),": the default title configuration of Rsbuild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entryName"}),": the name of the current entry."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the MPA (multi-page application) scenario, you can return different ",(0,i.jsx)(n.code,{children:"title"})," strings based on the entry name, thus generating different ",(0,i.jsx)(n.code,{children:"title"})," tags for each page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    title({ entryName }) {\n      const titles = {\n        foo: 'Foo Page',\n        bar: 'Bar Page',\n      };\n      return titles[entryName] || 'Other Page';\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"unset-title-tag",children:["Unset ",(0,i.jsx)(n.code,{children:"<title>"})," Tag",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#unset-title-tag",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"html.title"})," is set to an empty string, Rsbuild will not inject the ",(0,i.jsx)(n.code,{children:"<title>"})," tag:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    title: '',\n  },\n};\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}let c=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfig%2Fhtml%2Ftitle.mdx"]={toc:[{text:"String Usage",id:"string-usage",depth:2},{text:"Function Usage",id:"function-usage",depth:2},{text:"Unset `<title>` Tag",id:"unset-title-tag",depth:2}],title:"html.title",frontmatter:{}}}}]);