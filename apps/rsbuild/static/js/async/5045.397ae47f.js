"use strict";(self.webpackChunkrsbuild_website=self.webpackChunkrsbuild_website||[]).push([["5045"],{58282:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var s=r(55367),t=r(26971);function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h2:"h2",h3:"h3"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcetransformimport",children:["source.transformImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcetransformimport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type TransformImport =\n  | Array<{\n      libraryName: string;\n      libraryDirectory?: string;\n      style?: string | boolean;\n      styleLibraryDirectory?: string;\n      camelToDashComponentName?: boolean;\n      transformToDefaultImport?: boolean;\n      customName?: string;\n      customStyleName?: string;\n    }>\n  | Function;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Transform the import path, which can be used to modularly import the subpath of third-party packages. The functionality is similar to ",(0,s.jsx)(n.a,{href:"https://npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"import-antd-on-demand",children:["Import antd on demand",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import-antd-on-demand",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When using the ",(0,s.jsx)(n.a,{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"antd"})," component library (versions below v5), you can import components on demand with the following config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'antd',\n        libraryDirectory: 'es',\n        style: 'css',\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The source code is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Button } from 'antd';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Will be transformed into:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import Button from 'antd/es/button';\nimport 'antd/es/button/style';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"import-lodash-on-demand",children:["Import lodash on demand",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import-lodash-on-demand",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When using lodash, you can automatically refer to the subpath through ",(0,s.jsx)(n.code,{children:"transformImport"})," to reduce bundle size."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'lodash',\n        customName: 'lodash/{{ member }}',\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The source code is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { get } from 'lodash';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import get from 'lodash/get';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Please avoid the following usage, otherwise all of lodash's code will be imported:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import _ from 'lodash';\nimport lodash from 'lodash';\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"scope",children:["Scope",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scope",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"transformImport"})," is only applicable to modules compiled by Rsbuild. Note that Rsbuild does not compile JavaScript files in the node_modules by default. This means that the code in the node_modules directory will not be processed by ",(0,s.jsx)(n.code,{children:"transformImport"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to process the code in node_modules through ",(0,s.jsx)(n.code,{children:"transformImport"}),", please add the relevant modules to the ",(0,s.jsx)(n.a,{href:"/config/source/include",children:"source.include"})," config."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [/node_modules[\\\\/]some-package[\\\\/]/],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"options",children:["Options",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"libraryname",children:["libraryName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#libraryname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The original import path that needs to be transformed."}),"\n",(0,s.jsxs)(n.h3,{id:"librarydirectory",children:["libraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#librarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"'lib'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Used to splice the transformed path, the splicing rule is ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}"}),", where member is the imported member."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"style",children:["style",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#style",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether to import related styles. If it is ",(0,s.jsx)(n.code,{children:"true"}),", the path ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}/style"})," will be imported. If it is ",(0,s.jsx)(n.code,{children:"false"})," or ",(0,s.jsx)(n.code,{children:"undefined"}),", the style will not be imported."]}),"\n",(0,s.jsxs)(n.p,{children:["When it is set to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/lib/button/style';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"stylelibrarydirectory",children:["styleLibraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylelibrarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This configuration is used to splice the import path when importing styles. If this configuration is specified, the ",(0,s.jsx)(n.code,{children:"style"})," configuration option will be ignored. The spliced import path is ",(0,s.jsx)(n.code,{children:"${libraryName}/${styleLibraryDirectory}/${member}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When it is set to ",(0,s.jsx)(n.code,{children:"styles"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/styles/button';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"cameltodashcomponentname",children:["camelToDashComponentName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cameltodashcomponentname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to convert camelCase imports to kebab-case."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { ButtonGroup } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// set to true:\nimport ButtonGroup from 'foo/button-group';\n// set to false:\nimport ButtonGroup from 'foo/ButtonGroup';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"transformtodefaultimport",children:["transformToDefaultImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transformtodefaultimport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to convert import statements to default imports."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// set to true:\nimport Button from 'foo/button';\n// set to false:\nimport { Button } from 'foo/button';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"customname",children:["customName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Customize the transformed path."}),"\n",(0,s.jsxs)(n.p,{children:["For example, the following config will transform ",(0,s.jsx)(n.code,{children:"import { foo } from 'my-lib'"})," into ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'my-lib',\n        customName: `my-lib/{{ member }}`,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In addition, you can also declare the format of the path after transformation, such as setting it to ",(0,s.jsx)(n.code,{children:"my-lib/{{ camelCase member }}"})," to convert member into camel case."]}),"\n",(0,s.jsx)(n.p,{children:"The following formats are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kebabCase"}),": lowercase letters, words joined by hyphens. For example: ",(0,s.jsx)(n.code,{children:"my-variable-name"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snakeCase"}),": lowercase letters, words joined by underscores. For example: ",(0,s.jsx)(n.code,{children:"my_variable_name"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"camelCase"}),": first letter lowercase, the first letter of each following word uppercase. For example: ",(0,s.jsx)(n.code,{children:"myVariableName"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upperCase"}),": uppercase letters, other characters unchanged. For example: ",(0,s.jsx)(n.code,{children:"MY-VARIABLE-NAME"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lowerCase"}),": lowercase letters, other characters unchanged. For example: ",(0,s.jsx)(n.code,{children:"my-variable-name"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"customstylename",children:["customStyleName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customstylename",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Customize the transformed style path, the usage is consistent with ",(0,s.jsx)(n.code,{children:"customName"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"transformImport"})," can be a function, it will accept the previous value, and you can modify it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: (imports) => {\n      return imports.filter((data) => data.libraryName !== 'antd');\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also return a new value as the final result in the function, which will replace the previous value."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: () => {\n      return [\n        {\n          libraryName: 'antd',\n          libraryDirectory: 'es',\n          style: 'css',\n        },\n      ];\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}let l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfig%2Fsource%2Ftransform-import.mdx"]={toc:[{text:"Example",id:"example",depth:2},{text:"Import antd on demand",id:"import-antd-on-demand",depth:3},{text:"Import lodash on demand",id:"import-lodash-on-demand",depth:3},{text:"Scope",id:"scope",depth:2},{text:"Options",id:"options",depth:2},{text:"libraryName",id:"libraryname",depth:3},{text:"libraryDirectory",id:"librarydirectory",depth:3},{text:"style",id:"style",depth:3},{text:"styleLibraryDirectory",id:"stylelibrarydirectory",depth:3},{text:"camelToDashComponentName",id:"cameltodashcomponentname",depth:3},{text:"transformToDefaultImport",id:"transformtodefaultimport",depth:3},{text:"customName",id:"customname",depth:3},{text:"customStyleName",id:"customstylename",depth:3},{text:"Function Type",id:"function-type",depth:2}],title:"source.transformImport",frontmatter:{}}}}]);