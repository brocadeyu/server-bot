(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{564:function(t,a,s){"use strict";s.r(a);var n=s(49),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ナビゲーションの失敗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ナビゲーションの失敗"}},[t._v("#")]),t._v(" ナビゲーションの失敗")]),t._v(" "),s("blockquote",[s("p",[t._v("3.4.0の新機能")])]),t._v(" "),s("p",[s("code",[t._v("router-link")]),t._v(" を使用すると、ナビゲーションを開始するためにVue Routerは "),s("code",[t._v("router.push")]),t._v(" を呼び出します。ほとんどのリンクはユーザーを新しいページに移動させますが、ユーザーが同じページに留まる状況もいくつかあります。")]),t._v(" "),s("ul",[s("li",[t._v("すでにユーザーが移動したいページにいる")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ja/guide/advanced/navigation-guards.html"}},[t._v("ナビゲーションガード")]),t._v("が "),s("code",[t._v("next(false)")]),t._v(" の呼び出しによって移動を中止した")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ja/guide/advanced/navigation-guards.html"}},[t._v("ナビゲーションガード")]),t._v("がエラーを投げた、または "),s("code",[t._v("next(new Error())")]),t._v(" を呼び出した")],1)]),t._v(" "),s("p",[s("code",[t._v("router-link")]),t._v(" コンポーネントを使用している場合、"),s("strong",[t._v("これらの失敗はエラーとして記録されません")]),t._v("。しかし、 "),s("code",[t._v("router.push")]),t._v(" または "),s("code",[t._v("router.replace")]),t._v(" を使用している場合は、 "),s("em",[t._v('"Uncaught (in promise) Error"')]),t._v(" に続いて具体的なメッセージがコンソールに表示されることがあります。"),s("em",[t._v("ナビゲーションの失敗")]),t._v(" を区別する方法を理解しましょう。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("v3.2.0では、router.pushの2つのオプションのコールバック（ "),s("code",[t._v("onComplete")]),t._v(" と "),s("code",[t._v("onAbort")]),t._v(" ）を通して "),s("em",[t._v("ナビゲーションの失敗")]),t._v(" が明らかになっていました。バージョン3.1.0以降、 "),s("code",[t._v("onComplete")]),t._v(" / "),s("code",[t._v("onAbort")]),t._v(" コールバックが提供されていない場合、 "),s("code",[t._v("router.push")]),t._v(" と "),s("code",[t._v("router.replace")]),t._v(" は "),s("em",[t._v("Promise")]),t._v(" を返します。この "),s("em",[t._v("Promise")]),t._v(" は "),s("code",[t._v("onComplete")]),t._v(" の代わりにResolvedとなり、 "),s("code",[t._v("onAbort")]),t._v(" の代わりにRejectedとなります。")])]),t._v(" "),s("h2",{attrs:{id:"ナビゲーションの失敗を検出する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ナビゲーションの失敗を検出する"}},[t._v("#")]),t._v(" ナビゲーションの失敗を検出する")]),t._v(" "),s("p",[s("em",[t._v("Navigation Failures")]),t._v(" はいくつかの追加プロパティをもつ "),s("code",[t._v("Error")]),t._v(" インスタンスです。ルーターからエラーが発生したかを確認するには、 "),s("code",[t._v("isNavigationFailure")]),t._v(" 関数を使用します。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueRouter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isNavigationFailure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NavigationFailureType "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" VueRouter\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 管理画面にアクセス")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("failure")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNavigationFailure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("failure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NavigationFailureType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ユーザーに小さな通知を表示")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login in order to access the admin panel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("isNavigationFailure(failure)")]),t._v(" のように2番目のパラメータを省略すると、エラーが "),s("em",[t._v("Navigation Failure")]),t._v(" かどうかのチェックのみが行われます。")])]),t._v(" "),s("h2",{attrs:{id:"navigationfailuretype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigationfailuretype"}},[t._v("#")]),t._v(" "),s("code",[t._v("NavigationFailureType")])]),t._v(" "),s("p",[s("code",[t._v("NavigationFailureType")]),t._v(" は開発者がさまざまな種類の "),s("em",[t._v("Navigation Failures")]),t._v(" を区別するのに役立ちます。次の4つの種類があります。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("redirected")]),t._v(": 別の場所にリダイレクトするために、ナビゲーションガードの中で "),s("code",[t._v("next(newLocation)")]),t._v(" が呼び出された")]),t._v(" "),s("li",[s("code",[t._v("aborted")]),t._v(": ナビゲーションガードの中で "),s("code",[t._v("next(false)")]),t._v(" が呼び出された")]),t._v(" "),s("li",[s("code",[t._v("cancelled")]),t._v(": 現在のナビゲーションが終了する前に、新しいナビゲーションが実行された。例：ナビゲーションガード内で待機中に "),s("code",[t._v("router.push")]),t._v(" が呼び出された")]),t._v(" "),s("li",[s("code",[t._v("duplicated")]),t._v(": すでに目的の場所にいるため、ナビゲーションが妨げられた")])]),t._v(" "),s("h2",{attrs:{id:"navigation-failures-のプロパティ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigation-failures-のプロパティ"}},[t._v("#")]),t._v(" "),s("em",[t._v("Navigation Failures")]),t._v(" のプロパティ")]),t._v(" "),s("p",[t._v("全てのナビゲーションの失敗は、そのナビゲーションのターゲットと現在地を反映した "),s("code",[t._v("to")]),t._v(" と "),s("code",[t._v("from")]),t._v(" のプロパティを公開します。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 管理画面にアクセス")]),t._v("\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("failure")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNavigationFailure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("failure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NavigationFailureType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("redirected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    failure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '/admin'")]),t._v("\n    failure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '/'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("全ての場合において、 "),s("code",[t._v("to")]),t._v(" と "),s("code",[t._v("from")]),t._v(" は正規化されたルートの場所です。")])])}),[],!1,null,null,null);a.default=e.exports}}]);