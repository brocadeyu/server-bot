import{_ as a,c as o,a2 as t,o as r}from"./chunks/framework.Cl57Dsmt.js";const u=JSON.parse('{"title":"Interface: RouteLocationNamedRaw","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/RouteLocationNamedRaw.md","filePath":"api/interfaces/RouteLocationNamedRaw.md"}'),n={name:"api/interfaces/RouteLocationNamedRaw.md"};function i(h,e,c,d,s,l){return r(),o("div",null,e[0]||(e[0]=[t('<p><a href="./../"><strong>API Documentation</strong></a> • <strong>Docs</strong></p><hr><p><a href="./../">API Documentation</a> / RouteLocationNamedRaw</p><h1 id="Interface-RouteLocationNamedRaw" tabindex="-1">Interface: RouteLocationNamedRaw <a class="header-anchor" href="#Interface-RouteLocationNamedRaw" aria-label="Permalink to &quot;Interface: RouteLocationNamedRaw&quot;">​</a></h1><p><strong><code>Internal</code></strong></p><p>Route Location that can infer the necessary params based on the name.</p><h2 id="Extends" tabindex="-1">Extends <a class="header-anchor" href="#Extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./RouteQueryAndHash.html"><code>RouteQueryAndHash</code></a>.<a href="./LocationAsRelativeRaw.html"><code>LocationAsRelativeRaw</code></a>.<a href="./RouteLocationOptions.html"><code>RouteLocationOptions</code></a></li></ul><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="force-" tabindex="-1">force? <a class="header-anchor" href="#force-" aria-label="Permalink to &quot;force?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>force</strong>: <code>boolean</code></p></blockquote><p>Triggers the navigation even if the location is the same as the current one. Note this will also add a new entry to the history unless <code>replace: true</code> is passed.</p><h4 id="Inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteLocationOptions.html"><code>RouteLocationOptions</code></a>.<a href="./RouteLocationOptions.html#force"><code>force</code></a></p><hr><h3 id="hash-" tabindex="-1">hash? <a class="header-anchor" href="#hash-" aria-label="Permalink to &quot;hash?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>hash</strong>: <code>string</code></p></blockquote><h4 id="Inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteQueryAndHash.html"><code>RouteQueryAndHash</code></a>.<a href="./RouteQueryAndHash.html#hash"><code>hash</code></a></p><hr><h3 id="name-" tabindex="-1">name? <a class="header-anchor" href="#name-" aria-label="Permalink to &quot;name?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>name</strong>: <a href="./../type-aliases/RouteRecordNameGeneric.html"><code>RouteRecordNameGeneric</code></a></p></blockquote><h4 id="Inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./LocationAsRelativeRaw.html"><code>LocationAsRelativeRaw</code></a>.<a href="./LocationAsRelativeRaw.html#name"><code>name</code></a></p><hr><h3 id="params-" tabindex="-1">params? <a class="header-anchor" href="#params-" aria-label="Permalink to &quot;params?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>params</strong>: <a href="./../type-aliases/RouteParamsRawGeneric.html"><code>RouteParamsRawGeneric</code></a></p></blockquote><h4 id="Inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./LocationAsRelativeRaw.html"><code>LocationAsRelativeRaw</code></a>.<a href="./LocationAsRelativeRaw.html#params"><code>params</code></a></p><hr><h3 id="path-" tabindex="-1">path? <a class="header-anchor" href="#path-" aria-label="Permalink to &quot;path?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>path</strong>: <code>undefined</code></p></blockquote><p>Ignored path property since we are dealing with a relative location. Only <code>undefined</code> is allowed.</p><h4 id="Inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./LocationAsRelativeRaw.html"><code>LocationAsRelativeRaw</code></a>.<a href="./LocationAsRelativeRaw.html#path"><code>path</code></a></p><hr><h3 id="query-" tabindex="-1">query? <a class="header-anchor" href="#query-" aria-label="Permalink to &quot;query?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>query</strong>: <a href="./../type-aliases/LocationQueryRaw.html"><code>LocationQueryRaw</code></a></p></blockquote><h4 id="Inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteQueryAndHash.html"><code>RouteQueryAndHash</code></a>.<a href="./RouteQueryAndHash.html#query"><code>query</code></a></p><hr><h3 id="replace-" tabindex="-1">replace? <a class="header-anchor" href="#replace-" aria-label="Permalink to &quot;replace?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>replace</strong>: <code>boolean</code></p></blockquote><p>Replace the entry in the history instead of pushing a new entry</p><h4 id="Inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteLocationOptions.html"><code>RouteLocationOptions</code></a>.<a href="./RouteLocationOptions.html#replace"><code>replace</code></a></p><hr><h3 id="state-" tabindex="-1">state? <a class="header-anchor" href="#state-" aria-label="Permalink to &quot;state?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>state</strong>: <a href="./HistoryState.html"><code>HistoryState</code></a></p></blockquote><p>State to save using the History API. This cannot contain any reactive values and some primitives like Symbols are forbidden. More info at <a href="https://developer.mozilla.org/en-US/docs/Web/API/History/state" target="_blank" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/History/state</a></p><h4 id="Inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteLocationOptions.html"><code>RouteLocationOptions</code></a>.<a href="./RouteLocationOptions.html#state"><code>state</code></a></p>',52)]))}const m=a(n,[["render",i]]);export{u as __pageData,m as default};