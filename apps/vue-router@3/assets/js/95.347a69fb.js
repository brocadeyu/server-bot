(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{607:function(t,s,a){"use strict";a.r(s);var n=a(49),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"навигационные-хуки"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#навигационные-хуки"}},[t._v("#")]),t._v(" Навигационные хуки")]),t._v(" "),a("p",[t._v("Как следует из названия, навигационные хуки "),a("code",[t._v("vue-router")]),t._v(" используются для перенаправлений или отмены навигационных переходов. Есть несколько способов внедрить навигационный хук: глобально, для конкретного маршрута, или для конкретного компонента.")]),t._v(" "),a("p",[t._v("Следует помнить, что "),a("strong",[t._v("изменение параметров маршрута не вызывает выполнения навигационных хуков enter/leave")]),t._v(". Вы можете добавить "),a("RouterLink",{attrs:{to:"/ru/guide/essentials/dynamic-matching.html#отсnеживание-изменений-параметров"}},[t._v("watch на объект "),a("code",[t._v("$route")])]),t._v(" для отслеживания этих изменений, или использовать хук "),a("code",[t._v("beforeRouteUpdate")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"глобальные-хуки-до-навигационных-хуков"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#глобальные-хуки-до-навигационных-хуков"}},[t._v("#")]),t._v(" Глобальные хуки (до навигационных хуков)")]),t._v(" "),a("p",[t._v("Глобальный хук можно зарегистрировать через "),a("code",[t._v("router.beforeEach")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Глобальные навигационные хуки вызываются в порядке их создания при каждом навигационном переходе. Допускается асинхронное разрешение хуков — в этом случае переход считается "),a("strong",[t._v("незавершённым")]),t._v(" до тех пор, пока не будут разрешены все хуки.")]),t._v(" "),a("p",[t._v("В каждый навигационный хук передаётся три параметра:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("to: Route")])]),t._v(": целевой "),a("RouterLink",{attrs:{to:"/ru/api/#объект-route"}},[t._v("объект Route")]),t._v(", к которому осуществляется переход.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("from: Route")])]),t._v(": текущий маршрут, с которого осуществляется переход к новому.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next: Function")])]),t._v(": функция, вызов которой "),a("strong",[t._v("разрешает")]),t._v(" хук. В зависимости от переданных в "),a("code",[t._v("next")]),t._v(" аргументов, результатом будет:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("next()")])]),t._v(": переход к следующему хуку в цепочке. Если хуков больше нет, переход считается "),a("strong",[t._v("подтверждённым")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next(false)")])]),t._v(': отмена перехода. Если URL был изменён (вручную пользователем, или кнопкой "назад"), он будет сброшен на соответствующий маршрут '),a("code",[t._v("from")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next('/')")]),t._v(" или "),a("code",[t._v("next({ path: '/' })")])]),t._v(": перенаправление на другой маршрут. Текущий переход будет отменён, и процесс начнётся заново для нового маршрута. Вы можете передать любой объект местоположения в "),a("code",[t._v("next")]),t._v(", который позволяет вам указывать опции такие как "),a("code",[t._v("replace: true")]),t._v(", "),a("code",[t._v("name: 'home'")]),t._v(" и любой другой параметр используемый во "),a("RouterLink",{attrs:{to:"/ru/api/#to"}},[t._v("входном параметре "),a("code",[t._v("to")]),t._v(" компонента "),a("code",[t._v("router-link")])]),t._v(" или "),a("RouterLink",{attrs:{to:"/ru/api/#router-push"}},[a("code",[t._v("router.push")])])],1)]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("next(error)")])]),t._v(": (добавлено в версии 2.4.0+) если аргумент, переданный "),a("code",[t._v("next")]),t._v(" является экземпляром "),a("code",[t._v("Error")]),t._v(", навигация будет прервана и ошибка будет передана в коллбэк, зарегистрированный через "),a("RouterLink",{attrs:{to:"/ru/api/#router-onerror"}},[a("code",[t._v("router.onError()")])]),t._v(".")],1)])])])]),t._v(" "),a("p",[a("strong",[t._v("Убедитесь, что функция "),a("code",[t._v("next")]),t._v(" будет вызываться в навигационном хуке только 1 раз в любом случае. Вызовы могут встречаться несколько раз, но важно чтобы они не пересекались логически, иначе хук никогда не разрешится или выдаст ошибки.")]),t._v(" Вот пример перенаправления пользователя на страницу "),a("code",[t._v("/login")]),t._v(" если он не авторизован:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ПЛОХО")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isAuthenticated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// если пользователь не авторизован, то `next` будет вызываться дважды")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ХОРОШО")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isAuthenticated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"глобальные-хуки-разрешения-перехода"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#глобальные-хуки-разрешения-перехода"}},[t._v("#")]),t._v(" Глобальные хуки разрешения перехода")]),t._v(" "),a("p",[t._v("Вы можете зарегистрировать глобальный хук с помощью "),a("code",[t._v("router.beforeResolve")]),t._v(". Это похоже на "),a("code",[t._v("router.beforeEach")]),t._v(", с той разницей, что разрешающий хук будет вызван непосредственно перед подтверждением навигации, "),a("strong",[t._v("после того, как будут разрешены все хуки компонента и асинхронные компоненты для маршрута")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"глобальные-хуки-завершения-перехода"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#глобальные-хуки-завершения-перехода"}},[t._v("#")]),t._v(" Глобальные хуки завершения перехода")]),t._v(" "),a("p",[t._v("Можно также зарегистрировать глобальные хуки, вызываемые после завершения перехода. Однако, в отличие от сторожевых хуков, в них не передаётся функция "),a("code",[t._v("next")]),t._v(", и на навигацию они повлиять не могут:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"хуки-для-конкретных-маршрутов"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#хуки-для-конкретных-маршрутов"}},[t._v("#")]),t._v(" Хуки для конкретных маршрутов")]),t._v(" "),a("p",[t._v("Навигационные хуки "),a("code",[t._v("beforeEnter")]),t._v(" можно указать напрямую для конкретного маршрута в его конфигурации:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeEnter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Эти хуки имеют точно такую же сигнатуру, как и глобальные хуки.")]),t._v(" "),a("h2",{attrs:{id:"хуки-для-конкретных-компонентов"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#хуки-для-конкретных-компонентов"}},[t._v("#")]),t._v(" Хуки для конкретных компонентов")]),t._v(" "),a("p",[t._v("Наконец, навигационный хук можно указать и непосредственно в компоненте (том, что указан в конфигурации маршрута), используя следующие опции:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("beforeRouteEnter")])]),t._v(" "),a("li",[a("code",[t._v("beforeRouteUpdate")])]),t._v(" "),a("li",[a("code",[t._v("beforeRouteLeave")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// вызывается до подтверждения пути, соответствующего этому компоненту.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// НЕ ИМЕЕТ доступа к контексту экземпляра компонента `this`,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// так как к моменту вызова экземпляр ещё не создан!")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// вызывается когда маршрут, что рендерит этот компонент изменился,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// но этот компонент будет повторно использован в новом маршруте.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Например, для маршрута с динамическими параметрами `/foo/:id`, когда мы")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// перемещаемся между `/foo/1` и `/foo/2`, экземпляр того же компонента `Foo`")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// будет использован повторно, и этот хук будет вызван когда это случится.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Также имеется доступ в `this` к экземпляру компонента.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// вызывается перед переходом от пути, соответствующего текущему компоненту;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// имеет доступ к контексту экземпляра компонента `this`.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Хук "),a("code",[t._v("beforeRouteEnter")]),t._v(" "),a("strong",[t._v("НЕ ИМЕЕТ")]),t._v(" доступа к "),a("code",[t._v("this")]),t._v(", так как к моменту его вызова навигация ещё не подтверждена, а значит и экземпляр компонента ещё не создан.")]),t._v(" "),a("p",[t._v("Тем не менее, доступ к экземпляру можно получить, передав коллбэк в "),a("code",[t._v("next")]),t._v(". Эта функция будет вызвана после подтверждения навигации, а экземпляр компонента будет передан в неё в качестве параметра:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// экземпляр компонента доступен как `vm`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Обратите внимание, что "),a("code",[t._v("beforeRouteEnter")]),t._v(" — единственный хук, который поддерживает передачу коллбэка в "),a("code",[t._v("next")]),t._v(". Для "),a("code",[t._v("beforeRouteUpdate")]),t._v(" и "),a("code",[t._v("beforeRouteLeave")]),t._v(", "),a("code",[t._v("this")]),t._v(" уже доступен, поэтому передача коллбэка не требуется и поэтому "),a("em",[t._v("не поддерживается")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// просто используйте `this`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Навигационный хук ухода со страницы")]),t._v(" обычно используется для предотвращения случайного ухода пользователя со страницы с несохранёнными изменениями. Навигацию можно отменить вызовом "),a("code",[t._v("next(false)")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" answer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Вы хотите уйти? У вас есть несохранённые изменения!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("При использовании примесей, которые будут добавлять навигационные хуки для компонента, убедитесь, что объявляете примесь "),a("strong",[t._v("после установки плагина vue-router")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"полная-цепочка-обработки-навигации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#полная-цепочка-обработки-навигации"}},[t._v("#")]),t._v(" Полная цепочка обработки навигации")]),t._v(" "),a("ol",[a("li",[t._v("Срабатывание навигации.")]),t._v(" "),a("li",[t._v("Вызов "),a("code",[t._v("beforeRouteLeave")]),t._v(" хуков в деактивируемых компонентах.")]),t._v(" "),a("li",[t._v("Вызов глобальных "),a("code",[t._v("beforeEach")]),t._v(" хуков.")]),t._v(" "),a("li",[t._v("Вызов "),a("code",[t._v("beforeRouteUpdate")]),t._v(" хука в переиспользуемых компонентах.")]),t._v(" "),a("li",[t._v("Вызов "),a("code",[t._v("beforeEnter")]),t._v(" в конфигурации маршрута.")]),t._v(" "),a("li",[t._v("Разрешение асинхронных компонентов для маршрута.")]),t._v(" "),a("li",[t._v("Вызов "),a("code",[t._v("beforeRouteEnter")]),t._v(" в активируемых компонентах.")]),t._v(" "),a("li",[t._v("Вызов глобальных "),a("code",[t._v("beforeResolve")]),t._v(" хуков.")]),t._v(" "),a("li",[t._v("Навигация подтверждена.")]),t._v(" "),a("li",[t._v("Вызов глобальных "),a("code",[t._v("afterEach")]),t._v(" хуков.")]),t._v(" "),a("li",[t._v("Выполняется обновление DOM.")]),t._v(" "),a("li",[t._v("Вызов коллбэков, переданных в "),a("code",[t._v("next")]),t._v(" в "),a("code",[t._v("beforeRouteEnter")]),t._v(" хуке с созданными экземплярами.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);