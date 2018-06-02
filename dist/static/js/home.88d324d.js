webpackJsonp([37],{474:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(545),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(590),o=a(195),c=o(r.a,s.a,!1,null,null,null);e.default=c.exports},520:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(89),r=function(t){return t&&t.__esModule?t:{default:t}}(n),i=a(196);e.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,r.default)({},(0,i.mapActions)("global/user",["getUserInfo"])),computed:(0,r.default)({},(0,i.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(520),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var s=a(522),o=a(195),c=o(r.a,s.a,!1,null,null,null);e.default=c.exports},522:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"fixed-top"},[t._t("logo"),t._v(" "),a("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:t.hasLogo?"":"w-100"},[t._t("search"),t._v(" "),t.goBack?a("b-nav-item",{on:{click:function(e){t.$router.go(-1)}}},[a("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.headerTitle?a("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":t.paddingLeft}},[t._v("\n            "+t._s(t.headerTitle)+"\n        ")]):t._e(),t._v(" "),t._t("msiteTitle"),t._v(" "),t.signinUp?a("b-nav-item",{attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):a("span",{staticClass:"signin-text text-uppercase"},[t._v("SIGNIN/SIGNUP")])]):t._e(),t._v(" "),t._t("edit"),t._v(" "),t._t("changeCity"),t._v(" "),t._t("changeLogin")],2)],2)},r=[],i={render:n,staticRenderFns:r};e.a=i},545:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(198),i=n(r),s=a(521),o=n(s),c=a(135),l=n(c);e.default={data:function(){return{defaultCity:"",defaultCityID:"",hotCity:[],groupCity:{}}},mounted:function(){var t=this;l.default.defaultCity().then(function(e){t.defaultCity=e.name}),l.default.hotCity().then(function(e){t.hotCity=t.chunkArray(e,4)}),l.default.groupCity().then(function(e){t.groupCity=e})},computed:{sortGroupCity:function(){var t=this,e={};return(0,i.default)(this.groupCity).sort().forEach(function(a){var n=t.groupCity[a],r=t.chunkArray(n,4);e[a]=r}),e}},components:{headerTop:o.default},methods:{reload:function(){window.location.reload()},chunkArray:function(t,e){for(var a=[];t.length;)a.push(t.splice(0,e));return a}}}},590:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"text-light px-0",attrs:{fluid:""}},[a("div",{attrs:{id:"app-container"}},[a("header-top",{attrs:{"signin-up":"home","has-logo":"true"}},[a("b-navbar-brand",{staticClass:"p-0",attrs:{slot:"logo"},slot:"logo"},[t._v("ElE.ME")])],1),t._v(" "),a("b-container",{staticClass:"px-0 main-container",attrs:{fluid:""}},[a("b-card",{staticClass:"auto-city-card",attrs:{"no-body":""}},[a("b-card-body",[a("div",{staticClass:"city-tip d-flex flex-row align-items-center justify-content-between"},[a("span",[t._v("CURRENT CITY: ")]),t._v(" "),a("span",[t._v("IF INCORRECT, PLEASE SELECT FROM BELOW")])])]),t._v(" "),a("b-card-footer",[a("router-link",{staticClass:"d-flex flex-row align-items-center justify-content-between auto-city",attrs:{to:"/city/"+t.defaultCityID}},[a("span",[t._v(t._s(t.defaultCity))]),t._v(" "),a("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])],1)],1),t._v(" "),a("b-card",{staticClass:"text-center home-city-card",attrs:{header:"popular cities","header-class":"text-left round-0 border-0 font-weight-bold text-uppercase","body-class":"p-0"}},[a("b-container",{staticClass:"bv-example-row cities-container",attrs:{fluid:""}},t._l(t.hotCity.length,function(e){return a("b-row",{key:e},t._l(t.hotCity[e-1],function(e){return a("b-col",{key:e.id,attrs:{cols:"3"}},[a("router-link",{staticClass:"card-text-red",attrs:{to:"/city/"+e.id}},[t._v("\n                                "+t._s(e.pinyin)+"\n                            ")])],1)}))}))],1),t._v(" "),t._l(t.sortGroupCity,function(e,n,r){return a("b-card",{key:n,staticClass:"text-center home-city-card",attrs:{header:n+(0===r?" (ARRANGED IN ALPHABETICAL ORDER)":""),"header-class":"text-left round-0 border-0 font-weight-bold text-uppercase","body-class":"p-0"}},[a("b-container",{staticClass:"bv-example-row cities-container",attrs:{fluid:""}},t._l(e.length,function(n){return a("b-row",{key:n},t._l(e[n-1],function(e){return a("b-col",{key:e.id,attrs:{cols:"3"}},[a("router-link",{staticClass:"card-text",attrs:{to:"/city/"+e.id}},[t._v("\n                                "+t._s(e.pinyin)+"\n                            ")])],1)}))}))],1)})],2)],1)])},r=[],i={render:n,staticRenderFns:r};e.a=i}});