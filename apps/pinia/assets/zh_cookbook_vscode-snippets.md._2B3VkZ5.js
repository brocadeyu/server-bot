import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.DS4GivxB.js";const o=JSON.parse('{"title":"VS Code 代码片段","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cookbook/vscode-snippets.md","filePath":"zh/cookbook/vscode-snippets.md"}'),h={name:"zh/cookbook/vscode-snippets.md"};function k(p,s,l,e,E,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="VS-Code-代码片段" tabindex="-1">VS Code 代码片段 <a class="header-anchor" href="#VS-Code-代码片段" aria-label="Permalink to &quot;VS Code 代码片段&quot;">​</a></h1><p>有一些代码片段可以让你在 VS Code 中更轻松地使用 Pinia。</p><p>通过 <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd> / <kbd>⇧</kbd> <kbd>⌃</kbd> <kbd>P</kbd> 然后输入 <code>Snippets: Configure User Snippets</code> 就可以管理用户代码片段。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">{</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">  &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">Pinia Options Store Boilerplate</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">scope</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">javascript,typescript</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">prefix</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia-options</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">body</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">import { defineStore, acceptHMRUpdate } from &#39;pinia&#39;</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">export const use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store = defineStore(&#39;$TM_FILENAME_BASE&#39;, {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> state: () =&gt; ({</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   $0</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> }),</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> getters: {},</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> actions: {},</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">})</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">if (import.meta.hot) {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> import.meta.hot.accept(acceptHMRUpdate(use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store, import.meta.hot))</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">}</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">    ],</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">description</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">Bootstrap the code needed for a Vue.js Pinia Options Store file</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  },</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">  &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">Pinia Setup Store Boilerplate</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">scope</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">javascript,typescript</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">prefix</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia-setup</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">body</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">import { defineStore, acceptHMRUpdate } from &#39;pinia&#39;</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">export const use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store = defineStore(&#39;$TM_FILENAME_BASE&#39;, () =&gt; {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> $0</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> return {}</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">})</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">if (import.meta.hot) {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> import.meta.hot.accept(acceptHMRUpdate(use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store, import.meta.hot))</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">}</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">      &quot;&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">    ],</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">description</span><span style="--shiki-dark:#97E2F2;--shiki-light:#99841877;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">Bootstrap the code needed for a Vue.js Pinia Setup Store file</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695977;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div>`,4)]))}const g=i(h,[["render",k]]);export{o as __pageData,g as default};