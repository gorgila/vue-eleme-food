webpackJsonp([43],{499:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(571),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var i=a(623),o=a(195),u=o(r.a,i.a,!1,null,null,null);t.default=u.exports},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(89),r=function(e){return e&&e.__esModule?e:{default:e}}(n),s=a(196);t.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,r.default)({},(0,s.mapActions)("global/user",["getUserInfo"])),computed:(0,r.default)({},(0,s.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(520),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var i=a(522),o=a(195),u=o(r.a,i.a,!1,null,null,null);t.default=u.exports},522:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{staticClass:"fixed-top"},[e._t("logo"),e._v(" "),a("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:e.hasLogo?"":"w-100"},[e._t("search"),e._v(" "),e.goBack?a("b-nav-item",{on:{click:function(t){e.$router.go(-1)}}},[a("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),e.headerTitle?a("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":e.paddingLeft}},[e._v("\n            "+e._s(e.headerTitle)+"\n        ")]):e._e(),e._v(" "),e._t("msiteTitle"),e._v(" "),e.signinUp?a("b-nav-item",{attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):a("span",{staticClass:"signin-text text-uppercase"},[e._v("SIGNIN/SIGNUP")])]):e._e(),e._v(" "),e._t("edit"),e._v(" "),e._t("changeCity"),e._v(" "),e._t("changeLogin")],2)],2)},r=[],s={render:n,staticRenderFns:r};t.a=s},571:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(521),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={components:{headerTop:r.default}}},623:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"answer-detail-container"}},[a("header-top",{attrs:{"header-title":"BALANCE Q&A","go-back":"true"}}),e._v(" "),a("b-container",{staticClass:"px-0 main-container h-100",attrs:{fluid:""}},[a("b-card",{staticClass:"answer-detail-card p-0 h-100"},[a("h4",[e._v("Q1: 使用余额的条件")]),e._v(" "),a("h6",[e._v("为了保护账户安全，使用余额前必须先绑定手机号。")]),e._v(" "),a("h4",[e._v("Q2: 余额可以怎么用?")]),e._v(" "),a("h6",[e._v("余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。")]),e._v(" "),a("h4",[e._v("Q3:我要如何提现?")]),e._v(" "),a("h6",[e._v("为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。")]),e._v(" "),a("h4",[e._v("Q4:为什么会提现失败?")]),e._v(" "),a("h6",[e._v("可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。")])])],1)],1)},r=[],s={render:n,staticRenderFns:r};t.a=s}});